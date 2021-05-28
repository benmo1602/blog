```
let dataset ={
  nodes: [
    {id: 0,label: "流动人员",shape: "rect"},
    {id: 1,label: "安全筛查",shape: "rect"},
    {id: 2,label: "热像仪人体测温筛查",shape: "diamond"},
    {id: 3,label: "人工复测",shape: "diamond"},
    {id: 4,label: "快速通过",shape: "rect"},
    {id: 5,label: "紧急处理",shape: "rect"}
   ],
   edges: [
     {source: 0,target: 1,label: ""},
     {source: 1,target: 2,label: ""},
     {source: 2,target: 4,label: "正常"},
     {source: 2,target: 3,label: "不正常"},
     {source: 3,target: 5,label: "不正常"},
     {source: 3,target: 4,label: "正常"}
   ]
}

```

```
//引入 d3,dagre-d3
<script src="./d3.v5.min.js"></script>
<script src="./dagre-d3.min.js"></script>
<script>
// 创建 graph 对象
let g = new dagreD3.graphlib.Graph();
//设置图
g.setGraph({
 rankdir:'TB'
});
dataset.nodes.forEach(item => {
    g.setNode(item.id, {
      //节点标签
      label: item.label,
      //节点形状
      shape: item.shape,
      //节点样式
       style: "fill:#fff;stroke:#000"
      })
 })
dataset.edges.forEach(item => {
     g.setEdge(item.source,item.target, {
        //边标签
        label: item.label,
        //边样式
        style: "fill:#fff;stroke:#333;stroke-width:1.5px"
      })
  })
// 创建渲染器
let render = new dagreD3.render();
// 选择 svg 并添加一个g元素作为绘图容器.
let svgGroup = d3.select('svg').append('g');
// 在绘图容器上运行渲染器生成流程图.
render(svgGroup, g);
</script>

```
