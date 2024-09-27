<script setup lang="ts">
import { modalStore, ModalTypes } from '@/stores/modalViews'
import { computed } from 'vue'

const modal = modalStore()

const isActive = computed(() => {
  return modal.modalType != ModalTypes.NONE
})
const isChoseButtonsActive = computed(() => {
  return modal.event ? 'onApprove' in modal.event : false
})

function onCancel() {
  if (modal.event && 'onCancel' in modal.event) {
    modal.event.onCancel?.()
  }
  onClose()
}
function onApprove() {
  if (modal.event && 'onApprove' in modal.event) {
    modal.event.onApprove()
  }
  onClose()
}
function onClose() {
  modal.close()
}
</script>

<template>
  <div v-if="isActive" class="modal-container">
    <div class="modal-content">
      <span class="close" @mousedown="onClose()">&times;</span>
      <p class="modal-text">
        {{ modal.modalType }}
      </p>
      <div v-if="isChoseButtonsActive" class="modal-btns">
        <button class="cancel-modal-btn" @click="onCancel()">Отменить</button>
        <button class="delete-modal-btn" @click="onApprove()">Удалить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  z-index: 101;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  from {
    background-color: transparent;
  }
  to {
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  background: #282f44;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.modal-text {
  color: #ececec;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.7;
  padding: 0 20px;
}

.close {
  position: absolute;
  right: 18px;
  top: 5px;
  align-self: flex-end;
  color: #ececec;
  font-size: 30px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #e6af2e;
  text-decoration: none;
  cursor: pointer;
}

.modal-btns {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cancel-modal-btn {
  width: 150px;
  height: 32px;
  border: none;
  border-radius: 32px;
  background: #818181;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
}

.delete-modal-btn {
  width: 150px;
  height: 32px;
  border: none;
  border-radius: 32px;
  background: rgba(230, 175, 46, 0.9);
  color: #282f44;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
}
</style>
