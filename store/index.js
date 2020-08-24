var uniqid = require("uniqid");
export const state = {
  products: [],
  requests: [],
  List: [],
  Info: {},
  auth: false
};
export const mutations = {
  setProducts(state, val) {
    state.products = val;
  },
  setRequests(state, val) {
    state.requests = val;
  },
  setList(state, val) {
    state.List = val;
  },
  setInfo(state, val) {
    state.Info = val;
  },
  setAuth(state, val) {
    state.auth = val;
  }
};
export const actions = {
  async addProduct({ commit, dispatch }, form) {
    try {
      var uid = uniqid();
      this.$fireStore
        .collection("products")
        .add({
          categories: form.categories,
          name: form.name,
          file: uid,
          desc: form.desc,
          id: uniqid()
        })
        .then(() => {
          var storageRef = this.$fireStorage.ref();
          var file = form.file;
          var thisRef = storageRef.child(uid);
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
    } catch (error) {}
  },
  async getAllProduct({ commit }) {
    try {
      const items = [];
      const snapshot = await this.$fireStore.collection("products").get();
      snapshot.docs.map(doc => items.push({ item: doc.data(), key: doc.id }));
      commit("setProducts", items);
    } catch (error) {}
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
        .then(function() {})
        .catch(function(error) {});
    } catch (error) {}
  },
  async UpdateProduct({ commit }, { form, id }) {
    try {
      var name;
      if (form.file.name !== undefined) {
        name = uniqid();
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
            var storageRef = this.$fireStorage.ref(form.beforename);
            storageRef.delete().then(function() {});
          }
        })
        .then(() => {
          if (form.file.name !== undefined) {
            var storageRef2 = this.$fireStorage.ref();
            var file = form.file;
            var thisRef2 = storageRef2.child(name);
            thisRef2.put(file).then(() => {});
          }
        })
        .then(() => {
          form.categories = null;
          form.name = null;
          form.desc = null;
          form.file = null;
        });
    } catch (error) {}
  },
  async addRequest({}, mail) {
    try {
      this.$fireStore
        .collection("maillist")
        .add({
          mail: mail,
          answer: false,
          id: uniqid()
        })
        .then(() => {});
    } catch (error) {}
  },
  async parcaIstek({}, form) {
    try {
      this.$fireStore
        .collection("requests")
        .add(form)
        .then(() => {});
    } catch (error) {}
  },
  async getAllRequest({ commit }) {
    try {
      const items = [];
      const snapshot = await this.$fireStore.collection("requests").get();
      snapshot.docs.map(doc => items.push({ item: doc.data(), key: doc.id }));
      commit("setRequests", items);
    } catch (error) {}
  },
  async updateStatus({ commit }, id) {
    try {
      this.$fireStore
        .collection("requests")
        .doc(id)
        .update({
          status: true
        });
    } catch (error) {}
  },
  async deleteRequest({ commit }, id) {
    try {
      await this.$fireStore
        .collection("requests")
        .doc(id)
        .delete();
    } catch (error) {}
  },
  async getAllList({ commit }) {
    try {
      const items = [];
      const snapshot = await this.$fireStore.collection("maillist").get();
      snapshot.docs.map(doc => items.push({ item: doc.data(), key: doc.id }));
      commit("setList", items);
    } catch (error) {}
  },
  async deleteList({ commit }, id) {
    try {
      await this.$fireStore
        .collection("maillist")
        .doc(id)
        .delete();
    } catch (error) {}
  },
  async getInfo({ commit }) {
    try {
      const snapshot = await this.$fireStore
        .collection("information")
        .doc("company")
        .get();
      commit("setInfo", snapshot.data());
    } catch (error) {}
  },
  async updateInfo({ commit }, field) {
    try {
      this.$fireStore
        .collection("information")
        .doc("company")
        .update(field);
    } catch (error) {}
  },
  async addLogo({}, file) {
    try {
      var uid = uniqid();
      var storageRef = await this.$fireStorage.ref();
      var thisRef = storageRef.child(uid);
      thisRef.put(file).then(() => {
        this.$fireStore
          .collection("information")
          .doc("company")
          .update({
            logo: uid
          })
          .then(() => {
            var thisRef = storageRef.child(uid);
            thisRef.put(file);
          });
      });
    } catch (error) {}
  },
  async Login({ commit }, form) {
    try {
      const snapshot = await this.$fireStore
        .collection("information")
        .doc("Login")
        .get();
      const logininfo = snapshot.data();
      if (
        form.userName === logininfo.username &&
        form.password === logininfo.password
      ) {
        commit("setAuth", true);
        $nuxt.$router.push("admin/panel/products");
      } else {
        commit("setAuth", true);
      }
    } catch (error) {}
  },
  LogOut({ commit }) {
    commit("setAuth", false);
    $nuxt.$router.push("/admin/");
  },
  async nuxtServerInit(vuexContext) {
    return vuexContext.dispatch('getAllProduct')
  }
};
