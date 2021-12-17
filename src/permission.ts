import router from '@/router';
import {RouteLocationNormalized} from "vue-router";

router.beforeEach(async(to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  console.log('to.path ', to.path);
  if (to.path === '/') {
    next({
      path: '/login'
    });
  } else {
    next();
  }
});
