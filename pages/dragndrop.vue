<template>
  <div style="display: flex; justify-content: space-between">
    <div class="title_card">
      <div
        style="
          align-items: center;
          display: flex;
          justify-content: center;
          padding: 4rem 0;
        "
      >
        <div id="list">
          <div class="draggable" @mousewheel="handleDragStart('A')">A</div>
          <div class="draggable" @mousewheel="handleDragStart('B')">B</div>
          <div class="draggable" @mousewheel="handleDragStart('C')">C</div>
          <div class="draggable" @mousewheel="handleDragStart('D')">D</div>
          <div class="draggable" @mousewheel="handleDragStart('E')">E</div>
        </div>
      </div>
      <!-- {{ item.title }}
      <div
        class="container"
        @mousedown="check()"
        @dragstart="dropOver(item, 'start')"
        @dragend="dropOver(item, 'end')"
      >
        <div class="d-flex">
          <div style="color: white; background-color: red">{{ index }}</div>
          <p
            v-for="(items, i) in item.value"
            :key="i"
            @mousedown="check()"
            class="draggable text"
            :id="i"
            draggable="true"
            :value="i + 1"
          >
            {{ items }}
          </p>
        </div>
      </div>
      <button id="exportBtn" @click="handleDownload">Click</button> -->

      <!-- <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="d-flex">
              <div>
                <div style="border: 2px solid red; height: 30px">1</div>
                <div style="border: 2px solid red; height: 30px">2</div>
              </div>
              <div class="containers">
                <div class="draggable d-flex" style="user-select: none">
                  <div>1</div>
                  <div class="icon">icon</div>
                </div>
                <div class="draggable d-flex" style="user-select: none">
                  <div>2</div>
                  <div class="icon">icon</div>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: ['Fixing bug pages admin', 'Fixing bug pages admin12321412'],
    }
  },
  mounted() {
    this.check()
  },
  methods: {
    handleDragStart(e) {
      console.log(e, 'ininya')
    },
    check() {
      const list = document.getElementById('list')

      let draggingEle
      let placeholder
      let isDraggingStarted = false

      // The current position of mouse relative to the dragging element
      let x = 0
      let y = 0

      // Swap two nodes
      const swap = function (nodeA, nodeB) {
        const parentA = nodeA.parentNode
        const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling

        // Move `nodeA` to before the `nodeB`
        nodeB.parentNode.insertBefore(nodeA, nodeB)

        // Move `nodeB` to before the sibling of `nodeA`
        parentA.insertBefore(nodeB, siblingA)
      }

      // Check if `nodeA` is above `nodeB`
      const isAbove = function (nodeA, nodeB) {
        // Get the bounding rectangle of nodes
        const rectA = nodeA.getBoundingClientRect()
        const rectB = nodeB.getBoundingClientRect()

        return rectA.top + rectA.height / 2 < rectB.top + rectB.height / 2
      }

      const mouseDownHandler = function (e) {
        draggingEle = e.target

        // Calculate the mouse position
        const rect = draggingEle.getBoundingClientRect()
        x = e.pageX - rect.left
        y = e.pageY - rect.top

        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler)
        document.addEventListener('mouseup', mouseUpHandler)
      }

      const mouseMoveHandler = function (e) {
        const draggingRect = draggingEle.getBoundingClientRect()

        if (!isDraggingStarted) {
          isDraggingStarted = true

          // Let the placeholder take the height of dragging element
          // So the next element won't move up
          placeholder = document.createElement('div')
          placeholder.classList.add('placeholder')
          draggingEle.parentNode.insertBefore(
            placeholder,
            draggingEle.nextSibling,
          )
          placeholder.style.height = `${draggingRect.height}px`
        }

        // Set position for dragging element
        draggingEle.style.position = 'absolute'
        draggingEle.style.top = `${e.pageY - y}px`
        draggingEle.style.left = `${e.pageX - x}px`

        // The current order
        // prevEle
        // draggingEle
        // placeholder
        // nextEle
        const prevEle = draggingEle.previousElementSibling
        const nextEle = placeholder.nextElementSibling

        // The dragging element is above the previous element
        // User moves the dragging element to the top
        if (prevEle && isAbove(draggingEle, prevEle)) {
          // The current order    -> The new order
          // prevEle              -> placeholder
          // draggingEle          -> draggingEle
          // placeholder          -> prevEle
          swap(placeholder, draggingEle)
          swap(placeholder, prevEle)
          return
        }

        // The dragging element is below the next element
        // User moves the dragging element to the bottom
        if (nextEle && isAbove(nextEle, draggingEle)) {
          // The current order    -> The new order
          // draggingEle          -> nextEle
          // placeholder          -> placeholder
          // nextEle              -> draggingEle
          swap(nextEle, placeholder)
          swap(nextEle, draggingEle)
        }
      }

      const mouseUpHandler = function () {
        // Remove the placeholder
        placeholder && placeholder.parentNode.removeChild(placeholder)

        draggingEle.style.removeProperty('top')
        draggingEle.style.removeProperty('left')
        draggingEle.style.removeProperty('position')

        x = null
        y = null
        draggingEle = null
        isDraggingStarted = false

        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler)
        document.removeEventListener('mouseup', mouseUpHandler)
      }

      // Query all items
      ;[].slice
        .call(list.querySelectorAll('.draggable'))
        .forEach(function (item) {
          item.addEventListener('mousedown', mouseDownHandler)
        })
    },
    // toCsv(table) {
    //   // Query all rows
    //   const rows = table.querySelectorAll('container')
    //   return [].slice
    //     .call(rows)
    //     .map(function (row) {
    //       // Query all cells
    //       const cells = row.querySelectorAll('title,text')
    //       return [].slice
    //         .call(cells)
    //         .map(function (cell) {
    //           return cell.textContent
    //         })
    //         .join(',')
    //     })
    //     .join('\n')
    // },
    // download(text, fileName) {
    //   const link = document.createElement('a')
    //   link.setAttribute(
    //     'href',
    //     `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`,
    //   )
    //   link.setAttribute('download', fileName)
    //   link.style.display = 'none'
    //   document.body.appendChild(link)
    //   link.click()
    //   document.body.removeChild(link)
    // },
    // handleDownload() {
    //   const table = document.getElementsByClassName('title_card')
    //   const csv = this.toCsv(table[0])
    //   // Download it
    //   this.download(csv, 'download.csv')
    // },
    // dropOver(e, i) {
    //   console.log(e, i, 'dropover')
    // },
    // async check() {
    //   const draggables = document.querySelectorAll('.draggable')
    //   const containers = document.querySelectorAll('.containers')
    //   const title_card = document.querySelectorAll('.title_card')
    //   // console.log(title_card, "inittile");
    //   function getDragAfterElement(container, y) {
    //     const draggableElements = [
    //       ...container.querySelectorAll('.draggable:not(.dragging)'),
    //     ]
    //     return draggableElements.reduce(
    //       (closest, child) => {
    //         const box = child.getBoundingClientRect()
    //         const offset = y - box.top - box.height / 2
    //         if (offset < 0 && offset > closest.offset) {
    //           return { offset: offset, element: child }
    //         } else {
    //           return closest
    //         }
    //       },
    //       { offset: Number.NEGATIVE_INFINITY },
    //     ).element
    //   }
    //   draggables.forEach((draggable) => {
    //     draggable.addEventListener('dragstart', () => {
    //       draggable.classList.add('dragging')
    //     })
    //     draggable.addEventListener('dragend', () => {
    //       draggable.classList.remove('dragging')
    //     })
    //   })
    //   containers.forEach((container) => {
    //     container.addEventListener('dragover', (e) => {
    //       e.preventDefault()
    //       const afterElement = getDragAfterElement(container, e.clientY)
    //       const draggable = document.querySelector('.dragging')
    //       if (afterElement == null) {
    //         container.appendChild(draggable)
    //       } else {
    //         container.insertBefore(draggable, afterElement)
    //       }
    //     })
    //   })
    // },
  },
}
</script>

<style>
.draggable {
  width: 300px;
  height: 30px;
  padding: 2px;
  background-color: white;
  border: 1px solid black;
}

.icon {
  cursor: pointer;
}
.draggable.dragging {
  opacity: 0.5;
}
/* Background Styles Only */

* {
  font-family: Raleway;
}

.side-links {
  position: absolute;
  top: 15px;
  right: 15px;
}

.side-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 10px;
  color: white;
  width: 180px;
  padding: 10px 0;
  border-radius: 10px;
}

.side-link-youtube {
  background-color: red;
}

.side-link-twitter {
  background-color: #1da1f2;
}

.side-link-github {
  background-color: #6e5494;
}

.side-link-text {
  margin-left: 10px;
  font-size: 18px;
}

.side-link-icon {
  color: white;
  font-size: 30px;
}
/* sdsd */
.draggable {
  cursor: move;
  margin-bottom: 1rem;
  user-select: none;

  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Size */
  height: 4rem;
  width: 16rem;

  /* Misc */
  border: 1px solid #cbd5e0;
}
.placeholder {
  background-color: #edf2f7;
  border: 2px dashed #cbd5e0;
  margin-bottom: 1rem;
}
</style>
