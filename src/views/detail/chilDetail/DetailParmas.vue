<template>
  <div class="param-info" v-if="Object.keys(detailParams).length !== 0">
    <table class="info-size">
      <tr v-for="(item, index) in detailParams.rule.tables[0]" :key="index">
        <td v-for="(itemChil, index) in item" :key="index">{{itemChil}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in detailParams.info.set" :key="index">
        <td class="info-key">{{item.key}}</td>
        <td class="info-value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    detailParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.param-info {
  padding: 5.333vw 4vw;
  font-size: 3.733vw;
  border-bottom: 1.33333vw solid #f2f5f8;
}
.param-info table {
  width: 100%;
}
.param-info table tr {
  height: 11.2vw;
  
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-key {
  width: 25.333vw;
}
.info-value {
  color: #eb4868;
}
</style>