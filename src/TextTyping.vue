<template>
    <div>
        <span :class="fixedTextClass" v-html="fixedText"></span>
        <span :class="dynamicTextClass" v-html="currentText"></span>
        <span :class="caretClass" :style="{opacity: blinking ? '1': '0'}">|</span>
    </div>
</template>

<script>
    export default {

        props: {
            'fixedText': {
                type: String,
            },
            'texts': {
                type: Array,
            },
            'speed': {
                type: Number,
                default: 100
            },
            'delay': {
                type: Number,
                default: 3000
            },
            'fixedTextClass': {
                default: '',
            },
            'dynamicTextClass': {
                default: '',
            },
            'caretClass': {
                default: '',
            },
        },

        data() {
            return {
                currentText: '',
                currentIndex: 0,
                cursor: 0,
                blinking: false,
                currentDelay: 0
            }
        },

        mounted() {
            window.setInterval(this.update, this.speed);
        },

        methods: {
            update() {
                this.blinking = ! this.blinking;

                if (this.cursor < this.texts[this.currentIndex].length) {
                    this.cursor++;
                    this.currentText = this.texts[this.currentIndex].substr(0, this.cursor);
                    return;
                }

                this.currentText = this.texts[this.currentIndex];

                this.currentDelay += this.speed;

                if (this.currentDelay >= this.delay) {
                    this.reset();
                }
            },

            reset() {
                this.currentDelay = 0;
                this.cursor = 0;
                this.currentIndex = (this.currentIndex + 1) % this.texts.length;
            }
        }
    }
</script>
