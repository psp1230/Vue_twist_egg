<template>
  <v-app id="inspire">
    <v-container>
        <v-row justify="center">
          <v-col md="8" offset-sm="2">
            <v-row>
              <v-col v-for="n in 12" :key="n" cols="4">
                <v-card width="90" flat>
                  <Game></Game>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Game from "@/components/Gamecard";
export default {
  components: {
    Game
  }
};
</script>
