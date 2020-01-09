<!--
 * @Description: Do not edit
 * @Author: benmo
 * @Date: 2020-01-09 14:37:33
 * @LastEditors  : benmo
 -->
 # Dart中List的相关方法总结

  ### 初始化List

  ```
  //非固定长度list
  var testList = List();
  print(testList.length);//输出0

  //固定长度List
  var testList2 = List(2);
  print(testList2.length);//输出2

  //元素类型固定：
  var testList3 = List<String>();
  testList3.add("哈哈哈");
  //testList3.add(1);//报错，1不是String类型

  //直接赋值
  var testList4 = [123,2312];
  print(testList4.length);

  //testList4.add("12312");//错误，类型不正确
  var testList5 = [true,"嘎嘎嘎",1];
  testList5.add(1.6);//可以添加

```
### 常用字段
```
  var testList6 = [1,"2",3,34532,555];
  //length属性，返回队列长度
  print(testList6.length);

  //isEmpty属性，返回列表是否为空
  print(testList6.isEmpty);

  //isNotEmpty属性，返回列表是否有元素
  print(testList6.isNotEmpty);

  //获取List中的第一个元素
  print("获取list中的第一个元素${testList6.first}");

```

```
  //添加数据
  testList.add("123");
  testList.add("大傻逼");

  //下面的程序会报错“Unsupported operation: Cannot add to a fixed-length list”固定长度的list不能通过add添加数据
  // testList2.add("哈哈哈");
  // testList2.add("嘿嘿嘿");
  // testList2.add("滚滚滚");
  //固定长度的List使用以下方式可以设置数据
  testList2[0] = "你是谁";
  testList2[1] = "我是谁";
  testList2[0] = "100";
  print(testList2);

  //添加元素
  testList6.add(1.33);
  print(testList6);

  //添加全部元素
  testList6.addAll(testList5);
  print(testList6);

  testList.add("嘤嘤嘤");

  //向指定位置添加元素
  testList6.insert(2, "小煞笔");
  print(testList6);
  //向指定位置添加一个新的List，第二个参数为实现了Iterable接口的对象均可
  testList6.insertAll(3, testList3);
  print(testList6);

  //将另外一个实现了iterabe接口的数据拼接到当前的List后面
  Set testSet = Set();
  testSet.add(123);
  testSet.add(123);
  testSet.add(123);
  var testFollowedBy = testList6.followedBy(testSet);
  print("testFollowedBy ${testFollowedBy}");


```
### 删除

```

  //删除指定元素
  testList6.remove("哈哈哈");
  print(testList6);

  //删除最后一个元素
  testList6.removeLast();
  print(testList6);

  //删除指定位置的元素
  testList6.removeAt(testList6.length - 1);
  print(testList6);

  //删除指定区域的元素
  testList6.removeRange(0,1);
  print(testList6);

  //下面这个方法是将列表List中的toString之后的字符串的长度等于3的元素全部删除
  testList6.removeWhere((item) => item.toString().length == 3);
  print("删除列表中toString后长度为3的元素：==> $testList6");

```

### 修改数据

```

  //设置元素，下面的方法将testList6中的第一个和第二个元素设置为testList中的元素
  //如果testList中的元素个数不够需要替换的元素个数，会报错
  //如果testList中的元素个数大于需要替换的元素个数，可以通过设置第四个参数，表示跳过testList的前面几个元素，默认为0
  //如果设置了第四个参数之后testList中的元素个数不够需要替换的元素个数，会报错
  testList6.setRange(0, 2, testList,1);
  print("testList===>${testList}");

  //替换列表中的元素
  //前两个参数表示要替换列表中的元素的位置，如下面的表示将列表中第三个到第十个元素替换为testList5中的元素
  //第二个参数<=列表的长度
  //第一个参数<=第二个参数，否则会报错
  //就是list会首先删除第一个参数到第二个参数之前的元素，然后将需要替换的list添加在第一个参数的位置。
  print(testList6.length);
  testList6.replaceRange(10, 10, testList7);
  print(testList6);

  //使用一个值替换List中的指定位置的全部值
  //比如下面的操作结果就是将List中第三个和第四个元素使用item的值替换
  var item ="哼哼哼";
  testList6.fillRange(3, 5,item);
  print("fillRange item ===>$item");
  print(testList6);

  //设置list列表中的元素
  //第一个参数表示从第几个元素开始
  //下面的例子表示从第二个位置开始将后面的tetsList7.length个元素替换为testList7中的元素
  //如果第一个参数+第二个参数.length大于要修改的list的length会报错
  print(testList6);
  testList6.setAll(2, testList7);
  print("setAll() ===> $testList6");

```

###  查询操作
```
  //截取一个List中的其中几个元素，第一个参数表示开始的位置，第二个参数为可选参数，表示结束的位置
  //如果第二个参数大于被截取List的长度，会报错。
  var subList = testList6.sublist(0,3);
  print("截取到新的List==> ${subList}");

  //获取指定位置区间的元素，并返回一个新的list,和subList的区别是subList返回一个新的List，而getRange
  //返回一个实现了Iterable接口的对象
  var rangeList = testList6.getRange(5,10);
  print("rangeList===>${rangeList}");
  print(testList6);

  //将满足条件的元素保留下来，不满足条件的元素删除
  //如下面的例子是将元素中字符长度=3的元素保存下来
  testList6.retainWhere((obj) => obj.toString().length == 3);
  print(testList6);

  //查看元素最后一次出现的位置
  //第二个参数为可选参数，表示查找的位置
  //如果不传，默认查找全部的List
  //如果传递了第二个值，则从0查找到第二个值所指定的位置
  //没有查找到的话返回-1
  //第二个值可以大于List的length
  //第二个参数用start来命名，可以认为这个方法是从后向前开始查找，这样就很好理解start表示的是开始位置了。
  testList6.insert(4, "嘻嘻嘻");
  testList6.add("哼哼哼");
  print(testList6);
  var testPosition = testList6.lastIndexOf("哼哼哼",testList6.length + 100);
  print("testPosition ====> $testPosition");

  //元素的索引,没有找到元素会返回-1
  //可以和上面的lastIndexof形成对比，
  //第二个参数可以指定查找的范围
  print(testList6.indexOf("哼哼哼",5));

  //遍历查询有没有满足条件的数据，如果有就返回true，没有就返回false
  //参数传入一个返回bool的函数
  var testExit = testList6.any((item) => checkData(item));
  print("textExit==>$testExit");

//遍历查询是不是所有的数据都满足这个条件，如果有不满足的数据，直接返回false
  bool testEvery = testList6.every((item) => checkData(item));
  print("testEvey ===> $testEvery");
  /**
   * 对比any和every方法：
   * checkData()用来查看传入的参数是否为空，如果参数为空，就返回true，如果参数不为空，就返回false
   * 结合any和every方法的源码：any方法的源码中，遍历查询是否有满足条件的元素，如果找到满足条件的元素，那么直接返回true，
   * every方法的源码中遍历查询有没有不满足条件的元素，如果发现有不满足的元素，直接返回false
   * 针对checkData()方法来说
   * any在遍历的时候会将每一个元素传入checkData中，如果有一个元素是空的，此时就会直接返回true，目前返回了false，说明在testList6中没有为空的元素
   * every在遍历的时候将每一个元素传入checkData中，查看是否全部元素都是空的，如果其中有一个元素不是空的，就直接返回false,因此在checkData中由于第一个元素就
   * 不是空的，所以不满足每一个元素都是空的条件，直接返回false
   */

  //这个方法相当于查看List中的数据类型是不是都是指定的数据类型，
  //如果发现List中存在不是<>中指定的数据类型就会报错
  print(testList6);
  List<String> testStringList = testList6.cast<String>();
  print("testIntList ===> $testStringList");

  //查看List中是否存在指定元素
  print("是否存在哼哼哼${testList6.contains("哼哼哼")}");

  //查找指定位置的元素
  //传入的参数必须是合法的，也就是必须在是int类型，然后必须在0到list.length之间
  //从源码也可以看出：会首先判断传入的蚕食是否是int类型，然后会判断参数是否小于0，接着执行循环，开始遍历，如果遍历完了还没找到指定的位置
  //就说明这个指定的位置有问题。
  var position = testList6.elementAt(testList6.length - 1);
  print("position ====> $position");

  //可以理解为将一个一维数组扩展为二维数组
  var testList9 = testList2.expand((item) => [item,item.toString() + "啊"].toList());
  print("test expand ===> $testList9");
  //同时也可已经一个二维数组解封,解封时需要数组里面的ietm仍然是一个list
  var testList10 = [[12,12],[22,44]];
  var testList11 = testList10.expand((item) => item.toSet());
  print("test expand ===> $testList11");

  //满足条件的第一个元素
  //从源码可以看出，firstWhere方法会首先从列表中查找有没有满足条件的item，如果没有找到，会判断有没有
  //传入第二个参数，如果第二个参数不为空，就执行第二个参数的方法，如果第二个参数为空，就直接出错。
  var testFirstWhere = testList6.firstWhere((item) => checkExitHa(item),orElse: getHi);
  print("满足条件的第一个元素：$testFirstWhere");

  //有条件地查询所需数据的位置
  //第一个参数是返回bool值的函数，第二个参数是起始位置
  //下面的例子是找出列表中元素toString之后长度是2的元素出现的位置
  testList6.insert(1, 23);
  testList6.add(34);
  int testIndexWhere1 = testList6.indexWhere((item) => getLength2(item.toString()));
  int testIndexWhere2 = testList6.indexWhere((item) => getLength2(item.toString()),3);
  print("testIndexWhere1 ${testIndexWhere1}");//输出1
  print("testIndexWhere2 ${testIndexWhere2}");//输出10

  //有条件的查询需要查询的数据最后一次出现的位置
  //这个方法具体的执行可以理解为倒序执行，从最后一个元素向前开始查找符合要求的数据
  //第二个参数就是指定开始执行的位置
  int testLastIndexWhere1 = testList6.lastIndexWhere((item) => getLength2(item.toString()));//输出10
  int testLastIndexWhere2 = testList6.lastIndexWhere((item) => getLength2(item.toString()),testList6.length - 2); //输出1
  print("testLastIndexWhere ${testLastIndexWhere1}");
  print("testLastIndexWhere ${testLastIndexWhere2}");

  //返回满足条件的元素，第一个参数指定需要满足的条件，第二个参数为可选参数，指定不满足条件的时候需要执行的操作
  print("\n ${testList6}");
  var testLastWhere1 = testList6.lastWhere((item) => item.toString().length == 2 ? true : false);//没有找到符合要求的数据就会报出异常，程序会Crash
  var testLastWhere2 = testList6.lastWhere((item) => item.toString().length == 1 ? true : false,orElse: getHi);//没有找到符合要求的数据就会去执行getHi方法，返回getHi方法执行结果
  print("testLastWhere: ${testLastWhere1}");
  print("testLastWhere: ${testLastWhere2}");

  //检查List中是否只有一个元素，如果只有一个元素会输出这个元素，如果没有元素会抛出没有数据的异常，如果多于一个元素，会抛出too many elemets异常
  List testList13 = List();
  testList13.add(123);
  print("\n testSingle:${testList13.single}");

  //有条件的查询满足条件的元素是否只出现了一次
  //第二个参数是可选参数，用于当第一个条件不满足时执行的操作
  //具体执行的逻辑如下：
  //在List中查找满足条件的元素
  //如果没有找到满足条件的元素，查看orElse是否设置，如果设置，就执行orElse设置的函数
  //如果找到了满足条件的元素，并且满足条件的元素只有一个，输出这个元素的值
  //如果找到了满足条件的元素，但是满足条件元素的数量大于一个，就会抛出too many elements 异常，此时程序会直接crash,不会执行orElse设置的函数
  testList6.add(1);
  var testSingleWhere = testList6.singleWhere((item) => item.toString().length == 1,orElse: getHi);
  print("\ntestSingleWhere ${testSingleWhere}, type is ${testSingleWhere.runtimeType} \n");

  //取出前面多少个元素放在新的list中
  var testTake = testList6.take(3);
  print("\ntestTake:${testTake},and type is ${testTake.runtimeType}\n");

  //返回List中满足条件的元素的惰性迭代
  //从第一个元素开始查找符合条件的元素，一直查找到不符合条件的元素结束
  //注意这里是惰性迭代，也就是说如果满足条件的元素并不是按顺序排列的，分布在列表的任何位置，那么
  //这个方法查找只会查找处前面符合条件的元素，中间发现有元素不符合条件就会停止查找，即使后面还有符合条件的元素也不会再去查找了
  print(testList6);
  var testTakeWhile = testList6.takeWhile((item) => item.toString().length == 3);
  print("\ntestTakeWhile:${testTakeWhile},and type is ${testTakeWhile.runtimeType}\n");

  //创建一个可包含此列表的新的列表
  //growable是一个可选参数，默认为true,表示创建一个可变长度的列表
  //如果传入false，则是一个固定长度的列表
  var testToList = testList6.toList(growable: true);
  var testToList1 = testList6.toList(growable: false);
  //testToList1.add("123");//异常：testToList是一个固定长度的列表，无法进行添加数据的操作
  //testToList1.removeAt(0);//异常：固定列表无法进行删除数据的操作
  print("\ntestToList: ${testToList},and type id ${testToList.runtimeType}\n");
  print("\ntestToList1: ${testToList1},and type id ${testToList1.runtimeType}\n");

  //查找列表中满足条件的数据，条件由传入的函数参数决定
  var testWhere = testList6.where((item) => item.toString().length == 3);
  print("\ntestWhere:${testWhere} and type is ${testWhere.runtimeType}\n");

  //取出List列表中指定类型的元素，并放入新的列表中
  //如下面是将List中数据类型为String的元素全部取出放入到新的List中
  print(testList6);
  var testWhereType= testList6.whereType<String>();
  print("\ntestWhereType:${testWhereType},and type is ${testWhereType.runtimeType}\n");

```

### 其他操作

```

  print(testList6);
  //排序
  testList6.sort((a,b) => a.toString().length.compareTo((b.toString().length)));
  print("根据字符的长度排序：${testList6}");

  //将List倒序排列之后赋给一个新的list，
  var testList8 = testList6.reversed;
  print("倒序排列List===> $testList8");

  //根据position将list转换为对应的map  Map<int,Element>
  //也就是[0:element ......]
  var testMap = testList6.asMap();
  print("testMap ====> $testMap");

  //将List列表中的顺序打乱
  //可以传入一个Random对象作为可选参数
  print(testList6);
  testList6.shuffle();
  print("shuffle ===> $testList6");

  //对列表中的数据做指定的操作
  //下面的操作是在列表开始的时候加上“哈哈哈”这个字符串然后将后面的元素都拼接起来
  print(testList6);
  String str = testList6.fold("哈哈哈",(pre,item) => pre + item );
  print("test fold ====> $str");

  //List循环输出数据
  testList6.forEach((item) => print(item));

  //将List作为Iterator进行使用
  print(testList6);
  var testIterator = testList6.iterator;
  while(testIterator.moveNext()){
    print("testIterator: ${testIterator.current}");//输出当前值
  }

  //使用join中的指定的字符串分隔List中的每个元素，并将其作为字符串返回
  //通过源码可以看出，首先会将List作为Iterator来使用
  //如果Iterator中没有元素，就直接返回一个空的字符串，注意不是null，而是 ""
  //接着判断join()中的参数如果为空或者为 ""，直接将Iterator中的元素拼接然后返回
  //如果join()中有参数，就是用join中的参数作为分隔符拼接Iterator中的元素然后返回
  String testJoin1 = testList6.join();
  String testJoin2 = testList6.join(",");
  String testJoin3 = testList6.join("哒哒哒");
  print("join中无参数：${testJoin1}");
  print("使用,作为分隔符${testJoin2}");
  print("想要在最后一个元素之前的元素后面都添加一个字符串然后返回${testJoin3}");

  //下面的map方法和Map没有任何关系,执行结果和match更像
  //这个方法的执行逻辑是将List中的每个元素拿出来和map(f)中传入的f函数条件进行比较
  //如果符合条件就会返回true，否则就会返回false
  //同时返回的数据也是实现了Iterable的接口,注意是Iterable而不一定是List
  var testMap1 = testList6.map((item) => item.toString().length == 2);
  print("\ntestMap1:${testMap1}");
  print("testMap1: ${testMap1.runtimeType} \n");

  //这个方法可以用，但是不知道具体的应用实例
  //这个方法首先会传入列表的第一个和第二个数据，对这两个数据进行传入的函数操作，然后会将函数的返回值作为下一次操作的第一个参数
  print("${testList6}");
  var testReduce = testList6.reduce((value,element) => checkReduce(value.toString(), element.toString()));
  print("\ntestReduce ${testReduce} type is ${testReduce.runtimeType}\n");

  //跳过前面多少个元素，返回一个SubListIterable，和subList的操作相似
  print(testList6);
  var testSkip = testList6.skip(2);
  print("\ntestSkip: ${testSkip}, and type is ${testSkip.runtimeType}\n");

  //跳过列表中满足条件的前面的元素，从第一个元素开始查找，一直查找到不满足条件的元素为止
  //条件由传入的函数参数决定
  testList6.insert(0, "呸呸呸");
  var testSkipWhile = testList6.skipWhile((item) => item.toString().length == 3);
  print("\ntestSkipWhile:${testSkipWhile},and type is ${testSkipWhile.runtimeType}\n");

  //注意Set为没有顺序且不可重复的列表，数据转换到set之后圆List中的重复的数据会被删掉
  print(testList6);
  Set testSet1 = testList6.toSet();
  print("\ntestSet1:${testSet1} and type is ${testSet1.runtimeType}\n");



```
