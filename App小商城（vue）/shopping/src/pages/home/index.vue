 <template>
  <div class="home">
    <header class="g-header-container">
      <home-header class="header"></home-header>
    </header>
    <me-scroll>
      <home-slide></home-slide>
      <home-nav></home-nav>
      <home-recommend></home-recommend>
    </me-scroll>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from "./header";
import HomeSlide from "./slide";
import MeScroll from "../../base/scroll";
import HomeNav from "./nav";
import HomeRecommend from './recommend'

export default {
  name: "Home",
  components: {
    MeScroll,
    HomeHeader,
    HomeSlide,
    HomeNav,
    HomeRecommend
  }
};
</script>
<style scoped>
 .home  {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
 
