<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CardItem></CardItem>
    <hr>
    <AccordionExample></AccordionExample>
    <hr>
    <ModelLive></ModelLive>
  </div>
</template>

<script>
// @ is an alias to /src
import CardItem from '@/components/CardItem'
import AccordionExample from '@/components/AccordionExample'
import ModelLive from '@/components/ModelLive'

export default {
  components: {
    CardItem,
    AccordionExample,
    ModelLive
  }
}
</script>
