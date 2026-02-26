<template>
  <div>
    <!-- Navbar Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success px-4">
      <div class="container-fluid">

        <a class="navbar-brand fw-bold" href="#">
          B&L BLOG
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">

            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">Board</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/profile">Profile</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <!-- Nội dung -->
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>