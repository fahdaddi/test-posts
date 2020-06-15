export default function({ store, redirect }) {
    // If user connected, redirect to /
    if (store.getters["user/IS_AUTH"]) {
        return redirect('/')
    }
}