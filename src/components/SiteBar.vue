<template>
  <aside class="sidebar" :class="showMoreInfoFlag ? 'active' : ''" data-sidebar>
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="@/assets/images/my-avatar.png" alt="张英伟" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" :title="datas.name">{{ datas.name }}</h1>

        <p class="title">{{ datas.subtitle }}</p>
      </div>

      <button @click="showMoreInfoHandler" class="info_more-btn" data-sidebar-btn>
        <span>{{ showMoreInfoButtonText }}</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item" v-for="(item, index) in datas.concats" :key="index">
          <div class="icon-box">
            <ion-icon :name="item.icon"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">{{ item.name }}</p>

            <a :href="item.url" class="contact-link">{{ item.text }}</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="beian-info">
      <a target="_blank" href="https://beian.miit.gov.cn">京ICP备15037338号-1</a>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import datas from '@/datas/userinfo.json'

const showMoreInfoFlag = ref(false)
const showMoreInfoButtonText = ref('查看联系方式')
const showMoreInfoHandler = () => {
  showMoreInfoFlag.value = !showMoreInfoFlag.value
  if (showMoreInfoFlag.value) {
    showMoreInfoButtonText.value = '收起联系方式'
  } else {
    showMoreInfoButtonText.value = '查看联系方式'
  }
}
</script>

<style lang="scss" scoped>
.beian-info {
  padding-top: 2em;
  text-align: center;
  a {
    font-size: 12px;
    color: #a4a4a4 !important;
  }
}
</style>
