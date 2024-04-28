<template>
  <article class="self-block" data-page="about">
    <header>
      <h2 class="h2 article-title">{{ data.title }}</h2>
    </header>

    <section class="about-text">
      <p v-for="(item, index) in data.text" :key="index">
        {{ item }}
      </p>
    </section>

    <section class="testimonials">
      <h3 class="h3 testimonials-title">我的标签</h3>

      <ul class="tags-wrapper">
        <li class="tag-item" v-for="(item, index) in tags" :key="index">
          <div>
            <div class="tag-content">
              <div class="avatar-wrapper">
                <img
                  src="@/assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="60"
                  data-testimonials-avatar
                />
              </div>
              <span class="content">{{ item.tag }}</span>
            </div>
            <div class="icon-button" @click="likeClick(item)">
              <span class="icon">
                <ion-icon name="thumbs-up"></ion-icon>
              </span>
              <span class="num">{{ item.like }}</span>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section class="service">
      <h3 class="h3 service-title">更多>></h3>

      <ul class="service-list">
        <li class="service-item" v-for="(item, index) in data.services" :key="index">
          <a class="service-item-a" :href="item.url" target="_blank">
            <div class="service-icon-left-box" v-html="item.icon"></div>
            <div class="service-content-box">
              <span class="service-item-title-text">{{ item.title }}</span>
            </div>
            <div class="service-icon-box">
              <ion-icon name="link"></ion-icon>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import data from '@/datas/about.json'

const tags = ref(data.tags)

const likeClick = (item) => {
  item.like += 1
}
</script>

<style lang="scss">
.tags-wrapper {
  list-style: none;
  .tag-item {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 20px;

    .tag-content {
      background-color: #232324;
      box-shadow: var(--shadow-2);
      color: #fff;
      padding: 2px 2px;
      border-radius: 4em;
      font-size: 0.8rem;
      border: 1px solid #3a3a3a;
      .content {
        display: inline-block;
        vertical-align: middle;
        padding: 0 10px;
      }
      .avatar-wrapper {
        img {
          width: 3em;
        }
        width: 3em;
        display: inline-block;
        vertical-align: middle;
        background-color: #3e3e3e;
        border-radius: 50%;
      }
    }

    .icon-button {
      user-select: none;
      display: inline-block;
      cursor: pointer;
      background-color: #575757;
      // like telegram icon
      padding: 1px 6px;
      border-radius: 15px;
      line-height: 1em;
      .icon {
        display: inline-block;
        vertical-align: top;
        color: antiquewhite;
      }
      .num {
        font-size: 0.6em;
        margin-left: 5px;
        display: inline-block;
        vertical-align: middle;
        color: antiquewhite;
      }
    }
  }
}

.service-item-a {
  display: block;
  width: 100%;
}

.service-content-box {
  display: inline-block;
  vertical-align: middle;
}

.service-icon-box {
  color: #fff;
  font-size: 18px;
  display: inline-block;
  vertical-align: middle;
  float: right;
}

.service-item-title-text {
  font-size: 18px;
  color: #fff;
}

.service-icon-left-box {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  width: 2em;
  border-radius: 1em;
  padding: 0.3em;
  background-color: #464647;
  margin-right: 1em;
  svg {
    height: 1.4em;
    width: 1.4em;
  }
}
</style>

<style lang="scss">
.service-item {
  span,
  .service-icon-box {
    transition: 0.6s;
  }
  &:hover {
    span {
      color: #ffd666;
    }
    .service-icon-box {
      color: #ffd666;
    }
  }
}
</style>
