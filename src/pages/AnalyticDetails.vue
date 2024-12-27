<script setup lang="ts">
import { onMounted, ref } from "vue";
// @ts-ignore
import Layout from "../components/Layout.vue";
import { TAnalytic } from "../types";
import { getAnalytic } from "../api/analytic";
// @ts-ignore
import ContributionGraph from "../components/ContributionGraph.vue";
import "vue-code-highlight/themes/prism-coy.css"
import { api } from "../api";
import { RouterLink } from "vue-router";

const { id } = defineProps<{ id: string }>();
const analytic = ref<TAnalytic>()

const code  = `
import axios from "axios";
\n
async function runOnce(){
  let reqOptions = {
    url: "${api}/visite?id=${id}",
    method: "PUT",
    headers: {
      "Authorization": "Bearer ${localStorage.getItem("token")}"
    },
  }
  \n
  await axios.request(reqOptions);
}

runOnce()
`

onMounted(async () => {
  const res = await getAnalytic(id);
  analytic.value = res;
});
</script>

<template>
  <Layout with-profile>
    <template #main>
      <div
      class="absolutem z-20 flex justify-center w-full h-full overflow-hidden"
    >
      <div class="w-[40rem] h-full p-3 side border" v-highlight>
        <div class="flex flex-col gap-7 w-full h-full p-5 rounded-lg bg-white overflow-auto">
          <div role="tablist" className="tabs tabs-bordered w-full">
            <input type="radio" name="my_tabs_1" role="tab" className="tab text-neutral-900 text-nowrap" aria-label="Graph" defaultChecked/>
            <div role="tabpanel" className="tab-content py-10 w-full overflow-auto">
              <ContributionGraph title="visitors" :contributions="analytic?.visiter" />
            </div>
          
            <input type="radio" name="my_tabs_1" role="tab" className="tab text-neutral-900 text-nowrap" aria-label="How to use ?" />
            <div role="tabpanel" className="tab-content w-full overflow-auto">
              <pre class="language-javascript">
                <code class="flex justify-start border-r">
                  {{code}}
                </code>
              </pre>
            </div>

            <RouterLink to="/analytic">
              <input type="radio" name="my_tabs_1" role="tab" className="tab text-neutral-900 text-nowrap" aria-label="back" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    </template>
  </Layout>
</template>
