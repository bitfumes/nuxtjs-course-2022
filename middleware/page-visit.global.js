export default defineNuxtRouteMiddleware(() => {
  const pageVisitCount = usePageVisitCount();
  pageVisitCount.value++;
});
