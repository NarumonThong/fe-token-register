<template>
    <div class="register">
        <img src="/img/logo3.png" alt="Logo" class="img-logo">
            <div class="card">
                <h1 class="card-header">
                    ลงทะเบียน
                </h1>
                <div class="card-body">
                            
                    <form @submit.prevent="onSubmit()">
                        <div class="form-group mb-3">
                            <label for="">ชื่อ</label>
                            <input type="text" name="r_firstname"
                                v-validate="'required'"
                                v-model.trim="form.r_firstname"
                                :class="{ 'is-invalid': errors.has('r_firstname') }"
                                class="form-control">
                            <span class="invalid-feedback">{{ errors.first('r_firstname') }}</span>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">นามสกุล</label>
                            <input type="text" name="r_lastname"
                                v-validate="'required'"
                                v-model.trim="form.r_lastname"
                                :class="{ 'is-invalid': errors.has('r_lastname') }"
                                class="form-control">
                            <span class="invalid-feedback">{{ errors.first('r_lastname') }}</span>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">เบอร์โทรศัพท์</label>
                            <input type="text" name="r_phone"
                                v-validate="'required'"
                                v-model.trim="form.r_phone"
                                :class="{ 'is-invalid': errors.has('r_phone') }"
                                class="form-control">
                            <span class="invalid-feedback">{{ errors.first('r_phone') }}</span>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">E-mail</label>
                            <input type="text" name="r_email"
                                v-validate="'required'"
                                v-model.trim="form.r_email"
                                :class="{ 'is-invalid': errors.has('r_email') }"
                                class="form-control">
                            <span class="invalid-feedback">{{ errors.first('r_email') }}</span>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">ID Line</label>
                            <input type="text" name="r_line"
                                v-validate="'required'"
                                v-model.trim="form.r_line"
                                :class="{ 'is-invalid': errors.has('r_line') }"
                                class="form-control">
                            <span class="invalid-feedback">{{ errors.first('r_line') }}</span>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">รหัสกระเป๋า</label>
                            <input type="text" name="r_number"
                                v-validate="'required'"
                                v-model.trim="form.r_number"
                                :class="{ 'is-invalid': errors.has('r_number') }"
                                class="form-control">
                            <span class="invalid-feedback">{{ errors.first('r_number') }}</span>
                        </div>

                        <div v-if="errorMessage" class="alert alert-warning text-center">
                            {{ errorMessage }}
                        </div>

                        <div class="d-grid gap-2 mb-3">
                            <button class="btn btn-success" type="submit">ลงทะเบียน</button>
                            <button class="btn btn-secondary" type="button">ยกเลิก</button>
                        </div>
        
                    </form>

                </div>
            </div>
    </div>
</template>

<script>
import axios from "axios";
import url, { devServer, stagingServer } from "../../vue.config.js";
export default {
    data() {
        return {
            form: {
                r_firstname: "",
                r_lastname: "",
                r_phone: "",
                r_email: "",
                r_line: "",
                r_number: ""
            },
            errorMessage: ""
        }
    },
    methods: {
        // บันทึกข้อมูล
        onSubmit() {
            this.$validator.validateAll().then(async valid => {
                if (!valid) return;
                axios
                    .post(devServer.register, this.form)
                    .then(response => {
                        this.onReset();
                        this.onRedirectToHome();
                    })
                    .catch(err => (this.errorMessage = err.response.data.message));
            });
        },
        // ล้างค่า from
        onReset() {
            this.$validator.reset();
            this.form = {
                r_firstname: "",
                r_lastname: "",
                r_phone: "",
                r_email: "",
                r_line: "",
                r_number: ""
            }
        },
        // ไปที่หน้าเข้าสู่ระบบ
        onRedirectToHome() {
            this.$router.push({ name: "Confirm" });
        }

    }
}
</script>

<style scoped>
.register {
    max-width: 500px;
    margin: auto;
    margin-bottom: 30px;
}
.img-logo {
    width: 50%;
    display: block;
    margin: auto;
    margin-top: 10%;
    margin-bottom: 25px;
}
h1 {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 5px;
}
.card {
  margin-bottom: 15%;
}
.card-body {
  padding-left: 15%;
  padding-right: 15%;
}

</style>>
