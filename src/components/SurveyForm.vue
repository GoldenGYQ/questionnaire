<template>
  <div class="max-w-4xl mx-auto p-6 space-y-6">
    <h1 class="text-2xl font-bold mb-4">装修意向问卷</h1>

    <!-- 基本信息 -->
    <section>
      <h2 class="font-semibold mb-2">基本信息</h2>
      <input v-model="form.area" placeholder="面积（㎡）" class="input" />
      <input v-model="form.budget" placeholder="预算（元/㎡）" class="input" />
    </section>

    <!-- 装修风格 -->
    <section>
      <h2 class="font-semibold mb-2">装修风格（可多选）</h2>
      <label v-for="style in styles" :key="style" class="block">
        <input type="checkbox" :value="style" v-model="form.styles" />
        {{ style }}
      </label>
    </section>

    <!-- 墙面材料 -->
    <section>
      <h2 class="font-semibold mb-2">墙面材料</h2>
      <select v-model="form.wall" class="input">
        <option v-for="w in mergedMaterials.wall" :key="w">{{ w }}</option>
      </select>
    </section>

    <!-- 顶面材料 -->
    <section>
      <h2 class="font-semibold mb-2">顶面材料</h2>
      <select v-model="form.ceiling" class="input">
        <option v-for="c in mergedMaterials.ceiling" :key="c">{{ c }}</option>
      </select>
    </section>

    <!-- 地面材料 -->
    <section>
      <h2 class="font-semibold mb-2">地面材料</h2>
      <select v-model="form.floor" class="input">
        <option v-for="f in mergedMaterials.floor" :key="f">{{ f }}</option>
      </select>
    </section>

    <!-- 智能家居 -->
    <section>
      <h2 class="font-semibold mb-2">是否需要智能家居？</h2>
      <label><input type="radio" value="是" v-model="form.smartHome" /> 是</label>
      <label><input type="radio" value="否" v-model="form.smartHome" /> 否</label>
    </section>

    <!-- 提交按钮 -->
    <button @click="submit" class="bg-blue-500 text-white px-4 py-2 rounded">提交</button>

    <!-- 结果展示 -->
    <div v-if="result" class="mt-6 bg-gray-100 p-4 rounded">
      <h3 class="font-bold mb-2">你的装修建议：</h3>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const form = ref({
  area: '',
  budget: '',
  styles: [],
  wall: '',
  ceiling: '',
  floor: '',
  smartHome: '',
});

const styles = ['现代简约', '北欧', '新中式', '法式', '工业风', '日式'];

const styleMaterialMap = {
  '现代简约': {
    wall: ['乳胶漆', '艺术涂料', '木饰面'],
    ceiling: ['石膏板吊顶', '无主灯'],
    floor: ['灰色瓷砖', '浅色木地板'],
  },
  '北欧': {
    wall: ['浅灰乳胶漆', '白色墙砖', '墙布'],
    ceiling: ['白色吊顶', '木梁吊顶'],
    floor: ['浅色复合木地板', '原木色地板'],
  },
  '新中式': {
    wall: ['木饰面', '素色乳胶漆', '墙纸'],
    ceiling: ['中式木格吊顶', '石膏板'],
    floor: ['深色实木地板', '仿古砖'],
  },
  '法式': {
    wall: ['护墙板', '石膏线', '浅色墙纸'],
    ceiling: ['石膏线吊顶', '水晶灯'],
    floor: ['大理石瓷砖', '拼花木地板'],
  },
  '工业风': {
    wall: ['水泥灰漆', '红砖墙', '仿旧木板'],
    ceiling: ['裸顶+轨道灯', '黑色吊顶'],
    floor: ['水泥地', '深灰瓷砖'],
  },
  '日式': {
    wall: ['榻榻米背景', '米白乳胶漆', '木饰面'],
    ceiling: ['原木吊顶', '简洁石膏板'],
    floor: ['榻榻米', '原木地板'],
  },
};

const mergedMaterials = computed(() => {
  const selectedStyles = form.value.styles;
  const result = { wall: new Set(), ceiling: new Set(), floor: new Set() };

  selectedStyles.forEach((style) => {
    const rec = styleMaterialMap[style];
    if (!rec) return;
    Object.keys(rec).forEach((type) => {
      rec[type].forEach((item) => result[type].add(item));
    });
  });

  return {
    wall: [...result.wall],
    ceiling: [...result.ceiling],
    floor: [...result.floor],
  };
});

const result = ref('');

function submit() {
  result.value = `你选择的风格是【${form.value.styles.join(' / ')}】，墙面材料为 ${form.value.wall}，地面为 ${form.value.floor}，预算为 ${form.value.budget} 元/㎡，适合打造你理想的${form.value.styles[0]}风空间。`;
}
</script>

<style scoped>
.input {
  @apply w-full border p-2 rounded mb-2;
}
</style>
