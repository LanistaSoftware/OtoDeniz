<template>
    <div class="wish-list w-100 " id="wish">
      <Operations>
      </Operations>
      <b-row class="m-0 px-5 d-flex justify-content-center product-container">
        <b-table responsive striped hover :items="items" :fields="fields">
          <template v-slot:cell(islemler) class="text-center">
            <b-button variant="danger" block size="sm" class="mr-2"> <b-icon-trash></b-icon-trash></b-button>
          </template>
        </b-table>
      </b-row>
    </div>
</template>

<script>
export default {
name: 'wishList',
data() {
    return {
        fields: ['carInfo', 'modelYear', 'chassisNo', 'partName', 'name', 'surName', 'phone', 'email', 'islemler'],
        items: [
          { carInfo: 'Ford Focus 1.6 TDI', modelYear: 2009, chassisNo: 'AKDFJKDSIDK4444KSJKSJ', partName: 'Krank Mili', name: 'Serkan', surName: 'Korkaç', phone: '05340303000', email: 'korkac@kackor.com' },

        ],
    }
},
}
</script>

<style>

</style>