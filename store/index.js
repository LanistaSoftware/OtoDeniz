var uniqid = require('uniqid');
export const state = {
  products: []
};
export const mutations = {
  setProducts(state, val) {
    state.products = val;
  }
};
export const actions = {
  async addProduct({ commit, dispatch }, form) {
    try {
      this.$fireStore
        .collection("products")
        .add({
          categories: form.categories,
          name: form.name,
          file: form.file.name,
          desc: form.desc,
          id: uniqid()
        })
        .then(() => {
          var storageRef = this.$fireStorage.ref();
          var file = form.file;
          var thisRef = storageRef.child(file.name);
          thisRef
            .put(file)
            .then(() => {})
            .then(() => {
              form.name = null;
              form.desc = null;
              form.file = null;
              form.categories = null;
            });
        });
    } catch (error) {
      console.log(error);
    }
  },
  async getAllProduct({ commit }) {
    try {
      const items = [];
      const snapshot = await this.$fireStore.collection("products").get();
      snapshot.docs.map(doc => items.push({ item: doc.data(), key: doc.id }));
      commit("setProducts", items);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteDocument({}, { id, file }) {
    try {
      await this.$fireStore
        .collection("products")
        .doc(id)
        .delete();
      var storageRef = this.$fireStorage.ref(file);
      storageRef
        .delete()
        .then(function() {
          console.log("silindi");
        })
        .catch(function(error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  },
  async UpdateProduct({ commit }, { form, id }) {
    try {
        console.log(id)
      var name;
      if (form.file.name !== undefined) {
        name = form.file.name;
      } else {
        name = form.file;
      }
      this.$fireStore
        .collection("products")
        .doc(id)
        .set({
          categories: form.categories,
          name: form.name,
          desc: form.desc,
          file: name
        })
        .then(() => {
          if (form.file.name !== undefined) {
            var storageRef2 = this.$fireStorage.ref();
            var file = form.file;
            var thisRef2 = storageRef2.child(file.name);
            thisRef2.put(file).then(() => {});
          }
        })
        .then(() => {
          this.form.categories = null;
          this.form.name = null;
          this.form.desc = null;
          this.form.file = null;
        });
    } catch (error) {
      console.log(error);
    }
  }
};
