export const routes = [
	{path: '/courses', name: 'courses', component: () => import(/* webpackChunkName: "courses"*/ "./components/courses.vue"), meta: {requiresAuth: false} },
	{path: '/products', name: 'products', component: () => import(/* webpackChunkName: "products"*/ "./components/products.vue"), meta: {requiresAuth: false} },

]