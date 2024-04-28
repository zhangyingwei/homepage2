<template>
  <article class="portfolio" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">我的项目</h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
        <li class="filter-item" v-for="(item, index) in categories" :key="index">
          <button @click="onClick" :class="activateItem === item ? 'active' : ''" data-filter-btn>
            {{ item }}
          </button>
        </li>
      </ul>

      <ul class="project-list">
        <li
          class="project-item active"
          data-filter-item
          v-for="(item, index) in activateDatas"
          :key="index"
        >
          <a :href="item.url" target="_blank">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img class="project-image" :src="item.img" alt="finance" loading="lazy" />
            </figure>
            <h3 class="project-title">{{ item.title }}</h3>
            <p class="project-category">{{ item.category }}</p>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
import datas from '@/datas/projects.json'
const categories = ref(['全部', ...new Set(datas.map((item) => item.category))])
const activateItem = ref('全部')

const activateDatas = computed(() => {
  if (activateItem.value === '全部') {
    return datas
  } else {
    return datas.filter((item) => item.category === activateItem.value)
  }
})

const onClick = (e) => {
  if (e.target.tagName === 'BUTTON') {
    activateItem.value = e.target.textContent
  }
}
</script>

<style lang="scss" scoped>
.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
</style>
