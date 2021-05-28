## D3 比例尺

    domain的数据集映射到range数据

### 1. d3.scaleLinear() 线性比例尺

### 2. d3.scaleBand() 序数比例尺

### 3. d3.scaleOrdinal() 序数比例尺

### 4. d3.scaleQuantize() 量化比例尺

### 5. d3.scaleTime() 时间比例尺

### 6. 颜色比例尺

### 7. 其他比例尺

  d3.scaleIdentity() // 恒等比例尺
  d3.scaleSqrt() // 乘方比例尺
  d3.scalePow() // 类似scaleSqrt的乘方比例尺
  d3.scaleLog() // 对数比例尺
  d3.scaleQuantile() // 分位数比例尺

### 8. invert()与invertExtent()方法

let scale = d3.scaleLinear().domain([1,5]).range([0,100])
scale.invert(50) // 输出:3

let scale2 = d3.scaleQuantize().domain([0,10]).range(['small', 'big'])
scale2.invertExtent('small') // 输出:[0,5]
