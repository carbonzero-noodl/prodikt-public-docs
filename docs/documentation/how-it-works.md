## Så funkar det

![Prodikt](../public/logo_black.svg)

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>

<span v-for="i in 3">{{ i }}</span>