import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function useQueryParams() {
  const route = useRoute();
  const router = useRouter();

  // Getter pour obtenir un paramètre de la requête
  const getQueryParam = (key: string) => {
    return route.query[key];
  };

  // Setter pour mettre à jour un paramètre de la requête
  const setQueryParam = (key: string, value: string) => {
    const newQueryParams = { ...route.query, [key]: value };
    router.push({ query: newQueryParams });
  };

  // Suppression d'un paramètre
  const removeQueryParam = (key: string) => {
    const { [key]: removed, ...newQueryParams } = route.query;
    router.push({ query: newQueryParams });
  };

  // Retourner les paramètres de la requête sous forme d'objet réactif
  const queryParams = computed(() => route.query);

  return {
    queryParams,
    getQueryParam,
    setQueryParam,
    removeQueryParam,
  };
}
