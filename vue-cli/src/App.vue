<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select name="" id="" v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <br>
        <button class="btn btn-primary" @click="show = !show"> Show Alert</button>
        <br>
        <br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">Some info</div>
        </transition>
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">Some info</div>
        </transition>
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="show">Some info</div>
        </transition>
        <transition appear
                    enter-active-class="animate__animated animate__bounce"
                    leave-active-class="animate__animated animate__tada">
          <div class="alert alert-info" v-if="show">Some info</div>
        </transition>

        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">Some info</div>
          <div class="alert alert-warning" v-else key="warning">Some warning</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / remove Element</button>
        <br><br>
        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled">
          <div style="width: 100px; height: 100px; background: lightgreen" v-if="load"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        load: true,
        alertAnimation: 'fade'
      }
    },
    methods: {
      beforeEnter(el) {
        console.log('beforeEnter');
      },
      enter(el, done) {
        console.log('enter');
        done();
      },
      afterEnter(el) {
        console.log('afterEnter');
      },
      enterCancelled(el) {
        console.log('entercanc');
      },
      beforeLeave(el) {
        console.log('beforeLeave');
      },
      leave(el, done){
        console.log('leave');
        done();
      },
      afterLeave(el){
        console.log('afterLeave');
      },
      leaveCancelled(el){
        console.log('leaveCancelled');
      }

    }

  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
    /*opacity: 1; default dont use*/
  }

  .fade-leave {
    /*opacity: 1;*/
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
    /*transform: translateY(20px);*/
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);

    }
  }
</style>
