<template>
    <v-layout  justify-center>
        <v-dialog
            max-width="600px"
            transition="dialog-transition"
          
        >
            <v-btn  slot="activator" class="success">Add New Project</v-btn>
            <v-card>
                <v-card-title primary-title>
                    <h2 class="orange--text">Add New Project</h2>
                </v-card-title>
                <v-card-text>
                    <v-form ref="form">
                        <v-text-field
                            name="name" label="Title" id="id" v-model="title" prepend-icon="folder" :rules="inputRules"
                        ></v-text-field>
                    <v-textarea label="Info" v-model="info" prepend-icon="edit" :rules="inputRules"></v-textarea>
                    <v-menu offset-y>
                         <v-text-field
                        name="date"
                        label="Due Date"
                        id="id"
                        :value="formattedDate"
                        slot="activator"
                        prepend-icon="date_range"
                    ></v-text-field>
                    <v-date-picker v-model="due"></v-date-picker> 
                    </v-menu>
                    <v-spacer></v-spacer>
                  

                    <v-btn flat class="success mx-0 mt-3" @click="submit" >Add Project</v-btn>
                    <v-btn flat class="warning ml-3 mt-3 "  >Cancel</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import format from 'date-fns/format'
import { constants } from 'crypto';
    export default {
        data(){
            return{
                title: '',
                info: '',
                due: null,
                inputRules: [
                    v => v.length >=  3 || 'Minimum length Character is 3' 
                ]
            }
        },
        computed: {
            formattedDate() {
                return this.due ? format(this.due, 'Do MMM YYYY') : ''
            }
        },
        methods: {
            submit(){
               if(this.$refs.form.validate() ){
                   console.log(this.title, this.info)
               }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>