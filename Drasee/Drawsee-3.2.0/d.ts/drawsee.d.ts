declare module Drawsee {
    /**
      * 表示包含二个坐标的向量
      */
    export class Vector2 {
        /** 第一个坐标 */
        x: number;
        /** 第二个坐标 */
        y: number;
        /**
          * 从给定的x和y坐标创建
          * @param x 第一个坐标
          * @param y 第二个坐标
         */
        constructor(x?: number, y?: number);
        /**
          * 获取具有Vector2坐标的字符串
          * @returns 返回一个带有Vector2坐标的字符串
         */
        toString(): string;
        /**
          * 获取类名
          * @returns 返回字符串“Vector2”
         */
        getClassName(): string;
        /**
          * 获取当前向量哈希代码
          * @以数字形式返回Vector2哈希代码
         */
        getHashCode(): number;
        /**
          * 设置给定数组或给定索引的Float32Array中的Vector2坐标。
          * @param array 源数组
          * @param index 源数组中的偏移量
          * @returns 返回当前Vector2
         */
        toArray(array: FloatArray, index?: number): Vector2;
        /**
          * 将当前向量复制到数组中
          * @returns 返回一个包含二个元素的新数组：Vector2坐标。
         */
        asArray(): number[];
        /**
          * 使用给定的Vector2坐标设置Vector2坐标
          * @param source 源Vector2
          * @returns 返回当前更新的Vector2
         */
        copyFrom(source: DeepImmutable<Vector2>): Vector2;
        /**
          * 使用给定的浮点值设置Vector2坐标
          * @param x 第一个坐标
          * @param y 第二个坐标
          * @returns 返回当前更新的Vector2
         */
        copyFromFloats(x: number, y: number): Vector2;
        /**
          * 使用给定的浮点值设置Vector2坐标
          * @param x 第一个坐标
          * @param y 第二个坐标
          * @returns 返回当前更新的Vector2
         */
        set(x: number, y: number): Vector2;
        /**
          * 将另一个向量与当前向量相加
          * @param otherVector 另一个向量
          * @returns 返回一个新的Vector2集合，其中包含当前Vector2和给定的一个坐标
         */
        add(otherVector: DeepImmutable<Vector2>): Vector2;
        /**
          * 通过添加当前Vector2和给定的一个坐标来设置“result”坐标
          * @param otherVector 另一个向量
          * @param result 目标向量
          * @returns 返回未修改的当前Vector2
         */
        addToRef(otherVector: DeepImmutable<Vector2>, result: Vector2): Vector2;
        /**
          * 通过添加给定的Vector2坐标来设置Vector2坐标
          * @param otherVector 另一个向量
          * @returns 返回当前更新的Vector2
         */
        addInPlace(otherVector: DeepImmutable<Vector2>): Vector2;
        /**
          * 通过将当前Vector2坐标添加到给定Vector3 x，y坐标，获取新Vector2
          * @param otherVector 另一个向量
          * @returns 返回一个新Vector2
         */
        addVector3(otherVector: Vector3): Vector2;
        /**
          * 获取一个新的Vector2集合，其中包含从当前Vector2中减去的给定矢量的坐标
          * @param otherVector 另一个向量
          * @returns 返回一个新Vector2
         */
        subtract(otherVector: Vector2): Vector2;
        /**
          * 通过从当前Vector2坐标减去给定坐标来设置“result”坐标。
          * @param otherVector 另一个向量
          * @param result 目标向量
          * @returns 返回未修改的当前Vector2
         */
        subtractToRef(otherVector: DeepImmutable<Vector2>, result: Vector2): Vector2;
        /**
          * 通过从当前Vector2坐标中减去给定的一个坐标来设置当前Vector2坐标
          * @param otherVector 另一个向量
          * @returns 返回当前更新的Vector2
         */
        subtractInPlace(otherVector: DeepImmutable<Vector2>): Vector2;
        /**
          * 将当前Vector2坐标乘以给定坐标
          * @param otherVector 另一个向量
          * @returns 返回当前更新的Vector2
         */
        multiplyInPlace(otherVector: DeepImmutable<Vector2>): Vector2;
        /**
          * 返回一个新的Vector2集合，该集合包含当前Vector2与给定坐标的乘积
          * @param otherVector 另一个向量
          * @returns 返回一个新Vector2
         */
        multiply(otherVector: DeepImmutable<Vector2>): Vector2;
        /**
          * 用当前Vector2与给定坐标的乘积设置“result”坐标
          * @param otherVector 另一个向量
          * @param result 目标向量
          * @returns 返回未修改的当前Vector2
         */
        multiplyToRef(otherVector: DeepImmutable<Vector2>, result: Vector2): Vector2;
        /**
          * 获取一个新的Vector2集，Vector2坐标乘以给定的浮点值
          * @param x 第一个坐标
          * @param y 第二个坐标
          * @returns 返回一个新Vector2
         */
        multiplyByFloats(x: number, y: number): Vector2;
        /**
          * 返回一个新的Vector2集合，Vector2坐标除以给定的一个坐标
          * @param otherVector 另一个向量
          * @returns 返回一个新Vector2
         */
        divide(otherVector: Vector2): Vector2;
        /**
          * 用Vector2除以给定的一个坐标设置“result”坐标
          * @param otherVector 另一个向量
          * @param result 目标向量
          * @returns 返回未修改的当前Vector2
         */
        divideToRef(otherVector: DeepImmutable<Vector2>, result: Vector2): Vector2;
        /**
          * 将当前Vector2坐标除以给定坐标
          * @param otherVector 另一个向量
          * @returns 返回当前更新的Vector2
         */
        divideInPlace(otherVector: DeepImmutable<Vector2>): Vector2;
        /**
          * 获取一个新的Vector2，该Vector2的当前坐标为负
          * @returns 返回一个新Vector2
         */
        negate(): Vector2;
        /**
          * 将Vector2坐标乘以比例
          * @param scale 缩放因子
          * @returns 返回当前更新的Vector2
         */
        scaleInPlace(scale: number): Vector2;
        /**
          * 从当前Vector2返回按“缩放”缩放的新Vector2
          * @param scale 缩放因子
          * @returns 返回一个新Vector2
         */
        scale(scale: number): Vector2;
        /**
          * 将当前Vector2值按因子缩放为给定Vector2
          * @param scale 比例因子
          * @param result 用于存储结果的Vector2对象
          * @returns 返回未修改的当前Vector2
         */
        scaleToRef(scale: number, result: Vector2): Vector2;
        /**
          * 按因子缩放当前Vector2值，并将结果添加到给定Vector2
          * @param scale 比例因子
          * @param result 用于存储结果的Vector2对象
          * @returns 返回未修改的当前Vector2
         */
        scaleAndAddToRef(scale: number, result: Vector2): Vector2;
        /**
          * 如果两个向量相等，则获取布尔值
          * @param otherVector 另一个向量
          * @returns 如果给定的矢量坐标严格等于当前Vector2，则返回true
         */
        equals(otherVector: DeepImmutable<Vector2>): boolean;
        /**
          * 如果两个向量相等，则获取布尔值（使用epsilon值）
          * @param otherVector 另一个向量
          * @param epsilon 考虑平等的最小距离。
          * @returns 如果给定向量坐标与当前向量坐标的距离为epsilon，则返回true。
         */
        equalsWithEpsilon(otherVector: DeepImmutable<Vector2>, epsilon?: number): boolean;
        /**
          * 从当前Vector2地板值获取新Vector2
          * @returns 返回一个新Vector2
         */
        floor(): Vector2;
        /**
          * 从当前Vector2地板值获取新Vector2
          * @returns 返回一个新Vector2
         */
        fract(): Vector2;
        /**
          * 获取向量的长度
          * @returns 返回向量长度（浮点）
         */
        length(): number;
        /**
          * 获取向量的平方长度
          * @returns 返回向量平方长度（浮点）
         */
        lengthSquared(): number;
        /**
          * 规范化向量
          * @returns 返回当前更新的Vector2
         */
        normalize(): Vector2;
        /**
          * 获取从Vector2复制的新Vector2
          * @returns 返回一个新Vector2
         */
        clone(): Vector2;
        /**
          * 获取新Vector2（0，0）
          * @returns 返回一个新Vector2
         */
        static Zero(): Vector2;
        /**
          * 获取新Vector2（1，1）
          * @returns 返回一个新Vector2
         */
        static One(): Vector2;
        /**
          * 从给定数组的给定索引元素获取新的Vector2集
          * @param 数组 数据源
          * @param offset 数据源中的偏移量
          * @returns 返回一个新Vector2
         */
        static FromArray(array: DeepImmutable<ArrayLike<number>>, offset?: number): Vector2;
        /**
          * 设置给定数组的给定索引元素的“result”
          * @param 数组 数据源
          * @param offset 数据源中的偏移量
          * @param result 目标向量
         */
        static FromArrayToRef(array: DeepImmutable<ArrayLike<number>>, offset: number, result: Vector2): void;
        /**
          * 获取位于由给定的四个Vector2 的CatmullRom样条曲线上的“数量”（浮点）的新Vector2
          * @param value1 第一个控制点
          * @param value2 第二个控制点
          * @param value3 第三个控制点
          * @param value4 第四个控制点
          * @param amount 插值因子
          * @returns 返回一个新Vector2
         */
        static CatmullRom(value1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>, value3: DeepImmutable<Vector2>, value4: DeepImmutable<Vector2>, amount: number): Vector2;
        /**
          * 如果向量“value”位于由“min”和“max” 的正方形中，则返回一个与“value”坐标相同的新Vector2集。
          * 如果“value”的坐标低于“min”坐标，则返回的Vector2被赋予该“min”坐标。
          * 如果“value”的坐标大于“max”坐标，则返回的Vector2被赋予该“max”坐标
          * @param value 要钳制的值
          * @param min 下限
          * @param max 上限
          * @returns 返回一个新Vector2
         */
        static Clamp(value: DeepImmutable<Vector2>, min: DeepImmutable<Vector2>, max: DeepImmutable<Vector2>): Vector2;
        /**
          * 返回一个新的Vector2，该向量位于Hermite样条曲线上的“数量”（浮点数），该样条曲线由向量“value1”、“value3”、“tangent1”、“tangent2” 
          * @param value1 第一个控制点
          * @param tangent1 传出切线
          * @param value2 第二个控制点
          * @param tangent2 传入切线
          * @param amount 插值因子
          * @returns 返回一个新Vector2
         */
        static Hermite(value1: DeepImmutable<Vector2>, tangent1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>, tangent2: DeepImmutable<Vector2>, amount: number): Vector2;
        /**
          * 返回位于向量“开始”和向量“结束”之间的线性插值上的“数量”（浮点）的新Vector2。
          * @param start 开始向量
          * @param end 结束向量
          * @param amount 插值因子
          * @returns 返回一个新Vector2
         */
        static Lerp(start: DeepImmutable<Vector2>, end: DeepImmutable<Vector2>, amount: number): Vector2;
        /**
          * 获取向量“left”和向量“right”的点积
          * @param left 第一个向量
          * @param right 第二个向量
          * @returns 返回点积（浮点）
         */
        static Dot(left: DeepImmutable<Vector2>, right: DeepImmutable<Vector2>): number;
        /**
          * 返回等于规范化给定向量的新Vector2
          * @param vector 要规范化的向量
          * @returns 返回一个新Vector2
         */
        static Normalize(vector: DeepImmutable<Vector2>): Vector2;
        /**
          * 从“左”和“右”向量中获取具有最小坐标值的新Vector2集
          * @param left 第一个向量
          * @param right 第二个向量
          * @returns 返回一个新Vector2
         */
        static Minimize(left: DeepImmutable<Vector2>, right: DeepImmutable<Vector2>): Vector2;
        /**
          * 获取具有“左”和“右”向量的最大坐标值的新Vecto2集
          * @param left 第一个向量
          * @param right 第二个向量
          * @returns 返回一个新Vector2
         */
        static Maximize(left: DeepImmutable<Vector2>, right: DeepImmutable<Vector2>): Vector2;
        /**
          * 获取一个新的Vector2集合，该集合具有给定变换矩阵对给定向量的变换坐标
          * @param vector 向量
          * @param transformation 矩阵
          * @returns 返回一个新Vector2
         */
        static Transform(vector: DeepImmutable<Vector2>, transformation: DeepImmutable<Matrix>): Vector2;
        /**
          * 通过给定的变换矩阵变换给定的矢量坐标，并将结果存储在矢量“result”坐标中
          * @param vector 向量
          * @param transformation 矩阵
          * @param result 目标向量
         */
        static TransformToRef(vector: DeepImmutable<Vector2>, transformation: DeepImmutable<Matrix>, result: Vector2): void;
        /**
          * 确定给定向量是否包含在三角形中
          * @param p 要测试的向量
          * @param p0 第一个三角形点
          * @param p1 第二个三角形点
          * @param p2 第三个三角形点
          * @returns 如果点“p”位于顶点“p0”、“p1”、“p2” 的三角形中，则返回true
         */
        static PointInTriangle(p: DeepImmutable<Vector2>, p0: DeepImmutable<Vector2>, p1: DeepImmutable<Vector2>, p2: DeepImmutable<Vector2>): boolean;
        /**
          * 获取向量“value1”和“value2”之间的距离
          * @param value1 第一个向量
          * @param value2 第二个向量
          * @returns 返回向量之间的距离
         */
        static Distance(value1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>): number;
        /**
          * 返回向量“value1”和“value2”之间的平方距离
          * @param value1 第一个向量
          * @param value2 第二个向量
          * @returns 返回向量之间的平方距离
         */
        static DistanceSquared(value1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>): number;
        /**
          * 获取位于向量“value1”和“value2”中心的新Vector2
          * @param value1 第一个向量
          * @param value2 第二个向量
          * @returns 返回一个新Vector2
         */
        static Center(value1: DeepImmutable<Vector2>, value2: DeepImmutable<Vector2>): Vector2;
        /**
          * 获取点“p”与由两点“segA”和“segB” 的线段之间的最短距离（浮点）。
          * @param p 中间点
          * @param segA 段的一个点
          * @param segB 段的另一点
          * @returns 返回最短距离
         */
        static DistanceOfPointFromSegment(p: DeepImmutable<Vector2>, segA: DeepImmutable<Vector2>, segB: DeepImmutable<Vector2>): number;
    }

    /**
      * 用于存储（x，y，z）矢量表示的分类
      * Vector3是三维几何体中使用的主要对象
      * 它可以表示空间中某个点的坐标，也可以表示方向
      * 提醒：js使用左手系前向系统
      */
    export class Vector3 {
        /**
          * 第一个坐标（在X轴上）
         */
        x: number;
        /**
          * 第二个坐标（在Y轴上）
         */
        y: number;
        /**
          * 第三个坐标（在Z轴上）
         */
        z: number;
        /**
          * 从给定的x、y、z（浮点数）坐标创建新的Vector3对象。
          * @param x 第一个坐标（在x轴上）
          * @param y 第二个坐标（在y轴上）
          * @param z 第三个坐标（在z轴上）
         */
        constructor(x?: number, y?: number, z?: number);
        /**
          * 创建矢量的字符串表示形式3
          * @returns 返回一个带Vector3坐标的字符串。
         */
        toString(): string;
        /**
          * 获取类名
          * @returns 返回字符串“Vector3”
         */
        getClassName(): string;
        /**
          * 创建Vector3哈希代码
          * @returns 返回一个在Vector3实例之间趋于唯一的数字
         */
        getHashCode(): number;
        /**
          * 创建包含三个元素的数组：矢量的坐标3
          * @returns 返回一个新的数字数组
         */
        asArray(): number[];
        /**
          * 使用Vector3的连续坐标填充给定数组或给定索引中的Float32Array
          * @param array 目标数组
          * @param index 目标数组中的偏移量
          * @returns 返回当前Vector3
         */
        toArray(array: FloatArray, index?: number): Vector3;
        /**
          * 将当前Vector3转换为四元数（考虑到Vector3包含旋转的Euler角表示）
          * @returns 返回一个新的四元数对象，由Vector3坐标计算得出
         */
        toQuaternion(): Quaternion;
        /**
          * 将给定向量添加到当前Vector3
          * @param otherVector 第二个操作数
          * @returns 返回当前更新的Vector3
         */
        addInPlace(otherVector: DeepImmutable<Vector3>): Vector3;
        /**
          * 将给定坐标添加到当前Vector3
          * @param x 操作数的x坐标
          * @param y 操作数的y坐标
          * @param z 操作数的z坐标
          * @returns 返回当前更新的Vector3
         */
        addInPlaceFromFloats(x: number, y: number, z: number): Vector3;
        /**
          * 获取新Vector3，即当前Vector3与给定向量相加的结果
          * @param otherVector 第二个操作数
          * @returns 返回结果Vector3
         */
        add(otherVector: DeepImmutable<Vector3>): Vector3;
        /**
          * 将当前Vector3添加到给定向量，并将结果存储在向量“result”中
          * @param otherVector 第二个操作数
          * @param result 用于存储结果的Vector3对象
          * @returns 返回当前Vector3
         */
        addToRef(otherVector: DeepImmutable<Vector3>, result: Vector3): Vector3;
        /**
          * 从当前矢量中减去给定Vector3
          * @param otherVector 第二个操作数
          * @returns 返回当前更新的Vector3
         */
        subtractInPlace(otherVector: DeepImmutable<Vector3>): Vector3;
        /**
          * 返回新Vector3，即给定矢量与当前Vector3相减的结果
          * @param otherVector 第二个操作数
          * @returns 返回结果Vector3
         */
        subtract(otherVector: DeepImmutable<Vector3>): Vector3;
        /**
          * 从当前Vector3中减去给定矢量，并将结果存储在矢量“result”中。
          * @param otherVector 第二个操作数
          * @param result 用于存储结果的Vector3对象
          * @returns 返回当前Vector3
         */
        subtractToRef(otherVector: DeepImmutable<Vector3>, result: Vector3): Vector3;
        /**
          * 返回一个新的Vector3集合，并从当前Vector3坐标减去给定的浮点值
          * @param x 操作数的x坐标
          * @param y 操作数的y坐标
          * @param z 操作数的z坐标
          * @returns 返回结果Vector3
         */
        subtractFromFloats(x: number, y: number, z: number): Vector3;
        /**
          * 从当前Vector3坐标中减去给定的浮点值，并使用此结果设置给定的向量“result”
          * @param x 操作数的x坐标
          * @param y 操作数的y坐标
          * @param z 操作数的z坐标
          * @param result 用于存储结果的Vector3对象
          * @returns 返回当前Vector3
         */
        subtractFromFloatsToRef(x: number, y: number, z: number, result: Vector3): Vector3;
        /**
          * 获取一个新的Vector3集合，该集合具有当前Vector3求反的坐标
          * @returns 返回一个新Vector3
         */
        negate(): Vector3;
        /**
          * 将Vector3坐标乘以浮点“比例”
          * @param scale 乘数因子
          * @returns 返回当前更新的Vector3
         */
        scaleInPlace(scale: number): Vector3;
        /**
          * 返回一个新的Vector3集合，当前Vector3坐标乘以浮点“比例”
          * @param scale 乘数因子
          * @returns 返回一个新Vector3
         */
        scale(scale: number): Vector3;
        /**
          * 将当前Vector3坐标乘以浮点“比例”，并将结果存储在给定的矢量“result”坐标中
          * @param scale 乘数因子
          * @param result 用于存储结果的Vector3对象
          * @returns 返回当前Vector3
         */
        scaleToRef(scale: number, result: Vector3): Vector3;
        /**
          * 按因子缩放当前Vector3值，并将结果添加到给定Vector3
          * @param scale 比例因子
          * @param result 用于存储结果的Vector3对象
          * @returns 返回未修改的当前Vector3
         */
        scaleAndAddToRef(scale: number, result: Vector3): Vector3;
        /**
          * 如果当前Vector3和给定矢量坐标严格相等，则返回true
          * @param otherVector 第二个操作数
          * @returns 如果两个向量相等，则返回true
         */
        equals(otherVector: DeepImmutable<Vector3>): boolean;
        /**
          * 如果当前Vector3和给定矢量坐标的距离小于epsilon，则返回true
          * @param otherVector 第二个操作数
          * @param epsilon  值为相等的最小距离
          * @returns 如果两个向量的距离小于epsilon，则返回true
         */
        equalsWithEpsilon(otherVector: DeepImmutable<Vector3>, epsilon?: number): boolean;
        /**
          * 如果当前Vector3坐标等于给定的浮点值，则返回true
          * @param x 操作数的x坐标
          * @param y 操作数的y坐标
          * @param z 操作数的z坐标
          * @returns 如果两个向量相等，则返回true
         */
        equalsToFloats(x: number, y: number, z: number): boolean;
        /**
          * 将当前Vector3坐标乘以给定坐标
          * @param otherVector 第二个操作数
          * @returns 返回当前更新的Vector3
         */
        multiplyInPlace(otherVector: DeepImmutable<Vector3>): Vector3;
        /**
          * 返回一个新Vector3，即当前Vector3与给定矢量相乘的结果
          * @param otherVector 第二个操作数
          * @returns 返回新Vector3
         */
        multiply(otherVector: DeepImmutable<Vector3>): Vector3;
        /**
          * 将当前Vector3乘以给定向量，并将结果存储在给定向量“result”中
          * @param otherVector 第二个操作数
          * @param result 用于存储结果的Vector3对象
          * @returns 返回当前Vector3
         */
        multiplyToRef(otherVector: DeepImmutable<Vector3>, result: Vector3): Vector3;
        /**
          * 返回一个新的Vector3集合，该集合包含当前Vector3坐标按给定浮点数进行mulliplication的结果
          * @param x 操作数的x坐标
          * @param y 操作数的y坐标
          * @param z 操作数的z坐标
          * @returns 返回新Vector3
         */
        multiplyByFloats(x: number, y: number, z: number): Vector3;
        /**
          * 返回一个新的Vector3集合，其中包含当前Vector3坐标除以给定坐标的结果
          * @param otherVector 第二个操作数
          * @returns 返回新Vector3
         */
        divide(otherVector: DeepImmutable<Vector3>): Vector3;
        /**
          * 将当前Vector3坐标除以给定坐标，并将结果存储在给定矢量“result”中
          * @param otherVector 第二个操作数
          * @param result 用于存储结果的Vector3对象
          * @returns 返回当前Vector3
         */
        divideToRef(otherVector: DeepImmutable<Vector3>, result: Vector3): Vector3;
        /**
          * 将当前Vector3坐标除以给定坐标。
          * @param otherVector 第二个操作数
          * @returns 返回当前更新的Vector3
         */
        divideInPlace(otherVector: Vector3): Vector3;
        /**
          * 使用其与给定矢量之间的最小坐标值更新当前Vector3
          * @param other 第二个操作数
          * @returns 返回当前更新的Vector3
         */
        minimizeInPlace(other: DeepImmutable<Vector3>): Vector3;
        /**
          * 使用其与给定矢量之间的最大坐标值更新当前Vector3。
          * @param other 第二个操作数
          * @returns 返回当前更新的Vector3
         */
        maximizeInPlace(other: DeepImmutable<Vector3>): Vector3;
        /**
          * 使用其与给定坐标之间的最小坐标值更新当前Vector3
          * @param x 操作数的x坐标
          * @param y 操作数的y坐标
          * @param z 操作数的z坐标
          * @returns 返回当前更新的Vector3
         */
        minimizeInPlaceFromFloats(x: number, y: number, z: number): Vector3;
        /**
          * 使用其与给定坐标之间的最大坐标值更新当前Vector3。
          * @param x 操作数的x坐标
          * @param y 操作数的y坐标
          * @param z 操作数的z坐标
          * @returns 返回当前更新的Vector3
         */
        maximizeInPlaceFromFloats(x: number, y: number, z: number): Vector3;
        /**
          * 由于浮点精度，网格的比例可能是均匀的，但浮点值会偏离一小部分
          * 检查是否在一定小数位数内不一致，以说明这一点
          * @param epsilon 值可以不同的量
          * @returns 如果向量的小数位数不一致，则返回
         */
        isNonUniformWithinEpsilon(epsilon: number): boolean;
        /**
          * 获取一个布尔值，该布尔值指示向量是非一致的，表示x、y或z不完全相同
         */
        readonly isNonUniform: boolean;
        /**
          * 从当前Vector3地板值获取新Vector3
          * @returns 返回一个新Vector3
         */
        floor(): Vector3;
        /**
          * 从当前Vector3地板值获取新Vector3
          * @returns 返回一个新Vector3
         */
        fract(): Vector3;
        /**
          * 获取Vector3的长度
          * @returns 返回向量的长度3
         */
        length(): number;
        /**
          * 获取Vector3的平方长度
          * @returns 返回向量的平方长度3
         */
        lengthSquared(): number;
        /**
          * 规范化当前Vector3。
          * 请注意，这是一个就地操作。
          * @returns 返回当前更新的Vector3
         */
        normalize(): Vector3;
        /**
          * 对向量的x y z特性重新排序
          * @param order 属性的新排序（例如，对于带有“ZYX”的向量1,2,3，将产生3,2,1）
          * @returns 返回当前更新的向量
         */
        reorderInPlace(order: string): this;
        /**
          * 按四元数围绕0,0,0旋转向量
          * @param quaternion 转四元数
          * @param result vector来存储结果
          * @returns 返回结果向量
         */
        rotateByQuaternionToRef(quaternion: Quaternion, result: Vector3): Vector3;
        /**
          * 围绕给定点旋转向量
          * @param quaternion 旋转四元数
          * @param point 要旋转的点
          * @param result vector来存储结果
          * @returns 返回结果向量
         */
        rotateByQuaternionAroundPointToRef(quaternion: Quaternion, point: Vector3, result: Vector3): Vector3;
        /**
          * 使用给定的输入长度规范化当前Vector3。
          * 请注意，这是一个就地操作。
          * @param len 向量的长度
          * @returns 返回当前更新的Vector3
         */
        normalizeFromLength(len: number): Vector3;
        /**
          * 将当前Vector3规范化为新矢量
          * @returns 返回新Vector3
         */
        normalizeToNew(): Vector3;
        /**
          * 将当前Vector3规范化为参考
          * @param reference 要更新的Vector3
          * @returns 返回更新的Vector3
         */
        normalizeToRef(reference: DeepImmutable<Vector3>): Vector3;
        /**
          * 创建从当前Vector3复制的新Vector3
          * @returns 返回新Vector3
         */
        clone(): Vector3;
        /**
          * 将给定的矢量坐标复制到当前Vector3
          * @param source 源Vector3
          * @returns 返回当前更新的Vector3
         */
        copyFrom(source: DeepImmutable<Vector3>): Vector3;
        /**
          * 将给定的浮点数复制到当前Vector3坐标
          * @param x 操作数的x坐标
          * @param y 操作数的y坐标
          * @param z 操作数的z坐标
          * @returns 返回当前更新的Vector3
         */
        copyFromFloats(x: number, y: number, z: number): Vector3;
        /**
          * 将给定的浮点数复制到当前Vector3坐标
          * @param x 操作数的x坐标
          * @param y 操作数的y坐标
          * @param z 操作数的z坐标
          * @returns 返回当前更新的Vector3
         */
        set(x: number, y: number, z: number): Vector3;
        /**
          * 将给定的浮点复制到当前Vector3坐标
          * @param v 操作数的x、y和z坐标
          * @returns 返回当前更新的Vector3
         */
        setAll(v: number): Vector3;
        /**
          * 获取两个向量之间的剪辑因子
          * @param vector0 第一个操作数
          * @param vector1 第二个操作数
          * @param axis 轴
          * @param size 沿轴的大小
          * @returns 返回剪辑因子
         */
        static GetClipFactor(vector0: DeepImmutable<Vector3>, vector1: DeepImmutable<Vector3>, axis: DeepImmutable<Vector3>, size: number): number;
        /**
          * 获取两个向量之间的角度
          * @param vector0 矢量0和矢量1之间的角度
          * @param vector1 矢量0和矢量1之间的角度
          * @param normal 法线方向
          * @returns 返回向量0和向量1之间的角度
         */
        static GetAngleBetweenVectors(vector0: DeepImmutable<Vector3>, vector1: DeepImmutable<Vector3>, normal: DeepImmutable<Vector3>): number;
        /**
          * 从给定数组的索引“偏移量”返回新的Vector3集
          * @param array 源数组
          * @param offset 源数组中的偏移量
          * @returns 返回新Vector3
         */
        static FromArray(array: DeepImmutable<ArrayLike<number>>, offset?: number): Vector3;
        /**
          * 从给定数组的索引“偏移量”返回新的Vector3集
          * 此函数已弃用。改用FromArray
          * @param array 源数组
          * @param offset 源数组中的偏移量
          * @returns 返回新Vector3
         */
        static FromFloatArray(array: DeepImmutable<Float32Array>, offset?: number): Vector3;
        /**
          * 使用给定数组索引“offset”中的元素值设置给定向量“result”
          * @param array 源数组
          * @param offset 源数组中的偏移量
          * @param result 用于存储结果的Vector3
         */
        static FromArrayToRef(array: DeepImmutable<ArrayLike<number>>, offset: number, result: Vector3): void;
        /**
          * 使用给定数组索引“offset”中的元素值设置给定向量“result”
          * 此函数已弃用。改用FromArrayToRef。
          * @param array 源数组
          * @param offset 源数组中的偏移量
          * @param result 用于存储结果的Vector3
         */
        static FromFloatArrayToRef(array: DeepImmutable<Float32Array>, offset: number, result: Vector3): void;
        /**
          * 使用给定的浮点值设置给定的向量“result”。
          * @param x 源的x坐标
          * @param y 源的y坐标
          * @param z 源的z坐标
          * @param result 用于存储结果的Vector3
         */
        static FromFloatsToRef(x: number, y: number, z: number, result: Vector3): void;
        /**
          * 将新Vector3设置为（0.0、0.0、0.0）
          * @returns 返回一个新的空Vector3
         */
        static Zero(): Vector3;
        /**
          * 将新Vector3设置为（1.0、1.0、1.0）
          * @returns 返回一个新的单位Vector3
         */
        static One(): Vector3;
        /**
          * 将新Vector3设置为（0.0、1.0、0.0）
          * @returns 返回一个新的向上Vector3
         */
        static Up(): Vector3;
        /**
          * 获取一个不能更新的向上Vector3
         */
        static readonly UpReadOnly: DeepImmutable<Vector3>;
        /**
          * 将新Vector3设置为（0.0，-1.0，0.0）
          * @returns 返回一个新的向下Vector3
         */
        static Down(): Vector3;
        /**
          * 将新Vector3设置为（0.0、0.0、1.0）
          * @returns 返回一个新的前向Vector3
         */
        static Forward(): Vector3;
        /**
          * 将新Vector3设置为（0.0，0.0，-1.0）
          * @returns 返回一个新的前向Vector3
         */
        static Backward(): Vector3;
        /**
          * 将新Vector3设置为（1.0、0.0、0.0）
          * @returns 返回一个新的右Vector3
         */
        static Right(): Vector3;
        /**
          * 将新Vector3设置为（-1.0,0.0,0.0）
          * @returns 返回一个新的左Vector3
         */
        static Left(): Vector3;
        /**
          * 返回一个新的Vector3集合，其中包含给定向量的给定矩阵的变换结果。
          * 此方法仅计算变换后的坐标，而不计算变换后的方向向量（即，它考虑了平移）
          * @param vector Vector3
          * @param transformation 转换矩阵
          * @returns 返回已转换的Vector3
         */
        static TransformCoordinates(vector: DeepImmutable<Vector3>, transformation: DeepImmutable<Matrix>): Vector3;
        /**
          * 设置给定向量“result”坐标与给定向量的给定矩阵的变换结果
          * 此方法仅计算变换后的坐标，而不计算变换后的方向向量（即，它考虑了平移）
          * @param vector Vector3
          * @param transformation 转换矩阵
          * @param result 用于存储结果的Vector3
         */
        static TransformCoordinatesToRef(vector: DeepImmutable<Vector3>, transformation: DeepImmutable<Matrix>, result: Vector3): void;
        /**
          * 通过给定浮点（x，y，z）的给定矩阵将给定向量“result”坐标与变换结果一起设置
          * 此方法仅计算变换后的坐标，而不计算变换后的方向向量
          * @param x 源向量的x坐标
          * @param y 源向量的y坐标
          * @param z 源向量的z坐标
          * @param transformation 转换矩阵
          * @param result 用于存储结果的Vector3
         */
        static TransformCoordinatesFromFloatsToRef(x: number, y: number, z: number, transformation: DeepImmutable<Matrix>, result: Vector3): void;
        /**
          * 返回一个新的Vector3集合，其中包含给定向量的给定矩阵的法线变换结果
          * 此方法仅计算变换的规范化方向向量（即，不应用平移）
          * @param vector Vector3
          * @param transformation 转换矩阵
          * @returns 返回新Vector3
         */
        static TransformNormal(vector: DeepImmutable<Vector3>, transformation: DeepImmutable<Matrix>): Vector3;
        /**
          * 通过给定向量的给定矩阵将给定向量的“result”与法线变换的结果进行设置
          * 此方法仅计算变换的规范化方向向量（即，不应用平移）
          * @param vector Vector3
          * @param transformation 转换矩阵
          * @param result 用于存储结果的Vector3
         */
        static TransformNormalToRef(vector: DeepImmutable<Vector3>, transformation: DeepImmutable<Matrix>, result: Vector3): void;
        /**
          * 通过给定浮点数（x，y，z）的给定矩阵将给定向量“result”与法线变换的结果一起设置
          * 此方法仅计算变换的规范化方向向量（即，不应用平移）
          * @param x 源向量的x坐标
          * @param y 源向量的y坐标
          * @param z 源向量的z坐标
          * @param transformation 转换矩阵
          * @param result 用于存储结果的Vector3
         */
        static TransformNormalFromFloatsToRef(x: number, y: number, z: number, transformation: DeepImmutable<Matrix>, result: Vector3): void;
        /**
          * 返回位于CatmullRom插值样条线上由向量“value1”、“value2”、“value3”、“value4” 的“amount”的新Vector3
          * @param value1 第一个控制点
          * @param value2 第二个控制点
          * @param value3 第三个控制点
          * @param value4 第四个控制点
          * @param amount 样条曲线上量
          * @returns 返回新Vector3
         */
        static CatmullRom(value1: DeepImmutable<Vector3>, value2: DeepImmutable<Vector3>, value3: DeepImmutable<Vector3>, value4: DeepImmutable<Vector3>, amount: number): Vector3;
        /**
          * 如果向量“value”位于由向量“min”和“max” 的多维数据集中，则返回坐标为“value”的新向量集3
          * 如果“值”的坐标值低于“最小”坐标之一，则该“值”坐标设置为“最小”坐标
          * 如果“值”的坐标值大于“最大”坐标之一，则该“值”坐标将设置为“最大”坐标
          * @param value 当前值
          * @param min 较低的范围值
          * @param max 上限范围值
          * @returns 返回新Vector3
         */
        static Clamp(value: DeepImmutable<Vector3>, min: DeepImmutable<Vector3>, max: DeepImmutable<Vector3>): Vector3;
        /**
          * 如果向量“值”位于由向量“min”和“max” 的立方体中，则使用坐标“value”设置给定向量“result”
          * 如果“值”的坐标值低于“最小”坐标之一，则该“值”坐标设置为“最小”坐标
          * 如果“值”的坐标值大于“最大”坐标之一，则该“值”坐标将设置为“最大”坐标
          * @param value 当前值
          * @param min 较低的范围值
          * @param max 上限范围值
          * @param result 用于存储结果的Vector3
         */
        static ClampToRef(value: DeepImmutable<Vector3>, min: DeepImmutable<Vector3>, max: DeepImmutable<Vector3>, result: Vector3): void;
        /**
          * 返回一个新的Vector3，该向量位于由向量“value1”、“切线1”、“value2”、“切线2” 的Hermite插值样条线上的“amount”（float）
          * @param value1 第一个控制点
          * @param 切线1 第一个切线向量
          * @param value2 第二个控制点
          * @param 切线2 第二个切线向量
          * @param amount 插值样条曲线上的量（介于0和1之间）
          * @returns 返回新Vector3
         */
        static Hermite(value1: DeepImmutable<Vector3>, tangent1: DeepImmutable<Vector3>, value2: DeepImmutable<Vector3>, tangent2: DeepImmutable<Vector3>, amount: number): Vector3;
        /**
          * 返回位于向量“开始”和“结束”之间的线性插值上的“数量”（浮点）的新Vector3
          * @param start 起始值
          * @param end 结束值
          * @param amount max 两者之间的金额（介于0和1之间）
          * @returns 返回新Vector3
         */
        static Lerp(start: DeepImmutable<Vector3>, end: DeepImmutable<Vector3>, amount: number): Vector3;
        /**
          * 将给定向量“result”设置为从“数量”的向量“开始”到向量“结束”的线性插值结果
          * @param start 起始值
          * @param end 结束值
          * @param amount max 两者之间的金额（介于0和1之间）
          * @param result 用于存储结果的Vector3
         */
        static LerpToRef(start: DeepImmutable<Vector3>, end: DeepImmutable<Vector3>, amount: number, result: Vector3): void;
        /**
          * 返回向量“left”和“right”之间的点积（float）
          * @param left 左操作数
          * @param right 正确的操作数
          * @returns 返回点积
         */
        static Dot(left: DeepImmutable<Vector3>, right: DeepImmutable<Vector3>): number;
        /**
          * 返回一个新Vector3，作为向量“left”和“right”的叉积
          * 然后，叉积与“左”和“右”正交
          * @param left 左操作数
          * @param right 正确的操作数
          * @returns 返回叉积
         */
        static Cross(left: DeepImmutable<Vector3>, right: DeepImmutable<Vector3>): Vector3;
        /**
          * 使用“左”和“右”的叉积设置给定向量“result”
          * 然后，叉积与“左”和“右”正交
          * @param left 左操作数
          * @param right 正确的操作数
          * @param result 用于存储结果的Vector3
         */
        static CrossToRef(left: Vector3, right: Vector3, result: Vector3): void;
        /**
          * 返回一个新Vector3作为给定矢量的规范化
          * @param vector 要规范化的Vector3
          * @returns 返回新Vector3
         */
        static Normalize(vector: DeepImmutable<Vector3>): Vector3;
        /**
          * 使用给定第一个向量的规范化设置给定向量“result”
          * @param vector 要规范化的Vector3
          * @param result 用于存储结果的Vector3
         */
        static NormalizeToRef(vector: DeepImmutable<Vector3>, result: Vector3): void;
        /**
          * 将Vector3投影到屏幕空间
          * @param vector 要投影的Vector3
          * @param world 世界矩阵
          * @param transform 变换（视图x投影）矩阵
          * @param viewport 屏幕视口
          * @returns 返回新Vector3
         */
        static Project(vector: DeepImmutable<Vector3>, world: DeepImmutable<Matrix>, transform: DeepImmutable<Matrix>, viewport: DeepImmutable<Viewport>): Vector3;
        /**
          * 从屏幕空间取消投影到对象空间
          * @param source 屏幕空间Vector3
          * @param viewportWidth 视口的当前宽度
          * @param viewportHeight 视口的当前高度
          * @param world 世界矩阵（可以设置为Identity以进入世界空间）
          * @param transform 变换（视图x投影）矩阵
          * @returns 返回新Vector3
         */
        static UnprojectFromTransform(source: Vector3, viewportWidth: number, viewportHeight: number, world: DeepImmutable<Matrix>, transform: DeepImmutable<Matrix>): Vector3;
        /**
          * 从屏幕空间取消投影到对象空间
          * @param source 屏幕空间Vector3
          * @param viewportWidth 视口的当前宽度
          * @param viewportHeight 视口的当前高度
          * @param world 世界矩阵（可以设置为Identity以进入世界空间）
          * @param view 视图矩阵
          * @param projection 投影矩阵
          * @returns 返回新Vector3
         */
        static Unproject(source: DeepImmutable<Vector3>, viewportWidth: number, viewportHeight: number, world: DeepImmutable<Matrix>, view: DeepImmutable<Matrix>, projection: DeepImmutable<Matrix>): Vector3;
        /**
          * 从屏幕空间取消投影到对象空间
          * @param source 屏幕空间Vector3
          * @param viewportWidth 视口的当前宽度
          * @param viewportHeight 视口的当前高度
          * @param world 世界矩阵（可以设置为Identity以进入世界空间）
          * @param view 视图矩阵
          * @param projection 投影矩阵
          * @param result 用于存储结果的Vector3
         */
        static UnprojectToRef(source: DeepImmutable<Vector3>, viewportWidth: number, viewportHeight: number, world: DeepImmutable<Matrix>, view: DeepImmutable<Matrix>, projection: DeepImmutable<Matrix>, result: Vector3): void;
        /**
          * 从屏幕空间取消投影到对象空间
          * @param sourceX 屏幕空间x坐标
          * @param sourceY 屏幕空间y坐标
          * @param sourceZ 屏幕空间z坐标
          * @param viewportWidth 视口的当前宽度
          * @param viewportHeight 视口的当前高度
          * @param world 世界矩阵（可以设置为Identity以进入世界空间）
          * @param view 视图矩阵
          * @param projection 投影矩阵
          * @param result 用于存储结果的Vector3
         */
        static UnprojectFloatsToRef(sourceX: float, sourceY: float, sourceZ: float, viewportWidth: number, viewportHeight: number, world: DeepImmutable<Matrix>, view: DeepImmutable<Matrix>, projection: DeepImmutable<Matrix>, result: Vector3): void;
        /**
          * 获取两个Vector3之间的最小坐标值
          * @param left 第一个操作数
          * @param right 第二个操作数
          * @returns 返回新Vector3
         */
        static Minimize(left: DeepImmutable<Vector3>, right: DeepImmutable<Vector3>): Vector3;
        /**
          * 获取两个Vector3之间的最大坐标值
          * @param left 第一个操作数
          * @param right 第二个操作数
          * @returns 返回新Vector3
         */
        static Maximize(left: DeepImmutable<Vector3>, right: DeepImmutable<Vector3>): Vector3;
        /**
          * 返回向量“value1”和“value2”之间的距离
          * @param value1 第一个操作数
          * @param value2 第二个操作数
          * @returns 返回距离
         */
        static Distance(value1: DeepImmutable<Vector3>, value2: DeepImmutable<Vector3>): number;
        /**
          * 返回向量“value1”和“value2”之间的平方距离
          * @param value1 第一个操作数
          * @param value2 第二个操作数
          * @returns 返回平方距离
         */
        static DistanceSquared(value1: DeepImmutable<Vector3>, value2: DeepImmutable<Vector3>): number;
        /**
          * 返回位于“value1”和“value2”之间中心的新Vector3
          * @param value1 第一个操作数
          * @param value2 第二个操作数
          * @returns 返回新Vector3
         */
        static Center(value1: DeepImmutable<Vector3>, value2: DeepImmutable<Vector3>): Vector3;
        /**
          * 给定空间（目标系统）中三个正交的标准化左手系方向Vector3轴，
          * RotationFromAxis（）返回旋转Euler角度（例如：rotation.x、rotation.y、rotation.z）
          * 使其从局部系统旋转到给定的目标系统
          * 注意：在此操作过程中，axis1、axis2和axis3被规范化
          * @param axis1 第一个轴
          * @param axis2 第二个轴
          * @param axis3 第三个轴
          * @returns 返回一个新Vector3
         */
        static RotationFromAxis(axis1: DeepImmutable<Vector3>, axis2: DeepImmutable<Vector3>, axis3: DeepImmutable<Vector3>): Vector3;
        /**
          * 与RotationFromAxis相同，但更新给定的ref Vector3参数，而不是返回新的Vector3
          * @param axis1 第一个轴
          * @param axis2 第二个轴
          * @param axis3 第三个轴
          * @param ref 用于存储结果的Vector3
         */
        static RotationFromAxisToRef(axis1: DeepImmutable<Vector3>, axis2: DeepImmutable<Vector3>, axis3: DeepImmutable<Vector3>, ref: Vector3): void;
    }

    /**
       * 为将EuleRange类转换为四元数而创建的Vector4类
       */
    export class Vector4 {
        /**向量的x值*/
        x: number;
        /**向量的y值*/
        y: number;
        /**向量的z值*/
        z: number;
        /**向量的w值*/
        w: number;
        /**
          * 从给定的浮点数创建Vector4对象。
          * @param x
          * @param y
          * @param z
          * @param w
         */
        constructor(x: number, y: number, z: number, w: number);
        /**
          * 返回带有Vector4坐标的字符串。
          * @returns 返回包含所有向量值的字符串
         */
        toString(): string;
        /**
          * 返回字符串“Vector4”。
          * @returnss“Vector4”
         */
        getClassName(): string;
        /**
          * 返回Vector4哈希代码。
          * @returns 返回唯一的哈希代码
         */
        getHashCode(): number;
        /**
          * 返回由四个元素填充的新数组：Vector4坐标。
          * @returns 返回结果数组
         */
        asArray(): number[];
        /**
          * 使用Vector4坐标从给定索引填充给定数组。
          * @param array 要填充的数组
          * @param index 要开始于的数组的索引（默认值：0）
          * @returns 返回Vector4。
         */
        toArray(array: FloatArray, index?: number): Vector4;
        /**
          * 将给定向量添加到当前Vector4。
          * @param otherVector要添加的向量
          * @returns 返回更新的Vector4。
         */
        addInPlace(otherVector: DeepImmutable<Vector4>): Vector4;
        /**
          * 返回一个新Vector4，作为当前Vector4与给定Vector4相加的结果。
          * @param otherVector要添加的向量
          * @returns 返回结果向量
         */
        add(otherVector: DeepImmutable<Vector4>): Vector4;
        /**
          * 使用当前Vector4与给定矢量相加的结果更新给定矢量“result”。
          * @param otherVector要添加的向量
          * @param result存储结果的向量
          * @returns 返回当前Vector4。
         */
        addToRef(otherVector: DeepImmutable<Vector4>, result: Vector4): Vector4;
        /**
          * 从当前矢量中就地减去给定Vector4。
          * @param otherVector 要减去的向量
          * @returns 返回更新的Vector4。
         */
        subtractInPlace(otherVector: DeepImmutable<Vector4>): Vector4;
        /**
          * 返回一个新的Vector4，其中包含从当前Vector4减去给定向量的结果。
          * @param otherVector 要添加的向量
          * @returns 返回带有结果的新向量
         */
        subtract(otherVector: DeepImmutable<Vector4>): Vector4;
        /**
          * 将给定向量“result”设置为从当前Vector4减去给定向量的结果。
          * @param otherVector 要减去的向量
          * @param result 存储结果的向量
          * @returns 返回当前Vector4。
         */
        subtractToRef(otherVector: DeepImmutable<Vector4>, result: Vector4): Vector4;
        /**
          * 返回一个新的Vector4集合，其中包含从当前Vector4坐标减去给定浮点值的结果。
         */
        /**
          * 返回一个新的Vector4集合，其中包含从当前Vector4坐标减去给定浮点值的结果。
          * @param x 要减去的值
          * @param y 要减去的值
          * @param z 要减去的值
          * @param w 要减去的值
          * @returns 返回包含结果的新向量
         */
        subtractFromFloats(x: number, y: number, z: number, w: number): Vector4;
        /**
          * 将给定向量“result”集设置为从当前Vector4坐标减去给定浮点的结果。
          * @param x 要减去的值
          * @param y 要减去的值
          * @param z 要减去的值
          * @param w 要减去的值
          * @param result 
          * @returns 返回当前Vector4。
         */
        subtractFromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): Vector4;
        /**
          * 返回一个新的Vector4集合，其中包含当前Vector4求反的坐标。
          * @returns 返回一个新的向量，该向量的值为负值
         */
        negate(): Vector4;
        /**
          * 将当前Vector4坐标乘以比例（浮点）。
          * @param scale 要缩放的数字
          * @returns 返回更新的Vector4。
         */
        scaleInPlace(scale: number): Vector4;
        /**
          * 返回当前Vector4坐标乘以比例（浮点）的新Vector4集。
          * @param scale要缩放的数字
          * @returns 返回带有结果的新向量
         */
        scale(scale: number): Vector4;
        /**
          * 使用当前Vector4坐标乘以比例（浮点）设置给定矢量“result”。
          * @param scale 要缩放的数字
          * @param result 
          * @returns 返回当前Vector4。
         */
        scaleToRef(scale: number, result: Vector4): Vector4;
        /**
          * 按因子缩放当前Vector4值，并将结果添加到给定Vector4
          * @param scale 比例因子
          * @param result 用于存储结果的Vector4对象
          * @returns 返回未修改的当前Vector4
         */
        scaleAndAddToRef(scale: number, result: Vector4): Vector4;
        /**
          * 布尔值：如果当前Vector4坐标严格等于给定坐标，则为True。
          * @param otherVector 要与之比较的向量
          * @returns 如果它们相等，则返回true
         */
        equals(otherVector: DeepImmutable<Vector4>): boolean;
        /**
          * 布尔值：如果当前Vector4坐标均低于给定矢量坐标的距离“epsilon”，则为True。
          * @param otherVector 要与之比较的向量
          * @param epsilon（默认值：非常小的数字）
          * @returns 如果它们相等，则返回true
         */
        equalsWithEpsilon(otherVector: DeepImmutable<Vector4>, epsilon?: number): boolean;
        /**
          * 布尔值：如果给定的浮点值严格等于当前Vector4坐标，则为True。
          * @param x 
          * @param y 
          * @param z 
          * @param w 
          * @returns 如果相等，则返回true
         */
        equalsToFloats(x: number, y: number, z: number, w: number): boolean;
        /**
          * 将当前Vector4乘以给定矢量。
          * @param otherVector 
          * @returns 返回更新的Vector4。
         */
        multiplyInPlace(otherVector: Vector4): Vector4;
        /**
          * 返回一个新的Vector4集，其中包含当前Vector4与给定Vector4的乘法结果。
          * @param otherVector
          * @returns 返回生成的新向量
         */
        multiply(otherVector: DeepImmutable<Vector4>): Vector4;
        /**
          * 使用当前Vector4和给定向量的乘法结果更新给定向量“result”。
          * @param otherVector
          * @param result 
          * @returns 返回当前Vector4
         */
        multiplyToRef(otherVector: DeepImmutable<Vector4>, result: Vector4): Vector4;
        /**
          * 返回一个新的Vector4集，其中包含给定浮点数与当前Vector4坐标的乘积。
          * @param x 
          * @param y 
          * @param z 
          * @param w 
          * @returns 返回生成的新向量
         */
        multiplyByFloats(x: number, y: number, z: number, w: number): Vector4;
        /**
          * 返回一个新的Vector4集合，其中当前Vector4除以给定的Vector4。
          * @param otherVector
          * @returns 返回生成的新向量
         */
        divide(otherVector: DeepImmutable<Vector4>): Vector4;
        /**
          * 用当前Vector4除以给定向量的结果更新给定向量“result”。
          * @param otherVector
          * @param result 
          * @returns 返回当前Vector4
         */
        divideToRef(otherVector: DeepImmutable<Vector4>, result: Vector4): Vector4;
        /**
          * 将当前Vector3坐标除以给定坐标。
          * @param otherVector
          * @returns 返回更新的Vector3。
         */
        divideInPlace(otherVector: DeepImmutable<Vector4>): Vector4;
        /**
          * 使用其自身和给定向量之间的最小值更新Vector4坐标
          * @param other 第二个操作数
          * @returns 返回当前更新的Vector4
         */
        minimizeInPlace(other: DeepImmutable<Vector4>): Vector4;
        /**
          * 使用其自身和给定向量之间的最大值更新Vector4坐标
          * @param other 第二个操作数
          * @returns 返回当前更新的Vector4
         */
        maximizeInPlace(other: DeepImmutable<Vector4>): Vector4;
        /**
          * 从当前Vector4地板值获取新Vector4
          * @returns 返回一个新Vector4
         */
        floor(): Vector4;
        /**
          * 从当前Vector3地板值获取新Vector4
          * @returns 返回一个新Vector4
         */
        fract(): Vector4;
        /**
          * 返回Vector4长度（浮点）。
          * @returns 返回长度
         */
        length(): number;
        /**
          * 返回Vector4的平方长度（浮点）。
          * @returns 返回长度的平方
         */
        lengthSquared(): number;
        /**
          * 就地规范化Vector4。
          * @returns 返回更新的Vector4。
         */
        normalize(): Vector4;
        /**
          * 从Vector4（x，y，z）坐标返回新的Vector3。
          * @returns 返回已转换为新矢量的值3
         */
        toVector3(): Vector3;
        /**
          * 返回从当前矢量复制的新Vector4。
          * @returns 返回新的克隆向量
         */
        clone(): Vector4;
        /**
          * 使用给定的坐标更新当前Vector4。
          * @param source 源向量
          * @returns 返回更新的Vector4。
         */
        copyFrom(source: DeepImmutable<Vector4>): Vector4;
        /**
          * 使用给定的浮点数更新当前Vector4坐标。
          * @param x 
          * @param y 
          * @param z 
          * @param w 
          * @returns 返回更新的Vector4。
         */
        copyFromFloats(x: number, y: number, z: number, w: number): Vector4;
        /**
          * 使用给定的浮点数更新当前Vector4坐标。
          * @param x 
          * @param y float要从中设置
          * @param z 
          * @param w 
          * @returns 返回更新的Vector4。
         */
        set(x: number, y: number, z: number, w: number): Vector4;
        /**
          * 将给定的浮点复制到当前Vector3坐标
          * @param v 操作数的x、y、z和w坐标
          * @returns 返回当前更新的Vector3
         */
        setAll(v: number): Vector4;
        /**
          * 从给定数组的起始索引返回新的Vector4集。
          * @param array 数组
          * @param offset 开始偏移量
          * @returns 返回新向量
         */
        static FromArray(array: DeepImmutable<ArrayLike<number>>, offset?: number): Vector4;
        /**
          * 从给定数组的起始索引更新给定向量“result”。
          * @param array 数组
          * @param offset 开始偏移量
          * @param result
         */
        static FromArrayToRef(array: DeepImmutable<ArrayLike<number>>, offset: number, result: Vector4): void;
        /**
          * 从给定数组的起始索引更新给定向量“result”。
          * @param array 数组
          * @param offset 开始偏移量
          * @param result
         */
        static FromFloatArrayToRef(array: DeepImmutable<Float32Array>, offset: number, result: Vector4): void;
        /**
          * 从给定浮点更新给定向量“result”坐标。
          * @param x 
          * @param y 
          * @param z 
          * @param w 
          * @param result 
         */
        static FromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): void;
        /**
          * 将新Vector4设置为（0.0,0.0,0.0,0.0）
          * @returns 返回新向量
         */
        static Zero(): Vector4;
        /**
          * 将新Vector4设置为（1.0、1.0、1.0、1.0）
          * @returns 返回新向量
         */
        static One(): Vector4;
        /**
          * 从给定向量返回新的规范化Vector4。
          * @param vector 要规范化的向量
          * @returns 返回向量
         */
        static Normalize(vector: DeepImmutable<Vector4>): Vector4;
        /**
          * 根据给定向量的规范化更新给定向量“result”。
          * @param vector 要规范化的向量
          * @param result 
         */
        static NormalizeToRef(vector: DeepImmutable<Vector4>, result: Vector4): void;
        /**
          * 返回具有左向量和右向量的最小值的向量
          * @param left 
          * @param right
          * @returns 
         */
        static Minimize(left: DeepImmutable<Vector4>, right: DeepImmutable<Vector4>): Vector4;
        /**
          * 返回具有左向量和右向量的最大值的向量
          * @param left
          * @param right
          * @returns 
         */
        static Maximize(left: DeepImmutable<Vector4>, right: DeepImmutable<Vector4>): Vector4;
        /**
          * 返回向量“value1”和“value2”之间的距离（浮点）。
          * @param value1
          * @param value2
          * @returns 返回两个向量之间的距离
         */
        static Distance(value1: DeepImmutable<Vector4>, value2: DeepImmutable<Vector4>): number;
        /**
          * 返回向量“value1”和“value2”之间的平方距离（浮点）。
          * @param value1
          * @param value2
          * @returns 返回两个向量之间的距离平方
         */
        static DistanceSquared(value1: DeepImmutable<Vector4>, value2: DeepImmutable<Vector4>): number;
        /**
          * 返回位于向量“value1”和“value2”之间中心的新Vector4。
          * @param value1
          * @param value2
          * @returns 返回两个向量之间的中心
         */
        static Center(value1: DeepImmutable<Vector4>, value2: DeepImmutable<Vector4>): Vector4;
        /**
          * 返回一个新的Vector4集合，其中包含给定向量的给定矩阵的法线变换结果。
          * 此方法仅计算变换的规范化方向向量。
          * @param vector 
          * @param transformation 转换矩阵
          * @returns 返回新向量
         */
        static TransformNormal(vector: DeepImmutable<Vector4>, transformation: DeepImmutable<Matrix>): Vector4;
        /**
          * 通过给定向量的给定矩阵将给定向量的“result”与法线变换的结果进行设置。
          * 此方法仅计算变换的规范化方向向量。
          * @param vector
          * @param transformation 转换矩阵
          * @param result
         */
        static TransformNormalToRef(vector: DeepImmutable<Vector4>, transformation: DeepImmutable<Matrix>, result: Vector4): void;
        /**
          * 通过给定浮点数（x，y，z，w）的给定矩阵，将给定向量“result”与法线变换的结果一起设置。
          * 此方法仅计算变换的规范化方向向量。
          * @param x
          * @param y
          * @param z
          * @param w
          * @param transformation 转换矩阵
          * @param result
         */
        static TransformNormalFromFloatsToRef(x: number, y: number, z: number, w: number, transformation: DeepImmutable<Matrix>, result: Vector4): void;
        /**
          * 从Vector3创建新Vector4
          * @param source 源数据
          * @param w 第四个分量（默认值为0）
          * @returns 返回一个新Vector4
         */
        static FromVector3(source: Vector3, w?: number): Vector4;
    }

    /**
      * 包含宽度和高度的大小的接口
      */
    export interface ISize {
        /**
           * 宽度
          */
        width: number;
        /**
           * 高度
          */
        height: number;
    }

    /**
      * 包含宽度和高度的大小
      */
    export class Size implements ISize {
        /**
           * 宽度
          */
        width: number;
        /**
           * 高度
          */
        height: number;
        /**
          * 根据给定的宽度和高度（浮点数）创建大小对象。
          * @param width 宽度
          * @param height 高度
         */
        constructor(width: number, height: number);
        /**
          * 返回具有大小、宽度和高度的字符串
          * @returns 返回大小为宽度和高度的字符串
         */
        toString(): string;
        /**
          * “Size”
          * @returns 返回字符串“Size”
         */
        getClassName(): string;
        /**
          * 返回大小哈希代码。
          * @returns 返回唯一宽度和高度的哈希代码
         */
        getHashCode(): number;
        /**
          * 从给定大小更新当前大小。
          * @param src指定的大小
         */
        copyFrom(src: Size): void;
        /**
          * 就地更新给定浮点数的当前大小。
          * @param -width新尺寸的宽度
          * @param -height新尺寸的高度
          * @returns 返回更新后的大小。
         */
        copyFromFloats(width: number, height: number): Size;
        /**
          * 就地更新给定浮点数的当前大小。
          * @param width 宽度
          * @param height 高度
          * @returns 返回更新后的大小。
         */
        set(width: number, height: number): Size;
        /**
          * 将宽度和高度乘以数字
          * @param w 将宽度乘以
          * @param h 将高度乘以
          * @returns 返回一个新的大小，设置为当前大小与给定浮点数的乘法结果。
         */
        multiplyByFloats(w: number, h: number): Size;
        /**
          * 克隆大小
          * @returns 返回从给定大小复制的新大小。
         */
        clone(): Size;
        /**
           * True if the current Size and the given one width and height are strictly equal.
           * @param other the other size to compare against
           * @returnss True if the current Size and the given one width and height are strictly equal.
          */
        /**
          * 如果当前大小与给定的宽度和高度严格相等，则为True。
          * @param other 
          * @returns 如果当前大小与给定的宽度和高度严格相等，则返回True。
         */
        equals(other: Size): boolean;
        /**
           * The surface of the Size : width * height (float).
          */
        /**
          * 尺寸的表面：宽度*高度（浮点数）。
         */
        readonly surface: number;
        /**
           * Create a new size of zero
           * @returnss a new Size set to (0.0, 0.0)
          */
        /**
          * 创建一个新的零大小
          * @returns 返回设置为（0.0，0.0）的新大小
         */
        static Zero(): Size;
        /**
           * Sums the width and height of two sizes
           * @param otherSize size to add to this size
           * @returnss a new Size set as the addition result of the current Size and the given one.
          */
        /**
          * 将两种尺寸的宽度和高度相加
          * @param otherSize
          * @returns 返回一个新的大小集，作为当前大小与给定大小相加的结果。
         */
        add(otherSize: Size): Size;
        /**
           * Subtracts the width and height of two
           * @param otherSize size to subtract to this size
           * @returnss a new Size set as the subtraction result of  the given one from the current Size.
          */
        /**
          * 减去两个的宽度和高度
          * @param otherSize 要减去此大小
          * @returns 返回一个新的大小集，作为给定大小与当前大小的减法结果。
         */
        subtract(otherSize: Size): Size;
        /**
           * Creates a new Size set at the linear interpolation "amount" between "start" and "end"
           * @param start starting size to lerp between
           * @param end end size to lerp between
           * @param amount amount to lerp between the start and end values
           * @returnss a new Size set at the linear interpolation "amount" between "start" and "end"
          */
        /**
          * 在“start”和“end”之间的线性插值“amount”处创建新的尺寸集
          * @param start 
          * @param end
          * @param amount 开始值和结束值之间的lerp值
          * @returns 返回在“开始”和“结束”之间的线性插值“数量”处设置的新大小
         */
        static Lerp(start: Size, end: Size, amount: number): Size;
    }

    /**
      * 用于存储四元数数据的类
      */
    export class Quaternion {
        /** 第一个值（默认为0）*/
        x: number;
        /** 第二个值（默认为0）*/
        y: number;
        /** 第三个值（默认为0）*/
        z: number;
        /** 第四个值（默认为1.0）*/
        w: number;
        /**
          * 从给定的浮点数创建新的四元数
          * @param x 第一个值（默认为0）
          * @param y 第二个值（默认为0）
          * @param z 第三个值（默认为0）
          * @param w 第四个值（默认为1.0）
         */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
          * 获取当前四元数的字符串表示形式
          * @returns 返回具有四元数坐标的字符串
         */
        toString(): string;
        /**
          * 获取四元数的类名
          * @returns 返回字符串“Quaternion”
         */
        getClassName(): string;
        /**
          * 获取此四元数的哈希代码
          * @returns 返回四元数哈希代码
         */
        getHashCode(): number;
        /**
          * 将四元数复制到数组中
          * @returns 返回由四元数坐标中的四个元素填充的新数组
         */
        asArray(): number[];
        /**
          * 检查两个四元数是否相等
          * @param otherQuaternion 第二个操作数
          * @returns 如果当前四元数和给定的一个坐标严格相等，则返回true
         */
        equals(otherQuaternion: DeepImmutable<Quaternion>): boolean;
        /**
          * 克隆当前四元数
          * @returns 返回从当前四元数复制的新四元数
         */
        clone(): Quaternion;
        /**
          * 将四元数复制到当前四元数
          * @param other 另一个四元数
          * @returns 返回更新后的当前四元数
         */
        copyFrom(other: DeepImmutable<Quaternion>): Quaternion;
        /**
          * 使用给定的浮点坐标更新当前四元数
          * @param x x坐标
          * @param y y坐标
          * @param z z坐标
          * @param w w坐标
          * @returns 返回更新后的当前四元数
         */
        copyFromFloats(x: number, y: number, z: number, w: number): Quaternion;
        /**
          * 从给定的浮点坐标更新当前四元数
          * @param x x坐标
          * @param y y坐标
          * @param z z坐标
          * @param w w坐标
          * @returns 返回更新后的当前四元数
         */
        set(x: number, y: number, z: number, w: number): Quaternion;
        /**
           * Adds two quaternions
           * @param other defines the second operand
           * @returnss a new quaternion as the addition result of the given one and the current quaternion
          */
        /**
          * 两个四元数做加法
          * @param other 第二个操作数
          * @returns 返回一个新的四元数，作为给定四元数与当前四元数相加的结果
         */
        add(other: DeepImmutable<Quaternion>): Quaternion;
        /**
          * 将四元数加到当前四元数
          * @param other 要添加的四元数
          * @returns 返回当前的四元数
         */
        addInPlace(other: DeepImmutable<Quaternion>): Quaternion;
        /**
          * 两个四元数相减
          * @param other 第二个操作数
          * @returns 返回一个新的四元数，作为给定四元数与当前四元数的减法结果
         */
        subtract(other: Quaternion): Quaternion;
        /**
          * 将当前四元数乘以比例因子
          * @param 值 比例因子
          * @将当前四元数坐标乘以浮点“比例”，返回一个新的四元数集
         */
        scale(value: number): Quaternion;
        /**
          * 按因子缩放当前四元数值，并将结果存储到给定的四元数
          * @param scale 比例因子
          * @param result 存储结果的四元数对象
          * @returns 返回未修改的当前四元数
         */
        scaleToRef(scale: number, result: Quaternion): Quaternion;
        /**
          * 就地将当前四元数乘以比例因子
          * @param 值 比例因子
          * @returns 返回当前修改的四元数
         */
        scaleInPlace(value: number): Quaternion;
        /**
          * 按因子缩放当前四元数值，并将结果添加到给定的四元数
          * @param scale 比例因子
          * @param result 存储结果的四元数对象
          * @returns 返回未修改的当前四元数
         */
        scaleAndAddToRef(scale: number, result: Quaternion): Quaternion;
        /**
          * 将两个四元数相乘
          * @param q1 第二个操作数
          * @returns 返回一个新的四元数集，作为当前四元数与给定四元数“q1”的乘积
         */
        multiply(q1: DeepImmutable<Quaternion>): Quaternion;
        /**
          * 将给定的“result”设置为当前结果与给定结果“q1”的乘积
          * @param q1 第二个操作数
          * @param result 目标四元数
          * @returns 返回当前的四元数
         */
        multiplyToRef(q1: DeepImmutable<Quaternion>, result: Quaternion): Quaternion;
        /**
          * 更新当前四元数，使其自身与给定的一个“q1”相乘
          * @param q1 第二个操作数
          * @returns 返回当前更新的四元数
         */
        multiplyInPlace(q1: DeepImmutable<Quaternion>): Quaternion;
        /**
          * 共轭（1-q）当前四元数并将结果存储在给定的四元数中
          * @param ref 目标四元数
          * @returns 返回当前的四元数
         */
        conjugateToRef(ref: Quaternion): Quaternion;
        /**
          * 将当前四元数就地（1-q）共轭
          * @returns 返回当前更新的四元数
         */
        conjugateInPlace(): Quaternion;
        /**
          * 将当前四元数就地（1-q）共轭
          * @returns 返回一个新的四元数
         */
        conjugate(): Quaternion;
        /**
          * 获取当前四元数的长度
          * @returns 返回四元数长度（浮点）
         */
        length(): number;
        /**
          * 就地规范化当前四元数
          * @returns 返回当前更新的四元数
         */
        normalize(): Quaternion;
        /**
          * 返回一个新的Vector3集，其中Euler角度从当前四元数转换而来
          * @param order是一个保留参数，暂时忽略
          * @returns 返回包含Euler角度的新Vector3
         */
        toEulerAngles(order?: string): Vector3;
        /**
          * 使用从当前四元数转换的Euler角度设置给定Vector3“result”
          * @param result 将用欧拉角填充的向量
          * @param order 是一个保留参数，暂时忽略
          * @returns 返回当前未更改的四元数
         */
        toEulerAnglesToRef(result: Vector3): Quaternion;
        /**
          * 使用当前四元数值更新给定的旋转矩阵
          * @param result 目标矩阵
          * @returns 返回当前未更改的四元数
         */
        toRotationMatrix(result: Matrix): Quaternion;
        /**
          * 根据给定的旋转矩阵值更新当前四元数
          * @param matrix 源矩阵
          * @returns 返回当前更新的四元数
         */
        fromRotationMatrix(matrix: DeepImmutable<Matrix>): Quaternion;
        /**
          * 从旋转矩阵创建新的四元数
          * @param matrix 源矩阵
          * @returns 返回根据给定旋转矩阵值创建的新四元数
         */
        static FromRotationMatrix(matrix: DeepImmutable<Matrix>): Quaternion;
        /**
          * 使用给定的旋转矩阵值更新给定的四元数
          * @param matrix 源矩阵
          * @param result 目标四元数
         */
        static FromRotationMatrixToRef(matrix: DeepImmutable<Matrix>, result: Quaternion): void;
        /**
          * 返回四元数“left”和“right”之间的点积（float）
          * @param left 左操作数
          * @param right 正确的操作数
          * @returns 返回点积
         */
        static Dot(left: DeepImmutable<Quaternion>, right: DeepImmutable<Quaternion>): number;
        /**
          * 检查两个四元数是否彼此接近
          * @param quat0 要检查的第一个四元数
          * @param quat1 要检查的第二个四元数
          * @returns 如果两个四元数彼此接近，则返回true
         */
        static AreClose(quat0: DeepImmutable<Quaternion>, quat1: DeepImmutable<Quaternion>): boolean;
        /**
          * 创建一个空的四元数
          * @将新的四元数设置为（0.0,0.0,0.0）
         */
        static Zero(): Quaternion;
        /**
          * 求给定四元数的逆
          * @param q 源四元数
          * @returns 返回一个新的四元数作为反向的当前四元数
         */
        static Inverse(q: DeepImmutable<Quaternion>): Quaternion;
        /**
          * 求给定四元数的逆
          * @param q 源四元数
          * @param result结果将存储在其中的四元数
          * @returns 返回结果四元数
         */
        static InverseToRef(q: Quaternion, result: Quaternion): Quaternion;
        /**
          * 创建标识四元数
          * @returns 返回标识四元数
         */
        static Identity(): Quaternion;
        /**
          * 获取一个布尔值，指示给定的四元数是否为标识
          * @param 四元数 要检查的四元数
          * @returns 如果四元数为identity，则返回true
         */
        static IsIdentity(quaternion: DeepImmutable<Quaternion>): boolean;
        /**
          * 通过绕轴旋转创建四元数
          * @param axis 轴
          * @param angle 角度
          * @returns 返回从给定轴（Vector3）和以弧度表示的角度（浮点数）创建的新四元数
         */
        static RotationAxis(axis: DeepImmutable<Vector3>, angle: number): Quaternion;
        /**
          * 创建绕轴旋转并将其存储到给定的四元数中
          * @param axis 轴
          * @param angle 角度
          * @param result 目标四元数
          * @returns 返回目标四元数
         */
        static RotationAxisToRef(axis: DeepImmutable<Vector3>, angle: number, result: Quaternion): Quaternion;
        /**
          * 从存储在数组中的数据创建新的四元数
          * @param 数组 数据源
          * @param offset 数据开始的源数组中的偏移量
          * @returns 返回一个新的四元数
         */
        static FromArray(array: DeepImmutable<ArrayLike<number>>, offset?: number): Quaternion;
        /**
          * 从Euler旋转角度创建四元数
          * @param x 俯仰角
          * @param y 航向角
          * @param z Roll
          * @returns 返回新的四元数
         */
        static FromEulerAngles(x: number, y: number, z: number): Quaternion;
        /**
          * 从Euler旋转角度更新四元数
          * @param x 俯仰角
          * @param y 航向角
          * @param z Roll
          * @param result   存储结果的四元数
          * @returns 返回更新的四元数
         */
        static FromEulerAnglesToRef(x: number, y: number, z: number, result: Quaternion): Quaternion;
        /**
          * 从Euler旋转向量创建四元数
          * @param -vec欧拉矢量（x俯仰、y偏航、z滚转）
          * @returns 返回新的四元数
         */
        static FromEulerVector(vec: DeepImmutable<Vector3>): Quaternion;
        /**
          * 从Euler旋转向量更新四元数
          * @param -vec欧拉矢量（x俯仰、y偏航、z滚转）
          * @param result 存储结果的四元数
          * @returns 返回更新的四元数
         */
        static FromEulerVectorToRef(vec: DeepImmutable<Vector3>, result: Quaternion): Quaternion;
        /**
          * 从给定的Euler浮点数角度（y、x、z）创建新的四元数
          * @param yaw 绕Y轴的旋转
          * @param pitch 绕X轴的旋转
          * @param roll 围绕Z轴的旋转
          * @returns 返回新的四元数
         */
        static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion;
        /**
          * 从给定的Euler浮点数角度（y、x、z）创建新旋转，并将其存储在目标四元数中
          * @param yaw 绕Y轴的旋转
          * @param pitch 绕X轴的旋转
          * @param roll 围绕Z轴的旋转
          * @param result 目标四元数
         */
        static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Quaternion): void;
        /**
          * 从以z-x-z方向表示的给定Euler浮点数角度创建新的四元数
          * @param alpha 绕第一个轴的旋转
          * @param beta 围绕第二个轴的旋转
          * @param gamma 绕第三个轴的旋转
          * @returns 返回新的四元数
         */
        static RotationAlphaBetaGamma(alpha: number, beta: number, gamma: number): Quaternion;
        /**
          * 从以z-x-z方向表示的给定Euler浮点数角度创建新的四元数，并将其存储在目标四元数中
          * @param alpha 绕第一个轴的旋转
          * @param beta 围绕第二个轴的旋转
          * @param gamma 绕第三个轴的旋转
          * @param result 目标四元数
         */
        static RotationAlphaBetaGammaToRef(alpha: number, beta: number, gamma: number, result: Quaternion): void;
        /**
          * 创建一个新的四元数，该四元数包含旋转值以达到目标（axis1、axis2、axis3）方向，作为旋转XYZ系统（axis1、axis2和axis3在此操作期间被规范化）
          * @param axis1 第一个轴
          * @param axis2 第二个轴
          * @param axis3 第三个轴
          * @returns 返回新的四元数
         */
        static RotationQuaternionFromAxis(axis1: DeepImmutable<Vector3>, axis2: DeepImmutable<Vector3>, axis3: DeepImmutable<Vector3>): Quaternion;
        /**
          * 创建一个旋转值以达到目标（axis1、axis2、axis3）方向，作为旋转的XYZ系统（axis1、axis2和axis3在此操作期间被规范化），并将其存储在目标四元数中
          * @param axis1 第一个轴
          * @param axis2 第二个轴
          * @param axis3 第三个轴
          * @param ref 目标四元数
         */
        static RotationQuaternionFromAxisToRef(axis1: DeepImmutable<Vector3>, axis2: DeepImmutable<Vector3>, axis3: DeepImmutable<Vector3>, ref: Quaternion): void;
        /**
          * 在两个四元数之间插值
          * @param left 第一个四元数
          * @param right 第二个四元数
          * @param amount 渐变
          * @returns 返回新的插值四元数
         */
        static Slerp(left: DeepImmutable<Quaternion>, right: DeepImmutable<Quaternion>, amount: number): Quaternion;
        /**
          * 在两个四元数之间插值并将其存储到目标四元数中
          * @param left 第一个四元数
          * @param right 第二个四元数
          * @param amount 渐变
          * @param result 目标四元数
         */
        static SlerpToRef(left: DeepImmutable<Quaternion>, right: DeepImmutable<Quaternion>, amount: number, result: Quaternion): void;
        /**
          * 使用Hermite插值法在两个四元数之间插值
          * @param value1 第一个四元数
          * @param 切线1 传入切线
          * @param value2 第二个四元数
          * @param 切线2 传出切线
          * @param amount 目标四元数
          * @returns 返回新的插值四元数
         */
        static Hermite(value1: DeepImmutable<Quaternion>, tangent1: DeepImmutable<Quaternion>, value2: DeepImmutable<Quaternion>, tangent2: DeepImmutable<Quaternion>, amount: number): Quaternion;
    }

    /**
      * 用于存储矩阵数据的类（4x4）
      */
    export class Matrix {
        /**
          * 获取矩阵的更新标志，该标志是矩阵的唯一编号。
          * 每次矩阵数据更改时，它都会增加。
          * 您可以使用它来快速判断矩阵是否被修改。
         */
        updateFlag: number;
        /**
          * 获取矩阵的内部数据
         */
        readonly m: DeepImmutable<Float32Array>;
        /**
          * 创建一个空矩阵（用零填充）
         */
        constructor();
        /**
          * 检查当前矩阵是否单位矩阵
          * @returnss true表示矩阵为单位矩阵
         */
        isIdentity(): boolean;
        /**
           * Check if the current matrix is identity as a texture matrix (3x2 store in 4x4)
           * @returnss true is the matrix is the identity matrix
          */
        /**
          * 检查当前矩阵是否与纹理矩阵相同（3x2存储在4x4中）
          * @returnss true表示矩阵为单位矩阵
         */
        isIdentityAs3x2(): boolean;
        /**
           * Gets the determinant of the matrix
           * @returnss the matrix determinant
          */
        /**
          * 获取矩阵的行列式
          * @returns 返回矩阵行列式
         */
        determinant(): number;
        /**
          * 以浮点数组形式返回矩阵
          * @returns 返回基础数组的矩阵
         */
        toArray(): DeepImmutable<Float32Array>;
        /**
          * 以浮点数组形式返回矩阵
          * @returns 返回基础数组的矩阵。
         */
        asArray(): DeepImmutable<Float32Array>;
        /**
          * 反转当前矩阵
          * @returns 返回当前的反向矩阵
         */
        invert(): Matrix;
        /**
          * 将所有矩阵元素设置为零
          * @returns 返回当前矩阵
         */
        reset(): Matrix;
        /**
          * 将当前矩阵与第二个矩阵相加
          * @param other 要添加的矩阵
          * @returns 返回一个新矩阵，作为当前矩阵和给定矩阵的相加
         */
        add(other: DeepImmutable<Matrix>): Matrix;
        /**
          * 将给定矩阵“result”设置为当前矩阵和给定矩阵的相加
          * @param other 要添加的矩阵
          * @param result 目标矩阵
          * @returns 返回当前矩阵
         */
        addToRef(other: DeepImmutable<Matrix>, result: Matrix): Matrix;
        /**
          * 将给定矩阵就地添加到当前矩阵
          * @param other 第二个操作数
          * @returns 返回当前更新的矩阵
         */
        addToSelf(other: DeepImmutable<Matrix>): Matrix;
        /**
          * 将给定矩阵设置为当前反向矩阵
          * @param other 目标矩阵
          * @returns 返回未修改的当前矩阵
         */
        invertToRef(other: Matrix): Matrix;
        /**
          * 在当前矩阵中的指定位置添加值
          * @param index 索引。在0到15之间。
          * @param value 要添加的值
          * @returns 返回当前更新的矩阵
         */
        addAtIndex(index: number, value: number): Matrix;
        /**
          * 将当前矩阵中的指定位置乘以一个值
          * @param index 索引。在0到15之间。
          * @param value 要添加的值
          * @returns 返回当前更新的矩阵
         */
        multiplyAtIndex(index: number, value: number): Matrix;
        /**
          * 在当前矩阵中插入平移向量（使用三个浮点）
          * @param x 转换的第一个分量
          * @param y 转换的第二个分量
          * @param z 转换的第三个分量
          * @returns 返回当前更新的矩阵
         */
        setTranslationFromFloats(x: number, y: number, z: number): Matrix;
        /**
          * 在当前矩阵中添加平移向量（使用三个浮点）
          * @param x 转换的第一个分量
          * @param y 转换的第二个分量
          * @param z 转换的第三个分量
          * @returns 返回当前更新的矩阵
         */
        addTranslationFromFloats(x: number, y: number, z: number): Matrix;
        /**
          * 在当前矩阵中插入平移向量
          * @param vector3 要插入的转换
          * @returns 返回当前更新的矩阵
         */
        setTranslation(vector3: DeepImmutable<Vector3>): Matrix;
        /**
          * 获取当前矩阵的转换值
          * @returns 返回一个新Vector3作为从矩阵中提取的平移
         */
        getTranslation(): Vector3;
        /**
          * 用从矩阵中提取的平移填充Vector3
          * @param result 用于存储翻译的Vector3
          * @returns 返回当前矩阵
         */
        getTranslationToRef(result: Vector3): Matrix;
        /**
          * 从矩阵中删除旋转和缩放部分
          * @returns 返回更新后的矩阵
         */
        removeRotationAndScaling(): Matrix;
        /**
          * 两个矩阵相乘
          * @param other 第二个操作数
          * @returns 返回一个新的矩阵集，其中包含当前矩阵与给定矩阵的乘法结果
         */
        multiply(other: DeepImmutable<Matrix>): Matrix;
        /**
          * 从给定矩阵复制当前矩阵
          * @param other 源矩阵
          * @returns 返回当前更新的矩阵
         */
        copyFrom(other: DeepImmutable<Matrix>): Matrix;
        /**
          * 使用当前矩阵值从起始索引填充给定数组
          * @param array 目标数组
          * @param offset 目标数组中开始存储值的偏移量
          * @returns 返回当前矩阵
         */
        copyToArray(array: Float32Array, offset?: number): Matrix;
        /**
          * 将给定矩阵“result”与当前矩阵和给定矩阵的乘法结果一起设置
          * @param other 第二个操作数
          * @param result 存储乘法的矩阵
          * @returns 返回当前矩阵
         */
        multiplyToRef(other: DeepImmutable<Matrix>, result: Matrix): Matrix;
        /**
          * 将给定索引“offset”与当前矩阵和给定矩阵的乘积设置为数组“result”
          * @param other 第二个操作数
          * @param result 存储乘法的数组
          * @param offset 目标数组中开始存储值的偏移量
          * @returns 返回当前矩阵
         */
        multiplyToArray(other: DeepImmutable<Matrix>, result: Float32Array, offset: number): Matrix;
        /**
          * 检查此矩阵与第二个矩阵是否相等
          * @param value 要比较的第二个矩阵
          * @returnss true是当前矩阵，给定的值严格相等
         */
        equals(value: DeepImmutable<Matrix>): boolean;
        /**
          * 克隆当前矩阵
          * @从当前矩阵返回一个新矩阵
         */
        clone(): Matrix;
        /**
          * 返回当前矩阵类的名称
          * @returns 返回字符串“Matrix”
         */
        getClassName(): string;
        /**
          * 获取当前矩阵的哈希代码
          * @returns 返回哈希代码
         */
        getHashCode(): number;
        /**
          * 将当前矩阵分解为平移、旋转和缩放部分
          * @param scale 作为更新参考的缩放Vector3
          * @param rotation 作为更新引用的旋转四元数
          * @param translation 作为更新参考的翻译Vector3
          * @returns 如果操作成功，则返回true
         */
        decompose(scale?: Vector3, rotation?: Quaternion, translation?: Vector3): boolean;
        /**
          * 获取矩阵的特定行
          * @param index 要获取的行数
          * @将当前矩阵的索引第th行作为新向量返回4
         */
        getRow(index: number): Nullable<Vector4>;
        /**
          * 将当前矩阵的第th行索引设置为vector4值
          * @param index 要设置的行数
          * @param 行 目标Vector4
          * @returns 返回更新后的当前矩阵
         */
        setRow(index: number, row: Vector4): Matrix;
        /**
          * 计算矩阵的转置
          * @returns 返回新的转置矩阵
         */
        transpose(): Matrix;
        /**
          * 计算矩阵的转置并将其存储在给定的矩阵中
          * @param result 目标矩阵
          * @returns 返回当前矩阵
         */
        transposeToRef(result: Matrix): Matrix;
        /**
          * 使用给定的4 x浮点值设置当前矩阵的第index行索引
          * @param index 行索引
          * @param x 要设置的x分量
          * @param y 要设置的y分量
          * @param z 要设置的z分量
          * @param w 要设置的w分量
          * @returns 返回更新后的当前矩阵
         */
        setRowFromFloats(index: number, x: number, y: number, z: number, w: number): Matrix;
        /**
          * 用当前矩阵值乘以比例（浮点）计算并设置新矩阵
          * @param scale 比例因子
          * @returns 返回一个新矩阵
         */
        scale(scale: number): Matrix;
        /**
          * 按因子将当前矩阵值缩放到给定的结果矩阵
          * @param scale 比例因子
          * @param result 存储结果的矩阵
          * @returns 返回当前矩阵
         */
        scaleToRef(scale: number, result: Matrix): Matrix;
        /**
          * 按因子缩放当前矩阵值，并将结果添加到给定矩阵
          * @param scale 比例因子
          * @param result 存储结果的矩阵
          * @returns 返回当前矩阵
         */
        scaleAndAddToRef(scale: number, result: Matrix): Matrix;
        /**
          * 向给定矩阵写入一个标准矩阵，由该矩阵计算（使用第四行和第四列的单位矩阵中的值）。
          * @param ref matrix以存储结果
         */
        toNormalMatrix(ref: Matrix): void;
        /**
          * 仅获取当前矩阵的旋转部分
          * @returns 将新矩阵集返回到从当前矩阵提取的旋转矩阵
         */
        getRotationMatrix(): Matrix;
        /**
          * 从当前旋转矩阵中提取旋转矩阵，并将其设置为给定的“result”
          * @param result 存储数据的目标矩阵
          * @returns 返回当前矩阵
         */
        getRotationMatrixToRef(result: Matrix): Matrix;
        /**
          * 将模型矩阵从右手系切换到左手系，反之亦然
         */
        toggleModelMatrixHandInPlace(): void;
        /**
          * 将投影矩阵从右手系切换到左手系，反之亦然
         */
        toggleProjectionMatrixHandInPlace(): void;
        /**
          * 从数组创建矩阵
          * @param array 源数组
          * @param offset 源数组中的偏移量
          * @returns 从给定数组的起始索引返回一个新的矩阵集
         */
        static FromArray(array: DeepImmutable<ArrayLike<number>>, offset?: number): Matrix;
        /**
          * 将数组的内容复制到给定的矩阵中
          * @param array 源数组
          * @param offset 源数组中的偏移量
          * @param result 目标矩阵
         */
        static FromArrayToRef(array: DeepImmutable<ArrayLike<number>>, offset: number, result: Matrix): void;
        /**
          * 将每个分量乘以给定因子后，将数组存储到矩阵中
          * @param array 源数组
          * @param offset 源数组中的偏移量
          * @param scale 缩放因子
          * @param result 目标矩阵
         */
        static FromFloat32ArrayToRefScaled(array: DeepImmutable<Float32Array>, offset: number, scale: number, result: Matrix): void;
        /**
          * 获取只读的单位矩阵
         */
        static readonly IdentityReadOnly: DeepImmutable<Matrix>;
        /**
          * 在给定矩阵中存储值列表（16）
          * @param initialM11 第一行的第一个值
          * @param initialM12 第一行的第二个值
          * @param initialM13 第一行的第三个值
          * @param initialM14 第一行的第四个值
          * @param initialM21 第二行的第一个值
          * @param initialM22 第二行的第二个值
          * @param initialM23 第二行的第三个值
          * @param initialM24 第二行的第四个值
          * @param initialM31 第三行的第一个值
          * @param initialM32 第三行的第二个值
          * @param initialM33 第三行的第三个值
          * @param initialM34 第三行的第四个值
          * @param initialM41 第四行的第一个值
          * @param initialM42 第四行的第二个值
          * @param initialM43 第四行的第三个值
          * @param initialM44 第四行的第四个值
          * @param result 目标矩阵
         */
        static FromValuesToRef(initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number, result: Matrix): void;
        /**
          * 从值列表创建新矩阵（16）
          * @param initialM11 第一行的第一个值
          * @param initialM12 第一行的第二个值
          * @param initialM13 第一行的第三个值
          * @param initialM14 第一行的第四个值
          * @param initialM21 第二行的第一个值
          * @param initialM22 第二行的第二个值
          * @param initialM23 第二行的第三个值
          * @param initialM24 第二行的第四个值
          * @param initialM31 第三行的第一个值
          * @param initialM32 第三行的第二个值
          * @param initialM33 第三行的第三个值
          * @param initialM34 第三行的第四个值
          * @param initialM41 第四行的第一个值
          * @param initialM42 第四行的第二个值
          * @param initialM43 第四行的第三个值
          * @param initialM44 第四行的第四个值
          * @returns 返回新矩阵
         */
        static FromValues(initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number): Matrix;
        /**
          * 通过合并缩放（Vector3）、旋转（四元数）和平移（Vector3）创建新矩阵
          * @param scale 缩放Vector3
          * @param rotation 旋转四元数
          * @param translation 平移Vector3
          * @returns 返回一个新矩阵
         */
        static Compose(scale: DeepImmutable<Vector3>, rotation: DeepImmutable<Quaternion>, translation: DeepImmutable<Vector3>): Matrix;
        /**
          * 将矩阵设置为由合并缩放（Vector3）、旋转（四元数）和平移（Vector3）组成的值
          * @param scale 缩放Vector3
          * @param rotation 旋转四元数
          * @param translation 平移Vector3
          * @param result 目标矩阵
         */
        static ComposeToRef(scale: DeepImmutable<Vector3>, rotation: DeepImmutable<Quaternion>, translation: DeepImmutable<Vector3>, result: Matrix): void;
        /**
          * 创建新的单位矩阵
          * @returns 返回一个新的单位矩阵
         */
        static Identity(): Matrix;
        /**
          * 创建一个新的单位矩阵，并将结果存储在给定的矩阵中
          * @param result 目标矩阵
         */
        static IdentityToRef(result: Matrix): void;
        /**
          * 创建一个新的零矩阵
          * @returns 返回一个新的零矩阵
         */
        static Zero(): Matrix;
        /**
          * 创建围绕X轴为“angle”弧度的新旋转矩阵
          * @param angle 角度（以弧度为单位）
          * @returns 返回新矩阵
         */
        static RotationX(angle: number): Matrix;
        /**
          * 创建一个新矩阵作为给定矩阵的逆矩阵
          * @param source 源矩阵
          * @returns 返回新矩阵
         */
        static Invert(source: DeepImmutable<Matrix>): Matrix;
        /**
          * 创建围绕X轴为“angle”弧度的新旋转矩阵，并将其存储在给定矩阵中
          * @param angle 角度（以弧度为单位）
          * @param result 目标矩阵
         */
        static RotationXToRef(angle: number, result: Matrix): void;
        /**
          * 创建围绕Y轴为“angle”弧度的新旋转矩阵
          * @param angle 角度（以弧度为单位）
          * @returns 返回新矩阵
         */
        static RotationY(angle: number): Matrix;
        /**
          * 创建围绕Y轴为“angle”弧度的新旋转矩阵，并将其存储在给定矩阵中
          * @param angle 角度（以弧度为单位）
          * @param result 目标矩阵
         */
        static RotationYToRef(angle: number, result: Matrix): void;
        /**
          * 创建围绕Z轴为“angle”弧度的新旋转矩阵
          * @param angle 角度（以弧度为单位）
          * @returns 返回新矩阵
         */
        static RotationZ(angle: number): Matrix;
        /**
          * 创建围绕Z轴为“angle”弧度的新矩阵，并将其存储在给定矩阵中
          * @param angle 角度（以弧度为单位）
          * @param result 目标矩阵
         */
        static RotationZToRef(angle: number, result: Matrix): void;
        /**
          * 创建围绕给定轴为“angle”弧度的新旋转矩阵
          * @param axis 轴
          * @param angle 角度（以弧度为单位）
          * @returns 返回新矩阵
         */
        static RotationAxis(axis: DeepImmutable<Vector3>, angle: number): Matrix;
        /**
          * 创建围绕给定轴为“angle”弧度的新旋转矩阵，并将其存储在给定矩阵中
          * @param axis 轴
          * @param angle 角度（以弧度为单位）
          * @param result 目标矩阵
         */
        static RotationAxisToRef(axis: DeepImmutable<Vector3>, angle: number, result: Matrix): void;
        /**
          * 获取归一化向量并返回一个旋转矩阵，以将“from”与“to”对齐。
          * 取自http://www.iquilezles.org/www/articles/noacos/noacos.htm
          * @param from 要对齐的向量
          * @param to 要对齐的向量
          * @param result 目标矩阵
         */
        static RotationAlignToRef(from: DeepImmutable<Vector3>, to: DeepImmutable<Vector3>, result: Matrix): void;
        /**
          * 创建旋转矩阵
          * @param yaw 弧度（Y轴） 偏航角
          * @param pitch 弧度（X轴） 俯仰角
          * @param roll以 弧度（X轴） 滚动角度
          * @returns 返回新的旋转矩阵
         */
        static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Matrix;
        /**
          * 创建旋转矩阵并将其存储在给定矩阵中
          * @param yaw以 弧度（Y轴） 偏航角
          * @param pitch 弧度（X轴） 俯仰角
          * @param roll以 弧度（X轴） 滚动角度
          * @param result 目标矩阵
         */
        static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Matrix): void;
        /**
          * 创建缩放矩阵
          * @param x x轴上的比例因子
          * @param y y轴上的比例因子
          * @param z z轴上的比例因子
          * @returns 返回新矩阵
         */
        static Scaling(x: number, y: number, z: number): Matrix;
        /**
          * 创建缩放矩阵并将其存储在给定矩阵中
          * @param x x轴上的比例因子
          * @param y y轴上的比例因子
          * @param z z轴上的比例因子
          * @param result 目标矩阵
         */
        static ScalingToRef(x: number, y: number, z: number, result: Matrix): void;
        /**
          * 创建平移矩阵
          * @param x x轴上的平移
          * @param y y轴上的平移
          * @param z z轴上的平移
          * @returns 返回新矩阵
         */
        static Translation(x: number, y: number, z: number): Matrix;
        /**
          * 创建平移矩阵并将其存储在给定矩阵中
          * @param x x轴上的平移
          * @param y y轴上的平移
          * @param z z轴上的平移
          * @param result 目标矩阵
         */
        static TranslationToRef(x: number, y: number, z: number, result: Matrix): void;
        /**
          * 返回一个新矩阵，其值是“startValue”和“endValue”矩阵之间的“gradient”（浮点）的插值。
          * @param startValue 起始值
          * @param endValue 结束值
          * @param gradient 渐变因子
          * @returns 返回新矩阵
         */
        static Lerp(startValue: DeepImmutable<Matrix>, endValue: DeepImmutable<Matrix>, gradient: number): Matrix;
        /**
           * Set the given matrix "result" as the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
           * @param startValue defines the start value
           * @param endValue defines the end value
           * @param gradient defines the gradient factor
           * @param result defines the Matrix object where to store data
          */
        /**
          * 将给定的矩阵“result”设置为“startValue”和“endValue”矩阵之间的“gradient”（浮点）的插值。
          * @param startValue 起始值
          * @param endValue 结束值
          * @param gradient 渐变因子
          * @param result 存储数据的矩阵对象
         */
        static LerpToRef(startValue: DeepImmutable<Matrix>, endValue: DeepImmutable<Matrix>, gradient: number, result: Matrix): void;
        /**
          * 构建一个新矩阵，其值由以下公式计算：
          * *将“startValue”和“endValue”矩阵分解为各自的缩放、旋转和平移矩阵
          * *使用“gradient”（浮点）为每个分解矩阵计算插值矩阵
          * *用这三个插值后的缩放、旋转和平移矩阵重新构造一个新矩阵
          * @param startValue 第一个矩阵
          * @param endValue 第二个矩阵
          * @param gradient 两个矩阵之间的梯度
          * @returns 返回新矩阵
         */

        static DecomposeLerp(startValue: DeepImmutable<Matrix>, endValue: DeepImmutable<Matrix>, gradient: number): Matrix;
        /**
          * 将矩阵更新为通过以下方式计算的值：
          * *将“startValue”和“endValue”矩阵分解为各自的缩放、旋转和平移矩阵
          * *使用“gradient”（浮点）为每个分解矩阵计算插值矩阵
          * *用这三个插值后的缩放、旋转和平移矩阵重新构造一个新矩阵
          * @param startValue 第一个矩阵
          * @param endValue 第二个矩阵
          * @param gradient 两个矩阵之间的梯度
          * @param result 目标矩阵
         */
        static DecomposeLerpToRef(startValue: DeepImmutable<Matrix>, endValue: DeepImmutable<Matrix>, gradient: number, result: Matrix): void;
        /**
          * 获取一个新的旋转矩阵，用于旋转实体，使其从眼Vector3位置看目标Vector3，向上Vector3的方向类似于“向上”
          * 此功能在左手系模式下工作
          * @param eye 实体的最终位置
          * @param target 实体应查看的位置
          * @param up 实体的上方向向量
          * @returns 返回新矩阵
         */
        static LookAtLH(eye: DeepImmutable<Vector3>, target: DeepImmutable<Vector3>, up: DeepImmutable<Vector3>): Matrix;
        /**
          * 将给定的“result”矩阵设置为用于旋转实体的旋转矩阵，以便它从眼Vector3位置查看目标Vector3，向上Vector3的方向类似于“向上”。
          * 此功能在左手系模式下工作
          * @param eye 实体的最终位置
          * @param target 实体应查看的位置
          * @param up 实体的上方向向量
          * @param result 目标矩阵
         */

        static LookAtLHToRef(eye: DeepImmutable<Vector3>, target: DeepImmutable<Vector3>, up: DeepImmutable<Vector3>, result: Matrix): void;
        /**
          * 获取一个新的旋转矩阵，用于旋转实体，使其从眼Vector3位置看目标Vector3，向上Vector3的方向类似于“向上”
          * 此功能在右手系模式下工作
          * @param eye 实体的最终位置
          * @param target 实体应查看的位置
          * @param up 实体的上方向向量
          * @returns 返回新矩阵
         */
        static LookAtRH(eye: DeepImmutable<Vector3>, target: DeepImmutable<Vector3>, up: DeepImmutable<Vector3>): Matrix;
        /**
          * 将给定的“result”矩阵设置为用于旋转实体的旋转矩阵，以便它从眼Vector3位置查看目标Vector3，向上Vector3的方向类似于“向上”。
          * 此功能在右手系模式下工作
          * @param eye 实体的最终位置
          * @param target 实体应查看的位置
          * @param up 实体的上方向向量
          * @param result 目标矩阵
         */
        static LookAtRHToRef(eye: DeepImmutable<Vector3>, target: DeepImmutable<Vector3>, up: DeepImmutable<Vector3>, result: Matrix): void;
        /**
          * 创建左手系正交投影矩阵
          * @param width 视口宽度
          * @param height 视口高度
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @returns 返回一个新矩阵作为左手系正交投影矩阵
         */
        static OrthoLH(width: number, height: number, znear: number, zfar: number): Matrix;
        /**
          * 将左手系正交投影存储到给定矩阵
          * @param width 视口宽度
          * @param height 视口高度
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @param result 目标矩阵
         */
        static OrthoLHToRef(width: number, height: number, znear: number, zfar: number, result: Matrix): void;
        /**
          * 创建左手系正交投影矩阵
          * @param left 视口左坐标
          * @param right 视口右坐标
          * @param bottom 视口底部坐标
          * @param top 视口顶部坐标
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @returns 返回一个新矩阵作为左手系正交投影矩阵
         */
        static OrthoOffCenterLH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
        /**
          * 将左手系正交投影存储到给定矩阵中
          * @param left 视口左坐标
          * @param right 视口右坐标
          * @param bottom 视口底部坐标
          * @param top 视口顶部坐标
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @param result 目标矩阵
         */
        static OrthoOffCenterLHToRef(left: number, right: number, bottom: number, top: number, znear: number, zfar: number, result: Matrix): void;
        /**
          * 创建右手系正交投影矩阵
          * @param left 视口左坐标
          * @param right 视口右坐标
          * @param bottom 视口底部坐标
          * @param top 视口顶部坐标
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @returns 返回一个新矩阵作为右手系正交投影矩阵
         */
        static OrthoOffCenterRH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
        /**
          * 将右手系正交投影存储到给定矩阵中
          * @param left 视口左坐标
          * @param right 视口右坐标
          * @param bottom 视口底部坐标
          * @param top 视口顶部坐标
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @param result 目标矩阵
         */
        static OrthoOffCenterRHToRef(left: number, right: number, bottom: number, top: number, znear: number, zfar: number, result: Matrix): void;
        /**
          * 创建左手系透视投影矩阵
          * @param width 视口宽度
          * @param height 视口高度
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @returns 返回一个新矩阵作为左手系透视投影矩阵
         */
        static PerspectiveLH(width: number, height: number, znear: number, zfar: number): Matrix;
        /**
          * 创建左手系透视投影矩阵
          * @param fov 水平视野
          * @param aspect 纵横比
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @returns 返回一个新矩阵作为左手系透视投影矩阵
         */
        static PerspectiveFovLH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
        /**
          * 将左手系透视投影存储到给定矩阵中
          * @param fov 水平视野
          * @param aspect 纵横比
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @param result 目标矩阵
          * @param isVerticalFovFixed 垂直固定（默认）或水平固定的视野
         */
        static PerspectiveFovLHToRef(fov: number, aspect: number, znear: number, zfar: number, result: Matrix, isVerticalFovFixed?: boolean): void;
        /**
          * 创建右手系透视投影矩阵
          * @param fov 水平视野
          * @param aspect 纵横比
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @returns 返回一个新矩阵作为右手系透视投影矩阵
         */
        static PerspectiveFovRH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
        /**
          * 将右手系透视投影存储到给定矩阵中
          * @param fov 水平视野
          * @param aspect 纵横比
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @param result 目标矩阵
          * @param isVerticalFovFixed 垂直固定（默认）或水平固定的视野
         */
        static PerspectiveFovRHToRef(fov: number, aspect: number, znear: number, zfar: number, result: Matrix, isVerticalFovFixed?: boolean): void;
        /**
          * 在给定矩阵中存储WebVR信息的透视投影
          * @param fov 视野
          * @param znear 近剪裁平面
          * @param zfar 远剪裁平面
          * @param result 目标矩阵
          * @param RightHand 矩阵是否必须处于右手系模式（默认为false）
         */
        static PerspectiveFovWebVRToRef(fov: {
            upDegrees: number;
            downDegrees: number;
            leftDegrees: number;
            rightDegrees: number;
        }, znear: number, zfar: number, result: Matrix, rightHanded?: boolean): void;
        /**
          * 计算完整的变换矩阵
          * @param viewport 视口
          * @param world 世界矩阵
          * @param view 视图矩阵
          * @param projection 投影矩阵
          * @param zmin 近剪裁平面
          * @param zmax 远剪裁平面
          * @returns 返回转换矩阵
         */
        static GetFinalMatrix(viewport: DeepImmutable<Viewport>, world: DeepImmutable<Matrix>, view: DeepImmutable<Matrix>, projection: DeepImmutable<Matrix>, zmin: number, zmax: number): Matrix;
        /**
          * 从给定矩阵中提取2x2矩阵，并将结果存储在Float32Array中
          * @param matrix 矩阵
          * @returns 返回一个新的Float32Array数组，其中包含四个元素：从给定矩阵中提取的2x2矩阵
         */
        static GetAsMatrix2x2(matrix: DeepImmutable<Matrix>): Float32Array;
        /**
          * 从给定矩阵中提取3x3矩阵，并将结果存储在Float32Array中
          * @param matrix 矩阵
          * @returns 返回一个包含9个元素的新Float32Array数组：从给定矩阵中提取的3x3矩阵
         */
        static GetAsMatrix3x3(matrix: DeepImmutable<Matrix>): Float32Array;
        /**
          * 计算给定矩阵的转置
          * @param matrix 要转置的矩阵
          * @returns 返回新矩阵
         */
        static Transpose(matrix: DeepImmutable<Matrix>): Matrix;
        /**
          * 计算矩阵的转置并将其存储在目标矩阵中
          * @param matrix 要转置的矩阵
          * @param result 目标矩阵
         */
        static TransposeToRef(matrix: DeepImmutable<Matrix>, result: Matrix): void;
        /**
          * 从平面计算反射矩阵
          * @param plane 反射平面
          * @returns 返回一个新矩阵
         */
        static Reflection(plane: DeepImmutable<Plane>): Matrix;
        /**
          * 从平面计算反射矩阵
          * @param plane 反射平面
          * @param result 目标矩阵
         */
        static ReflectionToRef(plane: DeepImmutable<Plane>, result: Matrix): void;
        /**
          * 将给定矩阵设置为由三个左手系轴组成的旋转矩阵
          * @param xaxis 第一个轴的值
          * @param yaxis 第二个轴的值
          * @param zaxis 第三个轴的值
          * @param result 目标矩阵
         */
        static FromXYZAxesToRef(xaxis: DeepImmutable<Vector3>, yaxis: DeepImmutable<Vector3>, zaxis: DeepImmutable<Vector3>, result: Matrix): void;
        /**
          * 从四元数创建旋转矩阵并将其存储在目标矩阵中
          * @param quat 四元数
          * @param result 目标矩阵
         */
        static FromQuaternionToRef(quat: DeepImmutable<Quaternion>, result: Matrix): void;
    }

    /**
      * 代表一个平面，由公式 ax + by + cz + d = 0
      */
    export class Plane {
        /**
           * 平面法向量(a,b,c)
          */
        normal: Vector3;
        /**
           * 平面d分量
          */
        d: number;
        /**
           * 创建一个平面，根据指定浮点数 a, b, c, d 和平面公式: ax + by + cz + d = 0
           * @param a 平面a分量
           * @param b 平面b分量
           * @param c 平面c分量
           * @param d 平面d分量
          */
        constructor(a: number, b: number, c: number, d: number);
        /**
          * @将平面坐标作为四个元素[a、b、c、d]的新数组返回。
         */
        asArray(): number[];
        /**
          * @returns 返回从当前平面复制的新平面。
         */
        clone(): Plane;
        /**
          * @returns 返回字符串“Plane”。
         */
        getClassName(): string;
        /**
          * @returns 返回平面散列码。
         */
        getHashCode(): number;
        /**
          * 就地规范化当前平面。
          * @returns 返回更新的平面。
         */
        normalize(): Plane;
        /**
          * 对平面应用变换并返回结果
          * @param transformation 变换矩阵
          * @returns 返回一个新平面，作为当前平面通过给定矩阵变换的结果。
         */
        transform(transformation: DeepImmutable<Matrix>): Plane;
        /**
          * 计算点与平面法线之间的点积
          * @param point 
          * @returns 返回点坐标与平面法线的点积（浮点）。
         */
        dotCoordinate(point: DeepImmutable<Vector3>): number;
        /**
          * 从三个给定点 的平面更新当前平面。
          * @param point1 用于构建平面的点之一
          * @param point2 用于构建平面的点之一
          * @param point3 用于构建平面的点之一
          * @returns 返回更新的平面。
         */
        copyFromPoints(point1: DeepImmutable<Vector3>, point2: DeepImmutable<Vector3>, point3: DeepImmutable<Vector3>): Plane;
        /**
          * 检查平面是否朝向给定方向
          * @param direction 检查平面是否朝向的方向
          * @param epsilon 点积与之比较的参数值（如果点<=epsilon，则返回true）
          * @returnss True表示向量“direction”与平面法线在同一侧。
         */
        isFrontFacingTo(direction: DeepImmutable<Vector3>, epsilon: number): boolean;
        /**
          * 计算到点的距离
          * @param point 用于计算到的距离
          * @returns 返回从给定点到平面的有符号距离（浮点）。
         */
        signedDistanceTo(point: DeepImmutable<Vector3>): number;
        /**
          * 从阵列创建平面
          * @param array 从中创建平面的数组
          * @从给定数组返回一个新平面。
         */
        static FromArray(array: DeepImmutable<ArrayLike<number>>): Plane;
        /**
          * 从三个点创建平面
          * @param point1 用于创建平面的点
          * @param point2 用于创建平面的点
          * @param point3 用于创建平面的点
          * @returns 返回由三个给定点 的新平面。
         */
        static FromPoints(point1: DeepImmutable<Vector3>, point2: DeepImmutable<Vector3>, point3: DeepImmutable<Vector3>): Plane;
        /**
          * 从原点和法线创建平面
          * @param origin 原点
          * @param normal 法线
          * @returns 返回一个新平面，即给定原点处该平面的法向量。
          * 注意：向量“法线”会更新，因为它是标准化的。
         */
        static FromPositionAndNormal(origin: DeepImmutable<Vector3>, normal: DeepImmutable<Vector3>): Plane;
        /**
          * 计算到平面和点的距离
          * @param origin 平面的原点
          * @param normal 平面的法线
          * @param point 用于计算到的点距离
          * @returns 返回由“origin”处的normal定义的平面与给定的其他点之间的有符号距离。
         */
        static SignedDistanceToPlaneFromPositionAndNormal(origin: DeepImmutable<Vector3>, normal: DeepImmutable<Vector3>, point: DeepImmutable<Vector3>): number;
    }

    /**
      * 用于在屏幕上表示视口
      */
    export class Viewport {
        /**视口左坐标*/
        x: number;
        /**视口顶坐标*/
        y: number;
        /**视口宽度*/
        width: number;
        /**视口高度*/
        height: number;
        /**
          * 创建位于（x，y）和大小（宽度，高度）的视口对象
          * @param x 视口左坐标
          * @param y 视口顶部坐标
          * @param width 视口宽度
          * @param height 视口高度
         */
        constructor(x: number, y: number, width: number, height: number);
        /**
          * 使用绝对大小（从0->宽度，从0->高度，而不是从0->1）创建新视口
          * @param renderWidth 渲染宽度
          * @param renderHeight 渲染高度
          * @returns 返回一个新的视口
         */
        toGlobal(renderWidth: number, renderHeight: number): Viewport;
        /**
          * 将绝对视口值存储到目标视口中（从0->宽度，0->高度，而不是0->1）
          * @param renderWidth 渲染宽度
          * @param renderHeight 渲染高度
          * @param ref 目标视口
          * @returns 返回当前视口
         */
        toGlobalToRef(renderWidth: number, renderHeight: number, ref: Viewport): Viewport;
        /**
          * 返回从当前视口复制的新视口
          * @returns 返回一个新的视口
         */
        clone(): Viewport;
    }

    /**
      * 表示相机frustum
      */
    export class Frustum {
        /**
          * 获取表示frustum的平面
          * 要应用于返回平面的@param 变换矩阵
          * @returns 返回由给定变换矩阵计算的6个frustum平面组成的新数组。
         */
        static GetPlanes(transform: DeepImmutable<Matrix>): Plane[];
        /**
          * 获取由变换矩阵变换的近frustum平面
          * @param transform 变换矩阵
          * @param frustumPlane frustum平面结果
         */
        static GetNearPlaneToRef(transform: DeepImmutable<Matrix>, frustumPlane: Plane): void;
        /**
          * 获取由变换矩阵变换的远视锥平面
          * @param transform 变换矩阵
          * @param frustumPlane frustum平面结果
         */
        static GetFarPlaneToRef(transform: DeepImmutable<Matrix>, frustumPlane: Plane): void;
        /**
          * 获取由变换矩阵变换的左frustum平面
          * @param transform 变换矩阵
          * @param frustumPlane frustum平面结果
         */
        static GetLeftPlaneToRef(transform: DeepImmutable<Matrix>, frustumPlane: Plane): void;
        /**
          * 获取由变换矩阵变换的右frustum平面
          * @param transform 变换矩阵
          * @param frustumPlane frustum平面结果
         */
        static GetRightPlaneToRef(transform: DeepImmutable<Matrix>, frustumPlane: Plane): void;
        /**
          * 获取由变换矩阵变换的顶部frustum平面
          * @param transform 变换矩阵
          * @param frustumPlane frustum平面结果
         */
        static GetTopPlaneToRef(transform: DeepImmutable<Matrix>, frustumPlane: Plane): void;
        /**
          * 获取由变换矩阵变换的底部frustum平面
          * @param transform 变换矩阵
          * @param frustumPlane frustum平面结果
         */
        static GetBottomPlaneToRef(transform: DeepImmutable<Matrix>, frustumPlane: Plane): void;
        /**
           * Sets the given array "frustumPlanes" with the 6 Frustum planes computed by the given transformation matrix.
           * @param transform transformation matrix to be applied to the resulting frustum planes
           * @param frustumPlanes the resuling frustum planes
          */
        /**
          * 使用由给定变换矩阵计算的6个frustum平面设置给定阵列“frustumPlanes”。
          * @param transform 变换矩阵将应用于frustum平面结果
          * @param frustump frustum平面结果
         */
        static GetPlanesToRef(transform: DeepImmutable<Matrix>, frustumPlanes: Plane[]): void;
    }

    export class Tmp {
        static Vector2: Vector2[];
        static Vector3: Vector3[];
        static Vector4: Vector4[];
        static Quaternion: Quaternion[];
        static Matrix: Matrix[];
    }

    /**
      * 类表示具有位置和方向的射线
      */
    export class Ray {
        /**原点*/
        origin: Vector3;
        /**方向*/
        direction: Vector3;
        /**射线长度*/
        length: number;
        private static readonly TmpVector3;
        /**
          * 创建一条新射线
          * @param origin 原点
          * @param direction 方向
          * @param length 射线的长度
         */
        constructor(origin: Vector3, direction: Vector3, length?: number);
        /**
          * 检查射线是否与长方体相交
          * @param minimum 框的最小界限
          * @param maximum 框的最大界限
          * @param intersectionTreshold 在所有方向上向长方体添加额外的延伸
          * @returns 如果盒子被击中，则返回
         */
        intersectsBoxMinMax(minimum: DeepImmutable<Vector3>, maximum: DeepImmutable<Vector3>, intersectionTreshold?: number): boolean;
        /**
          * 检查射线是否与长方体相交
          * @param box 要检查的包围盒
          * @param intersectionTreshold 在所有方向上向包围盒添加额外的延伸
          * @returns 如果盒子被击中，则返回
         */
        intersectsBox(box: DeepImmutable<BoundingBox>, intersectionTreshold?: number): boolean;
        /**
           * If the ray hits a sphere
           * @param sphere the bounding sphere to check
           * @param intersectionTreshold extra extend to be added to the BoundingSphere in all direction
           * @returnss true if it hits the sphere
          */
        /**
          * 如果射线击中球体
          * @param sphere 要检查的包围球
          * @param intersectionTreshold 在所有方向上向包围球添加额外的延伸
          * @returns 如果击中球体，则返回true
         */
        intersectsSphere(sphere: DeepImmutable<BoundingSphere>, intersectionTreshold?: number): boolean;
        /**
          * 如果射线击中三角形
          * @param vertex0 三角形顶点
          * @param vertex1 三角形顶点
          * @param vertex2 三角形顶点
          * @命中时返回IntersectionInfo
         */
        intersectsTriangle(vertex0: DeepImmutable<Vector3>, vertex1: DeepImmutable<Vector3>, vertex2: DeepImmutable<Vector3>): Nullable<IntersectionInfo>;
        /**
          * 检查射线是否与平面相交
          * @param plane 要检查的平面
          * @returns 返回被击中的距离
         */
        intersectsPlane(plane: DeepImmutable<Plane>): Nullable<number>;
        /**
          * 射线与给定段（具有给定公差）之间的相交测试（阈值）
          * @param sega 测试交叉点的线段的第一个点
          * @param segb 用于测试交叉点的线段的第二个点
          * @param threshold 公差范围。如果射线未与线段相交，但接近给定阈值，则相交成功
          * @returns 如果存在交点，则返回从射线原点到交点的距离；如果没有交点，则返回-1
         */
        intersectionSegment(sega: DeepImmutable<Vector3>, segb: DeepImmutable<Vector3>, threshold: number): number;
        /**
          * 从视口位置更新射线
          * @param x x位置
          * @param y y位置
          * @param viewportWidth 视口宽度
          * @param normal 视口高度
          * @param world 世界矩阵
          * @param view 视图矩阵
          * @param projection 投影矩阵
          * @returns 返回此射线更新
         */
        update(x: number, y: number, viewportWidth: number, viewportHeight: number, world: DeepImmutable<Matrix>, view: DeepImmutable<Matrix>, projection: DeepImmutable<Matrix>): Ray;
        /**
          * 创建原点和方向为0,0,0的射线
          * @returns 返回新的射线
         */
        static Zero(): Ray;
        /**
          * 从屏幕空间和视口创建新射线
          * @param x x位置
          * @param y y位置
          * @param viewportWidth 视口宽度
          * @param normal 视口高度
          * @param world 世界矩阵
          * @param view 视图矩阵
          * @param projection 投影矩阵
          * @returnss new-ray
         */
        static CreateNew(x: number, y: number, viewportWidth: number, viewportHeight: number, world: DeepImmutable<Matrix>, view: DeepImmutable<Matrix>, projection: DeepImmutable<Matrix>): Ray;
        /**
          * 函数将创建一条从原点开始到终点的新变换射线。将设置射线的长度，射线将
          * 转换为给定的世界矩阵。
          * @param origin 原点
          * @param end 结束端点
          * @param world 将射线转换为矩阵，默认值是单位矩阵
          * @returns 返回新的射线
         */
        static CreateNewFromTo(origin: DeepImmutable<Vector3>, end: DeepImmutable<Vector3>, world?: DeepImmutable<Matrix>): Ray;
        /**
          * 通过矩阵变换射线
          * @param ray 射线
          * @param matrix 矩阵
          * @returns 返回生成的新射线
         */
        static Transform(ray: DeepImmutable<Ray>, matrix: DeepImmutable<Matrix>): Ray;
        /**
          * 通过矩阵变换射线
          * @param ray 射线
          * @param matrix 矩阵
          * @param result 用于存储结果
         */
        static TransformToRef(ray: DeepImmutable<Ray>, matrix: DeepImmutable<Matrix>, result: Ray): void;
        /**
          * 将射线从屏幕空间投影到对象空间
          * @param sourceX 屏幕空间x坐标
          * @param sourceY 屏幕空间y坐标
          * @param viewportWidth 视口的当前宽度
          * @param viewportHeight 视口的当前高度
          * @param world 世界矩阵（可以设置为Identity以进入世界空间）
          * @param view 视图矩阵
          * @param projection 投影矩阵
         */
        unprojectRayToRef(sourceX: float, sourceY: float, viewportWidth: number, viewportHeight: number, world: DeepImmutable<Matrix>, view: DeepImmutable<Matrix>, projection: DeepImmutable<Matrix>): void;
    }

    /**
      * 可剔除对象的接口
      */
    export interface ICullable {
        /**
          * 检查对象或对象的一部分是否在frustum中
          * @param frustumPlanes 相机 near/planes
          * @returns 如果对象位于frustum中，则返回true，否则返回false
         */
        isInFrustum(frustumPlanes: Plane[]): boolean;
        /**
          * 检查可剔除对象（mesh…）是否位于相机frustum中
          * 与isInFrustum不同，它检查完整的包围盒
          * @param frustumPlanes 相机 near/planes
          * @returns 如果对象位于frustum中，则返回true，否则返回false
         */
        isCompletelyInFrustum(frustumPlanes: Plane[]): boolean;
    }

    /**
      * 网格边界数据的信息
      */
    export class BoundingInfo implements ICullable {
        /**
          * 网格的包围盒
         */
        readonly boundingBox: BoundingBox;
        /**
          * 网格的包围球
         */
        readonly boundingSphere: BoundingSphere;
        private static readonly TmpVector3;
        /**
          * 构造BoundingInfo
          * @param 包围盒/球的最小最小向量
          * @param 包围盒/球的最大向量
          * @param worldMatrix 新的世界矩阵
         */
        constructor(minimum: DeepImmutable<Vector3>, maximum: DeepImmutable<Vector3>, worldMatrix?: DeepImmutable<Matrix>);
        /**
          * 从头开始重新创建整个BoundingInfo，就像我们在构造函数调用一样
          * @param min 新的最小向量（在局部空间中）
          * @param max 新的最大向量（在局部空间中）
          * @param worldMatrix 新的世界矩阵
         */
        reConstruct(min: DeepImmutable<Vector3>, max: DeepImmutable<Vector3>, worldMatrix?: DeepImmutable<Matrix>): void;
        /**
          * 包围盒/球的最小向量
         */
        readonly minimum: Vector3;
        /**
          * 包围盒/球的最大向量
         */
        readonly maximum: Vector3;
        /**
          * 如果信息已锁定且不会更新以避免性能开销
         */
        isLocked: boolean;
        /**
          * 更新包围球和长方体
          * @param world 更新矩形
         */
        update(world: DeepImmutable<Matrix>): void;
        /**
          * 重新创建BoundingInfo，使其围绕给中心点延伸特定范围
          * @param center BoundingInfo的新中心
          * @param extend BoundingInfo的新扩展
          * @returns 返回当前的BoundingInfo
         */
        centerOn(center: DeepImmutable<Vector3>, extend: DeepImmutable<Vector3>): BoundingInfo;
        /**
          * 通过应用比例因子缩放当前BoundingInfo
          * @param factor 比例因子
          * @returns 返回当前的BoundingInfo
         */
        scale(factor: number): BoundingInfo;
        /**
          * 如果BoundingInfo在传递的平面数组 的frustum内，则返回'true'。
          * @param frustumPlanes 要测试的frustum
          * @param strategy 用于剔除的策略（默认值为BABYLON.AbstractMesh.CULLINGSTRATEGY）
          * @returns 如果BoundingInfo在frustum平面中，则返回true
         */
        isInFrustum(frustumPlanes: Array<DeepImmutable<Plane>>, strategy?: number): boolean;
        /**
          * 获取包围盒的最小点和最大点之间的世界距离
         */
        readonly diagonalLength: number;
        /**
          * 检查可剔除对象（网格…）是否位于相机frustum中
          * 与isInFrustum不同，它检查完整的包围盒
          * @param frustumPlanes 相机 near/planes
          * @returns 如果对象位于frustum中，则返回true，否则返回false
         */
        isCompletelyInFrustum(frustumPlanes: Array<DeepImmutable<Plane>>): boolean;
        /**
          * 检查点是否位于包围盒和包围球或网格内
          * @param point 检查与之相交的点
          * @returns 在点相交时返回true
         */
        intersectsPoint(point: DeepImmutable<Vector3>): boolean;
        /**
          * 检查另一个BoundingInfo是否与本包围盒和包围球或网格相交
          * @param boundingInfo 用于检查交叉点的BoundingInfo
          * @param precision 如果true则使用OBB进行交叉检查
          * @returns 如果BoundingInfo相交，则返回true
         */
        intersects(boundingInfo: DeepImmutable<BoundingInfo>, precise: boolean): boolean;
    }

    /**
      * 用于存储包围盒信息的类
      */
    export class BoundingBox implements ICullable {
        /**
          * 获取表示局部空间中包围盒的8个向量
         */
        readonly vectors: Vector3[];
        /**
          * 获取局部空间中包围盒的中心
         */
        readonly center: Vector3;
        /**
          * 获取世界空间中包围盒的中心
         */
        readonly centerWorld: Vector3;
        /**
          * 获取本地空间中的扩展大小
         */
        readonly extendSize: Vector3;
        /**
          * 获取世界空间中的扩展大小
         */
        readonly extendSizeWorld: Vector3;
        /**
          * 获取OBB（对象包围盒）方向
         */
        readonly directions: Vector3[];
        /**
          * 获取表示世界空间中包围盒的8个向量
         */
        readonly vectorsWorld: Vector3[];
        /**
          * 获取世界空间中的最小向量
         */
        readonly minimumWorld: Vector3;
        /**
          * 获取世界空间中的最大向量
         */
        readonly maximumWorld: Vector3;
        /**
          * 获取局部空间中的最小向量
         */
        readonly minimum: Vector3;
        /**
          * 获取局部空间中的最大向量
         */
        readonly maximum: Vector3;
        /**
          * 创建新的包围盒
          * @param min 最小向量（在局部空间中）
          * @param max 最大向量（在局部空间中）
          * @param worldMatrix 新的世界矩阵
         */
        constructor(min: DeepImmutable<Vector3>, max: DeepImmutable<Vector3>, worldMatrix?: DeepImmutable<Matrix>);
        /**
          * 从头开始重新创建整个包围盒，就好像我们在原地调用构造函数一样
          * @param min 新的最小向量（在局部空间中）
          * @param max 新的最大向量（在局部空间中）
          * @param worldMatrix 新的世界矩阵
         */
        reConstruct(min: DeepImmutable<Vector3>, max: DeepImmutable<Vector3>, worldMatrix?: DeepImmutable<Matrix>): void;
        /**
          * 通过应用比例因子缩放当前包围盒
          * @param factor 比例因子
          * @returns 返回当前的包围盒
         */
        scale(factor: number): BoundingBox;
        /**
          * 获取包围盒的世界矩阵
          * @returns 返回一个矩阵
         */
        getWorldMatrix(): DeepImmutable<Matrix>;
        /**
          * 测试包围盒是否与frustum平面相交
          * @param frustumPlanes 要测试的frustum平面
          * @returns 如果存在交叉点，则返回true
         */
        isInFrustum(frustumPlanes: Array<DeepImmutable<Plane>>): boolean;
        /**
          * 测试包围盒是否完全位于frustum平面内
          * @param frustumPlanes 要测试的frustum平面
          * @returns 如果存在包含项，则返回true
         */
        isCompletelyInFrustum(frustumPlanes: Array<DeepImmutable<Plane>>): boolean;
        /**
          * 测试点是否位于包围盒内
          * @param point 要测试的点
          * @returns 如果点位于包围盒内，则返回true
         */
        intersectsPoint(point: DeepImmutable<Vector3>): boolean;
        /**
          * 测试包围盒是否与包围球相交
          * @param sphere 要测试的球体
          * @returns 如果存在交叉点，则返回true
         */
        intersectsSphere(sphere: DeepImmutable<BoundingSphere>): boolean;
        /**
          * 测试包围盒是否与由最小和最大向量 的框相交
          * @param min 最小向量
          * @param max 最大向量
          * @returns 如果存在交叉点，则返回true
         */
        intersectsMinMax(min: DeepImmutable<Vector3>, max: DeepImmutable<Vector3>): boolean;
        /**
          * 测试两个包围盒是否相交
          * @param box0 要测试的第一个框
          * @param box1 要测试的第二个框
          * @returns 如果存在交叉点，则返回true
         */
        static Intersects(box0: DeepImmutable<BoundingBox>, box1: DeepImmutable<BoundingBox>): boolean;
        /**
          * 测试由最小/最大向量 的包围盒是否与球体相交
          * @param minPoint 包围盒的最小向量
          * @param maxPoint 包围盒的最大向量
          * @param sphereCenter 球体中心
          * @param sphereRadius 球体半径
          * @returns 如果存在交叉点，则返回true
         */
        static IntersectsSphere(minPoint: DeepImmutable<Vector3>, maxPoint: DeepImmutable<Vector3>, sphereCenter: DeepImmutable<Vector3>, sphereRadius: number): boolean;
        /**
          * 测试由8个向量 的包围盒是否完全位于frustum平面内
          * @param boundingVectors 一个由8个向量组成的数组，表示一个包围盒
          * @param frustumPlanes 要测试的frustum平面
          * @returns 如果存在包含项，则返回true
         */
        static IsCompletelyInFrustum(boundingVectors: Array<DeepImmutable<Vector3>>, frustumPlanes: Array<DeepImmutable<Plane>>): boolean;
        /**
          * 测试用8个向量 的包围盒是否与frustum平面相交
          * @param boundingVectors 一个由8个向量组成的数组，表示一个包围盒
          * @param frustumPlanes 要测试的frustum平面
          * @returns 如果存在交叉点，则返回true
         */
        static IsInFrustum(boundingVectors: Array<DeepImmutable<Vector3>>, frustumPlanes: Array<DeepImmutable<Plane>>): boolean;
    }

    /**
      * 用于存储包围球信息的类
      */
    export class BoundingSphere {
        /**
          * 获取局部空间中包围球的中心
         */
        readonly center: Vector3;
        /**
          * 局部空间中边界球的半径
         */
        radius: number;
        /**
          * 获取世界空间中包围球的中心
         */
        readonly centerWorld: Vector3;
        /**
          * 世界空间中包围球的半径
         */
        radiusWorld: number;
        /**
          * 获取局部空间中的最小向量
         */
        readonly minimum: Vector3;
        /**
          * 获取局部空间中的最大向量
         */
        readonly maximum: Vector3;
        /**
          * 创建新的包围球
          * @param min 最小向量（在局部空间中）
          * @param max 最大向量（在局部空间中）
          * @param worldMatrix 新的世界矩阵
         */
        constructor(min: DeepImmutable<Vector3>, max: DeepImmutable<Vector3>, worldMatrix?: DeepImmutable<Matrix>);
        /**
          * 从头开始重新创建整个包围球，就好像我们在原地调用构造函数一样
          * @param min 新的最小向量（在局部空间中）
          * @param max 新的最大向量（在局部空间中）
          * @param worldMatrix 新的世界矩阵
         */
        reConstruct(min: DeepImmutable<Vector3>, max: DeepImmutable<Vector3>, worldMatrix?: DeepImmutable<Matrix>): void;
        /**
          * 通过应用比例因子缩放当前包围球
          * @param factor 比例因子
          * @returns 返回当前的包围盒
         */
        scale(factor: number): BoundingSphere;
        /**
          * 获取包围盒的世界矩阵
          * @returns 返回一个矩阵
         */
        getWorldMatrix(): DeepImmutable<Matrix>;
        /**
          * 测试包围球是否与frustum平面相交
          * @param frustumPlanes 要测试的frustum平面
          * @returns 如果存在交叉点，则返回true
         */
        isInFrustum(frustumPlanes: Array<DeepImmutable<Plane>>): boolean;
        /**
          * 测试包围球中心是否位于frustum平面之间。
          * 用于快速包含。
          * @param frustumPlanes 要测试的frustum平面
          * @returns 如果球体中心位于frustum平面之间，则返回true
         */
        isCenterInFrustum(frustumPlanes: Array<DeepImmutable<Plane>>): boolean;
        /**
          * 测试点是否位于包围球内
          * @param point 要测试的点
          * @returns 如果点位于包围球内，则返回true
         */
        intersectsPoint(point: DeepImmutable<Vector3>): boolean;
        /**
          * 检查两个球体是否相交
          * @param sphere0 球体0
          * @param sphere1 球体1
          * @returns 如果speres相交，则返回true
         */
        static Intersects(sphere0: DeepImmutable<BoundingSphere>, sphere1: DeepImmutable<BoundingSphere>): boolean;
    }

    export class IntersectionInfo {
        bu: Nullable<number>;
        bv: Nullable<number>;
        distance: number;
        faceId: number;
        subMeshId: number;
        constructor(bu: Nullable<number>, bv: Nullable<number>, distance: number);
    }

    /**
      * 充当可观察对象与其观察者之间的媒介
      */
    export class EventState {
        /**
          * 创建新的EventState
          * @param mask 与此状态关联的掩码
          * @param skipnextobserver 一个标志，当设置为true时，该标志将指示可观察对象跳过以下观察者
          * @param target 状态的原始目标
          * @param currentTarget 状态的当前目标
         */
        constructor(mask: number, skipNextObservers?: boolean, target?: any, currentTarget?: any);
        /**
          * 初始化当前事件状态
          * @param mask 与此状态关联的掩码
          * @param skipnextobserver 一个标志，当设置为true时，该标志将指示可观察对象跳过以下观察者
          * @param target 状态的原始目标
          * @param currentTarget 状态的当前目标
          * @returns 返回当前事件状态
         */
        initalize(mask: number, skipNextObservers?: boolean, target?: any, currentTarget?: any): EventState;
        /**
          * 观察者可以将此属性设置为true，以防止后续观察者收到通知
         */
        skipNextObservers: boolean;
        /**
          * 获取用于触发与此EventState对象对应的事件的掩码值
         */
        mask: number;
        /**
          * 最初通知事件的对象
         */
        target?: any;
        /**
          * 处于冒泡阶段的当前对象
         */
        currentTarget?: any;
        /**
          * 这将用最后执行的函数的返回值填充。
          * 如果它是回调链中的第一个函数，那么它将是事件数据。
         */
        lastReturnValue?: any;
    }

    /**
      * 代表注册到给定可观察对象的观察者
      */
    export class Observer<T> {
        /**
          * 在通知观察者时要调用的回调
         */
        callback: (eventData: T, eventState: EventState) => void;
        /**
          * 观察者的掩码（用于过滤通知）
         */
        mask: number;
        /**
          * 用于还原JS上下文的当前范围
         */
        scope: any;
        /**
          * 获取或设置一个属性，该属性 在下一次通知后将取消注册观察者
         */
        unregisterOnNextCall: boolean;
        /**
          * 创建新的观察者
          * @param callback 在通知观察者时要调用的回调
          * @param mask 观察者的掩码（用于过滤通知）
          * @param scope 用于还原JS上下文的当前作用域
         */
        constructor(callback: (eventData: T, eventState: EventState) => void, mask: number, scope?: any);
    }

    /**
      * 表示注册到多个可观察对象的观察者列表
      */
    export class MultiObserver<T> {
        /**
          * 释放相关资源
         */
        dispose(): void;
        /**
          * 当一个可观察对象将通知时引发回调
          * @param observables 要监视的可观察对象列表
          * @param callback 通知时调用的回调
          * @param mask 用于筛选通知的掩码
          * @param scope 用于还原JS上下文的当前作用域
          * @returns 返回新的多观察者
         */
        static Watch<T>(observables: Observable<T>[], callback: (eventData: T, eventState: EventState) => void, mask?: number, scope?: any): MultiObserver<T>;
    }

    /**
      * Observable类是Observable模式的简单实现。
      *
      * 不过有一点特殊性：给定的可观察对象可以使用特定的掩码值通知其观察者，只有使用该掩码值注册的观察者才会收到通知。
      * 这可以实现更细粒度的执行，而不必依赖多个不同的可观察对象。
      * 例如，您可能有一个具有四种不同类型通知的给定可观察对象：移动（掩码=0x01）、停止（掩码=0x02）、右转（掩码=0X04）、左转（掩码=0X08）。
      * 给定的观察者可以仅使用移动和停止（mask=0x03）注册自身，然后仅当这两种情况中的一种发生时才会收到通知，并且永远不会向左转/右转。
      */
    export class Observable<T> {
        /**
          * 创建新的可观察对象
          * @param onobserver added 添加新观察者时要调用的回调
         */
        constructor(onObserverAdded?: (observer: Observer<T>) => void);
        /**
          * 使用指定的回调创建新的观察者
          * @param callback 将为该观察者执行的回调
          * @param mask 用于筛选观察者的掩码
          * @param insertFirst 如果为true，则回调将插入第一个位置，因此在其他位置之前执行。如果为false（默认行为），则回调将插入最后一个位置，在所有其他位置都已存在之后执行。
          * @param scope 要从中调用回调的可选范围
          * @param unregisterOnFirstCall 下一次通知后是否要注销观察者
          * @returns 返回为回调创建的新观察者
         */
        add(callback: (eventData: T, eventState: EventState) => void, mask?: number, insertFirst?: boolean, scope?: any, unregisterOnFirstCall?: boolean): Nullable<Observer<T>>;
        /**
          * 使用指定的回调创建新的观察者，并在下一次通知后注销
          * @param callback 将为该观察者执行的回调
          * @returns 返回为回调创建的新观察者
         */
        addOnce(callback: (eventData: T, eventState: EventState) => void): Nullable<Observer<T>>;
        /**
          * 从可观察对象中移除观察者
          * @param observer 要删除的观察者的实例
          * @returns 如果不属于此可观察对象，则返回false
         */
        remove(observer: Nullable<Observer<T>>): boolean;
        /**
          * 从可观察对象中移除回调
          * @param callback 要删除的回调
          * @param scope 可选作用域。如果使用，则仅删除具有此作用域的回调
          * @returns 如果不属于此可观察对象，则返回false
         */
        removeCallback(callback: (eventData: T, eventState: EventState) => void, scope?: any): boolean;
        /**
          * 将可观察对象移动到观察者列表的顶部，使其在收到通知时首先被调用
          * @param observer 要移动的观察者
         */
        makeObserverTopPriority(observer: Observer<T>): void;
        /**
          * 将可观察对象移动到观察者列表的底部，使其在收到通知时最后被调用
          * @param observer 要移动的观察者
         */
        makeObserverBottomPriority(observer: Observer<T>): void;
        /**
          * 通过使用给定数据调用各自的回调来通知所有观察者
          * 如果执行了所有观察者，则返回true；如果观察者将SkipNextObserver设置为true，则返回false，然后阻止后续观察者执行
          * @param eventData  要发送给所有观察者的数据
          * @param mask  当前通知的掩码（具有不兼容掩码（即mask&amp;observer.mask==0）的观察者将不会被通知）
          * @param target  状态的原始目标
          * @param currentTarget  状态的当前目标
          * @returnss 如果未处理完整的观察者链，则返回false（因为有一个观察者将skipNextObservers设置为true）
         */
        notifyObservers(eventData: T, mask?: number, target?: any, currentTarget?: any): boolean;
        /**
          * 调用它将执行每个回调，期望它是一个承诺或返回一个值。
          * 如果在链中的任何一点上，一个函数失败，承诺将失败，执行将无法继续。
          * 当需要一系列事件（有时是异步事件）来初始化某个对象时，这非常有用
          * 所有回调都将被执行，这一点至关重要。
          * 回调的顺序保持不变，回调不会并行执行。
          * 
          * @param eventData 要发送到每个回调的数据
          * @param mask 用于过滤默认为-1的观察者
          * @param target  回调目标（请参阅EventState）
          * @param currentTarget 在冒泡阶段 当前对象
          * @returnss 将返回一个Promise，而不是在成功执行所有回调时解析的Promise。
         */
        notifyObserversWithPromise(eventData: T, mask?: number, target?: any, currentTarget?: any): Promise<T>;
        /**
          * 通知特定的观察者
          * @param observer 要通知的观察者
          * @param eventData 要发送到每个回调的数据
          * @param mask 用于过滤默认为-1的观察者
         */
        notifyObserver(observer: Observer<T>, eventData: T, mask?: number): void;
        /**
          * 获取一个布尔值，指示可观察对象是否至少有一个观察者
          * @returnss true表示可观察对象至少注册了一个观察者
         */
        hasObservers(): boolean;
        /**
          * 清除观察者名单
         */
        clear(): void;
        /**
          * 克隆当前的可观察对象
          * @returns 返回一个新的可观察值
         */
        clone(): Observable<T>;
        /**
          * 这个可观察对象是否处理注册了给定掩码的观察者
          * @param mask 要测试的掩码
          * @returns是否有一个注册到给定掩码的观察者被处理
         */
        hasSpecificMask(mask?: number): boolean;
    }
}

declare module Drawsee {
    export type Nullable<T> = T | null;
    export type float = number;
    export type double = number;
    export type int = number;
    export type FloatArray = number[] | Float32Array;
    export type IndicesArray = number[] | Int32Array | Uint32Array | Uint16Array;
    export type DataArray = number[] | ArrayBuffer | ArrayBufferView;
    type Primitive = undefined | null | boolean | string | number | Function;

    export type Immutable<T> = T extends Primitive
        ? T
        : T extends Array<infer U>
        ? ReadonlyArray<U>
        :
        DeepImmutable<T>;

    export type DeepImmutable<T> = T extends Primitive
        ? T
        : T extends Array<infer U>
        ? DeepImmutableArray<U>
        :
        DeepImmutableObject<T>;

    interface DeepImmutableArray<T> extends ReadonlyArray<DeepImmutable<T>> { }
    type DeepImmutableObject<T> = { readonly [K in keyof T]: DeepImmutable<T[K]> };

    export const ToGammaSpace: number;
    export const ToLinearSpace = 2.2;
    let Epsilon: number;

    export type Engine = BABYLON.Engine;
    export type Scene = BABYLON.Scene;

    export type Effect = BABYLON.Effect;
    export type EffectCreationOptions = BABYLON.EffectCreationOptions;

    export type DataBuffer = BABYLON.DataBuffer;
    export type InternalTexture = BABYLON.InternalTexture;

    export type Texture = BABYLON.Texture;

    export type AsyncWebStreamResultType = Uint8Array | AsyncWebStreamResultPackage;

    export class Constants {
        static readonly ALPHA_DISABLE: number;
        static readonly ALPHA_ADD: number;
        static readonly ALPHA_COMBINE: number;
        static readonly ALPHA_SUBTRACT: number;
        static readonly ALPHA_MULTIPLY: number;
        static readonly ALPHA_MAXIMIZED: number;
        static readonly ALPHA_ONEONE: number;
        static readonly ALPHA_PREMULTIPLIED: number;
        static readonly ALPHA_PREMULTIPLIED_PORTERDUFF: number;
        static readonly ALPHA_INTERPOLATE: number;
        static readonly ALPHA_SCREENMODE: number;
        static readonly DELAYLOADSTATE_NONE: number;
        static readonly DELAYLOADSTATE_LOADED: number;
        static readonly DELAYLOADSTATE_LOADING: number;
        static readonly DELAYLOADSTATE_NOTLOADED: number;
        static readonly NEVER: number;
        static readonly ALWAYS: number;
        static readonly LESS: number;
        static readonly EQUAL: number;
        static readonly LEQUAL: number;
        static readonly GREATER: number;
        static readonly GEQUAL: number;
        static readonly NOTEQUAL: number;
        static readonly KEEP: number;
        static readonly REPLACE: number;
        static readonly INCR: number;
        static readonly DECR: number;
        static readonly INVERT: number;
        static readonly INCR_WRAP: number;
        static readonly DECR_WRAP: number;
        static readonly TEXTURE_CLAMP_ADDRESSMODE: number;
        static readonly TEXTURE_WRAP_ADDRESSMODE: number;
        static readonly TEXTURE_MIRROR_ADDRESSMODE: number;
        static readonly TEXTUREFORMAT_ALPHA: number;
        static readonly TEXTUREFORMAT_LUMINANCE: number;
        static readonly TEXTUREFORMAT_LUMINANCE_ALPHA: number;
        static readonly TEXTUREFORMAT_RGB: number;
        static readonly TEXTUREFORMAT_RGBA: number;
        static readonly TEXTUREFORMAT_RED: number;
        static readonly TEXTUREFORMAT_R: number;
        static readonly TEXTUREFORMAT_RG: number;
        static readonly TEXTUREFORMAT_RED_INTEGER: number;
        static readonly TEXTUREFORMAT_R_INTEGER: number;
        static readonly TEXTUREFORMAT_RG_INTEGER: number;
        static readonly TEXTUREFORMAT_RGB_INTEGER: number;
        static readonly TEXTUREFORMAT_RGBA_INTEGER: number;
        static readonly TEXTURETYPE_UNSIGNED_BYTE: number;
        static readonly TEXTURETYPE_UNSIGNED_INT: number;
        static readonly TEXTURETYPE_FLOAT: number;
        static readonly TEXTURETYPE_HALF_FLOAT: number;
        static readonly TEXTURETYPE_BYTE: number;
        static readonly TEXTURETYPE_SHORT: number;
        static readonly TEXTURETYPE_UNSIGNED_SHORT: number;
        static readonly TEXTURETYPE_INT: number;
        static readonly TEXTURETYPE_UNSIGNED_INTEGER: number;
        static readonly TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4: number;
        static readonly TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1: number;
        static readonly TEXTURETYPE_UNSIGNED_SHORT_5_6_5: number;
        static readonly TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV: number;
        static readonly TEXTURETYPE_UNSIGNED_INT_24_8: number;
        static readonly TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV: number;
        static readonly TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV: number;
        static readonly TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV: number;
        static readonly TEXTURE_NEAREST_SAMPLINGMODE: number;
        static readonly TEXTURE_BILINEAR_SAMPLINGMODE: number;
        static readonly TEXTURE_TRILINEAR_SAMPLINGMODE: number;
        static readonly TEXTURE_NEAREST_NEAREST_MIPLINEAR: number;
        static readonly TEXTURE_LINEAR_LINEAR_MIPNEAREST: number;
        static readonly TEXTURE_LINEAR_LINEAR_MIPLINEAR: number;
        static readonly TEXTURE_NEAREST_NEAREST_MIPNEAREST: number;
        static readonly TEXTURE_NEAREST_LINEAR_MIPNEAREST: number;
        static readonly TEXTURE_NEAREST_LINEAR_MIPLINEAR: number;
        static readonly TEXTURE_NEAREST_LINEAR: number;
        static readonly TEXTURE_NEAREST_NEAREST: number;
        static readonly TEXTURE_LINEAR_NEAREST_MIPNEAREST: number;
        static readonly TEXTURE_LINEAR_NEAREST_MIPLINEAR: number;
        static readonly TEXTURE_LINEAR_LINEAR: number;
        static readonly TEXTURE_LINEAR_NEAREST: number;
        static readonly TEXTURE_EXPLICIT_MODE: number;
        static readonly TEXTURE_SPHERICAL_MODE: number;
        static readonly TEXTURE_PLANAR_MODE: number;
        static readonly TEXTURE_CUBIC_MODE: number;
        static readonly TEXTURE_PROJECTION_MODE: number;
        static readonly TEXTURE_SKYBOX_MODE: number;
        static readonly TEXTURE_INVCUBIC_MODE: number;
        static readonly TEXTURE_EQUIRECTANGULAR_MODE: number;
        static readonly TEXTURE_FIXED_EQUIRECTANGULAR_MODE: number;
        static readonly TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE: number;
        static readonly SCALEMODE_FLOOR: number;
        static readonly SCALEMODE_NEAREST: number;
        static readonly SCALEMODE_CEILING: number;
        static readonly MATERIAL_TextureDirtyFlag: number;
        static readonly MATERIAL_LightDirtyFlag: number;
        static readonly MATERIAL_FresnelDirtyFlag: number;
        static readonly MATERIAL_AttributesDirtyFlag: number;
        static readonly MATERIAL_MiscDirtyFlag: number;
        static readonly MATERIAL_AllDirtyFlag: number;
        static readonly MATERIAL_TriangleFillMode: number;
        static readonly MATERIAL_WireFrameFillMode: number;
        static readonly MATERIAL_PointFillMode: number;
        static readonly MATERIAL_PointListDrawMode: number;
        static readonly MATERIAL_LineListDrawMode: number;
        static readonly MATERIAL_LineLoopDrawMode: number;
        static readonly MATERIAL_LineStripDrawMode: number;
        static readonly MATERIAL_TriangleStripDrawMode: number;
        static readonly MATERIAL_TriangleFanDrawMode: number;
        static readonly MATERIAL_ClockWiseSideOrientation: number;
        static readonly MATERIAL_CounterClockWiseSideOrientation: number;
        static readonly ACTION_NothingTrigger: number;
        static readonly ACTION_OnPickTrigger: number;
        static readonly ACTION_OnLeftPickTrigger: number;
        static readonly ACTION_OnRightPickTrigger: number;
        static readonly ACTION_OnCenterPickTrigger: number;
        static readonly ACTION_OnPickDownTrigger: number;
        static readonly ACTION_OnDoublePickTrigger: number;
        static readonly ACTION_OnPickUpTrigger: number;
        static readonly ACTION_OnPickOutTrigger: number;
        static readonly ACTION_OnLongPressTrigger: number;
        static readonly ACTION_OnPointerOverTrigger: number;
        static readonly ACTION_OnPointerOutTrigger: number;
        static readonly ACTION_OnEveryFrameTrigger: number;
        static readonly ACTION_OnIntersectionEnterTrigger: number;
        static readonly ACTION_OnIntersectionExitTrigger: number;
        static readonly ACTION_OnKeyDownTrigger: number;
        static readonly ACTION_OnKeyUpTrigger: number;
        static readonly PARTICLES_BILLBOARDMODE_Y: number;
        static readonly PARTICLES_BILLBOARDMODE_ALL: number;
        static readonly PARTICLES_BILLBOARDMODE_STRETCHED: number;
        static readonly PARTICLES_BaseAssetsUrl: string;
        static readonly MESHES_CULLINGSTRATEGY_STANDARD: number;
        static readonly MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY: number;
        static readonly MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION: number;
        static readonly MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY: number;
        static readonly SCENELOADER_NO_LOGGING: number;
        static readonly SCENELOADER_MINIMAL_LOGGING: number;
        static readonly SCENELOADER_SUMMARY_LOGGING: number;
        static readonly SCENELOADER_DETAILED_LOGGING: number;
    }
}

declare module Drawsee {
    /**
      * IDisposable 可释放对象接口
      */
    interface IDisposable {
        /**
          * 释放对象
         */
        dispose(): void
    }

    /**
      * TObject 库中所有对象的祖先类
      */
    class TObject {
        /**
          * 
          * @param other
          * @returns
         */
        public equals(other: TObject): boolean;
        /**
          * 
         */
        public hashKey(): string;
        /**
          * 
          * @param x
          * @param y
          * @returns
         */
        public static GenericEquals(x: any, y: any): boolean;
        /**
          * 
          * @param key
          * @returns
         */
        public static GenericHashKey(key: any): string;
        /**
          * 
          * @param x
          * @returns
         */
        public static GenericToString(x: any): string;
        /**
          * 
          * @param x
          * @param y
          * @returns
         */
        public static NumberCompareTo(x: number, y: number): number;
        /**
          * 
          * @param x
          * @param y
          * @returns
         */
        public static StringCompareTo(x: string, y: string): number;
    }

    class Exception {
        public message: string;
        constructor(message?: string);
        public toString(): string;
    }

    class NotImplementedException extends Exception {
        constructor(message?: string);
    }

    class TString {
        public static Concat(parts: any[]): string;
        public static Contains(str: string, sub: string): boolean;
        public static FormatNumber(val: number, intLen: number, deciLen?: number): string;
        public static FromChars(chars: number[]): string;
        public static GetCharCountChineseAsTwo(str: string): number;
        public static IndexOfAny(str: string, subs: number[]): number;
        public static Join(separator: string, parts: string[]): string;
        public static Remove(str: string, startIndex: number, length: number): string;
        public static Replace(str: string, pattern: any, replacement: any): string;
        public static Split(str: string, separator: any, limit?: number): string[];
        public static SplitByChars(str: string, separator: number[], limit?: number): string[];
        public static Substring(str: string, startIndex: number, length?: number): string;
        public static ToCharArray(str: string): number[];
        public static Trim(str: string): string;
    }

    /**
      * NullableValue 可为空的值
      */
    class NullableValue<T>{
        /**
          * 
         */
        public value: T;
        /**
          * 
          * @param value?
         */
        constructor(value?: T);
        /**
          * 
         */
        public readonly hasValue: boolean;
        /**
          * 
         */
        public getValueOrDefault(): T;
    }

    /**
      * RefValue 引用值的包装类
      */
    class RefValue<T>{
        /**
          * 包含的值
         */
        public value: T;
        /**
          * 
          * @param value 
         */
        constructor(value?: T);
    }

    class Stream {
        public readonly length: number;
        public readonly position: number;
        public readByte(): number;
        public readBytes(count: number): Uint8Array;
        public toArray(): Uint8Array;
    }

    class MemoryStream extends Stream {
        constructor(data: Uint8Array);
        public readonly length: number;
        public readonly position: number;
        public readByte(): number;
        public readBytes(count: number): Uint8Array;
        public toArray(): Uint8Array;
    }

    class BinaryReader {
        constructor(baseStream: Stream);
        public baseStream: Stream;
        public close(): void;
        public isEof(): boolean;
        public read(buf: Uint8Array, index: number, count: number): void;
        public readByte(): number;
        public readBytes(count: number): Uint8Array;
        public readBytesToEnd(): Uint8Array;
        public readDouble(): number;
        public readInt16(): number;
        public readInt32(): number;
        public readSingle(): number;
        public readString(): string;
    }

    class MemoryBinaryReader extends BinaryReader {
        constructor(data: Uint8Array);
        public readFloats(count: number): Float32Array;
        public readInt16s(count: number): Int16Array;
        public readInt32s(count: number): Int32Array;
    }

    class StringBuilder {
        constructor(capacity?: number);
        public readonly length: number;
        public append(textOrChar: any): void;
        public appendLine(text?: string): void;
        public getAt(index: number): number;
        public toString(): string;
    }

    class Guid {
        public static Next(): string;
    }

    class CycleTimer {
        constructor(workIntervalMs?: number, startMs?: number);
        public isWorkTime(curMs?: number): boolean;
    }

    class ProcessTimer {
        constructor(ms?: number);
        public getTimeLeft(): number;
        public getTimeOutTick(): number;
        public isTimeOut(): boolean;
        public setCondition(ms: number): void;
        public timeOutQuit(): void;
    }

    /**
      * QuadtreeHandle 
      */
    class QuadtreeHandle {
        /**
          * 
         */
        public readonly level: number;
        /**
          * 
         */
        public readonly x: number;
        /**
          * 
         */
        public readonly y: number;
        /**
          * 
          * @param level 
          * @param x 
          * @param y 
         */
        constructor(level?: number, x?: number, y?: number);
        /**
          * 
         */
        public clone(): QuadtreeHandle;
        /**
          * 
         */
        public hashKey(): string;
    }

    class PromiseDelegate {
        public invokeFunc: () => void;
        constructor(invokeFunc: () => void);
        public onThen(): void;
        public tryInvoke(): void;
    }

    interface IComparable<T> {
        compareTo(other: T): number
    }

    interface IComparer<T> {
        compare(x: T, y: T): number
    }

    interface IEnumerable<T> {
        getEnumerator(): IEnumerator<T>;
    }

    interface IEnumerator<T> extends IDisposable {
        current: T;
        moveNext(): boolean;
    }

    interface IList<T> {
        count: number;
        getAt(index: number): T;
        setAt(index: number, value: T): void;
    }

    interface IDictionary<TKey, TValue> {
        count: number;
        keys: Array<TKey>;
        values: Array<TValue>;
        add(key: TKey, value: TValue): void;
        clear(): void
        containsKey(key: TKey): boolean;
        getValue(key: TKey): TValue;
        remove(key: TKey): boolean;
        unionWith(src: IDictionary<TKey, TValue>): void;
    }

    class ListRoot<T> implements IList<T>, IEnumerable<T>{
        constructor(items: T[]);
        public readonly count: number;
        public add(item: any);
        public addRange(items: T[]);
        public clear(): void;
        public contains(item: T): boolean;
        public getAt(index: number): T;
        public getEnumerator(): Array_Enumerator<T>;
        public indexOf(item: T): number;
        public insert(index: number, item: T): void;
        public remove(item: T): void;
        public removeAt(index: number): void;
        public removeRange(index: number, count: number): void;
        public reverse(): void;
        public setAt(index: number, value: any): void;
        public sort(comparer?: IComparer<T>): void;
        public toArray(): any;
    }

    class CloneList<T> extends ListRoot<T> implements IList<T>, IEnumerable<T>{
        constructor(items: T[]);
        public add(item: any);
        public getAt(index: number): T;
        public setAt(index: number, value: any): void;
    }

    class Array_Enumerator<T> implements IEnumerator<T>, IDisposable {
        constructor(array: T[]);
        public readonly current: T;
        public dispose(): void;
        public moveNext(): boolean;
    }

    class Array_Enumerable<T> implements IEnumerable<T>{
        constructor(array: T[]);
        public getEnumerator(): Array_Enumerator<T>;
    }

    class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue>{
        constructor(other?: Dictionary<TKey, TValue>);
        public readonly count: number;
        public readonly keys: Array<TKey>;
        public readonly values: Array<TValue>;
        public add(key: TKey, value: TValue);
        public clear(): void;
        public containsKey(key: TKey): boolean;
        public getValue(key: TKey): TValue;
        public remove(key: TKey): boolean;
        public tryGetValue(key: TKey, pvalue: RefValue<TValue>): boolean;
        public unionWith(src: IDictionary<TKey, TValue>): void;
    }

    class IntKeyDictionary<TValue> extends Dictionary<number, TValue> implements IDictionary<number, TValue>{
    }

    class StringKeyDictionary<TValue> extends Dictionary<string, TValue> implements IDictionary<string, TValue>{
    }

    class HashSet<T> implements IEnumerable<T>{
        constructor(vals?: IEnumerable<T>);
        public readonly count: number;
        public add(item: T): void;
        public clear(): void;
        public contains(item: T): boolean;
        public enumValues(): Array<T>;
        public exceptWith(vals: IEnumerable<T>): void;
        public getEnumerator(): Array_Enumerator<T>;
        public intersectWith(vals: IEnumerable<T>): void;
        public remove(item: T): void;
        public symmetricExceptWith(vals: IEnumerable<T>): void;
        public unionWith(vals: IEnumerable<T>): void;
    }

    class DirectHashSet implements IEnumerable<any>{
        constructor(vals?: IEnumerable<any>);
        public readonly count: number;
        public add(item: any): void;
        public clear(): void;
        public contains(item: any): boolean;
        public enumValues(): Array<any>;
        public getEnumerator(): Array_Enumerator<any>;
        public remove(item: any): void;
        public unionWith(vals: IEnumerable<any>): void;
    }

    class IntHashSet extends DirectHashSet {
    }

    class StringHashSet extends DirectHashSet {
    }

    /**
      * ObservableCollection 可观察集合类
      */
    class ObservableCollection<T> implements IList<T>, IEnumerable<T>{
        /**
          * 
          * @param items初始集合项
         */
        constructor(items?: IEnumerable<T> | T[]);
        /**
          * 集合发生改变消息 
         */
        public onCollectionChanged: Observable<EventArgs>;
        /**
          * 个数
         */
        public readonly count: number;
        /**
          * 
          * @param item 添加项
          * @returns
         */
        public add(item: any);
        /**
          * 清除所有项
         */
        public clear(): void;
        /**
          * 
          * @param index 获取指定索引的项
          * @returns 对象
         */
        public getAt(index: number): T;
        /**
          * 获取枚举数组
         */
        public getEnumerator(): Array_Enumerator<T>;
        /**
          * 
          * @param index 移除指定索引的项
         */
        public removeAt(index: number): void;
        /**
          * 
          * @param index 设置项到指定索引
          * @param value 对象
         */
        public setAt(index: number, value: any): void;
        /**
          * 转为数组 
         */
        public toArray(): any;
    }

    /**
      * SystemHelper 全局系统帮助函数
      */
    class SystemHelper {
        /**
          * 
          * @param observable 
          * @param evt 
         */
        public static FireEvent<T>(observable: any, evt: T): void;
        /**
          * 
          * @param bytes 字节数组转为Stream
          * @returns stream对象
         */
        public static ByteToStream(bytes: Uint8Array): Stream;
        /**
          * 强制转化对象类型为T
          * @param obj 对象
          * @returns
         */
        public static CastObject<T>(obj: any): any;
        /**
          * 
          * @param buf
          * @param startIndex
          * @param count
          * @returns
         */
        public static CharArrayToInt(buf: number[], startIndex: number, count: number): number;
        /**
          * 复制对象
          * @param obj 源对象
          * @returns 新对象
         */
        public static CloneObject(obj: any);
        /**
          * 
          * @param strValue
          * @returns
         */
        public static ConvertDateTime(strValue: string): string;
        /**
          * 从json字符串中复制所有属性到指定对象
          * @param destObj 目标对象
          * @param jsonString Json字符串
         */
        public static CopyAttrFromJson(destObj: any, jsonString: string): void;
        /**
          * 把源对象所有属性复制到目标对象
          * @param destObj 目标对象
          * @param jsonObj 源对象
         */
        public static CopyAttrFromJsonObject(destObj: any, jsonObj: any): void;
        /**
          * 从json字符串创建指定类名的对象实例，自动复制属性
          * @param className 对象的类名称
          * @param json json字符串
          * @returns 对象实例
         */
        public static CreateFromJson(className: string, json: string): any;
        /**
          * 从json字符串数组创建指定类名的对象实例数组，自动复制每个对象的属性
          * @param className 对象的类名称
          * @param jsonArray json字符串数组
          * @returns 对象实例数组
         */
        public static CreateFromJsonArray(className: string, jsonArray: string): any[];
        /**
          * 创建Worker线程
          * @param workerJsFile 线程脚本文件名称
          * @returns 线程对象
         */
        public static CreateWorker(workerJsFile: string): Worker;
        /**
          * 
          * @param data 
          * @returns 
         */
        public static EncodeArrayBufferTobase64(data: Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array): string;
        /**
          * 
          * @param enumerator 
          * @returns 
         */
        public static EnumerableToList(enumerator: any): Array<any>;
        /**
          * 
          * @param toFreeObject 
          * @returns 
         */
        public static FreeDispose<T>(toFreeObject: T): T;
        /**
          * 
          * @param input 
          * @returns 
         */
        public static FromBase64String(input: string): Uint8Array;
        /**
          * 获取主入口网页运行的本机ip地址
         */
        public static GetLocalHostIp(): string;
        /**
          * 
         */
        public static GetMemoryLimitMBytes(): number;
        /**
          * 判断是否gzip压缩数据
          * @param rawData 字节数据
          * @returns 
         */
        public static IsCompressedData(rawData: Uint8Array): boolean;
        /**
          * 判断是否为移动浏览器
         */
        public static IsMobileBrowser(): boolean;
        /**
          * 
          * @param src 
          * @returns 
         */
        public static NewList<T>(src: T[]): Array<T>;
        /**
          * 
          * @param objectTypeName 
          * @returns 
         */
        public static NewObject<T>(objectTypeName: string);
        /**
          * 
         */
        public static NullObject<T>(): T;
        /**
          * 
          * @param rawUrl 
          * @returns 
         */
        public static ParseImageUrl(rawUrl: string): string;
        /**
          * 
          * @param data 
          * @returns 
         */
        public static ParseJsonFromBytes(data: any): any;
        /**
          * 
          * @param b 
          * @returns 
         */
        public static QueryInterface<T>(b: any): any;
        /**
          * 把相对或者绝对url统一转为绝对路径
          * @param url 相对或者绝对路径url
          * @returns 绝对路径url
         */
        public static ToAbsoluteUrl(url: string): string;
        /**
          * 把字节数据转为Base64编码的字符串
          * @param input 字节数据
          * @returns Base64编码的字符串
         */
        public static ToBase64String(input: Uint8Array | number[]): string;
        /**
          * 把任意类型转为整数，如果对象为空，返回0
          * @param val 对象
          * @returns 整数
         */
        public static ToInt(val: any): number;
        /**
          * 解压缩gzip数据
          * @param zipData 压缩字节数据 
          * @returns 解压后的数据
         */
        public static Uncompress(zipData: Uint8Array): Uint8Array;
    }

    /**
      * NumberHelper 数字帮助函数
      */
    class NumberHelper {
        /**
          * 
          * @param bytes 
          * @returns 
         */
        public static BytesToMb(bytes: number): number;
        /**
          * 
          * @param value 
          * @param degree 
          * @param minute 
          * @param second 
         */
        public static DecimalToDegree(value: number, degree: RefValue<number>, minute: RefValue<number>, second: RefValue<number>): void;
        /**
          * 
          * @param degree 
          * @param minute 
          * @param second
          * @returns 
         */
        public static DegreeToDecimal(degree: number, minute: number, second: number): number;
        /**
          * 
          * @param val 
          * @param precisionCount 
          * @returns 
         */
        public static RestrictPrecision(val: number, precisionCount?: number): number;
        /**
          * 
          * @param str 
          * @returns 
         */
        public static ToDouble(str: string): number;
        /**
          * 
          * @param str 
          * @returns 
         */
        public static ToInt(str: string): number;
        /**
          * 
          * @param num 
          * @returns 
         */
        public static ToPowerOfTwo(num: number): number;
        /**
          * 
          * @param num 
          * @returns 
         */
        public static ToString(num: number): string;
        /**
          * 
          * @param str 
          * @param pvalue 
          * @returns 
         */
        public static TryParse(str: string, pvalue: RefValue<number>): boolean;
        /**
          * 
          * @param val 
          * @param min 
          * @param max 
          * @returns 
         */
        public static VerifyRange<T>(val: T, min: T, max: T): T;
    }

    /**
      * StringHelper 字符串帮助函数
      */
    class StringHelper {
        /**
          * 
          * @param src 
          * @param lastPart 
          * @returns 
         */
        public static CutLastPart(src: string, lastPart: string): string;
        /**
          * 
          * @param fullPath 
          * @returns 
         */
        public static ExtractDirectoryOnly(fullPath: string): string;
        /**
          * 
          * @param fullPath 
          * @returns 
         */
        public static ExtractFileName(fullPath: string): string;
        /**
          * 
          * @param fullPath 
          * @returns 
         */
        public static ExtractFileNameWithoutSuffix(fullPath: string): string;
        /**
          * 
          * @param fullPath 
          * @returns 
         */
        public static ExtractFileSuffix(fullPath: string): string;
        /**
          * 
          * @param fullPath 
          * @returns 
         */
        public static ExtractFinalDirectoryNamePart(fullPath: string): string;
        /**
          * 
          * @param str 
          * @returns 
         */
        public static ExtractFirstLine(str: string): string;
        /**
          * 
          * @param str 
          * @param fillChar 
          * @param maxLen 
          * @returns 
         */
        public static FillPrefixChar(str: string, fillChar: number, maxLen: number): string;
        /**
          * 
          * @param str 
          * @param fillChar 
          * @param maxLen 
          * @returns 
         */
        public static FillSuffixChar(str: string, fillChar: number, maxLen: number): string;
        /**
          * 
          * @param partsRaw 
          * @returns 
         */
        public static FilterEmptyParts(partsRaw: string[]): Array<string>;
        /**
          * 
          * @param area 
          * @param invalidAsEmpty 
          * @returns 
         */
        public static FormatAreaString(area: number, invalidAsEmpty?: boolean): string;
        /**
          * 
          * @param len 
          * @param invalidAsEmpty 
          * @returns 
         */
        public static FormatLengthString(len: number, invalidAsEmpty?: boolean): string;
        /**
          * 
          * @param points 
          * @param xzPrecision 
          * @param yPrecision 
          * @returns 
         */
        public static FormatVector3Array(points: Vector3[], xzPrecision?: number, yPrecision?: number): string;
        /**
          * 
          * @param baseUrl 
          * @param relativeSubUrl 
          * @returns 
         */
        public static MergeFullUrl(baseUrl: string, relativeSubUrl: string): string;
        /**
          * 
          * @param str 
          * @param sep 
          * @param count 
          * @returns 
         */
        public static ParseDouble(str: string, sep: number[], count: number): Float64Array;
        /**
          * 
          * @param str 
          * @param sep 
          * @param count 
          * @returns 
         */
        public static ParseFloat(str: string, sep: number[], count: number): Float32Array;
        /**
          * 
          * @param str 
          * @param sep 
          * @param count 
          * @returns 
         */
        public static ParseInt(str: string, sep: number[], count: number): Int32Array;
        /**
          * 
          * @param srcStr 
          * @param maxCharCount 
          * @param maxLineCount 
          * @returns 
         */
        public static ReduceSize(srcStr: string, maxCharCount: number, maxLineCount: number): string;
        /**
          * 
          * @param rawPath 
          * @returns 
         */
        public static RegulatePath(rawPath: string): string;
        /**
          * 
          * @param src 
          * @param separator 
          * @returns 
         */
        public static SplitFilterEmpty(src: string, separator: number[]): string[];
        /**
          * 
          * @param src 
          * @param split 
          * @param partBefore 
          * @param partAfter 
          * @returns 
         */
        public static SplitNoCase(src: string, split: string, partBefore: RefValue<string>, partAfter: RefValue<string>): boolean;
        /**
          * 
          * @param srcStr 
          * @param charMaxPerline 
          * @returns 
         */
        public static ToMultipleLines(srcStr: string, charMaxPerline?: number): string;
    }

    /**
      * ArrayHelper 数组帮助函数
      */
    class ArrayHelper {
        /**
          * 
          * @param dest 
          * @param src 
         */
        public static AddRange(dest: Array<any>, src: Array<any>): void;
        /**
          * 
          * @param dest
          * @param src
        public static AddRange(dest: Array<any>, src: Array<any>): void;
        /**
          * 
          * @param array 
         */
        public static Clear(array: Array<any>): void;
        /**
          * 
          * @param src 
          * @param cloneObject 
          * @returns 
         */
        public static CloneArray(src: any, cloneObject?: boolean): Array<any>;
        /**
          * 
          * @param src 
          * @param cloneObject 
          * @returns 
         */
        public static CloneArray2<T extends ICloneable<T>>(src: T[][], cloneObject?: boolean): T[][];
        /**
          * 
          * @param srcArray 
          * @returns 
         */
        public static CloneDataArray<ElemType>(srcArray: any): any;
        /**
          * 
          * @param srcArray 
          * @returns 
         */
        public static CloneDataArray2<ElemType>(srcArray: ElemType[][]): ElemType[][];
        /**
          * 
          * @param src 
          * @param srcIndex 
          * @param dest 
          * @param destIndex 
          * @param length 
         */
        public static Copy<T>(src: any, srcIndex: number, dest: any, destIndex: number, length: number): void;
        /**
          * 
          * @param size 
          * @returns 
         */
        public static CreateDataArray<ElemType>(size: number): ElemType[];
        /**
          * 
          * @param dim1 
          * @param dim2 
          * @returns 
         */
        public static CreateDataArray2<ElemType>(dim1: number, dim2: number): any;
        /**
          * 
          * @param list 
          * @returns 
         */
        public static CreateEnumerator(list: Array<any>): any;
        /**
          * 
          * @param items 
          * @param excludes 
          * @returns 
         */
        public static Exclude<T>(items: Array<T>, excludes: IEnumerable<T>): Array<T>;
        /**
          * 
          * @param items 
          * @param excludes 
          * @returns 
         */
        public static ExcludeList<T>(items: Array<T>, excludes: Array<T>): Array<T>;
        /**
          * 
          * @param items 
          * @param comparer 
          * @param max 
          * @returns 
         */
        public static PickTopItems<T>(items: Array<T>, comparer: IComparer<T>, max?: number): Array<T>;
        /**
          * 
          * @param array 
          * @param item 
         */
        public static RemoveByItem(array: Array<any>, item: any): void;
        /**
          * 
          * @param array 
          * @param comparer 
         */
        public static Sort(array: Array<any>, comparer?: IComparer<any>): void;
        /**
          * 
          * @param items 
          * @returns 
         */
        public static ToHashSet<T>(items: Array<T>): HashSet<T>;
        /**
          * 
          * @param hashSet 
          * @returns 
         */
        public static ToList<T>(hashSet: HashSet<T>): Array<T>;
        /**
          * 
          * @param items1 
          * @param items2 
          * @returns 
         */
        public static Union<T>(items1: Array<T>, items2: Array<T>): Array<T>;
    }

    /**
      * SystemTime 系统时间
      */
    class SystemTime {
        /**
          * 开始运行后经过的毫秒数
         */
        public static Now(): number;
    }

    class EncodingHelper {
        public static DecodingGb2String(data: any): string;
        public static Gb2Unicode(gb: number): number;
        public static GetUtf8String(data: Uint8Array, dataLen?: number): string;
        public static StringFromBytes(data: any): string;
        public static Unicode2Gb(uniCode: number): number;
    }

    class IdPairHelper {
        public static FormDirectedIdPair(id1: number, id2: number): QuadtreeHandle;
        public static FormNonDirectedIdPair(id1: number, id2: number): QuadtreeHandle;
        public static GetIdHigh(idPair: QuadtreeHandle): number;
        public static GetIdLow(idPair: QuadtreeHandle): number;
    }

    class ObjectSerializeHelper {
        public static Clone(srcObject: any): any;
        public static FromBytes<T>(data: Uint8Array): T;
        public static FromString(strData: string): any;
        public static FromStringTyped<T>(strData: string): T;
        public static ToBytes(dataObject: any): Uint8Array;
        public static ToString(dataObject: any): string;
    }

    /**
      * Color 颜色对象
      */
    class Color {
        /**
          * 红色分量值0-1
         */
        public r: number;
        /**
          * 绿色分量值0-1
         */
        public g: number;
        /**
          * 蓝色分量值0-1
         */
        public b: number;
        /**
          * 透明度分量值0-1
         */
        public a: number;
        /**
          * 
          * @param r 
          * @param g 
          * @param b 
          * @param a 
         */
        constructor(r?: number, g?: number, b?: number, a?: number);
        /**
          * 
         */
        public clone(): Color;
        /**
          * 
          * @param src 
         */
        public copyFrom(src: Color): void;
        /**
          * 
          * @param other 
          * @returns 
         */
        public equals(other: Color): boolean;
        /**
          * 
         */
        public toColorString(): string;
        /**
          * 
         */
        public toVector4(): Vector4;
        /**
          * 
          * @param result 
         */
        public toVector4ToRef(result: Vector4): void;
        /**
          * 
         */
        public static readonly Black: Color;
        /**
          * 
         */
        public static readonly Blue: Color;
        /**
          * 
         */
        public static readonly Brown: Color;
        /**
          * 
         */
        public static readonly Cyan: Color;
        /**
          * 
         */
        public static readonly DarkGray: Color;
        /**
          * 
         */
        public static readonly Gray: Color;
        /**
          * 
         */
        public static readonly Green: Color;
        /**
          * 
         */
        public static readonly LightGray: Color;
        /**
          * 
         */
        public static readonly Magenta: Color;
        /**
          * 
         */
        public static readonly Orange: Color;
        /**
          * 
         */
        public static readonly Purple: Color;
        /**
          * 
         */
        public static readonly Red: Color;
        /**
          * 
         */
        public static readonly Transparent: Color;
        /**
          * 
         */
        public static readonly White: Color;
        /**
          * 
         */
        public static readonly Yellow: Color;
        /**
          * 
          * @param c 
          * @returns 
         */
        public static ColorToInt(c: Color): number;
        /**
          * 
          * @param c 
          * @returns 
         */
        public static ColorToTextureInt(c: Color): number;
        /**
          * 
          * @param r 
          * @param g 
          * @param b 
          * @param a 
          * @returns 
         */
        public static FloatToColor(r: number, g: number, b: number, a: number): Color;
        /**
          * 从四个分量创建颜色。参数必须是0-255的整数值
          * @param r 
          * @param g 
          * @param b 
          * @param a 
          * @returns 
         */
        public static FromIntRgba(r: number, g: number, b: number, a: number): Color;
        /**
          * 
          * @param index 
          * @returns 
         */
        public static GetSystemColor(index: number): Color;
        /**
          * 
          * @param colorAsInt 
          * @returns 
         */
        public static IntToColor(colorAsInt: number): Color;
        /**
          * 
          * @param alpha 
          * @returns 
         */
        public static IsTransparentFloatAlpha(alpha: number): boolean;
        /**
          * 
          * @param alpha 
          * @returns 
         */
        public static IsTransparentIntAlpha(alpha: number): boolean;
        /**
          * 
          * @param start 
          * @param end 
          * @param mount 
          * @returns 
         */
        public static Lerp(start: Color, end: Color, mount: number): Color;
    }

    /**
      * Rect 二维矩形对象
      */
    class Rect {
        /**
          * 左下角x坐标
         */
        public x: number;
        /**
          * 左下角y坐标
         */
        public y: number;
        /**
          * 宽度
         */
        public width: number;
        /**
          * 高度
         */
        public height: number;
        /**
          * 
          * @param x 
          * @param y 
          * @param width 
          * @param height 
         */
        constructor(x?: number, y?: number, width?: number, height?: number);
        /**
          * 底部y坐标
         */
        public readonly bottom: number;
        /**
          * 
         */
        public readonly center: Vector2;
        /**
          * 是否为空
         */
        public readonly isEmpty: boolean;
        /**
          * 左侧x坐标
         */
        public readonly left: number;
        /**
          * 右侧x坐标
         */
        public readonly right: number;
        /**
          * 顶部y坐标
         */
        public readonly top: number;
        /**
          * 复制对象
         */
        public clone(): Rect;
        /**
          * 是否包含指定点
          * @param point 指定点
          * @returns 
         */
        public contains(point: Vector2): boolean;
        /**
          * 
          * @param src 从指定矩形拷贝
         */
        public copyFrom(src: Rect): void;
        /**
          * 
          * @param other 是否和指定矩形相同
          * @returns 
         */
        public equals(other: Rect): boolean;
        /**
          * 扩展矩形高度和宽度
          * @param xInc 扩展宽度
          * @param yInc 扩展高度
          * @returns 新矩形
         */
        public inflate(xInc: number, yInc: number): Rect;
        /**
          * 扩展矩形高度和宽度，结果存放在本矩形
          * @param xInc 扩展宽度
          * @param yInc 扩展高度
         */
        public inflateInPlace(xInc: number, yInc: number): void;
        /**
          * 与指定矩形求交集
          * @param rect 指定矩形
          * @returns 交集矩形结果
         */
        public intersect(rect: Rect): Rect;
        /**
          * 与指定矩形求交集，结果放在本矩形
          * @param rect 指定矩形
         */
        public intersectInPlace(rect: Rect): void;
        /**
          * 判断是否与指定矩形相交
          * @param rect 指定矩形
          * @returns 布尔值
         */
        public intersects(rect: Rect): boolean;
        /**
          * 调整矩形使得宽度和高度为正值
         */
        public normalize(): void;
        /**
          * 直接设置矩形的值
          * @param x 
          * @param y 
          * @param width 
          * @param height 
         */
        public set(x: number, y: number, width: number, height: number): void;
        /**
          * 与指定矩形求并集
          * @param rect 指定矩形
          * @returns 并集矩形结果
         */
        public union(rect: Rect): Rect;
        /**
          * 与指定矩形求并集，结果放在本矩形
          * @param rect 指定矩形
         */
        public unionInPlace(rect: Rect): void;
        /**
          * 与指定点求并集，结果放在本矩形
          * @param point 指定点
         */
        public unionPointInPlace(point: Vector2): void;
        /**
          * 空矩形常量
         */
        public static readonly Empty: Rect;
        /**
          * 计算点数组的包围矩形
          * @param points 点数组
          * @returns 包围矩形
         */
        public static CalcRange(points: Vector2[]): Rect;
        /**
          * 从两点的包围矩形创建矩形
          * @param point1 点1
          * @param point2 点2
          * @returns 矩形对象
         */
        public static CreateFromPoint(point1: Vector2, point2: Vector2): Rect;
    }

    /**
      * Matrix2 二维矩阵对象
      */
    class Matrix2 {
        /**
          * 
         */
        public m11: number;
        /**
          * 
         */
        public m12: number;
        /**
          * 
         */
        public m21: number;
        /**
          * 
         */
        public m22: number;
        /**
          * 
         */
        public xOffset: number;
        /**
          * 
         */
        public yOffset: number;
        /**
          * 
         */
        public clone(): Matrix2;
        /**
          * 
          * @param srcMat 
         */
        public copyFrom(srcMat: Matrix2): void;
        /**
          * 
         */
        public determinant(): number;
        /**
          * 
         */
        public invertInPlace(): boolean;
        /**
          * 
         */
        public isIdentity(): boolean;
        /**
          * 
         */
        public isZero(): boolean;
        /**
          * 
         */
        public makeIdentity(): void;
        /**
          * 
          * @param matrix 
         */
        public multiplyInPlace(matrix: Matrix2): void;
        /**
          * 
          * @param angle 
         */
        public rotateInplace(angle: number): void;
        /**
          * 
          * @param xScale 
          * @param yScale 
         */
        public scaleInPlace(xScale: number, yScale: number): void;
        /**
          * 
          * @param point 
          * @returns 
         */
        public transform(point: Vector2): Vector2;
        /**
          * 
          * @param points 
          * @returns 
         */
        public transformPoints(points: Vector2[]): Vector2[];
        /**
          * 
          * @param rect 
          * @returns 
         */
        public transformRect(rect: Rect): Rect;
        /**
          * 
          * @param point 
          * @param result 
         */
        public transformToRef(point: Vector2, result: Vector2): void;
        /**
          * 
          * @param xOffset 
          * @param yOffset 
         */
        public translateInPlace(xOffset: number, yOffset: number): void;
        /**
          * 
         */
        public static readonly Identity: Matrix2;
        /**
          * 
          * @param m11 
          * @param m12 
          * @param xOffset 
          * @param m21 
          * @param m22 
          * @param yOffset 
          * @returns 
         */
        public static Create(m11: number, m12: number, xOffset: number, m21: number, m22: number, yOffset: number): Matrix2;
        /**
          * 
          * @param srcPt1 
          * @param destPt1 
          * @param srcPt2 
          * @param destPt2 
          * @returns 
         */
        public static CreateFromPoint2(srcPt1: Vector2, destPt1: Vector2, srcPt2: Vector2, destPt2: Vector2): Matrix2;
        /**
          * 
          * @param srcPt1 
          * @param destPt1 
          * @param srcPt2 
          * @param destPt2 
          * @param srcPt3 
          * @param destPt3 
          * @returns 
         */
        public static CreateFromPoint3(srcPt1: Vector2, destPt1: Vector2, srcPt2: Vector2, destPt2: Vector2, srcPt3: Vector2, destPt3: Vector2): Matrix2;
        /**
          * 
          * @param angle 
          * @returns 
         */
        public static CreateRotation(angle: number): Matrix2;
        /**
          * 
          * @param xScale 
          * @param yScale 
          * @returns 
         */
        public static CreateScale(xScale: number, yScale: number): Matrix2;
        /**
          * 
          * @param xOffset 
          * @param yOffset 
          * @returns 
         */
        public static CreateTranslation(xOffset: number, yOffset: number): Matrix2;
    }

    /**
      * Size3 三维大小对象
      */
    class Size3 {
        /**
          * 
          * @param x 
          * @param y 
          * @param z 
         */
        constructor(x?: number, y?: number, z?: number);
        /**
          * 三个维度中的最大值
         */
        public readonly max: number;
        /**
          * 三个维度中的最小值
         */
        public readonly min: number;
        /**
          * x值
         */
        public x: number;
        /**
          * y值
         */
        public y: number;
        /**
          * z值
         */
        public z: number;
        /**
          * 复制对象
         */
        public clone(): Size3;
        /**
          * 
          * @param obj 
          * @returns 
         */
        public equals(obj: Size3): boolean;
        /**
          * 
         */
        public toVector3(): Vector3;
    }

    /**
      * Triangle3 三维三角形对象
      */
    class Triangle3 {
        /**
          * 
         */
        public v0: number;
        /**
          * 
         */
        public v1: number;
        /**
          * 
         */
        public v2: number;
        /**
          * 
          * @param v0 
          * @param v1 
          * @param v2 
         */
        constructor(v0?: number, v1?: number, v2?: number);
        /**
          * 
         */
        public clone(): Triangle3;
        /**
          * 
          * @param triangles 
          * @returns 
         */
        public static ToIndexArray(triangles: Triangle3[]): Int32Array;
    }

    /**
      * Vertex3 三维顶点对象
      */
    class Vertex3 {
        /**
          * 
         */
        public x: number;
        /**
          * 
         */
        public y: number;
        /**
          * 
         */
        public z: number;
        /**
          * 
         */
        public nx: number;
        /**
          * 
         */
        public ny: number;
        /**
          * 
         */
        public nz: number;
        /**
          * 
         */
        public u: number;
        /**
          * 
         */
        public v: number;
        /**
          * 
          * @param x 
          * @param y 
          * @param z 
          * @param nx 
          * @param ny 
          * @param nz 
          * @param u 
          * @param v 
         */
        constructor(x?: number, y?: number, z?: number, nx?: number, ny?: number, nz?: number, u?: number, v?: number);
        /**
          * 
         */
        public clone(): Vertex3;
    }

    /**
      * IVector3 三维向量接口 
      */
    interface IVector3 {
        /**
          * 
         */
        x: number;
        /**
          * 
         */
        y: number;
        /**
          * 
         */
        z: number;
        /**
          * 
          * @param other 
          * @returns 
         */
        copyFrom(other: IVector3);
        /**
          * 
          * @param x 
          * @param y 
          * @param z 
          * @returns 
         */
        set(x: number, y: number, z: number);
    }

    /**
      * IBox 三维包围盒接口
      */
    interface IBox {
        /**
          * 
         */
        max: IVector3;
        /**
          * 
         */
        min: IVector3;
    }

    /**
      * Box 包围盒对象，是一个三维长方体
      */
    class Box implements IBox {
        /**
          * 最小值
         */
        public min: IVector3;
        /**
          * 最大值
         */
        public max: IVector3;
        /**
          * 
          * @param min 
          * @param max 
         */
        constructor(min?: IVector3, max?: IVector3);
        /**
          * 中心点
         */
        public readonly center: Vector3;
        /**
          * 半径
         */
        public readonly radius: number;
        /**
          * 三维尺寸
         */
        public readonly size: Size3;
        /**
          * 复制对象
         */
        public clone(): Box;
        /**
          * 是否包含三维向量
          * @param v 三维向量
          * @returns 
         */
        public contains(v: IVector3): boolean;
        /**
          * 转为采集包围点
         */
        public toBoundingPoints(): Vector3[];
        /**
          * 转为二维矩形
         */
        public toRect(): Rect;
        /**
          * 
          * @param other 
         */
        public unionInPlace(other: IBox): void;
        /**
          * 计算三维点数组的包围盒
          * @param points 三维点数组
          * @returns 包围盒
         */
        public static CalcRange(points: Vector3[]): Box;
        /**
          * 从Vector3Array对象计算包围盒
          * @param vs 点数组
          * @returns 包围盒
         */
        public static CalcRangeFromArray(vs: Vector3Array): Box;
        /**
          *就算两对三维坐标的包围盒 
          * @param minX 
          * @param minY 
          * @param minZ 
          * @param maxX 
          * @param maxY 
          * @param maxZ 
          * @returns 包围盒
         */
        public static CreateFromDouble(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): Box;
        /**
          * 
          * @param boundBox 
          * @returns 
         */
        public static FromBoundingBox(boundBox: BoundingBox): Box;
        /**
          * 判断两个包围盒是否相交
          * @param box0 
          * @param box1 
          * @returns 
         */
        public static Intersects(box0: IBox, box1: IBox): boolean;
        /**
          * 判断两对点定义的包围盒是否相交
          * @param min 
          * @param max 
          * @param min1 
          * @param max1 
          * @returns 
         */
        public static IntersectsMinMax(min: IVector3, max: IVector3, min1: IVector3, max1: IVector3): boolean;
        /**
          * 计算两个包围盒的并集
          * @param box1 
          * @param box2 
          * @returns 
         */
        public static Union(box1: IBox, box2: IBox): Box;
    }

    /**
      * Segment3 三维线段对象
      */
    class Segment3 {
        /**
          * 
          * @param s 
          * @param e 
         */
        constructor(s?: Vector3, e?: Vector3);
        /**
          * 终点
         */
        public end: Vector3;
        /**
          * 起点
         */
        public start: Vector3;
        /**
          * 从源线段复制
          * @param src 源线段
         */
        public copyFrom(src: Segment3): void;
        /**
          * 判断本线段是否与三点定义的三角形相交
          * @param tr1 三角形顶点1
          * @param tr2 三角形顶点2
          * @param tr3 三角形顶点3
          * @param isect 如果相交，返回交点坐标，否则无效值
          * @returns 相交返回true
         */
        public intersectsTriangle(tr1: Vector3, tr2: Vector3, tr3: Vector3, isect: Vector3): boolean;
        /**
          * 计算两个线段之间的最短距离
          * @param line1 
          * @param line2 
          * @returns 距离值
         */
        public static DistanceLL(line1: Segment3, line2: Segment3): number;
        /**
          * 计算两个线段之间的最短线段
          * @param line1 
          * @param line2 
          * @param distLineSeg 最短距离的线段坐标
          * @returns 距离值
         */
        public static DistanceLL2(line1: Segment3, line2: Segment3, distLineSeg: Segment3): number;
        /**
          * 计算点到线段的距离
          * @param point 
          * @param line 
          * @returns 距离值
         */
        public static DistancePL(point: Vector3, line: Segment3): number;
        /**
          * 计算点到线段的距离并保存最短距离线段
          * @param point 
          * @param line 
          * @param distPoint 最短距离的线段坐标
          * @returns 距离值
         */
        public static DistancePL2(point: Vector3, line: Segment3, distPoint: Vector3): number;
    }

    /**
      * VectorHelper 向量结构的帮助函数
      */
    class VectorHelper {
        /**
          * 
          * @param positions 
          * @param start 
          * @param count 
          * @returns 
         */
        public static CalcBoundingBox(positions: Vector3[] | Vector3Array, start?: number, count?: number): Box;
        /**
          * 计算索引点数组裁剪包围盒
          * @param positions 做标书组
          * @param indices 索引数组
          * @param indexStart 索引起始值
          * @param indexCount 索引个数
          * @returns 包围盒
         */
        public static CalcBoundingBoxIndexed(positions: Vector3[] | Vector3Array, indices: number[] | Int32Array, indexStart: number, indexCount: number): Box;
        /**
          * 计算法向量数组
          * @param positions 点数组
          * @param indices 索引数组
          * @returns 法向量数组
         */
        public static CalcNormals(positions: Vector3[], indices: number[] | Int32Array): Vector3[];
        /**
          * 从浮点数数组计算法向量
          * @param positions 浮点数数组
          * @param indices 索引数组
          * @returns 法向量数组
         */
        public static CalcNormalsFloatArray(positions: Float32Array, indices: number[] | Int32Array): Float32Array;
        /**
          * 
          * @param zDirection 
          * @param upAxis 
          * @returns 
         */
        public static CalcQuternionOfZDirection(zDirection: Vector3, upAxis: Vector3): Quaternion;
        /**
          * 复制三维点数组
          * @param points 三维点数组
          * @returns 复制的数组
         */
        public static CloneVector3Array(points: Vector3[]): Array<Vector3>;
        /**
          * 从最小最大点创建裁剪包围盒
          * @param min 
          * @param max 
          * @returns 包围盒
         */
        public static CreateBoundingBox(min: IVector3, max: IVector3): BoundingBox;
        /**
          * 
          * @param center 
          * @param radius 
          * @returns 
         */
        public static CreateBoundingBoxFromCenter(center?: Vector3, radius?: number): BoundingBox;
        /**
          * 从最小最大点创建裁剪信息对象
          * @param min 
          * @param max 
          * @returns 
         */
        public static CreateBoundingInfo(min: IVector3, max: IVector3): BoundingInfo;
        /**
          * 
          * @param center 
          * @param radius 
          * @returns 
         */
        public static CreateBoundingSphere(center?: Vector3, radius?: number): BoundingSphere;
        /**
          * 
          * @param center 
          * @param radius 
          * @returns 
         */
        public static CreateBoxFromCenter(center?: Vector3, radius?: number): Box;
        /**
          * 创建Ray对象
          * @param start 起点
          * @param end 终点
          * @returns 
         */
        public static CreateRay(start: Vector3, end: Vector3): Ray;
        /**
          * 
          * @param points 
          * @param minDis 
          * @param clearPolyBeginEnd 
          * @returns 
         */
        public static FilterDuplicatedVector2(points: Vector2[], minDis?: number, clearPolyBeginEnd?: boolean): Vector2[];
        /**
          * 
          * @param points 
          * @param minDis 
          * @param clearPolyBeginEnd 
          * @returns 
         */
        public static FilterDuplicatedVector3(points: Vector3[], minDis?: number, clearPolyBeginEnd?: boolean): Vector3[];
        /**
          * 
          * @param floats 
          * @returns 
         */
        public static FloatToVector2Array(floats: FloatArray): Array<Vector2>;
        /**
          * 
          * @param floats 
          * @returns 
         */
        public static FloatToVector3Array(floats: FloatArray): Array<Vector3>;
        /**
          * 判断平面是否与包围盒相交
          * @param plane 平面
          * @param box 包围盒
          * @returns 
         */
        public static IntersectPlaneBox(plane: Plane, box: IBox): boolean;
        /**
          * 判断平面是否与两对点定义的包围盒相交
          * @param plane 平面
          * @param minimum 最小点
          * @param maximum 最大点
          * @returns 
         */
        public static IntersectPlaneMinMax(plane: Plane, minimum: IVector3, maximum: IVector3): boolean;
        /**
          * 判断射线是否与裁剪包围盒相交
          * @param ray 
          * @param boundingBox 
          * @returns 
         */
        public static IntersectRayBoundingBox(ray: Ray, boundingBox: BoundingBox): NullableValue<number>;
        /**
          * 判断射线是否与包围盒相交
          * @param ray 
          * @param box 
          * @returns 
         */
        public static IntersectRayBox(ray: Ray, box: IBox): NullableValue<number>;
        /**
          * 判断射线是否与两点定义的包围盒相交
          * @param ray 
          * @param minimum 
          * @param maximum 
          * @returns 
         */
        public static IntersectRayMinMax(ray: Ray, minimum: IVector3, maximum: IVector3): NullableValue<number>;
        /**
          * 判断射线是否与三点定义的三角形相交
          * @param ray 
          * @param v0 
          * @param v1 
          * @param v2 
          * @returns 
         */
        public static IntersectRayTriangle(ray: Ray, v0: Vector3, v1: Vector3, v2: Vector3): IntersectionInfo;
        /**
          * 
          * @param v1 
          * @param v2 
          * @param plane 
          * @param resultV 
          * @param resultDist 
          * @returns 
         */
        public static IntersectSegmentPlane(v1: Vector3, v2: Vector3, plane: Plane, resultV: Vector3, resultDist?: RefValue<number>): boolean;
        /**
          * 
          * @param pt1 
          * @param pt2 
          * @param ptToTest 
          * @returns 
         */
        public static IsBetween(pt1: Vector3, pt2: Vector3, ptToTest: Vector3): boolean;
        /**
          * 返回两个向量中个分量最大值构成的新向量
          * @param v1 
          * @param other 
          * @returns 
         */
        public static MaxVector(v1: Vector3, other: Vector3): Vector3;
        /**
          * 返回两个向量中个分量最小值构成的新向量
          * @param v1 
          * @param other 
          * @returns 
         */
        public static MinVector(v1: Vector3, other: Vector3): Vector3;
        /**
          * 返回射线上与起点为指定距离的点坐标
          * @param ray 
          * @param distance 
          * @returns 
         */
        public static RayPosition(ray: Ray, distance: number): Vector3;
        /**
          * Color转为Color3
          * @param c 
          * @returns 
         */
        public static ToColor3(c: Color): BABYLON.Color3;
        /**
          * Color转为Color4
          * @param c 
          * @returns 
         */
        public static ToColor4(c: Color): BABYLON.Color4;
        /**
          * 点数组坐标转换为相对于origin点
          * @param points 
          * @param origin 
          * @returns 
         */
        public static ToLocalVector3Array(points: Vector3[], origin?: Vector3): Array<Vector3>;
        /**
          * Vector3转为Vector2
          * @param v 
          * @returns 
         */
        public static ToVector2(v: Vector3): Vector2;
        /**
          * 转为Vector2数组
          * @param points 
          * @returns 
         */
        public static ToVector2Array(points: Vector3[]): Array<Vector2>;
        /**
          * Vector2转为Vector3，y值设为0
          * @param point 
          * @returns 
         */
        public static ToVector3(point: Vector2): Vector3;
        /**
          * 转为Vector3数组
          * @param points 
          * @returns 
         */
        public static ToVector3Array(points: Vector2[]): Array<Vector3>;
        /**
          * 
          * @param box 
          * @param transFunc 
          * @returns 
         */
        public static TransformBox(box: Box, transFunc: (points: Vector3[]) => Vector3[]): Box;
        /**
          * 
          * @param value 
          * @param rotation 
          * @returns 
         */
        public static TransformByQuaternion(value: Vector3, rotation: Quaternion): Vector3;
        /**
          * 
          * @param sourceArray 
          * @param matrix 
          * @param destinationArray 
         */
        public static TransformPoints(sourceArray: Vector3[], matrix: Matrix, destinationArray: Vector3[]): void;
        /**
          * 把开发员信息窗口中获取的xyz格式数组转为Vector3数组
          * @param xyzArray xyz格式数组
          * @param specifiedY 如果指定该值，则统一将y值赋为该值，否则保持原值
          * @returns 
         */
        public static Vector3ArrayFromXyzArray(xyzArray: number[][], specifiedY?: number): Array<Vector3>;
        /**
          * 把开发员信息窗口中获取的xy格式数组转为Vector2数组
          * @param xyArray xy格式数组
          * @returns 
         */
        public static VectorzArrayFromXyArray(xyArray: number[][]): Array<Vector2>;
    }

    class FloatTypeArrayBase<TStruct, TData>{
        constructor(data: Float32Array, strideSize: number);
        public readonly data: Float32Array;
        public readonly length: number;
        protected elemToRef(index: number, result: TStruct): void;
        protected getElemAt(index: number): TStruct;
        protected setElemAt(index: number, value: TStruct): void;
        public getAt(index: number): TStruct;
        public getToRef(index: number, result: TStruct): void;
        public setAt(index: number, value: TStruct): void;
        public toElementArray(): Array<TStruct>;
    }

    class Vector3Array extends FloatTypeArrayBase<Vector3, number>{
        constructor(data: Float32Array);
        protected elemToRef(index: number, result: Vector3): void;
        protected getElemAt(index: number): Vector3;
        protected setElemAt(index: number, value: Vector3): void;
        public clone(): Vector3Array;
        public static Create(size: number): Vector3Array;
    }

    class Vector2Array extends FloatTypeArrayBase<Vector2, number>{
        constructor(data: Float32Array);
        protected elemToRef(index: number, result: Vector2): void;
        protected getElemAt(index: number): Vector2;
        protected setElemAt(index: number, value: Vector2): void;
        public clone(): Vector2Array;
        public static Create(size: number): Vector2Array;
    }

    class Vertex3Array extends FloatTypeArrayBase<Vertex3, number>{
        constructor(data: Float32Array);
        protected elemToRef(index: number, result: Vertex3): void;
        protected getElemAt(i: number): Vertex3;
        protected setElemAt(i: number, value: Vertex3): void;
        public clone(): Vertex3Array;
        public getPosition(index: number): Vector3;
        public getPositionToRef(index: number, result: Vector3): void;
        public getTextureCoord(index: number): Vector2;
        public getTextureCoordToRef(index: number, result: Vector2): void;
        public setHeight(index: number, value: number): void;
        public setPosition(index: number, value: Vector3): void;
        public setTextureCoord(index: number, value: Vector2): void;
        public static Create(size: number): Vertex3Array;
    }

    class IntTypeArrayBase<TStruct, TData>{
        constructor(data: Int32Array, strideSize: number);
        public readonly data: Int32Array;
        public readonly length: number;
        protected elemToRef(index: number, result: TStruct): void;
        protected getElemAt(index: number): TStruct;
        protected setElemAt(index: number, value: TStruct): void;
        public getAt(index: number): TStruct;
        public getToRef(index: number, result: TStruct): void;
        public setAt(index: number, value: TStruct): void;
        public toElementArray(): Array<TStruct>;
    }

    class Triangle3Array extends IntTypeArrayBase<Triangle3, number>{
        constructor(data: Int32Array);
        protected elemToRef(index: number, result: Triangle3): void;
        protected getElemAt(index: number): Triangle3;
        protected setElemAt(index: number, value: Triangle3): void;
        public clone(): Triangle3Array;
        public reverseTriangleOrder(): void;
        public static Create(size: number): Triangle3Array;
    }

    class TypeArrayHelper {
        public static AddIntValue(arr: Int32Array, val: number): void;
        public static CreateJoinTriangleIndiceArrays(arrs: Array<Int32Array>): Int32Array;
        public static GetTrianglePoints(vts: Vector3Array, tris: Triangle3Array): Vector3Array;
        public static GetTrianglePointsDirect(vertexes: Float32Array, indices: Int32Array, destArray: Float32Array, destStartIndex?: number): void;
        public static JoinFloat32Arrays(arrs: Array<Float32Array>): Float32Array;
        public static JoinInt32Arrays(arrs: Array<Int32Array>): Int32Array;
        public static JoinNumberArrays(arrs: Array<number[]>): number[];
        public static ToTriangleArray(indices: number[], reverseTriClockDirection: boolean): Triangle3Array;
        public static ToVector2Array(vs: Vector2[]): Vector2Array;
        public static ToVector3Array(vs: Vector3[]): Vector3Array;
        public static Vector2ToFloat(vs: Vector2[]): Float32Array;
        public static Vector3ToFloat(vs: Vector3[]): Float32Array;
        public static Vertex3ToFloat(vs: Vertex3[]): Float32Array;
    }

    interface IProjection {
        project(point: Vector2): Vector2;
        unproject(point: Vector2): Vector2;
    }

    class Matrix2Projection implements IProjection {
        public matrix: Matrix2;
        constructor(matrix: Matrix2);
        public project(point: Vector2): Vector2;
        public unproject(point: Vector2): Vector2;
    }

    /**
      * ICoordSystem3 
      */
    interface ICoordSystem3 {
        /**
          * 
         */
        math2: IMath2;
        /**
          * 
         */
        math3: IMath3;
        /**
          * 
          * @param position 
          * @returns 
         */
        calcRotationMatrix(position: Vector3): Matrix;
        /**
          * 
          * @param pos 
          * @returns 
         */
        calcUpVector(pos: Vector3): Vector3;
        /**
          * 
          * @param originCenter 
          * @param earthPoint 
          * @returns 
         */
        earthToLocal(originCenter: Vector3, earthPoint: Vector3): Vector3;
        /**
          * 
          * @param originCenter 
          * @param earthPoints 
          * @returns 
         */
        earthToLocalArray(originCenter: Vector3, earthPoints: Vector3[]): Vector3[];
        /**
          * 
          * @param originCenter 
          * @param earthPoint 
          * @param result 
         */
        earthToLocalToRef(originCenter: Vector3, earthPoint: Vector3, result: Vector3): void;
        /**
          * 
          * @param global 
          * @returns 
         */
        earthToMeter(global: number): number;
        /**
          * 
          * @param point 
          * @returns 
         */
        earthToWorld(point: Vector3): Vector3;
        /**
          * 
          * @param points 
          * @returns 
         */
        earthToWorldArray(points: Vector3[]): Vector3[];
        /**
          * 
          * @param point 
          * @param result 
         */
        earthToWorldToRef(point: Vector3, result: Vector3): void;
        /**
          * 
          * @param originCenter 
          * @param localPoint 
          * @returns 
         */
        localToEarth(originCenter: Vector3, localPoint: Vector3): Vector3;
        /**
          * 
          * @param originCenter 
          * @param localPoints 
          * @returns 
         */
        localToEarthArray(originCenter: Vector3, localPoints: Vector3[]): Vector3[];
        /**
          * 
          * @param originCenter 
          * @param localPoint 
          * @param result 
         */
        localToEarthToRef(originCenter: Vector3, localPoint: Vector3, result: Vector3): void;
        /**
          * 
          * @param meter 
          * @returns 
         */
        meterToEarth(meter: number): number;
        /**
          * 
          * @param screenPoint 
          * @param depth 
          * @returns 
         */
        screenToWorld(screenPoint: Vector2, depth: number): Vector3;
        /**
          * 
          * @param pt 
          * @returns 
         */
        screenToWorldLine(pt: Vector2): Vector3[];
        /**
          * 
          * @param screenPoint 
          * @param depth 
          * @param result 
         */
        screenToWorldToRef(screenPoint: Vector2, depth: number, result: Vector3): void;
        /**
          * 
          * @param position 
          * @param lightDirection 
          * @returns 
         */
        transformLightDirection(position: Vector3, lightDirection: Vector3): Vector3;
        /**
          * 
          * @param point 
          * @returns 
         */
        worldToEarth(point: Vector3): Vector3;
        /**
          * 
          * @param points 
          * @returns 
         */
        worldToEarthArray(points: Vector3[]): Vector3[];
        /**
          * 
          * @param point 
          * @param result 
         */
        worldToEarthToRef(point: Vector3, result: Vector3): void;
        /**
          * 
          * @param worldPoint 
          * @returns 
         */
        worldToScreen(worldPoint: Vector3): Vector2;
        /**
          * 
          * @param worldPoint 
          * @param result 
         */
        worldToScreenToRef(worldPoint: Vector3, result: Vector2): void;
    }

    /**
      * IMath2 
      */
    interface IMath2 {
        /**
          * 
          * @param x1 
          * @param y1 
          * @param x2 
          * @param y2 
          * @returns 
         */
        Angle(x1: number, y1: number, x2: number, y2: number): number;
        /**
          * 
          * @param points 
          * @returns 
         */
        Area(points: Vector2[]): number;
        /**
          * 
          * @param points 
          * @param radius 
          * @param isRoundJoin 
          * @param isRoundEnd 
          * @param isClosed 
          * @returns 
         */
        Buffer(points: Vector2[], radius: number, isRoundJoin: boolean, isRoundEnd: boolean, isClosed: boolean): Vector2[];
        /**
          * 
          * @param center 
          * @param radius 
          * @returns 
         */
        BufferPoint(center: Vector2, radius: number): Vector2[];
        /**
          * 
          * @param x1 
          * @param y1 
          * @param x2 
          * @param y2 
          * @returns 
         */
        Distance(x1: number, y1: number, x2: number, y2: number): number;
        /**
          * 
          * @param pt1 
          * @param pt2 
          * @returns 
         */
        DistancePoint(pt1: Vector2, pt2: Vector2): number;
        /**
          * 
          * @param pt 
          * @param linePoints 
          * @returns 
         */
        DistancePointLine(pt: Vector2, linePoints: Vector2[]): number;
        /**
          * 
          * @param points 
          * @returns 
         */
        Length(points: Vector2[]): number;
    }

    /**
      * IMath3 
      */
    interface IMath3 {
        /**
          * 
          * @param triPoints 
          * @returns 
         */
        Area(triPoints: Vector3[]): number;
        /**
          * 
          * @param x1 
          * @param y1 
          * @param z1 
          * @param x2 
          * @param y2 
          * @param z2 
          * @returns 
         */
        Distance(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
        /**
          * 
          * @param points1 
          * @param points2 
          * @returns 
         */
        DistanceLineLine(points1: Vector3[], points2: Vector3[]): number;
        /**
          * 
          * @param points1 
          * @param points2 
          * @param resultLinePoints 
          * @returns 
         */
        DistanceLineLineAdvance(points1: Vector3[], points2: Vector3[], resultLinePoints: RefValue<Array<Vector3>>): number;
        /**
          * 
          * @param pt1 
          * @param pt2 
          * @returns 
         */
        DistancePoint(pt1: Vector3, pt2: Vector3): number;
        /**
          * 
          * @param point 
          * @param points 
          * @returns 
         */
        DistancePointLine(point: Vector3, points: Vector3[]): number;
        /**
          * 
          * @param point 
          * @param points 
          * @param resultPoint 
          * @returns 
         */
        DistancePointLineAdvance(point: Vector3, points: Vector3[], resultPoint: Vector3): number;
        /**
          * 
          * @param points 
          * @returns 
         */
        Length(points: Vector3[]): number;
    }

    /**
      * Math2 二维数学对象
      */
    class Math2 {
        /**
          * 计算点1(x1,y1)到点2(x2,y2)的向量与水平x坐标轴之间的夹角，返回弧度
          * @param x1 
          * @param y1 
          * @param x2 
          * @param y2 
          * @returns 
         */
        public static Angle(x1: number, y1: number, x2: number, y2: number): number;
        /**
          * 计算从向量0到向量1之间的张角,逆时针方向为正
          * @param v0 
          * @param v1 
          * @returns 张角弧度值
         */
        public static AngleBetween(v0: Vector2, v1: Vector2): number;
        /**
          * 计算给定多边形的面积，返回平方米
          * @param points 多边形点数组
          * @returns 面积平方米
         */
        public static Area(points: Vector2[]): number;
        /**
          * 从三角形三边长度计算给定多边形的面积，返回平方米
          * @param a 边长1
          * @param b 边长2
          * @param c 边长3
          * @returns 面积平方米
         */
        public static AreaFromEdge(a: number, b: number, c: number): number;
        /**
          * 计算给点中心线的缓冲区
          * @param points 中心线
          * @param radius 半径米
          * @param isRoundJoin 是否圆角转弯
          * @param isRoundEnd 是否圆角端点
          * @param isClosed 是否闭合
          * @returns 缓冲区多边形
         */
        public static Buffer(points: Vector2[], radius: number, isRoundJoin?: boolean, isRoundEnd?: boolean, isClosed?: boolean): Vector2[];
        /**
          * 计算给定点的缓冲区
          * @param point 中心点
          * @param radius 半径，单位米
          * @returns缓冲区多边形点数组
         */
        public static BufferPoint(center: Vector2, radius: number): Vector2[];
        /**
          * 计算给定多边形内点
          * @param points 多边形点数组
          * @param pt 结果内点
          * @returns 是否计算成功
         */
        public static CalcInnerPoint(points: Vector2[], pt: Vector2): boolean;
        /**
          * 用多边形裁剪折线
          * @param polyPoints 多边形点
          * @param linePoints 折线点
          * @returns 裁剪结果的折线数组
         */
        public static ClipLine(polyPoints: Vector2[], linePoints: Vector2[]): Array<Vector2[]>;
        /**
          * 计算指定点到折线上最近点的坐标，返回最近点
          * @param points 折线点数组
          * @param pt 点
          * @returns 最近点坐标
         */
        public static ClosestPoint(points: Vector2[], pt: Vector2): Vector2;
        /**
          * 计算指定点到折线上最近点的坐标，返回最近点信息结构
          * @param points 折线点数组
          * @param pt 点
          * @returns 点信息结构
         */
        public static ClosestPointAdvance(points: Vector2[], pt: Vector2): PointOnLine;
        /**
          * 判断算多边形是否包含指定点
          * @param polyPoints 多边形点数组
          * @param point 点
          * @returns 如果包含返回true，否则false
         */
        public static Contains(polyPoints: Vector2[], point: Vector2): boolean;
        /**
          * 判断算多边形是否包含指定折线
          * @param polyPoints 多边形点数组
          * @param points 折线点数组
          * @returns 如果包含返回true，否则false
         */
        public static ContainsLine(polyPoints: Vector2[], points: Vector2[]): boolean;
        /**
          * 判断算多边形是否包含指定矩形
          * @param polyPoints 多边形点数组
          * @param rect 矩形
          * @returns 如果包含返回true，否则false
         */
        public static ContainsRect(polyPoints: Vector2[], rect: Rect): boolean;
        /**
          * 计算两对坐标之间距离
          * @param x1
          * @param y1 
          * @param x2 
          * @param y2 
          * @returns 
         */
        public static Distance(x1: number, y1: number, x2: number, y2: number): number;
        /**
          * 计算两条折线间距离
          * @param points1
          * @param points2 
          * @returns 距离米
         */
        public static DistanceLineLine(points1: Vector2[], points2: Vector2[]): number;
        /**
          * 计算两点间距离
          * @param pt1
          * @param pt2 
          * @returns 距离米
         */
        public static DistancePoint(pt1: Vector2, pt2: Vector2): number;
        /**
          * 计算点到折线距离
          * @param point 
          * @param points 
          * @returns 距离米
         */
        public static DistancePointLine(point: Vector2, points: Vector2[]): number;
        /**
          * 计算折线1被折线2裁剪的结果，返回折线段数组
          * @param linePoints1 折线1
          * @param linePoints2 折线2
          * @returns
         */
        public static IntersectLine(linePoints1: Vector2[], linePoints2: Vector2[]): Array<Vector2[]>;
        /**
          * 计算两条折线的一个交点。如果不相交返回false
          * @param points1
          * @param points2 
          * @param resultPoint 交点坐标
          * @returns 相交返回true，否则false
         */
        public static IntersectOnePoint(points1: Vector2[], points2: Vector2[], resultPoint: Vector2): boolean;
        /**
          * 判断两条折线是否相交
          * @param linePoints1 折线1
          * @param linePoints2 折线2
          * @returns 相交返回true，否则false
         */
        public static Intersects(linePoints1: Vector2[], linePoints2: Vector2[]): boolean;
        /**
          * 判断两个线段是否相交
          * @param x1 线段1起点x坐标
          * @param y1 线段1起点y坐标
          * @param x2 线段1终点x坐标
          * @param y2 线段1终点y坐标
          * @param x3 线段2起点x坐标
          * @param y3 线段2起点y坐标
          * @param x4 线段2终点x坐标
          * @param y4 线段2终点y坐标
          * @param resultPoint 如果相交，则保存相交点坐标
          * @returns 相交返回true，否则false
         */
        public static IntersectSegment(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, resultPoint: Vector2): boolean;
        /**
          * 判断两个线段是否相交
          * @param pt1 线段1起点
          * @param pt2 线段1终点
          * @param pt3 线段2起点
          * @param pt4 线段2终点
          * @param resultPoint 如果相交，则保存相交点坐标
          * @returns 相交返回true，否则false
         */
        public static IntersectSegmentPoint(pt1: Vector2, pt2: Vector2, pt3: Vector2, pt4: Vector2, resultPoint: Vector2): boolean;
        /**
          * 计算折线长度
          * @param points 折线点数组
          * @returns 长度米
         */
        public static Length(points: Vector2[]): number;
        /**
          * 使点数组闭合为多边形，即让最后一点与低一点相同。返回调整后的点数组
          * @param points 原始点数组
          * @returns 闭合的点数组
         */
        public static MakePolyClose(points: Vector2[]): Vector2[];
        /**
          * 判断两个二维点是否近似相等
          * @param pt1 点1
          * @param pt2 点2
          * @param tolerance 容差
          * @returns 如果在容差范围内返回true，否则false
         */
        public static NearEqual(pt1: Vector2, pt2: Vector2, tolerance?: number): boolean;
        /**
          * 
          * @param val1 
          * @param val2 
          * @param tolerance 
          * @returns 
         */
        public static NearEqualNumber(val1: number, val2: number, tolerance?: number): boolean;
        /**
          * 判断两个矩形是否近似相等
          * @param rect1 矩形1
          * @param rect2 矩形2
          * @param tolerance 容差
          * @returns 如果在容差范围内返回true，否则false
         */
        public static NearEqualRect(rect1: Rect, rect2: Rect, tolerance?: number): boolean;
        /**
          * 判断两个多边形是否有重合范围
          * @param polyPoints1 多边形1
          * @param polyPoints2 多边形2
          * @returns
         */
        public static Overlaps(polyPoints1: Vector2[], polyPoints2: Vector2[]): boolean;
        /**
          * 判断第一个矩形是否包含第二个
          * @param outerRect 外部矩形
          * @param innerRect 内部矩形
          * @returns
         */
        public static RectContains(outerRect: Rect, innerRect: Rect): boolean;
        /**
          * 判断两个矩形是否相交
          * @param rect1 矩形1
          * @param rect2 矩形2
          * @returns
         */
        public static RectIntersects(rect1: Rect, rect2: Rect): boolean;
        /**
          * 判断矩形是否与折线相交
          * @param rect 矩形
          * @param points 折线点数组
          * @returns
         */
        public static RectIntersectsLine(rect: Rect, points: Vector2[]): boolean;
        /**
          * 判断指定中心点半径的圆是否被矩形包含
          * @param rect 矩形
          * @param center 中心点
          * @param radius 半径
          * @returns
         */
        public static RectWithin(rect: Rect, center: Vector2, radius: number): boolean;
        /**
          * 两点之间的平方距离，及(x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)。用于快速的裁剪或者排序判断，不需要做开平方运算
          * @param x1
          * @param y1 
          * @param x2 
          * @param y2 
          * @returns 
         */
        public static SquareDistance(x1: number, y1: number, x2: number, y2: number): number;
        /**
          * 两点之间的平方距离
          * @param pt1
          * @param pt2 
          * @returns 
         */
        public static SquareDistancePoint(pt1: Vector2, pt2: Vector2): number;
    }

    /**
      * Math3 三维数学计算函数。提供长度、面积、角度、缓冲区、插值等计算。
      */
    class Math3 {
        /**
          * 计算两个向量围绕指定法向量之间所张的角度。逆时针为正
          * @param v1 向量1
          * @param v2 向量2
          * @param up 法向量
          * @returns 弧度值
         */
        public static Angle(v1: Vector3, v2: Vector3, up?: Vector3): number;
        /**
          * 计算三角网面积，相邻三个点依次代表一个三角形
          * @param triPoints 点数组
          * @returns 平方米
         */
        public static Area(triPoints: Vector3[]): number;
        /**
          * 计算缓冲区
          * @param points 中心线坐标
          * @param radius 半径米
          * @param isRoundJoin 是否圆角转弯
          * @param isRoundEnd 是否原型端头
          * @param isClosed 是否闭合
          * @returns 缓冲区多边形
         */
        public static Buffer(points: Vector3[], radius: number, isRoundJoin?: boolean, isRoundEnd?: boolean, isClosed?: boolean): Vector3[];
        /**
          * 计算一对三维坐标点之间的距离
          * @param x1 
          * @param y1 
          * @param z1 
          * @param x2 
          * @param y2 
          * @param z2 
          * @returns 距离米
         */
        public static Distance(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
        /**
          * 计算两条三维折线之间的最小距离
          * @param points1 
          * @param points2 
          * @returns 距离米
         */
        public static DistanceLineLine(points1: Vector3[], points2: Vector3[]): number;
        /**
          * 计算两条三维折线之间的最小距离，保存最短线段坐标
          * @param points1 
          * @param points2 
          * @param distLinePoints 保存最短线段坐标，RefValue指向结果顶点数组
          * @returns 距离米
         */
        public static DistanceLineLineAdvance(points1: Vector3[], points2: Vector3[], distLinePoints: RefValue<Array<Vector3>>): number;
        /**
          * 计算两点之间距离
          * @param pt1 
          * @param pt2 
          * @returns 距离米
         */
        public static DistancePoint(pt1: Vector3, pt2: Vector3): number;
        /**
          * 计算点到折线距离
          * @param point 
          * @param points 
          * @returns 距离米
         */
        public static DistancePointLine(point: Vector3, points: Vector3[]): number;
        /**
          * 计算点到折线距离，保存最近点坐标
          * @param point 
          * @param points 
          * @param distPoint 最近点坐标
          * @returns 距离米
         */
        public static DistancePointLineAdvance(point: Vector3, points: Vector3[], distPoint: Vector3): number;
        /**
          * 计算射线与三角形集合的交点
          * @param trianglePoints 点数组，相邻三个点代表一个三角形
          * @param pt1 射线起点
          * @param pt2 射线终点
          * @param ptResult 交点坐标
          * @returns 是否相交。相交的情况下，交点坐标值有效。
         */
        public static IntersectRay(trianglePoints: Vector3[], pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        /**
          * 计算射线与索引三角形集合的交点
          * @param trianglePoints 点数组
          * @param indices 索引数组，相邻三个索引指向的点代表一个三角形
          * @param pt1 射线起点
          * @param pt2 射线终点
          * @param ptResult 交点坐标
          * @returns 是否相交。相交的情况下，交点坐标值有效。
         */
        public static IntersectRayIndexed(trianglePoints: Array<Vector3>, indices: Array<number>, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        /**
          * 计算三维折线长度
          * @param points 
          * @returns 长度米
         */
        public static Length(points: Vector3[]): number;
        /**
          * 判断两个向量是否近似相等
          * @param pt1 点1
          * @param pt2 点2
          * @param tolerance 容差值
          * @returns 坐标差值在容差值范围内返回true
         */
        public static NearEqual(pt1: Vector3, pt2: Vector3, tolerance?: number): boolean;
        /**
          * 判断向量是否近似为零向量
          * @param pt 点
          * @param tolerance 容差值
          * @returns 坐标差值在容差值范围内返回true
         */
        public static NearZero(pt: Vector3, tolerance?: number): boolean;
        /**
          * 多边形转换为三角网
          * @param polyPoints 多边形外轮廓点数组
          * @param holes 洞
          * @returns 三角形点数组，每三点为一个三角形
         */
        public static PolygonToTriangles(polyPoints: Vector3[], holes?: Vector3[][]): Vector3[];
        /**
          * 计算样条插值曲线
          * @param controlPoints 控制点数组
          * @param insertCount 控制点之间插值点数目
          * @param isClosed 是否闭合
          * @returns 曲线点数组
         */
        public static Spline(controlPoints: Vector3[], insertCount: number, isClosed?: boolean): Vector3[];
    }

    /**
      * MathHelper 
      */
    class MathHelper {
        /**
          * 一个很小的浮点数，用于浮点数之间的近似相等
         */
        public static EPSILON: number;
        /**
          * 三个值的质心法插值
          * @param value1 
          * @param value2 
          * @param value3 
          * @param amount1 第一条边比例
          * @param amount2 第二条边比例
          * @returns 插值结果
         */
        public static Barycentric(value1: number, value2: number, value3: number, amount1: number, amount2: number): number;
        /**
          * CatmullRom曲线插值
          * @param value1 
          * @param value2 
          * @param value3 
          * @param value4 
          * @param amount 
          * @returns 
         */
        public static CatmullRom(value1: number, value2: number, value3: number, value4: number, amount: number): number;
        /**
          * 裁剪值到指定范围
          * @param value 
          * @param min 
          * @param max 
          * @returns 
         */
        public static Clamp(value: number, min: number, max: number): number;
        /**
          * 从浮点度数得到整数度数
          * @param degree 
          * @returns 
         */
        public static DegreeFromDegree(degree: number): number;
        /**
          * 从度分秒换算成浮点度数
          * @param degree 
          * @param minute 
          * @param second 
          * @returns 
         */
        public static DegreeFromDMS(degree: number, minute: number, second: number): number;
        /**
          * 计算两个值的一维距离
          * @param value1 值1
          * @param value2 值2
          * @returns 距离值
         */
        public static Distance(value1: number, value2: number): number;
        /**
          * 从浮点度得到浮点数秒
          * @param degree 
          * @returns 
         */
        public static FloatSecondFromDegree(degree: number): number;
        /**
          * Hermite曲线插值
          * @param value1 值1
          * @param tangent1 值1切线
          * @param value2 值2
          * @param tangent2 值2切线
          * @param amount 比例
          * @returns 插值结果
         */
        public static Hermite(value1: number, tangent1: number, value2: number, tangent2: number, amount: number): number;
        /**
          * 计算2的次幂
          * @param level 次数
          * @returns 结果
         */
        public static IntPowOfTwo(level: number): number;
        /**
          * 两值之间线性插值
          * @param value1 值1
          * @param value2 值2
          * @param amount 从值1开始的比例
          * @returns 插值结果
         */
        public static Lerp(value1: number, value2: number, amount: number): number;
        /**
          * 从浮点度得到整数分
          * @param degree 
          * @returns 整数分
         */
        public static MinuteFromDegree(degree: number): number;
        /**
          * 判断两个值是否近似相等
          * @param val1 值1
          * @param val2 值2
          * @param tolerance 容差
          * @returns 如果在容差范围内返回true，否则false
         */
        public static NearEqual(val1: number, val2: number, tolerance?: number): boolean;
        /**
          * 判断值是否近似为零
          * @param val 值
          * @param tolerance 容差
          * @returns 如果在容差范围内返回true，否则false
         */
        public static NearZero(val: number, tolerance?: number): boolean;
        /**
          * 从浮点度得到整数秒
          * @param degree 
          * @returns 整数秒
         */
        public static SecondFromDegree(degree: number): number;
        /**
          * 获取数字的正负符号
          * @param val 
          * @returns 正数返回1，负数返回-1，0返回0
         */
        public static Sign(val: number): number;
        /**
          * 弧度转为度
          * @param radians 
          * @returns 浮点数度
         */
        public static ToDegrees(radians: number): number;
        /**
          * 度转为弧度
          * @param degrees 
          * @returns 浮点数弧度
         */
        public static ToRadians(degrees: number): number;
        /**
          * 把弧度角度变换到0-2PI范围内
          * @param angle 弧度
          * @returns 调整后的弧度值
         */
        public static WrapAngle(angle: number): number;
    }

    class PolygonMath {
        public static Buffer(points: Vector2[], radius: number, isRoundJoin: boolean, isRoundEnd: boolean, isClosed: boolean): Vector2[];
        public static BufferPoint(center: Vector2, radius: number): Vector2[];
        public static ClipPolygon(polygonSrc: Vector2[], polygonClip: Vector2[]): Array<Vector2[]>;
        public static IsClockwise(points: Vector2[]): boolean;
        public static IsClockwise3(points: Vector3[]): boolean;
        public static PolygonToTriangle(srcPolyPoints: Vector2[], holes?: Vector2[][]): Vector2[];
        public static ToClockwise(points: Vector2[]): Vector2[];
        public static ToClockwise3(points: Vector3[]): Vector3[];
        public static ToCounterClockwise(points: Vector2[]): Vector2[];
        public static ToCounterClockwise3(points: Vector3[]): Vector3[];
    }

    /**
      * INoObject 有序号标示的对象接口
      */
    interface INoObject {
        /**
          * 数字序号
         */
        no: number;
    }

    class INoObjectComparer implements IComparer<INoObject>{
        public compare(x: INoObject, y: INoObject): number;
    }

    interface ICloneable<T> {
        clone(): T;
    }

    interface ICloneableNoObject extends INoObject {
        createFromClone(): any;
    }

    interface IObjectPropertyUI<TValue> {
        attatchObject(obj: TValue): void;
        reset(): void;
    }

    interface ICopyableNoObject<T> extends INoObject {
        copyFrom(src: T): void;
    }

    /**
      * INameObject 有名称标示的对象接口
      */
    interface INameObject {
        /**
          * 名称
         */
        name: string;
    }

    interface INameObjectBinder<T extends INameObject> {
        getItem(name: string): T;
    }

    /**
      * ImmutableNoObject 序号保持不变的对象
      */
    class ImmutableNoObject extends TObject implements IComparable<ImmutableNoObject>, INoObject {
        /**
          * 序号
         */
        public no: number;
        /**
          * 
          * @param other 
          * @returns 
         */
        public compareTo(other: ImmutableNoObject): number;
        /**
          * 空序号
         */
        public static EmptyNo: number;
    }

    /**
      * PickableObject 可以被选中的对象
      */
    class PickableObject extends ImmutableNoObject {
        /**
          * 是否允许选择
         */
        public isPickable: boolean;
        /**
          * 是否被选中
         */
        public isPicked: boolean;
        /**
          * 所属图层名称
         */
        public readonly layerName: string;
        /**
          * 
          * @param value 
         */
        protected onIsPickedChanged(value: boolean): void;
    }

    /**
      * NameObject 有名称标识的对象
      */
    class NameObject implements INameObject {
        /**
          * 名称
         */
        public name: string;
        /**
          * 构造函数
          * @param name 名称
         */
        constructor(name?: string);
        /**
          * 获取对象数组的名称数组
          * @param nameObjects 
          * @returns 
         */
        public static ToNames<T extends INameObject>(nameObjects: Array<T>): Array<string>;
    }

    class NameObjectList<T extends INameObject> implements IEnumerable<T>{
        public onAdd: Observable<T>;
        public onRemove: Observable<T>;
        public readonly length: number;
        public readonly names: Array<string>;
        public readonly objects: IEnumerable<T>;
        protected initFromList(objects: Array<T>): void;
        public add(obj: T): boolean;
        public clear(): void;
        public getAt(index: number): T;
        public getByName(name: string): T;
        public getEnumerator(): IEnumerator<T>;
        public indexFromName(name: string): number;
        public insertAt(index: number, obj: T): boolean;
        public remove(obj: T): void;
        public removeAt(index: number): void;
    }

    class NameObjectSet<T extends INameObject>{
        constructor(objs?: Array<T>);
        public readonly count: number;
        public readonly names: IEnumerable<string>;
        public readonly objects: IEnumerable<T>;
        public add(obj: T): boolean;
        public clear(): void;
        public contains(name: string): boolean;
        public getItem(name: string): T;
        public modify(name: string, obj: T): boolean;
        public remove(nameOrObj: string | T): boolean;
    }

    class ObjectGroupMapping<TGroup extends INoObject, TSub>{
        public addSubObject(groupName: string, groupObject: TGroup, subObject: TSub): void;
        public clear(): void;
        public containsGroup(groupName: string, groupObject: TGroup): boolean;
        public containsSub(groupName: string, subObject: TSub): boolean;
        public enumGroupObjectNos(groupName: string): Array<number>;
        public groupToSub(groupName: string, groupObject: TGroup): Array<TSub>;
        public removeGroupObject(groupName: string, groupObject: TGroup, deleteSubObject?: boolean): void;
        public removeSubObjects(subObjects: Array<TSub>): void;
        public subToGroup(groupName: string, subObject: TSub): TGroup;
    }

    class EarthMath2 {
        public static readonly EARTH_RADIUS: number;
        public static Angle(x1: number, y1: number, x2: number, y2: number): number;
        public static Area(points: Vector2[]): number;
        public static Buffer(points: Vector2[], radius: number, isRoundJoin?: boolean, isRoundEnd?: boolean, isClosed?: boolean): Vector2[];
        public static BufferPoint(center: Vector2, radius: number): Vector2[];
        public static BufferPoly(points: Vector2[], radius: number): Vector2[];
        public static Distance(x1: number, y1: number, x2: number, y2: number): number;
        public static DistancePoint(pt1: Vector2, pt2: Vector2): number;
        public static DistancePointLine(pt: Vector2, linePoints: Vector2[]): number;
        public static LatitudePerMeter(): number;
        public static Length(points: Vector2[]): number;
        public static LongitudePerMeter(latitudeDegree: number): number;
    }

    /**
      * EarthMath3 地球三维数学类，xz坐标为经纬度,y为海拔高度
      */
    class EarthMath3 {
        /**
          * 计算多边形
          * @param triPoints 
          * @returns 
         */
        public static Area(triPoints: Vector3[]): number;
        /**
          * 计算两点距离
          * @param x1 
          * @param y1 
          * @param z1 
          * @param x2 
          * @param y2 
          * @param z2 
          * @returns 
         */
        public static Distance(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
        /**
          * 计算折线间距离
          * @param points1 
          * @param points2 
          * @returns 距离米
         */
        public static DistanceLineLine(points1: Vector3[], points2: Vector3[]): number;
        /**
          * 计算折线间距离，保存最短线段坐标
          * @param points1 
          * @param points2 
          * @param distLinePoints RefValue指向结果端点数组
          * @returns 距离米
         */
        public static DistanceLineLineAdvance(points1: Vector3[], points2: Vector3[], distLinePoints: RefValue<Array<Vector3>>): number;
        /**
          * 计算两点间距离
          * @param pt1 
          * @param pt2 
          * @returns 距离米
         */
        public static DistancePoint(pt1: Vector3, pt2: Vector3): number;
        /**
          * 计算点到折线距离
          * @param point 
          * @param points 
          * @returns 距离米
         */
        public static DistancePointLine(point: Vector3, points: Vector3[]): number;
        /**
          * 计算点到折线距离，保存最近点坐标
          * @param point 
          * @param points 
          * @param resultPoint 最近点坐标
          * @returns 距离米
         */
        public static DistancePointLineAdvance(point: Vector3, points: Vector3[], resultPoint: Vector3): number;
        /**
          * 
          * @param originCenter 
          * @param earthPoint 
          * @returns 
         */
        public static EarthToLocal(originCenter: Vector3, earthPoint: Vector3): Vector3;
        /**
          * 
          * @param originCenter 
          * @param earthPoint 
          * @param result 
         */
        public static EarthToLocalToRef(originCenter: Vector3, earthPoint: Vector3, result: Vector3): void;
        /**
          * 
          * @param earthPt 
          * @returns 
         */
        public static EarthToWorld(earthPt: Vector3): Vector3;
        /**
          * 
          * @param points 
          * @returns 
         */
        public static EarthToWorldArray(points: Vector3[]): Vector3[];
        /**
          * 
          * @param x 
          * @param y 
          * @param z 
          * @returns 
         */
        public static EarthToWorldDouble(x: number, y: number, z: number): Vector3;
        /**
          * 
          * @param x 
          * @param y 
          * @param z 
          * @param result 
         */
        public static EarthToWorldDoubleRef(x: number, y: number, z: number, result: Vector3): void;
        /**
          * 
          * @param earthPt 
          * @param result 
         */
        public static EarthToWorldToRef(earthPt: Vector3, result: Vector3): void;
        /**
          * 
          * @param pos 
          * @returns 
         */
        public static GetUpVector(pos: Vector3): Vector3;
        /**
          * 
         */
        public static GetWorldRadius(): number;
        /**
          * 计算折线长度
          * @param points 
          * @returns 长度米
         */
        public static Length(points: Vector3[]): number;
        /**
          * 
          * @param devicePt 
          * @returns 
         */
        public static WorldToEarth(devicePt: Vector3): Vector3;
        /**
          * 
          * @param points 
          * @returns 
         */
        public static WorldToEarthArray(points: Vector3[]): Vector3[];
        /**
          * 
          * @param x 
          * @param y 
          * @param z 
          * @returns 
         */
        public static WorldToEarthDouble(x: number, y: number, z: number): Vector3;
        /**
          * 
          * @param x 
          * @param y 
          * @param z 
          * @param result 
         */
        public static WorldToEarthDoubleRef(x: number, y: number, z: number, result: Vector3): void;
        /**
          * 
          * @param devicePt 
          * @param result 
         */
        public static WorldToEarthToRef(devicePt: Vector3, result: Vector3): void;
    }

    /**
      * GeoExtent 表示经纬度坐标的矩形范围
      */
    class GeoExtent {
        /**
          * 经度范围为-180至180，纬度-90至90
          * @param west 西部精度
          * @param south 南部纬度
          * @param east 东部精度
          * @param north 北部纬度
         */
        constructor(west?, south?, east?, north?);
        /**
          * 中心点
         */
        public readonly center: Vector2;
        /**
          * 纬度高度
         */
        public readonly height: number;
        /**
          * 经度宽度
         */
        public readonly width: number;
        /**
          * 复制
          * @param this 
          * @returns 
         */
        public clone(this): GeoExtent;
        /**
          * 判读与给定范围是否有相交
          * @param other 
          * @returns 
         */
        public intersects(other: GeoExtent): boolean;
    }

    /**
      * PointOnLine 点在折线上的信息类。用于比较高级的折线相关计算。
      */
    class PointOnLine {
        /**
          * 所在线段起点索引号
         */
        public index: number;
        /**
          * 所在线段起点坐标
         */
        public point: Vector2;
        /**
          * 位于所在线段起点与终点之间的比例
         */
        public ratio: number;
        /**
          * 
          * @param index 
          * @param ratio 
          * @param point 
          * @returns 
         */
        public static Create(index: number, ratio: number, point: Vector2): PointOnLine;
    }

    class PointOnLine_Comparer implements IComparer<PointOnLine>{
        public compare(x: PointOnLine, y: PointOnLine): number;
    }

    class Shape2 {
        /**
          * 
          * @param centerPoints 
          * @param tailWidth 
          * @param headWidth 
          * @returns 
         */
        public static Arrow(centerPoints: Vector2[], tailWidth: number, headWidth: number): Vector2[];
        /**
          * 
          * @param controlPoints 
          * @param count 
          * @returns 
         */
        public static Bezeir(controlPoints: Vector2[], count: number): Vector2[];
        /**
          * 
          * @param radius 
          * @param roundDivCount 
          * @returns 
         */
        public static Circle(radius: number, roundDivCount?: number): Vector2[];
        /**
          * 
          * @param rect 
          * @returns 
         */
        public static Rectangle(rect: Rect): Vector2[];
        /**
          * 
          * @param controlPoints 
          * @param divCount 
          * @param isClosed 
          * @returns 
         */
        public static Spline(controlPoints: Vector2[], divCount?: number, isClosed?: boolean): Vector2[];
    }

    class QuadtreeIndex<T extends IQuadTreeIndexable>{
        constructor(worldMin?: Vector2, worldMax?: Vector2, maxBlockCapacity?: number, maxDepth?: number);
        public readonly count: number;
        public add(entry: T): void;
        public addArray(entries: Array<T>): void;
        public select(range: Rect): Array<T>;
    }

    class DynamicQuadTreeIndex<T extends IQuadTreeIndexable> extends QuadtreeIndex<T>{
        constructor(maxBlockCapacity?: number);
        public add(entry: T): void;
        public addArray(entries: Array<T>): void;
        public select(range: Rect): Array<T>;
    }

    interface IQuadTreeIndexable {
        bounds: Rect;
    }

    class SphereIndex<T>{
        constructor(minRadius: number);
        public readonly count: number;
        public addToIndex(obj: T, pos: Vector3, objectRadius: number): boolean;
        public clear(): void;
        public init(minRadius: number): void;
        public search(pos: Vector3, radius: number, results: RefValue<Array<T>>): boolean;
    }

    interface IBoundsBinder {
        bounds: IBox;
        count: number;
        triBounds(no: number): IBox;
    }

    class BoundsBinder implements IBoundsBinder {
        public readonly bounds: IBox;
        public readonly count: number;
        public readonly maxArray: Float32Array;
        public readonly minArray: Float32Array;
        public triBounds(no: number): IBox;
        public static Create(bounds: IBox, minArray: Float32Array, maxArray: Float32Array): BoundsBinder;
        public static CreateFromPoints(triPoints: Vector3Array): BoundsBinder;
    }

    class OctreeBlockSplitInfo {
        public binder: IBoundsBinder;
        public total: number;
        public capacity: number;
        public maxDepth: number;
        constructor(binder: IBoundsBinder, total: number, capacity: number, maxDepth: number);
    }

    class OctreeBlock {
        public min: IVector3;
        public max: IVector3;
        public depth: number;
        public entries: Array<number>;
        public subs: Array<OctreeBlock>;
        public count: number;
        constructor(min: IVector3, max: IVector3, depth: number, entries?: Array<number>, subs?: Array<OctreeBlock>, count?: number);
        public no: number;
        public addEntries(info: OctreeBlockSplitInfo, entries: Array<number>): void;
        public addEntry(info: OctreeBlockSplitInfo, entry: number): void;
        public enumSubBlocks(result: Array<OctreeBlock>): void;
        public select(binder: IBoundsBinder, selectCondition: IOctreeSelector, result: Array<number>): void;
    }

    interface IOctreeSelector {
        intersects(min: IVector3, max: IVector3);
        intersectsEntry(binder: IBoundsBinder, no: number): boolean;
    }

    interface IOctreeIndex {
        boundingBox: IBox;
        select(selectCondition: IOctreeSelector): Array<number>;
    }

    class OctreeIndex implements IOctreeIndex {
        public readonly boundingBox: IBox;
        public readonly count: number;
        public readonly root: OctreeBlock;
        public select(selectCondition: IOctreeSelector): Array<number>;
        public static Create(triPoints: Vector3Array, capacity?: number, maxDepth?: number): IOctreeIndex;
    }

    class QueryOctreeIndexData {
        public bounds: Float32Array;
        public addrs: Int32Array;
        public subs: Int32Array;
        public entries: Int32Array;
        public binderMin: Float32Array;
        public binderMax: Float32Array;
        public binderBoundsArray: Float32Array;
        public triPointFloats: Float32Array;
        constructor(bounds: Float32Array, addrs: Int32Array, subs: Int32Array, entries: Int32Array, binderMin: Float32Array, binderMax: Float32Array, binderBoundsArray: Float32Array, triPointFloats: Float32Array);
    }

    class QueryOctreeIndex implements IOctreeIndex {
        public binder: IBoundsBinder;
        public bounds: Float32Array;
        public addrs: Int32Array;
        public subs: Int32Array;
        public entries: Int32Array;
        constructor(binder: IBoundsBinder, bounds: Float32Array, addrs: Int32Array, subs: Int32Array, entries: Int32Array);
        public readonly boundingBox: IBox;
        public select(selectCondition: IOctreeSelector): Array<number>;
        public static Create(triPoints: Vector3Array, capacity?: number, maxDepth?: number): QueryOctreeIndex;
        public static CreateFromBlock(binder: BoundsBinder, root: OctreeBlock): QueryOctreeIndex;
    }

    class OctreeRaySelector implements IOctreeSelector {
        constructor(ray: Ray);
        public intersects(min: IVector3, max: IVector3): boolean;
        public intersectsEntry(binder: IBoundsBinder, no: number): boolean;
    }

    class OctreePlaneSelector implements IOctreeSelector {
        constructor(plane: Plane);
        public intersects(min: IVector3, max: IVector3): boolean;
        public intersectsEntry(binder: IBoundsBinder, no: number): boolean;
    }

    class OctreeBoxSelector implements IOctreeSelector {
        constructor(box: IBox);
        public intersects(min: IVector3, max: IVector3): boolean;
        public intersectsEntry(binder: IBoundsBinder, no: number): boolean;
    }

    class TriangleIndexBase {
        protected intersectsRayTriangles(ray: Ray, triPoints: Array<Vector3>): Vector3;
        public clampLine(surfacePt1: Vector3, surfacePt2: Vector3, upVector: Vector3, nearPointDis: number): Array<Vector3>;
        public intersectsRay(ray: Ray): Vector3;
        public selectByBox(box: Box): Array<Vector3>;
        public selectByPlane(plane: Plane): Array<Vector3>;
        public selectByRay(ray: Ray): Array<Vector3>;
    }

    class MeshTriangleIndex extends TriangleIndexBase {
        constructor(triPoints: Vector3Array);
        public readonly triPoints: Vector3Array;
        public clampPolygon(clipPoints: Vector3[]): Vector3[];
        public clipOneTriangle(tri1: Vector3, tri2: Vector3, tri3: Vector3, clipPointsMap: Vector2[], resultPoints3d: RefValue<Array<Vector3[]>>): boolean;
        public intersectsWithTriangle(tri1: Vector3, tri2: Vector3, tri3: Vector3, clipPoints: Vector3[], intersectSeqCount: RefValue<number>, intersectionPoints: RefValue<Array<Vector3>>): boolean;
        public isBoundingBoxIntersects(ray: Ray): boolean;
        public selectByBox(box: IBox): Array<Vector3>;
        public selectByPlane(plane: Plane): Array<Vector3>;
        public selectByRay(ray: Ray, twoDirection?: boolean): Array<Vector3>;
        public selectTriNosByBox(box: IBox): Array<number>;
        public selectTriNosByPlane(plane: Plane): Array<number>;
        public selectTriNosByRay(ray: Ray): Array<number>;
    }

    interface IDynOctreeIndexable {
        bounds: IBox
    }

    interface IDynOctreeSelector<T extends IDynOctreeIndexable> {
        intersects(bounds: IBox): boolean;
    }

    interface IDynOctreeBlock<T extends IDynOctreeIndexable> {
        count: number;
        readonly bounds: IBox;
        readonly depth: number;
        readonly entries: Array<T>;
        subs: Array<IDynOctreeBlock<T>>;
    }

    class DynOctreeBlock<T extends IDynOctreeIndexable> implements IDynOctreeBlock<T>{
        public bounds: IBox;
        public depth: number;
        public entries: Array<T>;
        public subs: Array<IDynOctreeBlock<T>>;
        public count: number;
        constructor(bounds: IBox, depth: number, entries: Array<T>, subs: Array<IDynOctreeBlock<T>>, count?: number);
    }

    class DynOctreeBlockSplitInfo {
        public totalSubCount: number;
        public capacity: number;
        public maxDepth: number;
        constructor(totalSubCount: number, capacity: number, maxDepth: number);
    }

    class DynOctreeIndex<T extends IDynOctreeIndexable>{
        public readonly count: number;
        public readonly root: DynOctreeBlock<T>;
        public readonly splitInfo: DynOctreeBlockSplitInfo;
        public add(entries: Array<T>): void;
        public select(selectCondition: IDynOctreeSelector<T>): Array<T>;
        public static CreateForBuild<T extends IDynOctreeIndexable>(min: IVector3, max: IVector3, capacity?: number, maxDepth?: number): DynOctreeIndex<T>;
        public static CreateForQuery<T extends IDynOctreeIndexable>(root: IDynOctreeBlock<T>): DynOctreeIndex<T>;
    }

    class DynOctreeRaySelector<T extends IDynOctreeIndexable> implements IDynOctreeSelector<T>{
        constructor(ray: Ray);
        public intersects(bounds: IBox): boolean;
    }

    class DynOctreePlaneSelector<T extends IDynOctreeIndexable> implements IDynOctreeSelector<T>{
        constructor(plane: Plane);
        public intersects(bounds: IBox): boolean;
    }

    class DynOctreeBoxSelector<T extends IDynOctreeIndexable> implements IDynOctreeSelector<T>{
        constructor(box: IBox);
        public intersects(bounds: IBox): boolean;
    }

    interface IClipRegion2 {
        inRegion(rect: Rect): boolean;
    }

    class RectClipRegion implements IClipRegion2 {
        public bounds: Rect;
        constructor(bounds: Rect);
        public inRegion(rect: Rect): boolean;
    }

    interface IStorageRoot {
        isReadOnly: boolean;
        clear(): void;
        commit(): void;
    }

    interface ISimpleStorage extends IStorageRoot {
        contains(dataName: string): boolean;
        enumDatas(): Array<string>;
        readData(dataName: string): Uint8Array;
        remove(dataName: string): boolean;
        rename(oldName: string, newName: string): boolean;
        writeData(dataName: string, dataBuf: Uint8Array): boolean;
    }

    interface IStorage extends ISimpleStorage, IStorageRoot {
        enumStorages(): Array<string>;
        openStorage(name: string, autoCreate: boolean): IStorage;
    }

    interface IQuadtreeStorage extends IStorageRoot {
        readNode(level: number, xIndex: number, yIndex: number): Uint8Array;
        removeNode(level: number, xIndex: number, yIndex: number): boolean;
        writeNode(level: number, xIndex: number, yIndex: number, nodeData: Uint8Array): boolean;
    }

    interface ISimpleStoragePersist {
        load(simpleStorage: ISimpleStorage): void;
        save(simpleStorage: ISimpleStorage): void;
    }

    interface IObjectLoader<TKey, TValue> {
        loadObject(key: TKey): TValue;
        releaseObject(key: TKey, obj: TValue): void;
    }

    interface IObjectCache<TKey, TValue> {
        count: number;
        accessObject(key: TKey, autoLoad: boolean): TValue;
        addObject(key: TKey, obj: TValue): boolean;
        clear(): void;
        collectGabage(): void;
        contains(key: TKey): boolean;
        removeObject(key: TKey): boolean;
    }

    enum ObjectCacheKeyType {
        Any = 0,
        Number = 1,
        String = 2
    }

    class ObjectCache<TKey, TValue> implements IObjectCache<TKey, TValue>{
        constructor(loader: IObjectLoader<TKey, TValue>, keyType?: ObjectCacheKeyType);
        public capacity: number;
        public readonly count: number;
        public readonly values: Array<TValue>;
        protected commitCollectGabage(): void;
        public accessObject(key: TKey, autoLoad?: boolean): TValue;
        public addObject(key: TKey, obj: TValue): boolean;
        public clear(): void;
        public collectGabage(): void;
        public contains(key: TKey): boolean;
        public disEnableTimeOutClear(): void;
        public enableTimeOutClear(timeoutMs?: number): void;
        public removeObject(key: TKey): boolean;
    }

    interface IObjectCacheSize {
        cacheBytes: number;
    }

    class SizeBasedObjectCache<TValue extends IObjectCacheSize> extends ObjectCache<number, TValue> implements IObjectCache<number, TValue>, INoObject {
        constructor(loader: IObjectLoader<number, TValue>);
        public no: number;
        protected commitCollectGabage(): void;
    }

    /**
      * Layer 所有图层对象的基类
      */
    class Layer extends NameObject {
        /**
          * 图层透明度 0-1.0
         */
        public alpha: number;
        /**
          * 是否动画模式。如果某一可见图层设置为true，则系统会保持连续重画状态。
         */
        public isAnimation: boolean;
        /**
          * 图层中对象是否永远保持可见。忽略所有的裁剪流程(Frustum, LOD等)
         */
        public isObjectAlwaysVisible: boolean;
        /**
          * 是否可选择
         */
        public isPickable: boolean;
        /**
          * 是否可见
         */
        public isVisible: boolean;
        /**
          * 图层完成绘制之后发出消息
         */
        public readonly onAfterRender: Observable<Layer>;
        /**
          * 图层开始绘制之前发出消息
         */
        public readonly onBeforeRender: Observable<Layer>;
        /**
          * 
         */
        protected onSetVisible(): void;
        /**
          * 内部可继承函数。在绘制完成之后被调用
         */
        public notifyOnAfterRender(): void;
        /**
          * 内部可继承函数。在绘制开始之前被调用
         */
        public notifyOnBeforeRender(): void;
    }

    /**
      * LayerCollection 图层集合对象
      */
    class LayerCollection<T extends Layer> extends NameObjectList<T>{
        /**
          * 是否可见。如果false，则所有图层不可见。如果true，使用各图层自己的设置
         */
        public isVisible: boolean;
        /**
          * 是否包含动画模式图层
         */
        public hasAnimation(): boolean;
    }

    enum OperMouseMsgType {
        None,
        LeftButtonDown = 10,
        LeftButtonUp,
        LeftButtonDoubleClick,
        RightButtonDown = 20,
        RightButtonUp,
        RightButtonDoubleClick,
        MouseMove = 30,
        MouseWheel = 40
    }

    class OperMessageCommon {
        public hasButtonDown: boolean;
        public isKeyDown: boolean;
        public keyCode: number;
        public keyModifiers: number;
        public keyParam: number;
        public mouseMsg: OperMouseMsgType;
        public mouseParam: number;
        public point: Vector2;
        public pointDevice: Vector2;
        public static CreateKey(isKeyDown: boolean, keyCode: number, keyParam: number): OperMessageCommon;
        public static CreateMouse(msgType: OperMouseMsgType, nFlags: number, ptDevice: Vector2): OperMessageCommon;
    }

    class OperMouseMessage {
        public point: Vector2;
        public pointDevice: Vector2;
        public modifier: number;
        public mouseParam: number;
        constructor(point: Vector2, pointDevice: Vector2, modifier: number, mouseParam: number);
        public keyModifiers: number;
        public isModifierKeyDown(key: ModifierKeys): boolean;
    }

    class OperKeyMessage {
        public keyCode: number;
        public isKeyDown: boolean;
        public modifier: number;
        public keyParam: number;
        constructor(keyCode: number, isKeyDown: boolean, modifier: number, keyParam: number);
        public isModifierKeyDown(key: ModifierKeys): boolean;
    }

    class OperKeybord {
        public static GetModifierKeys(): number;
    }

    class OperationBase {
        public cursor: Cursor;
        public fatherOper: OperationBase;
        public readonly isTaskFinish: boolean;
        public readonly isTaskStarted: boolean;
        public readonly topfatherOper: OperationBase;
        public readonly topSonOper: OperationBase;
        public sonOper: OperationBase;
        protected cancelTask(): void;
        protected completeTask(): void;
        protected failTask(): void;
        protected notifyFather(): void;
        protected notifyFatherDraw(): void;
        protected onKeyDown(keyParam: OperKeyMessage): boolean;
        protected onKeyUp(keyParam: OperKeyMessage): boolean;
        protected onLeftButtonDblClk(mouseMessage: OperMouseMessage): boolean;
        protected onLeftButtonDown(mouseMessage: OperMouseMessage): boolean;
        protected onLeftButtonUp(mouseMessage: OperMouseMessage): boolean;
        protected onMouseMove(mouseMessage: OperMouseMessage): boolean;
        protected onMouseWheel(mouseMessage: OperMouseMessage): boolean;
        protected onRightButtonDblClk(mouseMessage: OperMouseMessage): boolean;
        protected onRightButtonDown(mouseMessage: OperMouseMessage): boolean;
        protected onRightButtonUp(mouseMessage: OperMouseMessage): boolean;
        protected onSonOperCancelTask(): void;
        protected onSonOperCompleteTask(): void;
        protected onSonOperDraw(): void;
        protected onSonOperFailTask(): void;
        protected onSonOperNotify(): void;
        protected onSonOperStartTask(): void;
        protected startTask(): void;
        public handleMessage(messageUnit: OperMessageCommon): boolean;
        public onDraw(): void;
        public resetTask(): void;
    }

    interface IAsyncRenderable {
        drawContents(param: AsyncRenderableParam): boolean;
        recycle(param: AsyncRenderableParam): boolean;
        registerDataTask(param: AsyncRenderableParam): void;
        updateContents(param: AsyncRenderableParam): boolean;
    }

    class AsyncRenderableParam {
        public lodParam: AsyncRenderableParam_LodParams;
        public timer: ProcessTimer;
    }

    class AsyncRenderableParam_LodParams {
        constructor(meshLod: number);
        public globalEyePos: Vector3;
        public localEyePos: Vector3;
        public lod: number;
        public objectCenter: Vector3;
        public static CreatePoint(lod: number, localEyePos: Vector3, globalEyePos: Vector3): AsyncRenderableParam_LodParams;
    }

    interface IRenderState {
        alpha: number;
        isCulling: boolean;
        isEnableColorWrite: boolean;
        isEnableDepthBuffer: boolean;
        isEnableDepthWrite: boolean;
        isReceiveShadow: boolean;
        isUseLight: boolean;
    }

    class RenderStateBase implements IRenderState {
        public alpha: number;
        public isCulling: boolean;
        public isEnableColorWrite: boolean;
        public isEnableDepthBuffer: boolean;
        public isEnableDepthWrite: boolean;
        public isReceiveShadow: boolean;
        public isUseLight: boolean;
    }

    interface IStencilHole {
        isVisible: boolean;
        dispose(): void;
    }

    interface IStencilHoleManager {
        addHole(name: string, polyPoints: Vector3[], triMeshPoints: Vector3[]): IStencilHole;
        clearHoles(): void;
        getHoles(name: string): Array<IStencilHole>;
        hitOnHole(x: number, y: number): boolean;
    }

    interface IRenderObservable<T> {
        readonly onAfterRender: Observable<T>;
        readonly onBeforeRender: Observable<T>;
    }

    class RenderObservableBase<T> implements IRenderObservable<T>{
        public readonly onAfterRender: Observable<T>;
        public readonly onBeforeRender: Observable<T>;
        public notifyOnAfterRender(eventData: T): void;
        public notifyOnBeforeRender(eventData: T): void;
    }

    class AsyncDataReader {
        constructor(isArrayBuffer: boolean, tryParseJsonBytes: boolean);
        public read(url: string): Promise<any>;
    }

    class AsyncWebStreamResultPackage {
        public count: number;
        public datas: Array<Uint8Array>;
        public processedData: any;
        constructor(count: number, datas: Array<Uint8Array>, processedData?: any);
    }

    class AsyncWebStreamTask {
        public taskName: string;
        public url: string;
        public callback: (taskName: string, url: string, result: AsyncWebStreamResultType) => void;
        public tag: string;
        public type: AsyncDataLoadType;
        constructor(taskName: string, url: string, callback: (taskName: string, url: string, result: AsyncWebStreamResultType) => void, tag: string, type: AsyncDataLoadType);
    }

    class AsyncWebStream {
        public static IsAllowUseCache: boolean;
        public static MaxLoading: number;
        public static AddTaskBatch(tasks: Array<AsyncWebStreamTask>): void;
        public static GetLoadingCount(): number;
        public static IsLoading(url: string): boolean;
        public static ReadDirect(url: string): Promise<any>;
        public static ReadDirectUint8Array(url: string): Promise<Uint8Array>;
    }

    class OctreeIndexCreateResult {
        public index: IOctreeIndex;
        public triPointFloats: Float32Array;
        constructor(index: IOctreeIndex, triPointFloats: Float32Array);
    }

    class AsyncProcess {
        public static CreateTriangleIndex(vs: Vector3Array): Promise<OctreeIndexCreateResult>;
        public static ProcessTileMesh(processData: TileMeshProcessData): Promise<TileMeshProcessResultData>;
    }

    class CacheTask<TKey>{
        constructor(key: TKey, priority: number);
        public key: TKey;
        public priority: number;
    }

    enum AsyncDataLoadType {
        ArrayBuffer = 0,
        ArrayBufferOrPackage = 1,
        TileMesh = 10,
        Image = 100
    }

    enum AsyncDataPriority {
        Common = 0,
        Low = -10,
        System = 10
    }

    class AsyncDataLoadResult {
        public url: string;
        public data: any;
        public isBadUrl: boolean;
        constructor(url: string, data: any, isBadUrl: boolean);
    }

    class DataPrepareState {
        public isFinish: boolean;
        constructor(isFinish?: boolean);
    }

    class AsyncRenderContext {
        public static CanLoadData(): boolean;
        public static CanLoadImage(): boolean;
        public static CommitLoadTasks(timer: ProcessTimer): void;
        public static CommitPrepareTasks(timer: ProcessTimer): void;
        public static IsLoading(url: string): boolean;
        public static LoadData(type: AsyncDataLoadType, url: string, tag?: string, priority?: AsyncDataPriority): Promise<AsyncDataLoadResult>;
        public static PrepareData(data: any, callback: (data, finishState: DataPrepareState) => void, priority: AsyncDataPriority): PromiseDelegate;
    }

    /**
      * HorizontalAlignment 水平对齐常量
      */
    enum HorizontalAlignment {
        /**
          * 
         */
        Left = 0,
        /**
          * 
         */
        Center,
        /**
          * 
         */
        Right,
        /**
          * 
         */
        Stretch
    }

    /**
      * VerticalAlignment 竖直对齐常量
      */
    enum VerticalAlignment {
        /**
          * 
         */
        Top = 0,
        /**
          * 
         */
        Center,
        /**
          * 
         */
        Bottom,
        /**
          * 
         */
        Stretch
    }

    /**
      * Visibility 界面控件可见性常量
      */
    enum Visibility {
        /**
          * 
         */
        Visible,
        /**
          * 
         */
        Hidden,
        /**
          * 
         */
        Collapsed
    }

    enum Stretch {
        None,
        Fill,
        Uniform,
        UniformToFill
    }

    enum ModifierKeys {
        None = 0,
        Alt = 1,
        Control = 2,
        Shift = 4,
        Windows = 8
    }

    class Thickness {
        public left: number;
        public top: number;
        public right: number;
        public bottom: number;
        constructor(left?: number, top?: number, right?: number, bottom?: number);
        public clone(): Thickness;
    }

    class GridLength {
        constructor(value?: number);
        public value: number;
        public static readonly UNLIMIT: number;
    }

    /**
      * Brush 笔刷祖先类
      */
    class Brush {
        /**
          * 颜色
         */
        public color: Color;
    }

    /**
      * SolidColorBrush 实心颜色刷子
      */
    class SolidColorBrush extends Brush {
        /**
          * 
          * @param color 
         */
        constructor(color: Color);
    }

    enum Cursor {
        Default,
        Arrow,
        Cross,
        Hand,
        Help,
        IBeam,
        None,
        SizeAll,
        Wait
    }

    class EventArgs {
    }

    class TypedEventArgs<T> extends EventArgs {
        constructor(t: T);
        public result: T;
    }

    class OperationReturn {
        constructor(suc?: boolean, errorString?: string);
        public errorString: string;
        public success: boolean;
    }

    class OperationEventArgs extends EventArgs {
        constructor(success: boolean, errStrng?: string);
        public errString: string;
        public success: boolean;
    }

    class RoutedEventArgs extends EventArgs {
        public handled: boolean;
        public source: any;
    }

    class Keyboard {
        public static readonly Modifiers: ModifierKeys;
        public static UpdateModifierKey(evt: any): void;
    }

    class CancelEventArgs extends EventArgs {
        public cancel: boolean;
    }

    class SizeChangedEventArgs extends RoutedEventArgs {
        public newSize: Size;
        public previousSize: Size;
    }

    class SelectionChangedEventArgs extends RoutedEventArgs {
        constructor(removedItems: any[], addedItems: any[]);
        public addedItems: any[];
        public removedItems: any[];
    }

    class MouseEventArgs extends RoutedEventArgs {
        public point: Vector2;
        constructor(point: Vector2);
    }

    class KeyEventArgs extends RoutedEventArgs {
        constructor(key: number);
        public key: number;
    }

    class MouseButtonEventArgs extends MouseEventArgs {
        constructor(point: Vector2);
        public clickCount: number;
    }

    class MouseWheelEventArgs extends MouseEventArgs {
        constructor(point: Vector2);
        public delta: number;
    }

    /**
      * UIElement 
      * 所有控件对象的基类。由于很多事件和属性是与C#的WPF移植代码兼容的，为了效率起见，键盘和鼠标事件并不保证实时发出。
      * 建议在js编程时，直接通过htmlUI属性访问关联的html原生对象，获取属性，设置style，监听消息等。
      */
    class UIElement {
        /**
          * 
          * @param htmlUI 
          * @param fatherUI 
         */
        constructor(htmlUI: string | HTMLElement, fatherUI: UIElement);
        /**
          * 
         */
        public onClick: Observable<RoutedEventArgs>;
        /**
          * 
         */
        public onMouseLeftButtonDown: Observable<MouseButtonEventArgs>;
        /**
          * 
         */
        public onMouseLeftButtonUp: Observable<MouseButtonEventArgs>;
        /**
          * 
         */
        public onMouseMove: Observable<MouseEventArgs>;
        /**
          * 
         */
        public onMouseRightButtonDown: Observable<MouseButtonEventArgs>;
        /**
          * 
         */
        public onMouseRightButtonUp: Observable<MouseButtonEventArgs>;
        /**
          * 
         */
        public onMouseWheel: Observable<MouseWheelEventArgs>;
        /**
          * 
         */
        public onSizeChanged: Observable<SizeChangedEventArgs>;
        /**
          * 
         */
        protected readonly children: Array<UIElement>;
        /**
          * 
         */
        protected readonly defineHeight: number;
        /**
          * 
         */
        protected readonly defineWidth: number;
        /**
          * 
         */
        protected readonly hasBackground: boolean;
        /**
          * 
         */
        public actualHeight: number;
        /**
          * 
         */
        public actualWidth: number;
        /**
          * 
         */
        public background: string;
        /**
          * 
         */
        public fill: string;
        /**
          * 
         */
        public fontFamily: string;
        /**
          * 
         */
        public fontSize: number;
        /**
          * 
         */
        public foreground: string;
        /**
          * 
         */
        public height: number;
        /**
          * 
         */
        public horizontalAlignment: HorizontalAlignment;
        /**
          * 
         */
        public htmlCursor: Cursor;
        /**
          * 
         */
        public isBoundsFixed: boolean;
        /**
          * 
         */
        public isEnabled: boolean;
        /**
          * 
         */
        public isHitTestVisible: boolean;
        /**
          * 
         */
        public isTabStop: boolean;
        /**
          * 
         */
        public margin: Thickness;
        /**
          * 
         */
        public name: string;
        /**
          * 
         */
        public opacity: number;
        /**
          * 
         */
        public readonly bounds: Rect;
        /**
          * 
         */
        public readonly defineBounds: Rect;
        /**
          * 控件对应的html对象，通过该对象可以获取各种标准属性，添加原生javascript事件。建议采用这种方法添加键盘，鼠标等基本事件
         */
        public readonly htmlUI: HTMLElement;
        /**
          * 
         */
        public readonly parentUI: UIElement;
        /**
          * 
         */
        public readonly uiid: string;
        /**
          * 
         */
        public stroke: string;
        /**
          * 
         */
        public tag: any;
        /**
          * 
         */
        public tooltip: string;
        /**
          * 
         */
        public verticalAlignment: VerticalAlignment;
        /**
          * 
         */
        public visibility: Visibility;
        /**
          * 
         */
        public width: number;
        /**
          * 
          * @param child 
         */
        protected appendChild(child: UIElement): void;
        /**
          * 
         */
        protected calcBoundsFromParent(): Rect;
        /**
          * 
         */
        protected createSystemUI(): HTMLElement;
        /**
          * 
          * @param elemType 
          * @param className 
          * @returns 
         */
        protected createSystemUiWithIdInner(elemType: string, className?: string): any;
        /**
          * @param windowSize
          * @returns
         */
        protected getBoundsFromUI(windowSize?: Rect): Rect;
        /**
          * 
         */
        protected getChildrenDefineBoundary(): Size;
        /**
          * 
         */
        protected getFontSize(): number;
        /**
          * 
         */
        protected getFontSizePixel(): string;
        /**
          * 
         */
        protected getTooltipUiid(): string;
        /**
          * 
         */
        protected registerClickMessage(): void;
        /**
          * 
          * @param ui 
         */
        protected registerClickMessageHelper(ui: any): void;
        /**
          * 
         */
        protected registerMouseMessage(): void;
        /**
          * 
          * @param dis 
         */
        protected setDisplay(dis: boolean): void;
        /**
          * 
          * @param value 
         */
        protected setHeightInner(value: number): void;
        /**
          * 
          * @param value 
         */
        protected setHtmlHeight(value: number): void;
        /**
          * 
          * @param value 
         */
        protected setHtmlWidth(value: number): void;
        /**
          * 
          * @param value 
         */
        protected setWidthInner(value: number): void;
        /**
          * 
          * @param value 
          * @returns 
         */
        protected toPixel(value: number): string;
        /**
          * 
          * @param child 
          * @returns 
         */
        public calcChildBounds(child: UIElement): Rect;
        /**
          * 
          * @param child 
         */
        public onChildResize(child: UIElement): void;
        /**
          * 
          * @param left 
          * @param top 
         */
        public setLeftTop(left: number, top: number): void;
        /**
          * 
          * @param left 
          * @param top 
          * @param width 
          * @param height 
          * @param horiAlign 
          * @param vertAlign 
         */
        public setPosition(left: number, top: number, width: number, height: number, horiAlign?, vertAlign?: VerticalAlignment): void;
        /**
          * 
         */
        public updateLayout(): void;
        /**
          * 
         */
        public static DefaultFontSize: number;
    }

    class FrameworkElement extends UIElement {
        constructor(htmlUI?: string | HTMLElement, fatherUI?: UIElement);
        public cursor: Cursor;
        protected createSystemUI(): HTMLElement;
        protected getTopMostUI(): UIElement;
    }

    class RectangleElement extends UIElement {
        constructor(htmlUI?: string | HTMLElement, fatherUI?: UIElement);
        protected createSystemUI(): HTMLElement;
    }

    class TextBlock extends UIElement {
        constructor(htmlUI?: string | HTMLElement, fatherUI?: UIElement);
        public text: string;
        protected createSystemUI(): HTMLElement;
    }

    class Panel extends FrameworkElement {
        constructor(htmlUI?: string | HTMLElement, fatherUI?: UIElement);
    }

    class Canvas extends Panel {
        constructor(htmlUI?: string | HTMLElement, fatherUI?: UIElement);
        public htmlCanvas: any;
        protected createSystemUI(): HTMLElement;
        public invalidateArrange(): void;
    }

    class Control extends FrameworkElement {
        constructor(htmlUI?: string | HTMLElement, fatherUI?: UIElement);
    }

    class UserControl extends Control {
        constructor(htmlUI?: string | HTMLElement, fatherUI?: UIElement);
        public onKeyDown(e: KeyEventArgs): void;
        protected initializeComponent(): void;
        public appendChild(child: UIElement): void;
        public focus(): void;
        public updateLayout(): void;
    }

    class RowDefinition {
        public height: GridLength;
        constructor(height?: GridLength);
    }

    class ColumnDefinition {
        public width: GridLength;
        constructor(width?: GridLength);
    }

    class Grid extends Panel {
        constructor(htmlUI?: string | HTMLElement, fatherUI?: UIElement);
        public columnDefinitions: Array<ColumnDefinition>;
        public rowDefinitions: Array<RowDefinition>;
        public subGrids: Array<Grid>;
        protected createSystemUI(): HTMLElement;
        public addColumn(width: number): void;
        public addRow(height: number): void;
        public updateLayout(): void;
    }

    class WindowsHelper {
        public static IsDoubleClick(e: MouseButtonEventArgs, precision?: number): boolean;
        public static BoolToVisibility(visible: boolean): Visibility;
        public static CalcPixelAlignOffsetToLeftBottom(horiAlign: HorizontalAlignment, vertAlign: VerticalAlignment, pixelWidth: number, pixelHeight: number): Vector2;
        public static CalcPixelPaddingOffset(horiAlign: HorizontalAlignment, vertAlign: VerticalAlignment, padding: number): Vector2;
        public static CreateContainerDiv(width: number, height: number): HTMLDivElement;
        public static CreateImage(): HTMLImageElement;
        public static CreateSystemUI(parentUI: HTMLElement, uiType: string): HTMLElement;
        public static GetStyleNumber(strValue: string): number;
        public static KeyFromJs(jsKeyCode: number): number;
        public static SetControlPositionInViewport(div: HTMLElement, position: Vector2, viewport: Rect, padding?: number): void;
        public static SetCursor(htmlUI: HTMLElement, cursor: Cursor): void;
        public static VisibilityToBool(visibility: Visibility): boolean;
        public static WindowsColorToJs(colorStr: string): string;
    }

    interface ITileProjection {
        maxRadius: number;
        project(cartographic: Vector2): Vector2;
        projectToRef(cartographic: Vector2, result: Vector2): void;
        unproject(cartesian: Vector2): Vector2;
        unprojectToRef(cartesian: Vector2, result: Vector2): void;
    }

    interface ITilingScheme {
        extent: GeoExtent;
        tilingType: TilingType;
        xCountOfLevel(level: number): number;
        xyToExtent(handle: QuadtreeHandle): GeoExtent;
        xyToNativeExtent(handle: QuadtreeHandle): GeoExtent;
        yCountOfLevel(level: number): number;
    }

    /**
      * GeoType 空间类型
      */
    enum GeoType {
        /**
          * 
         */
        None,
        /**
          * 
         */
        Point,
        /**
          * 
         */
        LineString,
        /**
          * 
         */
        Polygon,
        /**
          * 
         */
        MultiPoint,
        /**
          * 
         */
        MultiLineString,
        /**
          * 
         */
        MultiPolygon,
        /**
          * 
         */
        GeometryCollection,
        /**
          * 
         */
        CircularString,
        /**
          * 
         */
        CompoundCurve,
        /**
          * 
         */
        CurvePolygon,
        /**
          * 
         */
        MultiCurve,
        /**
          * 
         */
        MultiSurface,
        /**
          * 
         */
        Curve,
        /**
          * 
         */
        Surface,
        /**
          * 
         */
        PolyhedralSurface,
        /**
          * 
         */
        Tin,
        /**
          * 
         */
        Triangle,
        /**
          * 
         */
        Rect = 10001,
        /**
          * 
         */
        Ellipse,
        /**
          * 
         */
        Text = 10011,
        /**
          * 
         */
        Arrow = 10101,
        /**
          * 
         */
        SplinePoly = 10201,
        /**
          * 
         */
        Box = 20001,
        /**
          * 
         */
        Ball,
        /**
          * 
         */
        Plane = 20101
    }

    enum GeoDimension {
        None,
        One,
        Two,
        Three
    }

    interface IGeoType {
        geoType: GeoType;
    }

    /**
      * Geometry 空间图形对象
      */
    class Geometry extends ImmutableNoObject implements IGeoType, ICopyableNoObject<Geometry>, INoObject {
        /**
          * 三维包围盒
         */
        public readonly bounds: Box;
        /**
          * 二维包围矩形
         */
        public readonly bounds2: Rect;
        /**
          * 维度
         */
        public readonly dimension: GeoDimension;
        /**
          * 
         */
        public readonly drawStyle: DrawStyle;
        /**
          * 
         */
        public readonly drawStyleForUpdate: DrawStyle;
        /**
          * 空间类型
         */
        public readonly geoType: GeoType;
        /**
          * 三维点数组数据
         */
        public readonly points: Vector3[];
        /**
          * 二维点数组数据
         */
        public readonly points2: Vector2[];
        /**
          * 三维点位置
         */
        public readonly position: Vector3;
        /**
          * 二维点位置
         */
        public readonly position2: Vector2;
        /**
          * 子Geometry集合
         */
        public readonly subGeometries: Geometry[];
        /**
          * 附属标签，通常在应用中可以用于存储一些关联信息
         */
        public tag: any;
        /**
          * 标注文本
         */
        public text: string;
        /**
          * 关联的拓扑对象no数组
         */
        public topoNos: Array<number>;
        /**
          * 
          * @param src 
         */
        public copyFrom(src: Geometry): void;
        /**
          * 用指定matrix变换数据
          * @param matrix 
         */
        public transform(matrix: Matrix2): void;
        /**
          * 用子geometry数组更新数据
          * @param subGeometries 
         */
        public updateFromGeometryArray(subGeometries: Geometry[]): void;
        /**
          * 用三维点位置更新数据
          * @param point 
         */
        public updateFromPoint(point: Vector3): void;
        /**
          * 用二维点位置更新数据
          * @param point 
         */
        public updateFromPoint2(point: Vector2): void;
        /**
          * 用二维点数组更新数据
          * @param points 
         */
        public updateFromPoint2Array(points: Vector2[]): void;
        /**
          * 用三维点数组更新数据
          * @param points 
         */
        public updateFromPointArray(points: Vector3[]): void;
        /**
          * 用包围矩形更新数据
          * @param bounds 
         */
        public updateFromRect(bounds: Rect): void;
        /**
          * 计算geometry数组的包围矩形
          * @param geometries geometry数组
          * @returns 包围矩形
         */
        public static CalcBounds(geometries: Array<Geometry>): Rect;
        /**
          * 从源geometry复制创建新对象
          * @param src 
          * @returns 新对象
         */
        public static CreateFromClone(src: Geometry): Geometry;
        /**
          * 从子geometry数组创建新对象
          * @param subGeometries 
          * @returns 新对象
         */
        public static CreateFromGeometryArray(subGeometries: Geometry[]): Geometry;
        /**
          * 从三维点位置创建新对象
          * @param point 
          * @returns 新对象
         */
        public static CreateFromPoint(point: Vector3): Geometry;
        /**
          * 从二维点位置创建新对象
          * @param point 
          * @returns 新对象
         */
        public static CreateFromPoint2(point: Vector2): Geometry;
        /**
          * 从二维点数组创建新对象
          * @param spaType 
          * @param points 
          * @returns 新对象
         */
        public static CreateFromPoint2Array(spaType: GeoType, points: Vector2[]): Geometry;
        /**
          * 从三维点数组创建新对象
          * @param spaType 
          * @param points 
          * @returns 新对象
         */
        public static CreateFromPointArray(spaType: GeoType, points: Vector3[]): Geometry;
        /**
          * 从空间类型和包围矩形创建新对象
          * @param spaType 空间类型。椭圆或者矩形
          * @param bounds 包围矩形
          * @returns 新对象
         */
        public static CreateFromRect(spaType: GeoType, bounds: Rect): Geometry;
    }

    /**
      * IGeoJsonParser 接口定义。GeoJsonParser用于调入和解析GeoJson数据，并在解析过程中以回调方式返回解析出的对象和关联属性。
      */
    interface IGeoJsonParser {
        /**
          * 异步调入指定url的GeoJson数据
          * @param url 
         */
        loadAsync(url: string): void;
        /**
          * 当解析出每一个LineString类型时回调
          * @param points 点数组
          * @param properties 关联属性
         */
        onLineString: (points: Vector3[], properties: object) => void;
        /**
          * 当解析出每一个MultiLineString类型时回调
          * @param pointsArray 点二维数组
          * @param properties 关联属性
         */
        onMultiLineString: (pointsArray: Vector3[][], properties: object) => void;
        /**
          * 当解析出每一个MultiPoint类型时回调
          * @param points 点数组
          * @param properties 关联属性
         */
        onMultiPoint: (points: Vector3[], properties: object) => void;
        /**
          * 当解析出每一个Point类型时回调
          * @param point 点
          * @param properties 关联属性
         */
        onPoint: (point: Vector3, properties: object) => void;
        /**
          * 
          * @param points 
          * @param holes 
          * @param properties 
          * @returns 
         */
        onPolygon: (points: Vector3[], holes: Vector3[][], properties: object) => void;
    }

    /**
      * GeoJsonParserBase Parser的祖先类
      */
    class GeoJsonParserBase implements IGeoJsonParser {
        /**
          * 
          * @param json 
         */
        protected onJsonData(json: any): void;
        /**
        * 异步调入指定url的GeoJson数据
        * @param url 
       */
        public loadAsync(url: string): void;
        /**
          * 当解析出每一个LineString类型时回调
          * @param points 点数组
          * @param properties 关联属性
         */
        public onLineString: (points: Vector3[], properties: object) => void;
        /**
          * 当解析出每一个MultiLineString类型时回调
          * @param pointsArray 点二维数组
          * @param properties 关联属性
         */
        public onMultiLineString: (pointsArray: Vector3[][], properties: object) => void;
        /**
          * 当解析出每一个MultiPoint类型时回调
          * @param points 点数组
          * @param properties 关联属性
         */
        public onMultiPoint: (points: Vector3[], properties: object) => void;
        /**
          * 当解析出每一个Point类型时回调
          * @param point 点
          * @param properties 关联属性
         */
        public onPoint: (point: Vector3, properties: object) => void;
        /**
          * 当解析出每一个Polygon类型时回调
          * @param points 多边形轮廓
          * @param holes 洞
          * @param properties 关联属性
          * @returns 
         */
        public onPolygon: (points: Vector3[], holes: Vector3[][], properties: object) => void;
    }

    /**
      * GeoJsonParser 标准格式GeoJson的Parser类
      */
    class GeoJsonParser extends GeoJsonParserBase {
        /**
          * 
          * @param json 
         */
        protected onJsonData(json: any): void;
    }

    /**
      * EsriGeoJsonParser Esri格式GeoJson的Parser类
      */
    class EsriGeoJsonParser extends GeoJsonParserBase {
        /**
          * 
          * @param json 
         */
        protected onJsonData(json: any): void;
    }

    /**
      * TilingType 瓦片网格类型
      */
    enum TilingType {
        /**
          * 经纬度网格
         */
        Geographic = 1,
        /**
          * 墨卡托投影网格
         */
        WebMercator = 2
    }

    /**
      * IImageProviderOptions 瓦片服务参数
      */
    interface IImageProviderOptions {
        /**
          * 密码
         */
        accessToken?: string;
        /**
          * 经纬度范围
         */
        extent?: GeoExtent;
        /**
          * 文件后缀
         */
        fileExtension?: string;
        /**
          * 图层
         */
        layers?: string[];
        /**
          * 最大层级
         */
        maxLevel?: number;
        /**
          * 最小层级
         */
        minLevel?: number;
        /**
          * 根层级。缺省为0，天地图Geographic数据集从1开始
         */
        rootLevel?: number;
        /**
          * 子域名
         */
        subdomains?: string[];
        /**
          * 瓦片网格类型
         */
        tilingType?: TilingType;
        /**
          * 数据服务地址
         */
        url?: string;
    }

    /**
      * IImageProvider 瓦片服务接口
      */
    interface IImageProvider extends INameObject {
        /**
          * 是否就绪
         */
        isReady: boolean;
        /**
          * 瓦片网格类型
         */
        tilingType: TilingType;
        /**
          * 或者指定瓦片url
          * @param handle 四元数句柄
          * @returns 
         */
        getTileUrl(handle: QuadtreeHandle): string;
        /**
          * 指定层级和范围的瓦片是否存在
          * @param level 层级
          * @param extent 经纬度范围
          * @returns 
         */
        isTileAvailableByExtent(level: number, extent: GeoExtent): boolean;
    }

    /**
      * ImageProviderBase 瓦片服务的祖先类
      */
    class ImageProviderBase extends TObject implements IImageProvider {
        /**
          * 
         */
        protected readonly maxLevel: number;
        /**
          * 
         */
        protected readonly minLevel: number;
        /**
          * 
         */
        public readonly isReady: boolean;
        /**
          * 
         */
        public readonly name: string;
        /**
          * 
         */
        public readonly tilingType: TilingType;
        /**
          * 
          * @param options 
          * @returns 
         */
        protected initRootFromOptions(options?: IImageProviderOptions): any;
        /**
          * 
         */
        protected projection(): ITileProjection;
        /**
          * 
          * @param value 
         */
        protected setMaxLevel(value: number): void;
        /**
          * 
          * @param tilingType 
         */
        protected setTilingType(tilingType: TilingType): void;
        /**
          * 
          * @param level 
          * @returns 
         */
        protected xCountOfLevel(level: number): number;
        /**
          * 
          * @param handle 
          * @returns 
         */
        protected xyToExtent(handle: QuadtreeHandle): GeoExtent;
        /**
          * 
          * @param handle 
          * @returns 
         */
        protected xyToNativeExtent(handle: QuadtreeHandle): GeoExtent;
        /**
          * 
          * @param level 
          * @returns 
         */
        protected yCountOfLevel(level: number): number;
        /**
          * 
          * @param handle 
          * @returns 
         */
        public getTileUrl(handle: QuadtreeHandle): string;
        /**
          * 
          * @param level 
          * @param extent 
          * @returns 
         */
        public isTileAvailableByExtent(level: number, extent: GeoExtent): boolean;
    }

    /**
      * WrapperImageProviderBase 包装瓦片服务的祖先类
      */
    class WrapperImageProviderBase extends TObject implements IImageProvider {
        /**
          * 
         */
        public readonly isReady: boolean;
        /**
          * 
         */
        public readonly name: string;
        /**
          * 
         */
        public readonly tilingType: TilingType;
        /**
          * 
          * @param handle 
          * @returns 
         */
        public getTileUrl(handle: QuadtreeHandle): string;
        /**
          * 
          * @param level 
          * @param extent 
          * @returns 
         */
        public isTileAvailableByExtent(level: number, extent: GeoExtent): boolean;
    }

    /**
      * ITemplateImageProviderOptions 模板瓦片服务参数
      */
    interface ITemplateImageProviderOptions extends IImageProviderOptions {
        /**
          * 用户自定义模板对象。具体用法见教程
         */
        customTags?: any;
        /**
          * 使用用前置0填充数字模板
         */
        urlSchemeZeroPadding?: boolean;
    }

    /**
      * TemplateImageProvider 模板瓦片服务。具体用法见教程
      */
    class TemplateImageProvider extends ImageProviderBase {
        /**
          * options
          * @param options ITemplateImageProviderOptions
         */
        constructor(options?: ITemplateImageProviderOptions);
    }

    /**
      * IWmsImageProviderOptions Wms瓦片服务参数
      */
    interface IWmsImageProviderOptions extends ITemplateImageProviderOptions {
        /**
          * crs
         */
        crs?: string;
        /**
          * parameters
         */
        parameters?: string[];
        /**
          * srs
         */
        srs?: string;
    }

    /**
      * WmsImageProvider Wms瓦片服务
      */
    class WmsImageProvider extends WrapperImageProviderBase {
        /**
          * options
          * @param options IWmsImageProviderOptions
         */
        constructor(options: IWmsImageProviderOptions);
    }

    /**
      * IWmtsImageProviderOptions Wmts瓦片服务参数
      */
    interface IWmtsImageProviderOptions extends IImageProviderOptions {
        /**
          * dimensions
         */
        dimensions?: string;
        /**
          * format
         */
        format?: string;
        /**
          * layer
         */
        layer: string;
        /**
          * style
         */
        style?: string;
        /**
          * tileMatrixLabels
         */
        tileMatrixLabels?: string[];
        /**
          * tileMatrixSet
         */
        tileMatrixSet: string;
    }

    /**
      * WmtsImageProvider Wmts瓦片服务
      */
    class WmtsImageProvider extends ImageProviderBase {
        /**
          * options
          * @param options IWmtsImageProviderOptions
         */
        constructor(options: IWmtsImageProviderOptions);
    }

    /**
      * ArcGisImageStyle ArcGis瓦片类型
      */
    enum ArcGisImageStyle {
        /**
          * 卫星影像
         */
        Image = "World_Imagery",
        /**
          * 地形图
         */
        Terrain = "World_Topo_Map",
        /**
          * 道路地图
         */
        Road = "World_Street_Map",
    }

    /**
      * ArcGisImageProvider ArcGis瓦片服务
      */
    class ArcGisImageProvider extends ImageProviderBase {
        /**
          * 使用style或者options创建
          * options.url示例：'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer'
          * @param styleOrOptions 
         */
        constructor(styleOrOptions: ArcGisImageStyle | IImageProviderOptions);
    }

    /**
      * BingImageStyle Bing瓦片类型
      */
    enum BingImageStyle {
        /**
          * 
         */
        Arial = "Aerial",
        /**
          * 带标注卫星影像
         */
        ArialWithLablels = "AerialWithLabels",
        /**
          * 道路
         */
        Road = "Road",
        /**
          * 暗色地图
         */
        CanvasDark = "CanvasDark",
        /**
          * 亮色地图
         */
        CanvasLight = "CanvasLight",
        /**
          * 灰色地图
         */
        CanvasGray = "CanvasGray",
    }

    /**
      * IBingImageProviderOptions Bing瓦片服务参数
      */
    interface IBingImageProviderOptions extends IImageProviderOptions {
        /**
          * culture
         */
        culture?: string;
        /**
          * mapStyle
         */
        mapStyle?: string;
        /**
          * proxy
         */
        proxy?: string;
        /**
          * tileProtocol
         */
        tileProtocol?: string;
    }

    class BingImageProvider extends ImageProviderBase {
        /**
          * 使用style或者options创建
          * options.url示例：'http://ecn.{subdomain}.tiles.virtualearth.net/tiles/a{quadkey}.jpeg?g=11888'
          * @param styleOrOptions 
         */
        constructor(styleOrOptions?: BingImageStyle | IBingImageProviderOptions);
    }

    /**
      * IMapboxImageProviderOptions Mapbox瓦片服务参数
      */
    interface IMapboxImageProviderOptions extends ITemplateImageProviderOptions {
        /**
          * format
         */
        format?: string;
        /**
          * mapId
         */
        mapId?: string;
        /**
          * scaleFactor
         */
        scaleFactor?: boolean;
        /**
          * styleId
         */
        styleId?: string;
        /**
          * tilesize
         */
        tilesize?: number;
        /**
          * username
         */
        username?: string;
    }

    /**
      * MapboxImageProvider Mapbox瓦片服务
      */
    class MapboxImageProvider extends WrapperImageProviderBase {
        /**
          * options
          * @param options IMapboxImageProviderOptions
         */
        constructor(options: IMapboxImageProviderOptions);
    }

    /**
      * MapboxStyleImageProvider MapboxStyle瓦片服务
      */
    class MapboxStyleImageProvider extends WrapperImageProviderBase {
        /**
          * options
          * @param options IMapboxImageProviderOptions
         */
        constructor(options: IMapboxImageProviderOptions);
    }

    /**
      * OpenStreetMapImageProvider OpenStreetMap瓦片服务
      */
    class OpenStreetMapImageProvider extends WrapperImageProviderBase {
        /**
          * options
          * @param options IImageProviderOptions
         */
        constructor(options: IImageProviderOptions);
    }

    /**
      * TianDiTuImageStyle 天地图瓦片类型
      */
    enum TianDiTuImageStyle {
        /**
          * 卫星影像
         */
        Image = "img",
        /**
          * 中文影像标注
         */
        ChineseImageAnno = "cia",
        /**
          * 英文影像标注
         */
        EnglishImageAnno = "eia",
        /**
          * 地图
         */
        Map = "vec",
        /**
          * 中文地图标注
         */
        ChineseMapAnno = "cva",
        /**
          * 英文地图标注
         */
        EnglishMapAnno = "eva",
        /**
          * 地形
         */
        Terrain = "ter",
        /**
          * 中文地形标注
         */
        ChineseTerrainAnno = "cta",
    }

    class TianDiTuImageProvider extends WrapperImageProviderBase {
        /**
          * 使用style或者options创建
          *
          * @param styleOrOptions 
          * @param accessToken 天地图key
         */
        constructor(styleOrOptions?: TianDiTuImageStyle | IWmtsImageProviderOptions, accessToken?: string);
    }

    /**
      * GaoDeImageStyle 高德瓦片类型
      */
    enum GaoDeImageStyle {
        /**
          * 卫星影像
         */
        Image = '6',
        /**
          * 影像标注
         */
        ImageAnno = '8',
        /**
          * 地图
         */
        Map = '7',
    }

    class GaoDeImageProvider extends WrapperImageProviderBase {
        /**
          * 使用style或者options创建
          *
          * @param styleOrOptions 
         */
        constructor(styleOrOptions: GaoDeImageStyle | IImageProviderOptions);
    }

    /**
      * BaiDuImageProvider 百度瓦片服务。构造函数没有参数，系统自动使用缺省值
      */
    class BaiDuImageProvider extends ImageProviderBase {
        /**
          * 
          * @param handle 
          * @returns 
         */
        public getTileUrl(handle: QuadtreeHandle): string;
    }

    /**
      * LocalTmsImageProvider 本地tms瓦片服务
      */
    class LocalTmsImageProvider extends WrapperImageProviderBase {
        /**
          * 如果要设定tilingType，extent等参数，使用options参数创建
          * @param urlOrOptions 
         */
        constructor(urlOrOptions: string | IImageProviderOptions);
        /**
          * 
          * @param level 
          * @param extent 
          * @returns 
         */
        public isTileAvailableByExtent(level: number, extent: GeoExtent): boolean;
    }

    interface IImageTileReader {
        loadTileImage(handle: QuadtreeHandle): WriteableBitmap;
        loadTileTexture(graphics: Graphics3, handle: QuadtreeHandle, isWrap: boolean, tag?: string): ImageTexture;
    }

    class CachedImageTileReader {
        public graphics: Graphics3;
        public provider: IImageProvider;
        constructor(graphics: Graphics3, provider: IImageProvider, cacheCapacity?: number);
        public accessTexture(handle: QuadtreeHandle): ImageTexture;
        public collectGabage(): void;
        public dispose();
        public loadTexture(handle: QuadtreeHandle, texInfo?: string): ImageTexture;
    }

    enum RenderingType {
        Canvas,
        CanvasBackground = 10,
        BlockBuffer = 20
    }

    interface IBlockRangeCalc {
        calcBlockPixelCenter(level: number, x: number, y: number): Vector2;
        calcBlockRange(level: number, x: number, y: number): Rect;
    }

    class RectOverlapRegion {
        constructor(viewport: Rect);
        public calcCellRange(x: number, y: number): Rect;
        public combineRect(range: Rect): void;
        public initViewport(viewport: Rect): void;
        public rectInRegion(range: Rect): boolean;
        public resetData(): void;
        public toCellRectIndex(range: Rect, left: RefValue<number>, top: RefValue<number>, right: RefValue<number>, bottom: RefValue<number>): void;
        public static RegionSize: number;
        public static RegionSizePower: number;
    }

    class CoordSystem2 implements IBlockRangeCalc {
        public isEarthCoord: boolean;
        public isUseLevelZoom: boolean;
        public isUseProjection: boolean;
        public mapToEarthMatrix: Matrix2;
        public readonly center: Vector2;
        public readonly level: number;
        public readonly scale: number;
        public viewportRect: Rect;
        public windowRect: Rect;
        public worldRect: Rect;
        public worldRectLimit: NullableValue<Rect>;
        public zoomRatio: number;
        public applyTransform(): void;
        public calcBlockPixelCenter(level: number, x: number, y: number): Vector2;
        public calcBlockRange(level: number, x: number, y: number): Rect;
        public earthToMap(pt: Vector2): Vector2;
        public earthToMapRect(rect: Rect): Rect;
        public earthToMapToRef(pt: Vector2, resultPt: Vector2);
        public mapToEarth(pt: Vector2): Vector2;
        public mapToEarthRect(rect: Rect): Rect;
        public mapToEarthToRef(pt: Vector2, resultPt: Vector2);
        public mapToMeter(len: number): number;
        public mapToScreen(pt: Vector2): Vector2;
        public mapToScreenLength(len: number): number;
        public mapToScreenPoints(srcPoints: Vector2[]): Vector2[];
        public mapToScreenRect(rect: Rect): Rect;
        public meterToMap(len: number): number;
        public move(offsetX: number, offsetY: number): boolean;
        public screenToMap(pt: Vector2): Vector2;
        public screenToMapLength(len: number): number;
        public screenToMapPoints(srcPoints: Vector2[]): Vector2[];
        public screenToMapRect(rect: Rect): Rect;
        public transformAndFilterPoints(points: Vector2[], pixelPrecision?: number): Vector2[];
        public whole(): boolean;
        public zoomIn(center: Vector2): boolean;
        public zoomOut(center: Vector2): boolean;
        public zoomToFitViewport(mapWindow: Rect, viewport: Rect): boolean;
        public zoomToLevel(center: Vector2, level: number): boolean;
        public zoomToRect(mapWindow: Rect): boolean;
        public zoomToScale(center: Vector2, scale: number): boolean;
        public static readonly PixelPerMm: number;
        public static ScaleToLevel(scale: number): number;
    }

    class RenderContext2 {
        constructor(graphics: CanvasGraphics);
        public currentLegend: Legend;
        public isCheckDrawingPass: boolean;
        public isDrawDynAnno: boolean;
        public readonly coordSystem: CoordSystem2;
        public readonly defaultPolyBrush: Brush;
        public readonly graphics: CanvasGraphics;
        public readonly isDrawingBlockBuffer: boolean;
        public readonly isDrawingCanvasBackground: boolean;
        public renderType: RenderingType;
        public begineCanvasDraw(isClearBuffer: boolean, backgroundColor?: Color): void;
        public clearDrawSomething(): void;
        public combineRect(range: Rect): void;
        public drawNode(point: Vector2, angle?: number): void;
        public drawPolygon(points: Vector2[], pen: Pen2, brush: Brush): void;
        public drawPolyline(points: Vector2[]): void;
        public drawPolylineClip(points: Vector2[]): void;
        public drawPolylineNoTrans(points: Vector2[]): void;
        public drawText(str: string, point: Vector2, textBrush: Brush, isHalo?: boolean): void;
        public fillPolygon(points: Vector2[]): void;
        public getDrawingRange(): Rect;
        public getOverlapRegion(): RectOverlapRegion;
        public hasDrawSomething(): boolean;
        public isFullRedraw(): boolean;
        public rectInRegion(range: Rect): boolean;
        public setDrawSomething(): void;
        public static SystemFontSize: number;
    }

    class DrawAnnoPara {
        public curIndex: number;
        public nextNodeLen: number;
        public x: number;
        public x1: number;
        public x2: number;
        public y: number;
        public y1: number;
        public y2: number;
    }

    class GeoObjectTypeNames {
        public static Arrow: string;
        public static Circle: string;
        public static Ellipse: string;
        public static Line: string;
        public static None: string;
        public static Point: string;
        public static Poly: string;
        public static Rect: string;
        public static SplinePoly: string;
        public static EnumNames(): Array<string>;
        public static GeoObjectTypeFromName(spaTypeName: string): GeoType;
        public static GeoObjectTypeNames_cctor(): void;
        public static MapToolTypeFromName(spaTypeName: string): MapToolType;
    }

    class GeoObjectPickEventArgs extends EventArgs {
        constructor(geoObject: GeoObject, callerInfo?: any);
        public callerInfo: any;
        public result: GeoObject;
    }

    class GeoObject extends PickableObject {
        public angle: number;
        public anno: string;
        public annoColor: Color;
        public boundLegend: Legend;
        public fillLegend: Legend;
        public isObjectVisible: boolean;
        public legend: Legend;
        public maxVisibleScale: number;
        public minVisibleScale: number;
        public readonly bounds: Rect;
        public readonly geometry: Geometry;
        public readonly geoType: GeoType;
        public readonly layerName: string;
        public readonly points: Vector2[];
        public readonly position: Vector2;
        public tag: any;
        public draw(renderContext: RenderContext2, layer: Layer2, rcWindow: Rect): void;
        public drawAnno(renderContext: RenderContext2, layer: Layer2, rcWindow: Rect): void;
        public markAnnoOverlap(renderContext: RenderContext2, layer: Layer2, rcWindow: Rect): void;
        public static CreateFromGeometry(geometry: Geometry): GeoObject;
        public static CreateFromPoint(point: Vector2): GeoObject;
        public static CreateFromPoints(type: GeoType, points: Vector2[]): GeoObject;
        public static CreateFromRect(type: GeoType, bounds: Rect): GeoObject;
    }

    /**
      * Layer2Type 二维图层类型
      */
    enum Layer2Type {
        /**
          * 
         */
        None,
        /**
          * 
         */
        GeoLayer,
        /**
          * 
         */
        ShapeLayer,
        /**
          * 
         */
        ImageLayer = 10,
        /**
          * 
         */
        SimpleImageLayer
    }

    /**
      * Layer2 二维图层祖先类
      */
    class Layer2 extends Layer {
        /**
          * 包围矩形
         */
        public bounds: Rect;
        /**
          * 坐标类型。 0，经纬度；1，米
         */
        public coordType: number;
        /**
          * 标注颜色
         */
        public fontColor: Color;
        /**
          * 
         */
        public isAnnoCacheDrawingMode: boolean;
        /**
          * 是否标注可见
         */
        public isAnnoVisible: boolean;
        /**
          * 
         */
        public isBackground: boolean;
        /**
          * 
         */
        public isCacheDrawingMode: boolean;
        /**
          * 是否线类型可见
         */
        public isLineVisible: boolean;
        /**
          * 是否点类型可见
         */
        public isPointVisible: boolean;
        /**
          * 是否多边形类型可见
         */
        public isPolyVisible: boolean;
        /**
          * 缺省线图例
         */
        public lineLegend: Legend;
        /**
          * 缩小到时最小可见比例尺分母
         */
        public maxVisibleScale: number;
        /**
          * 放大时时最大可见比例尺分母
         */
        public minVisibleScale: number;
        /**
          * 缺省点图例
         */
        public pointLegend: Legend;
        /**
          * 缺省多边形图例
         */
        public polyLegend: Legend;
        /**
          * 
         */
        public readonly count: number;
        /**
          * 
         */
        public readonly isEmpty: boolean;
        /**
          * 图层类型
         */
        public readonly layerType: Layer2Type;
        /**
          * 
         */
        public textPosition: number;
        /**
          * 
          * @param renderContext 
          * @returns 
         */
        protected isDrawable(renderContext: RenderContext2): boolean;
        /**
          * 
          * @param renderContext 
         */
        public claimAnnoPos(renderContext: RenderContext2): void;
        /**
          * 
          * @param renderContext 
         */
        public draw(renderContext: RenderContext2): void;
        /**
          * 
          * @param renderContext 
         */
        public drawAnno(renderContext: RenderContext2): void;
        /**
          * 
          * @param renderContext 
         */
        public drawDynamicAnno(renderContext: RenderContext2): void;
        /**
          * 用指定的下标获取对象，从0开始
          * @param index 
          * @returns 对象
         */
        public getAt(index: number): GeoObject;
        /**
          * 
          * @param rcWindow 
          * @returns 
         */
        public hasSomethingToDrawInRect(rcWindow: Rect): boolean;
        /**
          * 
          * @param renderContext 
         */
        public markAnnoOverlap(renderContext: RenderContext2): void;
        /**
          * 
          * @param renderContext 
          * @returns 
         */
        public prepareData(renderContext: RenderContext2): boolean;
        /**
          * 用指定的中心点和半径选择对象，返回第一个。半径为地图坐标
          * @param center 中心点
          * @param radius 半径
          * @returns 选中对象或者null
         */
        public selectOneObject(center: Vector2, radius: number): GeoObject;
    }

    /**
      * Layer2Collection 二维图层集合类
      */
    class Layer2Collection extends LayerCollection<Layer2>{
        /**
          * 
         */
        public calcBounds(): Rect;
        /**
          * 
         */
        public calcCoordType(): number;
        /**
          * 
          * @param renderContext 
          * @param isCacheDrawingMode 
         */
        public draw(renderContext: RenderContext2, isCacheDrawingMode: boolean): void;
        /**
          * 
          * @param renderContext 
         */
        public drawAnno(renderContext: RenderContext2): void;
        /**
          * 
          * @param renderContext 
         */
        public drawDynamicAnno(renderContext: RenderContext2): void;
        /**
          * 
          * @param renderContext 
         */
        public drawImage(renderContext: RenderContext2): void;
        /**
          * 
          * @param renderContext 
         */
        public markAnnoOverlap(renderContext: RenderContext2): void;
        /**
          * 
          * @param renderContext 
          * @returns 
         */
        public prepareData(renderContext: RenderContext2): boolean;
        /**
          * 
          * @param center 
          * @param radius 
          * @returns 
         */
        public selectOneObject(center: Vector2, radius: number): GeoObject;
        /**
          * 
          * @param isCacheDrawingMode 
          * @returns 
         */
        public setIsCacheDrawingMode(isCacheDrawingMode: boolean): boolean;
    }

    /**
      * ShapeLayer2 二维图形图层，可以添加删除实体
      */
    class ShapeLayer2 extends Layer2 {
        /**
          * 
          * @param mapViewer 
          * @param layerName 
         */
        constructor(mapViewer: MapViewer, layerName?: string);
        /**
          * 
         */
        public readonly count: number;
        /**
          * 
         */
        public readonly isEmpty: boolean;
        /**
        * 添加标注对象
        * @param point 基准点
        * @param text 文本串
        * @param textHeight 字体高度
        * @param degreeAngle 旋转度数
        * @param textColor 标注颜色
        * @returns 所添加对象
       */
        public addAnno(point: Vector2, text: string, textHeight: number, degreeAngle: number, textColor: Color): GeoObject;
        /**
          * 添加箭头对象
          * @param arrowType 箭头类型。系统保留，使用0
          * @param centralPoints 中心线点数组
          * @param headWidth 箭头宽度
          * @param tailWidth 箭尾宽度
          * @returns 对象
         */
        public addArrow(arrowType: number, centralPoints: Vector2[], headWidth: number, tailWidth: number): GeoObject;
        /**
          * 添加椭圆对象
          * @param bounds 包围矩形
          * @returns
         */
        public addEllipse(bounds: Rect): GeoObject;
        /**
          * 直接添加GeoObject对象
          * @param geoObject GeoObject对象
          * @returns 所添加对象。依然是原对象，赋予了no等属性。
         */
        public addGeoObject(geoObject: GeoObject): GeoObject;
        /**
          * 添加折线对象
          * @param points 线坐标点数组
          * @returns
         */
        public addLine(points: Vector2[]): GeoObject;
        /**
          * 添加矩形对象
          * @param bounds 包围矩形
          * @returns
         */
        public addPoint(pt: Vector2): GeoObject;
        /**
          * 添加多边形对象
          * @param points 多边形坐标点数组
          * @returns
         */
        public addPoly(points: Vector2[]): GeoObject;
        /**
          * 添加矩形对象
          * @param bounds 包围矩形
          * @returns 所添加对象
         */
        public addRect(bounds: Rect): GeoObject;
        /**
          * 
          * @param controlPoints 
          * @param divCount 
          * @param isClosed 
          * @returns 
         */
        public addSpline(controlPoints: Vector2[], divCount?: number, isClosed?: boolean): GeoObject;
        /**
          * 清空图层中所有对象
         */
        public clear(): void;
        /**
          * 
          * @param renderContext 
         */
        public draw(renderContext: RenderContext2): void;
        /**
          * 
          * @param renderContext 
         */
        public drawAnno(renderContext: RenderContext2): void;
        /**
          * 通过下标获取对象。下标从0开始，最大到count-1
          * @param index 下标
          * @returns 对象
         */
        public getAt(index: number): GeoObject;
        /**
          * 
          * @param oid 
          * @returns 
         */
        public getGeoObjectByOid(oid: number): GeoObject;
        /**
          * 
          * @param rcWindow 
          * @returns 
         */
        public hasSomethingToDrawInRect(rcWindow: Rect): boolean;
        /**
          * 
          * @param renderContext 
         */
        public markAnnoOverlap(renderContext: RenderContext2): void;
        /**
          * 通过指定圆选取图层中的对象
          * @param center 圆心
          * @param radius 半径，地图坐标
          * @returns 选中对象集合
         */
        public selectByCircle(center: Vector2, radius: number): Array<GeoObject>;
        /**
          * 通过指定多边形选取图层中的对象
          * @param points 多边形点
          * @returns 选中对象集合
         */
        public selectByPoly(points: Vector2[]): Array<GeoObject>;
        /**
          * 通过指定矩形选取图层中的对象
          * @param range 矩形范围
          * @returns 选中对象集合
         */
        public selectByRect(range: Rect): Array<GeoObject>;
        /**
          * 通过指定中心点和半径图层中的对象，范围符合条件的第一个
          * @param center 中心点
          * @param radius 半径，地图坐标
          * @returns 选中对象。未选中返回null
         */
        public selectOneObject(center: Vector2, radius: number): GeoObject;
        /**
          * 通过指定maxtrix变换图层中所有对象的坐标
          * @param matrix
         */
        public transform(matrix: Matrix2): void;
    }

    class LabelObject extends ImmutableNoObject {
        constructor(geoObject: GeoObject);
        public anchorDis: number;
        public backgroundColor: Color;
        public borderColor: Color;
        public borderWidth: number;
        public isBold: boolean;
        public lineDis: number;
        public padding: number;
        public readonly geoObject: GeoObject;
        public appendText(text: string, color: Color): number;
        public calcOverlapBounds(renderContext: RenderContext2, horiAlign: HorizontalAlignment, vertAlign: VerticalAlignment): Rect;
        public clearText(): void;
        public draw(renderContext: RenderContext2, layer: Layer2, horiAlign: HorizontalAlignment, vertAlign: VerticalAlignment): void;
        public getColor(index: number): Color;
        public getText(index: number): string;
        public setSize(width: number, height: number): void;
        public updateText(index: number, text: string, color: Color): void;
    }

    class LabelLayer extends Layer2 {
        public readonly count: number;
        public addLabel(geoObject: GeoObject): LabelObject;
        public clear(): void;
        public draw(renderContext: RenderContext2): void;
    }

    class SimpleImageLayer extends Layer2 {
        constructor(name: string);
        public maxLevel: number;
        public minLevel: number;
        public readonly isEmpty: boolean;
        public draw(renderContext: RenderContext2): void;
        public hasSomethingToDrawInRect(rcWindow: Rect): boolean;
        public updateImage(bitmap: WriteableBitmap, imageBounds: Rect): void;
    }

    /**
      * ImageTileLayer 
      */
    class ImageTileLayer extends Layer2 {
        /**
          * 
          * @param layerName 
          * @param reader 
          * @param isAllowFatherLevel 
         */
        constructor(layerName: string, reader: IImageTileReader, isAllowFatherLevel?: boolean);
        /**
          * 
         */
        public maxLevel: number;
        /**
          * 
         */
        public readonly isEmpty: boolean;
        /**
          * 
          * @param renderContext 
         */
        public draw(renderContext: RenderContext2): void;
        /**
          * 
          * @param rcWindow 
          * @returns 
         */
        public hasSomethingToDrawInRect(rcWindow: Rect): boolean;
        /**
          * 
          * @param renderContext 
          * @returns 
         */
        public isAllImageInWindowReady(renderContext: RenderContext2): boolean;
        /**
          * 
          * @param renderContext 
          * @returns 
         */
        public prepareData(renderContext: RenderContext2): boolean;
        /**
          * 
         */
        public static BlockSize: number;
    }

    enum LegendType {
        None,
        NodeLegend = 100,
        NodeSimpleLegend,
        NodeSystemLegend,
        NodeGisLegend,
        NodeImageLegend,
        LineLegend = 200,
        LineSimpleLegend,
        LineSystemLegend,
        LineGisLegend,
        LineAdvanceLegend,
        PolyLegend = 300,
        PolySimpleLegend,
        PolySystemLegend,
        PolyGisLegend
    }

    enum PointFillLineStyle {
        Repeat,
        Middle = 20
    }

    class LegendSet {
        public add(legend: Legend): void;
        public clear(): void;
        public enumNos(): Int32Array;
        public getItem(no: number): Legend;
        public getUniqueName(prefix: string): string;
        public remove(legendName: string): void;
        public rename(oldName: string, newName: string): boolean;
        public selectByType(type: LegendType): Array<Legend>;
    }

    class Legend extends ImmutableNoObject implements INameObject {
        public color: Color;
        public legendSet: LegendSet;
        public name: string;
        public readonly bounds: Rect;
        public readonly brush: Brush;
        public readonly pen: Pen2;
        public type: LegendType;
        protected checkResource(): void;
        protected clearResource(): void;
        protected prepareSampleLine(rect: Rect): Vector2[];
        protected prepareSampleRegion(rect: Rect): Rect;
        public drawPoint(graphics: CanvasGraphics, pt: Vector2, angle?: number): void;
        public drawPolyline(graphics: CanvasGraphics, points: Vector2[]): void;
        public drawSample(graphics: CanvasGraphics, rect: Rect): void;
        public fillPolygon(graphics: CanvasGraphics, points: Vector2[]): void;
    }

    class ImagePointLegend extends Legend {
        public readonly bounds: Rect;
        public drawPoint(graphics: CanvasGraphics, pt: Vector2, angle?: number): void;
        public drawSample(graphics: CanvasGraphics, rect: Rect): void;
        public static CreateFromBitmap(bitmap: WriteableBitmap): ImagePointLegend;
        public static CreateFromUrl(imageUrl: string): ImagePointLegend;
    }

    class SolidLineLegend extends Legend {
        constructor(color?: Color, width?: number);
        public width: number;
        protected checkResource(): void;
        public drawPolyline(graphics: CanvasGraphics, points: Vector2[]): void;
        public drawSample(graphics: CanvasGraphics, rect: Rect): void;
    }

    class PatternLineLegend extends Legend {
        constructor(patterns?: Float32Array, color?: Color, width?: number);
        public patterns: Float32Array;
        public width: number;
        protected checkResource(): void;
        public drawPolyline(graphics: CanvasGraphics, points: Vector2[]): void;
        public drawSample(graphics: CanvasGraphics, rect: Rect): void;
        public static ConvertPattern(rawPattern: Int32Array): Float32Array;
    }

    class SolidPointLegend extends Legend {
        constructor(color?: Color, radius?: number, isFill?: boolean);
        public isFill: boolean;
        public radius: number;
        public readonly bounds: Rect;
        protected checkResource(): void;
        protected clearResource(): void;
        public drawPoint(graphics: CanvasGraphics, pt: Vector2, angle?: number): void;
        public drawSample(graphics: CanvasGraphics, rect: Rect): void;
        public static CreatePolygon(color: Color, radius: number, isFill: boolean, edgeCount: number): SolidPointLegend;
    }

    class CompoundLineLegend extends Legend {
        public lineLegends: Array<Legend>;
        public drawPolyline(graphics: CanvasGraphics, points: Vector2[]): void;
        public drawSample(graphics: CanvasGraphics, rect: Rect): void;
        public exchangeSubLegend(destIndex: number, srcIndex: number): void;
    }

    class SolidPolyLegend extends Legend {
        constructor(color: Color);
        protected checkResource(): void;
        public drawSample(graphics: CanvasGraphics, rect: Rect): void;
        public fillPolygon(graphics: CanvasGraphics, points: Vector2[]): void;
    }

    class PointFillLineLegend extends Legend {
        constructor(fillLegend?: ImagePointLegend, style?: PointFillLineStyle, distance?: number);
        public distance: number;
        public fillLegend: ImagePointLegend;
        public style: PointFillLineStyle;
    }

    class MapDataDirtyEventArgs extends EventArgs {
        constructor(dirtyRange: Rect, maxScale: number, minScale: number);
        public dirtyRange: Rect;
        public maxScale: number;
        public minScale: number;
    }

    enum MapToolType {
        None,
        Pan,
        TrackPoint = 10,
        TrackLine = 20,
        TrackPoly = 30,
        TrackRect = 40,
        TrackEllipse = 50,
        TrackCircle,
        MeasureLength = 120,
        MeasureArea = 130,
        PointPick = 210
    }

    /**
      * Map 二维地图对象，主要是代表数据，包含在二维地图控件中进行显示和操作
      */
    class Map extends NameObject {
        /**
          * 
         */
        public onMapDataDirty: Observable<MapDataDirtyEventArgs>;
        /**
          * 
         */
        public isGeoLayerLoadedReady: boolean;
        /**
          * 包含的图层集合
         */
        public layers: Layer2Collection;
        /**
          * 缩小到最小时的比例尺分母
         */
        public maxScale: number;
        /**
          * 放大到最大时的比例尺分母
         */
        public minScale: number;
        /**
          * 
         */
        public objectAlphaRatio: number;
        /**
          * 重新计算所有图层的包围矩形
         */
        public calcBounds(): Rect;
        /**
          * 
         */
        public close(): boolean;
        /**
          * 获取地图包围矩形
         */
        public getBounds(): Rect;
        /**
          * 是否图层都为空
         */
        public isLayerEmpty(): boolean;
        /**
          * 是否数据调入完成
         */
        public isReady(): boolean;
    }

    class GeoMapRender {
        constructor(map: Map);
        public isPolyVisible: boolean;
        public readonly map: Map;
        public drawToBitmap(bufferBitmap: WriteableBitmap, windowRect: Rect, isDrawDynAnno: boolean, geoLayerVisible: boolean, dynLayerVisible: boolean): boolean;
        public hasSomethingDrawToBitmap(bufferBitmap: WriteableBitmap, windowRect: Rect): boolean;
    }

    /**
      * MapViewer 二维地图控件，提供显示和交互操作。提供背景图层集合，动态图层集合。是开发二维应用的基础类。
      */
    class MapViewer extends UserControl {
        /**
          * 
          * @param htmlUI 
          * @param fatherUI 
         */
        constructor(htmlUI?: any, fatherUI?: UIElement);
        /**
          * 地图打开完毕事件
         */
        public onOpenFinish: Observable<EventArgs>;
        /**
          * 对象选中事件。当选中的选中对象变化或者变为没有选中时，发出此事件
         */
        public onPickObject: Observable<GeoObjectPickEventArgs>;
        /**
          * 地图重新绘制完毕事件
         */
        public onRedrawScreenFinish: Observable<EventArgs>;
        /**
          * 屏幕交互跟踪操作结束事件
         */
        public onTrackFinish: Observable<GeoObjectPickEventArgs>;
        /**
          * 
         */
        public raiseMapOpenFinishEvent(): void;
        /**
          * 
          * @param geoObject 
         */
        public raiseObjectClickedEvent(geoObject: GeoObject): void;
        /**
          * 
         */
        public raiseRedrawScreenCompleteEvent(): void;
        /**
          * 
          * @param geoObject 
          * @param callerInfo 
         */
        public raiseTrackerCompleteEvent(geoObject: GeoObject, callerInfo: any): void;
        /**
          * 选中线图例
         */
        public focusLineLegend: Legend;
        /**
          * 选中点图例
         */
        public focusNodeLegend: Legend;
        /**
          * 选中面图例
         */
        public focusPolyLegend: Legend;
        /**
          * 
         */
        public isDrawDebugInfo: boolean;
        /**
          * 是否为地球坐标系
         */
        public isEarthCoord: boolean;
        /**
          * 是否在底部显示当前鼠标位置
         */
        public isMouseCoordVisible: boolean;
        /**
          * 
         */
        public isSimpleCoord: boolean;
        /**
          * 关联的地图数据对象
         */
        public map: Map;
        /**
          * 
         */
        public maxLevel: number;
        /**
          * 
         */
        public minLevel: number;
        /**
          * 状态条上鼠标坐标的显示位置。左中右，HorizontalAlignment类型
         */
        public mouseCoordPosition: HorizontalAlignment;
        /**
          * 
         */
        public readonly coordSystem: CoordSystem2;
        /**
          * 图层集合对象
         */
        public readonly layers: Layer2Collection;
        /**
          * 
         */
        public readonly layoutRoot: Grid;
        /**
          * 
         */
        public readonly mapCanvas: Canvas;
        /**
          * 当前鼠标的地图坐标值
         */
        public readonly mousePosition: Vector2;
        /**
          * 当前鼠标的屏幕像素坐标值
         */
        public readonly mouseScreenPosition: Vector2;
        /**
          * 
         */
        public readonly operDevice: IOperDevice;
        /**
          * 显示上下文对象
         */
        public readonly renderContext: RenderContext2;
        /**
          * 
         */
        public readonly screenOverlayGraphics: CanvasGraphics;
        /**
          * 
         */
        public readonly trackerGraphics: CanvasGraphics;
        /**
          * 
         */
        protected getTopMostUI(): UIElement;
        /**
          * 
         */
        protected initializeComponent(): void;
        /**
          * 添加选中对象集合
          * @param objects 
         */
        public addPickedObjects(objects: Array<GeoObject>): void;
        /**
          * 清除所有选中对象
         */
        public clearPickedObjects(): void;
        /**
          * 清除屏幕交互跟踪结果
         */
        public clearTrackerResult(): void;
        /**
          * 
         */
        public getCurrentOperation(): MapViewerOperation;
        /**
          * 
         */
        public handleMessage(): void;
        /**
          * 当前地图操作是否为给定的类型
          * @param tool 地图操作类型
          * @returns 
         */
        public isCurrentTool(tool: MapToolType): boolean;
        /**
          * 地图下移
         */
        public moveDown(): void;
        /**
          * 地图左移
         */
        public moveLeft(): void;
        /**
          * 地图右移
         */
        public moveRight(): void;
        /**
          * 地图上移
         */
        public moveUp(): void;
        /**
          * 
         */
        public oneDrawingStep(): void;
        /**
          * 重新绘制地图当前窗口
          * @param redrawCacheImage 
         */
        public redraw(redrawCacheImage?: boolean): void;
        /**
          * 
          * @param value 
          * @param layer 
          * @param isCacheDrawingMode 
         */
        public setCurrentOperation(value: MapViewerOperation, layer: Layer2, isCacheDrawingMode: boolean): void;
        /**
          * 
          * @param tool 
          * @param callerInfo 
         */
        public setCurrentTool(tool: MapToolType, callerInfo?: any): void;
        /**
          * 
          * @param val 
         */
        public setForceNotRedraw(val: boolean): void;
        /**
          * 
          * @param point 
         */
        public setMouseCoordString(point: Vector2): void;
        /**
          * 全图操作
         */
        public whole(): void;
        /**
          * 地图中心放大操作
         */
        public zoomIn(): void;
        /**
          * 地图中心缩小操作
         */
        public zoomOut(): void;
        /**
          * 缩放地图到指定的中心点和层级
          * @param centerPoint 中心点
          * @param level 层级
         */
        public zoomToLevel(centerPoint: Vector2, level: number): void;
        /**
          * 缩放当前地图视口到指定的地图坐标矩形范围
          * @param mapWindow 目标地图坐标矩形范围
         */
        public zoomToRect(mapWindow: Rect): void;
        /**
          * 缩放地图到指定的中心点和比例尺
          * @param centerPoint 中心点
          * @param scale 比例尺（分母）
         */
        public zoomToScale(centerPoint: Vector2, scale: number): void;
    }

    class MapViewerThreadingManager {
        constructor(mapViewer: MapViewer);
        public startThread();
    }

    enum TrackType {
        None,
        Point = 10,
        Rect = 20,
        Ellipse = 30,
        Circle,
        Polyline = 40,
        Polygon = 50
    }

    interface IOperDevice {
        coordSystem: CoordSystem2;
        graphics: CanvasGraphics;
        mapViewer: MapViewer;
        clear(): void;
        getTrackerBrush(): Brush;
        getTrackerPen(): Pen2;
        getWindowRect(): Rect;
        isProcessed(): boolean;
        redraw(): void;
        releaseCapture(): void;
        setCapture(): void;
        setProcessTag(bProcessed: boolean): void;
        updateScreen(): void;
    }

    class OperDevice implements IOperDevice {
        constructor(mapControl: MapViewer);
        public readonly coordSystem: CoordSystem2;
        public readonly graphics: CanvasGraphics;
        public readonly mapViewer: MapViewer;
        public clear(): void;
        public getTrackerBrush(): Brush;
        public getTrackerPen(): Pen2;
        public getWindowRect(): Rect;
        public isProcessed(): boolean;
        public redraw(): void;
        public releaseCapture(): void;
        public setCapture(): void;
        public setProcessTag(bProcessed: boolean): void;
        public updateScreen(): void;
    }

    class MapViewerOperation extends OperationBase {
        constructor(operDevice: IOperDevice, fatherOper?: MapViewerOperation);
        public callerInfo: any;
        public readonly operDevice: IOperDevice;
        protected cancelTask(): void;
        protected failTask(): void;
    }

    class RectZoomOperation extends MapViewerOperation {
        constructor(operDevice: IOperDevice);
        public isZoomIn: boolean;
        protected onSonOperCompleteTask(): void;
        protected onSonOperFailTask(): void;
    }

    class PanOperation extends MapViewerOperation {
        constructor(operDevice: IOperDevice);
        protected onLeftButtonDown(mouseMessage: OperMouseMessage): boolean;
        protected onLeftButtonUp(mouseMessage: OperMouseMessage): boolean;
        protected onMouseMove(mouseMessage: OperMouseMessage): boolean;
    }

    class OperationManager extends MapViewerOperation {
        constructor(mapViewer: MapViewer);
        protected onSonOperCancelTask(): void;
        protected onSonOperCompleteTask(): void;
        protected onSonOperFailTask(): void;
        public handleMessage(messageUnit: OperMessageCommon): boolean;
        public isCurrentTool(tool: MapToolType): boolean;
        public setCurrentOperation(value: MapViewerOperation, layer: Layer2, isCacheDrawingMode: boolean): void;
        public setCurrentTool(tool: MapToolType, callerInfo?: any): void;
    }

    class Tracker extends MapViewerOperation {
        constructor(operDevice: IOperDevice);
        public bounds: Rect;
        public isDblclk: boolean;
        public isFill: boolean;
        public lastPt: Vector2;
        public lengthScale: number;
        protected adjustDeviceGridCoord(pt: Vector2): Vector2;
        protected calcRectOnDevice(centerPtMap: Vector2, deviceWidth: number, deviceHeight: number): Rect;
        public createGeoObject(): GeoObject;
        public getTrackerType(): TrackType;
    }

    class PointTracker extends Tracker {
        constructor(operDevice: IOperDevice);
        protected onLeftButtonDblClk(mouseMessage: OperMouseMessage): boolean;
        public createGeoObject(): GeoObject;
    }

    class RectTracker extends Tracker {
        constructor(operDevice: IOperDevice);
        protected onLeftButtonDown(mouseMessage: OperMouseMessage): boolean;
        protected onMouseMove(mouseMessage: OperMouseMessage): boolean;
        protected onRightButtonDown(mouseMessage: OperMouseMessage): boolean;
        public createGeoObject(): GeoObject;
        public onDraw(): void;
    }

    class EllipseTracker extends RectTracker {
        constructor(operDevice: IOperDevice);
        public createGeoObject(): GeoObject;
        public onDraw(): void;
    }

    class CircleTracker extends RectTracker {
        constructor(operDevice: IOperDevice);
        protected onLeftButtonDown(mouseMessage: OperMouseMessage): boolean;
        public createGeoObject(): GeoObject;
        public onDraw(): void;
    }

    class LineTracker extends Tracker {
        constructor(operDevice: IOperDevice);
        public pointMax: number;
        public points: Array<Vector2>;
        protected onLeftButtonDblClk(mouseMessage: OperMouseMessage): boolean;
        protected onLeftButtonDown(mouseMessage: OperMouseMessage): boolean;
        protected onMouseMove(mouseMessage: OperMouseMessage): boolean;
        protected onRightButtonDown(mouseMessage: OperMouseMessage): boolean;
        public createGeoObject(): GeoObject;
        public onDraw(): void;
        public resetTask(): void;
    }

    class LineRuler extends LineTracker {
        constructor(operDevice: IOperDevice);
        protected cancelTask(): void;
        protected onLeftButtonDblClk(mouseMessage: OperMouseMessage): boolean;
        public onDraw(): void;
    }

    class PolyTracker extends LineTracker {
        constructor(operDevice: IOperDevice);
        public createGeoObject(): GeoObject;
        public onDraw(): void;
    }

    class AreaRuler extends PolyTracker {
        constructor(operDevice: IOperDevice);
        protected cancelTask(): void;
        protected onLeftButtonDblClk(mouseMessage: OperMouseMessage): boolean;
        public onDraw(): void;
    }

    class PointPickOperation extends Tracker {
        constructor(mapViewer: MapViewer);
        public pixelPrecision: number;
        protected onLeftButtonUp(mouseMessage: OperMouseMessage): boolean;
        public resetTask(): void;
    }

    class BitmapData {
        constructor(bitmap: WriteableBitmap);
        public getPixel(x: number, y: number): Color;
        public setPixel(x: number, y: number, c: Color): void;
    }

    class BitmapHelper {
        public static FilterByMask(bitmapSrc: WriteableBitmap, bitmapMask: WriteableBitmap): WriteableBitmap;
        public static MakeBitmapTransparentByColor(bitmap: WriteableBitmap, alphaRatio: number): void;
        public static ReplaceColor(bitmap: WriteableBitmap, matchColor: Color, destColor: Color, tolerance: number, outlineOnly: boolean): void;
        public static ReplaceMainColorRGB(bitmap: WriteableBitmap, newColor: Color): void;
        public static SetBitmapAlpha(bitmap: WriteableBitmap, alpha: number): void;
    }

    /**
      * WriteableBitmap 可编辑位图，内置canvas对象用于绘制。
      */
    class WriteableBitmap {
        /**
          * 
          * @param pixelWidth 
          * @param pixelHeight 
         */
        constructor(pixelWidth?: number, pixelHeight?: number);
        /**
          * 内部使用的canvas对象
         */
        public readonly canvas: HTMLCanvasElement;
        /**
          * 绘制对象
         */
        public readonly graphics: CanvasGraphics;
        /**
          * 图像数据源
         */
        public readonly imageSource: HTMLImageElement | HTMLCanvasElement;
        /**
          * 像素高度
         */
        public readonly pixelHeight: number;
        /**
          * 获取像素数组
         */
        public readonly pixels: Int32Array;
        /**
          * 像素宽度
         */
        public readonly pixelWidth: number;
        /**
          * 清除内容
         */
        public clear(): void;
        /**
          * 
         */
        public clone(): WriteableBitmap;
        /**
          * 
         */
        public commitPixelUpdate();
        /**
          * 
          * @param destBitmap 
         */
        public copyTo(destBitmap: WriteableBitmap): void;
        /**
          * 
          * @param srcX 
          * @param srcY 
          * @param destBitmap 
          * @param destRect 
         */
        public copyToRect(srcX: number, srcY: number, destBitmap: WriteableBitmap, destRect: Rect): void;
        /**
          * 
          * @param srcRect 
          * @param destBitmap 
          * @param destRect 
         */
        public copyToRectStretch(srcRect: Rect, destBitmap: WriteableBitmap, destRect: Rect): void;
        /**
          * 
         */
        public isReady(): boolean;
        /**
          * 
          * @param srcBitmap 
         */
        public resizeAndCopyFrom(srcBitmap: WriteableBitmap): void;
        /**
          * 
          * @param rawData 
          * @returns 
         */
        public static CreateFromBytes(rawData: Int32Array): WriteableBitmap;
        /**
          * 
          * @param imageOrCanvas 
          * @returns 
         */
        public static CreateFromHtmlImage(imageOrCanvas: HTMLImageElement | HTMLCanvasElement): WriteableBitmap;
        /**
          * 
          * @param url 
          * @param callback 
          * @returns 
         */
        public static CreateFromUrl(url: string, callback: (bmpEx: WriteableBitmap) => void): WriteableBitmap;
    }

    class DrawStyle {
        public brushColor: Color;
        public brushStyle: number;
        public fontName: string;
        public penColor: Color;
        public penStyle: number;
        public penWidth: number;
        public textAngle: number;
        public textColor: Color;
        public textHeight: number;
        public copyFrom(src: DrawStyle): void;
    }

    class Pen2 {
        constructor(penColor: Color, penWidth: number);
        public readonly brush: SolidColorBrush;
        public readonly color: Color;
        public readonly dashArrayH5: Array<number>;
        public readonly dashArrayString: string;
        public readonly width: number;
        public setDashPattern(dashStyle: Float32Array): void;
    }

    /**
      * CanvasGraphics 包装在canvas之上的二维绘制类
      */
    class CanvasGraphics {
        /**
          * 
          * @param canvas 
         */
        constructor(canvas: HTMLCanvasElement);
        /**
          * 
          * @param ctx 
          * @param width 
          * @param height 
         */
        public attachContext(ctx: CanvasRenderingContext2D, width: number, height: number): void;
        /**
          * 
         */
        public clear(): void;
        /**
          * 
          * @param rect 
          * @param pen 
          * @param brush 
         */
        public drawEllipse(rect: Rect, pen: Pen2, brush?: Brush): void;
        /**
          * 
          * @param bitmap 
          * @param point 
          * @param angle 
         */
        public drawImage(bitmap: WriteableBitmap, point: Vector2, angle: number): void;
        /**
          * 
          * @param bitmap 
          * @param destRect 
         */
        public drawImageStretch(bitmap: WriteableBitmap, destRect: Rect): void;
        /**
          * 
          * @param ptStart 
          * @param ptEnd 
          * @param pen 
         */
        public drawLine(ptStart: Vector2, ptEnd: Vector2, pen: Pen2): void;
        /**
          * 
          * @param points 
          * @param pen 
          * @param brush 
         */
        public drawPolygon(points: Vector2[], pen: Pen2, brush: Brush): void;
        /**
          * 
          * @param points 
          * @param pen 
         */
        public drawPolyline(points: Vector2[], pen: Pen2): void;
        /**
          * 
          * @param rect 
          * @param pen 
          * @param brush 
          * @param roundRadius 
         */
        public drawRectangle(rect: Rect, pen: Pen2, brush?: Brush, roundRadius?: number): void;
        /**
          * 
          * @param text 
          * @param point 
          * @param color 
          * @param isHalo 
         */
        public drawText(text: string, point: Vector2, color: Color, isHalo?: boolean): void;
        /**
          * 
          * @param text 
          * @param point 
          * @param angle 
          * @param color 
          * @param fontSize 
          * @param fontFamilyName 
          * @param isBold 
          * @param haloWidth 
          * @param haloColor 
         */
        public drawTextAdvance(text: string, point: Vector2, angle: number, color: Color, fontSize?: number, fontFamilyName?: string, isBold?: boolean, haloWidth?: number, haloColor?: Color): void;
        /**
          * 
          * @param text 
          * @param point 
          * @param color 
          * @param fontSize 
         */
        public drawTextFont3d(text: string, point: Vector2, color: Color, fontSize: number): void;
        /**
          * 
         */
        public getCanvas(): HTMLCanvasElement;
        /**
          * 
         */
        public getContext(): CanvasRenderingContext2D;
        /**
          * 
          * @param text 
          * @param fontSize 
          * @param fontFamilyName 
          * @returns 
         */
        public measureText(text: string, fontSize?: number, fontFamilyName?: string): Size;
        /**
          * 
          * @param text 
          * @param fontSize 
          * @param fontFamilyName 
          * @returns 
         */
        public static MeasureText(text: string, fontSize?: number, fontFamilyName?: string): Size;
    }

    /**
      * BlendingMode 三维像素混合模式
      */
    enum BlendingMode {
        /**
          * 
         */
        Opaque,
        /**
          * 
         */
        Add,
        /**
          * 
         */
        Transparent,
        /**
          * 
         */
        HalfTransparent
    }

    interface IRenderMeshChunkProvider {
        enumRenderMeshChunks(): Array<RenderMeshChunk>;
    }

    class RenderMeshChunk {
        public world: Matrix;
        public clipCenter: Vector3;
        public clipRadius: number;
        public isTransparent: boolean;
        public texture: ITexture;
        public elmentBuffer: ElementBuffer;
        public indexStart: number;
        public indexCount: number;
        constructor(world: Matrix, clipCenter: Vector3, clipRadius: number, isTransparent?: boolean, texture?: ITexture, elmentBuffer?: ElementBuffer, indexStart?: number, indexCount?: number);
    }

    /**
      * Drawing3DSetting 三维图形全局设置
      */
    class Drawing3DSetting {
        /**
          * 缺省环境光亮度0-1.0
         */
        public static AmbientLightBrightness: number;
        /**
          * 是否启用系统反锯齿效果，缺省false。显卡性能高的情况下打开可以提升显示细腻度。需要在创建EarthViewer之前设置该模式。
         */
        public static Antialias: boolean;
        /**
          * 
         */
        public static CacheRatio: number;
        /**
          * 
         */
        public static DepthBufferNearFarRatio: number;
        /**
          * 
         */
        public static DeviceSensitiveRatio: number;
        /**
          * 
         */
        public static FontScaleRatio: number;
        /**
          * 控制倾斜摄影是否使用高精度计算模式
         */
        public static HighPrecisionHeight: boolean;
        /**
          * 
         */
        public static LightDirection: Vector3;
        /**
          * 控制Lod的精细程度。缺省1.0，倾斜摄影根据该数值线性提高清晰度
         */
        public static LodRatio: number;
        /**
          * 
         */
        public static MaxTextureDetailLod: number;
        /**
          * 不使用地形时的缺省地面高度值
         */
        public static TerrainZeroBaseHeight: number;
    }

    enum StencilValue {
        Zero = 0,
        ShadowVolume = 1,
        Clip = 1,
    }

    class Graphics3 {
        constructor(canvas: Canvas);
        public fixedMeshChunkRender: SimpleTextureMeshChunkRender;
        public fontChunkRender: FontChunkRender;
        public isCulling: boolean;
        public isWireFrameMode: boolean;
        public portraitChunkRender: PortraitChunkRender;
        public readonly engine: Engine;
        public skyAtmosphereRender: SkyAtmosphereRender;
        public terrainChunkRender: TerrainChunkRender;
        public applyStates();
        public beginFrame(): void;
        public bindTexture(channel: number, texture: ITexture): void;
        public clear(color: Color, backBuffer: boolean, depthBuffer: boolean, stencilBuffer: boolean): void;
        public createEffect(baseName: string, createOptions: BABYLON.EffectCreationOptions): Effect;
        public createElement(verts: any, indices: IndicesArray, vertexDeclaration: VertexDeclaration, elmentType?: ElementType, allow32Bits?: boolean): ElementBuffer;
        public createElementFromBuffers(vertexBuffers: { [key: string]: BABYLON.VertexBuffer }, indices: IndicesArray, elmentType?: ElementType, allow32Bits?: boolean): ElementBuffer;
        public createTexture(imageSource: TexImageSource): ITexture;
        public createTextureFromBitmap(bitmap: WriteableBitmap): ITexture;
        public createTextureFromBitmapRect(bitmap: WriteableBitmap, rect: Rect, isWrap: boolean): ITexture;
        public createTextureFromBytes(data: Uint8Array, tag?: string): ITexture;
        public createTextureFromUrl(url: string, isWrap: boolean, tag?: string): ITexture;
        public deleteTexture(texture: ITexture): void;
        public drawElements(elmentBuffer: ElementBuffer, indexStart?: number, indexCount?: number): void;
        public drawInternalElements(internalBuffer: InternalElementBuffer, startIndex: number, indexCount: number): void;
        public enableEffect(effect: Effect): void;
        public enableStencilBuffer(enable: boolean, enableWrite?: boolean, referenceValue?: number): void;
        public enableVolumeBlendSrcPassOne(enable: boolean): void;
        public enableVolumeBlendSrcPassTwo(enable: boolean): void;
        public enableVolumeBlendTarget(enable: boolean): void;
        public endFrame(): void;
        public getDeltaTime(): number;
        public getLodViewRatio(): number;
        public getNearObjectMode(): boolean;
        public getViewportRect(): Rect;
        public renderNoOverlap(renderFunc: () => void): void;
        public resetStates(): void;
        public setBlendingMode(mode: BlendingMode): void;
        public setNearObjectMode(enable: boolean, depthRatio?: number): void;
        public updateElement(elmentBuffer: ElementBuffer, verts: any, indices: IndicesArray, vertexDeclaration: VertexDeclaration, elmentType?: ElementType): void;
        public updateGlobalVars(): void;
        public updateTexture(texture: ITexture, imageSource: TexImageSource): void;
    }

    enum VertexElementFormat {
        Single,
        Vector2,
        Vector3,
        Vector4,
        Color,
        Byte4,
        Short2,
        Short4,
        NormalizedShort2,
        NormalizedShort4,
        HalfVector2,
        HalfVector4
    }

    class VertexElement {
        constructor(offset: number, elementFormat: VertexElementFormat);
        public format: VertexElementFormat;
        public offset: number;
        public readonly stride: number;
    }

    class VertexDeclaration {
        constructor(elements: VertexElement[]);
        public readonly vertexByteStride: number;
        public readonly vertexFloatStride: number;
        public getVertexElements(): VertexElement[];
    }

    interface IVertexType {
        VertexDeclaration: VertexDeclaration;
        appendData(destArray: number[]): void;
    }

    class VertexBase {
        public appendColor(destArray: number[], val: Color): void;
        public appendVector2(destArray: number[], val: Vector2): void;
        public appendVector3(destArray: number[], val: Vector3): void;
        public appendVector4(destArray: number[], val: Vector4): void;
    }

    class VertexPosition extends VertexBase implements IVertexType {
        public position: Vector3;
        constructor(position?: Vector3);
        public readonly VertexDeclaration: VertexDeclaration;
        public appendData(destArray: number[]): void;
        public clone(): VertexPosition;
        public static VertexDeclaration: VertexDeclaration;
        public static VertexPosition_cctor(): void;
    }

    class VertexPositionNormalTexture extends VertexBase implements IVertexType {
        public position: Vector3;
        public normal: Vector3;
        public textureCoordinate: Vector2;
        constructor(position?: Vector3, normal?: Vector3, textureCoordinate?: Vector2);
        public readonly VertexDeclaration: VertexDeclaration;
        public appendData(destArray: number[]): void;
        public clone(): VertexPositionNormalTexture;
        public static VertexDeclaration: VertexDeclaration;
        public static prepareVertexBufferData(vertexes: Vector3Array, normals: Vector3Array, textureCoords: Vector2Array, isForErrorCheck?: boolean): Float32Array;
        public static VertexPositionNormalTexture_cctor(): void;
    }

    class VertexPositionTexture extends VertexBase implements IVertexType {
        public position: Vector3;
        public textureCoordinate: Vector2;
        constructor(position?: Vector3, textureCoordinate?: Vector2);
        public readonly VertexDeclaration: VertexDeclaration;
        public appendData(destArray: number[]): void;
        public clone(): VertexPositionTexture;
        public static VertexDeclaration: VertexDeclaration;
        public static VertexPositionTexture_cctor(): void;
    }

    class VertexPositionColorTexture extends VertexBase implements IVertexType {
        public position: Vector3;
        public color: Color;
        public textureCoordinate: Vector2;
        constructor(position?: Vector3, color?: Color, textureCoordinate?: Vector2);
        public readonly VertexDeclaration: VertexDeclaration;
        public appendData(destArray: number[]): void;
        public clone(): VertexPositionColorTexture;
        public static VertexDeclaration: VertexDeclaration;
        public static VertexPositionColorTexture_cctor(): void;
    }

    class VertexPositionColor extends VertexBase implements IVertexType {
        public position: Vector3;
        public color: Color;
        constructor(position?: Vector3, color?: Color);
        public readonly VertexDeclaration: VertexDeclaration;
        public appendData(destArray: number[]): void;
        public clone(): VertexPositionColor;
        public static VertexDeclaration: VertexDeclaration;
        public static VertexPositionColor_cctor(): void;
    }

    class VertexPositionNormalTexture2 extends VertexBase implements IVertexType {
        public position: Vector3;
        public normal: Vector3;
        public textureCoordinate: Vector2;
        public textureCoordinate2: Vector2;
        constructor(position?: Vector3, normal?: Vector3, textureCoordinate?: Vector2, textureCoordinate2?: Vector2);
        public readonly VertexDeclaration: VertexDeclaration;
        public appendData(destArray: number[]): void;
        public clone(): VertexPositionNormalTexture2;
        public static VertexDeclaration: VertexDeclaration;
        public static VertexPositionNormalTexture2_cctor(): void;
    }

    class VertexPositionNormal extends VertexBase implements IVertexType {
        public position: Vector3;
        public normal: Vector3;
        constructor(position?: Vector3, normal?: Vector3);
        public readonly VertexDeclaration: VertexDeclaration;
        public appendData(destArray: number[]): void;
        public clone(): VertexPositionNormal;
        public static VertexDeclaration: VertexDeclaration;
        public static VertexPositionNormal_cctor(): void;
    }

    class SpriteVertex extends VertexBase implements IVertexType {
        public position: Vector3;
        public color: Color;
        public options: Vector4;
        public cellInfo: Vector4;
        constructor(position?: Vector3, color?: Color, options?: Vector4, cellInfo?: Vector4);
        public readonly VertexDeclaration: VertexDeclaration;
        public appendData(destArray: number[]): void;
        public clone(): SpriteVertex;
        public static VertexDeclaration: VertexDeclaration;
        public static SpriteVertex_cctor(): void;
    }

    class PortraitVertex extends VertexBase implements IVertexType {
        public position: Vector3;
        public uvParam: Vector2;
        public imageSize: Vector2;
        constructor(position?: Vector3, uvParam?: Vector2, imageSize?: Vector2);
        public readonly VertexDeclaration: VertexDeclaration;
        public appendData(destArray: number[]): void;
        public clone(): PortraitVertex;
        public static VertexDeclaration: VertexDeclaration;
        public static PortraitVertex_cctor(): void;
    }

    class VertexDataConvertHelper {
        public static ToPositionNormal(vs: Vector3Array): VertexPositionNormal[];
        public static ToPositionNormalTexture(vertexes: Vertex3Array): Float32Array;
        public static ToPositionTexture(vertexes: Vertex3Array): VertexPositionTexture[];
    }

    enum ElementType {
        Triangles,
        TriangleStrip,
        Lines,
        LineStrip
    }

    class ElementBufferData {
        public readonly vertexs: Float32Array;
        public readonly indices: Int32Array;
        constructor(vertexs: Float32Array, indices: Int32Array);
    }

    class IndexBufferWrapper implements IDisposable {
        constructor(graphics: Graphics3, indices: IndicesArray, allow32Bits: boolean);
        public readonly is32Bits: boolean;
        public readonly length: number;
        public dispose(): void;
        public getBuffer(): DataBuffer;
        public getLinesBuffer(): DataBuffer;
        public setData(indices: IndicesArray, offset?: number): void;
    }

    class VertexBufferWrapper implements IDisposable {
        constructor(graphics: Graphics3, vertexDeclaration?: VertexDeclaration, vertexes?: any);
        public bind(indexBuffer: IndexBufferWrapper, needLineBuffer: boolean): boolean;
        public dispose(): void;
        public setData(vertexes: any, offset?: number): void;
        public static CreateFromBuffers(graphics: Graphics3, vertexBuffers: { [key: string]: BABYLON.VertexBuffer }): VertexBufferWrapper;
    }

    class ElementBuffer implements IDisposable {
        constructor(bufferManager: ElementBufferManager, id?: string);
        public readonly id: string;
        public readonly internalBuffer: InternalElementBuffer;
        public dispose(): void;
    }

    class InternalElementBuffer implements IDisposable {
        public elmentType: ElementType;
        constructor(id: string, elmentType: ElementType, vertexBuffer: VertexBufferWrapper, indexBuffer: IndexBufferWrapper);
        public readonly id: string;
        public readonly indexCount: number;
        public readonly is32Bits: boolean;
        public bind(isWireFrameMode: boolean): boolean;
        public dispose(): void;
        public setIndexData(data: any, offset?: number): void;
        public setVertexData(data: any, offset?: number): void;
    }

    class ElementBufferManager {
        constructor(graphics: Graphics3);
        public readonly count: number;
        public contains(id: string): boolean;
    }

    interface IMergedElementBufferUnit {
        buffer: ElementBuffer;
        indexCount: number;
        indexStart: number;
        dispose(): void;
    }

    class MergedElementBuffer {
        public readonly vertexDeclaration: VertexDeclaration;
        public readonly elmentType: ElementType;
        constructor(graphics: Graphics3, vertexUnitStride: number, indiceUnitStride: number, vertexDeclaration: VertexDeclaration, elmentType?: ElementType, allocMax?);
        public alloc(verts: Float32Array, indices: Uint32Array): IMergedElementBufferUnit;
        public dispose(): void;
    }

    /**
      * IMaterial 材质接口
      */
    interface IMaterial {
        /**
          * 透明度 1-1.0
         */
        alpha: number;
        /**
          * 颜色
         */
        color: Color;
        /**
          * 
         */
        isCulling: boolean;
        /**
          * 是否材质就绪
         */
        isReadyForDraw: boolean;
        /**
          * 是否使用光照效果
         */
        isUseLight: boolean;
        /**
          * 
         */
        name: string;
        /**
          * 纹理
         */
        texture: ITexture | string;
        /**
          * 
          * @param worldCamera 
          * @param world 
         */
        bindForRender(worldCamera: IWorldCamera, world: Matrix): void;
        /**
          * 
          * @param worldCamera 
          * @param world 
         */
        bindWorldOnly(worldCamera: IWorldCamera, world: Matrix): void;
        /**
          * 
         */
        dispose(): void;
    }

    /**
      * MaterialRoot 材质祖先类
      */
    class MaterialRoot implements IMaterial {
        /**
          * 
         */
        public renderContext: RenderContext3;
        /**
          * 
          * @param renderContext
          * @param name 
         */
        constructor(renderContext: RenderContext3, name: string);
        /**
          * 
         */
        public alpha: number;
        /**
          * 
         */
        public color: Color;
        /**
          * 
         */
        public graphics: Graphics3;
        /**
          * 
         */
        public isCulling: boolean;
        /**
          * 
         */
        public isUseLight: boolean;
        /**
          * 
         */
        public name: string;
        /**
          * 
         */
        public readonly isReadyForDraw: boolean;
        /**
          * 
         */
        public texture: ITexture | string;
        /**
          * 
          * @param effect 
          * @param worldCamera 
          * @param world 
          * @returns 
         */
        protected bindEffectParam(effect: Effect, worldCamera: IWorldCamera, world: Matrix);
        /**
          * 
          * @param channel 
          * @param texture 
         */
        protected bindTexture(channel: number, texture: ITexture): void;
        /**
          * 
          * @param worldCamera 
          * @param world 
         */
        public bindForRender(worldCamera: IWorldCamera, world: Matrix): void;
        /**
          * 
          * @param worldCamera 
          * @param world 
         */
        public bindWorldOnly(worldCamera: IWorldCamera, world: Matrix): void;
        /**
          * 
         */
        public dispose(): void;
        /**
          * 
          * @param geoObject 
         */
        public onAttachGeoObject(geoObject: GeoObject3): void;
        /**
          * 
          * @param propertyPath 
          * @param property 
          * @param value 
          * @returns 
         */
        public setAnimationValue(propertyPath: string[], property: string, value: any): boolean;
        /**
          * 
          * @param effect 
          * @param worldCamera 
         */
        public static BindClipPlane(effect: Effect, worldCamera: IWorldCamera): void;
    }

    /**
      * BasicMaterial 基本材质类。支持颜色和纹理、光照效果
      */
    class BasicMaterial extends MaterialRoot {
        /**
          * 
          * @param renderContext
          * @param name 
         */
        constructor(renderContext: RenderContext3, name?: string);
        /**
          * 环境光颜色
         */
        public ambientLightColor: Color;
        /**
          * 是否启用雾效果
         */
        public isFogEnabled: boolean;
        /**
          * 
         */
        public isVertexColorEnabled: boolean;
        /**
          * 是否就绪
         */
        public readonly isReadyForDraw: boolean;
        /**
          * 
         */
        public uvOffset: Vector2;
        /**
          * 
         */
        public uvScaling: Vector2;
        /**
          * 
          * @param effect 
          * @param worldCamera 
          * @param world 
          * @returns 
         */
        protected bindEffectParam(effect: Effect, worldCamera: IWorldCamera, world: Matrix);
        /**
          * 
          * @param worldCamera 
          * @param world 
         */
        public bindForRender(worldCamera: IWorldCamera, world: Matrix): void;
        /**
          * 
         */
        setColorVertexMaterailObjectDefaults(): void;
        /**
          * 设置舞效果参数
          * @param fogStart 起始距离
          * @param fogEnd 终止距离
          * @param fogColor 雾颜色
         */
        setFogParam(fogStart: number, fogEnd: number, fogColor: Color): void;
        /**
          * 
         */
        setMaterailObjectDefaults(): void;
    }

    /**
      * ColorMaterial 纯色材质。无光照效果
      */
    class ColorMaterial extends MaterialRoot {
        /**
          * 
          * @param renderContext
          * @param name 
         */
        constructor(renderContext: RenderContext3, name?: string);
        /**
          * 
          * @param effect 
          * @param worldCamera 
          * @param world 
          * @returns 
         */
        protected bindEffectParam(effect: Effect, worldCamera: IWorldCamera, world: Matrix);
    }

    /**
      * WaterMaterial 水面材质。具备反射折射等效果，可以指定颜色、风向、绘制内容等。各种尺度参数的单位都是米。
      */
    class WaterMaterial extends MaterialRoot {
        /**
          * 创建水面材质。
          * @param renderContext 显示上下文
          * @param renderTargetSize 内部使用纹理的大小，缺省1024
         */
        constructor(renderContext: RenderContext3, renderTargetSize?: number);
        /**
          * 模拟波纹需要的特殊纹理文件，必须指定。该文件通常会跟随平台示例一起发布
         */
        public bumpTexture: ITexture | string;
        /**
          * 是否启用指定图层渲染模式，缺省为false，此时绘制所有图层。主要是为大数据量情况下，减少无用绘制图层
         */
        public isUseLayer: boolean;
        /**
          * 是否启用水下折射。缺省为true
         */
        public isUseRefraction: boolean;
        /**
          * 是否绘制地形
         */
        public isUseTerrain: boolean;
        /**
          * 指定需要在倒影中绘制的图层，可以添加多层。尽在isUseLayer为true时起作用
         */
        public layers: Array<Layer3>;
        /**
          * 
         */
        public onAfterRenderReflection: Observable<void>;
        /**
          * 
         */
        public onAfterRenderRefraction: Observable<void>;
        /**
          * 
         */
        public onBeforeRenderReflection: Observable<void>;
        /**
          * 
         */
        public onBeforeRenderRefraction: Observable<void>;
        /**
          * 
         */
        public readonly reflectionTexture: RenderTexture;
        /**
          * 
         */
        public readonly refractionTexture: RenderTexture;
        /**
          * 指定水体颜色，waterColor.a值决定了水的浑浊程度，越接近1.0，颜色越不透明。
         */
        public waterColor: Color;
        /**
          * 水面波纹的大小
         */
        public waveLength: number;
        /**
          * 波纹移动方向，模拟风力或者水流效果。y正值为北。
         */
        public windDirection: Vector2;
        /**
          * 风力大小，决定波纹移动的速度
         */
        public windForce: number;
        /**
          * 
          * @param effect 
          * @param worldCamera 
          * @param world 
          * @returns 
         */
        protected bindEffectParam(effect: Effect, worldCamera: IWorldCamera, world: Matrix);
        /**
          * 系统保留
          * @param geoObject 
         */
        public onAttachGeoObject(geoObject: GeoObject3): void;
    }

    interface ITexture {
        internalTexture: InternalTexture;
        isReady: boolean;
        lod: number;
        size: Size;
        url: string;
        dispose(): void;
    }

    class TextureRefBase extends TObject implements ITexture {
        constructor(graphics: Graphics3);
        public lod: number;
        public readonly internalTexture: InternalTexture;
        public readonly isReady: boolean;
        public readonly size: Size;
        public url: string;
        protected getInternalTexture(): InternalTexture;
        public dispose(): void;
    }

    class DirectTexture extends TextureRefBase {
        constructor(graphics: Graphics3, texture: InternalTexture, isSharedTexture?: boolean);
    }

    class ImageTexture extends TextureRefBase {
        constructor(graphics: Graphics3, image: TexImageSource, isWrap: boolean, tag?: string);
        public isUseMipmap: boolean;
        protected createTextureImmediate(image: TexImageSource): boolean;
        public prepareTexture(): void;
    }

    class UrlTexture extends ImageTexture {
        constructor(graphics: Graphics3, url: string, isWrap: boolean, tag?: string);
        public prepareTexture(): void;
    }

    class AutoloadUrlTexture extends UrlTexture {
        constructor(graphics: Graphics3, url: string, isWrap: boolean, tag?: string);
        protected getInternalTexture(): InternalTexture;
    }

    class BlobTexture extends ImageTexture {
        constructor(graphics: Graphics3, data: Uint8Array, isWrap: boolean, tag?: string, autoLoad?: boolean);
        protected getInternalTexture(): InternalTexture;
        public loadImage(): void;
    }

    class RenderTexture {
        constructor(name: string, graphics: Graphics3, size: number, generateMipMaps?: boolean);
        public name: string;
        public readonly texture: ITexture;
        public checkVisible: () => boolean;
        public dispose(): void;
        public getRenderSize(): number;
        public isReady(): boolean;
        public onAfterRender: () => void;
        public onBeforeRender: () => void;
        public render(): void;
        public renderFunc: () => void;
    }

    class FontChunkRender implements IDisposable {
        constructor(graphics: Graphics3);
        public createList(): IFontChunkRenderList;
        public dispose(): void;
        public getGlobalList(): IFontChunkRenderList;
        public prepareDrawingData(timer: ProcessTimer): void;
        public renderOneList(camera: IWorldCamera, list: IFontChunkRenderList): void;
        public reset(): void;
    }

    interface IFontChunkRenderList {
        addTextChunk(positionWorld: Vector3, strText: string, color: Color, screenOffsetX: number, screenOffsetY: number, isIgnoreDepthBuffer?: boolean): void;
        clear(): void;
        dispose(): void;
    }

    interface IPortraitChunkRenderList {
        addPortraitChunk(positionWorld: Vector3, texture: ITexture, width: number, height: number, offsetX: number, offsetY: number, isIgnoreDepthBuffer?: boolean, rotationMatrix?: Matrix): void;
        clear(): void;
        dispose(): void;
    }

    class PortraitChunkRender implements IDisposable {
        constructor(graphics: Graphics3);
        public createList(): IPortraitChunkRenderList;
        public dispose(): void;
        public renderOneList(camera: IWorldCamera, list: IPortraitChunkRenderList): void;
    }

    interface ISimpleMeshChunkMaterial {
        scene: Scene;
        bindAlpha(alpha: float): void;
        bindAmbientBrightness(brightness: float): void;
        bindBasicParams(isColorOnly: boolean, isTransparent: boolean, isUseLight: boolean): void;
        bindColor(color: Vector4): void;
        bindHighlightColor(color: Vector4): void;
        bindShadow(worldCamera: IWorldCamera, scene: Scene, receiveShadow: boolean): void;
        bindTexture(name: string, texture: InternalTexture);
        bindUseAlphaTest(useAlphaTest: boolean): void;
        bindWorldOnly(world: Matrix): void;
        enableEffect(): void;
        isReady(): boolean;
        setupDefault(camera: IWorldCamera, list: SimpleTextureMeshChunkList): void;
        updateBindingParams(camera: IWorldCamera): void;
    }

    class SimpleTextureMeshChunk {
        public elmentBuffer: ElementBuffer;
        public basePoint: Vector3;
        public clipCenter: Vector3;
        public clipRadius: number;
        public transformMatrix: Matrix;
        public texture: ITexture;
        public isTransparent: boolean;
        public isWriteDepthBuffer: boolean;
        public indexStart: number;
        public indexCount: number;
        public diffuseColor: Color;
        public highlightColor: Color;
        public ambientLightBrightness: number;
        constructor(elmentBuffer?: ElementBuffer, basePoint?: Vector3, clipCenter?: Vector3, clipRadius?: number, transformMatrix?: Matrix, texture?: ITexture, isTransparent?: boolean, isWriteDepthBuffer?: boolean, indexStart?: number, indexCount?: number, diffuseColor?: Color, highlightColor?: Color, ambientLightBrightness?: number);
        public clone(): SimpleTextureMeshChunk;
    }

    class SimpleTextureMeshRenderSetting extends RenderStateBase implements IRenderState {
        public customChunkMaterial: any;
        public isErrorCheck: boolean;
        public lightDirection: Vector3;
        public overlayTexture: Texture;
        public overlayTextureMatrix: Matrix;
        public sortBuffer: boolean;
    }

    class SimpleTextureMeshChunkList {
        constructor(render: SimpleTextureMeshChunkRender, name: string);
        public name: string;
        public readonly count: number;
        public setting: SimpleTextureMeshRenderSetting;
        public addChunk(chunk: SimpleTextureMeshChunk): void;
        public addChunks(chunks: Array<SimpleTextureMeshChunk>): void;
        public clear(): void;
        public dispose(): void;
        public enumChunks(): Array<SimpleTextureMeshChunk>;
        public prepareBeforeRender(): void;
    }

    class SimpleTextureMeshChunkRender {
        constructor(graphics: Graphics3, effectName: string, renderName: string);
        public createList(): SimpleTextureMeshChunkList;
        public releaseList(list: SimpleTextureMeshChunkList): void;
        public renderOneList(camera: IWorldCamera, list: SimpleTextureMeshChunkList): void;
        public static IsTransparentColorTextureChunk(chunk: SimpleTextureMeshChunk): boolean;
    }

    class DefaultSimpleMeshChunkMaterial implements ISimpleMeshChunkMaterial {
        constructor(graphics: Graphics3, effectName: string);
        public scene: Scene;
        public bindAlpha(alpha: float): void;
        public bindAmbientBrightness(brightness: float): void;
        public bindBasicParams(isColorOnly: boolean, isTransparent: boolean, isUseLight: boolean): void;
        public bindColor(color: Vector4): void;
        public bindHighlightColor(color: Vector4): void;
        public bindShadow(worldCamera: IWorldCamera, scene: Scene, receiveShadow: boolean): void;
        public bindTexture(name: string, texture: InternalTexture);
        public bindUseAlphaTest(useAlphaTest: boolean): void;
        public bindWorldOnly(world: Matrix): void;
        public enableEffect(): void;
        public isReady(): boolean;
        public setupDefault(camera: IWorldCamera, list: SimpleTextureMeshChunkList): void;
        public updateBindingParams(camera: IWorldCamera): void;
    }

    class BabylonStandardSimpleMeshChunkMaterial implements ISimpleMeshChunkMaterial {
        constructor(graphics: Graphics3, scene: Scene);
        public scene: Scene;
        public bindAlpha(alpha: float): void;
        public bindAmbientBrightness(brightness: float): void;
        public bindBasicParams(isColorOnly: boolean, isTransparent: boolean, isUseLight: boolean);
        public bindColor(color: Vector4): void;
        public bindHighlightColor(color: Vector4): void;
        public bindShadow(worldCamera: IWorldCamera, scene: Scene, receiveShadow: boolean): void;
        public bindTexture(name: string, texture: InternalTexture);
        public bindUseAlphaTest(useAlphaTest: boolean): void;
        public bindWorldOnly(world: Matrix): void;
        public enableEffect(): void;
        public isReady(): boolean;
        public setupDefault(camera: IWorldCamera, list: SimpleTextureMeshChunkList): void;
        public updateBindingParams(camera: IWorldCamera): void;
    }

    class TerrainChunk {
        public elmentBuffer: ElementBuffer;
        public level: number;
        public basePoint: Vector3;
        public clipCenter: Vector3;
        public clipRadius: number;
        public texture: ITexture;
        public isTransparent: boolean;
        public indexStart: number;
        public indexCount: number;
        public overlayTextures: Array<ITexture>;
        constructor(elmentBuffer: ElementBuffer, level: number, basePoint: Vector3, clipCenter: Vector3, clipRadius: number, texture: ITexture, isTransparent: boolean, indexStart: number, indexCount: number, overlayTextures?: Array<ITexture>);
        public isNoDepth: boolean;
        public isToClearDepth: boolean;
    }

    class TerrainRenderSetting {
        public alpha: number;
        public cameraPos: Vector3;
        public fogColor: Color;
        public fogEnd: number;
        public fogStart: number;
        public isFogEnabled: boolean;
        public isUseAtmosphere: boolean;
        public isUseLight: boolean;
        public isUseTexture: boolean;
        public lightDirection: Vector3;
        public terrainColor: Color;
        public zIndex: number;
    }

    class TerrainChunkRender {
        constructor(graphics: Graphics3, effectName: string, renderName: string);
        public setting: TerrainRenderSetting;
        public addTerrainChunks(chunks: Array<TerrainChunk>): void;
        public clear(): void;
        public render(camera: IWorldCamera): void;
    }

    class SkyAtmosphereRender {
        constructor(graphics: Graphics3);
        public dispose(): void;
        public render(camera: IWorldCamera): void;
    }

    /**
      * IWorldCamera 世界相机接口，坐标为世界坐标系。提供当前场景的绘制信息，尤其是各种绘制矩阵。
      */
    interface IWorldCamera {
        /**
          * 
         */
        aspectRatio: number;
        /**
          * 场景中心点
         */
        center: Vector3;
        /**
          * 
         */
        clipPlane: Plane;
        /**
          * 视点
         */
        eye: Vector3;
        /**
          * 
         */
        farPlane: number;
        /**
          * 
         */
        fov: number;
        /**
          * Frustum平面集合
         */
        frustumPlanes: Plane[];
        /**
          * 
         */
        mirroredCameraPosition: Vector3;
        /**
          * 
         */
        mirroredViewMatrix: Matrix;
        /**
          * 
         */
        nearPlane: number;
        /**
          * 
         */
        projectionMatrix: Matrix;
        /**
          * 
         */
        viewMatrix: Matrix;
        /**
          * 视口
         */
        viewport: Viewport;
        /**
          * 
         */
        viewProjectionMatrix: any;
        /**
          * 
         */
        worldMatrix: Matrix;
        /**
          * 
         */
        disableMirrorMode(): void;
        /**
          * 
         */
        enableMirrorMode(): void;
        /**
          * 判断给定点是否在Frustum视野内
          * @param center 指定点
          * @param radius 半径
          * @returns 有相交则返回true
         */
        isSphereInFrustum(center: Vector3, radius: number): boolean;
        /**
          * 屏幕坐标转换为世界坐标
          * @param screenV 屏幕坐标
          * @param depth 深度值（0-1.0）
          * @returns 世界坐标值
         */
        screenToWorld(screenV: Vector2, depth: number): Vector3;
        /**
          * 
          * @param screenV 
          * @param depth 
          * @param result 
         */
        screenToWorldToRef(screenV: Vector2, depth: number, result: Vector3): void;
        /**
          * 世界坐标转换为屏幕坐标
          * @param worldV 世界坐标
          * @returns 屏幕坐标
         */
        worldToScreen(worldV: Vector3): Vector2;
        /**
          * 
          * @param worldV 
          * @param result 
         */
        worldToScreenToRef(worldV: Vector3, result: Vector2): void;
    }

    class WorldCoordSystem {
        constructor(viewport?: Viewport, worldMatrix?: Matrix, viewMatrix?: Matrix, projectionMatrix?: Matrix, center?: Vector3);
        public projectionMatrix: Matrix;
        public viewMatrix: Matrix;
        public viewport: Viewport;
        public worldMatrix: Matrix;
        public screenToWorldDouble(x: number, y: number, depth: number): Vector3;
        public screenToWorldDoubleRef(x: number, y: number, depth: number, result: Vector3): void;
        public screenToWorldLine(pt: Vector2, pt1: Vector3, pt2: Vector3): void;
        public worldToScreenDouble(x: number, y: number, z: number): Vector2;
        public worldToScreenDoubleRef(x: number, y: number, z: number, result: Vector2): void;
        public static CreateFromClone(coordSystem: WorldCoordSystem): WorldCoordSystem;
    }

    class WorldCamera extends WorldCoordSystem implements IWorldCamera {
        public aspectRatio: number;
        public clipPlane: Plane;
        public farPlane: number;
        public fov: number;
        public frustumPlanes: Plane[];
        public mirroredCameraPosition: Vector3;
        public mirroredViewMatrix: Matrix;
        public nearPlane: number;
        public readonly center: Vector3;
        public readonly eye: Vector3;
        public readonly viewProjectionMatrix: Matrix;
        public disableMirrorMode();
        public enableMirrorMode(): void;
        public getViewportRect(): Rect;
        public initViewport(viewportRect: Rect, fovRadian: number, nearPlane: number, farPlane: number): void;
        public isSphereInFrustum(center: Vector3, radius: number): boolean;
        public screenToWorld(screenV: Vector2, depth: number): Vector3;
        public screenToWorldToRef(screenV: Vector2, depth: number, result: Vector3): void;
        public updateLookAt(eye: Vector3, center: Vector3, up: Vector3, eyeGlobal: Vector3, centerGlobal: Vector3, isGlobalTransform: boolean): void;
        public worldToScreen(worldV: Vector3): Vector2;
        public worldToScreenToRef(worldV: Vector3, result: Vector2): void;
    }

    /**
      * SkyMaterial 
      */
    class SkyMaterial extends BABYLON.PushMaterial {
        /**
          * 
          * @param name 
          * @param scene 
         */
        constructor(name: string, scene: BABYLON.Scene);
        /**
          * 
         */
        public azimuth: number;
        /**
          * 
         */
        public distance: number;
        /**
          * 
         */
        public inclination: number;
        /**
          * 
         */
        public luminance: number;
        /**
          * 
         */
        public mieCoefficient: number;
        /**
          * 
         */
        public mieDirectionalG: number;
        /**
          * 
         */
        public rayleigh: number;
        /**
          * 
         */
        public sunPosition: BABYLON.Vector3;
        /**
          * 
         */
        public turbidity: number;
        /**
          * 
         */
        public useSunPosition: boolean;
        /**
          * 
          * @param world 
          * @param mesh 
          * @param subMesh 
         */
        public bindForSubMesh(world: BABYLON.Matrix, mesh: BABYLON.Mesh, subMesh: BABYLON.SubMesh): void;
        /**
          * 
          * @param name 
          * @returns 
         */
        public clone(name: string): SkyMaterial;
        /**
          * 
          * @param forceDisposeEffect 
         */
        public dispose(forceDisposeEffect?: boolean): void;
        /**
          * 
         */
        public getAlphaTestTexture(): Nullable<BABYLON.BaseTexture>;
        /**
          * 
         */
        public getAnimatables(): BABYLON.IAnimatable[];
        /**
          * 
         */
        public getClassName(): string;
        /**
          * 
          * @param mesh 
          * @param subMesh 
          * @param useInstances 
          * @returns 
         */
        public isReadyForSubMesh(mesh: BABYLON.AbstractMesh, subMesh: BABYLON.SubMesh, useInstances?: boolean): boolean;
        /**
          * 
         */
        public needAlphaBlending(): boolean;
        /**
          * 
         */
        public needAlphaTesting(): boolean;
    }

    /**
      * LineInterpolation 折线线性插值对象。把整条折线线性映射到给定的最大值范围，然后可以中间值来取得对应的线上插值点。
      * 通常可以用于路径飞行或者动画模拟。可以结合Spline进行平滑处理。
      */
    class LineInterpolation {
        /**
          * 
          * @param coordSystem 
          * @param points 
          * @param totalValue 
          * @param stepCount 
         */
        constructor(coordSystem: ICoordSystem3, points: Vector3[], totalValue: number, stepCount?: number);
        /**
          * 是否循环取值
         */
        public isLoop: boolean;
        /**
          * 获取指定值对于的折线上插值点。
          * @param curValue 
          * @returns 
         */
        public getPosition(curValue: number): Vector3;
    }

    class Math2Impl implements IMath2 {
        public Angle(x1: number, y1: number, x2: number, y2: number): number;
        public Area(points: Vector2[]): number;
        public Buffer(points: Vector2[], radius: number, isRoundJoin: boolean, isRoundEnd: boolean, isClosed: boolean): Vector2[];
        public BufferPoint(center: Vector2, radius: number): Vector2[];
        public Distance(x1: number, y1: number, x2: number, y2: number): number;
        public DistancePoint(pt1: Vector2, pt2: Vector2): number;
        public DistancePointLine(pt: Vector2, linePoints: Vector2[]): number;
        public Length(points: Vector2[]): number;
    }

    class Math3Impl implements IMath3 {
        public Area(triPoints: Vector3[]): number;
        public Distance(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
        public DistanceLineLine(points1: Vector3[], points2: Vector3[]): number;
        public DistanceLineLineAdvance(points1: Vector3[], points2: Vector3[], resultLinePoints: RefValue<Array<Vector3>>): number;
        public DistancePoint(pt1: Vector3, pt2: Vector3): number;
        public DistancePointLine(point: Vector3, points: Vector3[]): number;
        public DistancePointLineAdvance(point: Vector3, points: Vector3[], resultPoint: Vector3): number;
        public Length(points: Vector3[]): number;
    }

    class CoordSystemBase {
        constructor(worldCamera: WorldCamera);
        public earthToLocal(originCenter: Vector3, earthPoint: Vector3): Vector3;
        public earthToLocalArray(originCenter: Vector3, earthPoints: Vector3[]): Vector3[];
        public earthToLocalToRef(originCenter: Vector3, earthPoint: Vector3, result: Vector3): void;
        public localToEarth(originCenter: Vector3, localPoint: Vector3): Vector3;
        public localToEarthArray(originCenter: Vector3, localPoints: Vector3[]): Vector3[];
        public localToEarthToRef(originCenter: Vector3, localPoint: Vector3, result: Vector3): void;
        public screenToWorld(pt: Vector2, depth: number): Vector3;
        public screenToWorldLine(pt: Vector2): Vector3[];
        public screenToWorldToRef(pt: Vector2, depth: number, result: Vector3): void;
        public worldToScreen(pt: Vector3): Vector2;
        public worldToScreenToRef(pt: Vector3, result: Vector2): void;
    }

    class EarthCoordSystem extends CoordSystemBase implements ICoordSystem3 {
        constructor(worldCamera: WorldCamera);
        public readonly math2: IMath2;
        public readonly math3: IMath3;
        public calcRotationMatrix(position: Vector3): Matrix;
        public calcUpVector(pos: Vector3): Vector3;
        public earthToLocalToRef(originCenter: Vector3, earthPoint: Vector3, result: Vector3): void;
        public earthToMeter(global: number): number;
        public earthToWorld(point: Vector3): Vector3;
        public earthToWorldArray(points: Vector3[]): Vector3[];
        public earthToWorldToRef(point: Vector3, result: Vector3): void;
        public localToEarthToRef(originCenter: Vector3, localPoint: Vector3, result: Vector3): void;
        public meterToEarth(meter: number): number;
        public transformLightDirection(position: Vector3, lightDirection: Vector3): Vector3;
        public worldToEarth(point: Vector3): Vector3;
        public worldToEarthArray(points: Vector3[]): Vector3[];
        public worldToEarthToRef(point: Vector3, result: Vector3): void;
    }

    class NonEarthCoordSystem extends CoordSystemBase implements ICoordSystem3 {
        constructor(worldCamera: WorldCamera);
        public readonly math2: IMath2;
        public readonly math3: IMath3;
        public calcRotationMatrix(position: Vector3): Matrix;
        public calcUpVector(pos: Vector3): Vector3;
        public earthToLocalToRef(originCenter: Vector3, earthPoint: Vector3, result: Vector3): void;
        public earthToMeter(global: number): number;
        public earthToWorld(mapPt: Vector3): Vector3;
        public earthToWorldArray(points: Vector3[]): Vector3[];
        public earthToWorldToRef(mapPt: Vector3, reslt: Vector3): void;
        public localToEarthToRef(originCenter: Vector3, localPoint: Vector3, result: Vector3): void;
        public meterToEarth(meter: number): number;
        public transformLightDirection(position: Vector3, lightDirection: Vector3): Vector3;
        public worldToEarth(devicePt: Vector3): Vector3;
        public worldToEarthArray(points: Vector3[]): Vector3[];
        public worldToEarthToRef(devicePt: Vector3, result: Vector3): void;
    }

    /**
      * CameraPositionInfo 相机视角定义参数。目前相机没有使用roll参数
      */
    class CameraPositionInfo {
        /**
          * 
          * @param centerX 
          * @param eyeDistance 
          * @param centerZ 
          * @param heading 
          * @param pitch 
         */
        constructor(centerX: number, eyeDistance: number, centerZ: number, heading: number, pitch: number);
        /**
          * 
         */
        public centerX: number;
        /**
          * 
         */
        public centerZ: number;
        /**
          * 
         */
        public eyeDistance: number;
        /**
          * 
         */
        public heading: number;
        /**
          * 
         */
        public pitch: number;
        /**
          * 
         */
        public clone(): CameraPositionInfo;
        /**
          * 
          * @param otherInfo 
          * @returns 
         */
        public equals(otherInfo: CameraPositionInfo): boolean;
    }

    /**
      * Camera 相机类，用于控制三维场景视角。
      */
    class Camera extends OperationBase {
        /**
          * 
          * @param renderContext 
         */
        constructor(renderContext: RenderContext3);
        /**
          * 
         */
        protected readonly isDirty: boolean;
        /**
          * 中心点基准高度。缺省为0，可以指定为特定高度
         */
        public baseCenterHeight: number;
        /**
          * 视点基准高度。如果指定，视点将不低于该高度
         */
        public baseEyeHeight: number;
        /**
          * 相机动画
         */
        public cameraAnimation: ICameraAnimation;
        /**
          * 相机操作惯性系数(0-1.0)，缺省0.9。如果为0, 则无自动延迟滑动等效果
         */
        public inertia: number;
        /**
          * 
         */
        public isAdvanceRotateMode: boolean;
        /**
          * 是否锁定中心
         */
        public isLockCenter: boolean;
        /**
          * 最大方向角
         */
        public maxHeading: number;
        /**
          * 最大俯仰角
         */
        public maxPitch: number;
        /**
          * 最小方向角（度）
         */
        public minHeading: number;
        /**
          * 最小俯仰角（+-90度）
         */
        public minPitch: number;
        /**
          * 中心点
         */
        public readonly center: Vector3;
        /**
          * 坐标系统
         */
        public readonly coordSystem: ICoordSystem3;
        /**
          * 视点
         */
        public readonly eye: Vector3;
        /**
          * 视点到中心点距离
         */
        public readonly eyeDistance: number;
        /**
          * 方向角,（0-360度），正北为0
         */
        public readonly heading: number;
        /**
          * 是否在移动
         */
        public readonly isMoving: boolean;
        /**
          * 是否正在漫游操作
         */
        public readonly isPanStarted: boolean;
        /**
          * 俯仰角（+-90度），正下方俯视为-90度
         */
        public readonly pitch: number;
        /**
          * 
         */
        public readonly position: Vector3;
        /**
          * 绘制上下文
         */
        public readonly renderContext: RenderContext3;
        /**
          * 正上方向量
         */
        public readonly up: Vector3;
        /**
          * 世界坐标相机
         */
        public readonly worldCamera: IWorldCamera;
        /**
          * 世界坐标中心点
         */
        public readonly worldCenter: Vector3;
        /**
          * 世界坐标视点
         */
        public readonly worldEye: Vector3;
        /**
          * 相机基本移动速度乘数比例，缺省为1.0
         */
        public speedRatio: number;
        /**
          * 
         */
        protected getCoordSystem(): ICoordSystem3;
        /**
          * 
         */
        protected updateCameraFromDefineParams(): void;
        /**
          * 
         */
        protected verifyHeadingAndPitch(): void;
        /**
          * 
          * @param point 
          * @param height 
          * @returns 
         */
        protected verifyHeightByLimit(point: Vector2, height: number): number;
        /**
          * 
          * @param point 
          * @returns 
         */
        protected verifyPositionByLimit(point: Vector2): Vector2;
        /**
          * 
         */
        public clearNavigateRange(): void;
        /**
          * 沿路径飞行
          * @param points 路径点数组
          * @param totalMs 总体毫秒数
          * @param pitch 指定固定俯仰角，如不指定则朝向飞行方向
          * @returns 飞行结束时返回Promise
         */
        public flyRoute(points: Vector3[], totalMs: number, pitch?: number): Promise<Camera>;
        /**
          * 
          * @param target 
          * @param heading 
          * @param pitch 
          * @param totalMs 
          * @param delayMs 
          * @returns 
         */
        public flyTo(target: Vector3, heading?: number, pitch?: number, totalMs?: number, delayMs?: number): Promise<Camera>;
        /**
          * 是否有飞行动画
         */
        public hasActiveAnimation(): boolean;
        /**
          * 设置视口信息，系统内部调用。
          * @param viewportRect 
          * @param fovRadian 
          * @param nearPlane 
          * @param farPlane 
         */
        public initViewport(viewportRect: Rect, fovRadian: number, nearPlane: number, farPlane: number): void;
        /**
          * 使用视点，中心点，向上向量直接定义相机位置，坐标为地球坐标系。此函数一般用在比较高级的用户自定义相机操作。
          * @param eye 
          * @param center 
          * @param up 
         */
        public lookAt(eye: Vector3, center: Vector3, up?: Vector3): void;
        /**
          * 设置视点漫游的范围，如果设置此值，相机的移动被限制在此范围内
          * @param center 中心点，经纬度
          * @param radius 活动半径，米
         */
        public setNavigateRange(center: Vector3, radius: number): void;
        /**
          * 决定相机位置的所有参数
          * @param target x,y,z 分别是目标经度，中心点距离，目标纬度
          * @param heading 水平方向角，单位度，正北为0，顺时针为正
          * @param pitch 垂直方向角，单位度，垂直向下为-90
          * @param baseCenterHeight 中心点基准高度，通常是地形的高度
         */
        public setView(target: Vector3, heading?: number, pitch?: number, baseCenterHeight?: number): void;
        /**
          * 通过窗口视野范围方向角设置相机位置
          * @param range 视野经纬度范围
          * @param heading 水平方向角，单位度，正北为0，顺时针为正
          * @param pitch 垂直方向角，单位度，垂直向下为-90
         */
        public setViewByRange(range: Rect, heading?: number, pitch?: number): void;
        /**
          * 强制停止相机动画
         */
        public stopAnimation(): void;
        /**
          * 缩放到图层范围的视野
          * @param layer 目标图层
          * @returns Promise
         */
        public zoomToLayer(layer: Layer3): Promise<Camera>;
    }

    interface ICameraAnimation {
        isActive: boolean;
        nextPosition: CameraPositionInfo;
        clear(): void;
        onFinish: () => void;
    }

    class CameraAnimationBase {
        constructor(camera: Camera, delayMs: number);
        public onFinish: () => void;
    }

    class FlyingAnimation extends CameraAnimationBase implements ICameraAnimation {
        constructor(camera: Camera, totalMs: number, startInfo: CameraPositionInfo, endInfo: CameraPositionInfo, delayMs: number);
        public isActive: boolean;
        public readonly nextPosition: CameraPositionInfo;
        public clear(): void;
    }

    class RouteFlyingAnimation extends CameraAnimationBase implements ICameraAnimation {
        constructor(camera: Camera, points: Vector3[], totalMs: number, pitch?: number);
        public isActive: boolean;
        public readonly nextPosition: CameraPositionInfo;
        public clear(): void;
    }

    class CentricCamera extends Camera {
        public earthViewer: EarthViewer;
        constructor(earthViewer: EarthViewer);
        protected readonly isDirty: boolean;
        protected readonly isNeedInitParam: boolean;
        public readonly isMoving: boolean;
        public readonly isPanStarted: boolean;
        protected adjustEyePos(): boolean;
        protected calculateMouseDownSurfaceHeight(): number;
        protected onKeyDown(keyParam: OperKeyMessage): boolean;
        protected onLeftButtonDown(mouseMessage: OperMouseMessage): boolean;
        protected onLeftButtonUp(mouseMessage: OperMouseMessage): boolean;
        protected onMouseMove(mouseMessage: OperMouseMessage): boolean;
        protected onMouseWheel(mouseMessage: OperMouseMessage): boolean;
        protected onRightButtonDown(mouseMessage: OperMouseMessage): boolean;
        protected onRightButtonUp(mouseMessage: OperMouseMessage): boolean;
        protected onSetViewBaseCenterHeight(baseCenterHeight?: number): void;
        protected prepareLookAtParam(): void;
        protected setAngleDelta(headingDelta: number, pitchDelta: number): void;
        protected setEyeDistanceDelta(eyeDistanceDelta: number): void;
        protected setIsNeedInitParamDirty(): void;
        protected setPosDeltaWrapper(xDelta: number, eyeDistanceDelta: number, zDelta: number, headingDelta: number, pitchDelta: number, isFirstLookAt?: boolean): void;
        protected setTranslateDelta(xDelta: number, zDelta: number): void;
        protected updateCameraCenterHeight(): void;
        protected updateCameraFromDefineParams(): void;
        public calcSurfaceHitPoint(worldPt1: Vector3, worldPt2: Vector3, height: number, resultWorldPoint: Vector3): boolean;
    }

    class EarthCentricCamera extends CentricCamera {
        constructor(earthViewer: EarthViewer);
        protected calculateMouseDownSurfaceHeight(): number;
        protected getCoordSystem(): ICoordSystem3;
        protected prepareLookAtParam(): void;
        protected updateCameraFromDefineParams(): void;
        public calcSurfaceHitPoint(worldPt1: Vector3, worldPt2: Vector3, height: number, resultWorldPoint: Vector3): boolean;
        public lookAt(eye: Vector3, center: Vector3, up?: Vector3): void;
    }

    class NonEarthCentricCamera extends CentricCamera {
        constructor(earthViewer: EarthViewer);
        protected getCoordSystem(): ICoordSystem3;
        protected prepareLookAtParam(): void;
        public calcSurfaceHitPoint(worldPt1: Vector3, worldPt2: Vector3, height: number, resultWorldPoint: Vector3): boolean;
    }

    class PrimitivesFactory {
        public static CreateBox(size?: number): MeshVertexData;
        public static CreateCylinder(height?: number, diameterTop?: number, diameterBottom?: number, tessellation?: number, subdivisions?: number): MeshVertexData;
        public static CreateGround(width?: number, height?: number, subdivisions?: number): MeshVertexData;
        public static CreatePlane(size?: number): MeshVertexData;
        public static CreatePolyBox(topPoints: Vector3[], bottomPoints: Vector3[], hasTopCover: boolean, hasBottomCover: boolean): MeshVertexData;
        public static CreatePolygon(points: Vector3[]): MeshVertexData;
        public static CreateRect(width: number, height: number, u1: number, v1: number, u2: number, v2: number): MeshVertexData;
        public static CreateSphere(diameter?: number, segments?: number): MeshVertexData;
        public static CreateTeapot(size: number, tessellation: number): MeshVertexData;
        public static CreateTorus(diameter?: number, thickness?: number, tessellation?: number): MeshVertexData;
        public static CreateTorusKnot(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, p?: number, q?: number): MeshVertexData;
        public static CreateWall(bottomCenterPoints: Vector3[], height: number, thickness: number, isRoundJoin?: boolean): MeshVertexData;
    }

    class BlockTextureInfo {
        public textureFile: string;
        public xCount: number;
        public xIndex: number;
        public yCount: number;
        public yIndex: number;
        public static CreateFromCopy(srcInfo: BlockTextureInfo): BlockTextureInfo;
    }

    class MeshMaterialDefine {
        public ambientColor: Color;
        public blockTextureInfos: BlockTextureInfo[];
        public diffuseColor: Color;
        public emissiveColor: Color;
        public name: string;
        public power: number;
        public specularColor: Color;
        public textureFile: string;
        public isTransparent(): boolean;
    }

    class MeshData_PositionData {
        constructor(vertexes: Array<Vector3>, normals: Array<Vector3>, textureCoords: Array<Vector2>);
        public normals: Array<Vector3>;
        public textureCoords: Array<Vector2>;
        public vertexes: Array<Vector3>;
        public static FromTextureVertexData(textureVertexes: Array<VertexPositionNormalTexture>, hasNormal: boolean): MeshData_PositionData;
    }

    class SubMeshData {
        constructor(mesh: MeshData, materialName?: string, startTriIndex?: number, triCount?: number);
        public bounds: Box;
        public diffuseColor: Color;
        public materialName: string;
        public mesh: MeshData;
        public startTriIndex: number;
        public triCount: number;
        public enumTriNos(): Array<number>;
        public getAllMeshPoints(): Array<Vector3>;
        public getBounds(): Box;
        public static CreateFromCopy(mesh: MeshData, src: SubMeshData): SubMeshData;
    }

    class MeshData {
        constructor(name: string);
        public bounds: Box;
        public materialName: string;
        public materials: CloneList<MeshMaterialDefine>;
        public name: string;
        public normals: CloneList<Vector3>;
        public packFile: string;
        public subs: CloneList<SubMeshData>;
        public textureCoords: CloneList<Vector2>;
        public triangles: CloneList<Triangle3>;
        public vertexes: CloneList<Vector3>;
        public calcRange(): Box;
        public calculateNormal(): void;
        public calculateSubMeshRange(): Array<Box>;
        public copyTriangleAndSubMeshes(srcMesh: MeshData): void;
        public enumTriNos(): Array<number>;
        public getAllMeshPoints(): Array<Vector3>;
        public getPositionData(): MeshData_PositionData;
        public prepareTextureVertexes(forceRecreate?: boolean): Array<VertexPositionNormalTexture>;
        public scaleMesh(scaleTo: number): boolean;
        public setPositionData(positionData: MeshData_PositionData): void;
        public static FromVertexData(vertexData: MeshVertexData): MeshData;
    }

    class MeshVertexData {
        public positions: Array<Vector3>;
        public indices: Array<number>;
        public normals: Array<Vector3>;
        public uvs: Array<Vector2>;
        constructor(positions?: Array<Vector3>, indices?: Array<number>, normals?: Array<Vector3>, uvs?: Array<Vector2>);
        public clone(): MeshVertexData;
        public static Create(positions: Vector3[], indices?: Array<number>, normals?: Array<Vector3>, uvs?: Array<Vector2>): MeshVertexData;
        public static CreateFromEarthToRelativeWorld(coordSystem: ICoordSystem3, triPoints: Vector3[], indices?: Array<number>, normals?: Array<Vector3>, uvs?: Array<Vector2>): MeshVertexData;
        public static FromBabylon(byVertexData: BABYLON.VertexData): MeshVertexData;
        public static Merge(vertexData: MeshVertexData, other: MeshVertexData): void;
        public static Scale(vertexData: MeshVertexData, scale: Vector3): void;
        public static ToVertexNormal(vertexData: MeshVertexData): VertexPositionNormal[];
        public static ToVertexPositionNormalTexture(vertexData: MeshVertexData): VertexPositionNormalTexture[];
        public static Transform(vertexData: MeshVertexData, matrix: Matrix): void;
        public static TransformToLocalCalc(coordSystem: ICoordSystem3, earthPoints: Vector3[], localCalcFunc: (localPoints: Vector3[]) => MeshVertexData): MeshVertexData;
        public static TransformToLocalCalc2(coordSystem: ICoordSystem3, earthPoints0: Vector3[], earthPoints1: Vector3[], localCalcFunc: (localPoints0: Vector3[], localPoints1: Vector3[]) => MeshVertexData): MeshVertexData;
    }

    class RenderMesh implements IDisposable {
        constructor(graphics: Graphics3, vertexData: MeshVertexData);
        public readonly boundingInfo: BoundingInfo;
        public dispose(): void;
        public enumRenderChunks(graphics: Graphics3, world: Matrix, clipCenter: Vector3): Array<RenderMeshChunk>;
        public getTrianglePoints(): Vector3Array;
        public intersects(ray: Ray, fastCheck?: boolean): IntersectionInfo;
        public render(graphics: Graphics3, worldCamera: IWorldCamera, material: IMaterial, world?: Matrix): void;
        public updateMesh(vertexData: MeshVertexData);
    }

    class LineRenderMesh {
        constructor(renderContext: RenderContext3, originWorld, localPoints: Vector3[], isLineList?: boolean);
        public dispose(): void;
        public draw(graphics: Graphics3, worldCamera: IWorldCamera, color: Color, isUseDepthBuffer?: boolean, world?: Matrix): void;
    }

    class PipelineMeshFactory {
        public static CreatePipeMesh(centerLinePoints: Vector3[], shape2: Vector2[], isRoundTurn?: boolean, beginNeighbour?: Vector3, endNeighbour?: Vector3): MeshVertexData;
    }

    class Transform3 {
        public heading: number;
        public matrix: Matrix;
        public onUpdate: Observable<void>;
        public pitch: number;
        public quaternion: Quaternion;
        public roll: number;
        public xScale: number;
        public yScale: number;
        public zScale: number;
        public reset();
        public rotateBetweenVectors(fromVector: Vector3, toVector: Vector3): void;
        public scale(xScale?: number, yScale?: number, zScale?: number): void;
    }

    class Object3 extends PickableObject {
        public readonly localTransform: Transform3;
        public readonly onAfterRender: Observable<Object3>;
        public readonly onBeforeRender: Observable<Object3>;
        public readonly worldMatrix: Matrix;
        protected calcSelfOnlyRenderMatrix(): Matrix;
        protected notifyOnAfterRender(): void;
        protected notifyOnBeforeRender(): void;
        protected onWorldMatrixUpdated(): void;
        protected setGlobalWorldMatrix(globalWorld: Matrix): void;
        public localToWorld(pt: Vector3): Vector3;
        public localToWorldToRef(pt: Vector3, result: Vector3): void;
        public worldToLocal(pt: Vector3): Vector3;
        public worldToLocalToRef(pt: Vector3, result: Vector3): void;
    }

    class RichTextLayoutInfo {
        canvasBounds: Rect;
        textBounds: Rect;
        textOrg: Vector2;
    }

    class RichTextRenderEventArgs extends EventArgs {
        public graphics: CanvasGraphics;
        public isCancel: boolean;
        constructor(graphics: CanvasGraphics, isCancel?: boolean);
    }

    /**
      * RichTextProperty 标注风格高级设置类
      */
    class RichTextProperty {
        /**
          * 内部使用
          * @param evt 
          * @returns 
         */
        public onBeforeRender: (evt: RichTextRenderEventArgs) => void;
        /**
          * 锚点色
         */
        public anchorColor: Color;
        /**
          * 背景色
         */
        public backgroundColor: Color;
        /**
          * 边框色
         */
        public borderColor: Color;
        /**
          * 边框宽度
         */
        public borderWidth: number;
        /**
          * 字体名称
         */
        public fontFamilyName: string;
        /**
          * 是否有锚点
         */
        public isAnchor: boolean;
        /**
          * 是否加粗
         */
        public isBold: boolean;
        /**
          * 与边框间隙
         */
        public padding: number;
        /**
          * 圆角边框半径
         */
        public roundRadius: number;
        /**
          * 内部使用
         */
        public onAfterRender: () => void;
        /**
          * 
          * @param graphics3 
          * @param text 
          * @param createMutipleTexture 
         */
        public update(graphics3: Graphics3, text: string, createMutipleTexture?: boolean): void;
    }

    class GeoBoundingClip {
        public initFromCenter(center: Vector3, radius: number): void;
        public isObjectVisible(renderContext: RenderContext3, useFrustumOnly?: boolean): boolean;
        public static IsDistanceWeightVisible(renderContext: RenderContext3, objectCenterPt: Vector3, objectRadius: number): boolean;
    }

    /**
      * GeoObject3PickEventArgs GeoObject3选中事件参数
      */
    class GeoObject3PickEventArgs extends EventArgs {
        /**
          * 选中对象
         */
        public geoObject: GeoObject3;
        /**
          * 点击的对象表面位置
         */
        public position: Vector3;
        /**
          * 点击的屏幕位置
         */
        public screenPosition: Vector2;
        /**
          * 
          * @param geoObject 
          * @param position 
          * @param screenPosition 
         */
        constructor(geoObject: GeoObject3, position?: Vector3, screenPosition?: Vector2);
        /**
          * 选中对象所属图层
         */
        public readonly layerName: string;
    }

    /**
      * GeoObject3 空间三维可视对象的基类。有代表各种形状的派生类，一般都是通过ShapeLayer的add方法添加，不直接使用构造函数。
      */
    class GeoObject3 extends Object3 implements IAsyncRenderable, IRenderMeshChunkProvider {
        /**
          * 
          * @param renderContext 
          * @param geometry 
         */
        constructor(renderContext: RenderContext3, geometry: Geometry);
        /**
          * 标注
         */
        public anno: string;
        /**
          * 标注的水平对齐位置
         */
        public annoHorizontalAlignment: HorizontalAlignment;
        /**
          * 标注的垂直对齐位置
         */
        public annoVerticalAlignment: VerticalAlignment;
        /**
          * 材质的颜色。等同于material.color
         */
        public color: Color;
        /**
          * 标注颜色
         */
        public fontColor: Color;
        /**
          * 标注字体大小
         */
        public fontSize: number;
        /**
          * 空间对象
         */
        public geometry: Geometry;
        /**
          * 相对地面高度。在isClampToGround为true时使用
         */
        public groundHeight: number;
        /**
          * 高亮材质
         */
        public highlightMaterial: IMaterial;
        /**
          * 对象水平对齐位置。一般用于Image对象
         */
        public horizontalAlignment: HorizontalAlignment;
        /**
          * 是否忽略DepthBuffer的裁剪
         */
        public isAnnoIgnoreDepthBuffer: boolean;
        /**
          * 标注是否可见
         */
        public isAnnoVisible: boolean;
        /**
          * 是否为自动贴地对象
         */
        public isClampToGround: boolean;
        /**
          * 
         */
        public isFastClamp: boolean;
        /**
          * 对象是否可见
         */
        public isVisible: boolean;
        /**
          * 所属图层
         */
        public layer: GeoObject3Layer;
        /**
          * LOD的距离系数，缺省为1.0，值越大在更远处变清晰
         */
        public lodDistanceRatio: number;
        /**
          * 显示材质
         */
        public material: IMaterial;
        /**
          * 标注最远可见距离
         */
        public maxAnnoVisibleDistance: number;
        /**
          * 对象最远可见距离
         */
        public maxVisibleDistance: number;
        /**
          * 标注最近可见距离
         */
        public minAnnoVisibleDistance: number;
        /**
          * 对象最近可见距离
         */
        public minVisibleDistance: number;
        /**
          * 名称
         */
        public name: string;
        /**
          * 空间属性改变之后发出消息。这通常用于连续移动物体
         */
        public onAfterUpdateGeometry: Observable<GeoObject3>;
        /**
          * 对象像素偏移距离。通常用于Image对象
         */
        public pixelOffset: Vector2;
        /**
          * 对象的空间点数组
         */
        public points: Vector3[];
        /**
          * 空间位置
         */
        public position: Vector3;
        /**
          * 标注的高级显示设置
         */
        public readonly annoProperty: RichTextProperty;
        /**
          * 
         */
        public readonly bounds: Box;
        /**
          * 
         */
        public readonly isDataLoaded: boolean;
        /**
          * 
         */
        public readonly isReadyForDraw: boolean;
        /**
          * 图层名称
         */
        public readonly layerName: string;
        /**
          * 局部坐标表示的包围矩形
         */
        public readonly localBounds: Box;
        /**
          * 世界坐标位置
         */
        public readonly positionWorld: Vector3;
        /**
          * 显示上下文
         */
        public readonly renderContext: RenderContext3;
        /**
          * 世界坐标包围盒
         */
        public readonly worldBounds: Box;
        /**
          * 附属属性，用于临时存储信息
         */
        public tag: any;
        /**
          * 对象垂直对齐方式
         */
        public verticalAlignment: VerticalAlignment;
        /**
          * 
         */
        protected checkAnnoVisible(): boolean;
        /**
          * 
         */
        protected getAnnoLocalBounds(): Box;
        /**
          * 
         */
        protected getAnnoPosition(): Vector3;
        /**
          * 
         */
        protected getAnnoScreenBounds(): Rect;
        /**
          * 
          * @param center 
          * @param radius 
         */
        protected initBoundingClip(center: Vector3, radius: number): void;
        /**
          * 
          * @param geoType 
         */
        protected onUpdateDefineSpatialData(geoType: GeoType): void;
        /**
          * 
          * @param cameraCenter 
          * @param objectOrgPt 
          * @param useLocalWorldMatrix 
          * @returns 
         */
        protected prepareBindingWorldClone(cameraCenter: Vector3, objectOrgPt: Vector3, useLocalWorldMatrix?: boolean): Matrix;
        /**
          * 
          * @param cameraCenter 
          * @param objectOrgPt 
          * @param useLocalWorldMatrix 
         */
        protected prepareBindingWorldInPlace(cameraCenter: Vector3, objectOrgPt: Vector3, useLocalWorldMatrix?: boolean): void;
        /**
          * 
          * @param localBounds 
         */
        protected updateLocalBounds(localBounds: Box): void;
        /**
          * 
          * @param worldBounds 
         */
        protected updateWorldBounds(worldBounds: Box): void;
        /**
          * 
         */
        protected updateWorldBoundsFromLocal(): void;
        /**
          * 
         */
        public buildIndex(): boolean;
        /**
          * 检查对象是否可见
          * @param distanceToEye 
          * @returns 
         */
        public checkObjectVisible(distanceToEye?: number): boolean;
        /**
          * 
          * @param pt1 
          * @param pt2 
          * @returns 
         */
        public clampLine(pt1: Vector3, pt2: Vector3): Vector3[];
        /**
          * 
          * @param worldPoints 
          * @returns 
         */
        public clampPolygon(worldPoints: Vector3[]): Vector3[];
        /**
          * 销毁对象
         */
        public dispose(): void;
        /**
          * 
         */
        public drawAnno(): boolean;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 地球坐标系转为对象局部坐标系
          * @param pt 地球坐标
          * @returns 局部坐标
         */
        public earthToLocal(pt: Vector3): Vector3;
        /**
          * 点数组从地球坐标系转为对象局部坐标系
          * @param points 
          * @returns 局部坐标点数组
         */
        public earthToLocalPoints(points: Vector3[]): Vector3[];
        /**
          * 
         */
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        /**
          * 
         */
        public initFirstForDraw(): void;
        /**
          * 
          * @param renderContext 
          * @param pt1 
          * @param pt2 
          * @param ptResult 
          * @returns 
         */
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        /**
          * 从对象局部坐标系转为地球坐标系
          * @param ptLocal 局部坐标
          * @returns 地球坐标
         */
        public localToEarth(ptLocal: Vector3): Vector3;
        /**
          * 点数组从对象局部坐标系转为地球坐标系
          * @param localPoints 
          * @returns 
         */
        public localToEarthPoints(localPoints: Vector3[]): Vector3[];
        /**
          * 
          * @param ptLocal 
          * @returns 世界坐标
         */
        public localToWorld(ptLocal: Vector3): Vector3;
        /**
          * 
          * @param localPoints 
          * @returns 世界坐标点数组
         */
        public localToWorldPoints(localPoints: Array<Vector3>): Array<Vector3>;
        /**
          * 
          * @param ptLocal 
          * @param result 
         */
        public localToWorldToRef(ptLocal: Vector3, result: Vector3): void;
        /**
          * 内部使用
          * @param selfPositionWorld 
          * @param selfLocalMatrix 
         */
        public prepareParamsWhenDetachFromFather(selfPositionWorld: Vector3, selfLocalMatrix: Matrix): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public recycle(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
         */
        public registerDataTask(param: AsyncRenderableParam): void;
        /**
          * 
          * @param holePoints 
          * @param triMeshPoints 
         */
        public setGroundHole(holePoints: Vector3[], triMeshPoints?: Vector3[]): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public updateContents(param: AsyncRenderableParam): boolean;
        /**
          * 用户自定义的对象可见性判断函数，用于复杂的对象可见性控制
         */
        public visibleFunc: () => boolean;
        /**
          * 
          * @param ptWorld 
          * @returns 
         */
        public worldToLocal(ptWorld: Vector3): Vector3;
        /**
          * 
          * @param points 
          * @returns 
         */
        public worldToLocalPoints(points: Vector3[]): Vector3[];
        /**
          * 
          * @param ptWorld 
          * @param result 
         */
        public worldToLocalToRef(ptWorld: Vector3, result: Vector3): void;
    }

    /**
      * PointGeoObject 点状空间对象祖先类
      */
    class PointGeoObject extends GeoObject3 {
        /**
          * 
          * @param renderContext 
          * @param position 
         */
        constructor(renderContext: RenderContext3, position: Vector3);
        /**
          * 
          * @param geoType 
         */
        protected onUpdateDefineSpatialData(geoType: GeoType): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public updateContents(param: AsyncRenderableParam): boolean;
    }

    /**
      * AnnoGeoObject 标注对象
      */
    class AnnoGeoObject extends PointGeoObject {
        /**
          * 
          * @param renderContext 
          * @param position 
          * @param anno 
         */
        constructor(renderContext: RenderContext3, position: Vector3, anno: string);
    }

    /**
      * ImageGeoObject 图片对象，经常用于显示带图标的标注。
      */
    class ImageGeoObject extends PointGeoObject {
        /**
          * 
          * @param renderContext 
          * @param center 
          * @param bitmapOrUrl
          * @param displaySize
         */
        constructor(renderContext: RenderContext3, center: Vector3, urlOrBitmap: string | WriteableBitmap, displaySize?: Vector2);
        /**
          * 设置选中时自动变大的倍数
         */
        public focusEnlargeRatio: number;
        /**
          * 
         */
        public readonly localBounds: Box;
        /**
          * 
         */
        protected getAnnoScreenBounds(): Rect;
        /**
          * 更换关联显示的图片
          * @param urlOrBitmap
          * @param displaySize
         */
        public attachImage(urlOrBitmap: string | WriteableBitmap, displaySize?: Vector2): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param renderContext 
          * @param pt1 
          * @param pt2 
          * @param ptResult 
          * @returns 
         */
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        /**
          * 
          * @param param 
         */
        public registerDataTask(param: AsyncRenderableParam): void;
    }

    /**
      * LineGeoObject 三维折线对象
      */
    class LineGeoObject extends GeoObject3 {
        /**
          * 
          * @param renderContext 
          * @param points 
         */
        constructor(renderContext: RenderContext3, points: Vector3[]);
        /**
          * 
         */
        public readonly lineProperty: WideLineProperty;
        /**
          * 
         */
        public width: number;
        /**
          * 
          * @param renderContext 
          * @returns 
         */
        protected getEyeDistanceToLine(renderContext: RenderContext3): number;
        /**
          * 
         */
        protected getWorldPointsForRender(): Vector3[];
        /**
          * 
         */
        protected isToReverseRenderText(): boolean;
        /**
          * 
          * @param geoType 
         */
        protected onUpdateDefineSpatialData(geoType: GeoType): void;
        /**
          * 
          * @param worldPoints 
         */
        protected onUpdateRenderSpatialData(worldPoints: Array<Vector3>): void;
        /**
          * 
          * @param earthPoints 
          * @param heightInc 
          * @returns 
         */
        protected prepareAnnoWorldPoints(earthPoints: Vector3[], heightInc: number): Vector3[];
        /**
          * 
         */
        protected prepareGroundHeight(): boolean;
        /**
          * 
         */
        public dispose(): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
          * @returns 
         */
        public updateContents(param: AsyncRenderableParam): boolean;
    }

    /**
      * WallGeoObject 三维墙体对象
      */
    class WallGeoObject extends LineGeoObject {
        /**
          * 
          * @param renderContext 
          * @param centerPoints
          * @param height
          * @param thickness
          * @param isRoundTurn
         */
        constructor(renderContext: RenderContext3, centerPoints: Vector3[], height: number, thickness: number, isRoundTurn?: boolean);
        /**
          * 
          * @param worldPoints 
         */
        protected onUpdateRenderSpatialData(worldPoints: Array<Vector3>): void;
        /**
          * 
         */
        public dispose(): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
         */
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        /**
          * 
          * @param renderContext 
          * @param pt1 
          * @param pt2 
          * @param ptResult 
          * @returns 
         */
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        /**
          * 
          * @param param 
         */
        public registerDataTask(param: AsyncRenderableParam): void;
    }

    class ArrowGeoObject extends LineGeoObject {
        constructor(renderContext: RenderContext3, points: Vector3[], headWidth: number, tailWidth: number, headThickness?: number, tailThickness?: number);
        protected onUpdateDefineSpatialData(geoType: GeoType): void;
        protected onUpdateRenderSpatialData(worldPoints: Array<Vector3>): void;
        public dispose(): void;
        public drawContents(param: AsyncRenderableParam): boolean;
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        public registerDataTask(param: AsyncRenderableParam): void;
    }

    /**
      * MeshGeoObject 三角网对象，使用地球坐标来定义Mesh，没有基准点概念，与MeshGeoObject不同。
      */
    class MeshGeoObject extends PointGeoObject {
        /**
          * 
          * @param renderContext 
          * @param position
          * @param localVertexData
         */
        constructor(renderContext: RenderContext3, position: Vector3, localVertexData: MeshVertexData);
        /**
          * 
         */
        public readonly vertexData: MeshVertexData;
        /**
          * 
         */
        public buildIndex(): boolean;
        /**
          * 
         */
        public dispose(): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
         */
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        /**
          * 
          * @param renderContext 
          * @param pt1 
          * @param pt2 
          * @param ptResult 
          * @returns 
         */
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        /**
          * 
          * @param vertexData 
          * @returns 
         */
        public updateMesh(vertexData: MeshVertexData);
    }

    enum ModelObjectType {
        None,
        Terrain,
        Building
    }

    class LodMeshInstance {
        constructor(graphics: Graphics3, url: string);
        public readonly boundingInfo: BoundingInfo;
        public readonly centerPositionWorld: Vector3;
        public readonly isDataLoaded: boolean;
        public readonly isReadyForDraw: boolean;
        public readonly meshPoints: Vector3Array;
        public scaleRatio: number;
        public getLodMeshes(lod: number): Array<FixedMesh>;
        public intersects(ray: Ray): Vector3;
        public registerDataTask(param: AsyncRenderableParam): void;
        public setCenterPositionWorld(centerWorld: Vector3): void;
    }

    class ModelGeoObjectBase extends PointGeoObject {
        constructor(renderContext: RenderContext3, position: Vector3, url: string);
        public lod: number;
        public readonly url: string;
        protected onUpdateDefineSpatialData(geoType: GeoType): void;
        protected onUpdateLodParam(): void;
        protected prepareParam(param: AsyncRenderableParam): AsyncRenderableParam;
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        public getLodMeshes(lod: number): Array<FixedMesh>;
        public updateLodParam(): void;
    }

    class ModelGeoObject extends ModelGeoObjectBase {
        constructor(position: Vector3, renderContext: RenderContext3, url: string, scale: number);
        public readonly isDataLoaded: boolean;
        public readonly isReadyForDraw: boolean;
        public readonly localBounds: Box;
        public readonly mesh: LodMeshInstance;
        protected onUpdateLodParam(): void;
        public checkObjectVisible(): boolean;
        public drawContents(param: AsyncRenderableParam): boolean;
        public getIndices(): Array<number>;
        public getLodMeshes(lod: number): Array<FixedMesh>;
        public getVertexPositions(): Array<Vector3>;
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        public registerDataTask(param: AsyncRenderableParam): void;
    }

    /**
      * GlobalMeshGeoObject 
      */
    class GlobalMeshGeoObject extends GeoObject3 {
        /**
          * 
          * @param renderContext 
          * @param vertexData 
         */
        constructor(renderContext: RenderContext3, vertexData: MeshVertexData);
        /**
          * 
          * @param geoType 
         */
        protected onUpdateDefineSpatialData(geoType: GeoType): void;
        /**
          * 
         */
        public dispose(): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
         */
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        /**
          * 
          * @param renderContext 
          * @param pt1 
          * @param pt2 
          * @param ptResult 
          * @returns 
         */
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        /**
          * 
          * @param earthBasePoint 
          * @param earthTriPoints 
         */
        public updateMeshRelativePoints(earthBasePoint: Vector3, earthTriPoints: Vector3[]): void;
    }

    /**
      * WideLineProperty 宽线属性设置对象，用于设置宽线的各种特效显示，包括动画效果。宽度值都是像素单位。长度和位移使用相对总长的百分比。
      */
    class WideLineProperty {
        /**
          * 裁剪掉线左半边
         */
        public clipLeft: boolean;
        /**
          * 裁剪掉线右半边
         */
        public clipRight: boolean;
        /**
          * 虚线的空白颜色。缺省为透明
         */
        public dashGapColor: Color;
        /**
          * 虚线段（实线+空白段）与总长长度的比例。比如0.01，整条线将分成100段。
         */
        public dashLength: number;
        /**
          * 虚线其实位移
         */
        public dashOffset: number;
        /**
          * 虚线段中实线部分比例
         */
        public dashRatio: number;
        /**
          * 发光色
         */
        public glowColor: Color;
        /**
          * 发光半径
         */
        public glowRadius: number;
        /**
          * 轮廓线颜色
         */
        public outlineColor: Color;
        /**
          * 轮廓线宽度
         */
        public outlineWidth: number;
        /**
          * 线向端点变细的指数比例
         */
        public tapperPower: number;
        /**
          * 动画段颜色
         */
        public trailColor: Color;
        /**
          * 动画段个数
         */
        public trailCount: number;
        /**
          * 动画段长度，也是相对比例。通过设置该值>0来触发。
         */
        public trailLength: number;
        /**
          * 动画段速度，缺省1.0。设置为负值则反向移动
         */
        public trailSpeed: number;
        /**
          * 动画段起始偏移比例
         */
        public trailStart: number;
        /**
          * 
         */
        public clone(): WideLineProperty;
        /**
          * 
          * @param dest 
         */
        public copyTo(dest: WideLineProperty): void;
    }

    interface IWideLineObject {
        lineProperty: WideLineProperty;
        material: IMaterial;
        width: number;
    }

    class GroupWideLineGeoObject extends GeoObject3 implements IWideLineObject {
        public width: number;
        constructor(renderContext: RenderContext3, pointsArray: Array<Vector3[]>, width: number);
        lineProperty: WideLineProperty;
        public drawContents(param: AsyncRenderableParam): boolean;
    }

    /**
      * PolyGeoObject 三维多边形对象
      */
    class PolyGeoObject extends GeoObject3 {
        /**
          * 
          * @param renderContext 
          * @param points 外轮廓坐标
          * @param holes 洞坐标
          * @param globalPosition 如果指定全局坐标位置，points将被认为是局部坐标
         */
        constructor(renderContext: RenderContext3, points: Vector3[], holes?: Vector3[][], globalPosition?: Vector3);
        /**
          * 
         */
        public readonly holes: Vector3[][];
        /**
          * 
         */
        protected getAnnoPosition(): Vector3;
        /**
          * 
          * @param geoType 
         */
        protected onUpdateDefineSpatialData(geoType: GeoType): void;
        /**
          * 
         */
        public dispose(): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param renderContext 
          * @param pt1 
          * @param pt2 
          * @param ptResult 
          * @returns 
         */
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        /**
          * 
          * @param param 
         */
        public registerDataTask(param: AsyncRenderableParam): void;
    }

    /**
      * PipelineGeoObject 三维管道对象
      */
    class PipelineGeoObject extends LineGeoObject {
        /**
          * 
          * @param renderContext 
          * @param centerPoints 
          * @param shape2
          * @param isRoundTurn
          * @param beginNeighbour
          * @param endNeighbour
         */
        constructor(renderContext: RenderContext3, centerPoints: Vector3[], shape2: Vector2[], isRoundTurn?: boolean, beginNeighbour?: Vector3, endNeighbour?: Vector3);
        /**
          * 
          * @param geoType 
         */
        protected onUpdateDefineSpatialData(geoType: GeoType): void;
        /**
          * 
         */
        public dispose(): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
         */
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        /**
          * 
          * @param renderContext 
          * @param pt1 
          * @param pt2 
          * @param ptResult 
          * @returns 
         */
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3): boolean;
        /**
          * 
          * @param param 
          * @returns 
         */
        public recycle(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
         */
        public registerDataTask(param: AsyncRenderableParam): void;
    }

    /**
      * Layer3 三维图层祖先类。
      */
    class Layer3 extends Layer implements IAsyncRenderable, IRenderMeshChunkProvider, IRenderState {
        /**
          * 
         */
        public earthViewer: EarthViewer;
        /**
          * 
          * @param earthViewer 
          * @param name 
         */
        constructor(earthViewer: EarthViewer, name: string);
        /**
          * 高亮显示材质
         */
        public highlightMaterial: IMaterial;
        /**
          * 
         */
        public isBackground: boolean;
        /**
          * 是否被GroundHole裁剪
         */
        public isClipByGroundHole: boolean;
        /**
          * 是否裁剪反向三角面
         */
        public isCulling: boolean;
        /**
          * 是否写入颜色到FrameBuffer
         */
        public isEnableColorWrite: boolean;
        /**
          * 是否启用深度裁剪
         */
        public isEnableDepthBuffer: boolean;
        /**
          * 是否写入DepthBuffer
         */
        public isEnableDepthWrite: boolean;
        /**
          * 是否叠加阴影
         */
        public isReceiveShadow: boolean;
        /**
          * 是否使用光线
         */
        public isUseLight: boolean;
        /**
          * LOD比例系数，适用于本层包含的所有对象
         */
        public lodRatio: number;
        /**
          * 
         */
        public maxVisibleDistance: number;
        /**
          * 本层同时显示的最大对象个数，用于提升绘制性能。对象按照从近到远绘制
         */
        public maxVisibleObjectCount: number;
        /**
          * 
         */
        public onAfterLoad: Observable<Layer3>;
        /**
          * 系统保留
         */
        public overlayTexture: Texture;
        /**
          * 系统保留
         */
        public overlayTextureMatrix: Matrix;
        /**
          * 
         */
        public readonly bounds: Box;
        /**
          * 图层中对象个数
         */
        public readonly count: number;
        /**
          * 显示上下文
         */
        public readonly renderContext: RenderContext3;
        /**
          * 用于控制图层的绝对叠加次序。数值大的将覆盖覆盖数值小的，而DepthBuffer只决定对相同zIndex起作用。通常是把图层分为若干组来使用，比如倾斜摄影图层覆盖三维地形。
         */
        public zIndex: number;
        /**
          * 
         */
        protected clearChunkRenderLists(): void;
        /**
          * 
         */
        protected commitChunkRenderLists(): void;
        /**
          * 
         */
        protected updateBounds(): void;
        /**
          * 
          * @param worldPt1 
          * @param worldPt2 
          * @returns 
         */
        public clampLine(worldPt1: Vector3, worldPt2: Vector3): Vector3[];
        /**
          * 
          * @param worldPoints 
          * @returns 
         */
        public clampPolygon(worldPoints: Vector3[]): Vector3[];
        /**
          * 
         */
        public dispose(): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawVolumeBlendContents(param: AsyncRenderableParam): boolean;
        /**
          * 
         */
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        /**
          * 使用屏幕点位置选取一个对象
          * @param screenPt 屏幕点
          * @param resultPt 如果选中则保存对象被击中的三维位置
          * @returns 选中对象或者null
         */
        public pick(screenPt: Vector2, resultPt: Vector3): PickableObject;
        /**
          * 使用两点定义的射线选取一个对象
          * @param worldPt1 世界坐标系点1
          * @param worldPt2 世界坐标系点2
          * @param resultPt 如果选中则保存对象被击中的三维位置
          * @returns 选中对象或者null
         */
        public pickByRay(worldPt1: Vector3, worldPt2: Vector3, resultPt: Vector3): PickableObject;
        /**
          * 
          * @param param 
          * @returns 
         */
        public recycle(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
         */
        public registerDataTask(param: AsyncRenderableParam): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public updateContents(param: AsyncRenderableParam): boolean;
    }

    /**
      * Layer3Collection 三维图层集合
      */
    class Layer3Collection extends LayerCollection<Layer3>{
        /**
          * 
          * @param earthViewer 
         */
        constructor(earthViewer: EarthViewer);
        /**
          * 
          * @param param 
          * @param isBackground 
          * @returns 
         */
        public drawLayers(param: AsyncRenderableParam, isBackground: boolean): boolean;
        /**
          * 
          * @param param 
          * @returns 
         */
        public recycle(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
         */
        public registerDataTask(param: AsyncRenderableParam): void;
        /**
          * 
          * @param devicePtNear 
          * @param devicePtFar 
          * @param resultPt 
          * @returns 
         */
        public selectOne(devicePtNear: Vector3, devicePtFar: Vector3, resultPt: Vector3): PickableObject;
        /**
          * 
          * @param param 
          * @returns 
         */
        public updateContents(param: AsyncRenderableParam): boolean;
    }

    class ObjectDisplayInfo {
        public distance: number;
        public object: GeoObject3;
        public size: number;
        public sqauredDistance: number;
        public visible: boolean;
        public weight: number;
    }

    /**
      * GeoObject3Layer 三维对象图层，作为祖先类使用
      */
    class GeoObject3Layer extends Layer3 {
        /**
          * 
          * @param earthViewer 
          * @param name 
         */
        constructor(earthViewer: EarthViewer, name: string);
        /**
          * 
         */
        public readonly count: number;
        /**
          * 
          * @param renderContext 
          * @param maxCount 
          * @param hasPickedObject 
          * @returns 
         */
        protected enumObjectsForDrawing(renderContext: RenderContext3, maxCount: number, hasPickedObject: RefValue<boolean>): Array<GeoObject3>;
        /**
          * 
          * @param maxCount 
          * @param checkVisible 
          * @returns 
         */
        protected enumObjectsInIndex(maxCount: number, checkVisible?: boolean): Array<GeoObject3>;
        /**
          * 
          * @param renderContext 
          * @returns 
         */
        protected setupDrawingStatus(renderContext: RenderContext3): boolean;
        /**
          * 
         */
        protected updateBounds(): void;
        /**
          * 
          * @param updateOnlyWhenDirty 
         */
        protected updateIndex(updateOnlyWhenDirty?: boolean): void;
        /**
          * 直接添加已经创建的对象
          * @param geoObject 
          * @returns 原对象
         */
        public addObject(geoObject: GeoObject3): GeoObject3;
        /**
          * 
          * @param worldPt1 
          * @param worldPt2 
          * @returns 
         */
        public clampLine(worldPt1: Vector3, worldPt2: Vector3): Vector3[];
        /**
          * 
          * @param worldPoints 
          * @returns 
         */
        public clampPolygon(worldPoints: Vector3[]): Vector3[];
        /**
          * 移除所有图层中对象
         */
        public clear(): void;
        /**
          * 清除所有对象的选中状态
         */
        public clearPickedObjects(): void;
        /**
          * 枚举图层所有对象
         */
        public enumObjects(): Array<GeoObject3>;
        /**
          * 通过指定索引获取对象，索引从0开始
          * @param index 
          * @returns 
         */
        public getAt(index: number): GeoObject3;
        /**
          * 通过no获取对象，no从1开始
          * @param no 
          * @returns 
         */
        public getByNo(no: number): GeoObject3;
        /**
          * 
          * @param worldPt1 
          * @param worldPt2 
          * @param resultPt 
          * @returns 
         */
        public pickByRay(worldPt1: Vector3, worldPt2: Vector3, resultPt: Vector3): PickableObject;
        /**
          * 移除指定索引位置的对象
          * @param index 
         */
        public removeAt(index: number): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public updateContents(param: AsyncRenderableParam): boolean;
    }

    /**
      * ShapeLayer 三维形状图层，提供了添加各种形状的方法。addXXX方法，点数组都使用地球坐标位置；addXXXAt方法，是在指定地球坐标位置用局部坐标数组添加各种形状。
      */
    class ShapeLayer extends GeoObject3Layer {
        /**
          * 创建新的ShapeLayer。三维形状图层，提供了添加各种形状的方法。addXXX方法，点数组都使用地球坐标位置；addXXXAt方法，是在指定地球坐标位置用局部坐标数组添加各种形状。
          * @param earthViewer 
          * @param name 图层名称。必须不能重名，否则无法正常创建和显示
         */
        constructor(earthViewer: EarthViewer, name: string);
        /**
          * 
          * @param renderContext 
          * @param param 
          * @param geoObjects 
          * @param highlightMaterial 
          * @param alpha 
         */
        protected drawObjects(renderContext: RenderContext3, param: AsyncRenderableParam, geoObjects: Array<GeoObject3>, highlightMaterial: IMaterial, alpha?: number): void;
        /**
          * 
          * @param renderContext 
          * @param param 
          * @param geoObjects 
         */
        protected updateObjectAnnoChunks(renderContext: RenderContext3, param: AsyncRenderableParam, geoObjects: Array<GeoObject3>): void;
        /**
          * 添加标注对象
          * @param position 位置
          * @param anno 标注
          * @param color 颜色
          * @returns GeoObject3
         */
        public addAnno(position: Vector3, anno: string, color?: Color): GeoObject3;
        /**
          * 添加箭头对象
          * @param points 中心线
          * @param headWidth 头部宽度
          * @param tailWidth 尾部宽度
          * @param headThickness 头部厚度
          * @param tailThickness 尾部厚度
          * @returns ArrowGeoObject
         */
        public addArrow(points: Vector3[], headWidth: number, tailWidth: number, headThickness?: number, tailThickness?: number): ArrowGeoObject;
        /**
          * 在指定位置添加箭头对象
          * @param position 地球坐标位置
          * @param localPoints 局部坐标中心线
          * @param headWidth 头部宽度
          * @param tailWidth 尾部宽度
          * @param headThickness 头部厚度
          * @param tailThickness 尾部厚度
          * @returns ArrowGeoObject
         */
        public addArrowAt(position: Vector3, localPoints: Vector3[], headWidth: number, tailWidth: number, headThickness?: number, tailThickness?: number): ArrowGeoObject;
        /**
          * 添加椭球体对象
          * @param position 位置
          * @param size 长宽高
          * @returns MeshGeoObject
         */
        public addBall(position: Vector3, size: Size3): MeshGeoObject;
        /**
          * 添加长方体体对象
          * @param position 位置
          * @param size 长宽高
          * @returns MeshGeoObject
         */
        public addBox(position: Vector3, size: Size3): MeshGeoObject;
        /**
          * 添加圆锥体对象
          * @param position 位置
          * @param height 高度
          * @param diameterTop 顶部直径 
          * @param diameterBottom 底部直径
          * @returns MeshGeoObject
         */
        public addCylinder(position: Vector3, height: number, diameterTop: number, diameterBottom: number): MeshGeoObject;
        /**
          * 添加图片对象
          * @param position 位置
          * @param imageUrlOrBitmap 图片的url或者WriteableBitmap对象
          * @returns ImageGeoObject
         */
        public addImage(position: Vector3, imageUrlOrBitmap: string | WriteableBitmap, displaySize?: Vector2): ImageGeoObject;
        /**
          * 添加折线对象
          * @param points 坐标点数组
          * @param width 线宽。如果大于1，则创建宽线。宽线可以有丰富的显示配置，比如虚线等
          * @returns LineGeoObject
         */
        public addLine(points: Vector3[], width?: number): LineGeoObject;
        /**
          * 在指定位置添加折线
          * @param position 地球坐标位置
          * @param localPoints 局部坐标数组
          * @param width 线宽
          * @returns LineGeoObject
         */
        public addLineAt(position: Vector3, localPoints: Vector3[], width?: number): LineGeoObject;
        /**
          * 通过VertexData直接添加三角网对象。使用地球坐标
          * @param vertexData 
          * @returns GlobalMeshGeoObject
         */
        public addMesh(vertexData: MeshVertexData): GlobalMeshGeoObject;
        /**
          * 在指定位置添加通过VertexData直接添加三角网对象。使用局部坐标
          * @param position 地球坐标位置
          * @param localVertexData 局部坐标数据
          * @returns MeshGeoObject
         */
        public addMeshAt(position: Vector3, localVertexData: MeshVertexData): MeshGeoObject;
        /**
          * 添加模型对象
          * @param position 位置
          * @param modelUrl 模型url，目前只支持Drawsee自定义格式
          * @returns 
         */
        public addModel(position: Vector3, modelUrl: string): ModelGeoObject;
        /**
          * 添加管线对象。管线截面可以是圆形，矩形，或者通过二维点数组自定义的形状。前后邻接点参数，需要多段管线协同使用，属于高级用法，通常忽略
          * @param centerPoints 中心线数组
          * @param radiusOrSizeOrShape 半径、长宽或者形状坐标数组
          * @param isRoundTurn 是否圆滑转弯
          * @param beginNeighbour 管线前邻接点位置，可以生成与前邻接管段的转弯衔接形状
          * @param endNeighbour 管线后邻接点位置，可以生成与后邻接管段的转弯衔接形状
          * @returns 
         */
        public addPipeline(centerPoints: Vector3[], radiusOrSizeOrShape: number | Size | Vector2[], isRoundTurn?: boolean, beginNeighbour?: Vector3, endNeighbour?: Vector3): GeoObject3;
        /**
          * 在指定位置添加管线对象。管线截面可以是圆形，矩形，或者通过二维点数组自定义的形状。前后邻接点参数，需要多段管线协同使用，属于高级用法，通常忽略
          * @param position 地球坐标位置
          * @param localCenterPoints 局部中心线数组
          * @param radiusOrSizeOrShape 半径、长宽或者形状坐标数组
          * @param isRoundTurn 是否圆滑转弯
          * @param localBeginNeighbour 管线前邻接点位置，可以生成与前邻接管段的转弯衔接形状
          * @param localEndNeighbour 管线后邻接点位置，可以生成与后邻接管段的转弯衔接形状
          * @returns 
         */
        public addPipelineAt(position: Vector3, localCenterPoints: Vector3[], radiusOrSizeOrShape: number | Size | Vector2[], isRoundTurn?: boolean, localBeginNeighbour?: Vector3, localEndNeighbour?: Vector3): GeoObject3;
        /**
          * 添加平面对象
          * @param center 中心点
          * @param width 水平宽度
          * @param height 水平高度
          * @param divideCount 平面长宽网格的细分个数
          * @returns
         */
        public addPlane(center: Vector3, width: number, height: number, divideCount?: number): MeshGeoObject;
        /**
          * 添加多边形
          * @param points 外部轮廓点数组
          * @param holes 内部洞点二维数组
          * @returns PolyGeoObject
         */
        public addPoly(points: Vector3[], holes?: Vector3[][]): PolyGeoObject;
        /**
          * 添加多边形
          * @param position 地球坐标位置
          * @param localPoints 局部坐标外部轮廓点数组
          * @param localHoles 局部坐标内部洞点二维数组
          * @returns PolyGeoObject
         */
        public addPolyAt(position: Vector3, localPoints: Vector3[], localHoles?: Vector3[][]): PolyGeoObject;
        /**
          * 添加多边形柱体对象。顶部和底部是同样的多边形轮廓。
          * @param bottomPoints 底部轮廓点数组
          * @param height 高度米
          * @param hasTopCover 是否有封闭顶部
          * @param hasBottomCover 是否封闭底部
          * @returns MeshGeoObject
         */
        public addPolyBox(bottomPoints: Vector3[], height: number, hasTopCover?: boolean, hasBottomCover?: boolean): GlobalMeshGeoObject;
        /**
          * 添加多边形柱体对象，顶部和底部是可以指定不同到多边形轮廓，但是点数必须相同。
          * @param topPoints顶部轮廓点数组
          * @param bottomPoints 底部轮廓点数组
          * @param hasTopCover 是否有封闭顶部
          * @param hasBottomCover 是否封闭底部
          * @returns MeshGeoObject
         */
        public addPolyBox2(topPoints: Vector3[], bottomPoints: Vector3[], hasTopCover?: boolean, hasBottomCover?: boolean): GlobalMeshGeoObject;
        /**
          * 在指定位置添加多边形柱体对象，顶部和底部是可以指定不同到多边形轮廓，但是点数必须相同。
          * @param position 地球坐标位置
          * @param localTopPoints 局部坐标顶部轮廓点数组
          * @param localBottomPoints 局部坐标底部轮廓点数组
          * @param hasTopCover 是否有封闭顶部
          * @param hasBottomCover 是否封闭底部
          * @returns MeshGeoObject
         */
        public addPolyBox2At(position: Vector3, localTopPoints: Vector3[], localBottomPoints: Vector3[], hasTopCover?: boolean, hasBottomCover?: boolean): MeshGeoObject;
        /**
          * 在指定位置添加多边形柱体对象，顶部和底部是同样的多边形轮廓。
          * @param position 地球坐标位置
          * @param localBottomPoints 局部坐标底部轮廓点数组
          * @param height 高度米
          * @param hasTopCover 是否有封闭顶部
          * @param hasBottomCover 是否封闭底部
          * @returns WallGeoObject
         */
        public addPolyBoxAt(position: Vector3, localBottomPoints: Vector3[], height: number, hasTopCover?: boolean, hasBottomCover?: boolean): MeshGeoObject;
        /**
          * 添加墙体对象
          * @param bottomCenterPoints 底部中心线坐标
          * @param height 高度
          * @param thickness 厚度
          * @param isRoundJoin 是否圆角转弯
          * @returns WallGeoObject
         */
        public addWall(bottomCenterPoints: Vector3[], height: number, thickness: number, isRoundJoin?: boolean): WallGeoObject;
        /**
          * 在指定位置添加墙体对象
          * @param position 地球坐标位置
          * @param localBottomCenterPoints 局部坐标底部中心线坐标
          * @param height 高度
          * @param thickness 厚度
          * @param isRoundJoin 是否圆角转弯
          * @returns WallGeoObject
         */
        public addWallAt(position: Vector3, localBottomCenterPoints: Vector3[], height: number, thickness: number, isRoundJoin?: boolean): WallGeoObject;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawVolumeBlendContents(param: AsyncRenderableParam): boolean;
        /**
          * 
         */
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        /**
          * 
          * @param centerEarth 
          * @param radiusMeter 
          * @returns 
         */
        public prepareMeshDataInRange(centerEarth: Vector3, radiusMeter: number): Array<MeshVertexData>;
        /**
          * 
          * @param param 
          * @returns 
         */
        public recycle(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
         */
        public registerDataTask(param: AsyncRenderableParam): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public updateContents(param: AsyncRenderableParam): boolean;
    }

    class StencilHoleRef implements IStencilHole {
        constructor(layer: StencilHoleLayer, geoObject: GeoObject3);
        public isVisible: boolean;
        public dispose(): void;
    }

    class StencilHoleLayer extends ShapeLayer implements IStencilHoleManager {
        constructor(earthViewer: EarthViewer);
        public addHole(name: string, polyPoints: Vector3[], triMeshPoints?: Vector3[]): IStencilHole;
        public clearHoles(): void;
        public drawGroundHole(param: AsyncRenderableParam): void;
        public getHoles(name: string): Array<IStencilHole>;
        public hitOnHole(x: number, y: number): boolean;
    }

    /**
      * GroundLayer 地面高度计算层。可以添加多个TileLayer或者ModelLayer，利用它们的三角网数据，做局部的地形高度计算
      */
    class GroundLayer implements ITerrainCalculator {
        /**
          * 
          * @param renderContext 
         */
        constructor(renderContext: RenderContext3);
        /**
          * 
          * @param layer 
         */
        public addTerrainLayer(layer: GeoObject3Layer): void;
        /**
          * 
          * @param earthRange 
          * @param minLevel 
          * @param maxLevel 
          * @returns 
         */
        public calculateApproximateHeightRange(earthRange: Rect, minLevel?: number, maxLevel?: number): Vector2;
        /**
          * 
          * @param earthX 
          * @param earthZ 
          * @returns 
         */
        public calculateHeight(earthX: number, earthZ: number): number;
        /**
          * 
          * @param earthX 
          * @param earthZ 
          * @param resultHeight 
          * @param resultLevel 
          * @param minLevel 
          * @param maxLevel 
          * @returns 
         */
        public calculateHeightAdvance(earthX: number, earthZ: number, resultHeight: RefValue<number>, resultLevel: RefValue<number>, minLevel?: number, maxLevel?: number): boolean;
        /**
          * 
          * @param screenX 
          * @param screenY 
          * @param resultPt 
          * @returns 
         */
        public calculateHitPosition(screenX: number, screenY: number, resultPt: Vector3): boolean;
        /**
          * 
          * @param worldPoints 
          * @param maxLevel 
          * @returns 
         */
        public clampLine(worldPoints: Vector3[], maxLevel: number): Vector3[];
        /**
          * 
          * @param worldPoints 
          * @param maxLevel 
          * @returns 
         */
        public clampPolygon(worldPoints: Vector3[], maxLevel: number): Vector3[];
        /**
          * 
         */
        public clearTerrainLayers(): void;
        /**
          * 
          * @param earthRange 
          * @param maxLevel 
          * @returns 
         */
        public enumRenderChunks(earthRange: Rect, maxLevel?: number): Array<RenderMeshChunk>;
        /**
          * 
         */
        public getLayerCount(): number;
    }

    class StringIntMapping {
        public no2String(no: number): string;
        public string2No(str: string, autoAdd?: boolean): number;
    }

    class DataSurfaceBase {
        public urlMapping: StringIntMapping;
        public addBadUrlNo(urlNo: number): void;
        public isBadUrlNo(urlNo: number): boolean;
        public onBadTasks(url: string): void;
    }

    class TileMeshIndexNodeInfo {
        public center: Vector3;
        public radius: number;
        public subNames: Array<string>;
        public name: string;
        public uri: string;
        constructor(center: Vector3, radius: number, subNames: Array<string>, name?: string, uri?: string);
        public getSubBaseUrl(subIndex: number): string;
    }

    interface ITileMeshDataProvider {
        readonly dataLoadType: AsyncDataLoadType;
        getDataFileSurffix(): string;
        parseTileDataAsync(data: AsyncWebStreamResultType, nodeInfo: TileMeshIndexNodeInfo): Promise<TileMeshTransferData>;
    }

    interface ITileMeshIndex extends ITileMeshDataProvider {
        enumDrawMeshesForRender(): Array<TileDrawMesh>;
        enumMeshes(): Array<TileMesh>;
        getNodeInfo(fileName: string): TileMeshIndexNodeInfo;
        getRootNode(): TileMeshIndexNode;
        getRootNodeInfo(): TileMeshIndexNodeInfo;
        initRootInfo(geoObject: TileMeshGeoObject, center: Vector3, radius: number, isPickable: boolean);
        loadNodeInfo(baseUrl: string, fileName: string, worldCenter: Vector3): void;
        update(param: AsyncRenderableParam);
    }

    class DrawseeTileMeshLoadHelper {
        public static FromPackageData(datas: Array<Uint8Array>): TileMeshTransferData;
    }

    class SubTileMeshTransferData {
        public centerX: number;
        public centerY: number;
        public centerZ: number;
        public indices: Int32Array;
        public normals: Float32Array;
        public radius: number;
        public rangeDataList: string[];
        public rangeList: Float32Array;
        public textureCoords: Float32Array;
        public textureFileName: string;
        public vertexes: Float32Array;
    }

    class TileMeshTransferData {
        public name: string;
        public subs: Array<SubTileMeshTransferData>;
        public textureBytes: Array<Uint8Array>;
        public textureNames: Array<string>;
        public getTransferObjects(): Array<any>;
        public static MarkCountInfo(data: TileMeshTransferData): void;
    }

    class TileMeshProcessData {
        public indicesArray: Array<Int32Array>;
        public isNeedBounds: boolean;
        public isNeedTriPoints: boolean;
        public minStartSize: number;
        public name: string;
        public normalsArray: Array<Float32Array>;
        public scaleRatio: number;
        public textureBytes: Array<Uint8Array>;
        public textureCoordsArray: Array<Float32Array>;
        public vertexesArray: Array<Float32Array>;
        public getTransferObjects(): Array<any>;
        public static FromTransferData(transferData: TileMeshTransferData): TileMeshProcessData;
    }

    class TileMeshProcessResultData {
        public boundsArray: Array<IBox>;
        public imageBitmaps: Array<ImageBitmap>;
        public indiceBuffer: Int32Array;
        public triPoints: Float32Array;
        public vertexBuffer: Float32Array;
        public getTransferObjects(): Array<any>;
        public static Dispose(data: TileMeshProcessResultData): void;
    }

    class TileMeshProcessDataHelper {
        public static ProcessVertexBufferAndTriPoints(data: TileMeshProcessData): TileMeshProcessResultData;
    }

    class TileNodeBase {
        constructor(geoObject: TileMeshGeoObject);
        public readonly center: Vector3;
        public readonly radius: number;
        public readonly worldCenter: Vector3;
    }

    class TileDrawMesh extends TileNodeBase {
        public fatherMesh: TileMesh;
        constructor(fatherMesh: TileMesh, geoObject: TileMeshGeoObject, subData: SubTileMeshTransferData, texture: ITexture, bounds: IBox);
        public dispose(): void;
        public toChunk(): SimpleTextureMeshChunk;
        public toMeshRenderChunk(modelObject: TileMeshGeoObject): RenderMeshChunk;
        public static CreateMergedBuffer(graphics: Graphics3, processedData: TileMeshProcessResultData, drawMeshes: Array<TileDrawMesh>, modelObject: TileMeshGeoObject, isStencilClip: boolean): ElementBuffer;
        public static ToChunks(drawMeshes: Array<TileDrawMesh>): Array<SimpleTextureMeshChunk>;
    }

    class TileMesh extends TileNodeBase implements IObjectCacheSize {
        public node: TileMeshIndexNode;
        constructor(node: TileMeshIndexNode, geoObject: TileMeshGeoObject, surface: TileMeshSurface, dataProvider: ITileMeshDataProvider, url: string, isPickable: boolean);
        public cacheBytes: number;
        public readonly baseUrl: string;
        public readonly fileName: string;
        public readonly fileSuffix: string;
        public readonly graphics: Graphics3;
        public readonly isDataLoaded: boolean;
        public readonly isReadyForDraw: boolean;
        public readonly isSubMesh: boolean;
        public readonly url: string;
        public readonly urlNo: number;
        protected onAfterCreateDrawMeshes(): void;
        public createNew(indexNode: TileMeshIndexNode, geoObject: TileMeshGeoObject, surface: TileMeshSurface, url: string, isPickable: boolean): TileMesh;
        public dispose(): void;
        public getDrawMeshCount(): number;
        public getTriIndex(): MeshTriangleIndex;
        public initBasicInfo(center: Vector3, radius: number, isSubMesh: boolean): void;
        public intersectsRay(ray: Ray): Vector3;
        public loadData(): void;
        public prepareData(): void;
        public stampTimeMark(): void;
    }

    class TileMeshSurface extends DataSurfaceBase implements IObjectLoader<number, TileMesh>{
        public name: string;
        constructor(name: string, timeoutMs: number);
        public readonly count: number;
        public accessMesh(urlNo: number): TileMesh;
        public addToCache(subMesh: TileMesh);
        public allocUrlNo(url: string): number;
        public loadObject(key: number): TileMesh;
        public recycle(param: AsyncRenderableParam): boolean;
        public releaseObject(key: number, obj: TileMesh): void;
        public urlFromNo(no: number): string;
    }

    class TileMeshIndexNode extends TileNodeBase {
        public layer: TileLayerBase;
        public index: ITileMeshIndex;
        public father: TileMeshIndexNode;
        public root: TileMeshIndexNode;
        constructor(layer: TileLayerBase, index: ITileMeshIndex, geoObject: TileMeshGeoObject, baseUrl: string, fileName: string, isPickable: boolean, father: TileMeshIndexNode, root: TileMeshIndexNode);
        public readonly baseUrl: string;
        public readonly isDataLoaded: boolean;
        public readonly isIsAllLeafsReadyDirty: boolean;
        public readonly isLeaf: boolean;
        public readonly level: number;
        public readonly meshUrlNo: number;
        public readonly subs: Array<TileMeshIndexNode>;
        public accessMesh(): TileMesh;
        public dispose(): void;
        public enumDrawMeshesForRender(): Array<TileDrawMesh>;
        public enumSubMeshes(): Array<TileMesh>;
        public getRootMesh(): TileMesh;
        public static EnumAndCreateMeshesRecursive(node: TileMeshIndexNode, result: Array<TileMesh>): void;
        public static MarkStatusRecursive(node: TileMeshIndexNode, param: AsyncRenderableParam): void;
    }

    class TileMeshIndexBase implements ITileMeshIndex {
        public readonly dataLoadType: AsyncDataLoadType;
        protected commitIndexLoadTask(): void;
        public enumDrawMeshesForRender(): Array<TileDrawMesh>;
        public enumMeshes(): Array<TileMesh>;
        public getDataFileSurffix(): string;
        public getNodeInfo(fileName: string): TileMeshIndexNodeInfo;
        public getRootNode(): TileMeshIndexNode;
        public getRootNodeInfo(): TileMeshIndexNodeInfo;
        public initRootInfo(geoObject: TileMeshGeoObject, center: Vector3, radius: number, isPickable: boolean);
        public loadNodeInfo(baseUrl: string, fileName: string, worldCenter: Vector3): void;
        public parseTileDataAsync(data: AsyncWebStreamResultType, nodeInfo: TileMeshIndexNodeInfo): Promise<TileMeshTransferData>;
        public update(param: AsyncRenderableParam);
    }

    class TileMeshGeoObject extends PointGeoObject {
        constructor(layer: TileLayerBase, meshIndex: ITileMeshIndex, position: Vector3, url: string, isPickable: boolean, meshBounds: Box, clipRadius?: number);
        public readonly index: ITileMeshIndex;
        public readonly isDataLoaded: boolean;
        public readonly isReadyForDraw: boolean;
        public readonly localBounds: Box;
        protected getAnnoPosition(): Vector3;
        protected initBoundingClip(center: Vector3, radius: number): void;
        public enumDrawMeshesForRender(): Array<TileDrawMesh>;
        public enumMeshes(): Array<TileMesh>;
        public intersectRay(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, result: Vector3): boolean;
        public updateIndex(param: AsyncRenderableParam);
    }

    class TileLayerBase extends GeoObject3Layer {
        constructor(earthViewer: EarthViewer, name: string);
        public maxVisibleLevel: number;
        public readonly surface: TileMeshSurface;
        public createRootMesh(indexNode: TileMeshIndexNode, geoObject: TileMeshGeoObject, surface: TileMeshSurface, dataProvider: ITileMeshDataProvider, url: string, isPickable: boolean): TileMesh;
        public drawContents(param: AsyncRenderableParam): boolean;
        public drawVolumeBlendContents(param: AsyncRenderableParam): boolean;
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        public recycle(param: AsyncRenderableParam): boolean;
        public registerDataTask(param: AsyncRenderableParam): void;
        public updateContents(param: AsyncRenderableParam): boolean;
    }

    /**
      * DrawseeTileLayer 用于打开和显示Drawsee格式的倾斜摄影数据
      */
    class DrawseeTileLayer extends TileLayerBase {
        /**
          * 
          * @param earthViewer 
          * @param name 图层名
          * @param url 数据url
          * @param position 指定基准地球坐标位置
         */
        constructor(earthViewer: EarthViewer, name: string, url: string, position: Vector3);
        /**
          * 
          * @param indexNode 
          * @param geoObject 
          * @param surface 
          * @param dataProvider 
          * @param url 
          * @param isPickable 
          * @returns 
         */
        public createRootMesh(indexNode: TileMeshIndexNode, geoObject: TileMeshGeoObject, surface: TileMeshSurface, dataProvider: ITileMeshDataProvider, url: string, isPickable: boolean): TileMesh;
    }

    /**
      * B3dmTileLayer 用于打开和显示b3dm格式的3dtiles数据
      */
    class B3dmTileLayer extends TileLayerBase {
        /**
          * 
          * @param earthViewer 
          * @param layerName 图层名
          * @param tilesetUrl b3dm数据集根配置文件url，比如 xxx/tileset.json
          * @param offsetMeters 如果数据位置有小范围偏差，可以提供此参数进行位移修正。比如匹配地形时，通常需要调整高度
         */
        constructor(earthViewer: EarthViewer, layerName: string, tilesetUrl: string, offsetMeters?: Vector3);
    }

    interface IFixedMeshMaterial {
        diffuseColor: Color;
        isTransparent: boolean;
        isUseTexture: boolean;
        getLodTexture(lod: number): ITexture;
        loadTexture(lod: number): void;
    }

    interface IFixedMeshMaterialSet {
        count: number;
        addMaterial(name: string, material: IFixedMeshMaterial): void;
        getMaterial(name: string): IFixedMeshMaterial;
    }

    class FixedSubMesh {
        public indexStart: number;
        public indexCount: number;
        public material: IFixedMeshMaterial;
        public bounds: Box;
        constructor(indexStart: number, indexCount: number, material: IFixedMeshMaterial, bounds: Box);
        public boundingSphere: BoundingSphere;
        public radius: number;
        public textureLod: number;
        public toChunk(geoObject: GeoObject3, triBuffer: ElementBuffer, highlightColor: Color, isSharedUse: boolean);
    }

    class FixedMesh {
        public readonly lod: number;
        constructor(graphics: Graphics3, lod: number, meshData: FixedMeshData, subMeshes: FixedSubMesh[], isForPick: boolean);
        public bounds: Box;
        public readonly meshPoints: Vector3Array;
        public readonly subMeshes: FixedSubMesh[];
        public readonly triBuffer: ElementBuffer;
        public triCount: number;
        public clampLine(surfacePt1: Vector3, surfacePt2: Vector3, upVector?: Vector3): Vector3[];
        public clampPolgyon(localPoints: Vector3[]): Vector3[];
        public dispose(): void;
        public enumRenderChunks(world: Matrix, clipCenter: Vector3, clipRadius: number): Array<RenderMeshChunk>;
        public initTextureLod(meshLod: number): void;
        public intersects(ray: Ray, isSub: RefValue<boolean>): Vector3;
        public loadMaterial(meshLod: number): void;
        public prepareSubMeshChunk(geoObject: GeoObject3, isSharedUse: boolean, highlightColor: Color, clipRadius?: number): Array<SimpleTextureMeshChunk>;
        public updateTextureLod(eyeLocal: Vector3, meshLod: number, lodDistanceRatio: number): void;
    }

    class SubFixedMeshData {
        constructor(subData?: SubMeshData);
        public bounds: Box;
        public diffuseColor: Color;
        public indexCount: number;
        public indexStart: number;
        public materialName: string;
        public getBounds(): Box;
        public toSubMeshData(meshData: MeshData): SubMeshData;
    }

    class FixedMeshData {
        public bounds: Box;
        public materials: MeshMaterialDefine[];
        public name: string;
        public normals: Vector3Array;
        public subDatas: SubFixedMeshData[];
        public textureCoords: Vector2Array;
        public triangles: Triangle3Array;
        public vertexes: Vector3Array;
        public scaleMesh(scaleTo: number): boolean;
        public toMeshData(): MeshData;
        public static FromMeshData(meshData: MeshData): FixedMeshData;
        public static FromMeshDataArray(mesheDatas: Array<MeshData>): Array<FixedMeshData>;
        public static FromSubMesheDatas(subMeshes: Array<SubMeshData>): SubFixedMeshData[];
        public static ToSubMeshDatas(fixedSubMeshes: SubFixedMeshData[], mesh: MeshData): Array<SubMeshData>;
    }

    class FixedModelGeoObject extends PointGeoObject {
        constructor(surface: FixedModelSurface, position: Vector3, renderContext: RenderContext3, url: string, materialSetNo: number, isPickable: boolean);
        public lod: number;
        public objectType: ModelObjectType;
        public readonly isReadyForDraw: boolean;
        public readonly localBounds: Box;
        public clampLine(pt1: Vector3, pt2: Vector3): Vector3[];
        public clampPolygon(worldPoints: Vector3[]): Vector3[];
        public enumChunksForDraw(highlightColor: Color): Array<SimpleTextureMeshChunk>;
        public getLodMeshes(lod: number): Array<FixedMesh>;
        public initLodPackNos(lodPackNos: Int32Array): void;
        public initPredefineModelBoundingBox(llx: number, lly: number, llz: number, urx: number, ury: number, urz: number): void;
        public intersectRayAdvance(renderContext: RenderContext3, pt1: Vector3, pt2: Vector3, ptResult: Vector3, isSub: RefValue<boolean>): boolean;
        public loadData(param: AsyncRenderableParam): void;
    }

    class ModelObjectGroupDefine {
        constructor(baseUrl: string, position: Vector3, isAutoMatchGround?: boolean, groundHeight?: number, isPickable?: boolean, objectType?: ModelObjectType);
        public baseUrl: string;
        public groundHeight: number;
        public isAutoMatchGround: boolean;
        public isPickable: boolean;
        public objectType: ModelObjectType;
        public position: Vector3;
    }

    class ModelObjectDefine {
        public file: string;
        public isPickable: boolean;
        public legendUrl: string;
        public llx: number;
        public lly: number;
        public llz: number;
        public objectType: ModelObjectType;
        public packNos: Int32Array;
        public urx: number;
        public ury: number;
        public urz: number;
        public useBounds: boolean;
    }

    class FixedModelGroupLoader {
        constructor(layer: ModelLayer);
        public addLoadingTask(define: ModelObjectGroupDefine): boolean;
    }

    class FixedModelColorMaterial implements IFixedMeshMaterial {
        public diffuseColor: Color;
        constructor(diffuseColor: Color);
        public isTransparent: boolean;
        public isUseTexture: boolean;
        public getLodTexture(lod: number): ITexture;
        public loadTexture(lod: number): void;
    }

    class FixedModelMaterial implements IFixedMeshMaterial {
        constructor(surface: FixedModelMaterialSurface, define: MeshMaterialDefine, baseUrl: string);
        public diffuseColor: Color;
        public isTransparent: boolean;
        public isUseTexture: boolean;
        public getLodTexture(lod: number): ITexture;
        public loadTexture(lod: number): void;
    }

    class BlockTextureManager {
        public graphics: Graphics3;
        public lod: number;
        constructor(graphics: Graphics3, lod: number);
        public createSubBlockTexture(urlNo: number): ITexture;
        public isBlockTexture(urlNo: number): boolean;
        public setTextureBlockInfo(urlNo: number, baseUrl: string, info: BlockTextureInfo): void;
    }

    class FixedModelMaterialSurface extends DataSurfaceBase {
        constructor(graphics: Graphics3);
        public graphics: Graphics3;
        public accessTexture(urlNo: number, lod: number): ITexture;
        public addMaterialSet(textureBaseUrl: string, materailDefines: Array<MeshMaterialDefine>): number;
        public allocUrlNo(url: string): number;
        public createColorMaterial(diffuseColor: Color): IFixedMeshMaterial;
        public getBlockTextureManager(lod: number): BlockTextureManager;
        public getMaterial(materialSetNo: number, materialName: string): IFixedMeshMaterial;
        public loadTexture(lod: number, urlNo: number, baseUrl: string, fileNameOnly: string): void;
        public recycle(param: AsyncRenderableParam): boolean;
        public static BaseTimeout: number;
        public static readonly BaseCap: number;
    }

    class FixedModelSurface extends DataSurfaceBase {
        constructor(graphics: Graphics3, materialSurface: FixedModelMaterialSurface);
        public graphics: Graphics3;
        public materialSurface: FixedModelMaterialSurface;
        public accessMesh(urlNo: number, lod: number): FixedMesh;
        public allcUrlNo(url: string, materialSetNo: number, isForPick: boolean): number;
        public getIsPickable(urlNo: number): boolean;
        public getMaterialSetNo(urlNo: number): number;
        public initLodPackNos(urlNo: number, lodPackNos: Int32Array): void;
        public isMeshReadyForDraw(urlNo: number): boolean;
        public loadMesh(urlNo: number, lod: number, globalEyePos: Vector3, centerWorld: Vector3): void;
        public recycle(param: AsyncRenderableParam): boolean;
        public static readonly BaseCap: number;
        public static CreateOneMesh(materialSurface: FixedModelMaterialSurface, graphics: Graphics3, lod: number, meshData: FixedMeshData, materialSetNo: number, isForPick: boolean): FixedMesh;
    }

    /**
      * ModelLayer 矢量三维模型层，用于显示从obj等格式转换来的海量模型数据，通常是BIM或者人工构造的模型。
      */
    class ModelLayer extends GeoObject3Layer {
        /**
          * 
          * @param earthViewer 
          * @param name 
         */
        constructor(earthViewer: EarthViewer, name: string);
        /**
          * 
         */
        public ambientLightBrightness: number;
        /**
          * 
         */
        public customChunkMaterial: any;
        /**
          * 
          * @param groupBaseUrl 
          * @param position 
          * @param isAutoMatchGround 
          * @param groundHeight 
          * @param isPickable 
          * @param objectType 
         */
        public addModelGroup(groupBaseUrl: string, position: Vector3, isAutoMatchGround?: boolean, groundHeight?: number, isPickable?: boolean, objectType?: ModelObjectType): void;
        /**
          * 
          * @param worldPt1 
          * @param worldPt2 
          * @returns 
         */
        public clampLine(worldPt1: Vector3, worldPt2: Vector3): Vector3[];
        /**
          * 
          * @param worldPoints 
          * @returns 
         */
        public clampPolygon(worldPoints: Vector3[]): Vector3[];
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawVolumeBlendContents(param: AsyncRenderableParam): boolean;
        /**
          * 
         */
        public enumRenderMeshChunks(): Array<RenderMeshChunk>;
        /**
          * 
          * @param worldPt1 
          * @param worldPt2 
          * @param resultPt 
          * @returns 
         */
        public pickByRay(worldPt1: Vector3, worldPt2: Vector3, resultPt: Vector3): PickableObject;
        /**
          * 
          * @param param 
          * @returns 
         */
        public recycle(param: AsyncRenderableParam): boolean;
        /**
          * 
          * @param param 
         */
        public registerDataTask(param: AsyncRenderableParam): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public updateContents(param: AsyncRenderableParam): boolean;
    }

    /**
      * DivObject 屏幕叠加对象，用于关联三维物体和htmlDiv界面元素
      */
    class DivObject {
        /**
          * 创建新DivObject
          * @param geoObject 关联的GeoObject3
          * @param div HTMLDivElement对象
          * @param offset 与关联基准点之间的像素位移
         */
        constructor(geoObject: GeoObject3, div: HTMLDivElement, offset?: Vector2);
        /**
          * 基本缩放距离。如果设置该值，则在此距离上位原大小，远或者近将引起界面对象缩放
         */
        public baseSizeDistance: number;
        /**
          * 水平对齐方式
         */
        public horizontalAlignment: HorizontalAlignment;
        /**
          * 是否缩放界面元素大小
         */
        public isSizable: boolean;
        /**
          * 是否处于透明状态
         */
        public isTransparent: boolean;
        /**
          * 是否可见
         */
        public isVisible: boolean;
        /**
          * 最远可见距离
         */
        public maxVisibleDistance: number;
        /**
          * 最近可见距离
         */
        public minVisibleDistance: number;
        /**
          * 相对于锚点像素位移
         */
        public pixelOffset: Vector2;
        /**
          * 关联的HTMLDivElement对象
         */
        public readonly div: HTMLDivElement;
        /**
          * 关联的GeoObject3对象
         */
        public readonly geoObject: GeoObject3;
        /**
          * 内部使用
         */
        public readonly uIBounds: Rect;
        /**
          * 垂直对齐方式
         */
        public verticalAlignment: VerticalAlignment;
    }

    /**
      * DivLayer 屏幕对象关联图层。在此图层添加对象，将能够把场景中的GeoObject3与div关联起来，div将会跟随三维物体移动，用于实现三维物体的关联标签等效果。
      * div的内容完全由开发者控制，这样可以实现丰富的自定义标签功能。系统只负责根据设置的对齐方式、位移等，协调三维图形与div的位置关系。
      * 如果有div直接的叠加遮挡，被遮挡的div将自动半透明。还可以设置div是否自动根据观察距离远近而缩放大小。
      */
    class DivLayer extends Layer3 {
        /**
          * 创建新DivLayer。屏幕对象关联图层。在此图层添加对象，将能够把场景中的GeoObject3与div关联起来，div将会跟随三维物体移动，用于实现三维物体的关联标签等效果。
          * div的内容完全由开发者控制，这样可以实现丰富的自定义标签功能。系统只负责根据设置的对齐方式、位移等，协调三维图形与div的位置关系。
          * 如果有div直接的叠加遮挡，被遮挡的div将自动半透明。还可以设置div是否自动根据观察距离远近而缩放大小。
          * @param earthViewer 
          * @param name 唯一名称
         */
        constructor(earthViewer: EarthViewer, name: string);
        /**
          * 对象个数
         */
        public readonly count: number;
        /**
          * 
         */
        protected onSetVisible(): void;
        /**
          * 
          * @param geoObjectOrPosition 
          * @param div
          * @param offset
          * @returns 
         */
        public addObject(geoObjectOrPosition: GeoObject3 | Vector3, div: HTMLDivElement, offset?: Vector2): DivObject;
        /**
          * 清除所有关联对象
         */
        public clear(): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 用指定索引获取关联对象
          * @param index 
          * @returns 
         */
        public getAt(index: number): DivObject;
    }

    class BabylonFileHelper {
        public static IsCompressedData(buffer: any): boolean;
        public static LoadBabylonGzFile(rootUrl: string, fileName: string, scene: BABYLON.Scene, onSuccess: () => void): void;
        public static Uncompress(buffer: any): any;
    }

    /**
      * BabylonGeoObject 该类把Babylon Mesh封装为一个可以通过地球坐标操作的GeoObject，通过position属性，可以用地球坐标设置对象位置。在交互选择Babylon Mesh时，返回的也是该对象类。
      * 通过关联的Mesh对象，可以直接调用Babylon API。
      */
    class BabylonGeoObject extends PickableObject {
        /**
          * 创建对象BabylonGeoObject。该类把Babylon Mesh封装为一个可以通过地球坐标操作的GeoObject，通过position属性，可以用地球坐标设置对象位置。通过关联的Mesh对象，可以直接调用Babylon API。
          * @param layer 所属的BabylonLayer
          * @param mesh 关联的Babylon Mesh对象
         */
        constructor(layer: BabylonLayer, mesh: BABYLON.AbstractMesh);
        /**
          * 获取或者设置对象的地球坐标位置
         */
        public position: Vector3;
        /**
          * 对象所属图层名称
         */
        public readonly layerName: string;
        /**
          * 关联的Babylon Mesh对象
         */
        public readonly mesh: BABYLON.AbstractMesh;
        /**
          * 对象名称
         */
        public readonly name: string;
    }

    /**
      * BabylonLayer 在EarthViewer场景中融合Babylon的关键对象。对象创建时，自动创建了一个内置BABYLON.Scene，然后可以通过Babylon API创建各种对象，包括材质、Mesh等。
      * 该类通过设置position属性，可以在指定地球坐标，从而与其他的Drawsee对象绘制在同一坐标空间。
      * 该类提供了一些方法，可以在局部坐标与地球坐标直接进行转换，用于绘制或者计算。
      */
    class BabylonLayer extends Layer3 {
        /**
          * 创建新的BabylonLayer。该类是EarthViewer场景中融合Babylon的关键对象。对象创建时，自动创建了一个内置BABYLON.Scene，然后可以通过Babylon API创建各种对象，包括材质、Mesh等。
          * 通过设置position属性，可以在指定地球坐标，从而与其他的Drawsee对象绘制在同一坐标空间。
          * 提供了一些方法，可以在局部坐标与地球坐标直接进行转换，用于绘制或者计算。
          * @param earthViewer
          * @param name 名称，必须唯一，不能重名
          * @param autoCreateLight 是否自动创建光源
         */
        constructor(earthViewer: EarthViewer, name: string, autoCreateLight?: boolean);
        /**
          * 设置图层的基准地球坐标位置。以后通过Scene创建的对象，其坐标都是相对于该基准位置。
         */
        public position: Vector3;
        /**
          * 内部包含的BABYLON.Scene对象，用于创建所有后续对象
         */
        public readonly scene: BABYLON.Scene;
        /**
          * 
         */
        public transform: Matrix;
        /**
          * 在指定位置添加glTF格式的模型文件
          * @param position 地球坐标位置
          * @param gltfUrl glTF格式模型文件url
          * @returns Promise 以异步方式返回创建的BabylonGeoObject
         */
        public addModel(position: Vector3, gltfUrl: string): Promise<BabylonGeoObject>;
        /**
          * 清除所有对象
         */
        public clear(): void;
        /**
          * 清除对象的选中状态
         */
        public clearPickedObjects(): void;
        /**
          * 
          * @param param 
          * @returns 
         */
        public drawContents(param: AsyncRenderableParam): boolean;
        /**
          * 从地球坐标变换为局部坐标 
          * @param earth 地球坐标
          * @returns 局部坐标
         */
        public earthToLocal(earth: Vector3): Vector3;
        /**
          * 从地球坐标变换为局部坐标
          * @param earth 地球坐标
          * @param result 局部坐标结果
         */
        public earthToLocalToRef(earth: Vector3, result: Vector3): void;
        /**
          * 是否有需要动画绘制的对象
         */
        public hasAnimation(): boolean;
        /**
          * 从局部坐标变换为地球坐标
          * @param local 局部坐标
          * @returns 地球坐标
         */
        public localToEarth(local: Vector3): Vector3;
        /**
          * 从局部坐标变换为地球坐标
          * @param local 局部坐标
          * @param result 地球坐标结果
         */
        public localToEarthToRef(local: Vector3, result: Vector3): void;
        /**
          * 使用两点定义的射线选取一个对象
          * @param worldPt1 世界坐标系点1
          * @param worldPt2 世界坐标系点2
          * @param resultPt 如果选中则保存对象被击中的三维位置
          * @returns 选中对象或者null
         */
        public pickByRay(worldPt1: Vector3, worldPt2: Vector3, resultPt: Vector3): PickableObject;
    }

    interface ITerrainCalculator {
        /**
          * 
          * @param earthRange 
          * @param minLevel 
          * @param maxLevel 
          * @returns 
         */
        calculateApproximateHeightRange(earthRange: Rect, minLevel?: number, maxLevel?: number): Vector2;
        /**
          * 
          * @param earthX 
          * @param earthZ 
          * @returns 
         */
        calculateHeight(earthX: number, earthZ: number): number;
        /**
          * 
          * @param earthX 
          * @param earthZ 
          * @param resultHeight 
          * @param resultLevel 
          * @param minLevel 
          * @param maxLevel 
          * @returns 
         */
        calculateHeightAdvance(earthX: number, earthZ: number, resultHeight: RefValue<number>, resultLevel: RefValue<number>, minLevel?: number, maxLevel?: number): boolean;
        /**
          * 
          * @param screenX 
          * @param screenY 
          * @param resultPt 
          * @returns 
         */
        calculateHitPosition(screenX: number, screenY: number, resultPt: Vector3): boolean;
        /**
          * 
          * @param worldPoints 
          * @param maxLevel 
          * @returns 
         */
        clampLine(worldPoints: Vector3[], maxLevel?: number): Vector3[];
        /**
          * 
          * @param worldPoints 
          * @param maxLevel 
          * @returns 
         */
        clampPolygon(worldPoints: Vector3[], maxLevel?: number): Vector3[];
        /**
          * 
          * @param earthRange 
          * @param maxLevel 
          * @returns 
         */
        enumRenderChunks(earthRange: Rect, maxLevel?: number): Array<RenderMeshChunk>;
    }

    class TerrainConst {
        public static MaxDetailLevel: number;
        public static MinDetailLevel: number;
        public static RootLevel: number;
    }

    class ValueGrid {
        constructor(width: number, height: number);
        public readonly height: number;
        public readonly width: number;
        public calcValueRange(minValue: RefValue<number>, maxValue: RefValue<number>): void;
        public getItem(x: number, y: number): number;
        public setItem(x: number, y: number, value: number): void;
    }

    class DemGridSurface {
        constructor(origin: Vector2, step: number, xCount: number, zCount: number);
        public readonly bounds: Rect;
        public readonly step: number;
        public readonly valueGrid: ValueGrid;
    }

    class HeightGrid {
        constructor(array?: ArrayLike<number>);
        public readonly data: Float32Array;
        public clone(): HeightGrid;
        public fill(value: number): void;
        public getAt(x: number, y: number): number;
        public setAt(x: number, y: number, value: number): void;
        public static CreateDenseHeightArray(heights: HeightGrid, minSize: number): HeightGrid;
    }

    class TerrainMath {
        public static CalcPatchOriginPoint(coordSys: ICoordSystem3, level: number, xIndex: number, zIndex: number): Vector3;
        public static CalcPatchOriginPointToRef(coordSys: ICoordSystem3, level: number, xIndex: number, zIndex: number, result: Vector3): void;
    }

    class TerrainPatchCalc {
        constructor(originPt: Vector3, earthVs: Vector2Array, triPoints: Vector3Array);
        public calculateHeight(renderContext: RenderContext3, X: number, Z: number): number;
        public clampPolygon(coordsys: ICoordSystem3, clipPointsWorld: Vector3[], resultTrainglePoints: RefValue<Array<Vector3>>): boolean;
        public clipOneSegment(renderContext: RenderContext3, worldPt1: Vector3, worldPt2: Vector3, resultPoints: RefValue<Array<Vector3>>): boolean;
        public getTrianglePointsWorld(): Array<Vector3>;
        public isIntersect(worldPt1: Vector3, worldPt2: Vector3, resultPt: Vector3): boolean;
        public isPlaneIntersect(worldPt1: Vector3, worldPt2: Vector3): boolean;
        public toGlobalCoord(pt: Vector3): Vector3;
        public toGlobalCoordV(pt: Vector3): Vector3;
        public toLocalCoord(pt: Vector3): Vector3;
        public toLocalCoordV(pt: Vector3): Vector3;
    }

    class TerrainPatch implements IDisposable {
        public level: number;
        public xIndex: number;
        public zIndex: number;
        constructor(surface: TerrainSurface, level: number, xIndex: number, zIndex: number, vertexes: Vertex3Array, triangles: Triangle3Array, mainTriangleCount: number, heights: HeightGrid, isZeroHeight: boolean);
        public readonly bounds: Box;
        public readonly handle: QuadtreeHandle;
        public readonly heights: HeightGrid;
        public readonly heightsDetail: HeightGrid;
        public readonly math: TerrainPatchCalc;
        public readonly radius: number;
        public readonly triangleCount: number;
        public createSubPatch(subLevel: number, xIndex: number, zIndex: number): TerrainPatch;
        public dispose(): void;
        public getTrianglePointsWorld(): Array<Vector3>;
        public toMeshRenderChunk(): RenderMeshChunk;
        public toRenderChunk(texture: ITexture, overlayTextures: AsyncTextureCollection, isTransparent: boolean, isAsNoDepthBackground: boolean): TerrainChunk;
        public static readonly HEIGHT_MATRIX_SIZE: number;
        public static readonly HEIGHT_NULL: number;
        public static readonly PATCH_SIZE: number;
    }

    class PatchHeightsData {
        public level: number;
        public xIndex: number;
        public zIndex: number;
        public data: Uint8Array;
        constructor(level: number, xIndex: number, zIndex: number, data: Uint8Array);
    }

    class TerrainPatchFactory {
        public static CreateFromBytes(terrainSurface: TerrainSurface, data: Uint8Array, tilingHandle: QuadtreeHandle): TerrainPatch;
        public static CreatePatchFromHeights(terrainSurface: TerrainSurface, heightsDefine: HeightGrid, level: number, xIndex: number, zIndex: number, isZeroHeight?: boolean): TerrainPatch;
        public static CreateTriangleWithZeroHeight(terrainSurface: TerrainSurface, level: number, xIndex: number, zIndex: number): TerrainPatch;
        public static ExtractPatchHeightsData(patchBlocks: Uint8Array): Array<PatchHeightsData>;
    }

    class TerrainPatchIndexCalc implements ITerrainCalculator {
        public layer: TerrainLayer;
        public index: TerrainIndex;
        constructor(layer: TerrainLayer, index: TerrainIndex);
        public nearPointDisWorld: number;
        public calculateApproximateHeightRange(earthRange: Rect, minLevel?: number, maxLevel?: number): Vector2;
        public calculateHeight(earthX: number, earthZ: number): number;
        public calculateHeightAdvance(earthX: number, earthZ: number, resultHeight: RefValue<number>, resultLevel: RefValue<number>, minLevel?: number, maxLevel?: number): boolean;
        public calculateHitPosition(screenX: number, screenY: number, resultPt: Vector3): boolean;
        public clampLine(worldPoints: Vector3[], maxLevel?: number): Vector3[];
        public clampPolygon(srcPoints: Vector3[], maxLevel?: number): Vector3[];
        public enumRenderChunks(earthRange: Rect, maxLevel?: number): Array<RenderMeshChunk>;
        public updatePatchIndex(): void;
    }

    class TerrainIndex {
        public layer: TerrainLayer;
        constructor(layer: TerrainLayer, terrainSurface: TerrainSurface, textureSurface: TextureSurface);
        public allocSubNode(): TerrainIndexNode;
        public enumNodes(): Array<TerrainIndexNode>;
        public updateIndex(param: AsyncRenderableParam): boolean;
    }

    class TerrainIndexNode {
        public index: TerrainIndex;
        public level: number;
        public xIndex: number;
        public zIndex: number;
        public texture: ITexture;
        public overlayTextures: AsyncTextureCollection;
        constructor(index: TerrainIndex, level?: number, xIndex?: number, zIndex?: number, texture?: ITexture, overlayTextures?: AsyncTextureCollection);
        public earthCenter: Vector2;
        public earthRange: Rect;
        public father: TerrainIndexNode;
        public radius: number;
        public readonly handle: QuadtreeHandle;
        public readonly isReadyForDraw: boolean;
        public readonly patch: TerrainPatch;
        public worldCenter: Vector3;
        public addSub(sub: TerrainIndexNode): void;
        public bindingDrawingData(): void;
        public checkAllSubsReadyForDraw(): boolean;
        public checkVisibleSubsReadyForDraw(): boolean;
        public enumSubs(): Array<TerrainIndexNode>;
        public loadData(): void;
        public prepareData(): void;
        public toRenderChunk(isAsNoDepthBackground: boolean, isToClearDepth: boolean): TerrainChunk;
        public static IsNodesReadyForDraw(nodes: Array<TerrainIndexNode>): boolean;
    }

    /**
      * ITerrainProvider 
      */
    interface ITerrainProvider {
        /**
          * extent
         */
        extent: GeoExtent;
        /**
          * isReady
         */
        isReady: boolean;
        /**
          * maxLevel
         */
        maxLevel: number;
        /**
          * onReady
         */
        onReady: Observable<ITerrainProvider>;
        /**
          * isAvailable
          * @param handle 
          * @returns 
         */
        isAvailable(handle: QuadtreeHandle): boolean;
        /**
          * isLoading
          * @param handle 
          * @returns 
         */
        isLoading(handle: QuadtreeHandle): boolean;
        /**
          * loadPatchAsync
          * @param terrainSurface 
          * @param handle 
          * @returns 
         */
        loadPatchAsync(terrainSurface: TerrainSurface, handle: QuadtreeHandle): Promise<TerrainPatch>;
    }

    class TerrainSurface implements IDisposable {
        public maxTerrainLevel: number;
        public accessPatch(handle: QuadtreeHandle): TerrainPatch;
        public allocBuffer(level: number, verts: Float32Array, indices: Uint32Array): ElementBuffer;
        public collectGabage(): void;
        public dispose(): void;
        public loadPatch(handle: QuadtreeHandle): void;
    }

    class AsyncTextureCollection {
        public handle: QuadtreeHandle;
        constructor(handle: QuadtreeHandle, readers: Array<CachedImageTileReader>);
        public readonly isNeedLoad: boolean;
        public readonly isReady: boolean;
        public readonly textures: Array<ITexture>;
        public bindForRender(): void;
        public load(): void;
        public prepareTexture(): void;
    }

    class TextureSurface implements IDisposable {
        constructor(earthViewer: EarthViewer);
        public accessOverlayTexture(handle: QuadtreeHandle): AsyncTextureCollection;
        public accessTexture(handle: QuadtreeHandle): ITexture;
        public collectGabage(): void;
        public dispose(): void;
        public loadOverlayTexture(handle: QuadtreeHandle): AsyncTextureCollection;
        public loadTexture(handle: QuadtreeHandle, showTagInfo: boolean): ITexture;
        public open(provider: IImageProvider): boolean;
    }

    class TerrainLayer extends Layer3 {
        constructor(earthViewer: EarthViewer, terrainSurface: TerrainSurface, textureSurface: TextureSurface);
        public readonly isRootNodesDrawn: boolean;
        public readonly terrainCalculator: ITerrainCalculator;
        public drawContents(param: AsyncRenderableParam): boolean;
        public getLeafNodesForCalc(maxLevel?: number): Array<TerrainIndexNode>;
        public isRendering(): boolean;
        public recycle(param: AsyncRenderableParam): boolean;
        public registerDataTask(param: AsyncRenderableParam): void;
        public updateContents(param: AsyncRenderableParam): boolean;
    }

    /**
      * DrawseeTerrainProvider 
      */
    class DrawseeTerrainProvider implements ITerrainProvider {
        /**
          * 
          * @param terrainUrl 
         */
        constructor(terrainUrl: string);
        /**
          * 
         */
        public extent: GeoExtent;
        /**
          * 
         */
        public onReady: Observable<ITerrainProvider>;
        /**
          * 
         */
        public readonly isReady: boolean;
        /**
          * 
         */
        public readonly maxLevel: number;
        /**
          * 
          * @param handle 
          * @returns 
         */
        public isAvailable(handle: QuadtreeHandle): boolean;
        /**
          * 
          * @param handle 
          * @returns 
         */
        public isLoading(handle: QuadtreeHandle): boolean;
        /**
          * 
          * @param terrainSurface 
          * @param handle 
          * @returns 
         */
        public loadPatchAsync(terrainSurface: TerrainSurface, handle: QuadtreeHandle): Promise<TerrainPatch>;
    }

    class TerrainProvider extends DrawseeTerrainProvider {
        constructor(terrainUrl: string);
    }

    class TerrainPatchTriangleData {
        public verts: Vertex3Array;
        public triangles: Triangle3Array;
        constructor(verts: Vertex3Array, triangles: Triangle3Array);
        public heightGrid: HeightGrid;
        public readonly triangleCount: number;
    }

    class QuantizedMeshTerrainData {
        public static CreatePatchData(buffer: ArrayBufferLike, heightGrid?: HeightGrid): TerrainPatchTriangleData;
    }

    /**
      * CesiumTerrainProvider Cesium .terrain格式地形服务
      */
    class CesiumTerrainProvider implements ITerrainProvider {
        /**
          * 数据根地址
          * @param url 
         */
        constructor(url: string);
        /**
          * 
         */
        public onReady: Observable<ITerrainProvider>;
        /**
          * 
         */
        public readonly extent: GeoExtent;
        /**
          * 
         */
        public readonly isReady: boolean;
        /**
          * 
         */
        public readonly maxLevel: number;
        /**
          * 
          * @param handle 
          * @returns 
         */
        public isAvailable(handle: QuadtreeHandle): boolean;
        /**
          * 
          * @param handle 
          * @returns 
         */
        public isLoading(handle: QuadtreeHandle): boolean;
        /**
          * 
          * @param terrainSurface 
          * @param handle 
          * @returns 
         */
        public loadPatchAsync(terrainSurface: TerrainSurface, handle: QuadtreeHandle): Promise<TerrainPatch>;
    }

    class GroundLine {
        public renderContext: RenderContext3;
        public worldPoints: Vector3[];
        constructor(renderContext: RenderContext3, worldPoints: Vector3[]);
        public dispose(): void;
        public getWorldClampPoints(): Array<Vector3>;
        public prepareGroundHeight(): boolean;
    }

    /**
      * RenderContext3 显示上下文对象。获取相机、引擎等重要的显示系统对象
      */
    class RenderContext3 {
        /**
          * 
          * @param graphics 
         */
        constructor(graphics: Graphics3);
        /**
          * 
         */
        public backgroundColor: Color;
        /**
          * 相机对象
         */
        public camera: Camera;
        /**
          * 是否为地球坐标
         */
        public isEarthCoord: boolean;
        /**
          * 光线方向
         */
        public lightDirection: Vector3;
        /**
          * 坐标系统对象
         */
        public readonly coordSystem: ICoordSystem3;
        /**
          * 三维图形设备对象
         */
        public readonly graphics: Graphics3;
        /**
          * 
         */
        public readonly projection: IProjection;
        /**
          * 地形计算接口
         */
        public readonly terrainCalculator: ITerrainCalculator;
        /**
          * 
         */
        public stencilHoleManager: IStencilHoleManager;
        /**
          * 
         */
        public terrainLeafLevel: number;
        /**
          * 
         */
        public beginFrame(): void;
        /**
          * 
         */
        public clearForceNotDraw(): void;
        /**
          * 
         */
        public endFrame(): void;
        /**
          * 
         */
        public getForceNotDraw(): boolean;
        /**
          * 
          * @param timeSpanMs 
         */
        public setForceNotDraw(timeSpanMs: number): void;
        /**
          * 
          * @param projection 
         */
        public setProjection(projection: IProjection): void;
        /**
          * 
         */
        public setupDefaultRenderState(): void;
    }

    /**
      * EarthToolType EarthViewer上的操作类型
      */
    enum EarthToolType {
        /**
          * 
         */
        None = 0,
        /**
          * 
         */
        Pan = 1,
        /**
          * 点击
         */
        TrackPoint = 10,
        /**
          * 跟踪线
         */
        TrackLine = 20,
        /**
          * 跟踪多边形
         */
        TrackPoly = 30,
        /**
          * 量算长度
         */
        MeasureLength = 120,
        /**
          * 量算面积
         */
        MeasureArea = 130
    }

    class EarthToolTypeHelper {
        public static FromMapToolType(trackerType: MapToolType): EarthToolType;
    }

    /**
      * EarthViewerRenderEvent EarthViewer绘制事件。
      */
    class EarthViewerRenderEvent extends EventArgs {
        /**
          * 如果设置为true，将激发场景重画
         */
        public isNeedRedraw: boolean;
    }

    /**
      * EarthViewerTrackEventArgs 屏幕图形跟踪操作结束事件。保存了跟踪绘制的空间图形数据
      */
    class EarthViewerTrackEventArgs extends EventArgs {
        /**
          * 跟踪类型
         */
        public geoType: GeoType;
        /**
          * 屏幕点击位置数组
         */
        public points: Vector3[];
        /**
          * 地表跟踪线数组
         */
        public linePoints: Vector3[];
        /**
          * 地表跟踪面三角形点数组，每三个点代表一个三角形
         */
        public areaPoints: Vector3[];
        /**
          * setCurrentTool函数传入的调用者信息
         */
        public callerInfo: any;
        /**
          * 
          * @param geoType
          * @param points
          * @param linePoints
          * @param areaPoints
          * @param callerInfo 
         */
        constructor(geoType: GeoType, points: Vector3[], linePoints: Vector3[], areaPoints: Vector3[], callerInfo: any);
    }

    /**
      * EarthViewer 三维场景控件。用于显示地球坐标或者直角坐标的三维场景，包括动态图层，粒子系统等，是开发三维应用的首要控件。
      */
    class EarthViewer extends UserControl {
        /**
          * 创建一个新的EarthViewer
          * @param htmlUI 容纳EarthViewer的HTMLDivElement的id字符串或者对象本身
          * @param fatherUI 用于嵌套系统界面布局，通常不需要使用
         */
        constructor(htmlUI: string | HTMLDivElement, fatherUI?: UIElement);
        /**
          * 绘制完成后发出
         */
        public onAfterRender: Observable<EarthViewerRenderEvent>;
        /**
          * 绘制开始前发出
         */
        public onBeforeRender: Observable<EarthViewerRenderEvent>;
        /**
          * 点击选中物体时发出
         */
        public onClickObject: Observable<GeoObject3PickEventArgs>;
        /**
          * 鼠标移动到物体表面时发出
         */
        public onEnterObject: Observable<GeoObject3PickEventArgs>;
        /**
          * 鼠标移出到物体表面时发出
         */
        public onLeaveObject: Observable<GeoObject3PickEventArgs>;
        /**
          * 鼠标左键双击发出
         */
        public onMouseLeftButtonDoubleClick: Observable<MouseButtonEventArgs>;
        /**
          * 鼠标右键双击发出
         */
        public onMouseRightButtonDoubleClick: Observable<MouseButtonEventArgs>;
        /**
          * 屏幕跟踪操作完成时发出
         */
        public onTrackFinish: Observable<EarthViewerTrackEventArgs>;
        /**
          * 物体失去选中焦点时发出
         */
        public onUnclickObject: Observable<GeoObject3PickEventArgs>;
        /**
          * 坐标轴箭头大小比例
         */
        public axisArrowRatio: number;
        /**
          * 坐标轴颜色
         */
        public axisColor: Color;
        /**
          * 坐标轴长度米
         */
        public axisLength: number;
        /**
          * 三维场景背景色
         */
        public backgroundColor: Color;
        /**
          * 是否处于活动状态
         */
        public isActive: boolean;
        /**
          * 三维直角坐标模式下是否显示坐标轴
         */
        public isAxisVisible: boolean;
        /**
          * 是否调换YZ坐标轴
         */
        public isAxisYZReverse: boolean;
        /**
          * 是否是地球坐标。设置false时，为三维直角坐标模式
         */
        public isEarthCoord: boolean;
        /**
          * 是否允许鼠标移过物体表面时选择
         */
        public isEnableMouseOverPick: boolean;
        /**
          * 是否高亮显示选中对象
         */
        public isHighlightPickedObject: boolean;
        /**
          * 是否显示指北针
         */
        public isNorthPointerVisible: boolean;
        /**
          * 是否允许选择
         */
        public isPickable: boolean;
        /**
          * 是否显示直角坐标模式下的旋转中心
         */
        public isRotationCenterVisible: boolean;
        /**
          * 是否显示天空。缺省情况下，地球模式显示，直角坐标模式不显示
         */
        public isSkyVisible: boolean;
        /**
          * 是否显示底部信息工具条
         */
        public isStatusBarVisible: boolean;
        /**
          * 是否已经显示地形
         */
        public isTerrainVisible: boolean;
        /**
          * 最大地形显示层级
         */
        public maxTerrainLevel: number;
        /**
          * 相机对象
         */
        public readonly camera: Camera;
        /**
          * 场景屏幕区域
         */
        public readonly clientRect: Rect;
        /**
          * 全局Scene对象，通常用于创建Babylon材质比较方便
         */
        public readonly globalScene: Scene;
        /**
          * 图形设备对象
         */
        public readonly graphics: Graphics3;
        /**
          * 
         */
        public readonly hasMouseButtonDown: boolean;
        /**
          * 
         */
        public readonly imageProviders: NameObjectList<IImageProvider>;
        /**
          * 系统保留
         */
        public readonly isNeedRedraw: boolean;
        /**
          * 
         */
        public readonly isTerrainMouseHeightReady: boolean;
        /**
          * 场景中所有图层集合
         */
        public readonly layers: Layer3Collection;
        /**
          * 
         */
        public readonly layoutRoot: UIElement;
        /**
          * 鼠标地球坐标
         */
        public readonly mousePosition: Vector3;
        /**
          * 鼠标屏幕坐标
         */
        public readonly mouseScreenPosition: Vector2;
        /**
          * 显示上下文
         */
        public readonly renderContext: RenderContext3;
        /**
          * 地形计算接口
         */
        public readonly terrainCalculator: ITerrainCalculator;
        /**
          * 地形显示设置
         */
        public readonly terrainRenderSetting: TerrainRenderSetting;
        /**
          * 
         */
        public terrainZIndex: number;
        /**
          * 
         */
        protected getTopMostUI(): UIElement;
        /**
          * 
         */
        protected initializeComponent(): void;
        /**
          * 添加用户自定义地形计算图层。一般使用倾斜摄影图层
          * @param layer 
          * @returns 
         */
        public addGroundLayer(layer: GeoObject3Layer): boolean;
        /**
          * 添加高亮对象
          * @param geoObject 
         */
        public addPickedObject(geoObject: GeoObject3): void;
        /**
          * 
          * @param focusObject 
          * @param measureString 
         */
        public addTrackerResultObject(focusObject: GeoObject3, measureString?: string): void;
        /**
          * 清除所有自定义地形计算图层
         */
        public clearGroundLayers(): void;
        /**
          * 清除所有选中对象
         */
        public clearPickedObjects(): void;
        /**
          * 清除屏幕跟踪结果
         */
        public clearTrackerResult(): void;
        /**
          * 删除并释放EarthViewer对象
         */
        public dispose(): void;
        /**
          * 
         */
        public drawContents(): void;
        /**
          * 枚举所有选中的对象数组
         */
        public enumPickedObjects(): Array<GeoObject3>;
        /**
          * 打背景影像和地形
          * @param imageProvider 瓦片数据提供对象。如不提供，缺省打开Bing或者天地图
          * @param terrainProvider 地形数据提供对象。如不提供，则地表保持基准高度
          * @returns Promise对象
         */
        public open(imageProvider?: IImageProvider, terrainProvider?: ITerrainProvider): Promise<EarthViewer>;
        /**
          * 使用屏幕坐标点选择一个对象
          * @param screenX 屏幕x坐标
          * @param screenY 屏幕y坐标
          * @param pickPosition 保存选中对象表面的坐标
          * @returns 选中对象或者null
         */
        public pick(screenX: number, screenY: number, pickPosition?: Vector3): GeoObject3;
        /**
          * 显式激发三维场景重画
         */
        public redraw(): void;
        /**
          * 设置当前操作类型，可以传入一个激发对象的唯一标示callerInfo
          * @param tool 操作类型
          * @param callerInfo 调用者的标示，可以使用字符串。这样在trackerCompleted回调函数参数里，可以区分不同的调用者
          */
        public setCurrentTool(tool: EarthToolType, callerInfo?: any): void;
        /**
          * 设置用户自定义地形计算接口
          * @param customTerrainCalculator 
         */
        public setCustomTerrainCalculator(customTerrainCalculator: ITerrainCalculator): void;
        /**
          * 设置当前高亮显示集合，将替换以前的集合
          * @param geoObjectOrCollection 
         */
        public setPickedObject(geoObjectOrCollection: GeoObject3 | Array<GeoObject3>): void;
        /**
          * 将EarthViewer当前显示的三维场景截屏到Image控件，以便保存为图像数据
          * @param earthViewer 
          * @returns 
         */
        public static CaptureScreenshot(earthViewer: EarthViewer): HTMLImageElement;
    }

    class EarthViewerOperationBase extends OperationBase {
        constructor(viewer: EarthViewer);
    }

    class TerrainTracker extends EarthViewerOperationBase {
        constructor(earthViewer: EarthViewer);
        public spaType: number;
        protected onLeftButtonDblClk(mouseMessage: OperMouseMessage): boolean;
        protected onLeftButtonDown(mouseMessage: OperMouseMessage): boolean;
        protected onMouseMove(mouseMessage: OperMouseMessage): boolean;
        protected onRightButtonDown(mouseMessage: OperMouseMessage): boolean;
        public clearPointArrays(): void;
        public enableTracker(isEnabled: boolean, callerInfo?: any): void;
        public getCircleParam(centerPt: Vector3, radius: RefValue<number>): boolean;
        public isAreaDataDirty(): boolean;
        public isEnabled(): boolean;
        public isTrackFinish(): boolean;
        public isTrackStarted(): boolean;
        public setIsAreaDataDirty(isAreaDataDirty: boolean): void;
        public setTerrainCalculator(terrainCalculator: ITerrainCalculator): void;
    }
}