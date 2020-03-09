<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectComponent = 'appRed'">Load Red Template</button>
                <hr>
                <keep-alive>
                  <component :is="selectComponent">
                    <h1>The title</h1>
                  </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
      data() {
        return {
          selectComponent: 'appBlue'
        }
      },
      components: {
          appBlue: Blue,
          appGreen: Green,
          appRed: Red
      }
    }
</script>

<style>
</style>
