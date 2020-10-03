export const routes = [
	{path: '/courses', name: 'courses', component: () => import(/* webpackChunkName: "courses"*/ "./components/courses.vue"), meta: {requiresAuth: false} },
	{path: '/products', name: 'products', component: () => import(/* webpackChunkName: "products"*/ "./components/products.vue"), meta: {requiresAuth: false} },
	{path: '/enroll', name: 'enroll', component: () => import(/* webpackChunkName: "enroll"*/ "./components/enroll.vue"), meta: {requiresAuth: false} },
	{path: '/login', name: 'login', component: () => import(/* webpackChunkName: "login"*/ "./components/login.vue"), meta: {requiresAuth: false} },
	// {path: '/register', name: 'register', component: () => import(/* webpackChunkName: "register"*/ "./components/register.vue"), meta: {requiresAuth: false} },
]