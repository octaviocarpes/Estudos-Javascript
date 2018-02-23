<template>
  <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" type="tipo">{{ rotulo }}</button>
</template>
<script>
export default {
//   ['tipo', 'rotulo','confirmacao', 'estilo'],
  props:{

      tipo:{
          required: true,
          type: String
      },
      rotulo:{
          required:true,
          type: String
      },
      confirmacao:Boolean,
      estilo: String

  },

  methods:{
      disparaAcao(){
          if(this.confirmacao){
            if(confirm('Confirma a operacao?')){
                this.$emit('botaoAtivado');
            }
            return;
          }
          this.$emit('botaoAtivado');
      }
  },

  computed:{
      estiloDoBotao(){
          if(this.estilo == '') return 'botao-padrao';
          if(this.estilo == 'padrao') return 'botao-padrao';
          if(this.estilo == 'perigo') return 'botao-perigo';
      }
  }
}
</script>
<style>
.botao{
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
}

.botao-perigo{
    background-color: firebrick;
    color: white;
}

.botao-padrao{
    background-color: darkcyan;
    color: white
}

</style>
