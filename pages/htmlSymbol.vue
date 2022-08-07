<template>
  <div class="mypage">
    <div style="position: fixed; right: 30px; top: 30px">
      <div class="text_link" @click="handleUrl('special')">
        <a href="#special">Special HTML Codes</a>
      </div>
      <div class="text_link" @click="handleUrl('reguler')">
        <a href="#reguler">Reguler HTML Character Codes</a>
      </div>
      <div class="text_link" @click="handleUrl('extra')">
        <a href="#extra">Extra Codes</a>
      </div>
      <div class="text_link" @click="handleUrl('math')">
        <a href="#math">HTML math symbols codes</a>
      </div>
      <div class="text_link" @click="handleUrl('currency')">
        <a href="#currency">Currency codes</a>
      </div>
      <div class="text_link" @click="handleUrl('intellectual')">
        <a href="#intellectual">Intellectual property codes</a>
      </div>
      <div class="text_link" @click="handleUrl('greek')">
        <a href="#greek">Greek Alpha Codes</a>
      </div>
    </div>
    <h2 id="special">Special HTML codes</h2>
    <table class="dtable">
      <thead>
        <tr>
          <th>Char</th>
          <th>
            Numeric
            <br />
            code
          </th>
          <th>
            Named
            <br />
            code
          </th>
          <th>Description</th>
        </tr>
      </thead>
      <tr>
        <td>&nbsp;</td>
        <td>&amp;#09;</td>
        <td>&nbsp;</td>
        <td>horizontal tab</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&amp;#10;</td>
        <td>&nbsp;</td>
        <td>line feed</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&amp;#13;</td>
        <td>&nbsp;</td>
        <td>carriage return / enter</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&amp;#160;</td>
        <td>&amp;nbsp;</td>
        <td>non-breaking space</td>
      </tr>
    </table>
    <h3 id="reguler">Regular HTML character codes</h3>
    <table class="dtable">
      <thead>
        <tr>
          <th>Char</th>
          <th>
            Numeric
            <br />
            code
          </th>
          <th>
            Named
            <br />
            code
          </th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&nbsp;</td>
          <td>
            <div id="space"></div>
            &amp;#32;
          </td>
          <td>&nbsp;</td>
          <td>space</td>
        </tr>
        <tr>
          <td>!</td>
          <td>&amp;#33;</td>
          <td>&nbsp;</td>
          <td>exclamation mark</td>
        </tr>
        <tr>
          <td>&quot;</td>
          <td>&amp;#34;</td>
          <td>&amp;quot;</td>
          <td>double quote</td>
        </tr>
        <tr>
          <td>#</td>
          <td>&amp;#35;</td>
          <td>&nbsp;</td>
          <td>number</td>
        </tr>
        <tr>
          <td>$</td>
          <td>&amp;#36;</td>
          <td>&nbsp;</td>
          <td>dollar</td>
        </tr>
        <tr>
          <td>%</td>
          <td>&amp;#37;</td>
          <td>&nbsp;</td>
          <td>percent</td>
        </tr>
        <tr>
          <td>&amp;</td>
          <td>&amp;#38;</td>
          <td>&amp;amp;</td>
          <td>ampersand</td>
        </tr>
        <tr>
          <td>'</td>
          <td>&amp;#39;</td>
          <td>&amp;apos;</td>
          <td>single quote</td>
        </tr>
        <tr>
          <td>(</td>
          <td>&amp;#40;</td>
          <td>&nbsp;</td>
          <td>left parenthesis</td>
        </tr>
        <tr>
          <td>)</td>
          <td>&amp;#41;</td>
          <td>&nbsp;</td>
          <td>right parenthesis</td>
        </tr>
        <tr>
          <td>*</td>
          <td>&amp;#42;</td>
          <td>&nbsp;</td>
          <td>asterisk</td>
        </tr>
        <tr>
          <td>+</td>
          <td>&amp;#43;</td>
          <td>&nbsp;</td>
          <td>plus</td>
        </tr>
        <tr>
          <td>,</td>
          <td>&amp;#44;</td>
          <td>&nbsp;</td>
          <td>comma</td>
        </tr>
        <tr>
          <td>-</td>
          <td>&amp;#45;</td>
          <td>&nbsp;</td>
          <td>minus</td>
        </tr>
        <tr>
          <td>.</td>
          <td>&amp;#46;</td>
          <td>&nbsp;</td>
          <td>period</td>
        </tr>
        <tr>
          <td>/</td>
          <td>&amp;#47;</td>
          <td>&nbsp;</td>
          <td>slash</td>
        </tr>
        <tr>
          <td>0</td>
          <td>
            <div id="number"></div>
            &amp;#48;
          </td>
          <td>&nbsp;</td>
          <td>zero</td>
        </tr>
        <tr>
          <td>1</td>
          <td>&amp;#49;</td>
          <td>&nbsp;</td>
          <td>one</td>
        </tr>
        <tr>
          <td>2</td>
          <td>&amp;#50;</td>
          <td>&nbsp;</td>
          <td>two</td>
        </tr>
        <tr>
          <td>3</td>
          <td>&amp;#51;</td>
          <td>&nbsp;</td>
          <td>three</td>
        </tr>
        <tr>
          <td>4</td>
          <td>&amp;#52;</td>
          <td>&nbsp;</td>
          <td>four</td>
        </tr>
        <tr>
          <td>5</td>
          <td>&amp;#53;</td>
          <td>&nbsp;</td>
          <td>five</td>
        </tr>
        <tr>
          <td>6</td>
          <td>&amp;#54;</td>
          <td>&nbsp;</td>
          <td>six</td>
        </tr>
        <tr>
          <td>7</td>
          <td>&amp;#55;</td>
          <td>&nbsp;</td>
          <td>seven</td>
        </tr>
        <tr>
          <td>8</td>
          <td>&amp;#56;</td>
          <td>&nbsp;</td>
          <td>eight</td>
        </tr>
        <tr>
          <td>9</td>
          <td>&amp;#57;</td>
          <td>&nbsp;</td>
          <td>nine</td>
        </tr>
        <tr>
          <td>:</td>
          <td>&amp;#58;</td>
          <td>&nbsp;</td>
          <td>colon</td>
        </tr>
        <tr>
          <td>;</td>
          <td>&amp;#59;</td>
          <td>&nbsp;</td>
          <td>semicolon</td>
        </tr>
        <tr>
          <td>&lt;</td>
          <td>&amp;#60;</td>
          <td>&amp;lt;</td>
          <td>less than</td>
        </tr>
        <tr>
          <td>=</td>
          <td>&amp;#61;</td>
          <td>&nbsp;</td>
          <td>equality sign</td>
        </tr>
        <tr>
          <td>&gt;</td>
          <td>&amp;#62;</td>
          <td>&amp;gt;</td>
          <td>greater than</td>
        </tr>
        <tr>
          <td>?</td>
          <td>&amp;#63;</td>
          <td>&nbsp;</td>
          <td>question mark</td>
        </tr>
        <tr>
          <td>@</td>
          <td>&amp;#64;</td>
          <td>&nbsp;</td>
          <td>at sign</td>
        </tr>
        <tr>
          <td>A</td>
          <td>
            <div id="letter"></div>
            &amp;#65;
          </td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>B</td>
          <td>&amp;#66;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>C</td>
          <td>&amp;#67;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>D</td>
          <td>&amp;#68;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>E</td>
          <td>&amp;#69;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>F</td>
          <td>&amp;#70;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>G</td>
          <td>&amp;#71;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>H</td>
          <td>&amp;#72;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>I</td>
          <td>&amp;#73;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>J</td>
          <td>&amp;#74;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>K</td>
          <td>&amp;#75;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>L</td>
          <td>&amp;#76;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>M</td>
          <td>&amp;#77;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>N</td>
          <td>&amp;#78;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>O</td>
          <td>&amp;#79;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>P</td>
          <td>&amp;#80;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Q</td>
          <td>&amp;#81;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>R</td>
          <td>&amp;#82;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>S</td>
          <td>&amp;#83;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>T</td>
          <td>&amp;#84;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>U</td>
          <td>&amp;#85;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>V</td>
          <td>&amp;#86;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>W</td>
          <td>&amp;#87;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>X</td>
          <td>&amp;#88;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Y</td>
          <td>&amp;#89;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Z</td>
          <td>&amp;#90;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>[</td>
          <td>&amp;#91;</td>
          <td>&nbsp;</td>
          <td>left square bracket</td>
        </tr>
        <tr>
          <td>\</td>
          <td>&amp;#92;</td>
          <td>&nbsp;</td>
          <td>backslash</td>
        </tr>
        <tr>
          <td>]</td>
          <td>&amp;#93;</td>
          <td>&nbsp;</td>
          <td>right square bracket</td>
        </tr>
        <tr>
          <td>^</td>
          <td>&amp;#94;</td>
          <td>&nbsp;</td>
          <td>caret / circumflex</td>
        </tr>
        <tr>
          <td>_</td>
          <td>&amp;#95;</td>
          <td>&nbsp;</td>
          <td>underscore</td>
        </tr>
        <tr>
          <td>`</td>
          <td>&amp;#96;</td>
          <td>&nbsp;</td>
          <td>grave / accent</td>
        </tr>
        <tr>
          <td>a</td>
          <td>&amp;#97;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>b</td>
          <td>&amp;#98;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>c</td>
          <td>&amp;#99;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>d</td>
          <td>&amp;#100;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>e</td>
          <td>&amp;#101;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>f</td>
          <td>&amp;#102;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>g</td>
          <td>&amp;#103;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>h</td>
          <td>&amp;#104;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>i</td>
          <td>&amp;#105;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>j</td>
          <td>&amp;#106;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>k</td>
          <td>&amp;#107;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>l</td>
          <td>&amp;#108;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>m</td>
          <td>&amp;#109;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>n</td>
          <td>&amp;#110;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>o</td>
          <td>&amp;#111;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>p</td>
          <td>&amp;#112;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>q</td>
          <td>&amp;#113;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>r</td>
          <td>&amp;#114;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>s</td>
          <td>&amp;#115;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>t</td>
          <td>&amp;#116;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>u</td>
          <td>&amp;#117</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>v</td>
          <td>&amp;#118;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>w</td>
          <td>&amp;#119;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>x</td>
          <td>&amp;#120;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>y</td>
          <td>&amp;#121;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>z</td>
          <td>&amp;#122;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>{</td>
          <td>&amp;#123;</td>
          <td>&nbsp;</td>
          <td>left curly bracket</td>
        </tr>
        <tr>
          <td>|</td>
          <td>&amp;#124;</td>
          <td>&nbsp;</td>
          <td>vertical bar</td>
        </tr>
        <tr>
          <td>}</td>
          <td>&amp;#125;</td>
          <td>&nbsp;</td>
          <td>right curly bracket</td>
        </tr>
        <tr>
          <td>~</td>
          <td>&amp;#126;</td>
          <td>&nbsp;</td>
          <td>tilde</td>
        </tr>
      </tbody>
    </table>
    <h2 id="extra">Extra codes</h2>
    <table class="dtable">
      <thead>
        <tr>
          <th>Char</th>
          <th>
            Numeric
            <br />
            code
          </th>
          <th>
            Named
            <br />
            code
          </th>
          <th>Description</th>
        </tr>
      </thead>
      <tr>
        <td>&nbsp;</td>
        <td>&amp;#160;</td>
        <td>&amp;nbsp;</td>
        <td>non-breaking space</td>
      </tr>
      <tr>
        <td>&#161;</td>
        <td>&amp;#161;</td>
        <td>&amp;iexcl;</td>
        <td>inverted exclamation mark</td>
      </tr>
      <tr>
        <td>&#162;</td>
        <td>&amp;#162;</td>
        <td>&amp;cent;</td>
        <td>cent sign</td>
      </tr>
      <tr>
        <td>&#163;</td>
        <td>&amp;#163;</td>
        <td>&amp;pound;</td>
        <td>pound sign</td>
      </tr>
      <tr>
        <td>&#164;</td>
        <td>&amp;#164;</td>
        <td>&amp;curren;</td>
        <td>currency sign</td>
      </tr>
      <tr>
        <td>&#165;</td>
        <td>&amp;#165;</td>
        <td>&amp;yen;</td>
        <td>yen sign</td>
      </tr>
      <tr>
        <td>&#166;</td>
        <td>&amp;#166;</td>
        <td>&amp;brvbar;</td>
        <td>broken bar</td>
      </tr>
      <tr>
        <td>&#167;</td>
        <td>&amp;#167;</td>
        <td>&amp;sect;</td>
        <td>section sign</td>
      </tr>
      <tr>
        <td>&#168;</td>
        <td>&amp;#168;</td>
        <td>&amp;uml;</td>
        <td>diaeresis</td>
      </tr>
      <tr>
        <td>&#169;</td>
        <td>&amp;#169;</td>
        <td>&amp;copy;</td>
        <td>copyright sign</td>
      </tr>
      <tr>
        <td>&#170;</td>
        <td>&amp;#170;</td>
        <td>&amp;ordf;</td>
        <td>feminine ordinal indicator</td>
      </tr>
      <tr>
        <td>&#171;</td>
        <td>&amp;#171;</td>
        <td>&amp;laquo;</td>
        <td>left pointing guillemet</td>
      </tr>
      <tr>
        <td>&#172;</td>
        <td>&amp;#172;</td>
        <td>&amp;not;</td>
        <td>not sign</td>
      </tr>
      <tr>
        <td>&#173;</td>
        <td>&amp;#173;</td>
        <td>&amp;shy;</td>
        <td>soft hyphen</td>
      </tr>
      <tr>
        <td>&#174;</td>
        <td>&amp;#174;</td>
        <td>&amp;reg;</td>
        <td>registered sign</td>
      </tr>
      <tr>
        <td>&#175;</td>
        <td>&amp;#175;</td>
        <td>&amp;macr;</td>
        <td>macron</td>
      </tr>
      <tr>
        <td>&#176;</td>
        <td>&amp;#176;</td>
        <td>&amp;deg;</td>
        <td>degree sign</td>
      </tr>
      <tr>
        <td>&#177;</td>
        <td>&amp;#177;</td>
        <td>&amp;plusmn;</td>
        <td>plus-minus sign</td>
      </tr>
      <tr>
        <td>&#178;</td>
        <td>&amp;#178;</td>
        <td>&amp;sup2;</td>
        <td>superscript two</td>
      </tr>
      <tr>
        <td>&#179;</td>
        <td>&amp;#179;</td>
        <td>&amp;sup3;</td>
        <td>superscript three</td>
      </tr>
      <tr>
        <td>&#180;</td>
        <td>&amp;#180;</td>
        <td>&amp;acute;</td>
        <td>acute accent</td>
      </tr>
      <tr>
        <td>&#181;</td>
        <td>&amp;#181;</td>
        <td>&amp;micro;</td>
        <td>micro sign</td>
      </tr>
      <tr>
        <td>&#182;</td>
        <td>&amp;#182;</td>
        <td>&amp;para;</td>
        <td>paragraph sign</td>
      </tr>
      <tr>
        <td>&#183;</td>
        <td>&amp;#183;</td>
        <td>&amp;middot;</td>
        <td>middle dot</td>
      </tr>
      <tr>
        <td>&#184;</td>
        <td>&amp;#184;</td>
        <td>&amp;cedil;</td>
        <td>spacing cedilla</td>
      </tr>
      <tr>
        <td>&#185;</td>
        <td>&amp;#185;</td>
        <td>&amp;sup1;</td>
        <td>superscript one</td>
      </tr>
      <tr>
        <td>&#186;</td>
        <td>&amp;#186;</td>
        <td>&amp;ordm;</td>
        <td>masculine ordinal indicator</td>
      </tr>
      <tr>
        <td>&#187;</td>
        <td>&amp;#187;</td>
        <td>&amp;raquo;</td>
        <td>right pointing guillemet</td>
      </tr>
      <tr>
        <td>&#188;</td>
        <td>&amp;#188;</td>
        <td>&amp;frac14;</td>
        <td>fraction one quarter</td>
      </tr>
      <tr>
        <td>&#189;</td>
        <td>&amp;#189;</td>
        <td>&amp;frac12;</td>
        <td>fraction one half</td>
      </tr>
      <tr>
        <td>&#190;</td>
        <td>&amp;#190;</td>
        <td>&amp;frac34;</td>
        <td>fraction three quarters</td>
      </tr>
      <tr>
        <td>&#191;</td>
        <td>&amp;#191;</td>
        <td>&amp;iquest;</td>
        <td>inverted question mark</td>
      </tr>
      <tr>
        <td>&#192;</td>
        <td>&amp;#192;</td>
        <td>&amp;Agrave;</td>
        <td>&nbsp;capital&nbsp; A with grave</td>
      </tr>
      <tr>
        <td>&#193;</td>
        <td>&amp;#193;</td>
        <td>&amp;Aacute;</td>
        <td>&nbsp;capital&nbsp; A with acute</td>
      </tr>
      <tr>
        <td>&#194;</td>
        <td>&amp;#194;</td>
        <td>&amp;Acirc;</td>
        <td>&nbsp;capital&nbsp; A with circumflex</td>
      </tr>
      <tr>
        <td>&#195;</td>
        <td>&amp;#195;</td>
        <td>&amp;Atilde;</td>
        <td>&nbsp;capital&nbsp; A with tilde</td>
      </tr>
      <tr>
        <td>&#196;</td>
        <td>&amp;#196;</td>
        <td>&amp;Auml;</td>
        <td>&nbsp;capital&nbsp; A with diaeresis</td>
      </tr>
      <tr>
        <td>&#197;</td>
        <td>&amp;#197;</td>
        <td>&amp;Aring;</td>
        <td>&nbsp;capital&nbsp; A with ring</td>
      </tr>
      <tr>
        <td>&#198;</td>
        <td>&amp;#198;</td>
        <td>&amp;AElig;</td>
        <td>&nbsp;capital&nbsp; AE</td>
      </tr>
      <tr>
        <td>&#199;</td>
        <td>&amp;#199;</td>
        <td>&amp;Ccedil;</td>
        <td>&nbsp;capital&nbsp; C with cedilla</td>
      </tr>
      <tr>
        <td>&#200;</td>
        <td>&amp;#200;</td>
        <td>&amp;Egrave;</td>
        <td>&nbsp;capital&nbsp; E with grave</td>
      </tr>
      <tr>
        <td>&#201;</td>
        <td>&amp;#201;</td>
        <td>&amp;Eacute;</td>
        <td>&nbsp;capital&nbsp; E with acute</td>
      </tr>
      <tr>
        <td>&#202;</td>
        <td>&amp;#202;</td>
        <td>&amp;Ecirc;</td>
        <td>&nbsp;capital&nbsp; E with circumflex</td>
      </tr>
      <tr>
        <td>&#203;</td>
        <td>&amp;#203;</td>
        <td>&amp;Euml;</td>
        <td>&nbsp;capital&nbsp; E with diaeresis</td>
      </tr>
      <tr>
        <td>&#204;</td>
        <td>&amp;#204;</td>
        <td>&amp;Igrave;</td>
        <td>&nbsp;capital&nbsp; I with grave</td>
      </tr>
      <tr>
        <td>&#205;</td>
        <td>&amp;#205;</td>
        <td>&amp;Iacute;</td>
        <td>&nbsp;capital&nbsp; I with acute</td>
      </tr>
      <tr>
        <td>&#206;</td>
        <td>&amp;#206;</td>
        <td>&amp;Icirc;</td>
        <td>&nbsp;capital&nbsp; I with circumflex</td>
      </tr>
      <tr>
        <td>&#207;</td>
        <td>&amp;#207;</td>
        <td>&amp;Iuml;</td>
        <td>&nbsp;capital&nbsp; I with diaeresis</td>
      </tr>
      <tr>
        <td>&#208;</td>
        <td>&amp;#208;</td>
        <td>&amp;ETH;</td>
        <td>&nbsp;capital&nbsp; ETH</td>
      </tr>
      <tr>
        <td>&#209;</td>
        <td>&amp;#209;</td>
        <td>&amp;Ntilde;</td>
        <td>&nbsp;capital&nbsp; N with tilde</td>
      </tr>
      <tr>
        <td>&#210;</td>
        <td>&amp;#210;</td>
        <td>&amp;Ograve;</td>
        <td>&nbsp;capital&nbsp; O with grave</td>
      </tr>
      <tr>
        <td>&#211;</td>
        <td>&amp;#211;</td>
        <td>&amp;Oacute;</td>
        <td>&nbsp;capital&nbsp; O with acute</td>
      </tr>
      <tr>
        <td>&#212;</td>
        <td>&amp;#212;</td>
        <td>&amp;Ocirc;</td>
        <td>&nbsp;capital&nbsp; O with circumflex</td>
      </tr>
      <tr>
        <td>&#213;</td>
        <td>&amp;#213;</td>
        <td>&amp;Otilde;</td>
        <td>&nbsp;capital&nbsp; O with tilde</td>
      </tr>
      <tr>
        <td>&#214;</td>
        <td>&amp;#214;</td>
        <td>&amp;Ouml;</td>
        <td>&nbsp;capital&nbsp; O with diaeresis</td>
      </tr>
      <tr>
        <td>&#215;</td>
        <td>&amp;#215;</td>
        <td>&amp;times;</td>
        <td>multiplication sign</td>
      </tr>
      <tr>
        <td>&#216;</td>
        <td>&amp;#216;</td>
        <td>&amp;Oslash;</td>
        <td>&nbsp;capital&nbsp; O with stroke</td>
      </tr>
      <tr>
        <td>&#217;</td>
        <td>&amp;#217;</td>
        <td>&amp;Ugrave;</td>
        <td>&nbsp;capital&nbsp; U with grave</td>
      </tr>
      <tr>
        <td>&#218;</td>
        <td>&amp;#218;</td>
        <td>&amp;Uacute;</td>
        <td>&nbsp;capital&nbsp; U with acute</td>
      </tr>
      <tr>
        <td>&#219;</td>
        <td>&amp;#219;</td>
        <td>&amp;Ucirc;</td>
        <td>&nbsp;capital&nbsp; U with circumflex</td>
      </tr>
      <tr>
        <td>&#220;</td>
        <td>&amp;#220;</td>
        <td>&amp;Uuml;</td>
        <td>&nbsp;capital&nbsp; U with diaeresis</td>
      </tr>
      <tr>
        <td>&#221;</td>
        <td>&amp;#221;</td>
        <td>&amp;Yacute;</td>
        <td>&nbsp;capital&nbsp; Y with acute</td>
      </tr>
      <tr>
        <td>&#222;</td>
        <td>&amp;#222;</td>
        <td>&amp;THORN;</td>
        <td>&nbsp;capital&nbsp; THORN</td>
      </tr>
      <tr>
        <td>&#223;</td>
        <td>&amp;#223;</td>
        <td>&amp;szlig;</td>
        <td>&nbsp;small&nbsp; sharp s</td>
      </tr>
      <tr>
        <td>&#224;</td>
        <td>&amp;#224;</td>
        <td>&amp;agrave;</td>
        <td>&nbsp;small&nbsp; a with grave</td>
      </tr>
      <tr>
        <td>&#225;</td>
        <td>&amp;#225;</td>
        <td>&amp;aacute;</td>
        <td>&nbsp;small&nbsp; a with acute</td>
      </tr>
      <tr>
        <td>&#226;</td>
        <td>&amp;#226;</td>
        <td>&amp;;</td>
        <td>&nbsp;small&nbsp; a with circumflex</td>
      </tr>
      <tr>
        <td>&#227;</td>
        <td>&amp;#227;</td>
        <td>&amp;atilde;</td>
        <td>&nbsp;small&nbsp; a with tilde</td>
      </tr>
      <tr>
        <td>&#228;</td>
        <td>&amp;#228;</td>
        <td>&amp;auml;</td>
        <td>&nbsp;small&nbsp; a with diaeresis</td>
      </tr>
      <tr>
        <td>&#229;</td>
        <td>&amp;#229;</td>
        <td>&amp;aring;</td>
        <td>&nbsp;small&nbsp; a with ring above</td>
      </tr>
      <tr>
        <td>&#230;</td>
        <td>&amp;#230;</td>
        <td>&amp;aelig;</td>
        <td>&nbsp;small&nbsp; ae</td>
      </tr>
      <tr>
        <td>&#231;</td>
        <td>&amp;#231;</td>
        <td>&amp;ccedil;</td>
        <td>&nbsp;small&nbsp; c with cedilla</td>
      </tr>
      <tr>
        <td>&#232;</td>
        <td>&amp;#232;</td>
        <td>&amp;egrave;</td>
        <td>&nbsp;small&nbsp; e with grave</td>
      </tr>
      <tr>
        <td>&#233;</td>
        <td>&amp;#233;</td>
        <td>&amp;eacute;</td>
        <td>&nbsp;small&nbsp; e with acute</td>
      </tr>
      <tr>
        <td>&#234;</td>
        <td>&amp;#234;</td>
        <td>&amp;ecirc;</td>
        <td>&nbsp;small&nbsp; e with circumflex</td>
      </tr>
      <tr>
        <td>&#235;</td>
        <td>&amp;#235;</td>
        <td>&amp;euml;</td>
        <td>&nbsp;small&nbsp; e with diaeresis</td>
      </tr>
      <tr>
        <td>&#236;</td>
        <td>&amp;#236;</td>
        <td>&amp;igrave;</td>
        <td>&nbsp;small&nbsp; i with grave</td>
      </tr>
      <tr>
        <td>&#237;</td>
        <td>&amp;#237;</td>
        <td>&amp;iacute;</td>
        <td>&nbsp;small&nbsp; i with acute</td>
      </tr>
      <tr>
        <td>&#238;</td>
        <td>&amp;#238;</td>
        <td>&amp;icirc;</td>
        <td>&nbsp;small&nbsp; i with circumflex</td>
      </tr>
      <tr>
        <td>&#239;</td>
        <td>&amp;#239;</td>
        <td>&amp;iuml;</td>
        <td>&nbsp;small&nbsp; i with diaeresis</td>
      </tr>
      <tr>
        <td>&#240;</td>
        <td>&amp;#240;</td>
        <td>&amp;eth;</td>
        <td>&nbsp;small&nbsp; eth</td>
      </tr>
      <tr>
        <td>&#241;</td>
        <td>&amp;#241;</td>
        <td>&amp;ntilde;</td>
        <td>&nbsp;small&nbsp; n with tilde</td>
      </tr>
      <tr>
        <td>&#242;</td>
        <td>&amp;#242;</td>
        <td>&amp;ograve;</td>
        <td>&nbsp;small&nbsp; o with grave</td>
      </tr>
      <tr>
        <td>&#243;</td>
        <td>&amp;#243;</td>
        <td>&amp;oacute;</td>
        <td>&nbsp;small&nbsp; o with acute</td>
      </tr>
      <tr>
        <td>&#244;</td>
        <td>&amp;#244;</td>
        <td>&amp;ocirc;</td>
        <td>&nbsp;small&nbsp; o with circumflex</td>
      </tr>
      <tr>
        <td>&#245;</td>
        <td>&amp;#245;</td>
        <td>&amp;otilde;</td>
        <td>&nbsp;small&nbsp; o with tilde</td>
      </tr>
      <tr>
        <td>&#246;</td>
        <td>&amp;#246;</td>
        <td>&amp;ouml;</td>
        <td>&nbsp;small&nbsp; o with diaeresis</td>
      </tr>
      <tr>
        <td>&#247;</td>
        <td>&amp;#247;</td>
        <td>&amp;divide;</td>
        <td>division sign</td>
      </tr>
      <tr>
        <td>&#248;</td>
        <td>&amp;#248;</td>
        <td>&amp;oslash;</td>
        <td>&nbsp;small&nbsp; o with stroke</td>
      </tr>
      <tr>
        <td>&#249;</td>
        <td>&amp;#249;</td>
        <td>&amp;ugrave;</td>
        <td>&nbsp;small&nbsp; u with grave</td>
      </tr>
      <tr>
        <td>&#250;</td>
        <td>&amp;#250;</td>
        <td>&amp;uacute;</td>
        <td>&nbsp;small&nbsp; u with acute</td>
      </tr>
      <tr>
        <td>&#251;</td>
        <td>&amp;#251;</td>
        <td>&amp;ucirc;</td>
        <td>&nbsp;small&nbsp; u with circumflex</td>
      </tr>
      <tr>
        <td>&#252;</td>
        <td>&amp;#252;</td>
        <td>&amp;uuml;</td>
        <td>&nbsp;small&nbsp; u with diaeresis</td>
      </tr>
      <tr>
        <td>&#253;</td>
        <td>&amp;#253;</td>
        <td>&amp;yacute;</td>
        <td>&nbsp;small&nbsp; y with acute</td>
      </tr>
      <tr>
        <td>&#254;</td>
        <td>&amp;#254;</td>
        <td>&amp;thorn;</td>
        <td>&nbsp;small&nbsp; thorn</td>
      </tr>
      <tr>
        <td>&#255;</td>
        <td>&amp;#255;</td>
        <td>&amp;yuml;</td>
        <td>&nbsp;small&nbsp; y with diaeresis</td>
      </tr>
    </table>
    <h2 id="math">HTML math symbols codes</h2>
    <table class="dtable">
      <thead>
        <tr>
          <th>Char</th>
          <th>
            Numeric
            <br />
            code
          </th>
          <th>
            Named
            <br />
            code
          </th>
          <th>Description</th>
        </tr>
      </thead>
      <tr>
        <td>&amp;</td>
        <td>&amp;#38;</td>
        <td>&amp;amp;</td>
        <td>ampersand</td>
      </tr>
      <tr>
        <td>&bull;</td>
        <td>&amp;#8226;</td>
        <td>&amp;bull;</td>
        <td>bullet</td>
      </tr>
      <tr>
        <td>&#9702;</td>
        <td>&amp;#9702;</td>
        <td>&nbsp;</td>
        <td>white bullet</td>
      </tr>
      <tr>
        <td>&#8729;</td>
        <td>&amp;#8729;</td>
        <td>&nbsp;</td>
        <td>bullet operator</td>
      </tr>
      <tr>
        <td>&#8227;</td>
        <td>&amp;#8227;</td>
        <td>&nbsp;</td>
        <td>triangular bullet</td>
      </tr>
      <tr>
        <td>&#8259;</td>
        <td>&amp;#8259;</td>
        <td>&nbsp;</td>
        <td>hyphen bullet</td>
      </tr>
      <tr>
        <td>&deg;</td>
        <td>&amp;#176;</td>
        <td>&amp;deg;</td>
        <td>degree</td>
      </tr>
      <tr>
        <td>&#8734;</td>
        <td>&amp;#8734;</td>
        <td>&amp;infin;</td>
        <td>infinity</td>
      </tr>
      <tr>
        <td>&permil;</td>
        <td>&amp;#8240;</td>
        <td>&amp;permil;</td>
        <td>per-mille</td>
      </tr>
      <tr>
        <td>&sdot;</td>
        <td>&amp;#8901;</td>
        <td>&amp;sdot;</td>
        <td>multiplication dot</td>
      </tr>
      <tr>
        <td>&plusmn;</td>
        <td>&amp;#177;</td>
        <td>&amp;plusmn;</td>
        <td>plus-minus</td>
      </tr>
      <tr>
        <td>&dagger;</td>
        <td>&amp;#8224;</td>
        <td>&amp;dagger;</td>
        <td>hermitian</td>
      </tr>
      <tr>
        <td>&mdash;</td>
        <td>&amp;#8212;</td>
        <td>&amp;mdash;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&not;</td>
        <td>&amp;#172;</td>
        <td>&amp;not;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&micro;</td>
        <td>&amp;#181;</td>
        <td>&amp;micro;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&perp;</td>
        <td>&amp;#8869;</td>
        <td>&amp;perp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&par;</td>
        <td>&amp;#8741;</td>
        <td>&amp;par;</td>
        <td>&nbsp;</td>
      </tr>
    </table>
    <h2 id="currency">Currency codes</h2>
    <table class="dtable">
      <thead>
        <tr>
          <th>Char</th>
          <th>
            Numeric
            <br />
            code
          </th>
          <th>
            Named
            <br />
            code
          </th>
          <th>Description</th>
        </tr>
      </thead>
      <tr>
        <td>$</td>
        <td>&amp;#36;</td>
        <td>&nbsp;</td>
        <td>dollar</td>
      </tr>
      <tr>
        <td>&euro;</td>
        <td>&amp;#8364;</td>
        <td>&amp;euro;</td>
        <td>euro</td>
      </tr>
      <tr>
        <td>&pound;</td>
        <td>&amp;#163;</td>
        <td>&amp;pound;</td>
        <td>pound</td>
      </tr>
      <tr>
        <td>&yen;</td>
        <td>&amp;#165;</td>
        <td>&amp;yen;</td>
        <td>yen / yuan</td>
      </tr>
      <tr>
        <td>&cent;</td>
        <td>&amp;#162;</td>
        <td>&amp;cent;</td>
        <td>cent</td>
      </tr>
      <tr>
        <td>&#8377;</td>
        <td>&amp;#8377;</td>
        <td>&nbsp;</td>
        <td>indian Rupee</td>
      </tr>
      <tr>
        <td>&#8360;</td>
        <td>&amp;#8360;</td>
        <td>&nbsp;</td>
        <td>rupee</td>
      </tr>
      <tr>
        <td>&#8369;</td>
        <td>&amp;#8369;</td>
        <td>&nbsp;</td>
        <td>peso</td>
      </tr>
      <tr>
        <td>&#8361;</td>
        <td>&amp;#8361;</td>
        <td>&nbsp;</td>
        <td>korean won</td>
      </tr>
      <tr>
        <td>&#3647;</td>
        <td>&amp;#3647;</td>
        <td>&nbsp;</td>
        <td>thai baht</td>
      </tr>
      <tr>
        <td>&#8363;</td>
        <td>&amp;#8363;</td>
        <td>&nbsp;</td>
        <td>dong</td>
      </tr>
      <tr>
        <td>&#8362;</td>
        <td>&amp;#8362;</td>
        <td>&nbsp;</td>
        <td>shekel</td>
      </tr>
    </table>
    <h2 id="intellectual">Intellectual property codes</h2>
    <table class="dtable">
      <thead>
        <tr>
          <th>Char</th>
          <th>
            Numeric
            <br />
            code
          </th>
          <th>
            Named
            <br />
            code
          </th>
          <th>Description</th>
        </tr>
      </thead>
      <tr>
        <td>&copy;</td>
        <td>&amp;#169;</td>
        <td>&amp;copy;</td>
        <td>copyright</td>
      </tr>
      <tr>
        <td>&reg;</td>
        <td>&amp;#174;</td>
        <td>&amp;reg;</td>
        <td>registered trademark</td>
      </tr>
      <tr>
        <td>&#8471;</td>
        <td>&amp;#8471;</td>
        <td>&nbsp;</td>
        <td>sound recording copyright</td>
      </tr>
      <tr>
        <td>&trade;</td>
        <td>&amp;#8482;</td>
        <td>&amp;trade;</td>
        <td>trademark</td>
      </tr>
      <tr>
        <td>&#8480;</td>
        <td>&amp;#8480;</td>
        <td>&nbsp;</td>
        <td>service mark</td>
      </tr>
    </table>
    <h2 id="greek">
      <div id="greek"></div>
      <div>Greek alphabet</div>
      codes
    </h2>
    <table class="dtable">
      <thead>
        <tr>
          <th>Char</th>
          <th>
            Numeric
            <br />
            code
          </th>
          <th>
            Named
            <br />
            code
          </th>
          <th>Description</th>
        </tr>
      </thead>
      <tr>
        <td>&#945;</td>
        <td>&amp;#945;</td>
        <td>&amp;alpha;</td>
        <td>small alpha</td>
      </tr>
      <tr>
        <td>&#946;</td>
        <td>&amp;#946;</td>
        <td>&amp;beta;</td>
        <td>small beta</td>
      </tr>
      <tr>
        <td>&#947;</td>
        <td>&amp;#947;</td>
        <td>&amp;gamma;</td>
        <td>small gamma</td>
      </tr>
      <tr>
        <td>&#948;</td>
        <td>&amp;#948;</td>
        <td>&amp;delta;</td>
        <td>small delta</td>
      </tr>
      <tr>
        <td>&#949;</td>
        <td>&amp;#949;</td>
        <td>&amp;epsilon;</td>
        <td>small epsilon</td>
      </tr>
      <tr>
        <td>&#950;</td>
        <td>&amp;#950;</td>
        <td>&amp;zeta;</td>
        <td>small zeta</td>
      </tr>
      <tr>
        <td>&#951;</td>
        <td>&amp;#951;</td>
        <td>&amp;eta;</td>
        <td>small eta</td>
      </tr>
      <tr>
        <td>&#952;</td>
        <td>&amp;#952;</td>
        <td>&amp;theta;</td>
        <td>small theta</td>
      </tr>
      <tr>
        <td>&#953;</td>
        <td>&amp;#953;</td>
        <td>&amp;iota;</td>
        <td>small iota</td>
      </tr>
      <tr>
        <td>&#954;</td>
        <td>&amp;#954;</td>
        <td>&amp;kappa;</td>
        <td>small kappa</td>
      </tr>
      <tr>
        <td>&#955;</td>
        <td>&amp;#955;</td>
        <td>&amp;lambda;</td>
        <td>small lambda</td>
      </tr>
      <tr>
        <td>&#956;</td>
        <td>&amp;#956;</td>
        <td>&amp;mu;</td>
        <td>small mu</td>
      </tr>
      <tr>
        <td>&#957;</td>
        <td>&amp;#957;</td>
        <td>&amp;nu;</td>
        <td>small nu</td>
      </tr>
      <tr>
        <td>&#958;</td>
        <td>&amp;#958;</td>
        <td>&amp;xi;</td>
        <td>small xi</td>
      </tr>
      <tr>
        <td>&#959;</td>
        <td>&amp;#959;</td>
        <td>&amp;omicron;</td>
        <td>small omicron</td>
      </tr>
      <tr>
        <td>&#960;</td>
        <td>&amp;#960;</td>
        <td>&amp;pi;</td>
        <td>small pi</td>
      </tr>
      <tr>
        <td>&#961;</td>
        <td>&amp;#961;</td>
        <td>&amp;rho;</td>
        <td>small rho</td>
      </tr>
      <tr>
        <td>&#963;</td>
        <td>&amp;#963;</td>
        <td>&amp;sigma;</td>
        <td>small sigma</td>
      </tr>
      <tr>
        <td>&#964;</td>
        <td>&amp;#964;</td>
        <td>&amp;tau;</td>
        <td>small tau</td>
      </tr>
      <tr>
        <td>&#965;</td>
        <td>&amp;#965;</td>
        <td>&amp;upsilon;</td>
        <td>small upsilon</td>
      </tr>
      <tr>
        <td>&#966;</td>
        <td>&amp;#966;</td>
        <td>&amp;phi;</td>
        <td>small phi</td>
      </tr>
      <tr>
        <td>&#967;</td>
        <td>&amp;#967;</td>
        <td>&amp;chi;</td>
        <td>small chi</td>
      </tr>
      <tr>
        <td>&#968;</td>
        <td>&amp;#968;</td>
        <td>&amp;psi;</td>
        <td>small psi</td>
      </tr>
      <tr>
        <td>&#969;</td>
        <td>&amp;#969;</td>
        <td>&amp;omega;</td>
        <td>small omega</td>
      </tr>
      <tr>
        <td>&#913;</td>
        <td>&amp;#913;</td>
        <td>&amp;Alpha;</td>
        <td>capital alpha</td>
      </tr>
      <tr>
        <td>&#914;</td>
        <td>&amp;#914;</td>
        <td>&amp;Beta;</td>
        <td>capital beta</td>
      </tr>
      <tr>
        <td>&#915;</td>
        <td>&amp;#915;</td>
        <td>&amp;Gamma;</td>
        <td>capital gamma</td>
      </tr>
      <tr>
        <td>&#916;</td>
        <td>&amp;#916;</td>
        <td>&amp;Delta;</td>
        <td>capital delta</td>
      </tr>
      <tr>
        <td>&#917;</td>
        <td>&amp;#917;</td>
        <td>&amp;Epsilon;</td>
        <td>capital epsilon</td>
      </tr>
      <tr>
        <td>&#918;</td>
        <td>&amp;#918;</td>
        <td>&amp;Zeta;</td>
        <td>capital zeta</td>
      </tr>
      <tr>
        <td>&#919;</td>
        <td>&amp;#919;</td>
        <td>&amp;Eta;</td>
        <td>capital eta</td>
      </tr>
      <tr>
        <td>&#920;</td>
        <td>&amp;#920;</td>
        <td>&amp;Theta;</td>
        <td>capital theta</td>
      </tr>
      <tr>
        <td>&#921;</td>
        <td>&amp;#921;</td>
        <td>&amp;Iota;</td>
        <td>capital iota</td>
      </tr>
      <tr>
        <td>&#922;</td>
        <td>&amp;#922;</td>
        <td>&amp;Kappa;</td>
        <td>capital kappa</td>
      </tr>
      <tr>
        <td>&#923;</td>
        <td>&amp;#923;</td>
        <td>&amp;Lambda;</td>
        <td>capital lambda</td>
      </tr>
      <tr>
        <td>&#924;</td>
        <td>&amp;#924;</td>
        <td>&amp;Mu;</td>
        <td>capital mu</td>
      </tr>
      <tr>
        <td>&#925;</td>
        <td>&amp;#925;</td>
        <td>&amp;Nu;</td>
        <td>capital nu</td>
      </tr>
      <tr>
        <td>&#926;</td>
        <td>&amp;#926;</td>
        <td>&amp;Xi;</td>
        <td>capital xi</td>
      </tr>
      <tr>
        <td>&#927;</td>
        <td>&amp;#927;</td>
        <td>&amp;Omicron;</td>
        <td>capital omicron</td>
      </tr>
      <tr>
        <td>&#928;</td>
        <td>&amp;#928;</td>
        <td>&amp;Pi;</td>
        <td>capital pi</td>
      </tr>
      <tr>
        <td>&#929;</td>
        <td>&amp;#929;</td>
        <td>&amp;Rho;</td>
        <td>capital rho</td>
      </tr>
      <tr>
        <td>&#931;</td>
        <td>&amp;#931;</td>
        <td>&amp;Sigma;</td>
        <td>capital sigma</td>
      </tr>
      <tr>
        <td>&#932;</td>
        <td>&amp;#932;</td>
        <td>&amp;Tau;</td>
        <td>capital tau</td>
      </tr>
      <tr>
        <td>&#933;</td>
        <td>&amp;#933;</td>
        <td>&amp;Upsilon;</td>
        <td>capital upsilon</td>
      </tr>
      <tr>
        <td>&#934;</td>
        <td>&amp;#934;</td>
        <td>&amp;Phi;</td>
        <td>capital phi</td>
      </tr>
      <tr>
        <td>&#935;</td>
        <td>&amp;#935;</td>
        <td>&amp;Chi;</td>
        <td>capital chi</td>
      </tr>
      <tr>
        <td>&#936;</td>
        <td>&amp;#936;</td>
        <td>&amp;Psi;</td>
        <td>capital psi</td>
      </tr>
      <tr>
        <td>&#937;</td>
        <td>&amp;#937;</td>
        <td>&amp;Omega;</td>
        <td>capital omega</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {
    const html = document.getElementsByTagName('html')
    html[0].style.scrollBehavior = 'smooth'
  },
  methods: {
    handleUrl(e) {
      window.location.href = '#' + e
    },
  },
}
</script>

<style lang="scss" scoped>
table,
th,
td {
  border: 1px solid white;
  border-collapse: collapse;
}
th,
td {
  background-color: #96d4d4;
  padding: 8px;
}
.text_link {
  margin-top: 20px;
  background: #2c3333;
  padding: 8px;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
}
.text_link:hover {
  transform: translateX(4px);
}
a {
  text-decoration: none;
  color: white;
}
</style>
