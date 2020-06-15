export default function({ store, redirect }) {
    // If user not connected, redirect to /login
    if (!store.getters["user/IS_AUTH"]) {
        return redirect('/login', { callback: route.fullPath })
    }
}