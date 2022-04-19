<template>
  <TheHeader />
  <AppLayout class="lg:grid-cols-[250px_1fr_250px]">
    <TheSidebar />
    <ContentLayout>
      <div class="content prose min-w-0">
        <Content />
      </div>
      <PageFooter />
    </ContentLayout>
  </AppLayout>
</template>
