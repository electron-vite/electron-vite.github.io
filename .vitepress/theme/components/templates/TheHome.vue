<template>
  <TheHeader />
  <AppLayout>
    <TheSidebar class="lg:hidden" />
    <ContentLayout class="!pt-0">
      <HomeHero />
      <div class="content prose min-w-0">
        <Content />
      </div>
    </ContentLayout>
  </AppLayout>
</template>
