<template>
  <div>
    <!-- Sélecteur d'année -->
    <select v-model="selectedYear" @change="generateWeeks">
      <option v-for="year in years" :key="year" :value="year">
        {{ year }}
      </option>
    </select>

    <!-- Calendrier -->
    <div class="calendar">
      <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="week">
        <div
          v-for="(day, dayIndex) in week"
          :key="dayIndex"
          :class="['day', getColor(day)]"
          :title="day ? `Date: ${formatDate(day.createdAt)}` : ''"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";

export default {
  name: "ContributionCalendar",
  props: {
    contributions: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    // Année sélectionnée
    const selectedYear = ref(new Date().getFullYear());

    console.log(props.contributions);
    

    // Liste des années disponibles pour le filtrage
    const years = computed(() => {
      const yearsSet = new Set(
        props.contributions?.map((c) =>{
          console.log(new Date(c.createdAt).getFullYear());
          
          return new Date(c.createdAt).getFullYear()
        }
        )
      );
      return Array.from(yearsSet).sort((a, b) => a - b);
    });

    // Semaines générées pour le calendrier
    const weeks = ref([]);

    console.log(years.value, weeks.value);
    

    // Fonction pour générer les semaines en fonction de l'année sélectionnée
    const generateWeeks = () => {
      const startDate = new Date(`${selectedYear.value}-01-01T00:00:00.000Z`);
      const endDate = new Date(`${selectedYear.value}-12-31T23:59:59.999Z`);

      const newWeeks = [];
      let week = new Array(7).fill(null);
      console.log(week);
      
      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const dayIndex = d.getDay(); // Jour de la semaine (0=Dimanche, 1=Lundi, ...)
        const found = props.contributions?.find(
          (c) =>
            new Date(c.createdAt).toISOString().slice(0, 10) ===
            d.toISOString().slice(0, 10)
        );
        

        // Ajoute l'objet contribution ou null
        week[dayIndex] = found || null;

        // Si c'est la fin de la semaine, on ajoute la semaine au tableau
        if (dayIndex === 6) {
          newWeeks.push([...week]); // Clone la semaine
          week = new Array(7).fill(null); // Nouvelle semaine
        }
      }

      weeks.value = newWeeks;
    };

    // Surveiller les changements dans props.contributions
    watch(
      () => props.contributions,
      () => {
        generateWeeks();
      },
      { immediate: true, deep: true }
    );

    // Fonction pour retourner la classe de couleur
    const getColor = (day) => {
      if (!day) return "none";
      return "low"; // Personnalisez les niveaux ici
    };

    // Fonction pour formater les dates affichées dans les tooltips
    const formatDate = (isoString) => {
      const date = new Date(isoString);
      return date.toLocaleDateString(); // Affiche selon les réglages locaux
    };

    // Générer les semaines lors de l'initialisation
    onMounted(() => {
      generateWeeks();
    });

    return {
      selectedYear,
      years,
      weeks,
      getColor,
      generateWeeks,
      formatDate,
    };
  },
};
</script>

<style>
.calendar {
  display: flex;
  flex-direction: column;
}
.week {
  display: flex;
}
.day {
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 3px;
}
.none {
  background-color: #ebedf0;
}
.low {
  background-color: #c6e48b;
}
</style>
