export const state =() => {}
export const actions = {
    async addProduct ({commit},form){
        try {
            this.$fireStore
            .collection("products")
            .add(form)
            .then(() => {
              form.password = null;
              form.email = null;
              form.auth = null;
              form.id = null;
              form.name = null;
              form.token = null;
            });
        } catch (error) {
            
        }
    }
}