<template>
     <section class="container-fluid">
        <div class="row">
            <nav class="menu col-md-2 d-none d-md-block bg-dark b-sidebar">
            <menu-component/>
            </nav>
                <main  id="current-todos" role="main" class="content-block col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <div class="card d-inline-flex p-4 col-md-10">
                        <search-items/>
                        <add-item/>
                        <items-list/>
                    </div>
                </main>
        </div>
     </section>
</template>

<script>
export default {
    name: 'app',
//     components: {
//          MenuComponent
//     }
}
</script>

<style lang="scss" scoped>
// section{
//     background-color: #fafafa;
// }
.b-sidebar {
  max-width: 24vw !important;
}
.content-block{
    max-width: 100%;
    @media(min-width: 768px) {
        max-width: 74vw !important;
    }
}


</style>