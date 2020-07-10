<template>
  <Row :gutter="16" class="containers">
        <Col v-for="(item, i) in article" :key="i" span="6">
            <Card class="container_card">
                <p slot="title">{{item.title}}</p>
                <p>{{item.content}}</p>
                
            </Card>
        </Col>       
        </Col>
    </Row>
    


  </div>
</template>

<script>
import { getArticle } from '@/plugins/login_request'
export default {
  data(){
    return {
      article: {}
    }
  },
  created(){
    getArticle().then(value =>{
      this.article = value
      console.log(value)
    })
  }
}
</script>

<style>
  .containers{
    width: 100%;
    height: 100%;
    /* background-color: #000; */
    margin-top: 16px;
  }
  .container_card{
    height: 300px;
    overflow: hidden;
  }

</style>