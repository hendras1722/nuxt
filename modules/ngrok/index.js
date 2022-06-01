import ngrok from "ngrok";

export default function () {
  const { nuxt } = this;

  // Don't start ngrok in production
  if (nuxt.options.dev === false) {
    return;
  }

  // Read ngrok property defined in nuxt.config.js
  const options = nuxt.options.ngrok || {};
  const token =
    "29EDTh83VpeEFlNp0gm8MtWUGLU_6DUi7c6T5CSsUdbwttqph" || options.token;
  let url = null;
  // https://nuxtjs.org/docs/2.x/internals-glossary/internals-nuxt#hooks
  nuxt.hook("listen", async function (server, { port }) {
    if (token) {
      await ngrok.authtoken(token);
    }

    url = await ngrok.connect(port);

    // Add the public url to the public runtimeConfig
    nuxt.options.publicRuntimeConfig.ngrok = { url };

    // Add the public url to the Nuxt box in the CLI
    nuxt.options.cli.badgeMessages.push(`Public URL: ${url}`);
  });

  nuxt.hook("close", function () {
    url && ngrok.disconnect();
  });
}
