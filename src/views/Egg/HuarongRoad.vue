<template>
  <div class="slider-game">
    <div id="moves">Moves: {{ movesCount }}</div>
    <div class="container">
      <div
        v-for="(image, index) in imagesArr"
        :key="index"
        :data-position="`${index}`"
        class="image-container"
        @click="selectImage(index)"
      >
        <img
          :src="getImageSrc(image)"
          class="image"
          :class="{ target: image === 9 }"
        />
      </div>
    </div>
    <div class="original-image">
      <img src="original_image.png" alt="Original Image" />
    </div>
    <div v-if="won" class="cover-screen">
      <button @click="resetGame">Start New Game</button>
    </div>
  </div>
</template>

<script>
import imga1 from '@/views/Egg/images/image_part_001.png'
import imga2 from '@/views/Egg/images/image_part_002.png'
import imga3 from '@/views/Egg/images/image_part_003.png'
import imga4 from '@/views/Egg/images/image_part_004.png'
import imga5 from '@/views/Egg/images/image_part_005.png'
import imga6 from '@/views/Egg/images/image_part_006.png'
import imga7 from '@/views/Egg/images/image_part_007.png'
import imga8 from '@/views/Egg/images/image_part_008.png'
import imga9 from '@/views/Egg/images/image_part_009.png'

export default {
  name: 'SlidingPuzzleGame',
  data () {
    return {
      movesCount: 0,
      imagesArr: [],
      won: false,
      imgList: [
        imga1, imga2, imga3, imga4, imga5,
        imga6, imga7, imga8, imga9
      ]
    }
  },
  mounted () {
    this.initGame()
  },
  methods: {
    randomNumber () {
      return Math.floor(Math.random() * 8) + 1
    },
    randomImages () {
      const numbers = []
      for (let i = 1; i <= 8; i++) {
        let number
        do {
          number = this.randomNumber()
        } while (numbers.includes(number))
        numbers.push(number)
      }
      numbers.push(9)
      this.imagesArr = numbers
    },
    gridGenerator () {
      const container = this.$refs.container
      container.innerHTML = ''
      this.imagesArr.forEach((image, index) => {
        const div = document.createElement('div')
        div.setAttribute('data-position', `${index}`)
        div.classList.add('image-container')
        div.innerHTML = '<img :src="getImageSrc(image)" class="image" :class="{ target: image === 9 }" />'
        container.appendChild(div)
      })
    },
    getImageSrc (image) {
      return image === 9 ? imga9 : this.imgList[image - 1]
    },
    selectImage (index) {
      const blankIndex = this.imagesArr.length - 1
      if (this.checkAdjacent(index, blankIndex)) {
        const temp = this.imagesArr[index]
        this.imagesArr[index] = this.imagesArr[blankIndex]
        this.imagesArr[blankIndex] = temp

        if (this.imagesArr.slice(0, 8).join('') === '12345678') {
          this.won = true
        }
        this.movesCount += 1
      }
    },
    checkAdjacent (index1, index2) {
      const { row: row1, col: col1 } = this.getCoords(index1)
      const { row: row2, col: col2 } = this.getCoords(index2)
      if (row1 === row2) {
        if (col2 === col1 - 1 || col2 === col1 + 1) {
          return true
        }
      } else if (col1 === col2) {
        // up/down
        if (row2 === row1 - 1 || row2 === row1 + 1) {
          return true
        }
      }
      return false
    },
    getCoords (index) {
      return { row: Math.floor(index / 3), col: index % 3 }
    },
    initGame () {
      this.won = false
      this.movesCount = 0
      this.randomImages()
      this.gridGenerator()
    },
    resetGame () {
      this.initGame()
    }
  }
}
</script>

<style scoped>

img {
  max-width: 100%;
}
.slider-game {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 5%;
}
.container {
  display: grid;
  width: 25em;
  height: 25em;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 8em;
}
.original-image {
  width: 25em;
  height: 25em;
}
.image-container {
  border: 1px solid #ffffff;
}
.cover-screen {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #edb506;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#start-button {
  font-size: 1.2em;
  padding: 0.8em 2em;
  border: none;
  border-radius: 3em;
  cursor: pointer;
}
#moves {
  position: relative;
  margin: 1em;
  text-align: right;
}
.hide {
  display: none;
}
@media only screen and (max-width: 768px) {
  .slider-game {
    flex-direction: column;
  }
  .container {
    width: 20em;
    height: 20em;
    grid-auto-rows: 6em;
  }
  .original-image {
    width: 20em;
    height: 20em;
  }
}
</style>
