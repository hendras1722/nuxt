<template>
  <!-- display: flex; -->
  <div style="align-items: center; justify-content: center; padding: 4rem 0">
    <div id="list" style="display: flex">
      <div
        id="list__children"
        v-for="(item, index) in todos.value"
        :key="index"
        style="display: flex; margin-bottom: 20px"
      >
        {{ index + 1 }}
        <div
          style="padding: 10px"
          @dragenter="dragEnter($event, index, true)"
          @dragleave="dragLeave($event, index, true)"
        >
          <div
            class="todo-item"
            draggable="true"
            :id="index"
            @dragstart="dragStart(index, $event)"
            @dragover.prevent
            @dragenter="dragEnter($event, index)"
            @dragend="dragEnd($event, index)"
            @dragleave="dragLeave($event, index, false)"
            @drop="dragFinish(index, $event, item, todos)"
            style="display: flex"
          >
            <div
              class="todo-item__children"
              style="cursor: default; border: 2px solid blue"
              @dragover.prevent
              @dragstart="dragStart(index, $event)"
              @dragenter="dragEnter($event, index)"
              @dragleave="dragLeave($event, index, false)"
              @drop="dragFinish(index, $event, item, todos)"
              @dragover="dragOver"
            >
              {{ item }}
            </div>
            <div
              class="todo-item__children"
              style="border: 2px solid blue"
              :id="index"
              @dragover.prevent
              @dragstart="dragStart(index, $event)"
              @dragenter="dragEnter($event, index)"
              @dragleave="dragLeave($event, index, false)"
              @drop="dragFinish(index, $event, item, todos)"
            >
              ___ ___ {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="list" style="display: flex">
      <div
        id="list__children"
        v-for="(item, i) in todos1.value"
        :key="i"
        style="display: flex; margin-bottom: 20px"
      >
        {{ i + 1 }}
        <div
          style="padding: 10px"
          @dragenter="dragEnter($event, i, true)"
          @dragleave="dragLeave($event, i, true)"
        >
          <div
            class="todo-item"
            draggable="true"
            :id="i"
            @dragstart="dragStart(i, $event)"
            @dragover.prevent
            @dragenter="dragEnter($event, i)"
            @dragend="dragEnd($event, i)"
            @dragleave="dragLeave($event, i, false)"
            @drop="dragFinish(i, $event, item, todos1)"
            style="display: flex"
          >
            <div
              class="todo-item__children"
              style="cursor: default; border: 2px solid blue"
              @dragover.prevent
              @dragstart="dragStart(i, $event)"
              @dragenter="dragEnter($event, i)"
              @dragleave="dragLeave($event, i, false)"
              @drop="dragFinish(i, $event, item, todos1)"
              @dragover="dragOver"
            >
              {{ item }}
            </div>
            <div
              class="todo-item__children"
              style="border: 2px solid blue"
              :id="i"
              @dragover.prevent
              @dragstart="dragStart(i, $event)"
              @dragenter="dragEnter($event, i)"
              @dragleave="dragLeave($event, i, false)"
              @drop="dragFinish(i, $event, item, todos1)"
            >
              ___ ___ {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      todos: {
        type: 'up',
        value: ['a', 'b', 'c', 'd'],
      },
      todos1: {
        type: 'down',
        value: ['Besok', 'Senin', 'Kita', 'Bisa'],
      },
      dragging: -1,
      idLeave: 0,
      condition: false,
    }
  },
  mounted() {},
  methods: {
    dragOver(ev) {
      if (ev.target.classList) {
        ev.target.classList.add('over')
      }
    },
    dragStart(which, ev) {
      console.log(ev.target, 'inive')
      ev.target.style.opacity = 0.4
      ev.target.style.border = '2px solid blue'
      ev.target.style.borderStyle = 'dashed'

      ev.dataTransfer.effectAllowed = 'move'

      ev.target.classList.add('dragging')
      ev.target.classList.add('over')

      ev.dataTransfer.setData('text/plain', this.id)
      ev.dataTransfer.dropEffect = 'link'

      this.dragging = which
    },
    dragEnter(ev, index) {
      console.log(ev.target.classList, 'enter')

      if (this.dragging === index) {
        ev.target.classList.add('over')
        return
      } else if (this.dragging !== index) {
        if (ev.target.classList) {
          ev.target.classList.remove('over')
        }
        // ev.target.classList.remove('over')
      }
    },
    dragLeave(ev, index, condition) {
      console.log(ev.target.classList, 'leave')

      if (this.dragging === index) {
        ev.target.classList.add('over')
        return
      } else if (this.dragging !== index) {
        if (ev.target.classList) {
          ev.target.classList.remove('over')
        }
      }
    },
    dragEnd(ev, index) {
      ev.target.style.borderStyle = ''
      ev.target.style.border = ''

      ev.stopPropagation()
      ev.target.style.opacity = 1
      ev.dataTransfer.effectAllowed = 'move'
      ev.target.classList.remove('dragging')
      ev.target.classList.remove('over')

      this.dragging = -1
    },
    dragFinish(to, ev, item, con) {
      ev.stopPropagation()
      ev.preventDefault()
      const checkTodo = this.todos.type === con.type
      const checkTodo1 = this.todos1.type === con.type
      if (checkTodo) {
        const indexFirst = this.todos.value.findIndex((items) => items === item)
        console.log(indexFirst)
        this.moveItem(this.dragging, indexFirst, '1')
      }
      if (checkTodo1) {
        const indexFirst = this.todos1.value.findIndex(
          (items) => items === item,
        )
        this.moveItem(this.dragging, indexFirst, '2')
      }
      ev.target.classList.remove('over')
      ev.target.classList.remove('dragging')
      const idStart = document.getElementById(to)
      idStart.classList.remove('over')
      // ev.target.style.marginTop = '2px'
      // ev.target.style.marginBottom = '2px'
    },
    removeItemAt(index) {
      this.todos.splice(index, 1)
    },
    moveItem(from, to, item) {
      console.log(from, to)
      if (item === '1') {
        this.todos.value.splice(to, 0, this.todos.value.splice(from, 1)[0])
        return
      }
      this.todos1.value.splice(to, 0, this.todos1.value.splice(from, 1)[0])

      // if (to === -1) {
      //   this.removeItemAt(from)
      // } else {
      // }
    },
  },
}
</script>
<style></style>
