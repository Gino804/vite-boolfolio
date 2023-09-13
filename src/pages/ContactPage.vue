<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contact-message';
const emptyForm = {
    email: '',
    subject: '',
    message: ''
}

export default {
    name: 'ContactPage',
    data: () => ({
        form: emptyForm
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form).then(() => { this.form = emptyForm })
        }
    }
}
</script>

<template>
    <h1>Contact</h1>
    <form @submit.prevent="sendForm">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model.trim="form.email">
        </div>
        <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subject" v-model.trim="form.subject">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="5" v-model.trim="form.message"></textarea>
        </div>
        <button class="btn btn-primary">Submit</button>
    </form>
</template>