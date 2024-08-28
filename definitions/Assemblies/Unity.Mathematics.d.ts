
declare namespace CS {
    // const __keep_incompatibility: unique symbol;
    // 
    // interface $Ref<T> {
    //     value: T
    // }
    // namespace System {
    //     interface Array$1<T> extends System.Array {
    //         get_Item(index: number):T;
    //         
    //         set_Item(index: number, value: T):void;
    //     }
    // }
    // interface $Task<T> {}
    namespace Unity.Mathematics {
        class bool2 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool2>
        {
            protected [__keep_incompatibility]: never;
            public x : boolean
            public y : boolean
            public get xxxx(): Unity.Mathematics.bool4;
            public get xxxy(): Unity.Mathematics.bool4;
            public get xxyx(): Unity.Mathematics.bool4;
            public get xxyy(): Unity.Mathematics.bool4;
            public get xyxx(): Unity.Mathematics.bool4;
            public get xyxy(): Unity.Mathematics.bool4;
            public get xyyx(): Unity.Mathematics.bool4;
            public get xyyy(): Unity.Mathematics.bool4;
            public get yxxx(): Unity.Mathematics.bool4;
            public get yxxy(): Unity.Mathematics.bool4;
            public get yxyx(): Unity.Mathematics.bool4;
            public get yxyy(): Unity.Mathematics.bool4;
            public get yyxx(): Unity.Mathematics.bool4;
            public get yyxy(): Unity.Mathematics.bool4;
            public get yyyx(): Unity.Mathematics.bool4;
            public get yyyy(): Unity.Mathematics.bool4;
            public get xxx(): Unity.Mathematics.bool3;
            public get xxy(): Unity.Mathematics.bool3;
            public get xyx(): Unity.Mathematics.bool3;
            public get xyy(): Unity.Mathematics.bool3;
            public get yxx(): Unity.Mathematics.bool3;
            public get yxy(): Unity.Mathematics.bool3;
            public get yyx(): Unity.Mathematics.bool3;
            public get yyy(): Unity.Mathematics.bool3;
            public get xx(): Unity.Mathematics.bool2;
            public get xy(): Unity.Mathematics.bool2;
            public set xy(value: Unity.Mathematics.bool2);
            public get yx(): Unity.Mathematics.bool2;
            public set yx(value: Unity.Mathematics.bool2);
            public get yy(): Unity.Mathematics.bool2;
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: Unity.Mathematics.bool2, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: Unity.Mathematics.bool2, $rhs: boolean) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.bool2, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.bool2, $rhs: boolean) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_LogicalNot ($val: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool2, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool2, $rhs: boolean) : Unity.Mathematics.bool2
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool2, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool2, $rhs: boolean) : Unity.Mathematics.bool2
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool2, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool2, $rhs: boolean) : Unity.Mathematics.bool2
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public get_Item ($index: number) : boolean
            public set_Item ($index: number, $value: boolean) : void
            public Equals ($rhs: Unity.Mathematics.bool2) : boolean
            public Equals ($o: any) : boolean
            public constructor ($x: boolean, $y: boolean)
            public constructor ($xy: Unity.Mathematics.bool2)
            public constructor ($v: boolean)
        }
        class bool4 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool4>
        {
            protected [__keep_incompatibility]: never;
            public x : boolean
            public y : boolean
            public z : boolean
            public w : boolean
            public get xxxx(): Unity.Mathematics.bool4;
            public get xxxy(): Unity.Mathematics.bool4;
            public get xxxz(): Unity.Mathematics.bool4;
            public get xxxw(): Unity.Mathematics.bool4;
            public get xxyx(): Unity.Mathematics.bool4;
            public get xxyy(): Unity.Mathematics.bool4;
            public get xxyz(): Unity.Mathematics.bool4;
            public get xxyw(): Unity.Mathematics.bool4;
            public get xxzx(): Unity.Mathematics.bool4;
            public get xxzy(): Unity.Mathematics.bool4;
            public get xxzz(): Unity.Mathematics.bool4;
            public get xxzw(): Unity.Mathematics.bool4;
            public get xxwx(): Unity.Mathematics.bool4;
            public get xxwy(): Unity.Mathematics.bool4;
            public get xxwz(): Unity.Mathematics.bool4;
            public get xxww(): Unity.Mathematics.bool4;
            public get xyxx(): Unity.Mathematics.bool4;
            public get xyxy(): Unity.Mathematics.bool4;
            public get xyxz(): Unity.Mathematics.bool4;
            public get xyxw(): Unity.Mathematics.bool4;
            public get xyyx(): Unity.Mathematics.bool4;
            public get xyyy(): Unity.Mathematics.bool4;
            public get xyyz(): Unity.Mathematics.bool4;
            public get xyyw(): Unity.Mathematics.bool4;
            public get xyzx(): Unity.Mathematics.bool4;
            public get xyzy(): Unity.Mathematics.bool4;
            public get xyzz(): Unity.Mathematics.bool4;
            public get xyzw(): Unity.Mathematics.bool4;
            public set xyzw(value: Unity.Mathematics.bool4);
            public get xywx(): Unity.Mathematics.bool4;
            public get xywy(): Unity.Mathematics.bool4;
            public get xywz(): Unity.Mathematics.bool4;
            public set xywz(value: Unity.Mathematics.bool4);
            public get xyww(): Unity.Mathematics.bool4;
            public get xzxx(): Unity.Mathematics.bool4;
            public get xzxy(): Unity.Mathematics.bool4;
            public get xzxz(): Unity.Mathematics.bool4;
            public get xzxw(): Unity.Mathematics.bool4;
            public get xzyx(): Unity.Mathematics.bool4;
            public get xzyy(): Unity.Mathematics.bool4;
            public get xzyz(): Unity.Mathematics.bool4;
            public get xzyw(): Unity.Mathematics.bool4;
            public set xzyw(value: Unity.Mathematics.bool4);
            public get xzzx(): Unity.Mathematics.bool4;
            public get xzzy(): Unity.Mathematics.bool4;
            public get xzzz(): Unity.Mathematics.bool4;
            public get xzzw(): Unity.Mathematics.bool4;
            public get xzwx(): Unity.Mathematics.bool4;
            public get xzwy(): Unity.Mathematics.bool4;
            public set xzwy(value: Unity.Mathematics.bool4);
            public get xzwz(): Unity.Mathematics.bool4;
            public get xzww(): Unity.Mathematics.bool4;
            public get xwxx(): Unity.Mathematics.bool4;
            public get xwxy(): Unity.Mathematics.bool4;
            public get xwxz(): Unity.Mathematics.bool4;
            public get xwxw(): Unity.Mathematics.bool4;
            public get xwyx(): Unity.Mathematics.bool4;
            public get xwyy(): Unity.Mathematics.bool4;
            public get xwyz(): Unity.Mathematics.bool4;
            public set xwyz(value: Unity.Mathematics.bool4);
            public get xwyw(): Unity.Mathematics.bool4;
            public get xwzx(): Unity.Mathematics.bool4;
            public get xwzy(): Unity.Mathematics.bool4;
            public set xwzy(value: Unity.Mathematics.bool4);
            public get xwzz(): Unity.Mathematics.bool4;
            public get xwzw(): Unity.Mathematics.bool4;
            public get xwwx(): Unity.Mathematics.bool4;
            public get xwwy(): Unity.Mathematics.bool4;
            public get xwwz(): Unity.Mathematics.bool4;
            public get xwww(): Unity.Mathematics.bool4;
            public get yxxx(): Unity.Mathematics.bool4;
            public get yxxy(): Unity.Mathematics.bool4;
            public get yxxz(): Unity.Mathematics.bool4;
            public get yxxw(): Unity.Mathematics.bool4;
            public get yxyx(): Unity.Mathematics.bool4;
            public get yxyy(): Unity.Mathematics.bool4;
            public get yxyz(): Unity.Mathematics.bool4;
            public get yxyw(): Unity.Mathematics.bool4;
            public get yxzx(): Unity.Mathematics.bool4;
            public get yxzy(): Unity.Mathematics.bool4;
            public get yxzz(): Unity.Mathematics.bool4;
            public get yxzw(): Unity.Mathematics.bool4;
            public set yxzw(value: Unity.Mathematics.bool4);
            public get yxwx(): Unity.Mathematics.bool4;
            public get yxwy(): Unity.Mathematics.bool4;
            public get yxwz(): Unity.Mathematics.bool4;
            public set yxwz(value: Unity.Mathematics.bool4);
            public get yxww(): Unity.Mathematics.bool4;
            public get yyxx(): Unity.Mathematics.bool4;
            public get yyxy(): Unity.Mathematics.bool4;
            public get yyxz(): Unity.Mathematics.bool4;
            public get yyxw(): Unity.Mathematics.bool4;
            public get yyyx(): Unity.Mathematics.bool4;
            public get yyyy(): Unity.Mathematics.bool4;
            public get yyyz(): Unity.Mathematics.bool4;
            public get yyyw(): Unity.Mathematics.bool4;
            public get yyzx(): Unity.Mathematics.bool4;
            public get yyzy(): Unity.Mathematics.bool4;
            public get yyzz(): Unity.Mathematics.bool4;
            public get yyzw(): Unity.Mathematics.bool4;
            public get yywx(): Unity.Mathematics.bool4;
            public get yywy(): Unity.Mathematics.bool4;
            public get yywz(): Unity.Mathematics.bool4;
            public get yyww(): Unity.Mathematics.bool4;
            public get yzxx(): Unity.Mathematics.bool4;
            public get yzxy(): Unity.Mathematics.bool4;
            public get yzxz(): Unity.Mathematics.bool4;
            public get yzxw(): Unity.Mathematics.bool4;
            public set yzxw(value: Unity.Mathematics.bool4);
            public get yzyx(): Unity.Mathematics.bool4;
            public get yzyy(): Unity.Mathematics.bool4;
            public get yzyz(): Unity.Mathematics.bool4;
            public get yzyw(): Unity.Mathematics.bool4;
            public get yzzx(): Unity.Mathematics.bool4;
            public get yzzy(): Unity.Mathematics.bool4;
            public get yzzz(): Unity.Mathematics.bool4;
            public get yzzw(): Unity.Mathematics.bool4;
            public get yzwx(): Unity.Mathematics.bool4;
            public set yzwx(value: Unity.Mathematics.bool4);
            public get yzwy(): Unity.Mathematics.bool4;
            public get yzwz(): Unity.Mathematics.bool4;
            public get yzww(): Unity.Mathematics.bool4;
            public get ywxx(): Unity.Mathematics.bool4;
            public get ywxy(): Unity.Mathematics.bool4;
            public get ywxz(): Unity.Mathematics.bool4;
            public set ywxz(value: Unity.Mathematics.bool4);
            public get ywxw(): Unity.Mathematics.bool4;
            public get ywyx(): Unity.Mathematics.bool4;
            public get ywyy(): Unity.Mathematics.bool4;
            public get ywyz(): Unity.Mathematics.bool4;
            public get ywyw(): Unity.Mathematics.bool4;
            public get ywzx(): Unity.Mathematics.bool4;
            public set ywzx(value: Unity.Mathematics.bool4);
            public get ywzy(): Unity.Mathematics.bool4;
            public get ywzz(): Unity.Mathematics.bool4;
            public get ywzw(): Unity.Mathematics.bool4;
            public get ywwx(): Unity.Mathematics.bool4;
            public get ywwy(): Unity.Mathematics.bool4;
            public get ywwz(): Unity.Mathematics.bool4;
            public get ywww(): Unity.Mathematics.bool4;
            public get zxxx(): Unity.Mathematics.bool4;
            public get zxxy(): Unity.Mathematics.bool4;
            public get zxxz(): Unity.Mathematics.bool4;
            public get zxxw(): Unity.Mathematics.bool4;
            public get zxyx(): Unity.Mathematics.bool4;
            public get zxyy(): Unity.Mathematics.bool4;
            public get zxyz(): Unity.Mathematics.bool4;
            public get zxyw(): Unity.Mathematics.bool4;
            public set zxyw(value: Unity.Mathematics.bool4);
            public get zxzx(): Unity.Mathematics.bool4;
            public get zxzy(): Unity.Mathematics.bool4;
            public get zxzz(): Unity.Mathematics.bool4;
            public get zxzw(): Unity.Mathematics.bool4;
            public get zxwx(): Unity.Mathematics.bool4;
            public get zxwy(): Unity.Mathematics.bool4;
            public set zxwy(value: Unity.Mathematics.bool4);
            public get zxwz(): Unity.Mathematics.bool4;
            public get zxww(): Unity.Mathematics.bool4;
            public get zyxx(): Unity.Mathematics.bool4;
            public get zyxy(): Unity.Mathematics.bool4;
            public get zyxz(): Unity.Mathematics.bool4;
            public get zyxw(): Unity.Mathematics.bool4;
            public set zyxw(value: Unity.Mathematics.bool4);
            public get zyyx(): Unity.Mathematics.bool4;
            public get zyyy(): Unity.Mathematics.bool4;
            public get zyyz(): Unity.Mathematics.bool4;
            public get zyyw(): Unity.Mathematics.bool4;
            public get zyzx(): Unity.Mathematics.bool4;
            public get zyzy(): Unity.Mathematics.bool4;
            public get zyzz(): Unity.Mathematics.bool4;
            public get zyzw(): Unity.Mathematics.bool4;
            public get zywx(): Unity.Mathematics.bool4;
            public set zywx(value: Unity.Mathematics.bool4);
            public get zywy(): Unity.Mathematics.bool4;
            public get zywz(): Unity.Mathematics.bool4;
            public get zyww(): Unity.Mathematics.bool4;
            public get zzxx(): Unity.Mathematics.bool4;
            public get zzxy(): Unity.Mathematics.bool4;
            public get zzxz(): Unity.Mathematics.bool4;
            public get zzxw(): Unity.Mathematics.bool4;
            public get zzyx(): Unity.Mathematics.bool4;
            public get zzyy(): Unity.Mathematics.bool4;
            public get zzyz(): Unity.Mathematics.bool4;
            public get zzyw(): Unity.Mathematics.bool4;
            public get zzzx(): Unity.Mathematics.bool4;
            public get zzzy(): Unity.Mathematics.bool4;
            public get zzzz(): Unity.Mathematics.bool4;
            public get zzzw(): Unity.Mathematics.bool4;
            public get zzwx(): Unity.Mathematics.bool4;
            public get zzwy(): Unity.Mathematics.bool4;
            public get zzwz(): Unity.Mathematics.bool4;
            public get zzww(): Unity.Mathematics.bool4;
            public get zwxx(): Unity.Mathematics.bool4;
            public get zwxy(): Unity.Mathematics.bool4;
            public set zwxy(value: Unity.Mathematics.bool4);
            public get zwxz(): Unity.Mathematics.bool4;
            public get zwxw(): Unity.Mathematics.bool4;
            public get zwyx(): Unity.Mathematics.bool4;
            public set zwyx(value: Unity.Mathematics.bool4);
            public get zwyy(): Unity.Mathematics.bool4;
            public get zwyz(): Unity.Mathematics.bool4;
            public get zwyw(): Unity.Mathematics.bool4;
            public get zwzx(): Unity.Mathematics.bool4;
            public get zwzy(): Unity.Mathematics.bool4;
            public get zwzz(): Unity.Mathematics.bool4;
            public get zwzw(): Unity.Mathematics.bool4;
            public get zwwx(): Unity.Mathematics.bool4;
            public get zwwy(): Unity.Mathematics.bool4;
            public get zwwz(): Unity.Mathematics.bool4;
            public get zwww(): Unity.Mathematics.bool4;
            public get wxxx(): Unity.Mathematics.bool4;
            public get wxxy(): Unity.Mathematics.bool4;
            public get wxxz(): Unity.Mathematics.bool4;
            public get wxxw(): Unity.Mathematics.bool4;
            public get wxyx(): Unity.Mathematics.bool4;
            public get wxyy(): Unity.Mathematics.bool4;
            public get wxyz(): Unity.Mathematics.bool4;
            public set wxyz(value: Unity.Mathematics.bool4);
            public get wxyw(): Unity.Mathematics.bool4;
            public get wxzx(): Unity.Mathematics.bool4;
            public get wxzy(): Unity.Mathematics.bool4;
            public set wxzy(value: Unity.Mathematics.bool4);
            public get wxzz(): Unity.Mathematics.bool4;
            public get wxzw(): Unity.Mathematics.bool4;
            public get wxwx(): Unity.Mathematics.bool4;
            public get wxwy(): Unity.Mathematics.bool4;
            public get wxwz(): Unity.Mathematics.bool4;
            public get wxww(): Unity.Mathematics.bool4;
            public get wyxx(): Unity.Mathematics.bool4;
            public get wyxy(): Unity.Mathematics.bool4;
            public get wyxz(): Unity.Mathematics.bool4;
            public set wyxz(value: Unity.Mathematics.bool4);
            public get wyxw(): Unity.Mathematics.bool4;
            public get wyyx(): Unity.Mathematics.bool4;
            public get wyyy(): Unity.Mathematics.bool4;
            public get wyyz(): Unity.Mathematics.bool4;
            public get wyyw(): Unity.Mathematics.bool4;
            public get wyzx(): Unity.Mathematics.bool4;
            public set wyzx(value: Unity.Mathematics.bool4);
            public get wyzy(): Unity.Mathematics.bool4;
            public get wyzz(): Unity.Mathematics.bool4;
            public get wyzw(): Unity.Mathematics.bool4;
            public get wywx(): Unity.Mathematics.bool4;
            public get wywy(): Unity.Mathematics.bool4;
            public get wywz(): Unity.Mathematics.bool4;
            public get wyww(): Unity.Mathematics.bool4;
            public get wzxx(): Unity.Mathematics.bool4;
            public get wzxy(): Unity.Mathematics.bool4;
            public set wzxy(value: Unity.Mathematics.bool4);
            public get wzxz(): Unity.Mathematics.bool4;
            public get wzxw(): Unity.Mathematics.bool4;
            public get wzyx(): Unity.Mathematics.bool4;
            public set wzyx(value: Unity.Mathematics.bool4);
            public get wzyy(): Unity.Mathematics.bool4;
            public get wzyz(): Unity.Mathematics.bool4;
            public get wzyw(): Unity.Mathematics.bool4;
            public get wzzx(): Unity.Mathematics.bool4;
            public get wzzy(): Unity.Mathematics.bool4;
            public get wzzz(): Unity.Mathematics.bool4;
            public get wzzw(): Unity.Mathematics.bool4;
            public get wzwx(): Unity.Mathematics.bool4;
            public get wzwy(): Unity.Mathematics.bool4;
            public get wzwz(): Unity.Mathematics.bool4;
            public get wzww(): Unity.Mathematics.bool4;
            public get wwxx(): Unity.Mathematics.bool4;
            public get wwxy(): Unity.Mathematics.bool4;
            public get wwxz(): Unity.Mathematics.bool4;
            public get wwxw(): Unity.Mathematics.bool4;
            public get wwyx(): Unity.Mathematics.bool4;
            public get wwyy(): Unity.Mathematics.bool4;
            public get wwyz(): Unity.Mathematics.bool4;
            public get wwyw(): Unity.Mathematics.bool4;
            public get wwzx(): Unity.Mathematics.bool4;
            public get wwzy(): Unity.Mathematics.bool4;
            public get wwzz(): Unity.Mathematics.bool4;
            public get wwzw(): Unity.Mathematics.bool4;
            public get wwwx(): Unity.Mathematics.bool4;
            public get wwwy(): Unity.Mathematics.bool4;
            public get wwwz(): Unity.Mathematics.bool4;
            public get wwww(): Unity.Mathematics.bool4;
            public get xxx(): Unity.Mathematics.bool3;
            public get xxy(): Unity.Mathematics.bool3;
            public get xxz(): Unity.Mathematics.bool3;
            public get xxw(): Unity.Mathematics.bool3;
            public get xyx(): Unity.Mathematics.bool3;
            public get xyy(): Unity.Mathematics.bool3;
            public get xyz(): Unity.Mathematics.bool3;
            public set xyz(value: Unity.Mathematics.bool3);
            public get xyw(): Unity.Mathematics.bool3;
            public set xyw(value: Unity.Mathematics.bool3);
            public get xzx(): Unity.Mathematics.bool3;
            public get xzy(): Unity.Mathematics.bool3;
            public set xzy(value: Unity.Mathematics.bool3);
            public get xzz(): Unity.Mathematics.bool3;
            public get xzw(): Unity.Mathematics.bool3;
            public set xzw(value: Unity.Mathematics.bool3);
            public get xwx(): Unity.Mathematics.bool3;
            public get xwy(): Unity.Mathematics.bool3;
            public set xwy(value: Unity.Mathematics.bool3);
            public get xwz(): Unity.Mathematics.bool3;
            public set xwz(value: Unity.Mathematics.bool3);
            public get xww(): Unity.Mathematics.bool3;
            public get yxx(): Unity.Mathematics.bool3;
            public get yxy(): Unity.Mathematics.bool3;
            public get yxz(): Unity.Mathematics.bool3;
            public set yxz(value: Unity.Mathematics.bool3);
            public get yxw(): Unity.Mathematics.bool3;
            public set yxw(value: Unity.Mathematics.bool3);
            public get yyx(): Unity.Mathematics.bool3;
            public get yyy(): Unity.Mathematics.bool3;
            public get yyz(): Unity.Mathematics.bool3;
            public get yyw(): Unity.Mathematics.bool3;
            public get yzx(): Unity.Mathematics.bool3;
            public set yzx(value: Unity.Mathematics.bool3);
            public get yzy(): Unity.Mathematics.bool3;
            public get yzz(): Unity.Mathematics.bool3;
            public get yzw(): Unity.Mathematics.bool3;
            public set yzw(value: Unity.Mathematics.bool3);
            public get ywx(): Unity.Mathematics.bool3;
            public set ywx(value: Unity.Mathematics.bool3);
            public get ywy(): Unity.Mathematics.bool3;
            public get ywz(): Unity.Mathematics.bool3;
            public set ywz(value: Unity.Mathematics.bool3);
            public get yww(): Unity.Mathematics.bool3;
            public get zxx(): Unity.Mathematics.bool3;
            public get zxy(): Unity.Mathematics.bool3;
            public set zxy(value: Unity.Mathematics.bool3);
            public get zxz(): Unity.Mathematics.bool3;
            public get zxw(): Unity.Mathematics.bool3;
            public set zxw(value: Unity.Mathematics.bool3);
            public get zyx(): Unity.Mathematics.bool3;
            public set zyx(value: Unity.Mathematics.bool3);
            public get zyy(): Unity.Mathematics.bool3;
            public get zyz(): Unity.Mathematics.bool3;
            public get zyw(): Unity.Mathematics.bool3;
            public set zyw(value: Unity.Mathematics.bool3);
            public get zzx(): Unity.Mathematics.bool3;
            public get zzy(): Unity.Mathematics.bool3;
            public get zzz(): Unity.Mathematics.bool3;
            public get zzw(): Unity.Mathematics.bool3;
            public get zwx(): Unity.Mathematics.bool3;
            public set zwx(value: Unity.Mathematics.bool3);
            public get zwy(): Unity.Mathematics.bool3;
            public set zwy(value: Unity.Mathematics.bool3);
            public get zwz(): Unity.Mathematics.bool3;
            public get zww(): Unity.Mathematics.bool3;
            public get wxx(): Unity.Mathematics.bool3;
            public get wxy(): Unity.Mathematics.bool3;
            public set wxy(value: Unity.Mathematics.bool3);
            public get wxz(): Unity.Mathematics.bool3;
            public set wxz(value: Unity.Mathematics.bool3);
            public get wxw(): Unity.Mathematics.bool3;
            public get wyx(): Unity.Mathematics.bool3;
            public set wyx(value: Unity.Mathematics.bool3);
            public get wyy(): Unity.Mathematics.bool3;
            public get wyz(): Unity.Mathematics.bool3;
            public set wyz(value: Unity.Mathematics.bool3);
            public get wyw(): Unity.Mathematics.bool3;
            public get wzx(): Unity.Mathematics.bool3;
            public set wzx(value: Unity.Mathematics.bool3);
            public get wzy(): Unity.Mathematics.bool3;
            public set wzy(value: Unity.Mathematics.bool3);
            public get wzz(): Unity.Mathematics.bool3;
            public get wzw(): Unity.Mathematics.bool3;
            public get wwx(): Unity.Mathematics.bool3;
            public get wwy(): Unity.Mathematics.bool3;
            public get wwz(): Unity.Mathematics.bool3;
            public get www(): Unity.Mathematics.bool3;
            public get xx(): Unity.Mathematics.bool2;
            public get xy(): Unity.Mathematics.bool2;
            public set xy(value: Unity.Mathematics.bool2);
            public get xz(): Unity.Mathematics.bool2;
            public set xz(value: Unity.Mathematics.bool2);
            public get xw(): Unity.Mathematics.bool2;
            public set xw(value: Unity.Mathematics.bool2);
            public get yx(): Unity.Mathematics.bool2;
            public set yx(value: Unity.Mathematics.bool2);
            public get yy(): Unity.Mathematics.bool2;
            public get yz(): Unity.Mathematics.bool2;
            public set yz(value: Unity.Mathematics.bool2);
            public get yw(): Unity.Mathematics.bool2;
            public set yw(value: Unity.Mathematics.bool2);
            public get zx(): Unity.Mathematics.bool2;
            public set zx(value: Unity.Mathematics.bool2);
            public get zy(): Unity.Mathematics.bool2;
            public set zy(value: Unity.Mathematics.bool2);
            public get zz(): Unity.Mathematics.bool2;
            public get zw(): Unity.Mathematics.bool2;
            public set zw(value: Unity.Mathematics.bool2);
            public get wx(): Unity.Mathematics.bool2;
            public set wx(value: Unity.Mathematics.bool2);
            public get wy(): Unity.Mathematics.bool2;
            public set wy(value: Unity.Mathematics.bool2);
            public get wz(): Unity.Mathematics.bool2;
            public set wz(value: Unity.Mathematics.bool2);
            public get ww(): Unity.Mathematics.bool2;
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: Unity.Mathematics.bool4, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: Unity.Mathematics.bool4, $rhs: boolean) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.bool4, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.bool4, $rhs: boolean) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_LogicalNot ($val: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool4, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool4, $rhs: boolean) : Unity.Mathematics.bool4
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool4, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool4, $rhs: boolean) : Unity.Mathematics.bool4
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool4, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool4, $rhs: boolean) : Unity.Mathematics.bool4
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public get_Item ($index: number) : boolean
            public set_Item ($index: number, $value: boolean) : void
            public Equals ($rhs: Unity.Mathematics.bool4) : boolean
            public Equals ($o: any) : boolean
            public constructor ($x: boolean, $y: boolean, $z: boolean, $w: boolean)
            public constructor ($x: boolean, $y: boolean, $zw: Unity.Mathematics.bool2)
            public constructor ($x: boolean, $yz: Unity.Mathematics.bool2, $w: boolean)
            public constructor ($x: boolean, $yzw: Unity.Mathematics.bool3)
            public constructor ($xy: Unity.Mathematics.bool2, $z: boolean, $w: boolean)
            public constructor ($xy: Unity.Mathematics.bool2, $zw: Unity.Mathematics.bool2)
            public constructor ($xyz: Unity.Mathematics.bool3, $w: boolean)
            public constructor ($xyzw: Unity.Mathematics.bool4)
            public constructor ($v: boolean)
        }
        class bool3 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool3>
        {
            protected [__keep_incompatibility]: never;
            public x : boolean
            public y : boolean
            public z : boolean
            public get xxxx(): Unity.Mathematics.bool4;
            public get xxxy(): Unity.Mathematics.bool4;
            public get xxxz(): Unity.Mathematics.bool4;
            public get xxyx(): Unity.Mathematics.bool4;
            public get xxyy(): Unity.Mathematics.bool4;
            public get xxyz(): Unity.Mathematics.bool4;
            public get xxzx(): Unity.Mathematics.bool4;
            public get xxzy(): Unity.Mathematics.bool4;
            public get xxzz(): Unity.Mathematics.bool4;
            public get xyxx(): Unity.Mathematics.bool4;
            public get xyxy(): Unity.Mathematics.bool4;
            public get xyxz(): Unity.Mathematics.bool4;
            public get xyyx(): Unity.Mathematics.bool4;
            public get xyyy(): Unity.Mathematics.bool4;
            public get xyyz(): Unity.Mathematics.bool4;
            public get xyzx(): Unity.Mathematics.bool4;
            public get xyzy(): Unity.Mathematics.bool4;
            public get xyzz(): Unity.Mathematics.bool4;
            public get xzxx(): Unity.Mathematics.bool4;
            public get xzxy(): Unity.Mathematics.bool4;
            public get xzxz(): Unity.Mathematics.bool4;
            public get xzyx(): Unity.Mathematics.bool4;
            public get xzyy(): Unity.Mathematics.bool4;
            public get xzyz(): Unity.Mathematics.bool4;
            public get xzzx(): Unity.Mathematics.bool4;
            public get xzzy(): Unity.Mathematics.bool4;
            public get xzzz(): Unity.Mathematics.bool4;
            public get yxxx(): Unity.Mathematics.bool4;
            public get yxxy(): Unity.Mathematics.bool4;
            public get yxxz(): Unity.Mathematics.bool4;
            public get yxyx(): Unity.Mathematics.bool4;
            public get yxyy(): Unity.Mathematics.bool4;
            public get yxyz(): Unity.Mathematics.bool4;
            public get yxzx(): Unity.Mathematics.bool4;
            public get yxzy(): Unity.Mathematics.bool4;
            public get yxzz(): Unity.Mathematics.bool4;
            public get yyxx(): Unity.Mathematics.bool4;
            public get yyxy(): Unity.Mathematics.bool4;
            public get yyxz(): Unity.Mathematics.bool4;
            public get yyyx(): Unity.Mathematics.bool4;
            public get yyyy(): Unity.Mathematics.bool4;
            public get yyyz(): Unity.Mathematics.bool4;
            public get yyzx(): Unity.Mathematics.bool4;
            public get yyzy(): Unity.Mathematics.bool4;
            public get yyzz(): Unity.Mathematics.bool4;
            public get yzxx(): Unity.Mathematics.bool4;
            public get yzxy(): Unity.Mathematics.bool4;
            public get yzxz(): Unity.Mathematics.bool4;
            public get yzyx(): Unity.Mathematics.bool4;
            public get yzyy(): Unity.Mathematics.bool4;
            public get yzyz(): Unity.Mathematics.bool4;
            public get yzzx(): Unity.Mathematics.bool4;
            public get yzzy(): Unity.Mathematics.bool4;
            public get yzzz(): Unity.Mathematics.bool4;
            public get zxxx(): Unity.Mathematics.bool4;
            public get zxxy(): Unity.Mathematics.bool4;
            public get zxxz(): Unity.Mathematics.bool4;
            public get zxyx(): Unity.Mathematics.bool4;
            public get zxyy(): Unity.Mathematics.bool4;
            public get zxyz(): Unity.Mathematics.bool4;
            public get zxzx(): Unity.Mathematics.bool4;
            public get zxzy(): Unity.Mathematics.bool4;
            public get zxzz(): Unity.Mathematics.bool4;
            public get zyxx(): Unity.Mathematics.bool4;
            public get zyxy(): Unity.Mathematics.bool4;
            public get zyxz(): Unity.Mathematics.bool4;
            public get zyyx(): Unity.Mathematics.bool4;
            public get zyyy(): Unity.Mathematics.bool4;
            public get zyyz(): Unity.Mathematics.bool4;
            public get zyzx(): Unity.Mathematics.bool4;
            public get zyzy(): Unity.Mathematics.bool4;
            public get zyzz(): Unity.Mathematics.bool4;
            public get zzxx(): Unity.Mathematics.bool4;
            public get zzxy(): Unity.Mathematics.bool4;
            public get zzxz(): Unity.Mathematics.bool4;
            public get zzyx(): Unity.Mathematics.bool4;
            public get zzyy(): Unity.Mathematics.bool4;
            public get zzyz(): Unity.Mathematics.bool4;
            public get zzzx(): Unity.Mathematics.bool4;
            public get zzzy(): Unity.Mathematics.bool4;
            public get zzzz(): Unity.Mathematics.bool4;
            public get xxx(): Unity.Mathematics.bool3;
            public get xxy(): Unity.Mathematics.bool3;
            public get xxz(): Unity.Mathematics.bool3;
            public get xyx(): Unity.Mathematics.bool3;
            public get xyy(): Unity.Mathematics.bool3;
            public get xyz(): Unity.Mathematics.bool3;
            public set xyz(value: Unity.Mathematics.bool3);
            public get xzx(): Unity.Mathematics.bool3;
            public get xzy(): Unity.Mathematics.bool3;
            public set xzy(value: Unity.Mathematics.bool3);
            public get xzz(): Unity.Mathematics.bool3;
            public get yxx(): Unity.Mathematics.bool3;
            public get yxy(): Unity.Mathematics.bool3;
            public get yxz(): Unity.Mathematics.bool3;
            public set yxz(value: Unity.Mathematics.bool3);
            public get yyx(): Unity.Mathematics.bool3;
            public get yyy(): Unity.Mathematics.bool3;
            public get yyz(): Unity.Mathematics.bool3;
            public get yzx(): Unity.Mathematics.bool3;
            public set yzx(value: Unity.Mathematics.bool3);
            public get yzy(): Unity.Mathematics.bool3;
            public get yzz(): Unity.Mathematics.bool3;
            public get zxx(): Unity.Mathematics.bool3;
            public get zxy(): Unity.Mathematics.bool3;
            public set zxy(value: Unity.Mathematics.bool3);
            public get zxz(): Unity.Mathematics.bool3;
            public get zyx(): Unity.Mathematics.bool3;
            public set zyx(value: Unity.Mathematics.bool3);
            public get zyy(): Unity.Mathematics.bool3;
            public get zyz(): Unity.Mathematics.bool3;
            public get zzx(): Unity.Mathematics.bool3;
            public get zzy(): Unity.Mathematics.bool3;
            public get zzz(): Unity.Mathematics.bool3;
            public get xx(): Unity.Mathematics.bool2;
            public get xy(): Unity.Mathematics.bool2;
            public set xy(value: Unity.Mathematics.bool2);
            public get xz(): Unity.Mathematics.bool2;
            public set xz(value: Unity.Mathematics.bool2);
            public get yx(): Unity.Mathematics.bool2;
            public set yx(value: Unity.Mathematics.bool2);
            public get yy(): Unity.Mathematics.bool2;
            public get yz(): Unity.Mathematics.bool2;
            public set yz(value: Unity.Mathematics.bool2);
            public get zx(): Unity.Mathematics.bool2;
            public set zx(value: Unity.Mathematics.bool2);
            public get zy(): Unity.Mathematics.bool2;
            public set zy(value: Unity.Mathematics.bool2);
            public get zz(): Unity.Mathematics.bool2;
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: Unity.Mathematics.bool3, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: Unity.Mathematics.bool3, $rhs: boolean) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.bool3, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.bool3, $rhs: boolean) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_LogicalNot ($val: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool3, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool3, $rhs: boolean) : Unity.Mathematics.bool3
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool3, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool3, $rhs: boolean) : Unity.Mathematics.bool3
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool3, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool3, $rhs: boolean) : Unity.Mathematics.bool3
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public get_Item ($index: number) : boolean
            public set_Item ($index: number, $value: boolean) : void
            public Equals ($rhs: Unity.Mathematics.bool3) : boolean
            public Equals ($o: any) : boolean
            public constructor ($x: boolean, $y: boolean, $z: boolean)
            public constructor ($x: boolean, $yz: Unity.Mathematics.bool2)
            public constructor ($xy: Unity.Mathematics.bool2, $z: boolean)
            public constructor ($xyz: Unity.Mathematics.bool3)
            public constructor ($v: boolean)
        }
        class math extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static E_DBL : number
            public static LOG2E_DBL : number
            public static LOG10E_DBL : number
            public static LN2_DBL : number
            public static LN10_DBL : number
            public static PI_DBL : number
            public static SQRT2_DBL : number
            public static EPSILON_DBL : number
            public static INFINITY_DBL : number
            public static NAN_DBL : number
            public static FLT_MIN_NORMAL : number
            public static DBL_MIN_NORMAL : number
            public static E : number
            public static LOG2E : number
            public static LOG10E : number
            public static LN2 : number
            public static LN10 : number
            public static PI : number
            public static SQRT2 : number
            public static EPSILON : number
            public static INFINITY : number
            public static NAN : number
            public static bool2 ($x: boolean, $y: boolean) : Unity.Mathematics.bool2
            public static bool2 ($xy: Unity.Mathematics.bool2) : Unity.Mathematics.bool2
            public static bool2 ($v: boolean) : Unity.Mathematics.bool2
            public static hash ($v: Unity.Mathematics.bool2) : number
            public static hashwide ($v: Unity.Mathematics.bool2) : Unity.Mathematics.uint2
            public static shuffle ($left: Unity.Mathematics.bool2, $right: Unity.Mathematics.bool2, $x: Unity.Mathematics.math.ShuffleComponent) : boolean
            public static shuffle ($left: Unity.Mathematics.bool2, $right: Unity.Mathematics.bool2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.bool2
            public static shuffle ($left: Unity.Mathematics.bool2, $right: Unity.Mathematics.bool2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.bool3
            public static shuffle ($left: Unity.Mathematics.bool2, $right: Unity.Mathematics.bool2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.bool4
            public static bool2x2 ($c0: Unity.Mathematics.bool2, $c1: Unity.Mathematics.bool2) : Unity.Mathematics.bool2x2
            public static bool2x2 ($m00: boolean, $m01: boolean, $m10: boolean, $m11: boolean) : Unity.Mathematics.bool2x2
            public static bool2x2 ($v: boolean) : Unity.Mathematics.bool2x2
            public static transpose ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static hash ($v: Unity.Mathematics.bool2x2) : number
            public static hashwide ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.uint2
            public static bool2x3 ($c0: Unity.Mathematics.bool2, $c1: Unity.Mathematics.bool2, $c2: Unity.Mathematics.bool2) : Unity.Mathematics.bool2x3
            public static bool2x3 ($m00: boolean, $m01: boolean, $m02: boolean, $m10: boolean, $m11: boolean, $m12: boolean) : Unity.Mathematics.bool2x3
            public static bool2x3 ($v: boolean) : Unity.Mathematics.bool2x3
            public static transpose ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool3x2
            public static hash ($v: Unity.Mathematics.bool2x3) : number
            public static hashwide ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.uint2
            public static bool2x4 ($c0: Unity.Mathematics.bool2, $c1: Unity.Mathematics.bool2, $c2: Unity.Mathematics.bool2, $c3: Unity.Mathematics.bool2) : Unity.Mathematics.bool2x4
            public static bool2x4 ($m00: boolean, $m01: boolean, $m02: boolean, $m03: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m13: boolean) : Unity.Mathematics.bool2x4
            public static bool2x4 ($v: boolean) : Unity.Mathematics.bool2x4
            public static transpose ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool4x2
            public static hash ($v: Unity.Mathematics.bool2x4) : number
            public static hashwide ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.uint2
            public static bool3 ($x: boolean, $y: boolean, $z: boolean) : Unity.Mathematics.bool3
            public static bool3 ($x: boolean, $yz: Unity.Mathematics.bool2) : Unity.Mathematics.bool3
            public static bool3 ($xy: Unity.Mathematics.bool2, $z: boolean) : Unity.Mathematics.bool3
            public static bool3 ($xyz: Unity.Mathematics.bool3) : Unity.Mathematics.bool3
            public static bool3 ($v: boolean) : Unity.Mathematics.bool3
            public static hash ($v: Unity.Mathematics.bool3) : number
            public static hashwide ($v: Unity.Mathematics.bool3) : Unity.Mathematics.uint3
            public static shuffle ($left: Unity.Mathematics.bool3, $right: Unity.Mathematics.bool3, $x: Unity.Mathematics.math.ShuffleComponent) : boolean
            public static shuffle ($left: Unity.Mathematics.bool3, $right: Unity.Mathematics.bool3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.bool2
            public static shuffle ($left: Unity.Mathematics.bool3, $right: Unity.Mathematics.bool3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.bool3
            public static shuffle ($left: Unity.Mathematics.bool3, $right: Unity.Mathematics.bool3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.bool4
            public static bool3x2 ($c0: Unity.Mathematics.bool3, $c1: Unity.Mathematics.bool3) : Unity.Mathematics.bool3x2
            public static bool3x2 ($m00: boolean, $m01: boolean, $m10: boolean, $m11: boolean, $m20: boolean, $m21: boolean) : Unity.Mathematics.bool3x2
            public static bool3x2 ($v: boolean) : Unity.Mathematics.bool3x2
            public static transpose ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool2x3
            public static hash ($v: Unity.Mathematics.bool3x2) : number
            public static hashwide ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.uint3
            public static bool3x3 ($c0: Unity.Mathematics.bool3, $c1: Unity.Mathematics.bool3, $c2: Unity.Mathematics.bool3) : Unity.Mathematics.bool3x3
            public static bool3x3 ($m00: boolean, $m01: boolean, $m02: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m20: boolean, $m21: boolean, $m22: boolean) : Unity.Mathematics.bool3x3
            public static bool3x3 ($v: boolean) : Unity.Mathematics.bool3x3
            public static transpose ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static hash ($v: Unity.Mathematics.bool3x3) : number
            public static hashwide ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.uint3
            public static bool3x4 ($c0: Unity.Mathematics.bool3, $c1: Unity.Mathematics.bool3, $c2: Unity.Mathematics.bool3, $c3: Unity.Mathematics.bool3) : Unity.Mathematics.bool3x4
            public static bool3x4 ($m00: boolean, $m01: boolean, $m02: boolean, $m03: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m13: boolean, $m20: boolean, $m21: boolean, $m22: boolean, $m23: boolean) : Unity.Mathematics.bool3x4
            public static bool3x4 ($v: boolean) : Unity.Mathematics.bool3x4
            public static transpose ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool4x3
            public static hash ($v: Unity.Mathematics.bool3x4) : number
            public static hashwide ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.uint3
            public static bool4 ($x: boolean, $y: boolean, $z: boolean, $w: boolean) : Unity.Mathematics.bool4
            public static bool4 ($x: boolean, $y: boolean, $zw: Unity.Mathematics.bool2) : Unity.Mathematics.bool4
            public static bool4 ($x: boolean, $yz: Unity.Mathematics.bool2, $w: boolean) : Unity.Mathematics.bool4
            public static bool4 ($x: boolean, $yzw: Unity.Mathematics.bool3) : Unity.Mathematics.bool4
            public static bool4 ($xy: Unity.Mathematics.bool2, $z: boolean, $w: boolean) : Unity.Mathematics.bool4
            public static bool4 ($xy: Unity.Mathematics.bool2, $zw: Unity.Mathematics.bool2) : Unity.Mathematics.bool4
            public static bool4 ($xyz: Unity.Mathematics.bool3, $w: boolean) : Unity.Mathematics.bool4
            public static bool4 ($xyzw: Unity.Mathematics.bool4) : Unity.Mathematics.bool4
            public static bool4 ($v: boolean) : Unity.Mathematics.bool4
            public static hash ($v: Unity.Mathematics.bool4) : number
            public static hashwide ($v: Unity.Mathematics.bool4) : Unity.Mathematics.uint4
            public static shuffle ($left: Unity.Mathematics.bool4, $right: Unity.Mathematics.bool4, $x: Unity.Mathematics.math.ShuffleComponent) : boolean
            public static shuffle ($left: Unity.Mathematics.bool4, $right: Unity.Mathematics.bool4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.bool2
            public static shuffle ($left: Unity.Mathematics.bool4, $right: Unity.Mathematics.bool4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.bool3
            public static shuffle ($left: Unity.Mathematics.bool4, $right: Unity.Mathematics.bool4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.bool4
            public static bool4x2 ($c0: Unity.Mathematics.bool4, $c1: Unity.Mathematics.bool4) : Unity.Mathematics.bool4x2
            public static bool4x2 ($m00: boolean, $m01: boolean, $m10: boolean, $m11: boolean, $m20: boolean, $m21: boolean, $m30: boolean, $m31: boolean) : Unity.Mathematics.bool4x2
            public static bool4x2 ($v: boolean) : Unity.Mathematics.bool4x2
            public static transpose ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool2x4
            public static hash ($v: Unity.Mathematics.bool4x2) : number
            public static hashwide ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.uint4
            public static bool4x3 ($c0: Unity.Mathematics.bool4, $c1: Unity.Mathematics.bool4, $c2: Unity.Mathematics.bool4) : Unity.Mathematics.bool4x3
            public static bool4x3 ($m00: boolean, $m01: boolean, $m02: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m20: boolean, $m21: boolean, $m22: boolean, $m30: boolean, $m31: boolean, $m32: boolean) : Unity.Mathematics.bool4x3
            public static bool4x3 ($v: boolean) : Unity.Mathematics.bool4x3
            public static transpose ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool3x4
            public static hash ($v: Unity.Mathematics.bool4x3) : number
            public static hashwide ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.uint4
            public static bool4x4 ($c0: Unity.Mathematics.bool4, $c1: Unity.Mathematics.bool4, $c2: Unity.Mathematics.bool4, $c3: Unity.Mathematics.bool4) : Unity.Mathematics.bool4x4
            public static bool4x4 ($m00: boolean, $m01: boolean, $m02: boolean, $m03: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m13: boolean, $m20: boolean, $m21: boolean, $m22: boolean, $m23: boolean, $m30: boolean, $m31: boolean, $m32: boolean, $m33: boolean) : Unity.Mathematics.bool4x4
            public static bool4x4 ($v: boolean) : Unity.Mathematics.bool4x4
            public static transpose ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static hash ($v: Unity.Mathematics.bool4x4) : number
            public static hashwide ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.uint4
            public static double2 ($x: number, $y: number) : Unity.Mathematics.double2
            public static double2 ($xy: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static double2 ($v: number) : Unity.Mathematics.double2
            public static double2 ($v: boolean) : Unity.Mathematics.double2
            public static double2 ($v: Unity.Mathematics.bool2) : Unity.Mathematics.double2
            public static double2 ($v: Unity.Mathematics.int2) : Unity.Mathematics.double2
            public static double2 ($v: Unity.Mathematics.uint2) : Unity.Mathematics.double2
            public static double2 ($v: Unity.Mathematics.half) : Unity.Mathematics.double2
            public static double2 ($v: Unity.Mathematics.half2) : Unity.Mathematics.double2
            public static double2 ($v: Unity.Mathematics.float2) : Unity.Mathematics.double2
            public static hash ($v: Unity.Mathematics.double2) : number
            public static hashwide ($v: Unity.Mathematics.double2) : Unity.Mathematics.uint2
            public static shuffle ($left: Unity.Mathematics.double2, $right: Unity.Mathematics.double2, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.double2, $right: Unity.Mathematics.double2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.double2
            public static shuffle ($left: Unity.Mathematics.double2, $right: Unity.Mathematics.double2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.double3
            public static shuffle ($left: Unity.Mathematics.double2, $right: Unity.Mathematics.double2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.double4
            public static double2x2 ($c0: Unity.Mathematics.double2, $c1: Unity.Mathematics.double2) : Unity.Mathematics.double2x2
            public static double2x2 ($m00: number, $m01: number, $m10: number, $m11: number) : Unity.Mathematics.double2x2
            public static double2x2 ($v: number) : Unity.Mathematics.double2x2
            public static double2x2 ($v: boolean) : Unity.Mathematics.double2x2
            public static double2x2 ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.double2x2
            public static double2x2 ($v: Unity.Mathematics.int2x2) : Unity.Mathematics.double2x2
            public static double2x2 ($v: Unity.Mathematics.uint2x2) : Unity.Mathematics.double2x2
            public static double2x2 ($v: Unity.Mathematics.float2x2) : Unity.Mathematics.double2x2
            public static transpose ($v: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static inverse ($m: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static determinant ($m: Unity.Mathematics.double2x2) : number
            public static hash ($v: Unity.Mathematics.double2x2) : number
            public static hashwide ($v: Unity.Mathematics.double2x2) : Unity.Mathematics.uint2
            public static double2x3 ($c0: Unity.Mathematics.double2, $c1: Unity.Mathematics.double2, $c2: Unity.Mathematics.double2) : Unity.Mathematics.double2x3
            public static double2x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number) : Unity.Mathematics.double2x3
            public static double2x3 ($v: number) : Unity.Mathematics.double2x3
            public static double2x3 ($v: boolean) : Unity.Mathematics.double2x3
            public static double2x3 ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.double2x3
            public static double2x3 ($v: Unity.Mathematics.int2x3) : Unity.Mathematics.double2x3
            public static double2x3 ($v: Unity.Mathematics.uint2x3) : Unity.Mathematics.double2x3
            public static double2x3 ($v: Unity.Mathematics.float2x3) : Unity.Mathematics.double2x3
            public static transpose ($v: Unity.Mathematics.double2x3) : Unity.Mathematics.double3x2
            public static hash ($v: Unity.Mathematics.double2x3) : number
            public static hashwide ($v: Unity.Mathematics.double2x3) : Unity.Mathematics.uint2
            public static double2x4 ($c0: Unity.Mathematics.double2, $c1: Unity.Mathematics.double2, $c2: Unity.Mathematics.double2, $c3: Unity.Mathematics.double2) : Unity.Mathematics.double2x4
            public static double2x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number) : Unity.Mathematics.double2x4
            public static double2x4 ($v: number) : Unity.Mathematics.double2x4
            public static double2x4 ($v: boolean) : Unity.Mathematics.double2x4
            public static double2x4 ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.double2x4
            public static double2x4 ($v: Unity.Mathematics.int2x4) : Unity.Mathematics.double2x4
            public static double2x4 ($v: Unity.Mathematics.uint2x4) : Unity.Mathematics.double2x4
            public static double2x4 ($v: Unity.Mathematics.float2x4) : Unity.Mathematics.double2x4
            public static transpose ($v: Unity.Mathematics.double2x4) : Unity.Mathematics.double4x2
            public static hash ($v: Unity.Mathematics.double2x4) : number
            public static hashwide ($v: Unity.Mathematics.double2x4) : Unity.Mathematics.uint2
            public static double3 ($x: number, $y: number, $z: number) : Unity.Mathematics.double3
            public static double3 ($x: number, $yz: Unity.Mathematics.double2) : Unity.Mathematics.double3
            public static double3 ($xy: Unity.Mathematics.double2, $z: number) : Unity.Mathematics.double3
            public static double3 ($xyz: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static double3 ($v: number) : Unity.Mathematics.double3
            public static double3 ($v: boolean) : Unity.Mathematics.double3
            public static double3 ($v: Unity.Mathematics.bool3) : Unity.Mathematics.double3
            public static double3 ($v: Unity.Mathematics.int3) : Unity.Mathematics.double3
            public static double3 ($v: Unity.Mathematics.uint3) : Unity.Mathematics.double3
            public static double3 ($v: Unity.Mathematics.half) : Unity.Mathematics.double3
            public static double3 ($v: Unity.Mathematics.half3) : Unity.Mathematics.double3
            public static double3 ($v: Unity.Mathematics.float3) : Unity.Mathematics.double3
            public static hash ($v: Unity.Mathematics.double3) : number
            public static hashwide ($v: Unity.Mathematics.double3) : Unity.Mathematics.uint3
            public static shuffle ($left: Unity.Mathematics.double3, $right: Unity.Mathematics.double3, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.double3, $right: Unity.Mathematics.double3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.double2
            public static shuffle ($left: Unity.Mathematics.double3, $right: Unity.Mathematics.double3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.double3
            public static shuffle ($left: Unity.Mathematics.double3, $right: Unity.Mathematics.double3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.double4
            public static double3x2 ($c0: Unity.Mathematics.double3, $c1: Unity.Mathematics.double3) : Unity.Mathematics.double3x2
            public static double3x2 ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number) : Unity.Mathematics.double3x2
            public static double3x2 ($v: number) : Unity.Mathematics.double3x2
            public static double3x2 ($v: boolean) : Unity.Mathematics.double3x2
            public static double3x2 ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.double3x2
            public static double3x2 ($v: Unity.Mathematics.int3x2) : Unity.Mathematics.double3x2
            public static double3x2 ($v: Unity.Mathematics.uint3x2) : Unity.Mathematics.double3x2
            public static double3x2 ($v: Unity.Mathematics.float3x2) : Unity.Mathematics.double3x2
            public static transpose ($v: Unity.Mathematics.double3x2) : Unity.Mathematics.double2x3
            public static hash ($v: Unity.Mathematics.double3x2) : number
            public static hashwide ($v: Unity.Mathematics.double3x2) : Unity.Mathematics.uint3
            public static double3x3 ($c0: Unity.Mathematics.double3, $c1: Unity.Mathematics.double3, $c2: Unity.Mathematics.double3) : Unity.Mathematics.double3x3
            public static double3x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number) : Unity.Mathematics.double3x3
            public static double3x3 ($v: number) : Unity.Mathematics.double3x3
            public static double3x3 ($v: boolean) : Unity.Mathematics.double3x3
            public static double3x3 ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.double3x3
            public static double3x3 ($v: Unity.Mathematics.int3x3) : Unity.Mathematics.double3x3
            public static double3x3 ($v: Unity.Mathematics.uint3x3) : Unity.Mathematics.double3x3
            public static double3x3 ($v: Unity.Mathematics.float3x3) : Unity.Mathematics.double3x3
            public static transpose ($v: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static inverse ($m: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static determinant ($m: Unity.Mathematics.double3x3) : number
            public static hash ($v: Unity.Mathematics.double3x3) : number
            public static hashwide ($v: Unity.Mathematics.double3x3) : Unity.Mathematics.uint3
            public static double3x4 ($c0: Unity.Mathematics.double3, $c1: Unity.Mathematics.double3, $c2: Unity.Mathematics.double3, $c3: Unity.Mathematics.double3) : Unity.Mathematics.double3x4
            public static double3x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number) : Unity.Mathematics.double3x4
            public static double3x4 ($v: number) : Unity.Mathematics.double3x4
            public static double3x4 ($v: boolean) : Unity.Mathematics.double3x4
            public static double3x4 ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.double3x4
            public static double3x4 ($v: Unity.Mathematics.int3x4) : Unity.Mathematics.double3x4
            public static double3x4 ($v: Unity.Mathematics.uint3x4) : Unity.Mathematics.double3x4
            public static double3x4 ($v: Unity.Mathematics.float3x4) : Unity.Mathematics.double3x4
            public static transpose ($v: Unity.Mathematics.double3x4) : Unity.Mathematics.double4x3
            public static fastinverse ($m: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static hash ($v: Unity.Mathematics.double3x4) : number
            public static hashwide ($v: Unity.Mathematics.double3x4) : Unity.Mathematics.uint3
            public static double4 ($x: number, $y: number, $z: number, $w: number) : Unity.Mathematics.double4
            public static double4 ($x: number, $y: number, $zw: Unity.Mathematics.double2) : Unity.Mathematics.double4
            public static double4 ($x: number, $yz: Unity.Mathematics.double2, $w: number) : Unity.Mathematics.double4
            public static double4 ($x: number, $yzw: Unity.Mathematics.double3) : Unity.Mathematics.double4
            public static double4 ($xy: Unity.Mathematics.double2, $z: number, $w: number) : Unity.Mathematics.double4
            public static double4 ($xy: Unity.Mathematics.double2, $zw: Unity.Mathematics.double2) : Unity.Mathematics.double4
            public static double4 ($xyz: Unity.Mathematics.double3, $w: number) : Unity.Mathematics.double4
            public static double4 ($xyzw: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static double4 ($v: number) : Unity.Mathematics.double4
            public static double4 ($v: boolean) : Unity.Mathematics.double4
            public static double4 ($v: Unity.Mathematics.bool4) : Unity.Mathematics.double4
            public static double4 ($v: Unity.Mathematics.int4) : Unity.Mathematics.double4
            public static double4 ($v: Unity.Mathematics.uint4) : Unity.Mathematics.double4
            public static double4 ($v: Unity.Mathematics.half) : Unity.Mathematics.double4
            public static double4 ($v: Unity.Mathematics.half4) : Unity.Mathematics.double4
            public static double4 ($v: Unity.Mathematics.float4) : Unity.Mathematics.double4
            public static hash ($v: Unity.Mathematics.double4) : number
            public static hashwide ($v: Unity.Mathematics.double4) : Unity.Mathematics.uint4
            public static shuffle ($left: Unity.Mathematics.double4, $right: Unity.Mathematics.double4, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.double4, $right: Unity.Mathematics.double4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.double2
            public static shuffle ($left: Unity.Mathematics.double4, $right: Unity.Mathematics.double4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.double3
            public static shuffle ($left: Unity.Mathematics.double4, $right: Unity.Mathematics.double4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.double4
            public static double4x2 ($c0: Unity.Mathematics.double4, $c1: Unity.Mathematics.double4) : Unity.Mathematics.double4x2
            public static double4x2 ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number, $m30: number, $m31: number) : Unity.Mathematics.double4x2
            public static double4x2 ($v: number) : Unity.Mathematics.double4x2
            public static double4x2 ($v: boolean) : Unity.Mathematics.double4x2
            public static double4x2 ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.double4x2
            public static double4x2 ($v: Unity.Mathematics.int4x2) : Unity.Mathematics.double4x2
            public static double4x2 ($v: Unity.Mathematics.uint4x2) : Unity.Mathematics.double4x2
            public static double4x2 ($v: Unity.Mathematics.float4x2) : Unity.Mathematics.double4x2
            public static transpose ($v: Unity.Mathematics.double4x2) : Unity.Mathematics.double2x4
            public static hash ($v: Unity.Mathematics.double4x2) : number
            public static hashwide ($v: Unity.Mathematics.double4x2) : Unity.Mathematics.uint4
            public static double4x3 ($c0: Unity.Mathematics.double4, $c1: Unity.Mathematics.double4, $c2: Unity.Mathematics.double4) : Unity.Mathematics.double4x3
            public static double4x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number, $m30: number, $m31: number, $m32: number) : Unity.Mathematics.double4x3
            public static double4x3 ($v: number) : Unity.Mathematics.double4x3
            public static double4x3 ($v: boolean) : Unity.Mathematics.double4x3
            public static double4x3 ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.double4x3
            public static double4x3 ($v: Unity.Mathematics.int4x3) : Unity.Mathematics.double4x3
            public static double4x3 ($v: Unity.Mathematics.uint4x3) : Unity.Mathematics.double4x3
            public static double4x3 ($v: Unity.Mathematics.float4x3) : Unity.Mathematics.double4x3
            public static transpose ($v: Unity.Mathematics.double4x3) : Unity.Mathematics.double3x4
            public static hash ($v: Unity.Mathematics.double4x3) : number
            public static hashwide ($v: Unity.Mathematics.double4x3) : Unity.Mathematics.uint4
            public static double4x4 ($c0: Unity.Mathematics.double4, $c1: Unity.Mathematics.double4, $c2: Unity.Mathematics.double4, $c3: Unity.Mathematics.double4) : Unity.Mathematics.double4x4
            public static double4x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number, $m30: number, $m31: number, $m32: number, $m33: number) : Unity.Mathematics.double4x4
            public static double4x4 ($v: number) : Unity.Mathematics.double4x4
            public static double4x4 ($v: boolean) : Unity.Mathematics.double4x4
            public static double4x4 ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.double4x4
            public static double4x4 ($v: Unity.Mathematics.int4x4) : Unity.Mathematics.double4x4
            public static double4x4 ($v: Unity.Mathematics.uint4x4) : Unity.Mathematics.double4x4
            public static double4x4 ($v: Unity.Mathematics.float4x4) : Unity.Mathematics.double4x4
            public static rotate ($a: Unity.Mathematics.double4x4, $b: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static transform ($a: Unity.Mathematics.double4x4, $b: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static transpose ($v: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static inverse ($m: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static fastinverse ($m: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static determinant ($m: Unity.Mathematics.double4x4) : number
            public static hash ($v: Unity.Mathematics.double4x4) : number
            public static hashwide ($v: Unity.Mathematics.double4x4) : Unity.Mathematics.uint4
            public static float2 ($x: number, $y: number) : Unity.Mathematics.float2
            public static float2 ($xy: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static float2 ($v: number) : Unity.Mathematics.float2
            public static float2 ($v: boolean) : Unity.Mathematics.float2
            public static float2 ($v: Unity.Mathematics.bool2) : Unity.Mathematics.float2
            public static float2 ($v: Unity.Mathematics.int2) : Unity.Mathematics.float2
            public static float2 ($v: Unity.Mathematics.uint2) : Unity.Mathematics.float2
            public static float2 ($v: Unity.Mathematics.half) : Unity.Mathematics.float2
            public static float2 ($v: Unity.Mathematics.half2) : Unity.Mathematics.float2
            public static float2 ($v: Unity.Mathematics.double2) : Unity.Mathematics.float2
            public static hash ($v: Unity.Mathematics.float2) : number
            public static hashwide ($v: Unity.Mathematics.float2) : Unity.Mathematics.uint2
            public static shuffle ($left: Unity.Mathematics.float2, $right: Unity.Mathematics.float2, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.float2, $right: Unity.Mathematics.float2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.float2
            public static shuffle ($left: Unity.Mathematics.float2, $right: Unity.Mathematics.float2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.float3
            public static shuffle ($left: Unity.Mathematics.float2, $right: Unity.Mathematics.float2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.float4
            public static float2x2 ($c0: Unity.Mathematics.float2, $c1: Unity.Mathematics.float2) : Unity.Mathematics.float2x2
            public static float2x2 ($m00: number, $m01: number, $m10: number, $m11: number) : Unity.Mathematics.float2x2
            public static float2x2 ($v: number) : Unity.Mathematics.float2x2
            public static float2x2 ($v: boolean) : Unity.Mathematics.float2x2
            public static float2x2 ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.float2x2
            public static float2x2 ($v: Unity.Mathematics.int2x2) : Unity.Mathematics.float2x2
            public static float2x2 ($v: Unity.Mathematics.uint2x2) : Unity.Mathematics.float2x2
            public static float2x2 ($v: Unity.Mathematics.double2x2) : Unity.Mathematics.float2x2
            public static transpose ($v: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static inverse ($m: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static determinant ($m: Unity.Mathematics.float2x2) : number
            public static hash ($v: Unity.Mathematics.float2x2) : number
            public static hashwide ($v: Unity.Mathematics.float2x2) : Unity.Mathematics.uint2
            public static float2x3 ($c0: Unity.Mathematics.float2, $c1: Unity.Mathematics.float2, $c2: Unity.Mathematics.float2) : Unity.Mathematics.float2x3
            public static float2x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number) : Unity.Mathematics.float2x3
            public static float2x3 ($v: number) : Unity.Mathematics.float2x3
            public static float2x3 ($v: boolean) : Unity.Mathematics.float2x3
            public static float2x3 ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.float2x3
            public static float2x3 ($v: Unity.Mathematics.int2x3) : Unity.Mathematics.float2x3
            public static float2x3 ($v: Unity.Mathematics.uint2x3) : Unity.Mathematics.float2x3
            public static float2x3 ($v: Unity.Mathematics.double2x3) : Unity.Mathematics.float2x3
            public static transpose ($v: Unity.Mathematics.float2x3) : Unity.Mathematics.float3x2
            public static hash ($v: Unity.Mathematics.float2x3) : number
            public static hashwide ($v: Unity.Mathematics.float2x3) : Unity.Mathematics.uint2
            public static float2x4 ($c0: Unity.Mathematics.float2, $c1: Unity.Mathematics.float2, $c2: Unity.Mathematics.float2, $c3: Unity.Mathematics.float2) : Unity.Mathematics.float2x4
            public static float2x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number) : Unity.Mathematics.float2x4
            public static float2x4 ($v: number) : Unity.Mathematics.float2x4
            public static float2x4 ($v: boolean) : Unity.Mathematics.float2x4
            public static float2x4 ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.float2x4
            public static float2x4 ($v: Unity.Mathematics.int2x4) : Unity.Mathematics.float2x4
            public static float2x4 ($v: Unity.Mathematics.uint2x4) : Unity.Mathematics.float2x4
            public static float2x4 ($v: Unity.Mathematics.double2x4) : Unity.Mathematics.float2x4
            public static transpose ($v: Unity.Mathematics.float2x4) : Unity.Mathematics.float4x2
            public static hash ($v: Unity.Mathematics.float2x4) : number
            public static hashwide ($v: Unity.Mathematics.float2x4) : Unity.Mathematics.uint2
            public static float3 ($x: number, $y: number, $z: number) : Unity.Mathematics.float3
            public static float3 ($x: number, $yz: Unity.Mathematics.float2) : Unity.Mathematics.float3
            public static float3 ($xy: Unity.Mathematics.float2, $z: number) : Unity.Mathematics.float3
            public static float3 ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static float3 ($v: number) : Unity.Mathematics.float3
            public static float3 ($v: boolean) : Unity.Mathematics.float3
            public static float3 ($v: Unity.Mathematics.bool3) : Unity.Mathematics.float3
            public static float3 ($v: Unity.Mathematics.int3) : Unity.Mathematics.float3
            public static float3 ($v: Unity.Mathematics.uint3) : Unity.Mathematics.float3
            public static float3 ($v: Unity.Mathematics.half) : Unity.Mathematics.float3
            public static float3 ($v: Unity.Mathematics.half3) : Unity.Mathematics.float3
            public static float3 ($v: Unity.Mathematics.double3) : Unity.Mathematics.float3
            public static hash ($v: Unity.Mathematics.float3) : number
            public static hashwide ($v: Unity.Mathematics.float3) : Unity.Mathematics.uint3
            public static shuffle ($left: Unity.Mathematics.float3, $right: Unity.Mathematics.float3, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.float3, $right: Unity.Mathematics.float3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.float2
            public static shuffle ($left: Unity.Mathematics.float3, $right: Unity.Mathematics.float3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.float3
            public static shuffle ($left: Unity.Mathematics.float3, $right: Unity.Mathematics.float3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.float4
            public static float3x2 ($c0: Unity.Mathematics.float3, $c1: Unity.Mathematics.float3) : Unity.Mathematics.float3x2
            public static float3x2 ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number) : Unity.Mathematics.float3x2
            public static float3x2 ($v: number) : Unity.Mathematics.float3x2
            public static float3x2 ($v: boolean) : Unity.Mathematics.float3x2
            public static float3x2 ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.float3x2
            public static float3x2 ($v: Unity.Mathematics.int3x2) : Unity.Mathematics.float3x2
            public static float3x2 ($v: Unity.Mathematics.uint3x2) : Unity.Mathematics.float3x2
            public static float3x2 ($v: Unity.Mathematics.double3x2) : Unity.Mathematics.float3x2
            public static transpose ($v: Unity.Mathematics.float3x2) : Unity.Mathematics.float2x3
            public static hash ($v: Unity.Mathematics.float3x2) : number
            public static hashwide ($v: Unity.Mathematics.float3x2) : Unity.Mathematics.uint3
            public static float3x3 ($c0: Unity.Mathematics.float3, $c1: Unity.Mathematics.float3, $c2: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static float3x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number) : Unity.Mathematics.float3x3
            public static float3x3 ($v: number) : Unity.Mathematics.float3x3
            public static float3x3 ($v: boolean) : Unity.Mathematics.float3x3
            public static float3x3 ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.float3x3
            public static float3x3 ($v: Unity.Mathematics.int3x3) : Unity.Mathematics.float3x3
            public static float3x3 ($v: Unity.Mathematics.uint3x3) : Unity.Mathematics.float3x3
            public static float3x3 ($v: Unity.Mathematics.double3x3) : Unity.Mathematics.float3x3
            public static transpose ($v: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static inverse ($m: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static determinant ($m: Unity.Mathematics.float3x3) : number
            public static hash ($v: Unity.Mathematics.float3x3) : number
            public static hashwide ($v: Unity.Mathematics.float3x3) : Unity.Mathematics.uint3
            public static float3x4 ($c0: Unity.Mathematics.float3, $c1: Unity.Mathematics.float3, $c2: Unity.Mathematics.float3, $c3: Unity.Mathematics.float3) : Unity.Mathematics.float3x4
            public static float3x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number) : Unity.Mathematics.float3x4
            public static float3x4 ($v: number) : Unity.Mathematics.float3x4
            public static float3x4 ($v: boolean) : Unity.Mathematics.float3x4
            public static float3x4 ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.float3x4
            public static float3x4 ($v: Unity.Mathematics.int3x4) : Unity.Mathematics.float3x4
            public static float3x4 ($v: Unity.Mathematics.uint3x4) : Unity.Mathematics.float3x4
            public static float3x4 ($v: Unity.Mathematics.double3x4) : Unity.Mathematics.float3x4
            public static transpose ($v: Unity.Mathematics.float3x4) : Unity.Mathematics.float4x3
            public static fastinverse ($m: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static hash ($v: Unity.Mathematics.float3x4) : number
            public static hashwide ($v: Unity.Mathematics.float3x4) : Unity.Mathematics.uint3
            public static float4 ($x: number, $y: number, $z: number, $w: number) : Unity.Mathematics.float4
            public static float4 ($x: number, $y: number, $zw: Unity.Mathematics.float2) : Unity.Mathematics.float4
            public static float4 ($x: number, $yz: Unity.Mathematics.float2, $w: number) : Unity.Mathematics.float4
            public static float4 ($x: number, $yzw: Unity.Mathematics.float3) : Unity.Mathematics.float4
            public static float4 ($xy: Unity.Mathematics.float2, $z: number, $w: number) : Unity.Mathematics.float4
            public static float4 ($xy: Unity.Mathematics.float2, $zw: Unity.Mathematics.float2) : Unity.Mathematics.float4
            public static float4 ($xyz: Unity.Mathematics.float3, $w: number) : Unity.Mathematics.float4
            public static float4 ($xyzw: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static float4 ($v: number) : Unity.Mathematics.float4
            public static float4 ($v: boolean) : Unity.Mathematics.float4
            public static float4 ($v: Unity.Mathematics.bool4) : Unity.Mathematics.float4
            public static float4 ($v: Unity.Mathematics.int4) : Unity.Mathematics.float4
            public static float4 ($v: Unity.Mathematics.uint4) : Unity.Mathematics.float4
            public static float4 ($v: Unity.Mathematics.half) : Unity.Mathematics.float4
            public static float4 ($v: Unity.Mathematics.half4) : Unity.Mathematics.float4
            public static float4 ($v: Unity.Mathematics.double4) : Unity.Mathematics.float4
            public static hash ($v: Unity.Mathematics.float4) : number
            public static hashwide ($v: Unity.Mathematics.float4) : Unity.Mathematics.uint4
            public static shuffle ($left: Unity.Mathematics.float4, $right: Unity.Mathematics.float4, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.float4, $right: Unity.Mathematics.float4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.float2
            public static shuffle ($left: Unity.Mathematics.float4, $right: Unity.Mathematics.float4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.float3
            public static shuffle ($left: Unity.Mathematics.float4, $right: Unity.Mathematics.float4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.float4
            public static float4x2 ($c0: Unity.Mathematics.float4, $c1: Unity.Mathematics.float4) : Unity.Mathematics.float4x2
            public static float4x2 ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number, $m30: number, $m31: number) : Unity.Mathematics.float4x2
            public static float4x2 ($v: number) : Unity.Mathematics.float4x2
            public static float4x2 ($v: boolean) : Unity.Mathematics.float4x2
            public static float4x2 ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.float4x2
            public static float4x2 ($v: Unity.Mathematics.int4x2) : Unity.Mathematics.float4x2
            public static float4x2 ($v: Unity.Mathematics.uint4x2) : Unity.Mathematics.float4x2
            public static float4x2 ($v: Unity.Mathematics.double4x2) : Unity.Mathematics.float4x2
            public static transpose ($v: Unity.Mathematics.float4x2) : Unity.Mathematics.float2x4
            public static hash ($v: Unity.Mathematics.float4x2) : number
            public static hashwide ($v: Unity.Mathematics.float4x2) : Unity.Mathematics.uint4
            public static float4x3 ($c0: Unity.Mathematics.float4, $c1: Unity.Mathematics.float4, $c2: Unity.Mathematics.float4) : Unity.Mathematics.float4x3
            public static float4x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number, $m30: number, $m31: number, $m32: number) : Unity.Mathematics.float4x3
            public static float4x3 ($v: number) : Unity.Mathematics.float4x3
            public static float4x3 ($v: boolean) : Unity.Mathematics.float4x3
            public static float4x3 ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.float4x3
            public static float4x3 ($v: Unity.Mathematics.int4x3) : Unity.Mathematics.float4x3
            public static float4x3 ($v: Unity.Mathematics.uint4x3) : Unity.Mathematics.float4x3
            public static float4x3 ($v: Unity.Mathematics.double4x3) : Unity.Mathematics.float4x3
            public static transpose ($v: Unity.Mathematics.float4x3) : Unity.Mathematics.float3x4
            public static hash ($v: Unity.Mathematics.float4x3) : number
            public static hashwide ($v: Unity.Mathematics.float4x3) : Unity.Mathematics.uint4
            public static float4x4 ($c0: Unity.Mathematics.float4, $c1: Unity.Mathematics.float4, $c2: Unity.Mathematics.float4, $c3: Unity.Mathematics.float4) : Unity.Mathematics.float4x4
            public static float4x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number, $m30: number, $m31: number, $m32: number, $m33: number) : Unity.Mathematics.float4x4
            public static float4x4 ($v: number) : Unity.Mathematics.float4x4
            public static float4x4 ($v: boolean) : Unity.Mathematics.float4x4
            public static float4x4 ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.float4x4
            public static float4x4 ($v: Unity.Mathematics.int4x4) : Unity.Mathematics.float4x4
            public static float4x4 ($v: Unity.Mathematics.uint4x4) : Unity.Mathematics.float4x4
            public static float4x4 ($v: Unity.Mathematics.double4x4) : Unity.Mathematics.float4x4
            public static rotate ($a: Unity.Mathematics.float4x4, $b: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static transform ($a: Unity.Mathematics.float4x4, $b: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static transpose ($v: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static inverse ($m: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static fastinverse ($m: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static determinant ($m: Unity.Mathematics.float4x4) : number
            public static hash ($v: Unity.Mathematics.float4x4) : number
            public static hashwide ($v: Unity.Mathematics.float4x4) : Unity.Mathematics.uint4
            public static half ($x: Unity.Mathematics.half) : Unity.Mathematics.half
            public static half ($v: number) : Unity.Mathematics.half
            public static hash ($v: Unity.Mathematics.half) : number
            public static half2 ($x: Unity.Mathematics.half, $y: Unity.Mathematics.half) : Unity.Mathematics.half2
            public static half2 ($xy: Unity.Mathematics.half2) : Unity.Mathematics.half2
            public static half2 ($v: Unity.Mathematics.half) : Unity.Mathematics.half2
            public static half2 ($v: number) : Unity.Mathematics.half2
            public static half2 ($v: Unity.Mathematics.float2) : Unity.Mathematics.half2
            public static half2 ($v: Unity.Mathematics.double2) : Unity.Mathematics.half2
            public static hash ($v: Unity.Mathematics.half2) : number
            public static hashwide ($v: Unity.Mathematics.half2) : Unity.Mathematics.uint2
            public static half3 ($x: Unity.Mathematics.half, $y: Unity.Mathematics.half, $z: Unity.Mathematics.half) : Unity.Mathematics.half3
            public static half3 ($x: Unity.Mathematics.half, $yz: Unity.Mathematics.half2) : Unity.Mathematics.half3
            public static half3 ($xy: Unity.Mathematics.half2, $z: Unity.Mathematics.half) : Unity.Mathematics.half3
            public static half3 ($xyz: Unity.Mathematics.half3) : Unity.Mathematics.half3
            public static half3 ($v: Unity.Mathematics.half) : Unity.Mathematics.half3
            public static half3 ($v: number) : Unity.Mathematics.half3
            public static half3 ($v: Unity.Mathematics.float3) : Unity.Mathematics.half3
            public static half3 ($v: Unity.Mathematics.double3) : Unity.Mathematics.half3
            public static hash ($v: Unity.Mathematics.half3) : number
            public static hashwide ($v: Unity.Mathematics.half3) : Unity.Mathematics.uint3
            public static half4 ($x: Unity.Mathematics.half, $y: Unity.Mathematics.half, $z: Unity.Mathematics.half, $w: Unity.Mathematics.half) : Unity.Mathematics.half4
            public static half4 ($x: Unity.Mathematics.half, $y: Unity.Mathematics.half, $zw: Unity.Mathematics.half2) : Unity.Mathematics.half4
            public static half4 ($x: Unity.Mathematics.half, $yz: Unity.Mathematics.half2, $w: Unity.Mathematics.half) : Unity.Mathematics.half4
            public static half4 ($x: Unity.Mathematics.half, $yzw: Unity.Mathematics.half3) : Unity.Mathematics.half4
            public static half4 ($xy: Unity.Mathematics.half2, $z: Unity.Mathematics.half, $w: Unity.Mathematics.half) : Unity.Mathematics.half4
            public static half4 ($xy: Unity.Mathematics.half2, $zw: Unity.Mathematics.half2) : Unity.Mathematics.half4
            public static half4 ($xyz: Unity.Mathematics.half3, $w: Unity.Mathematics.half) : Unity.Mathematics.half4
            public static half4 ($xyzw: Unity.Mathematics.half4) : Unity.Mathematics.half4
            public static half4 ($v: Unity.Mathematics.half) : Unity.Mathematics.half4
            public static half4 ($v: number) : Unity.Mathematics.half4
            public static half4 ($v: Unity.Mathematics.float4) : Unity.Mathematics.half4
            public static half4 ($v: Unity.Mathematics.double4) : Unity.Mathematics.half4
            public static hash ($v: Unity.Mathematics.half4) : number
            public static hashwide ($v: Unity.Mathematics.half4) : Unity.Mathematics.uint4
            public static int2 ($x: number, $y: number) : Unity.Mathematics.int2
            public static int2 ($xy: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static int2 ($v: number) : Unity.Mathematics.int2
            public static int2 ($v: boolean) : Unity.Mathematics.int2
            public static int2 ($v: Unity.Mathematics.bool2) : Unity.Mathematics.int2
            public static int2 ($v: Unity.Mathematics.uint2) : Unity.Mathematics.int2
            public static int2 ($v: Unity.Mathematics.float2) : Unity.Mathematics.int2
            public static int2 ($v: Unity.Mathematics.double2) : Unity.Mathematics.int2
            public static hash ($v: Unity.Mathematics.int2) : number
            public static hashwide ($v: Unity.Mathematics.int2) : Unity.Mathematics.uint2
            public static shuffle ($left: Unity.Mathematics.int2, $right: Unity.Mathematics.int2, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.int2, $right: Unity.Mathematics.int2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.int2
            public static shuffle ($left: Unity.Mathematics.int2, $right: Unity.Mathematics.int2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.int3
            public static shuffle ($left: Unity.Mathematics.int2, $right: Unity.Mathematics.int2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.int4
            public static int2x2 ($c0: Unity.Mathematics.int2, $c1: Unity.Mathematics.int2) : Unity.Mathematics.int2x2
            public static int2x2 ($m00: number, $m01: number, $m10: number, $m11: number) : Unity.Mathematics.int2x2
            public static int2x2 ($v: number) : Unity.Mathematics.int2x2
            public static int2x2 ($v: boolean) : Unity.Mathematics.int2x2
            public static int2x2 ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.int2x2
            public static int2x2 ($v: Unity.Mathematics.uint2x2) : Unity.Mathematics.int2x2
            public static int2x2 ($v: Unity.Mathematics.float2x2) : Unity.Mathematics.int2x2
            public static int2x2 ($v: Unity.Mathematics.double2x2) : Unity.Mathematics.int2x2
            public static transpose ($v: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static determinant ($m: Unity.Mathematics.int2x2) : number
            public static hash ($v: Unity.Mathematics.int2x2) : number
            public static hashwide ($v: Unity.Mathematics.int2x2) : Unity.Mathematics.uint2
            public static int2x3 ($c0: Unity.Mathematics.int2, $c1: Unity.Mathematics.int2, $c2: Unity.Mathematics.int2) : Unity.Mathematics.int2x3
            public static int2x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number) : Unity.Mathematics.int2x3
            public static int2x3 ($v: number) : Unity.Mathematics.int2x3
            public static int2x3 ($v: boolean) : Unity.Mathematics.int2x3
            public static int2x3 ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.int2x3
            public static int2x3 ($v: Unity.Mathematics.uint2x3) : Unity.Mathematics.int2x3
            public static int2x3 ($v: Unity.Mathematics.float2x3) : Unity.Mathematics.int2x3
            public static int2x3 ($v: Unity.Mathematics.double2x3) : Unity.Mathematics.int2x3
            public static transpose ($v: Unity.Mathematics.int2x3) : Unity.Mathematics.int3x2
            public static hash ($v: Unity.Mathematics.int2x3) : number
            public static hashwide ($v: Unity.Mathematics.int2x3) : Unity.Mathematics.uint2
            public static int2x4 ($c0: Unity.Mathematics.int2, $c1: Unity.Mathematics.int2, $c2: Unity.Mathematics.int2, $c3: Unity.Mathematics.int2) : Unity.Mathematics.int2x4
            public static int2x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number) : Unity.Mathematics.int2x4
            public static int2x4 ($v: number) : Unity.Mathematics.int2x4
            public static int2x4 ($v: boolean) : Unity.Mathematics.int2x4
            public static int2x4 ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.int2x4
            public static int2x4 ($v: Unity.Mathematics.uint2x4) : Unity.Mathematics.int2x4
            public static int2x4 ($v: Unity.Mathematics.float2x4) : Unity.Mathematics.int2x4
            public static int2x4 ($v: Unity.Mathematics.double2x4) : Unity.Mathematics.int2x4
            public static transpose ($v: Unity.Mathematics.int2x4) : Unity.Mathematics.int4x2
            public static hash ($v: Unity.Mathematics.int2x4) : number
            public static hashwide ($v: Unity.Mathematics.int2x4) : Unity.Mathematics.uint2
            public static int3 ($x: number, $y: number, $z: number) : Unity.Mathematics.int3
            public static int3 ($x: number, $yz: Unity.Mathematics.int2) : Unity.Mathematics.int3
            public static int3 ($xy: Unity.Mathematics.int2, $z: number) : Unity.Mathematics.int3
            public static int3 ($xyz: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static int3 ($v: number) : Unity.Mathematics.int3
            public static int3 ($v: boolean) : Unity.Mathematics.int3
            public static int3 ($v: Unity.Mathematics.bool3) : Unity.Mathematics.int3
            public static int3 ($v: Unity.Mathematics.uint3) : Unity.Mathematics.int3
            public static int3 ($v: Unity.Mathematics.float3) : Unity.Mathematics.int3
            public static int3 ($v: Unity.Mathematics.double3) : Unity.Mathematics.int3
            public static hash ($v: Unity.Mathematics.int3) : number
            public static hashwide ($v: Unity.Mathematics.int3) : Unity.Mathematics.uint3
            public static shuffle ($left: Unity.Mathematics.int3, $right: Unity.Mathematics.int3, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.int3, $right: Unity.Mathematics.int3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.int2
            public static shuffle ($left: Unity.Mathematics.int3, $right: Unity.Mathematics.int3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.int3
            public static shuffle ($left: Unity.Mathematics.int3, $right: Unity.Mathematics.int3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.int4
            public static int3x2 ($c0: Unity.Mathematics.int3, $c1: Unity.Mathematics.int3) : Unity.Mathematics.int3x2
            public static int3x2 ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number) : Unity.Mathematics.int3x2
            public static int3x2 ($v: number) : Unity.Mathematics.int3x2
            public static int3x2 ($v: boolean) : Unity.Mathematics.int3x2
            public static int3x2 ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.int3x2
            public static int3x2 ($v: Unity.Mathematics.uint3x2) : Unity.Mathematics.int3x2
            public static int3x2 ($v: Unity.Mathematics.float3x2) : Unity.Mathematics.int3x2
            public static int3x2 ($v: Unity.Mathematics.double3x2) : Unity.Mathematics.int3x2
            public static transpose ($v: Unity.Mathematics.int3x2) : Unity.Mathematics.int2x3
            public static hash ($v: Unity.Mathematics.int3x2) : number
            public static hashwide ($v: Unity.Mathematics.int3x2) : Unity.Mathematics.uint3
            public static int3x3 ($c0: Unity.Mathematics.int3, $c1: Unity.Mathematics.int3, $c2: Unity.Mathematics.int3) : Unity.Mathematics.int3x3
            public static int3x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number) : Unity.Mathematics.int3x3
            public static int3x3 ($v: number) : Unity.Mathematics.int3x3
            public static int3x3 ($v: boolean) : Unity.Mathematics.int3x3
            public static int3x3 ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.int3x3
            public static int3x3 ($v: Unity.Mathematics.uint3x3) : Unity.Mathematics.int3x3
            public static int3x3 ($v: Unity.Mathematics.float3x3) : Unity.Mathematics.int3x3
            public static int3x3 ($v: Unity.Mathematics.double3x3) : Unity.Mathematics.int3x3
            public static transpose ($v: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static determinant ($m: Unity.Mathematics.int3x3) : number
            public static hash ($v: Unity.Mathematics.int3x3) : number
            public static hashwide ($v: Unity.Mathematics.int3x3) : Unity.Mathematics.uint3
            public static int3x4 ($c0: Unity.Mathematics.int3, $c1: Unity.Mathematics.int3, $c2: Unity.Mathematics.int3, $c3: Unity.Mathematics.int3) : Unity.Mathematics.int3x4
            public static int3x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number) : Unity.Mathematics.int3x4
            public static int3x4 ($v: number) : Unity.Mathematics.int3x4
            public static int3x4 ($v: boolean) : Unity.Mathematics.int3x4
            public static int3x4 ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.int3x4
            public static int3x4 ($v: Unity.Mathematics.uint3x4) : Unity.Mathematics.int3x4
            public static int3x4 ($v: Unity.Mathematics.float3x4) : Unity.Mathematics.int3x4
            public static int3x4 ($v: Unity.Mathematics.double3x4) : Unity.Mathematics.int3x4
            public static transpose ($v: Unity.Mathematics.int3x4) : Unity.Mathematics.int4x3
            public static hash ($v: Unity.Mathematics.int3x4) : number
            public static hashwide ($v: Unity.Mathematics.int3x4) : Unity.Mathematics.uint3
            public static int4 ($x: number, $y: number, $z: number, $w: number) : Unity.Mathematics.int4
            public static int4 ($x: number, $y: number, $zw: Unity.Mathematics.int2) : Unity.Mathematics.int4
            public static int4 ($x: number, $yz: Unity.Mathematics.int2, $w: number) : Unity.Mathematics.int4
            public static int4 ($x: number, $yzw: Unity.Mathematics.int3) : Unity.Mathematics.int4
            public static int4 ($xy: Unity.Mathematics.int2, $z: number, $w: number) : Unity.Mathematics.int4
            public static int4 ($xy: Unity.Mathematics.int2, $zw: Unity.Mathematics.int2) : Unity.Mathematics.int4
            public static int4 ($xyz: Unity.Mathematics.int3, $w: number) : Unity.Mathematics.int4
            public static int4 ($xyzw: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static int4 ($v: number) : Unity.Mathematics.int4
            public static int4 ($v: boolean) : Unity.Mathematics.int4
            public static int4 ($v: Unity.Mathematics.bool4) : Unity.Mathematics.int4
            public static int4 ($v: Unity.Mathematics.uint4) : Unity.Mathematics.int4
            public static int4 ($v: Unity.Mathematics.float4) : Unity.Mathematics.int4
            public static int4 ($v: Unity.Mathematics.double4) : Unity.Mathematics.int4
            public static hash ($v: Unity.Mathematics.int4) : number
            public static hashwide ($v: Unity.Mathematics.int4) : Unity.Mathematics.uint4
            public static shuffle ($left: Unity.Mathematics.int4, $right: Unity.Mathematics.int4, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.int4, $right: Unity.Mathematics.int4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.int2
            public static shuffle ($left: Unity.Mathematics.int4, $right: Unity.Mathematics.int4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.int3
            public static shuffle ($left: Unity.Mathematics.int4, $right: Unity.Mathematics.int4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.int4
            public static int4x2 ($c0: Unity.Mathematics.int4, $c1: Unity.Mathematics.int4) : Unity.Mathematics.int4x2
            public static int4x2 ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number, $m30: number, $m31: number) : Unity.Mathematics.int4x2
            public static int4x2 ($v: number) : Unity.Mathematics.int4x2
            public static int4x2 ($v: boolean) : Unity.Mathematics.int4x2
            public static int4x2 ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.int4x2
            public static int4x2 ($v: Unity.Mathematics.uint4x2) : Unity.Mathematics.int4x2
            public static int4x2 ($v: Unity.Mathematics.float4x2) : Unity.Mathematics.int4x2
            public static int4x2 ($v: Unity.Mathematics.double4x2) : Unity.Mathematics.int4x2
            public static transpose ($v: Unity.Mathematics.int4x2) : Unity.Mathematics.int2x4
            public static hash ($v: Unity.Mathematics.int4x2) : number
            public static hashwide ($v: Unity.Mathematics.int4x2) : Unity.Mathematics.uint4
            public static int4x3 ($c0: Unity.Mathematics.int4, $c1: Unity.Mathematics.int4, $c2: Unity.Mathematics.int4) : Unity.Mathematics.int4x3
            public static int4x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number, $m30: number, $m31: number, $m32: number) : Unity.Mathematics.int4x3
            public static int4x3 ($v: number) : Unity.Mathematics.int4x3
            public static int4x3 ($v: boolean) : Unity.Mathematics.int4x3
            public static int4x3 ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.int4x3
            public static int4x3 ($v: Unity.Mathematics.uint4x3) : Unity.Mathematics.int4x3
            public static int4x3 ($v: Unity.Mathematics.float4x3) : Unity.Mathematics.int4x3
            public static int4x3 ($v: Unity.Mathematics.double4x3) : Unity.Mathematics.int4x3
            public static transpose ($v: Unity.Mathematics.int4x3) : Unity.Mathematics.int3x4
            public static hash ($v: Unity.Mathematics.int4x3) : number
            public static hashwide ($v: Unity.Mathematics.int4x3) : Unity.Mathematics.uint4
            public static int4x4 ($c0: Unity.Mathematics.int4, $c1: Unity.Mathematics.int4, $c2: Unity.Mathematics.int4, $c3: Unity.Mathematics.int4) : Unity.Mathematics.int4x4
            public static int4x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number, $m30: number, $m31: number, $m32: number, $m33: number) : Unity.Mathematics.int4x4
            public static int4x4 ($v: number) : Unity.Mathematics.int4x4
            public static int4x4 ($v: boolean) : Unity.Mathematics.int4x4
            public static int4x4 ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.int4x4
            public static int4x4 ($v: Unity.Mathematics.uint4x4) : Unity.Mathematics.int4x4
            public static int4x4 ($v: Unity.Mathematics.float4x4) : Unity.Mathematics.int4x4
            public static int4x4 ($v: Unity.Mathematics.double4x4) : Unity.Mathematics.int4x4
            public static transpose ($v: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static determinant ($m: Unity.Mathematics.int4x4) : number
            public static hash ($v: Unity.Mathematics.int4x4) : number
            public static hashwide ($v: Unity.Mathematics.int4x4) : Unity.Mathematics.uint4
            public static asint ($x: number) : number
            public static asint ($x: Unity.Mathematics.uint2) : Unity.Mathematics.int2
            public static asint ($x: Unity.Mathematics.uint3) : Unity.Mathematics.int3
            public static asint ($x: Unity.Mathematics.uint4) : Unity.Mathematics.int4
            public static asint ($x: Unity.Mathematics.float2) : Unity.Mathematics.int2
            public static asint ($x: Unity.Mathematics.float3) : Unity.Mathematics.int3
            public static asint ($x: Unity.Mathematics.float4) : Unity.Mathematics.int4
            public static asuint ($x: number) : number
            public static asuint ($x: Unity.Mathematics.int2) : Unity.Mathematics.uint2
            public static asuint ($x: Unity.Mathematics.int3) : Unity.Mathematics.uint3
            public static asuint ($x: Unity.Mathematics.int4) : Unity.Mathematics.uint4
            public static asuint ($x: Unity.Mathematics.float2) : Unity.Mathematics.uint2
            public static asuint ($x: Unity.Mathematics.float3) : Unity.Mathematics.uint3
            public static asuint ($x: Unity.Mathematics.float4) : Unity.Mathematics.uint4
            public static aslong ($x: bigint) : bigint
            public static aslong ($x: number) : bigint
            public static asulong ($x: bigint) : bigint
            public static asulong ($x: number) : bigint
            public static asfloat ($x: number) : number
            public static asfloat ($x: Unity.Mathematics.int2) : Unity.Mathematics.float2
            public static asfloat ($x: Unity.Mathematics.int3) : Unity.Mathematics.float3
            public static asfloat ($x: Unity.Mathematics.int4) : Unity.Mathematics.float4
            public static asfloat ($x: Unity.Mathematics.uint2) : Unity.Mathematics.float2
            public static asfloat ($x: Unity.Mathematics.uint3) : Unity.Mathematics.float3
            public static asfloat ($x: Unity.Mathematics.uint4) : Unity.Mathematics.float4
            public static bitmask ($value: Unity.Mathematics.bool4) : number
            public static asdouble ($x: bigint) : number
            public static isfinite ($x: number) : boolean
            public static isfinite ($x: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static isfinite ($x: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static isfinite ($x: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static isfinite ($x: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static isfinite ($x: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static isfinite ($x: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static isinf ($x: number) : boolean
            public static isinf ($x: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static isinf ($x: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static isinf ($x: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static isinf ($x: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static isinf ($x: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static isinf ($x: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static isnan ($x: number) : boolean
            public static isnan ($x: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static isnan ($x: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static isnan ($x: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static isnan ($x: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static isnan ($x: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static isnan ($x: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static ispow2 ($x: number) : boolean
            public static ispow2 ($x: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static ispow2 ($x: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static ispow2 ($x: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static ispow2 ($x: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static ispow2 ($x: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static ispow2 ($x: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static min ($x: number, $y: number) : number
            public static min ($x: Unity.Mathematics.int2, $y: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static min ($x: Unity.Mathematics.int3, $y: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static min ($x: Unity.Mathematics.int4, $y: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static min ($x: Unity.Mathematics.uint2, $y: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static min ($x: Unity.Mathematics.uint3, $y: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static min ($x: Unity.Mathematics.uint4, $y: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static min ($x: bigint, $y: bigint) : bigint
            public static min ($x: Unity.Mathematics.float2, $y: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static min ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static min ($x: Unity.Mathematics.float4, $y: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static min ($x: Unity.Mathematics.double2, $y: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static min ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static min ($x: Unity.Mathematics.double4, $y: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static max ($x: number, $y: number) : number
            public static max ($x: Unity.Mathematics.int2, $y: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static max ($x: Unity.Mathematics.int3, $y: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static max ($x: Unity.Mathematics.int4, $y: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static max ($x: Unity.Mathematics.uint2, $y: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static max ($x: Unity.Mathematics.uint3, $y: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static max ($x: Unity.Mathematics.uint4, $y: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static max ($x: bigint, $y: bigint) : bigint
            public static max ($x: Unity.Mathematics.float2, $y: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static max ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static max ($x: Unity.Mathematics.float4, $y: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static max ($x: Unity.Mathematics.double2, $y: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static max ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static max ($x: Unity.Mathematics.double4, $y: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static lerp ($x: number, $y: number, $s: number) : number
            public static lerp ($x: Unity.Mathematics.float2, $y: Unity.Mathematics.float2, $s: number) : Unity.Mathematics.float2
            public static lerp ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3, $s: number) : Unity.Mathematics.float3
            public static lerp ($x: Unity.Mathematics.float4, $y: Unity.Mathematics.float4, $s: number) : Unity.Mathematics.float4
            public static lerp ($x: Unity.Mathematics.float2, $y: Unity.Mathematics.float2, $s: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static lerp ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3, $s: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static lerp ($x: Unity.Mathematics.float4, $y: Unity.Mathematics.float4, $s: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static lerp ($x: Unity.Mathematics.double2, $y: Unity.Mathematics.double2, $s: number) : Unity.Mathematics.double2
            public static lerp ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3, $s: number) : Unity.Mathematics.double3
            public static lerp ($x: Unity.Mathematics.double4, $y: Unity.Mathematics.double4, $s: number) : Unity.Mathematics.double4
            public static lerp ($x: Unity.Mathematics.double2, $y: Unity.Mathematics.double2, $s: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static lerp ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3, $s: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static lerp ($x: Unity.Mathematics.double4, $y: Unity.Mathematics.double4, $s: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static unlerp ($a: number, $b: number, $x: number) : number
            public static unlerp ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2, $x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static unlerp ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3, $x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static unlerp ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4, $x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static unlerp ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2, $x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static unlerp ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3, $x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static unlerp ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4, $x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static remap ($a: number, $b: number, $c: number, $d: number, $x: number) : number
            public static remap ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2, $c: Unity.Mathematics.float2, $d: Unity.Mathematics.float2, $x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static remap ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3, $c: Unity.Mathematics.float3, $d: Unity.Mathematics.float3, $x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static remap ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4, $c: Unity.Mathematics.float4, $d: Unity.Mathematics.float4, $x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static remap ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2, $c: Unity.Mathematics.double2, $d: Unity.Mathematics.double2, $x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static remap ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3, $c: Unity.Mathematics.double3, $d: Unity.Mathematics.double3, $x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static remap ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4, $c: Unity.Mathematics.double4, $d: Unity.Mathematics.double4, $x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static mad ($a: number, $b: number, $c: number) : number
            public static mad ($a: Unity.Mathematics.int2, $b: Unity.Mathematics.int2, $c: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static mad ($a: Unity.Mathematics.int3, $b: Unity.Mathematics.int3, $c: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static mad ($a: Unity.Mathematics.int4, $b: Unity.Mathematics.int4, $c: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static mad ($a: Unity.Mathematics.uint2, $b: Unity.Mathematics.uint2, $c: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static mad ($a: Unity.Mathematics.uint3, $b: Unity.Mathematics.uint3, $c: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static mad ($a: Unity.Mathematics.uint4, $b: Unity.Mathematics.uint4, $c: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static mad ($a: bigint, $b: bigint, $c: bigint) : bigint
            public static mad ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2, $c: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static mad ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3, $c: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static mad ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4, $c: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static mad ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2, $c: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static mad ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3, $c: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static mad ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4, $c: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static clamp ($x: number, $a: number, $b: number) : number
            public static clamp ($x: Unity.Mathematics.int2, $a: Unity.Mathematics.int2, $b: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static clamp ($x: Unity.Mathematics.int3, $a: Unity.Mathematics.int3, $b: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static clamp ($x: Unity.Mathematics.int4, $a: Unity.Mathematics.int4, $b: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static clamp ($x: Unity.Mathematics.uint2, $a: Unity.Mathematics.uint2, $b: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static clamp ($x: Unity.Mathematics.uint3, $a: Unity.Mathematics.uint3, $b: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static clamp ($x: Unity.Mathematics.uint4, $a: Unity.Mathematics.uint4, $b: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static clamp ($x: bigint, $a: bigint, $b: bigint) : bigint
            public static clamp ($x: Unity.Mathematics.float2, $a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static clamp ($x: Unity.Mathematics.float3, $a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static clamp ($x: Unity.Mathematics.float4, $a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static clamp ($x: Unity.Mathematics.double2, $a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static clamp ($x: Unity.Mathematics.double3, $a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static clamp ($x: Unity.Mathematics.double4, $a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static saturate ($x: number) : number
            public static saturate ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static saturate ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static saturate ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static saturate ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static saturate ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static saturate ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static abs ($x: number) : number
            public static abs ($x: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static abs ($x: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static abs ($x: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static abs ($x: bigint) : bigint
            public static abs ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static abs ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static abs ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static abs ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static abs ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static abs ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static dot ($x: number, $y: number) : number
            public static dot ($x: Unity.Mathematics.int2, $y: Unity.Mathematics.int2) : number
            public static dot ($x: Unity.Mathematics.int3, $y: Unity.Mathematics.int3) : number
            public static dot ($x: Unity.Mathematics.int4, $y: Unity.Mathematics.int4) : number
            public static dot ($x: Unity.Mathematics.uint2, $y: Unity.Mathematics.uint2) : number
            public static dot ($x: Unity.Mathematics.uint3, $y: Unity.Mathematics.uint3) : number
            public static dot ($x: Unity.Mathematics.uint4, $y: Unity.Mathematics.uint4) : number
            public static dot ($x: Unity.Mathematics.float2, $y: Unity.Mathematics.float2) : number
            public static dot ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3) : number
            public static dot ($x: Unity.Mathematics.float4, $y: Unity.Mathematics.float4) : number
            public static dot ($x: Unity.Mathematics.double2, $y: Unity.Mathematics.double2) : number
            public static dot ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3) : number
            public static dot ($x: Unity.Mathematics.double4, $y: Unity.Mathematics.double4) : number
            public static tan ($x: number) : number
            public static tan ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static tan ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static tan ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static tan ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static tan ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static tan ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static tanh ($x: number) : number
            public static tanh ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static tanh ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static tanh ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static tanh ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static tanh ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static tanh ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static atan ($x: number) : number
            public static atan ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static atan ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static atan ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static atan ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static atan ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static atan ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static atan2 ($y: number, $x: number) : number
            public static atan2 ($y: Unity.Mathematics.float2, $x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static atan2 ($y: Unity.Mathematics.float3, $x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static atan2 ($y: Unity.Mathematics.float4, $x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static atan2 ($y: Unity.Mathematics.double2, $x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static atan2 ($y: Unity.Mathematics.double3, $x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static atan2 ($y: Unity.Mathematics.double4, $x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static cos ($x: number) : number
            public static cos ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static cos ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static cos ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static cos ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static cos ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static cos ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static cosh ($x: number) : number
            public static cosh ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static cosh ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static cosh ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static cosh ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static cosh ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static cosh ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static acos ($x: number) : number
            public static acos ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static acos ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static acos ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static acos ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static acos ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static acos ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static sin ($x: number) : number
            public static sin ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static sin ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static sin ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static sin ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static sin ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static sin ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static sinh ($x: number) : number
            public static sinh ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static sinh ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static sinh ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static sinh ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static sinh ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static sinh ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static asin ($x: number) : number
            public static asin ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static asin ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static asin ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static asin ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static asin ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static asin ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static floor ($x: number) : number
            public static floor ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static floor ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static floor ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static floor ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static floor ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static floor ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static ceil ($x: number) : number
            public static ceil ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static ceil ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static ceil ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static ceil ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static ceil ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static ceil ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static round ($x: number) : number
            public static round ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static round ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static round ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static round ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static round ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static round ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static trunc ($x: number) : number
            public static trunc ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static trunc ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static trunc ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static trunc ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static trunc ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static trunc ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static frac ($x: number) : number
            public static frac ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static frac ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static frac ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static frac ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static frac ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static frac ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static rcp ($x: number) : number
            public static rcp ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static rcp ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static rcp ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static rcp ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static rcp ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static rcp ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static sign ($x: number) : number
            public static sign ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static sign ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static sign ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static sign ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static sign ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static sign ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static pow ($x: number, $y: number) : number
            public static pow ($x: Unity.Mathematics.float2, $y: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static pow ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static pow ($x: Unity.Mathematics.float4, $y: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static pow ($x: Unity.Mathematics.double2, $y: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static pow ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static pow ($x: Unity.Mathematics.double4, $y: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static exp ($x: number) : number
            public static exp ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static exp ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static exp ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static exp ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static exp ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static exp ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static exp2 ($x: number) : number
            public static exp2 ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static exp2 ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static exp2 ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static exp2 ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static exp2 ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static exp2 ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static exp10 ($x: number) : number
            public static exp10 ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static exp10 ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static exp10 ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static exp10 ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static exp10 ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static exp10 ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static log ($x: number) : number
            public static log ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static log ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static log ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static log ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static log ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static log ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static log2 ($x: number) : number
            public static log2 ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static log2 ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static log2 ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static log2 ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static log2 ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static log2 ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static log10 ($x: number) : number
            public static log10 ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static log10 ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static log10 ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static log10 ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static log10 ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static log10 ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static fmod ($x: number, $y: number) : number
            public static fmod ($x: Unity.Mathematics.float2, $y: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static fmod ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static fmod ($x: Unity.Mathematics.float4, $y: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static fmod ($x: Unity.Mathematics.double2, $y: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static fmod ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static fmod ($x: Unity.Mathematics.double4, $y: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static modf ($x: number, $i: $Ref<number>) : number
            public static modf ($x: Unity.Mathematics.float2, $i: $Ref<Unity.Mathematics.float2>) : Unity.Mathematics.float2
            public static modf ($x: Unity.Mathematics.float3, $i: $Ref<Unity.Mathematics.float3>) : Unity.Mathematics.float3
            public static modf ($x: Unity.Mathematics.float4, $i: $Ref<Unity.Mathematics.float4>) : Unity.Mathematics.float4
            public static modf ($x: Unity.Mathematics.double2, $i: $Ref<Unity.Mathematics.double2>) : Unity.Mathematics.double2
            public static modf ($x: Unity.Mathematics.double3, $i: $Ref<Unity.Mathematics.double3>) : Unity.Mathematics.double3
            public static modf ($x: Unity.Mathematics.double4, $i: $Ref<Unity.Mathematics.double4>) : Unity.Mathematics.double4
            public static sqrt ($x: number) : number
            public static sqrt ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static sqrt ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static sqrt ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static sqrt ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static sqrt ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static sqrt ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static rsqrt ($x: number) : number
            public static rsqrt ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static rsqrt ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static rsqrt ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static rsqrt ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static rsqrt ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static rsqrt ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static normalize ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static normalize ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static normalize ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static normalize ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static normalize ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static normalize ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static normalizesafe ($x: Unity.Mathematics.float2, $defaultvalue?: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static normalizesafe ($x: Unity.Mathematics.float3, $defaultvalue?: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static normalizesafe ($x: Unity.Mathematics.float4, $defaultvalue?: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static normalizesafe ($x: Unity.Mathematics.double2, $defaultvalue?: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static normalizesafe ($x: Unity.Mathematics.double3, $defaultvalue?: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static normalizesafe ($x: Unity.Mathematics.double4, $defaultvalue?: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static length ($x: number) : number
            public static length ($x: Unity.Mathematics.float2) : number
            public static length ($x: Unity.Mathematics.float3) : number
            public static length ($x: Unity.Mathematics.float4) : number
            public static length ($x: Unity.Mathematics.double2) : number
            public static length ($x: Unity.Mathematics.double3) : number
            public static length ($x: Unity.Mathematics.double4) : number
            public static lengthsq ($x: number) : number
            public static lengthsq ($x: Unity.Mathematics.float2) : number
            public static lengthsq ($x: Unity.Mathematics.float3) : number
            public static lengthsq ($x: Unity.Mathematics.float4) : number
            public static lengthsq ($x: Unity.Mathematics.double2) : number
            public static lengthsq ($x: Unity.Mathematics.double3) : number
            public static lengthsq ($x: Unity.Mathematics.double4) : number
            public static distance ($x: number, $y: number) : number
            public static distance ($x: Unity.Mathematics.float2, $y: Unity.Mathematics.float2) : number
            public static distance ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3) : number
            public static distance ($x: Unity.Mathematics.float4, $y: Unity.Mathematics.float4) : number
            public static distance ($x: Unity.Mathematics.double2, $y: Unity.Mathematics.double2) : number
            public static distance ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3) : number
            public static distance ($x: Unity.Mathematics.double4, $y: Unity.Mathematics.double4) : number
            public static distancesq ($x: number, $y: number) : number
            public static distancesq ($x: Unity.Mathematics.float2, $y: Unity.Mathematics.float2) : number
            public static distancesq ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3) : number
            public static distancesq ($x: Unity.Mathematics.float4, $y: Unity.Mathematics.float4) : number
            public static distancesq ($x: Unity.Mathematics.double2, $y: Unity.Mathematics.double2) : number
            public static distancesq ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3) : number
            public static distancesq ($x: Unity.Mathematics.double4, $y: Unity.Mathematics.double4) : number
            public static cross ($x: Unity.Mathematics.float3, $y: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static cross ($x: Unity.Mathematics.double3, $y: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static smoothstep ($a: number, $b: number, $x: number) : number
            public static smoothstep ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2, $x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static smoothstep ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3, $x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static smoothstep ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4, $x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static smoothstep ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2, $x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static smoothstep ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3, $x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static smoothstep ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4, $x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static any ($x: Unity.Mathematics.bool2) : boolean
            public static any ($x: Unity.Mathematics.bool3) : boolean
            public static any ($x: Unity.Mathematics.bool4) : boolean
            public static any ($x: Unity.Mathematics.int2) : boolean
            public static any ($x: Unity.Mathematics.int3) : boolean
            public static any ($x: Unity.Mathematics.int4) : boolean
            public static any ($x: Unity.Mathematics.uint2) : boolean
            public static any ($x: Unity.Mathematics.uint3) : boolean
            public static any ($x: Unity.Mathematics.uint4) : boolean
            public static any ($x: Unity.Mathematics.float2) : boolean
            public static any ($x: Unity.Mathematics.float3) : boolean
            public static any ($x: Unity.Mathematics.float4) : boolean
            public static any ($x: Unity.Mathematics.double2) : boolean
            public static any ($x: Unity.Mathematics.double3) : boolean
            public static any ($x: Unity.Mathematics.double4) : boolean
            public static all ($x: Unity.Mathematics.bool2) : boolean
            public static all ($x: Unity.Mathematics.bool3) : boolean
            public static all ($x: Unity.Mathematics.bool4) : boolean
            public static all ($x: Unity.Mathematics.int2) : boolean
            public static all ($x: Unity.Mathematics.int3) : boolean
            public static all ($x: Unity.Mathematics.int4) : boolean
            public static all ($x: Unity.Mathematics.uint2) : boolean
            public static all ($x: Unity.Mathematics.uint3) : boolean
            public static all ($x: Unity.Mathematics.uint4) : boolean
            public static all ($x: Unity.Mathematics.float2) : boolean
            public static all ($x: Unity.Mathematics.float3) : boolean
            public static all ($x: Unity.Mathematics.float4) : boolean
            public static all ($x: Unity.Mathematics.double2) : boolean
            public static all ($x: Unity.Mathematics.double3) : boolean
            public static all ($x: Unity.Mathematics.double4) : boolean
            public static select ($a: number, $b: number, $c: boolean) : number
            public static select ($a: Unity.Mathematics.int2, $b: Unity.Mathematics.int2, $c: boolean) : Unity.Mathematics.int2
            public static select ($a: Unity.Mathematics.int3, $b: Unity.Mathematics.int3, $c: boolean) : Unity.Mathematics.int3
            public static select ($a: Unity.Mathematics.int4, $b: Unity.Mathematics.int4, $c: boolean) : Unity.Mathematics.int4
            public static select ($a: Unity.Mathematics.int2, $b: Unity.Mathematics.int2, $c: Unity.Mathematics.bool2) : Unity.Mathematics.int2
            public static select ($a: Unity.Mathematics.int3, $b: Unity.Mathematics.int3, $c: Unity.Mathematics.bool3) : Unity.Mathematics.int3
            public static select ($a: Unity.Mathematics.int4, $b: Unity.Mathematics.int4, $c: Unity.Mathematics.bool4) : Unity.Mathematics.int4
            public static select ($a: Unity.Mathematics.uint2, $b: Unity.Mathematics.uint2, $c: boolean) : Unity.Mathematics.uint2
            public static select ($a: Unity.Mathematics.uint3, $b: Unity.Mathematics.uint3, $c: boolean) : Unity.Mathematics.uint3
            public static select ($a: Unity.Mathematics.uint4, $b: Unity.Mathematics.uint4, $c: boolean) : Unity.Mathematics.uint4
            public static select ($a: Unity.Mathematics.uint2, $b: Unity.Mathematics.uint2, $c: Unity.Mathematics.bool2) : Unity.Mathematics.uint2
            public static select ($a: Unity.Mathematics.uint3, $b: Unity.Mathematics.uint3, $c: Unity.Mathematics.bool3) : Unity.Mathematics.uint3
            public static select ($a: Unity.Mathematics.uint4, $b: Unity.Mathematics.uint4, $c: Unity.Mathematics.bool4) : Unity.Mathematics.uint4
            public static select ($a: bigint, $b: bigint, $c: boolean) : bigint
            public static select ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2, $c: boolean) : Unity.Mathematics.float2
            public static select ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3, $c: boolean) : Unity.Mathematics.float3
            public static select ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4, $c: boolean) : Unity.Mathematics.float4
            public static select ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2, $c: Unity.Mathematics.bool2) : Unity.Mathematics.float2
            public static select ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3, $c: Unity.Mathematics.bool3) : Unity.Mathematics.float3
            public static select ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4, $c: Unity.Mathematics.bool4) : Unity.Mathematics.float4
            public static select ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2, $c: boolean) : Unity.Mathematics.double2
            public static select ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3, $c: boolean) : Unity.Mathematics.double3
            public static select ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4, $c: boolean) : Unity.Mathematics.double4
            public static select ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2, $c: Unity.Mathematics.bool2) : Unity.Mathematics.double2
            public static select ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3, $c: Unity.Mathematics.bool3) : Unity.Mathematics.double3
            public static select ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4, $c: Unity.Mathematics.bool4) : Unity.Mathematics.double4
            public static step ($y: number, $x: number) : number
            public static step ($y: Unity.Mathematics.float2, $x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static step ($y: Unity.Mathematics.float3, $x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static step ($y: Unity.Mathematics.float4, $x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static step ($y: Unity.Mathematics.double2, $x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static step ($y: Unity.Mathematics.double3, $x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static step ($y: Unity.Mathematics.double4, $x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static reflect ($i: Unity.Mathematics.float2, $n: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static reflect ($i: Unity.Mathematics.float3, $n: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static reflect ($i: Unity.Mathematics.float4, $n: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static reflect ($i: Unity.Mathematics.double2, $n: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static reflect ($i: Unity.Mathematics.double3, $n: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static reflect ($i: Unity.Mathematics.double4, $n: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static refract ($i: Unity.Mathematics.float2, $n: Unity.Mathematics.float2, $eta: number) : Unity.Mathematics.float2
            public static refract ($i: Unity.Mathematics.float3, $n: Unity.Mathematics.float3, $eta: number) : Unity.Mathematics.float3
            public static refract ($i: Unity.Mathematics.float4, $n: Unity.Mathematics.float4, $eta: number) : Unity.Mathematics.float4
            public static refract ($i: Unity.Mathematics.double2, $n: Unity.Mathematics.double2, $eta: number) : Unity.Mathematics.double2
            public static refract ($i: Unity.Mathematics.double3, $n: Unity.Mathematics.double3, $eta: number) : Unity.Mathematics.double3
            public static refract ($i: Unity.Mathematics.double4, $n: Unity.Mathematics.double4, $eta: number) : Unity.Mathematics.double4
            public static project ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static project ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static project ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static projectsafe ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2, $defaultValue?: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static projectsafe ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3, $defaultValue?: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static projectsafe ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4, $defaultValue?: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static project ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static project ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static project ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static projectsafe ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2, $defaultValue?: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static projectsafe ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3, $defaultValue?: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static projectsafe ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4, $defaultValue?: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static faceforward ($n: Unity.Mathematics.float2, $i: Unity.Mathematics.float2, $ng: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static faceforward ($n: Unity.Mathematics.float3, $i: Unity.Mathematics.float3, $ng: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static faceforward ($n: Unity.Mathematics.float4, $i: Unity.Mathematics.float4, $ng: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static faceforward ($n: Unity.Mathematics.double2, $i: Unity.Mathematics.double2, $ng: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static faceforward ($n: Unity.Mathematics.double3, $i: Unity.Mathematics.double3, $ng: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static faceforward ($n: Unity.Mathematics.double4, $i: Unity.Mathematics.double4, $ng: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static sincos ($x: number, $s: $Ref<number>, $c: $Ref<number>) : void
            public static sincos ($x: Unity.Mathematics.float2, $s: $Ref<Unity.Mathematics.float2>, $c: $Ref<Unity.Mathematics.float2>) : void
            public static sincos ($x: Unity.Mathematics.float3, $s: $Ref<Unity.Mathematics.float3>, $c: $Ref<Unity.Mathematics.float3>) : void
            public static sincos ($x: Unity.Mathematics.float4, $s: $Ref<Unity.Mathematics.float4>, $c: $Ref<Unity.Mathematics.float4>) : void
            public static sincos ($x: Unity.Mathematics.double2, $s: $Ref<Unity.Mathematics.double2>, $c: $Ref<Unity.Mathematics.double2>) : void
            public static sincos ($x: Unity.Mathematics.double3, $s: $Ref<Unity.Mathematics.double3>, $c: $Ref<Unity.Mathematics.double3>) : void
            public static sincos ($x: Unity.Mathematics.double4, $s: $Ref<Unity.Mathematics.double4>, $c: $Ref<Unity.Mathematics.double4>) : void
            public static countbits ($x: number) : number
            public static countbits ($x: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static countbits ($x: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static countbits ($x: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static countbits ($x: Unity.Mathematics.uint2) : Unity.Mathematics.int2
            public static countbits ($x: Unity.Mathematics.uint3) : Unity.Mathematics.int3
            public static countbits ($x: Unity.Mathematics.uint4) : Unity.Mathematics.int4
            public static countbits ($x: bigint) : number
            public static lzcnt ($x: number) : number
            public static lzcnt ($x: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static lzcnt ($x: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static lzcnt ($x: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static lzcnt ($x: Unity.Mathematics.uint2) : Unity.Mathematics.int2
            public static lzcnt ($x: Unity.Mathematics.uint3) : Unity.Mathematics.int3
            public static lzcnt ($x: Unity.Mathematics.uint4) : Unity.Mathematics.int4
            public static lzcnt ($x: bigint) : number
            public static tzcnt ($x: number) : number
            public static tzcnt ($x: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static tzcnt ($x: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static tzcnt ($x: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static tzcnt ($x: Unity.Mathematics.uint2) : Unity.Mathematics.int2
            public static tzcnt ($x: Unity.Mathematics.uint3) : Unity.Mathematics.int3
            public static tzcnt ($x: Unity.Mathematics.uint4) : Unity.Mathematics.int4
            public static tzcnt ($x: bigint) : number
            public static reversebits ($x: number) : number
            public static reversebits ($x: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static reversebits ($x: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static reversebits ($x: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static reversebits ($x: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static reversebits ($x: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static reversebits ($x: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static reversebits ($x: bigint) : bigint
            public static rol ($x: number, $n: number) : number
            public static rol ($x: Unity.Mathematics.int2, $n: number) : Unity.Mathematics.int2
            public static rol ($x: Unity.Mathematics.int3, $n: number) : Unity.Mathematics.int3
            public static rol ($x: Unity.Mathematics.int4, $n: number) : Unity.Mathematics.int4
            public static rol ($x: Unity.Mathematics.uint2, $n: number) : Unity.Mathematics.uint2
            public static rol ($x: Unity.Mathematics.uint3, $n: number) : Unity.Mathematics.uint3
            public static rol ($x: Unity.Mathematics.uint4, $n: number) : Unity.Mathematics.uint4
            public static rol ($x: bigint, $n: number) : bigint
            public static ror ($x: number, $n: number) : number
            public static ror ($x: Unity.Mathematics.int2, $n: number) : Unity.Mathematics.int2
            public static ror ($x: Unity.Mathematics.int3, $n: number) : Unity.Mathematics.int3
            public static ror ($x: Unity.Mathematics.int4, $n: number) : Unity.Mathematics.int4
            public static ror ($x: Unity.Mathematics.uint2, $n: number) : Unity.Mathematics.uint2
            public static ror ($x: Unity.Mathematics.uint3, $n: number) : Unity.Mathematics.uint3
            public static ror ($x: Unity.Mathematics.uint4, $n: number) : Unity.Mathematics.uint4
            public static ror ($x: bigint, $n: number) : bigint
            public static ceilpow2 ($x: number) : number
            public static ceilpow2 ($x: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static ceilpow2 ($x: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static ceilpow2 ($x: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static ceilpow2 ($x: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static ceilpow2 ($x: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static ceilpow2 ($x: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static ceilpow2 ($x: bigint) : bigint
            public static ceillog2 ($x: number) : number
            public static ceillog2 ($x: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static ceillog2 ($x: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static ceillog2 ($x: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static ceillog2 ($x: Unity.Mathematics.uint2) : Unity.Mathematics.int2
            public static ceillog2 ($x: Unity.Mathematics.uint3) : Unity.Mathematics.int3
            public static ceillog2 ($x: Unity.Mathematics.uint4) : Unity.Mathematics.int4
            public static floorlog2 ($x: number) : number
            public static floorlog2 ($x: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static floorlog2 ($x: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static floorlog2 ($x: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static floorlog2 ($x: Unity.Mathematics.uint2) : Unity.Mathematics.int2
            public static floorlog2 ($x: Unity.Mathematics.uint3) : Unity.Mathematics.int3
            public static floorlog2 ($x: Unity.Mathematics.uint4) : Unity.Mathematics.int4
            public static radians ($x: number) : number
            public static radians ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static radians ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static radians ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static radians ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static radians ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static radians ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static degrees ($x: number) : number
            public static degrees ($x: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static degrees ($x: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static degrees ($x: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static degrees ($x: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static degrees ($x: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static degrees ($x: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static cmin ($x: Unity.Mathematics.int2) : number
            public static cmin ($x: Unity.Mathematics.int3) : number
            public static cmin ($x: Unity.Mathematics.int4) : number
            public static cmin ($x: Unity.Mathematics.uint2) : number
            public static cmin ($x: Unity.Mathematics.uint3) : number
            public static cmin ($x: Unity.Mathematics.uint4) : number
            public static cmin ($x: Unity.Mathematics.float2) : number
            public static cmin ($x: Unity.Mathematics.float3) : number
            public static cmin ($x: Unity.Mathematics.float4) : number
            public static cmin ($x: Unity.Mathematics.double2) : number
            public static cmin ($x: Unity.Mathematics.double3) : number
            public static cmin ($x: Unity.Mathematics.double4) : number
            public static cmax ($x: Unity.Mathematics.int2) : number
            public static cmax ($x: Unity.Mathematics.int3) : number
            public static cmax ($x: Unity.Mathematics.int4) : number
            public static cmax ($x: Unity.Mathematics.uint2) : number
            public static cmax ($x: Unity.Mathematics.uint3) : number
            public static cmax ($x: Unity.Mathematics.uint4) : number
            public static cmax ($x: Unity.Mathematics.float2) : number
            public static cmax ($x: Unity.Mathematics.float3) : number
            public static cmax ($x: Unity.Mathematics.float4) : number
            public static cmax ($x: Unity.Mathematics.double2) : number
            public static cmax ($x: Unity.Mathematics.double3) : number
            public static cmax ($x: Unity.Mathematics.double4) : number
            public static csum ($x: Unity.Mathematics.int2) : number
            public static csum ($x: Unity.Mathematics.int3) : number
            public static csum ($x: Unity.Mathematics.int4) : number
            public static csum ($x: Unity.Mathematics.uint2) : number
            public static csum ($x: Unity.Mathematics.uint3) : number
            public static csum ($x: Unity.Mathematics.uint4) : number
            public static csum ($x: Unity.Mathematics.float2) : number
            public static csum ($x: Unity.Mathematics.float3) : number
            public static csum ($x: Unity.Mathematics.float4) : number
            public static csum ($x: Unity.Mathematics.double2) : number
            public static csum ($x: Unity.Mathematics.double3) : number
            public static csum ($x: Unity.Mathematics.double4) : number
            public static f16tof32 ($x: number) : number
            public static f16tof32 ($x: Unity.Mathematics.uint2) : Unity.Mathematics.float2
            public static f16tof32 ($x: Unity.Mathematics.uint3) : Unity.Mathematics.float3
            public static f16tof32 ($x: Unity.Mathematics.uint4) : Unity.Mathematics.float4
            public static f32tof16 ($x: number) : number
            public static f32tof16 ($x: Unity.Mathematics.float2) : Unity.Mathematics.uint2
            public static f32tof16 ($x: Unity.Mathematics.float3) : Unity.Mathematics.uint3
            public static f32tof16 ($x: Unity.Mathematics.float4) : Unity.Mathematics.uint4
            public static up () : Unity.Mathematics.float3
            public static down () : Unity.Mathematics.float3
            public static forward () : Unity.Mathematics.float3
            public static back () : Unity.Mathematics.float3
            public static left () : Unity.Mathematics.float3
            public static right () : Unity.Mathematics.float3
            public static float3x3 ($f4x4: Unity.Mathematics.float4x4) : Unity.Mathematics.float3x3
            public static float3x3 ($rotation: Unity.Mathematics.quaternion) : Unity.Mathematics.float3x3
            public static float4x4 ($rotation: Unity.Mathematics.float3x3, $translation: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static float4x4 ($rotation: Unity.Mathematics.quaternion, $translation: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static float4x4 ($transform: Unity.Mathematics.RigidTransform) : Unity.Mathematics.float4x4
            public static orthonormalize ($i: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static mul ($a: number, $b: number) : number
            public static mul ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2) : number
            public static mul ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2x2) : Unity.Mathematics.float2
            public static mul ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2x3) : Unity.Mathematics.float3
            public static mul ($a: Unity.Mathematics.float2, $b: Unity.Mathematics.float2x4) : Unity.Mathematics.float4
            public static mul ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3) : number
            public static mul ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3x2) : Unity.Mathematics.float2
            public static mul ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3x3) : Unity.Mathematics.float3
            public static mul ($a: Unity.Mathematics.float3, $b: Unity.Mathematics.float3x4) : Unity.Mathematics.float4
            public static mul ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4) : number
            public static mul ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4x2) : Unity.Mathematics.float2
            public static mul ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4x3) : Unity.Mathematics.float3
            public static mul ($a: Unity.Mathematics.float4, $b: Unity.Mathematics.float4x4) : Unity.Mathematics.float4
            public static mul ($a: Unity.Mathematics.float2x2, $b: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static mul ($a: Unity.Mathematics.float2x2, $b: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static mul ($a: Unity.Mathematics.float2x2, $b: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static mul ($a: Unity.Mathematics.float2x2, $b: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static mul ($a: Unity.Mathematics.float2x3, $b: Unity.Mathematics.float3) : Unity.Mathematics.float2
            public static mul ($a: Unity.Mathematics.float2x3, $b: Unity.Mathematics.float3x2) : Unity.Mathematics.float2x2
            public static mul ($a: Unity.Mathematics.float2x3, $b: Unity.Mathematics.float3x3) : Unity.Mathematics.float2x3
            public static mul ($a: Unity.Mathematics.float2x3, $b: Unity.Mathematics.float3x4) : Unity.Mathematics.float2x4
            public static mul ($a: Unity.Mathematics.float2x4, $b: Unity.Mathematics.float4) : Unity.Mathematics.float2
            public static mul ($a: Unity.Mathematics.float2x4, $b: Unity.Mathematics.float4x2) : Unity.Mathematics.float2x2
            public static mul ($a: Unity.Mathematics.float2x4, $b: Unity.Mathematics.float4x3) : Unity.Mathematics.float2x3
            public static mul ($a: Unity.Mathematics.float2x4, $b: Unity.Mathematics.float4x4) : Unity.Mathematics.float2x4
            public static mul ($a: Unity.Mathematics.float3x2, $b: Unity.Mathematics.float2) : Unity.Mathematics.float3
            public static mul ($a: Unity.Mathematics.float3x2, $b: Unity.Mathematics.float2x2) : Unity.Mathematics.float3x2
            public static mul ($a: Unity.Mathematics.float3x2, $b: Unity.Mathematics.float2x3) : Unity.Mathematics.float3x3
            public static mul ($a: Unity.Mathematics.float3x2, $b: Unity.Mathematics.float2x4) : Unity.Mathematics.float3x4
            public static mul ($a: Unity.Mathematics.float3x3, $b: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static mul ($a: Unity.Mathematics.float3x3, $b: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static mul ($a: Unity.Mathematics.float3x3, $b: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static mul ($a: Unity.Mathematics.float3x3, $b: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static mul ($a: Unity.Mathematics.float3x4, $b: Unity.Mathematics.float4) : Unity.Mathematics.float3
            public static mul ($a: Unity.Mathematics.float3x4, $b: Unity.Mathematics.float4x2) : Unity.Mathematics.float3x2
            public static mul ($a: Unity.Mathematics.float3x4, $b: Unity.Mathematics.float4x3) : Unity.Mathematics.float3x3
            public static mul ($a: Unity.Mathematics.float3x4, $b: Unity.Mathematics.float4x4) : Unity.Mathematics.float3x4
            public static mul ($a: Unity.Mathematics.float4x2, $b: Unity.Mathematics.float2) : Unity.Mathematics.float4
            public static mul ($a: Unity.Mathematics.float4x2, $b: Unity.Mathematics.float2x2) : Unity.Mathematics.float4x2
            public static mul ($a: Unity.Mathematics.float4x2, $b: Unity.Mathematics.float2x3) : Unity.Mathematics.float4x3
            public static mul ($a: Unity.Mathematics.float4x2, $b: Unity.Mathematics.float2x4) : Unity.Mathematics.float4x4
            public static mul ($a: Unity.Mathematics.float4x3, $b: Unity.Mathematics.float3) : Unity.Mathematics.float4
            public static mul ($a: Unity.Mathematics.float4x3, $b: Unity.Mathematics.float3x2) : Unity.Mathematics.float4x2
            public static mul ($a: Unity.Mathematics.float4x3, $b: Unity.Mathematics.float3x3) : Unity.Mathematics.float4x3
            public static mul ($a: Unity.Mathematics.float4x3, $b: Unity.Mathematics.float3x4) : Unity.Mathematics.float4x4
            public static mul ($a: Unity.Mathematics.float4x4, $b: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static mul ($a: Unity.Mathematics.float4x4, $b: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static mul ($a: Unity.Mathematics.float4x4, $b: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static mul ($a: Unity.Mathematics.float4x4, $b: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static mul ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2) : number
            public static mul ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2x2) : Unity.Mathematics.double2
            public static mul ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2x3) : Unity.Mathematics.double3
            public static mul ($a: Unity.Mathematics.double2, $b: Unity.Mathematics.double2x4) : Unity.Mathematics.double4
            public static mul ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3) : number
            public static mul ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3x2) : Unity.Mathematics.double2
            public static mul ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3x3) : Unity.Mathematics.double3
            public static mul ($a: Unity.Mathematics.double3, $b: Unity.Mathematics.double3x4) : Unity.Mathematics.double4
            public static mul ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4) : number
            public static mul ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4x2) : Unity.Mathematics.double2
            public static mul ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4x3) : Unity.Mathematics.double3
            public static mul ($a: Unity.Mathematics.double4, $b: Unity.Mathematics.double4x4) : Unity.Mathematics.double4
            public static mul ($a: Unity.Mathematics.double2x2, $b: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static mul ($a: Unity.Mathematics.double2x2, $b: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static mul ($a: Unity.Mathematics.double2x2, $b: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static mul ($a: Unity.Mathematics.double2x2, $b: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static mul ($a: Unity.Mathematics.double2x3, $b: Unity.Mathematics.double3) : Unity.Mathematics.double2
            public static mul ($a: Unity.Mathematics.double2x3, $b: Unity.Mathematics.double3x2) : Unity.Mathematics.double2x2
            public static mul ($a: Unity.Mathematics.double2x3, $b: Unity.Mathematics.double3x3) : Unity.Mathematics.double2x3
            public static mul ($a: Unity.Mathematics.double2x3, $b: Unity.Mathematics.double3x4) : Unity.Mathematics.double2x4
            public static mul ($a: Unity.Mathematics.double2x4, $b: Unity.Mathematics.double4) : Unity.Mathematics.double2
            public static mul ($a: Unity.Mathematics.double2x4, $b: Unity.Mathematics.double4x2) : Unity.Mathematics.double2x2
            public static mul ($a: Unity.Mathematics.double2x4, $b: Unity.Mathematics.double4x3) : Unity.Mathematics.double2x3
            public static mul ($a: Unity.Mathematics.double2x4, $b: Unity.Mathematics.double4x4) : Unity.Mathematics.double2x4
            public static mul ($a: Unity.Mathematics.double3x2, $b: Unity.Mathematics.double2) : Unity.Mathematics.double3
            public static mul ($a: Unity.Mathematics.double3x2, $b: Unity.Mathematics.double2x2) : Unity.Mathematics.double3x2
            public static mul ($a: Unity.Mathematics.double3x2, $b: Unity.Mathematics.double2x3) : Unity.Mathematics.double3x3
            public static mul ($a: Unity.Mathematics.double3x2, $b: Unity.Mathematics.double2x4) : Unity.Mathematics.double3x4
            public static mul ($a: Unity.Mathematics.double3x3, $b: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static mul ($a: Unity.Mathematics.double3x3, $b: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static mul ($a: Unity.Mathematics.double3x3, $b: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static mul ($a: Unity.Mathematics.double3x3, $b: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static mul ($a: Unity.Mathematics.double3x4, $b: Unity.Mathematics.double4) : Unity.Mathematics.double3
            public static mul ($a: Unity.Mathematics.double3x4, $b: Unity.Mathematics.double4x2) : Unity.Mathematics.double3x2
            public static mul ($a: Unity.Mathematics.double3x4, $b: Unity.Mathematics.double4x3) : Unity.Mathematics.double3x3
            public static mul ($a: Unity.Mathematics.double3x4, $b: Unity.Mathematics.double4x4) : Unity.Mathematics.double3x4
            public static mul ($a: Unity.Mathematics.double4x2, $b: Unity.Mathematics.double2) : Unity.Mathematics.double4
            public static mul ($a: Unity.Mathematics.double4x2, $b: Unity.Mathematics.double2x2) : Unity.Mathematics.double4x2
            public static mul ($a: Unity.Mathematics.double4x2, $b: Unity.Mathematics.double2x3) : Unity.Mathematics.double4x3
            public static mul ($a: Unity.Mathematics.double4x2, $b: Unity.Mathematics.double2x4) : Unity.Mathematics.double4x4
            public static mul ($a: Unity.Mathematics.double4x3, $b: Unity.Mathematics.double3) : Unity.Mathematics.double4
            public static mul ($a: Unity.Mathematics.double4x3, $b: Unity.Mathematics.double3x2) : Unity.Mathematics.double4x2
            public static mul ($a: Unity.Mathematics.double4x3, $b: Unity.Mathematics.double3x3) : Unity.Mathematics.double4x3
            public static mul ($a: Unity.Mathematics.double4x3, $b: Unity.Mathematics.double3x4) : Unity.Mathematics.double4x4
            public static mul ($a: Unity.Mathematics.double4x4, $b: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static mul ($a: Unity.Mathematics.double4x4, $b: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static mul ($a: Unity.Mathematics.double4x4, $b: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static mul ($a: Unity.Mathematics.double4x4, $b: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static mul ($a: Unity.Mathematics.int2, $b: Unity.Mathematics.int2) : number
            public static mul ($a: Unity.Mathematics.int2, $b: Unity.Mathematics.int2x2) : Unity.Mathematics.int2
            public static mul ($a: Unity.Mathematics.int2, $b: Unity.Mathematics.int2x3) : Unity.Mathematics.int3
            public static mul ($a: Unity.Mathematics.int2, $b: Unity.Mathematics.int2x4) : Unity.Mathematics.int4
            public static mul ($a: Unity.Mathematics.int3, $b: Unity.Mathematics.int3) : number
            public static mul ($a: Unity.Mathematics.int3, $b: Unity.Mathematics.int3x2) : Unity.Mathematics.int2
            public static mul ($a: Unity.Mathematics.int3, $b: Unity.Mathematics.int3x3) : Unity.Mathematics.int3
            public static mul ($a: Unity.Mathematics.int3, $b: Unity.Mathematics.int3x4) : Unity.Mathematics.int4
            public static mul ($a: Unity.Mathematics.int4, $b: Unity.Mathematics.int4) : number
            public static mul ($a: Unity.Mathematics.int4, $b: Unity.Mathematics.int4x2) : Unity.Mathematics.int2
            public static mul ($a: Unity.Mathematics.int4, $b: Unity.Mathematics.int4x3) : Unity.Mathematics.int3
            public static mul ($a: Unity.Mathematics.int4, $b: Unity.Mathematics.int4x4) : Unity.Mathematics.int4
            public static mul ($a: Unity.Mathematics.int2x2, $b: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static mul ($a: Unity.Mathematics.int2x2, $b: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static mul ($a: Unity.Mathematics.int2x2, $b: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static mul ($a: Unity.Mathematics.int2x2, $b: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static mul ($a: Unity.Mathematics.int2x3, $b: Unity.Mathematics.int3) : Unity.Mathematics.int2
            public static mul ($a: Unity.Mathematics.int2x3, $b: Unity.Mathematics.int3x2) : Unity.Mathematics.int2x2
            public static mul ($a: Unity.Mathematics.int2x3, $b: Unity.Mathematics.int3x3) : Unity.Mathematics.int2x3
            public static mul ($a: Unity.Mathematics.int2x3, $b: Unity.Mathematics.int3x4) : Unity.Mathematics.int2x4
            public static mul ($a: Unity.Mathematics.int2x4, $b: Unity.Mathematics.int4) : Unity.Mathematics.int2
            public static mul ($a: Unity.Mathematics.int2x4, $b: Unity.Mathematics.int4x2) : Unity.Mathematics.int2x2
            public static mul ($a: Unity.Mathematics.int2x4, $b: Unity.Mathematics.int4x3) : Unity.Mathematics.int2x3
            public static mul ($a: Unity.Mathematics.int2x4, $b: Unity.Mathematics.int4x4) : Unity.Mathematics.int2x4
            public static mul ($a: Unity.Mathematics.int3x2, $b: Unity.Mathematics.int2) : Unity.Mathematics.int3
            public static mul ($a: Unity.Mathematics.int3x2, $b: Unity.Mathematics.int2x2) : Unity.Mathematics.int3x2
            public static mul ($a: Unity.Mathematics.int3x2, $b: Unity.Mathematics.int2x3) : Unity.Mathematics.int3x3
            public static mul ($a: Unity.Mathematics.int3x2, $b: Unity.Mathematics.int2x4) : Unity.Mathematics.int3x4
            public static mul ($a: Unity.Mathematics.int3x3, $b: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static mul ($a: Unity.Mathematics.int3x3, $b: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static mul ($a: Unity.Mathematics.int3x3, $b: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static mul ($a: Unity.Mathematics.int3x3, $b: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static mul ($a: Unity.Mathematics.int3x4, $b: Unity.Mathematics.int4) : Unity.Mathematics.int3
            public static mul ($a: Unity.Mathematics.int3x4, $b: Unity.Mathematics.int4x2) : Unity.Mathematics.int3x2
            public static mul ($a: Unity.Mathematics.int3x4, $b: Unity.Mathematics.int4x3) : Unity.Mathematics.int3x3
            public static mul ($a: Unity.Mathematics.int3x4, $b: Unity.Mathematics.int4x4) : Unity.Mathematics.int3x4
            public static mul ($a: Unity.Mathematics.int4x2, $b: Unity.Mathematics.int2) : Unity.Mathematics.int4
            public static mul ($a: Unity.Mathematics.int4x2, $b: Unity.Mathematics.int2x2) : Unity.Mathematics.int4x2
            public static mul ($a: Unity.Mathematics.int4x2, $b: Unity.Mathematics.int2x3) : Unity.Mathematics.int4x3
            public static mul ($a: Unity.Mathematics.int4x2, $b: Unity.Mathematics.int2x4) : Unity.Mathematics.int4x4
            public static mul ($a: Unity.Mathematics.int4x3, $b: Unity.Mathematics.int3) : Unity.Mathematics.int4
            public static mul ($a: Unity.Mathematics.int4x3, $b: Unity.Mathematics.int3x2) : Unity.Mathematics.int4x2
            public static mul ($a: Unity.Mathematics.int4x3, $b: Unity.Mathematics.int3x3) : Unity.Mathematics.int4x3
            public static mul ($a: Unity.Mathematics.int4x3, $b: Unity.Mathematics.int3x4) : Unity.Mathematics.int4x4
            public static mul ($a: Unity.Mathematics.int4x4, $b: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static mul ($a: Unity.Mathematics.int4x4, $b: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static mul ($a: Unity.Mathematics.int4x4, $b: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static mul ($a: Unity.Mathematics.int4x4, $b: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static mul ($a: Unity.Mathematics.uint2, $b: Unity.Mathematics.uint2) : number
            public static mul ($a: Unity.Mathematics.uint2, $b: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2
            public static mul ($a: Unity.Mathematics.uint2, $b: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint3
            public static mul ($a: Unity.Mathematics.uint2, $b: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint4
            public static mul ($a: Unity.Mathematics.uint3, $b: Unity.Mathematics.uint3) : number
            public static mul ($a: Unity.Mathematics.uint3, $b: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint2
            public static mul ($a: Unity.Mathematics.uint3, $b: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3
            public static mul ($a: Unity.Mathematics.uint3, $b: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint4
            public static mul ($a: Unity.Mathematics.uint4, $b: Unity.Mathematics.uint4) : number
            public static mul ($a: Unity.Mathematics.uint4, $b: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint2
            public static mul ($a: Unity.Mathematics.uint4, $b: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint3
            public static mul ($a: Unity.Mathematics.uint4, $b: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4
            public static mul ($a: Unity.Mathematics.uint2x2, $b: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static mul ($a: Unity.Mathematics.uint2x2, $b: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static mul ($a: Unity.Mathematics.uint2x2, $b: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static mul ($a: Unity.Mathematics.uint2x2, $b: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static mul ($a: Unity.Mathematics.uint2x3, $b: Unity.Mathematics.uint3) : Unity.Mathematics.uint2
            public static mul ($a: Unity.Mathematics.uint2x3, $b: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint2x2
            public static mul ($a: Unity.Mathematics.uint2x3, $b: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint2x3
            public static mul ($a: Unity.Mathematics.uint2x3, $b: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint2x4
            public static mul ($a: Unity.Mathematics.uint2x4, $b: Unity.Mathematics.uint4) : Unity.Mathematics.uint2
            public static mul ($a: Unity.Mathematics.uint2x4, $b: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint2x2
            public static mul ($a: Unity.Mathematics.uint2x4, $b: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint2x3
            public static mul ($a: Unity.Mathematics.uint2x4, $b: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint2x4
            public static mul ($a: Unity.Mathematics.uint3x2, $b: Unity.Mathematics.uint2) : Unity.Mathematics.uint3
            public static mul ($a: Unity.Mathematics.uint3x2, $b: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint3x2
            public static mul ($a: Unity.Mathematics.uint3x2, $b: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint3x3
            public static mul ($a: Unity.Mathematics.uint3x2, $b: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint3x4
            public static mul ($a: Unity.Mathematics.uint3x3, $b: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static mul ($a: Unity.Mathematics.uint3x3, $b: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static mul ($a: Unity.Mathematics.uint3x3, $b: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static mul ($a: Unity.Mathematics.uint3x3, $b: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static mul ($a: Unity.Mathematics.uint3x4, $b: Unity.Mathematics.uint4) : Unity.Mathematics.uint3
            public static mul ($a: Unity.Mathematics.uint3x4, $b: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint3x2
            public static mul ($a: Unity.Mathematics.uint3x4, $b: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint3x3
            public static mul ($a: Unity.Mathematics.uint3x4, $b: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint3x4
            public static mul ($a: Unity.Mathematics.uint4x2, $b: Unity.Mathematics.uint2) : Unity.Mathematics.uint4
            public static mul ($a: Unity.Mathematics.uint4x2, $b: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint4x2
            public static mul ($a: Unity.Mathematics.uint4x2, $b: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint4x3
            public static mul ($a: Unity.Mathematics.uint4x2, $b: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint4x4
            public static mul ($a: Unity.Mathematics.uint4x3, $b: Unity.Mathematics.uint3) : Unity.Mathematics.uint4
            public static mul ($a: Unity.Mathematics.uint4x3, $b: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint4x2
            public static mul ($a: Unity.Mathematics.uint4x3, $b: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint4x3
            public static mul ($a: Unity.Mathematics.uint4x3, $b: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint4x4
            public static mul ($a: Unity.Mathematics.uint4x4, $b: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static mul ($a: Unity.Mathematics.uint4x4, $b: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static mul ($a: Unity.Mathematics.uint4x4, $b: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static mul ($a: Unity.Mathematics.uint4x4, $b: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static quaternion ($x: number, $y: number, $z: number, $w: number) : Unity.Mathematics.quaternion
            public static quaternion ($value: Unity.Mathematics.float4) : Unity.Mathematics.quaternion
            public static quaternion ($m: Unity.Mathematics.float3x3) : Unity.Mathematics.quaternion
            public static quaternion ($m: Unity.Mathematics.float4x4) : Unity.Mathematics.quaternion
            public static conjugate ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static inverse ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static dot ($a: Unity.Mathematics.quaternion, $b: Unity.Mathematics.quaternion) : number
            public static length ($q: Unity.Mathematics.quaternion) : number
            public static lengthsq ($q: Unity.Mathematics.quaternion) : number
            public static normalize ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static normalizesafe ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static normalizesafe ($q: Unity.Mathematics.quaternion, $defaultvalue: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static unitexp ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static exp ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static unitlog ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static log ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static mul ($a: Unity.Mathematics.quaternion, $b: Unity.Mathematics.quaternion) : Unity.Mathematics.quaternion
            public static mul ($q: Unity.Mathematics.quaternion, $v: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static rotate ($q: Unity.Mathematics.quaternion, $v: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static nlerp ($q1: Unity.Mathematics.quaternion, $q2: Unity.Mathematics.quaternion, $t: number) : Unity.Mathematics.quaternion
            public static slerp ($q1: Unity.Mathematics.quaternion, $q2: Unity.Mathematics.quaternion, $t: number) : Unity.Mathematics.quaternion
            public static hash ($q: Unity.Mathematics.quaternion) : number
            public static hashwide ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.uint4
            public static forward ($q: Unity.Mathematics.quaternion) : Unity.Mathematics.float3
            public static RigidTransform ($rot: Unity.Mathematics.quaternion, $pos: Unity.Mathematics.float3) : Unity.Mathematics.RigidTransform
            public static RigidTransform ($rotation: Unity.Mathematics.float3x3, $translation: Unity.Mathematics.float3) : Unity.Mathematics.RigidTransform
            public static RigidTransform ($transform: Unity.Mathematics.float4x4) : Unity.Mathematics.RigidTransform
            public static inverse ($t: Unity.Mathematics.RigidTransform) : Unity.Mathematics.RigidTransform
            public static mul ($a: Unity.Mathematics.RigidTransform, $b: Unity.Mathematics.RigidTransform) : Unity.Mathematics.RigidTransform
            public static mul ($a: Unity.Mathematics.RigidTransform, $pos: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static rotate ($a: Unity.Mathematics.RigidTransform, $dir: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static transform ($a: Unity.Mathematics.RigidTransform, $pos: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static hash ($t: Unity.Mathematics.RigidTransform) : number
            public static hashwide ($t: Unity.Mathematics.RigidTransform) : Unity.Mathematics.uint4
            public static uint2 ($x: number, $y: number) : Unity.Mathematics.uint2
            public static uint2 ($xy: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static uint2 ($v: number) : Unity.Mathematics.uint2
            public static uint2 ($v: boolean) : Unity.Mathematics.uint2
            public static uint2 ($v: Unity.Mathematics.bool2) : Unity.Mathematics.uint2
            public static uint2 ($v: Unity.Mathematics.int2) : Unity.Mathematics.uint2
            public static uint2 ($v: Unity.Mathematics.float2) : Unity.Mathematics.uint2
            public static uint2 ($v: Unity.Mathematics.double2) : Unity.Mathematics.uint2
            public static hash ($v: Unity.Mathematics.uint2) : number
            public static hashwide ($v: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static shuffle ($left: Unity.Mathematics.uint2, $right: Unity.Mathematics.uint2, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.uint2, $right: Unity.Mathematics.uint2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.uint2
            public static shuffle ($left: Unity.Mathematics.uint2, $right: Unity.Mathematics.uint2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.uint3
            public static shuffle ($left: Unity.Mathematics.uint2, $right: Unity.Mathematics.uint2, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.uint4
            public static uint2x2 ($c0: Unity.Mathematics.uint2, $c1: Unity.Mathematics.uint2) : Unity.Mathematics.uint2x2
            public static uint2x2 ($m00: number, $m01: number, $m10: number, $m11: number) : Unity.Mathematics.uint2x2
            public static uint2x2 ($v: number) : Unity.Mathematics.uint2x2
            public static uint2x2 ($v: boolean) : Unity.Mathematics.uint2x2
            public static uint2x2 ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.uint2x2
            public static uint2x2 ($v: Unity.Mathematics.int2x2) : Unity.Mathematics.uint2x2
            public static uint2x2 ($v: Unity.Mathematics.float2x2) : Unity.Mathematics.uint2x2
            public static uint2x2 ($v: Unity.Mathematics.double2x2) : Unity.Mathematics.uint2x2
            public static transpose ($v: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static hash ($v: Unity.Mathematics.uint2x2) : number
            public static hashwide ($v: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2
            public static uint2x3 ($c0: Unity.Mathematics.uint2, $c1: Unity.Mathematics.uint2, $c2: Unity.Mathematics.uint2) : Unity.Mathematics.uint2x3
            public static uint2x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number) : Unity.Mathematics.uint2x3
            public static uint2x3 ($v: number) : Unity.Mathematics.uint2x3
            public static uint2x3 ($v: boolean) : Unity.Mathematics.uint2x3
            public static uint2x3 ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.uint2x3
            public static uint2x3 ($v: Unity.Mathematics.int2x3) : Unity.Mathematics.uint2x3
            public static uint2x3 ($v: Unity.Mathematics.float2x3) : Unity.Mathematics.uint2x3
            public static uint2x3 ($v: Unity.Mathematics.double2x3) : Unity.Mathematics.uint2x3
            public static transpose ($v: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint3x2
            public static hash ($v: Unity.Mathematics.uint2x3) : number
            public static hashwide ($v: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2
            public static uint2x4 ($c0: Unity.Mathematics.uint2, $c1: Unity.Mathematics.uint2, $c2: Unity.Mathematics.uint2, $c3: Unity.Mathematics.uint2) : Unity.Mathematics.uint2x4
            public static uint2x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number) : Unity.Mathematics.uint2x4
            public static uint2x4 ($v: number) : Unity.Mathematics.uint2x4
            public static uint2x4 ($v: boolean) : Unity.Mathematics.uint2x4
            public static uint2x4 ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.uint2x4
            public static uint2x4 ($v: Unity.Mathematics.int2x4) : Unity.Mathematics.uint2x4
            public static uint2x4 ($v: Unity.Mathematics.float2x4) : Unity.Mathematics.uint2x4
            public static uint2x4 ($v: Unity.Mathematics.double2x4) : Unity.Mathematics.uint2x4
            public static transpose ($v: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint4x2
            public static hash ($v: Unity.Mathematics.uint2x4) : number
            public static hashwide ($v: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2
            public static uint3 ($x: number, $y: number, $z: number) : Unity.Mathematics.uint3
            public static uint3 ($x: number, $yz: Unity.Mathematics.uint2) : Unity.Mathematics.uint3
            public static uint3 ($xy: Unity.Mathematics.uint2, $z: number) : Unity.Mathematics.uint3
            public static uint3 ($xyz: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static uint3 ($v: number) : Unity.Mathematics.uint3
            public static uint3 ($v: boolean) : Unity.Mathematics.uint3
            public static uint3 ($v: Unity.Mathematics.bool3) : Unity.Mathematics.uint3
            public static uint3 ($v: Unity.Mathematics.int3) : Unity.Mathematics.uint3
            public static uint3 ($v: Unity.Mathematics.float3) : Unity.Mathematics.uint3
            public static uint3 ($v: Unity.Mathematics.double3) : Unity.Mathematics.uint3
            public static hash ($v: Unity.Mathematics.uint3) : number
            public static hashwide ($v: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static shuffle ($left: Unity.Mathematics.uint3, $right: Unity.Mathematics.uint3, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.uint3, $right: Unity.Mathematics.uint3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.uint2
            public static shuffle ($left: Unity.Mathematics.uint3, $right: Unity.Mathematics.uint3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.uint3
            public static shuffle ($left: Unity.Mathematics.uint3, $right: Unity.Mathematics.uint3, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.uint4
            public static uint3x2 ($c0: Unity.Mathematics.uint3, $c1: Unity.Mathematics.uint3) : Unity.Mathematics.uint3x2
            public static uint3x2 ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number) : Unity.Mathematics.uint3x2
            public static uint3x2 ($v: number) : Unity.Mathematics.uint3x2
            public static uint3x2 ($v: boolean) : Unity.Mathematics.uint3x2
            public static uint3x2 ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.uint3x2
            public static uint3x2 ($v: Unity.Mathematics.int3x2) : Unity.Mathematics.uint3x2
            public static uint3x2 ($v: Unity.Mathematics.float3x2) : Unity.Mathematics.uint3x2
            public static uint3x2 ($v: Unity.Mathematics.double3x2) : Unity.Mathematics.uint3x2
            public static transpose ($v: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint2x3
            public static hash ($v: Unity.Mathematics.uint3x2) : number
            public static hashwide ($v: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3
            public static uint3x3 ($c0: Unity.Mathematics.uint3, $c1: Unity.Mathematics.uint3, $c2: Unity.Mathematics.uint3) : Unity.Mathematics.uint3x3
            public static uint3x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number) : Unity.Mathematics.uint3x3
            public static uint3x3 ($v: number) : Unity.Mathematics.uint3x3
            public static uint3x3 ($v: boolean) : Unity.Mathematics.uint3x3
            public static uint3x3 ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.uint3x3
            public static uint3x3 ($v: Unity.Mathematics.int3x3) : Unity.Mathematics.uint3x3
            public static uint3x3 ($v: Unity.Mathematics.float3x3) : Unity.Mathematics.uint3x3
            public static uint3x3 ($v: Unity.Mathematics.double3x3) : Unity.Mathematics.uint3x3
            public static transpose ($v: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static hash ($v: Unity.Mathematics.uint3x3) : number
            public static hashwide ($v: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3
            public static uint3x4 ($c0: Unity.Mathematics.uint3, $c1: Unity.Mathematics.uint3, $c2: Unity.Mathematics.uint3, $c3: Unity.Mathematics.uint3) : Unity.Mathematics.uint3x4
            public static uint3x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number) : Unity.Mathematics.uint3x4
            public static uint3x4 ($v: number) : Unity.Mathematics.uint3x4
            public static uint3x4 ($v: boolean) : Unity.Mathematics.uint3x4
            public static uint3x4 ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.uint3x4
            public static uint3x4 ($v: Unity.Mathematics.int3x4) : Unity.Mathematics.uint3x4
            public static uint3x4 ($v: Unity.Mathematics.float3x4) : Unity.Mathematics.uint3x4
            public static uint3x4 ($v: Unity.Mathematics.double3x4) : Unity.Mathematics.uint3x4
            public static transpose ($v: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint4x3
            public static hash ($v: Unity.Mathematics.uint3x4) : number
            public static hashwide ($v: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3
            public static uint4 ($x: number, $y: number, $z: number, $w: number) : Unity.Mathematics.uint4
            public static uint4 ($x: number, $y: number, $zw: Unity.Mathematics.uint2) : Unity.Mathematics.uint4
            public static uint4 ($x: number, $yz: Unity.Mathematics.uint2, $w: number) : Unity.Mathematics.uint4
            public static uint4 ($x: number, $yzw: Unity.Mathematics.uint3) : Unity.Mathematics.uint4
            public static uint4 ($xy: Unity.Mathematics.uint2, $z: number, $w: number) : Unity.Mathematics.uint4
            public static uint4 ($xy: Unity.Mathematics.uint2, $zw: Unity.Mathematics.uint2) : Unity.Mathematics.uint4
            public static uint4 ($xyz: Unity.Mathematics.uint3, $w: number) : Unity.Mathematics.uint4
            public static uint4 ($xyzw: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static uint4 ($v: number) : Unity.Mathematics.uint4
            public static uint4 ($v: boolean) : Unity.Mathematics.uint4
            public static uint4 ($v: Unity.Mathematics.bool4) : Unity.Mathematics.uint4
            public static uint4 ($v: Unity.Mathematics.int4) : Unity.Mathematics.uint4
            public static uint4 ($v: Unity.Mathematics.float4) : Unity.Mathematics.uint4
            public static uint4 ($v: Unity.Mathematics.double4) : Unity.Mathematics.uint4
            public static hash ($v: Unity.Mathematics.uint4) : number
            public static hashwide ($v: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static shuffle ($left: Unity.Mathematics.uint4, $right: Unity.Mathematics.uint4, $x: Unity.Mathematics.math.ShuffleComponent) : number
            public static shuffle ($left: Unity.Mathematics.uint4, $right: Unity.Mathematics.uint4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.uint2
            public static shuffle ($left: Unity.Mathematics.uint4, $right: Unity.Mathematics.uint4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.uint3
            public static shuffle ($left: Unity.Mathematics.uint4, $right: Unity.Mathematics.uint4, $x: Unity.Mathematics.math.ShuffleComponent, $y: Unity.Mathematics.math.ShuffleComponent, $z: Unity.Mathematics.math.ShuffleComponent, $w: Unity.Mathematics.math.ShuffleComponent) : Unity.Mathematics.uint4
            public static uint4x2 ($c0: Unity.Mathematics.uint4, $c1: Unity.Mathematics.uint4) : Unity.Mathematics.uint4x2
            public static uint4x2 ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number, $m30: number, $m31: number) : Unity.Mathematics.uint4x2
            public static uint4x2 ($v: number) : Unity.Mathematics.uint4x2
            public static uint4x2 ($v: boolean) : Unity.Mathematics.uint4x2
            public static uint4x2 ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.uint4x2
            public static uint4x2 ($v: Unity.Mathematics.int4x2) : Unity.Mathematics.uint4x2
            public static uint4x2 ($v: Unity.Mathematics.float4x2) : Unity.Mathematics.uint4x2
            public static uint4x2 ($v: Unity.Mathematics.double4x2) : Unity.Mathematics.uint4x2
            public static transpose ($v: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint2x4
            public static hash ($v: Unity.Mathematics.uint4x2) : number
            public static hashwide ($v: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4
            public static uint4x3 ($c0: Unity.Mathematics.uint4, $c1: Unity.Mathematics.uint4, $c2: Unity.Mathematics.uint4) : Unity.Mathematics.uint4x3
            public static uint4x3 ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number, $m30: number, $m31: number, $m32: number) : Unity.Mathematics.uint4x3
            public static uint4x3 ($v: number) : Unity.Mathematics.uint4x3
            public static uint4x3 ($v: boolean) : Unity.Mathematics.uint4x3
            public static uint4x3 ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.uint4x3
            public static uint4x3 ($v: Unity.Mathematics.int4x3) : Unity.Mathematics.uint4x3
            public static uint4x3 ($v: Unity.Mathematics.float4x3) : Unity.Mathematics.uint4x3
            public static uint4x3 ($v: Unity.Mathematics.double4x3) : Unity.Mathematics.uint4x3
            public static transpose ($v: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint3x4
            public static hash ($v: Unity.Mathematics.uint4x3) : number
            public static hashwide ($v: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4
            public static uint4x4 ($c0: Unity.Mathematics.uint4, $c1: Unity.Mathematics.uint4, $c2: Unity.Mathematics.uint4, $c3: Unity.Mathematics.uint4) : Unity.Mathematics.uint4x4
            public static uint4x4 ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number, $m30: number, $m31: number, $m32: number, $m33: number) : Unity.Mathematics.uint4x4
            public static uint4x4 ($v: number) : Unity.Mathematics.uint4x4
            public static uint4x4 ($v: boolean) : Unity.Mathematics.uint4x4
            public static uint4x4 ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.uint4x4
            public static uint4x4 ($v: Unity.Mathematics.int4x4) : Unity.Mathematics.uint4x4
            public static uint4x4 ($v: Unity.Mathematics.float4x4) : Unity.Mathematics.uint4x4
            public static uint4x4 ($v: Unity.Mathematics.double4x4) : Unity.Mathematics.uint4x4
            public static transpose ($v: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static hash ($v: Unity.Mathematics.uint4x4) : number
            public static hashwide ($v: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4
        }
        class uint2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint2>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public static zero : Unity.Mathematics.uint2
            public get xxxx(): Unity.Mathematics.uint4;
            public get xxxy(): Unity.Mathematics.uint4;
            public get xxyx(): Unity.Mathematics.uint4;
            public get xxyy(): Unity.Mathematics.uint4;
            public get xyxx(): Unity.Mathematics.uint4;
            public get xyxy(): Unity.Mathematics.uint4;
            public get xyyx(): Unity.Mathematics.uint4;
            public get xyyy(): Unity.Mathematics.uint4;
            public get yxxx(): Unity.Mathematics.uint4;
            public get yxxy(): Unity.Mathematics.uint4;
            public get yxyx(): Unity.Mathematics.uint4;
            public get yxyy(): Unity.Mathematics.uint4;
            public get yyxx(): Unity.Mathematics.uint4;
            public get yyxy(): Unity.Mathematics.uint4;
            public get yyyx(): Unity.Mathematics.uint4;
            public get yyyy(): Unity.Mathematics.uint4;
            public get xxx(): Unity.Mathematics.uint3;
            public get xxy(): Unity.Mathematics.uint3;
            public get xyx(): Unity.Mathematics.uint3;
            public get xyy(): Unity.Mathematics.uint3;
            public get yxx(): Unity.Mathematics.uint3;
            public get yxy(): Unity.Mathematics.uint3;
            public get yyx(): Unity.Mathematics.uint3;
            public get yyy(): Unity.Mathematics.uint3;
            public get xx(): Unity.Mathematics.uint2;
            public get xy(): Unity.Mathematics.uint2;
            public set xy(value: Unity.Mathematics.uint2);
            public get yx(): Unity.Mathematics.uint2;
            public set yx(value: Unity.Mathematics.uint2);
            public get yy(): Unity.Mathematics.uint2;
            public static op_Implicit ($v: number) : Unity.Mathematics.uint2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint2
            public static op_Explicit ($v: Unity.Mathematics.bool2) : Unity.Mathematics.uint2
            public static op_Explicit ($v: number) : Unity.Mathematics.uint2
            public static op_Explicit ($v: Unity.Mathematics.int2) : Unity.Mathematics.uint2
            public static op_Explicit ($v: Unity.Mathematics.float2) : Unity.Mathematics.uint2
            public static op_Explicit ($v: Unity.Mathematics.double2) : Unity.Mathematics.uint2
            public static op_Multiply ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Multiply ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.uint2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Addition ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Addition ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.uint2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Subtraction ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Subtraction ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.uint2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Division ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Division ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.uint2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Modulus ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Modulus ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.uint2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Increment ($val: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_Decrement ($val: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_LessThan ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_LessThan ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.bool2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_UnaryNegation ($val: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_UnaryPlus ($val: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_LeftShift ($x: Unity.Mathematics.uint2, $n: number) : Unity.Mathematics.uint2
            public static op_RightShift ($x: Unity.Mathematics.uint2, $n: number) : Unity.Mathematics.uint2
            public static op_Equality ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.bool2
            public static op_OnesComplement ($val: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.uint2
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.uint2
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint2, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint2, $rhs: number) : Unity.Mathematics.uint2
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.uint2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number)
            public constructor ($xy: Unity.Mathematics.uint2)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2)
            public constructor ($v: Unity.Mathematics.int2)
            public constructor ($v: Unity.Mathematics.float2)
            public constructor ($v: Unity.Mathematics.double2)
        }
        class bool2x2 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool2x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.bool2
            public c1 : Unity.Mathematics.bool2
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: Unity.Mathematics.bool2x2, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: Unity.Mathematics.bool2x2, $rhs: boolean) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.bool2x2, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.bool2x2, $rhs: boolean) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_LogicalNot ($val: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool2x2, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool2x2, $rhs: boolean) : Unity.Mathematics.bool2x2
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool2x2, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool2x2, $rhs: boolean) : Unity.Mathematics.bool2x2
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool2x2, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool2x2, $rhs: boolean) : Unity.Mathematics.bool2x2
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool2x2) : Unity.Mathematics.bool2x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.bool2>
            public Equals ($rhs: Unity.Mathematics.bool2x2) : boolean
            public Equals ($o: any) : boolean
            public constructor ($c0: Unity.Mathematics.bool2, $c1: Unity.Mathematics.bool2)
            public constructor ($m00: boolean, $m01: boolean, $m10: boolean, $m11: boolean)
            public constructor ($v: boolean)
        }
        class bool2x3 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool2x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.bool2
            public c1 : Unity.Mathematics.bool2
            public c2 : Unity.Mathematics.bool2
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: Unity.Mathematics.bool2x3, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: Unity.Mathematics.bool2x3, $rhs: boolean) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.bool2x3, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.bool2x3, $rhs: boolean) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_LogicalNot ($val: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool2x3, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool2x3, $rhs: boolean) : Unity.Mathematics.bool2x3
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool2x3, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool2x3, $rhs: boolean) : Unity.Mathematics.bool2x3
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool2x3, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool2x3, $rhs: boolean) : Unity.Mathematics.bool2x3
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool2x3) : Unity.Mathematics.bool2x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.bool2>
            public Equals ($rhs: Unity.Mathematics.bool2x3) : boolean
            public Equals ($o: any) : boolean
            public constructor ($c0: Unity.Mathematics.bool2, $c1: Unity.Mathematics.bool2, $c2: Unity.Mathematics.bool2)
            public constructor ($m00: boolean, $m01: boolean, $m02: boolean, $m10: boolean, $m11: boolean, $m12: boolean)
            public constructor ($v: boolean)
        }
        class bool3x2 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool3x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.bool3
            public c1 : Unity.Mathematics.bool3
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: Unity.Mathematics.bool3x2, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: Unity.Mathematics.bool3x2, $rhs: boolean) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.bool3x2, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.bool3x2, $rhs: boolean) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_LogicalNot ($val: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool3x2, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool3x2, $rhs: boolean) : Unity.Mathematics.bool3x2
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool3x2, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool3x2, $rhs: boolean) : Unity.Mathematics.bool3x2
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool3x2, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool3x2, $rhs: boolean) : Unity.Mathematics.bool3x2
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool3x2) : Unity.Mathematics.bool3x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.bool3>
            public Equals ($rhs: Unity.Mathematics.bool3x2) : boolean
            public Equals ($o: any) : boolean
            public constructor ($c0: Unity.Mathematics.bool3, $c1: Unity.Mathematics.bool3)
            public constructor ($m00: boolean, $m01: boolean, $m10: boolean, $m11: boolean, $m20: boolean, $m21: boolean)
            public constructor ($v: boolean)
        }
        class bool2x4 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool2x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.bool2
            public c1 : Unity.Mathematics.bool2
            public c2 : Unity.Mathematics.bool2
            public c3 : Unity.Mathematics.bool2
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: Unity.Mathematics.bool2x4, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: Unity.Mathematics.bool2x4, $rhs: boolean) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.bool2x4, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.bool2x4, $rhs: boolean) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_LogicalNot ($val: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool2x4, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool2x4, $rhs: boolean) : Unity.Mathematics.bool2x4
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool2x4, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool2x4, $rhs: boolean) : Unity.Mathematics.bool2x4
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool2x4, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool2x4, $rhs: boolean) : Unity.Mathematics.bool2x4
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool2x4) : Unity.Mathematics.bool2x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.bool2>
            public Equals ($rhs: Unity.Mathematics.bool2x4) : boolean
            public Equals ($o: any) : boolean
            public constructor ($c0: Unity.Mathematics.bool2, $c1: Unity.Mathematics.bool2, $c2: Unity.Mathematics.bool2, $c3: Unity.Mathematics.bool2)
            public constructor ($m00: boolean, $m01: boolean, $m02: boolean, $m03: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m13: boolean)
            public constructor ($v: boolean)
        }
        class bool4x2 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool4x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.bool4
            public c1 : Unity.Mathematics.bool4
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: Unity.Mathematics.bool4x2, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: Unity.Mathematics.bool4x2, $rhs: boolean) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.bool4x2, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.bool4x2, $rhs: boolean) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_LogicalNot ($val: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool4x2, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool4x2, $rhs: boolean) : Unity.Mathematics.bool4x2
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool4x2, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool4x2, $rhs: boolean) : Unity.Mathematics.bool4x2
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool4x2, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool4x2, $rhs: boolean) : Unity.Mathematics.bool4x2
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool4x2) : Unity.Mathematics.bool4x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.bool4>
            public Equals ($rhs: Unity.Mathematics.bool4x2) : boolean
            public Equals ($o: any) : boolean
            public constructor ($c0: Unity.Mathematics.bool4, $c1: Unity.Mathematics.bool4)
            public constructor ($m00: boolean, $m01: boolean, $m10: boolean, $m11: boolean, $m20: boolean, $m21: boolean, $m30: boolean, $m31: boolean)
            public constructor ($v: boolean)
        }
        class uint3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint3>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public z : number
            public static zero : Unity.Mathematics.uint3
            public get xxxx(): Unity.Mathematics.uint4;
            public get xxxy(): Unity.Mathematics.uint4;
            public get xxxz(): Unity.Mathematics.uint4;
            public get xxyx(): Unity.Mathematics.uint4;
            public get xxyy(): Unity.Mathematics.uint4;
            public get xxyz(): Unity.Mathematics.uint4;
            public get xxzx(): Unity.Mathematics.uint4;
            public get xxzy(): Unity.Mathematics.uint4;
            public get xxzz(): Unity.Mathematics.uint4;
            public get xyxx(): Unity.Mathematics.uint4;
            public get xyxy(): Unity.Mathematics.uint4;
            public get xyxz(): Unity.Mathematics.uint4;
            public get xyyx(): Unity.Mathematics.uint4;
            public get xyyy(): Unity.Mathematics.uint4;
            public get xyyz(): Unity.Mathematics.uint4;
            public get xyzx(): Unity.Mathematics.uint4;
            public get xyzy(): Unity.Mathematics.uint4;
            public get xyzz(): Unity.Mathematics.uint4;
            public get xzxx(): Unity.Mathematics.uint4;
            public get xzxy(): Unity.Mathematics.uint4;
            public get xzxz(): Unity.Mathematics.uint4;
            public get xzyx(): Unity.Mathematics.uint4;
            public get xzyy(): Unity.Mathematics.uint4;
            public get xzyz(): Unity.Mathematics.uint4;
            public get xzzx(): Unity.Mathematics.uint4;
            public get xzzy(): Unity.Mathematics.uint4;
            public get xzzz(): Unity.Mathematics.uint4;
            public get yxxx(): Unity.Mathematics.uint4;
            public get yxxy(): Unity.Mathematics.uint4;
            public get yxxz(): Unity.Mathematics.uint4;
            public get yxyx(): Unity.Mathematics.uint4;
            public get yxyy(): Unity.Mathematics.uint4;
            public get yxyz(): Unity.Mathematics.uint4;
            public get yxzx(): Unity.Mathematics.uint4;
            public get yxzy(): Unity.Mathematics.uint4;
            public get yxzz(): Unity.Mathematics.uint4;
            public get yyxx(): Unity.Mathematics.uint4;
            public get yyxy(): Unity.Mathematics.uint4;
            public get yyxz(): Unity.Mathematics.uint4;
            public get yyyx(): Unity.Mathematics.uint4;
            public get yyyy(): Unity.Mathematics.uint4;
            public get yyyz(): Unity.Mathematics.uint4;
            public get yyzx(): Unity.Mathematics.uint4;
            public get yyzy(): Unity.Mathematics.uint4;
            public get yyzz(): Unity.Mathematics.uint4;
            public get yzxx(): Unity.Mathematics.uint4;
            public get yzxy(): Unity.Mathematics.uint4;
            public get yzxz(): Unity.Mathematics.uint4;
            public get yzyx(): Unity.Mathematics.uint4;
            public get yzyy(): Unity.Mathematics.uint4;
            public get yzyz(): Unity.Mathematics.uint4;
            public get yzzx(): Unity.Mathematics.uint4;
            public get yzzy(): Unity.Mathematics.uint4;
            public get yzzz(): Unity.Mathematics.uint4;
            public get zxxx(): Unity.Mathematics.uint4;
            public get zxxy(): Unity.Mathematics.uint4;
            public get zxxz(): Unity.Mathematics.uint4;
            public get zxyx(): Unity.Mathematics.uint4;
            public get zxyy(): Unity.Mathematics.uint4;
            public get zxyz(): Unity.Mathematics.uint4;
            public get zxzx(): Unity.Mathematics.uint4;
            public get zxzy(): Unity.Mathematics.uint4;
            public get zxzz(): Unity.Mathematics.uint4;
            public get zyxx(): Unity.Mathematics.uint4;
            public get zyxy(): Unity.Mathematics.uint4;
            public get zyxz(): Unity.Mathematics.uint4;
            public get zyyx(): Unity.Mathematics.uint4;
            public get zyyy(): Unity.Mathematics.uint4;
            public get zyyz(): Unity.Mathematics.uint4;
            public get zyzx(): Unity.Mathematics.uint4;
            public get zyzy(): Unity.Mathematics.uint4;
            public get zyzz(): Unity.Mathematics.uint4;
            public get zzxx(): Unity.Mathematics.uint4;
            public get zzxy(): Unity.Mathematics.uint4;
            public get zzxz(): Unity.Mathematics.uint4;
            public get zzyx(): Unity.Mathematics.uint4;
            public get zzyy(): Unity.Mathematics.uint4;
            public get zzyz(): Unity.Mathematics.uint4;
            public get zzzx(): Unity.Mathematics.uint4;
            public get zzzy(): Unity.Mathematics.uint4;
            public get zzzz(): Unity.Mathematics.uint4;
            public get xxx(): Unity.Mathematics.uint3;
            public get xxy(): Unity.Mathematics.uint3;
            public get xxz(): Unity.Mathematics.uint3;
            public get xyx(): Unity.Mathematics.uint3;
            public get xyy(): Unity.Mathematics.uint3;
            public get xyz(): Unity.Mathematics.uint3;
            public set xyz(value: Unity.Mathematics.uint3);
            public get xzx(): Unity.Mathematics.uint3;
            public get xzy(): Unity.Mathematics.uint3;
            public set xzy(value: Unity.Mathematics.uint3);
            public get xzz(): Unity.Mathematics.uint3;
            public get yxx(): Unity.Mathematics.uint3;
            public get yxy(): Unity.Mathematics.uint3;
            public get yxz(): Unity.Mathematics.uint3;
            public set yxz(value: Unity.Mathematics.uint3);
            public get yyx(): Unity.Mathematics.uint3;
            public get yyy(): Unity.Mathematics.uint3;
            public get yyz(): Unity.Mathematics.uint3;
            public get yzx(): Unity.Mathematics.uint3;
            public set yzx(value: Unity.Mathematics.uint3);
            public get yzy(): Unity.Mathematics.uint3;
            public get yzz(): Unity.Mathematics.uint3;
            public get zxx(): Unity.Mathematics.uint3;
            public get zxy(): Unity.Mathematics.uint3;
            public set zxy(value: Unity.Mathematics.uint3);
            public get zxz(): Unity.Mathematics.uint3;
            public get zyx(): Unity.Mathematics.uint3;
            public set zyx(value: Unity.Mathematics.uint3);
            public get zyy(): Unity.Mathematics.uint3;
            public get zyz(): Unity.Mathematics.uint3;
            public get zzx(): Unity.Mathematics.uint3;
            public get zzy(): Unity.Mathematics.uint3;
            public get zzz(): Unity.Mathematics.uint3;
            public get xx(): Unity.Mathematics.uint2;
            public get xy(): Unity.Mathematics.uint2;
            public set xy(value: Unity.Mathematics.uint2);
            public get xz(): Unity.Mathematics.uint2;
            public set xz(value: Unity.Mathematics.uint2);
            public get yx(): Unity.Mathematics.uint2;
            public set yx(value: Unity.Mathematics.uint2);
            public get yy(): Unity.Mathematics.uint2;
            public get yz(): Unity.Mathematics.uint2;
            public set yz(value: Unity.Mathematics.uint2);
            public get zx(): Unity.Mathematics.uint2;
            public set zx(value: Unity.Mathematics.uint2);
            public get zy(): Unity.Mathematics.uint2;
            public set zy(value: Unity.Mathematics.uint2);
            public get zz(): Unity.Mathematics.uint2;
            public static op_Implicit ($v: number) : Unity.Mathematics.uint3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint3
            public static op_Explicit ($v: Unity.Mathematics.bool3) : Unity.Mathematics.uint3
            public static op_Explicit ($v: number) : Unity.Mathematics.uint3
            public static op_Explicit ($v: Unity.Mathematics.int3) : Unity.Mathematics.uint3
            public static op_Explicit ($v: Unity.Mathematics.float3) : Unity.Mathematics.uint3
            public static op_Explicit ($v: Unity.Mathematics.double3) : Unity.Mathematics.uint3
            public static op_Multiply ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Multiply ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.uint3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Addition ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Addition ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.uint3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Subtraction ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Subtraction ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.uint3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Division ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Division ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.uint3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Modulus ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Modulus ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.uint3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Increment ($val: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_Decrement ($val: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_LessThan ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_LessThan ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.bool3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_UnaryNegation ($val: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_UnaryPlus ($val: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_LeftShift ($x: Unity.Mathematics.uint3, $n: number) : Unity.Mathematics.uint3
            public static op_RightShift ($x: Unity.Mathematics.uint3, $n: number) : Unity.Mathematics.uint3
            public static op_Equality ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.bool3
            public static op_OnesComplement ($val: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.uint3
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.uint3
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint3, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint3, $rhs: number) : Unity.Mathematics.uint3
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.uint3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $yz: Unity.Mathematics.uint2)
            public constructor ($xy: Unity.Mathematics.uint2, $z: number)
            public constructor ($xyz: Unity.Mathematics.uint3)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3)
            public constructor ($v: Unity.Mathematics.int3)
            public constructor ($v: Unity.Mathematics.float3)
            public constructor ($v: Unity.Mathematics.double3)
        }
        class bool3x3 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool3x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.bool3
            public c1 : Unity.Mathematics.bool3
            public c2 : Unity.Mathematics.bool3
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: Unity.Mathematics.bool3x3, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: Unity.Mathematics.bool3x3, $rhs: boolean) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.bool3x3, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.bool3x3, $rhs: boolean) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_LogicalNot ($val: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool3x3, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool3x3, $rhs: boolean) : Unity.Mathematics.bool3x3
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool3x3, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool3x3, $rhs: boolean) : Unity.Mathematics.bool3x3
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool3x3, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool3x3, $rhs: boolean) : Unity.Mathematics.bool3x3
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool3x3) : Unity.Mathematics.bool3x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.bool3>
            public Equals ($rhs: Unity.Mathematics.bool3x3) : boolean
            public Equals ($o: any) : boolean
            public constructor ($c0: Unity.Mathematics.bool3, $c1: Unity.Mathematics.bool3, $c2: Unity.Mathematics.bool3)
            public constructor ($m00: boolean, $m01: boolean, $m02: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m20: boolean, $m21: boolean, $m22: boolean)
            public constructor ($v: boolean)
        }
        class bool3x4 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool3x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.bool3
            public c1 : Unity.Mathematics.bool3
            public c2 : Unity.Mathematics.bool3
            public c3 : Unity.Mathematics.bool3
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: Unity.Mathematics.bool3x4, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: Unity.Mathematics.bool3x4, $rhs: boolean) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.bool3x4, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.bool3x4, $rhs: boolean) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_LogicalNot ($val: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool3x4, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool3x4, $rhs: boolean) : Unity.Mathematics.bool3x4
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool3x4, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool3x4, $rhs: boolean) : Unity.Mathematics.bool3x4
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool3x4, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool3x4, $rhs: boolean) : Unity.Mathematics.bool3x4
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool3x4) : Unity.Mathematics.bool3x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.bool3>
            public Equals ($rhs: Unity.Mathematics.bool3x4) : boolean
            public Equals ($o: any) : boolean
            public constructor ($c0: Unity.Mathematics.bool3, $c1: Unity.Mathematics.bool3, $c2: Unity.Mathematics.bool3, $c3: Unity.Mathematics.bool3)
            public constructor ($m00: boolean, $m01: boolean, $m02: boolean, $m03: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m13: boolean, $m20: boolean, $m21: boolean, $m22: boolean, $m23: boolean)
            public constructor ($v: boolean)
        }
        class bool4x3 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool4x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.bool4
            public c1 : Unity.Mathematics.bool4
            public c2 : Unity.Mathematics.bool4
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: Unity.Mathematics.bool4x3, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: Unity.Mathematics.bool4x3, $rhs: boolean) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.bool4x3, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.bool4x3, $rhs: boolean) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_LogicalNot ($val: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool4x3, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool4x3, $rhs: boolean) : Unity.Mathematics.bool4x3
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool4x3, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool4x3, $rhs: boolean) : Unity.Mathematics.bool4x3
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool4x3, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool4x3, $rhs: boolean) : Unity.Mathematics.bool4x3
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool4x3) : Unity.Mathematics.bool4x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.bool4>
            public Equals ($rhs: Unity.Mathematics.bool4x3) : boolean
            public Equals ($o: any) : boolean
            public constructor ($c0: Unity.Mathematics.bool4, $c1: Unity.Mathematics.bool4, $c2: Unity.Mathematics.bool4)
            public constructor ($m00: boolean, $m01: boolean, $m02: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m20: boolean, $m21: boolean, $m22: boolean, $m30: boolean, $m31: boolean, $m32: boolean)
            public constructor ($v: boolean)
        }
        class uint4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint4>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public z : number
            public w : number
            public static zero : Unity.Mathematics.uint4
            public get xxxx(): Unity.Mathematics.uint4;
            public get xxxy(): Unity.Mathematics.uint4;
            public get xxxz(): Unity.Mathematics.uint4;
            public get xxxw(): Unity.Mathematics.uint4;
            public get xxyx(): Unity.Mathematics.uint4;
            public get xxyy(): Unity.Mathematics.uint4;
            public get xxyz(): Unity.Mathematics.uint4;
            public get xxyw(): Unity.Mathematics.uint4;
            public get xxzx(): Unity.Mathematics.uint4;
            public get xxzy(): Unity.Mathematics.uint4;
            public get xxzz(): Unity.Mathematics.uint4;
            public get xxzw(): Unity.Mathematics.uint4;
            public get xxwx(): Unity.Mathematics.uint4;
            public get xxwy(): Unity.Mathematics.uint4;
            public get xxwz(): Unity.Mathematics.uint4;
            public get xxww(): Unity.Mathematics.uint4;
            public get xyxx(): Unity.Mathematics.uint4;
            public get xyxy(): Unity.Mathematics.uint4;
            public get xyxz(): Unity.Mathematics.uint4;
            public get xyxw(): Unity.Mathematics.uint4;
            public get xyyx(): Unity.Mathematics.uint4;
            public get xyyy(): Unity.Mathematics.uint4;
            public get xyyz(): Unity.Mathematics.uint4;
            public get xyyw(): Unity.Mathematics.uint4;
            public get xyzx(): Unity.Mathematics.uint4;
            public get xyzy(): Unity.Mathematics.uint4;
            public get xyzz(): Unity.Mathematics.uint4;
            public get xyzw(): Unity.Mathematics.uint4;
            public set xyzw(value: Unity.Mathematics.uint4);
            public get xywx(): Unity.Mathematics.uint4;
            public get xywy(): Unity.Mathematics.uint4;
            public get xywz(): Unity.Mathematics.uint4;
            public set xywz(value: Unity.Mathematics.uint4);
            public get xyww(): Unity.Mathematics.uint4;
            public get xzxx(): Unity.Mathematics.uint4;
            public get xzxy(): Unity.Mathematics.uint4;
            public get xzxz(): Unity.Mathematics.uint4;
            public get xzxw(): Unity.Mathematics.uint4;
            public get xzyx(): Unity.Mathematics.uint4;
            public get xzyy(): Unity.Mathematics.uint4;
            public get xzyz(): Unity.Mathematics.uint4;
            public get xzyw(): Unity.Mathematics.uint4;
            public set xzyw(value: Unity.Mathematics.uint4);
            public get xzzx(): Unity.Mathematics.uint4;
            public get xzzy(): Unity.Mathematics.uint4;
            public get xzzz(): Unity.Mathematics.uint4;
            public get xzzw(): Unity.Mathematics.uint4;
            public get xzwx(): Unity.Mathematics.uint4;
            public get xzwy(): Unity.Mathematics.uint4;
            public set xzwy(value: Unity.Mathematics.uint4);
            public get xzwz(): Unity.Mathematics.uint4;
            public get xzww(): Unity.Mathematics.uint4;
            public get xwxx(): Unity.Mathematics.uint4;
            public get xwxy(): Unity.Mathematics.uint4;
            public get xwxz(): Unity.Mathematics.uint4;
            public get xwxw(): Unity.Mathematics.uint4;
            public get xwyx(): Unity.Mathematics.uint4;
            public get xwyy(): Unity.Mathematics.uint4;
            public get xwyz(): Unity.Mathematics.uint4;
            public set xwyz(value: Unity.Mathematics.uint4);
            public get xwyw(): Unity.Mathematics.uint4;
            public get xwzx(): Unity.Mathematics.uint4;
            public get xwzy(): Unity.Mathematics.uint4;
            public set xwzy(value: Unity.Mathematics.uint4);
            public get xwzz(): Unity.Mathematics.uint4;
            public get xwzw(): Unity.Mathematics.uint4;
            public get xwwx(): Unity.Mathematics.uint4;
            public get xwwy(): Unity.Mathematics.uint4;
            public get xwwz(): Unity.Mathematics.uint4;
            public get xwww(): Unity.Mathematics.uint4;
            public get yxxx(): Unity.Mathematics.uint4;
            public get yxxy(): Unity.Mathematics.uint4;
            public get yxxz(): Unity.Mathematics.uint4;
            public get yxxw(): Unity.Mathematics.uint4;
            public get yxyx(): Unity.Mathematics.uint4;
            public get yxyy(): Unity.Mathematics.uint4;
            public get yxyz(): Unity.Mathematics.uint4;
            public get yxyw(): Unity.Mathematics.uint4;
            public get yxzx(): Unity.Mathematics.uint4;
            public get yxzy(): Unity.Mathematics.uint4;
            public get yxzz(): Unity.Mathematics.uint4;
            public get yxzw(): Unity.Mathematics.uint4;
            public set yxzw(value: Unity.Mathematics.uint4);
            public get yxwx(): Unity.Mathematics.uint4;
            public get yxwy(): Unity.Mathematics.uint4;
            public get yxwz(): Unity.Mathematics.uint4;
            public set yxwz(value: Unity.Mathematics.uint4);
            public get yxww(): Unity.Mathematics.uint4;
            public get yyxx(): Unity.Mathematics.uint4;
            public get yyxy(): Unity.Mathematics.uint4;
            public get yyxz(): Unity.Mathematics.uint4;
            public get yyxw(): Unity.Mathematics.uint4;
            public get yyyx(): Unity.Mathematics.uint4;
            public get yyyy(): Unity.Mathematics.uint4;
            public get yyyz(): Unity.Mathematics.uint4;
            public get yyyw(): Unity.Mathematics.uint4;
            public get yyzx(): Unity.Mathematics.uint4;
            public get yyzy(): Unity.Mathematics.uint4;
            public get yyzz(): Unity.Mathematics.uint4;
            public get yyzw(): Unity.Mathematics.uint4;
            public get yywx(): Unity.Mathematics.uint4;
            public get yywy(): Unity.Mathematics.uint4;
            public get yywz(): Unity.Mathematics.uint4;
            public get yyww(): Unity.Mathematics.uint4;
            public get yzxx(): Unity.Mathematics.uint4;
            public get yzxy(): Unity.Mathematics.uint4;
            public get yzxz(): Unity.Mathematics.uint4;
            public get yzxw(): Unity.Mathematics.uint4;
            public set yzxw(value: Unity.Mathematics.uint4);
            public get yzyx(): Unity.Mathematics.uint4;
            public get yzyy(): Unity.Mathematics.uint4;
            public get yzyz(): Unity.Mathematics.uint4;
            public get yzyw(): Unity.Mathematics.uint4;
            public get yzzx(): Unity.Mathematics.uint4;
            public get yzzy(): Unity.Mathematics.uint4;
            public get yzzz(): Unity.Mathematics.uint4;
            public get yzzw(): Unity.Mathematics.uint4;
            public get yzwx(): Unity.Mathematics.uint4;
            public set yzwx(value: Unity.Mathematics.uint4);
            public get yzwy(): Unity.Mathematics.uint4;
            public get yzwz(): Unity.Mathematics.uint4;
            public get yzww(): Unity.Mathematics.uint4;
            public get ywxx(): Unity.Mathematics.uint4;
            public get ywxy(): Unity.Mathematics.uint4;
            public get ywxz(): Unity.Mathematics.uint4;
            public set ywxz(value: Unity.Mathematics.uint4);
            public get ywxw(): Unity.Mathematics.uint4;
            public get ywyx(): Unity.Mathematics.uint4;
            public get ywyy(): Unity.Mathematics.uint4;
            public get ywyz(): Unity.Mathematics.uint4;
            public get ywyw(): Unity.Mathematics.uint4;
            public get ywzx(): Unity.Mathematics.uint4;
            public set ywzx(value: Unity.Mathematics.uint4);
            public get ywzy(): Unity.Mathematics.uint4;
            public get ywzz(): Unity.Mathematics.uint4;
            public get ywzw(): Unity.Mathematics.uint4;
            public get ywwx(): Unity.Mathematics.uint4;
            public get ywwy(): Unity.Mathematics.uint4;
            public get ywwz(): Unity.Mathematics.uint4;
            public get ywww(): Unity.Mathematics.uint4;
            public get zxxx(): Unity.Mathematics.uint4;
            public get zxxy(): Unity.Mathematics.uint4;
            public get zxxz(): Unity.Mathematics.uint4;
            public get zxxw(): Unity.Mathematics.uint4;
            public get zxyx(): Unity.Mathematics.uint4;
            public get zxyy(): Unity.Mathematics.uint4;
            public get zxyz(): Unity.Mathematics.uint4;
            public get zxyw(): Unity.Mathematics.uint4;
            public set zxyw(value: Unity.Mathematics.uint4);
            public get zxzx(): Unity.Mathematics.uint4;
            public get zxzy(): Unity.Mathematics.uint4;
            public get zxzz(): Unity.Mathematics.uint4;
            public get zxzw(): Unity.Mathematics.uint4;
            public get zxwx(): Unity.Mathematics.uint4;
            public get zxwy(): Unity.Mathematics.uint4;
            public set zxwy(value: Unity.Mathematics.uint4);
            public get zxwz(): Unity.Mathematics.uint4;
            public get zxww(): Unity.Mathematics.uint4;
            public get zyxx(): Unity.Mathematics.uint4;
            public get zyxy(): Unity.Mathematics.uint4;
            public get zyxz(): Unity.Mathematics.uint4;
            public get zyxw(): Unity.Mathematics.uint4;
            public set zyxw(value: Unity.Mathematics.uint4);
            public get zyyx(): Unity.Mathematics.uint4;
            public get zyyy(): Unity.Mathematics.uint4;
            public get zyyz(): Unity.Mathematics.uint4;
            public get zyyw(): Unity.Mathematics.uint4;
            public get zyzx(): Unity.Mathematics.uint4;
            public get zyzy(): Unity.Mathematics.uint4;
            public get zyzz(): Unity.Mathematics.uint4;
            public get zyzw(): Unity.Mathematics.uint4;
            public get zywx(): Unity.Mathematics.uint4;
            public set zywx(value: Unity.Mathematics.uint4);
            public get zywy(): Unity.Mathematics.uint4;
            public get zywz(): Unity.Mathematics.uint4;
            public get zyww(): Unity.Mathematics.uint4;
            public get zzxx(): Unity.Mathematics.uint4;
            public get zzxy(): Unity.Mathematics.uint4;
            public get zzxz(): Unity.Mathematics.uint4;
            public get zzxw(): Unity.Mathematics.uint4;
            public get zzyx(): Unity.Mathematics.uint4;
            public get zzyy(): Unity.Mathematics.uint4;
            public get zzyz(): Unity.Mathematics.uint4;
            public get zzyw(): Unity.Mathematics.uint4;
            public get zzzx(): Unity.Mathematics.uint4;
            public get zzzy(): Unity.Mathematics.uint4;
            public get zzzz(): Unity.Mathematics.uint4;
            public get zzzw(): Unity.Mathematics.uint4;
            public get zzwx(): Unity.Mathematics.uint4;
            public get zzwy(): Unity.Mathematics.uint4;
            public get zzwz(): Unity.Mathematics.uint4;
            public get zzww(): Unity.Mathematics.uint4;
            public get zwxx(): Unity.Mathematics.uint4;
            public get zwxy(): Unity.Mathematics.uint4;
            public set zwxy(value: Unity.Mathematics.uint4);
            public get zwxz(): Unity.Mathematics.uint4;
            public get zwxw(): Unity.Mathematics.uint4;
            public get zwyx(): Unity.Mathematics.uint4;
            public set zwyx(value: Unity.Mathematics.uint4);
            public get zwyy(): Unity.Mathematics.uint4;
            public get zwyz(): Unity.Mathematics.uint4;
            public get zwyw(): Unity.Mathematics.uint4;
            public get zwzx(): Unity.Mathematics.uint4;
            public get zwzy(): Unity.Mathematics.uint4;
            public get zwzz(): Unity.Mathematics.uint4;
            public get zwzw(): Unity.Mathematics.uint4;
            public get zwwx(): Unity.Mathematics.uint4;
            public get zwwy(): Unity.Mathematics.uint4;
            public get zwwz(): Unity.Mathematics.uint4;
            public get zwww(): Unity.Mathematics.uint4;
            public get wxxx(): Unity.Mathematics.uint4;
            public get wxxy(): Unity.Mathematics.uint4;
            public get wxxz(): Unity.Mathematics.uint4;
            public get wxxw(): Unity.Mathematics.uint4;
            public get wxyx(): Unity.Mathematics.uint4;
            public get wxyy(): Unity.Mathematics.uint4;
            public get wxyz(): Unity.Mathematics.uint4;
            public set wxyz(value: Unity.Mathematics.uint4);
            public get wxyw(): Unity.Mathematics.uint4;
            public get wxzx(): Unity.Mathematics.uint4;
            public get wxzy(): Unity.Mathematics.uint4;
            public set wxzy(value: Unity.Mathematics.uint4);
            public get wxzz(): Unity.Mathematics.uint4;
            public get wxzw(): Unity.Mathematics.uint4;
            public get wxwx(): Unity.Mathematics.uint4;
            public get wxwy(): Unity.Mathematics.uint4;
            public get wxwz(): Unity.Mathematics.uint4;
            public get wxww(): Unity.Mathematics.uint4;
            public get wyxx(): Unity.Mathematics.uint4;
            public get wyxy(): Unity.Mathematics.uint4;
            public get wyxz(): Unity.Mathematics.uint4;
            public set wyxz(value: Unity.Mathematics.uint4);
            public get wyxw(): Unity.Mathematics.uint4;
            public get wyyx(): Unity.Mathematics.uint4;
            public get wyyy(): Unity.Mathematics.uint4;
            public get wyyz(): Unity.Mathematics.uint4;
            public get wyyw(): Unity.Mathematics.uint4;
            public get wyzx(): Unity.Mathematics.uint4;
            public set wyzx(value: Unity.Mathematics.uint4);
            public get wyzy(): Unity.Mathematics.uint4;
            public get wyzz(): Unity.Mathematics.uint4;
            public get wyzw(): Unity.Mathematics.uint4;
            public get wywx(): Unity.Mathematics.uint4;
            public get wywy(): Unity.Mathematics.uint4;
            public get wywz(): Unity.Mathematics.uint4;
            public get wyww(): Unity.Mathematics.uint4;
            public get wzxx(): Unity.Mathematics.uint4;
            public get wzxy(): Unity.Mathematics.uint4;
            public set wzxy(value: Unity.Mathematics.uint4);
            public get wzxz(): Unity.Mathematics.uint4;
            public get wzxw(): Unity.Mathematics.uint4;
            public get wzyx(): Unity.Mathematics.uint4;
            public set wzyx(value: Unity.Mathematics.uint4);
            public get wzyy(): Unity.Mathematics.uint4;
            public get wzyz(): Unity.Mathematics.uint4;
            public get wzyw(): Unity.Mathematics.uint4;
            public get wzzx(): Unity.Mathematics.uint4;
            public get wzzy(): Unity.Mathematics.uint4;
            public get wzzz(): Unity.Mathematics.uint4;
            public get wzzw(): Unity.Mathematics.uint4;
            public get wzwx(): Unity.Mathematics.uint4;
            public get wzwy(): Unity.Mathematics.uint4;
            public get wzwz(): Unity.Mathematics.uint4;
            public get wzww(): Unity.Mathematics.uint4;
            public get wwxx(): Unity.Mathematics.uint4;
            public get wwxy(): Unity.Mathematics.uint4;
            public get wwxz(): Unity.Mathematics.uint4;
            public get wwxw(): Unity.Mathematics.uint4;
            public get wwyx(): Unity.Mathematics.uint4;
            public get wwyy(): Unity.Mathematics.uint4;
            public get wwyz(): Unity.Mathematics.uint4;
            public get wwyw(): Unity.Mathematics.uint4;
            public get wwzx(): Unity.Mathematics.uint4;
            public get wwzy(): Unity.Mathematics.uint4;
            public get wwzz(): Unity.Mathematics.uint4;
            public get wwzw(): Unity.Mathematics.uint4;
            public get wwwx(): Unity.Mathematics.uint4;
            public get wwwy(): Unity.Mathematics.uint4;
            public get wwwz(): Unity.Mathematics.uint4;
            public get wwww(): Unity.Mathematics.uint4;
            public get xxx(): Unity.Mathematics.uint3;
            public get xxy(): Unity.Mathematics.uint3;
            public get xxz(): Unity.Mathematics.uint3;
            public get xxw(): Unity.Mathematics.uint3;
            public get xyx(): Unity.Mathematics.uint3;
            public get xyy(): Unity.Mathematics.uint3;
            public get xyz(): Unity.Mathematics.uint3;
            public set xyz(value: Unity.Mathematics.uint3);
            public get xyw(): Unity.Mathematics.uint3;
            public set xyw(value: Unity.Mathematics.uint3);
            public get xzx(): Unity.Mathematics.uint3;
            public get xzy(): Unity.Mathematics.uint3;
            public set xzy(value: Unity.Mathematics.uint3);
            public get xzz(): Unity.Mathematics.uint3;
            public get xzw(): Unity.Mathematics.uint3;
            public set xzw(value: Unity.Mathematics.uint3);
            public get xwx(): Unity.Mathematics.uint3;
            public get xwy(): Unity.Mathematics.uint3;
            public set xwy(value: Unity.Mathematics.uint3);
            public get xwz(): Unity.Mathematics.uint3;
            public set xwz(value: Unity.Mathematics.uint3);
            public get xww(): Unity.Mathematics.uint3;
            public get yxx(): Unity.Mathematics.uint3;
            public get yxy(): Unity.Mathematics.uint3;
            public get yxz(): Unity.Mathematics.uint3;
            public set yxz(value: Unity.Mathematics.uint3);
            public get yxw(): Unity.Mathematics.uint3;
            public set yxw(value: Unity.Mathematics.uint3);
            public get yyx(): Unity.Mathematics.uint3;
            public get yyy(): Unity.Mathematics.uint3;
            public get yyz(): Unity.Mathematics.uint3;
            public get yyw(): Unity.Mathematics.uint3;
            public get yzx(): Unity.Mathematics.uint3;
            public set yzx(value: Unity.Mathematics.uint3);
            public get yzy(): Unity.Mathematics.uint3;
            public get yzz(): Unity.Mathematics.uint3;
            public get yzw(): Unity.Mathematics.uint3;
            public set yzw(value: Unity.Mathematics.uint3);
            public get ywx(): Unity.Mathematics.uint3;
            public set ywx(value: Unity.Mathematics.uint3);
            public get ywy(): Unity.Mathematics.uint3;
            public get ywz(): Unity.Mathematics.uint3;
            public set ywz(value: Unity.Mathematics.uint3);
            public get yww(): Unity.Mathematics.uint3;
            public get zxx(): Unity.Mathematics.uint3;
            public get zxy(): Unity.Mathematics.uint3;
            public set zxy(value: Unity.Mathematics.uint3);
            public get zxz(): Unity.Mathematics.uint3;
            public get zxw(): Unity.Mathematics.uint3;
            public set zxw(value: Unity.Mathematics.uint3);
            public get zyx(): Unity.Mathematics.uint3;
            public set zyx(value: Unity.Mathematics.uint3);
            public get zyy(): Unity.Mathematics.uint3;
            public get zyz(): Unity.Mathematics.uint3;
            public get zyw(): Unity.Mathematics.uint3;
            public set zyw(value: Unity.Mathematics.uint3);
            public get zzx(): Unity.Mathematics.uint3;
            public get zzy(): Unity.Mathematics.uint3;
            public get zzz(): Unity.Mathematics.uint3;
            public get zzw(): Unity.Mathematics.uint3;
            public get zwx(): Unity.Mathematics.uint3;
            public set zwx(value: Unity.Mathematics.uint3);
            public get zwy(): Unity.Mathematics.uint3;
            public set zwy(value: Unity.Mathematics.uint3);
            public get zwz(): Unity.Mathematics.uint3;
            public get zww(): Unity.Mathematics.uint3;
            public get wxx(): Unity.Mathematics.uint3;
            public get wxy(): Unity.Mathematics.uint3;
            public set wxy(value: Unity.Mathematics.uint3);
            public get wxz(): Unity.Mathematics.uint3;
            public set wxz(value: Unity.Mathematics.uint3);
            public get wxw(): Unity.Mathematics.uint3;
            public get wyx(): Unity.Mathematics.uint3;
            public set wyx(value: Unity.Mathematics.uint3);
            public get wyy(): Unity.Mathematics.uint3;
            public get wyz(): Unity.Mathematics.uint3;
            public set wyz(value: Unity.Mathematics.uint3);
            public get wyw(): Unity.Mathematics.uint3;
            public get wzx(): Unity.Mathematics.uint3;
            public set wzx(value: Unity.Mathematics.uint3);
            public get wzy(): Unity.Mathematics.uint3;
            public set wzy(value: Unity.Mathematics.uint3);
            public get wzz(): Unity.Mathematics.uint3;
            public get wzw(): Unity.Mathematics.uint3;
            public get wwx(): Unity.Mathematics.uint3;
            public get wwy(): Unity.Mathematics.uint3;
            public get wwz(): Unity.Mathematics.uint3;
            public get www(): Unity.Mathematics.uint3;
            public get xx(): Unity.Mathematics.uint2;
            public get xy(): Unity.Mathematics.uint2;
            public set xy(value: Unity.Mathematics.uint2);
            public get xz(): Unity.Mathematics.uint2;
            public set xz(value: Unity.Mathematics.uint2);
            public get xw(): Unity.Mathematics.uint2;
            public set xw(value: Unity.Mathematics.uint2);
            public get yx(): Unity.Mathematics.uint2;
            public set yx(value: Unity.Mathematics.uint2);
            public get yy(): Unity.Mathematics.uint2;
            public get yz(): Unity.Mathematics.uint2;
            public set yz(value: Unity.Mathematics.uint2);
            public get yw(): Unity.Mathematics.uint2;
            public set yw(value: Unity.Mathematics.uint2);
            public get zx(): Unity.Mathematics.uint2;
            public set zx(value: Unity.Mathematics.uint2);
            public get zy(): Unity.Mathematics.uint2;
            public set zy(value: Unity.Mathematics.uint2);
            public get zz(): Unity.Mathematics.uint2;
            public get zw(): Unity.Mathematics.uint2;
            public set zw(value: Unity.Mathematics.uint2);
            public get wx(): Unity.Mathematics.uint2;
            public set wx(value: Unity.Mathematics.uint2);
            public get wy(): Unity.Mathematics.uint2;
            public set wy(value: Unity.Mathematics.uint2);
            public get wz(): Unity.Mathematics.uint2;
            public set wz(value: Unity.Mathematics.uint2);
            public get ww(): Unity.Mathematics.uint2;
            public static op_Implicit ($v: number) : Unity.Mathematics.uint4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint4
            public static op_Explicit ($v: Unity.Mathematics.bool4) : Unity.Mathematics.uint4
            public static op_Explicit ($v: number) : Unity.Mathematics.uint4
            public static op_Explicit ($v: Unity.Mathematics.int4) : Unity.Mathematics.uint4
            public static op_Explicit ($v: Unity.Mathematics.float4) : Unity.Mathematics.uint4
            public static op_Explicit ($v: Unity.Mathematics.double4) : Unity.Mathematics.uint4
            public static op_Multiply ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Multiply ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.uint4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Addition ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Addition ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.uint4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Subtraction ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Subtraction ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.uint4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Division ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Division ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.uint4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Modulus ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Modulus ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.uint4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Increment ($val: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_Decrement ($val: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_LessThan ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_LessThan ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.bool4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_UnaryNegation ($val: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_UnaryPlus ($val: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_LeftShift ($x: Unity.Mathematics.uint4, $n: number) : Unity.Mathematics.uint4
            public static op_RightShift ($x: Unity.Mathematics.uint4, $n: number) : Unity.Mathematics.uint4
            public static op_Equality ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.bool4
            public static op_OnesComplement ($val: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.uint4
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.uint4
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint4, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint4, $rhs: number) : Unity.Mathematics.uint4
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.uint4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public constructor ($x: number, $y: number, $zw: Unity.Mathematics.uint2)
            public constructor ($x: number, $yz: Unity.Mathematics.uint2, $w: number)
            public constructor ($x: number, $yzw: Unity.Mathematics.uint3)
            public constructor ($xy: Unity.Mathematics.uint2, $z: number, $w: number)
            public constructor ($xy: Unity.Mathematics.uint2, $zw: Unity.Mathematics.uint2)
            public constructor ($xyz: Unity.Mathematics.uint3, $w: number)
            public constructor ($xyzw: Unity.Mathematics.uint4)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4)
            public constructor ($v: Unity.Mathematics.int4)
            public constructor ($v: Unity.Mathematics.float4)
            public constructor ($v: Unity.Mathematics.double4)
        }
        class bool4x4 extends System.ValueType implements System.IEquatable$1<Unity.Mathematics.bool4x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.bool4
            public c1 : Unity.Mathematics.bool4
            public c2 : Unity.Mathematics.bool4
            public c3 : Unity.Mathematics.bool4
            public static op_Implicit ($v: boolean) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: Unity.Mathematics.bool4x4, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: Unity.Mathematics.bool4x4, $rhs: boolean) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: boolean, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.bool4x4, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.bool4x4, $rhs: boolean) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: boolean, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_LogicalNot ($val: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool4x4, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.bool4x4, $rhs: boolean) : Unity.Mathematics.bool4x4
            public static op_BitwiseAnd ($lhs: boolean, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool4x4, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.bool4x4, $rhs: boolean) : Unity.Mathematics.bool4x4
            public static op_BitwiseOr ($lhs: boolean, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool4x4, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.bool4x4, $rhs: boolean) : Unity.Mathematics.bool4x4
            public static op_ExclusiveOr ($lhs: boolean, $rhs: Unity.Mathematics.bool4x4) : Unity.Mathematics.bool4x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.bool4>
            public Equals ($rhs: Unity.Mathematics.bool4x4) : boolean
            public Equals ($o: any) : boolean
            public constructor ($c0: Unity.Mathematics.bool4, $c1: Unity.Mathematics.bool4, $c2: Unity.Mathematics.bool4, $c3: Unity.Mathematics.bool4)
            public constructor ($m00: boolean, $m01: boolean, $m02: boolean, $m03: boolean, $m10: boolean, $m11: boolean, $m12: boolean, $m13: boolean, $m20: boolean, $m21: boolean, $m22: boolean, $m23: boolean, $m30: boolean, $m31: boolean, $m32: boolean, $m33: boolean)
            public constructor ($v: boolean)
        }
        class double2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double2>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public static zero : Unity.Mathematics.double2
            public get xxxx(): Unity.Mathematics.double4;
            public get xxxy(): Unity.Mathematics.double4;
            public get xxyx(): Unity.Mathematics.double4;
            public get xxyy(): Unity.Mathematics.double4;
            public get xyxx(): Unity.Mathematics.double4;
            public get xyxy(): Unity.Mathematics.double4;
            public get xyyx(): Unity.Mathematics.double4;
            public get xyyy(): Unity.Mathematics.double4;
            public get yxxx(): Unity.Mathematics.double4;
            public get yxxy(): Unity.Mathematics.double4;
            public get yxyx(): Unity.Mathematics.double4;
            public get yxyy(): Unity.Mathematics.double4;
            public get yyxx(): Unity.Mathematics.double4;
            public get yyxy(): Unity.Mathematics.double4;
            public get yyyx(): Unity.Mathematics.double4;
            public get yyyy(): Unity.Mathematics.double4;
            public get xxx(): Unity.Mathematics.double3;
            public get xxy(): Unity.Mathematics.double3;
            public get xyx(): Unity.Mathematics.double3;
            public get xyy(): Unity.Mathematics.double3;
            public get yxx(): Unity.Mathematics.double3;
            public get yxy(): Unity.Mathematics.double3;
            public get yyx(): Unity.Mathematics.double3;
            public get yyy(): Unity.Mathematics.double3;
            public get xx(): Unity.Mathematics.double2;
            public get xy(): Unity.Mathematics.double2;
            public set xy(value: Unity.Mathematics.double2);
            public get yx(): Unity.Mathematics.double2;
            public set yx(value: Unity.Mathematics.double2);
            public get yy(): Unity.Mathematics.double2;
            public static op_Implicit ($v: number) : Unity.Mathematics.double2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double2
            public static op_Explicit ($v: Unity.Mathematics.bool2) : Unity.Mathematics.double2
            public static op_Implicit ($v: Unity.Mathematics.int2) : Unity.Mathematics.double2
            public static op_Implicit ($v: Unity.Mathematics.uint2) : Unity.Mathematics.double2
            public static op_Implicit ($v: Unity.Mathematics.half) : Unity.Mathematics.double2
            public static op_Implicit ($v: Unity.Mathematics.half2) : Unity.Mathematics.double2
            public static op_Implicit ($v: Unity.Mathematics.float2) : Unity.Mathematics.double2
            public static op_Multiply ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Multiply ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.double2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Addition ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Addition ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.double2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Subtraction ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Subtraction ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.double2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Division ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Division ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.double2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Modulus ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Modulus ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.double2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Increment ($val: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Decrement ($val: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_LessThan ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_LessThan ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.bool2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_UnaryNegation ($val: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_UnaryPlus ($val: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public static op_Equality ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.double2, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.double2, $rhs: number) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double2) : Unity.Mathematics.bool2
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.double2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number)
            public constructor ($xy: Unity.Mathematics.double2)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2)
            public constructor ($v: Unity.Mathematics.int2)
            public constructor ($v: Unity.Mathematics.uint2)
            public constructor ($v: Unity.Mathematics.half)
            public constructor ($v: Unity.Mathematics.half2)
            public constructor ($v: Unity.Mathematics.float2)
        }
        class int2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int2>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public static zero : Unity.Mathematics.int2
            public get xxxx(): Unity.Mathematics.int4;
            public get xxxy(): Unity.Mathematics.int4;
            public get xxyx(): Unity.Mathematics.int4;
            public get xxyy(): Unity.Mathematics.int4;
            public get xyxx(): Unity.Mathematics.int4;
            public get xyxy(): Unity.Mathematics.int4;
            public get xyyx(): Unity.Mathematics.int4;
            public get xyyy(): Unity.Mathematics.int4;
            public get yxxx(): Unity.Mathematics.int4;
            public get yxxy(): Unity.Mathematics.int4;
            public get yxyx(): Unity.Mathematics.int4;
            public get yxyy(): Unity.Mathematics.int4;
            public get yyxx(): Unity.Mathematics.int4;
            public get yyxy(): Unity.Mathematics.int4;
            public get yyyx(): Unity.Mathematics.int4;
            public get yyyy(): Unity.Mathematics.int4;
            public get xxx(): Unity.Mathematics.int3;
            public get xxy(): Unity.Mathematics.int3;
            public get xyx(): Unity.Mathematics.int3;
            public get xyy(): Unity.Mathematics.int3;
            public get yxx(): Unity.Mathematics.int3;
            public get yxy(): Unity.Mathematics.int3;
            public get yyx(): Unity.Mathematics.int3;
            public get yyy(): Unity.Mathematics.int3;
            public get xx(): Unity.Mathematics.int2;
            public get xy(): Unity.Mathematics.int2;
            public set xy(value: Unity.Mathematics.int2);
            public get yx(): Unity.Mathematics.int2;
            public set yx(value: Unity.Mathematics.int2);
            public get yy(): Unity.Mathematics.int2;
            public static op_Implicit ($v: number) : Unity.Mathematics.int2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int2
            public static op_Explicit ($v: Unity.Mathematics.bool2) : Unity.Mathematics.int2
            public static op_Explicit ($v: number) : Unity.Mathematics.int2
            public static op_Explicit ($v: Unity.Mathematics.uint2) : Unity.Mathematics.int2
            public static op_Explicit ($v: Unity.Mathematics.float2) : Unity.Mathematics.int2
            public static op_Explicit ($v: Unity.Mathematics.double2) : Unity.Mathematics.int2
            public static op_Multiply ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Multiply ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.int2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Addition ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Addition ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.int2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Subtraction ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Subtraction ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.int2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Division ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Division ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.int2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Modulus ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Modulus ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.int2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Increment ($val: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_Decrement ($val: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_LessThan ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_LessThan ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.bool2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_UnaryNegation ($val: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_UnaryPlus ($val: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_LeftShift ($x: Unity.Mathematics.int2, $n: number) : Unity.Mathematics.int2
            public static op_RightShift ($x: Unity.Mathematics.int2, $n: number) : Unity.Mathematics.int2
            public static op_Equality ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.bool2
            public static op_OnesComplement ($val: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.int2
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.int2
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int2, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int2, $rhs: number) : Unity.Mathematics.int2
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.int2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number)
            public constructor ($xy: Unity.Mathematics.int2)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2)
            public constructor ($v: Unity.Mathematics.uint2)
            public constructor ($v: Unity.Mathematics.float2)
            public constructor ($v: Unity.Mathematics.double2)
        }
        class half extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.half>
        {
            protected [__keep_incompatibility]: never;
            public value : number
            public static zero : Unity.Mathematics.half
            public static get MaxValue(): number;
            public static get MinValue(): number;
            public static get MaxValueAsHalf(): Unity.Mathematics.half;
            public static get MinValueAsHalf(): Unity.Mathematics.half;
            public static op_Explicit ($v: number) : Unity.Mathematics.half
            public static op_Implicit ($d: Unity.Mathematics.half) : number
            public static op_Equality ($lhs: Unity.Mathematics.half, $rhs: Unity.Mathematics.half) : boolean
            public static op_Inequality ($lhs: Unity.Mathematics.half, $rhs: Unity.Mathematics.half) : boolean
            public Equals ($rhs: Unity.Mathematics.half) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: Unity.Mathematics.half)
            public constructor ($v: number)
        }
        class half2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.half2>
        {
            protected [__keep_incompatibility]: never;
            public x : Unity.Mathematics.half
            public y : Unity.Mathematics.half
            public static zero : Unity.Mathematics.half2
            public get xxxx(): Unity.Mathematics.half4;
            public get xxxy(): Unity.Mathematics.half4;
            public get xxyx(): Unity.Mathematics.half4;
            public get xxyy(): Unity.Mathematics.half4;
            public get xyxx(): Unity.Mathematics.half4;
            public get xyxy(): Unity.Mathematics.half4;
            public get xyyx(): Unity.Mathematics.half4;
            public get xyyy(): Unity.Mathematics.half4;
            public get yxxx(): Unity.Mathematics.half4;
            public get yxxy(): Unity.Mathematics.half4;
            public get yxyx(): Unity.Mathematics.half4;
            public get yxyy(): Unity.Mathematics.half4;
            public get yyxx(): Unity.Mathematics.half4;
            public get yyxy(): Unity.Mathematics.half4;
            public get yyyx(): Unity.Mathematics.half4;
            public get yyyy(): Unity.Mathematics.half4;
            public get xxx(): Unity.Mathematics.half3;
            public get xxy(): Unity.Mathematics.half3;
            public get xyx(): Unity.Mathematics.half3;
            public get xyy(): Unity.Mathematics.half3;
            public get yxx(): Unity.Mathematics.half3;
            public get yxy(): Unity.Mathematics.half3;
            public get yyx(): Unity.Mathematics.half3;
            public get yyy(): Unity.Mathematics.half3;
            public get xx(): Unity.Mathematics.half2;
            public get xy(): Unity.Mathematics.half2;
            public set xy(value: Unity.Mathematics.half2);
            public get yx(): Unity.Mathematics.half2;
            public set yx(value: Unity.Mathematics.half2);
            public get yy(): Unity.Mathematics.half2;
            public static op_Implicit ($v: Unity.Mathematics.half) : Unity.Mathematics.half2
            public static op_Explicit ($v: number) : Unity.Mathematics.half2
            public static op_Explicit ($v: Unity.Mathematics.float2) : Unity.Mathematics.half2
            public static op_Explicit ($v: Unity.Mathematics.double2) : Unity.Mathematics.half2
            public static op_Equality ($lhs: Unity.Mathematics.half2, $rhs: Unity.Mathematics.half2) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: Unity.Mathematics.half2, $rhs: Unity.Mathematics.half) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: Unity.Mathematics.half, $rhs: Unity.Mathematics.half2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.half2, $rhs: Unity.Mathematics.half2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.half2, $rhs: Unity.Mathematics.half) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.half, $rhs: Unity.Mathematics.half2) : Unity.Mathematics.bool2
            public get_Item ($index: number) : Unity.Mathematics.half
            public set_Item ($index: number, $value: Unity.Mathematics.half) : void
            public Equals ($rhs: Unity.Mathematics.half2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: Unity.Mathematics.half, $y: Unity.Mathematics.half)
            public constructor ($xy: Unity.Mathematics.half2)
            public constructor ($v: Unity.Mathematics.half)
            public constructor ($v: number)
            public constructor ($v: Unity.Mathematics.float2)
            public constructor ($v: Unity.Mathematics.double2)
        }
        class float2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float2>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public static zero : Unity.Mathematics.float2
            public get xxxx(): Unity.Mathematics.float4;
            public get xxxy(): Unity.Mathematics.float4;
            public get xxyx(): Unity.Mathematics.float4;
            public get xxyy(): Unity.Mathematics.float4;
            public get xyxx(): Unity.Mathematics.float4;
            public get xyxy(): Unity.Mathematics.float4;
            public get xyyx(): Unity.Mathematics.float4;
            public get xyyy(): Unity.Mathematics.float4;
            public get yxxx(): Unity.Mathematics.float4;
            public get yxxy(): Unity.Mathematics.float4;
            public get yxyx(): Unity.Mathematics.float4;
            public get yxyy(): Unity.Mathematics.float4;
            public get yyxx(): Unity.Mathematics.float4;
            public get yyxy(): Unity.Mathematics.float4;
            public get yyyx(): Unity.Mathematics.float4;
            public get yyyy(): Unity.Mathematics.float4;
            public get xxx(): Unity.Mathematics.float3;
            public get xxy(): Unity.Mathematics.float3;
            public get xyx(): Unity.Mathematics.float3;
            public get xyy(): Unity.Mathematics.float3;
            public get yxx(): Unity.Mathematics.float3;
            public get yxy(): Unity.Mathematics.float3;
            public get yyx(): Unity.Mathematics.float3;
            public get yyy(): Unity.Mathematics.float3;
            public get xx(): Unity.Mathematics.float2;
            public get xy(): Unity.Mathematics.float2;
            public set xy(value: Unity.Mathematics.float2);
            public get yx(): Unity.Mathematics.float2;
            public set yx(value: Unity.Mathematics.float2);
            public get yy(): Unity.Mathematics.float2;
            public static op_Implicit ($v: number) : Unity.Mathematics.float2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float2
            public static op_Explicit ($v: Unity.Mathematics.bool2) : Unity.Mathematics.float2
            public static op_Implicit ($v: Unity.Mathematics.int2) : Unity.Mathematics.float2
            public static op_Implicit ($v: Unity.Mathematics.uint2) : Unity.Mathematics.float2
            public static op_Implicit ($v: Unity.Mathematics.half) : Unity.Mathematics.float2
            public static op_Implicit ($v: Unity.Mathematics.half2) : Unity.Mathematics.float2
            public static op_Explicit ($v: number) : Unity.Mathematics.float2
            public static op_Explicit ($v: Unity.Mathematics.double2) : Unity.Mathematics.float2
            public static op_Multiply ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Multiply ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.float2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Addition ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Addition ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.float2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Subtraction ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Subtraction ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.float2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Division ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Division ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.float2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Modulus ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Modulus ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.float2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Increment ($val: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Decrement ($val: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_LessThan ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_LessThan ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.bool2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.bool2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.bool2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.bool2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_UnaryNegation ($val: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_UnaryPlus ($val: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static op_Equality ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.bool2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.float2, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: Unity.Mathematics.float2, $rhs: number) : Unity.Mathematics.bool2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float2) : Unity.Mathematics.bool2
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.float2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static op_Implicit ($v: Unity.Mathematics.float2) : UnityEngine.Vector2
            public static op_Implicit ($v: UnityEngine.Vector2) : Unity.Mathematics.float2
            public constructor ($x: number, $y: number)
            public constructor ($xy: Unity.Mathematics.float2)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2)
            public constructor ($v: Unity.Mathematics.int2)
            public constructor ($v: Unity.Mathematics.uint2)
            public constructor ($v: Unity.Mathematics.half)
            public constructor ($v: Unity.Mathematics.half2)
            public constructor ($v: Unity.Mathematics.double2)
        }
        class double3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double3>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public z : number
            public static zero : Unity.Mathematics.double3
            public get xxxx(): Unity.Mathematics.double4;
            public get xxxy(): Unity.Mathematics.double4;
            public get xxxz(): Unity.Mathematics.double4;
            public get xxyx(): Unity.Mathematics.double4;
            public get xxyy(): Unity.Mathematics.double4;
            public get xxyz(): Unity.Mathematics.double4;
            public get xxzx(): Unity.Mathematics.double4;
            public get xxzy(): Unity.Mathematics.double4;
            public get xxzz(): Unity.Mathematics.double4;
            public get xyxx(): Unity.Mathematics.double4;
            public get xyxy(): Unity.Mathematics.double4;
            public get xyxz(): Unity.Mathematics.double4;
            public get xyyx(): Unity.Mathematics.double4;
            public get xyyy(): Unity.Mathematics.double4;
            public get xyyz(): Unity.Mathematics.double4;
            public get xyzx(): Unity.Mathematics.double4;
            public get xyzy(): Unity.Mathematics.double4;
            public get xyzz(): Unity.Mathematics.double4;
            public get xzxx(): Unity.Mathematics.double4;
            public get xzxy(): Unity.Mathematics.double4;
            public get xzxz(): Unity.Mathematics.double4;
            public get xzyx(): Unity.Mathematics.double4;
            public get xzyy(): Unity.Mathematics.double4;
            public get xzyz(): Unity.Mathematics.double4;
            public get xzzx(): Unity.Mathematics.double4;
            public get xzzy(): Unity.Mathematics.double4;
            public get xzzz(): Unity.Mathematics.double4;
            public get yxxx(): Unity.Mathematics.double4;
            public get yxxy(): Unity.Mathematics.double4;
            public get yxxz(): Unity.Mathematics.double4;
            public get yxyx(): Unity.Mathematics.double4;
            public get yxyy(): Unity.Mathematics.double4;
            public get yxyz(): Unity.Mathematics.double4;
            public get yxzx(): Unity.Mathematics.double4;
            public get yxzy(): Unity.Mathematics.double4;
            public get yxzz(): Unity.Mathematics.double4;
            public get yyxx(): Unity.Mathematics.double4;
            public get yyxy(): Unity.Mathematics.double4;
            public get yyxz(): Unity.Mathematics.double4;
            public get yyyx(): Unity.Mathematics.double4;
            public get yyyy(): Unity.Mathematics.double4;
            public get yyyz(): Unity.Mathematics.double4;
            public get yyzx(): Unity.Mathematics.double4;
            public get yyzy(): Unity.Mathematics.double4;
            public get yyzz(): Unity.Mathematics.double4;
            public get yzxx(): Unity.Mathematics.double4;
            public get yzxy(): Unity.Mathematics.double4;
            public get yzxz(): Unity.Mathematics.double4;
            public get yzyx(): Unity.Mathematics.double4;
            public get yzyy(): Unity.Mathematics.double4;
            public get yzyz(): Unity.Mathematics.double4;
            public get yzzx(): Unity.Mathematics.double4;
            public get yzzy(): Unity.Mathematics.double4;
            public get yzzz(): Unity.Mathematics.double4;
            public get zxxx(): Unity.Mathematics.double4;
            public get zxxy(): Unity.Mathematics.double4;
            public get zxxz(): Unity.Mathematics.double4;
            public get zxyx(): Unity.Mathematics.double4;
            public get zxyy(): Unity.Mathematics.double4;
            public get zxyz(): Unity.Mathematics.double4;
            public get zxzx(): Unity.Mathematics.double4;
            public get zxzy(): Unity.Mathematics.double4;
            public get zxzz(): Unity.Mathematics.double4;
            public get zyxx(): Unity.Mathematics.double4;
            public get zyxy(): Unity.Mathematics.double4;
            public get zyxz(): Unity.Mathematics.double4;
            public get zyyx(): Unity.Mathematics.double4;
            public get zyyy(): Unity.Mathematics.double4;
            public get zyyz(): Unity.Mathematics.double4;
            public get zyzx(): Unity.Mathematics.double4;
            public get zyzy(): Unity.Mathematics.double4;
            public get zyzz(): Unity.Mathematics.double4;
            public get zzxx(): Unity.Mathematics.double4;
            public get zzxy(): Unity.Mathematics.double4;
            public get zzxz(): Unity.Mathematics.double4;
            public get zzyx(): Unity.Mathematics.double4;
            public get zzyy(): Unity.Mathematics.double4;
            public get zzyz(): Unity.Mathematics.double4;
            public get zzzx(): Unity.Mathematics.double4;
            public get zzzy(): Unity.Mathematics.double4;
            public get zzzz(): Unity.Mathematics.double4;
            public get xxx(): Unity.Mathematics.double3;
            public get xxy(): Unity.Mathematics.double3;
            public get xxz(): Unity.Mathematics.double3;
            public get xyx(): Unity.Mathematics.double3;
            public get xyy(): Unity.Mathematics.double3;
            public get xyz(): Unity.Mathematics.double3;
            public set xyz(value: Unity.Mathematics.double3);
            public get xzx(): Unity.Mathematics.double3;
            public get xzy(): Unity.Mathematics.double3;
            public set xzy(value: Unity.Mathematics.double3);
            public get xzz(): Unity.Mathematics.double3;
            public get yxx(): Unity.Mathematics.double3;
            public get yxy(): Unity.Mathematics.double3;
            public get yxz(): Unity.Mathematics.double3;
            public set yxz(value: Unity.Mathematics.double3);
            public get yyx(): Unity.Mathematics.double3;
            public get yyy(): Unity.Mathematics.double3;
            public get yyz(): Unity.Mathematics.double3;
            public get yzx(): Unity.Mathematics.double3;
            public set yzx(value: Unity.Mathematics.double3);
            public get yzy(): Unity.Mathematics.double3;
            public get yzz(): Unity.Mathematics.double3;
            public get zxx(): Unity.Mathematics.double3;
            public get zxy(): Unity.Mathematics.double3;
            public set zxy(value: Unity.Mathematics.double3);
            public get zxz(): Unity.Mathematics.double3;
            public get zyx(): Unity.Mathematics.double3;
            public set zyx(value: Unity.Mathematics.double3);
            public get zyy(): Unity.Mathematics.double3;
            public get zyz(): Unity.Mathematics.double3;
            public get zzx(): Unity.Mathematics.double3;
            public get zzy(): Unity.Mathematics.double3;
            public get zzz(): Unity.Mathematics.double3;
            public get xx(): Unity.Mathematics.double2;
            public get xy(): Unity.Mathematics.double2;
            public set xy(value: Unity.Mathematics.double2);
            public get xz(): Unity.Mathematics.double2;
            public set xz(value: Unity.Mathematics.double2);
            public get yx(): Unity.Mathematics.double2;
            public set yx(value: Unity.Mathematics.double2);
            public get yy(): Unity.Mathematics.double2;
            public get yz(): Unity.Mathematics.double2;
            public set yz(value: Unity.Mathematics.double2);
            public get zx(): Unity.Mathematics.double2;
            public set zx(value: Unity.Mathematics.double2);
            public get zy(): Unity.Mathematics.double2;
            public set zy(value: Unity.Mathematics.double2);
            public get zz(): Unity.Mathematics.double2;
            public static op_Implicit ($v: number) : Unity.Mathematics.double3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double3
            public static op_Explicit ($v: Unity.Mathematics.bool3) : Unity.Mathematics.double3
            public static op_Implicit ($v: Unity.Mathematics.int3) : Unity.Mathematics.double3
            public static op_Implicit ($v: Unity.Mathematics.uint3) : Unity.Mathematics.double3
            public static op_Implicit ($v: Unity.Mathematics.half) : Unity.Mathematics.double3
            public static op_Implicit ($v: Unity.Mathematics.half3) : Unity.Mathematics.double3
            public static op_Implicit ($v: Unity.Mathematics.float3) : Unity.Mathematics.double3
            public static op_Multiply ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Multiply ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.double3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Addition ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Addition ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.double3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Subtraction ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Subtraction ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.double3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Division ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Division ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.double3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Modulus ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Modulus ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.double3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Increment ($val: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Decrement ($val: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_LessThan ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_LessThan ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.bool3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_UnaryNegation ($val: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_UnaryPlus ($val: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public static op_Equality ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.double3, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.double3, $rhs: number) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double3) : Unity.Mathematics.bool3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.double3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $yz: Unity.Mathematics.double2)
            public constructor ($xy: Unity.Mathematics.double2, $z: number)
            public constructor ($xyz: Unity.Mathematics.double3)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3)
            public constructor ($v: Unity.Mathematics.int3)
            public constructor ($v: Unity.Mathematics.uint3)
            public constructor ($v: Unity.Mathematics.half)
            public constructor ($v: Unity.Mathematics.half3)
            public constructor ($v: Unity.Mathematics.float3)
        }
        class double4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double4>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public z : number
            public w : number
            public static zero : Unity.Mathematics.double4
            public get xxxx(): Unity.Mathematics.double4;
            public get xxxy(): Unity.Mathematics.double4;
            public get xxxz(): Unity.Mathematics.double4;
            public get xxxw(): Unity.Mathematics.double4;
            public get xxyx(): Unity.Mathematics.double4;
            public get xxyy(): Unity.Mathematics.double4;
            public get xxyz(): Unity.Mathematics.double4;
            public get xxyw(): Unity.Mathematics.double4;
            public get xxzx(): Unity.Mathematics.double4;
            public get xxzy(): Unity.Mathematics.double4;
            public get xxzz(): Unity.Mathematics.double4;
            public get xxzw(): Unity.Mathematics.double4;
            public get xxwx(): Unity.Mathematics.double4;
            public get xxwy(): Unity.Mathematics.double4;
            public get xxwz(): Unity.Mathematics.double4;
            public get xxww(): Unity.Mathematics.double4;
            public get xyxx(): Unity.Mathematics.double4;
            public get xyxy(): Unity.Mathematics.double4;
            public get xyxz(): Unity.Mathematics.double4;
            public get xyxw(): Unity.Mathematics.double4;
            public get xyyx(): Unity.Mathematics.double4;
            public get xyyy(): Unity.Mathematics.double4;
            public get xyyz(): Unity.Mathematics.double4;
            public get xyyw(): Unity.Mathematics.double4;
            public get xyzx(): Unity.Mathematics.double4;
            public get xyzy(): Unity.Mathematics.double4;
            public get xyzz(): Unity.Mathematics.double4;
            public get xyzw(): Unity.Mathematics.double4;
            public set xyzw(value: Unity.Mathematics.double4);
            public get xywx(): Unity.Mathematics.double4;
            public get xywy(): Unity.Mathematics.double4;
            public get xywz(): Unity.Mathematics.double4;
            public set xywz(value: Unity.Mathematics.double4);
            public get xyww(): Unity.Mathematics.double4;
            public get xzxx(): Unity.Mathematics.double4;
            public get xzxy(): Unity.Mathematics.double4;
            public get xzxz(): Unity.Mathematics.double4;
            public get xzxw(): Unity.Mathematics.double4;
            public get xzyx(): Unity.Mathematics.double4;
            public get xzyy(): Unity.Mathematics.double4;
            public get xzyz(): Unity.Mathematics.double4;
            public get xzyw(): Unity.Mathematics.double4;
            public set xzyw(value: Unity.Mathematics.double4);
            public get xzzx(): Unity.Mathematics.double4;
            public get xzzy(): Unity.Mathematics.double4;
            public get xzzz(): Unity.Mathematics.double4;
            public get xzzw(): Unity.Mathematics.double4;
            public get xzwx(): Unity.Mathematics.double4;
            public get xzwy(): Unity.Mathematics.double4;
            public set xzwy(value: Unity.Mathematics.double4);
            public get xzwz(): Unity.Mathematics.double4;
            public get xzww(): Unity.Mathematics.double4;
            public get xwxx(): Unity.Mathematics.double4;
            public get xwxy(): Unity.Mathematics.double4;
            public get xwxz(): Unity.Mathematics.double4;
            public get xwxw(): Unity.Mathematics.double4;
            public get xwyx(): Unity.Mathematics.double4;
            public get xwyy(): Unity.Mathematics.double4;
            public get xwyz(): Unity.Mathematics.double4;
            public set xwyz(value: Unity.Mathematics.double4);
            public get xwyw(): Unity.Mathematics.double4;
            public get xwzx(): Unity.Mathematics.double4;
            public get xwzy(): Unity.Mathematics.double4;
            public set xwzy(value: Unity.Mathematics.double4);
            public get xwzz(): Unity.Mathematics.double4;
            public get xwzw(): Unity.Mathematics.double4;
            public get xwwx(): Unity.Mathematics.double4;
            public get xwwy(): Unity.Mathematics.double4;
            public get xwwz(): Unity.Mathematics.double4;
            public get xwww(): Unity.Mathematics.double4;
            public get yxxx(): Unity.Mathematics.double4;
            public get yxxy(): Unity.Mathematics.double4;
            public get yxxz(): Unity.Mathematics.double4;
            public get yxxw(): Unity.Mathematics.double4;
            public get yxyx(): Unity.Mathematics.double4;
            public get yxyy(): Unity.Mathematics.double4;
            public get yxyz(): Unity.Mathematics.double4;
            public get yxyw(): Unity.Mathematics.double4;
            public get yxzx(): Unity.Mathematics.double4;
            public get yxzy(): Unity.Mathematics.double4;
            public get yxzz(): Unity.Mathematics.double4;
            public get yxzw(): Unity.Mathematics.double4;
            public set yxzw(value: Unity.Mathematics.double4);
            public get yxwx(): Unity.Mathematics.double4;
            public get yxwy(): Unity.Mathematics.double4;
            public get yxwz(): Unity.Mathematics.double4;
            public set yxwz(value: Unity.Mathematics.double4);
            public get yxww(): Unity.Mathematics.double4;
            public get yyxx(): Unity.Mathematics.double4;
            public get yyxy(): Unity.Mathematics.double4;
            public get yyxz(): Unity.Mathematics.double4;
            public get yyxw(): Unity.Mathematics.double4;
            public get yyyx(): Unity.Mathematics.double4;
            public get yyyy(): Unity.Mathematics.double4;
            public get yyyz(): Unity.Mathematics.double4;
            public get yyyw(): Unity.Mathematics.double4;
            public get yyzx(): Unity.Mathematics.double4;
            public get yyzy(): Unity.Mathematics.double4;
            public get yyzz(): Unity.Mathematics.double4;
            public get yyzw(): Unity.Mathematics.double4;
            public get yywx(): Unity.Mathematics.double4;
            public get yywy(): Unity.Mathematics.double4;
            public get yywz(): Unity.Mathematics.double4;
            public get yyww(): Unity.Mathematics.double4;
            public get yzxx(): Unity.Mathematics.double4;
            public get yzxy(): Unity.Mathematics.double4;
            public get yzxz(): Unity.Mathematics.double4;
            public get yzxw(): Unity.Mathematics.double4;
            public set yzxw(value: Unity.Mathematics.double4);
            public get yzyx(): Unity.Mathematics.double4;
            public get yzyy(): Unity.Mathematics.double4;
            public get yzyz(): Unity.Mathematics.double4;
            public get yzyw(): Unity.Mathematics.double4;
            public get yzzx(): Unity.Mathematics.double4;
            public get yzzy(): Unity.Mathematics.double4;
            public get yzzz(): Unity.Mathematics.double4;
            public get yzzw(): Unity.Mathematics.double4;
            public get yzwx(): Unity.Mathematics.double4;
            public set yzwx(value: Unity.Mathematics.double4);
            public get yzwy(): Unity.Mathematics.double4;
            public get yzwz(): Unity.Mathematics.double4;
            public get yzww(): Unity.Mathematics.double4;
            public get ywxx(): Unity.Mathematics.double4;
            public get ywxy(): Unity.Mathematics.double4;
            public get ywxz(): Unity.Mathematics.double4;
            public set ywxz(value: Unity.Mathematics.double4);
            public get ywxw(): Unity.Mathematics.double4;
            public get ywyx(): Unity.Mathematics.double4;
            public get ywyy(): Unity.Mathematics.double4;
            public get ywyz(): Unity.Mathematics.double4;
            public get ywyw(): Unity.Mathematics.double4;
            public get ywzx(): Unity.Mathematics.double4;
            public set ywzx(value: Unity.Mathematics.double4);
            public get ywzy(): Unity.Mathematics.double4;
            public get ywzz(): Unity.Mathematics.double4;
            public get ywzw(): Unity.Mathematics.double4;
            public get ywwx(): Unity.Mathematics.double4;
            public get ywwy(): Unity.Mathematics.double4;
            public get ywwz(): Unity.Mathematics.double4;
            public get ywww(): Unity.Mathematics.double4;
            public get zxxx(): Unity.Mathematics.double4;
            public get zxxy(): Unity.Mathematics.double4;
            public get zxxz(): Unity.Mathematics.double4;
            public get zxxw(): Unity.Mathematics.double4;
            public get zxyx(): Unity.Mathematics.double4;
            public get zxyy(): Unity.Mathematics.double4;
            public get zxyz(): Unity.Mathematics.double4;
            public get zxyw(): Unity.Mathematics.double4;
            public set zxyw(value: Unity.Mathematics.double4);
            public get zxzx(): Unity.Mathematics.double4;
            public get zxzy(): Unity.Mathematics.double4;
            public get zxzz(): Unity.Mathematics.double4;
            public get zxzw(): Unity.Mathematics.double4;
            public get zxwx(): Unity.Mathematics.double4;
            public get zxwy(): Unity.Mathematics.double4;
            public set zxwy(value: Unity.Mathematics.double4);
            public get zxwz(): Unity.Mathematics.double4;
            public get zxww(): Unity.Mathematics.double4;
            public get zyxx(): Unity.Mathematics.double4;
            public get zyxy(): Unity.Mathematics.double4;
            public get zyxz(): Unity.Mathematics.double4;
            public get zyxw(): Unity.Mathematics.double4;
            public set zyxw(value: Unity.Mathematics.double4);
            public get zyyx(): Unity.Mathematics.double4;
            public get zyyy(): Unity.Mathematics.double4;
            public get zyyz(): Unity.Mathematics.double4;
            public get zyyw(): Unity.Mathematics.double4;
            public get zyzx(): Unity.Mathematics.double4;
            public get zyzy(): Unity.Mathematics.double4;
            public get zyzz(): Unity.Mathematics.double4;
            public get zyzw(): Unity.Mathematics.double4;
            public get zywx(): Unity.Mathematics.double4;
            public set zywx(value: Unity.Mathematics.double4);
            public get zywy(): Unity.Mathematics.double4;
            public get zywz(): Unity.Mathematics.double4;
            public get zyww(): Unity.Mathematics.double4;
            public get zzxx(): Unity.Mathematics.double4;
            public get zzxy(): Unity.Mathematics.double4;
            public get zzxz(): Unity.Mathematics.double4;
            public get zzxw(): Unity.Mathematics.double4;
            public get zzyx(): Unity.Mathematics.double4;
            public get zzyy(): Unity.Mathematics.double4;
            public get zzyz(): Unity.Mathematics.double4;
            public get zzyw(): Unity.Mathematics.double4;
            public get zzzx(): Unity.Mathematics.double4;
            public get zzzy(): Unity.Mathematics.double4;
            public get zzzz(): Unity.Mathematics.double4;
            public get zzzw(): Unity.Mathematics.double4;
            public get zzwx(): Unity.Mathematics.double4;
            public get zzwy(): Unity.Mathematics.double4;
            public get zzwz(): Unity.Mathematics.double4;
            public get zzww(): Unity.Mathematics.double4;
            public get zwxx(): Unity.Mathematics.double4;
            public get zwxy(): Unity.Mathematics.double4;
            public set zwxy(value: Unity.Mathematics.double4);
            public get zwxz(): Unity.Mathematics.double4;
            public get zwxw(): Unity.Mathematics.double4;
            public get zwyx(): Unity.Mathematics.double4;
            public set zwyx(value: Unity.Mathematics.double4);
            public get zwyy(): Unity.Mathematics.double4;
            public get zwyz(): Unity.Mathematics.double4;
            public get zwyw(): Unity.Mathematics.double4;
            public get zwzx(): Unity.Mathematics.double4;
            public get zwzy(): Unity.Mathematics.double4;
            public get zwzz(): Unity.Mathematics.double4;
            public get zwzw(): Unity.Mathematics.double4;
            public get zwwx(): Unity.Mathematics.double4;
            public get zwwy(): Unity.Mathematics.double4;
            public get zwwz(): Unity.Mathematics.double4;
            public get zwww(): Unity.Mathematics.double4;
            public get wxxx(): Unity.Mathematics.double4;
            public get wxxy(): Unity.Mathematics.double4;
            public get wxxz(): Unity.Mathematics.double4;
            public get wxxw(): Unity.Mathematics.double4;
            public get wxyx(): Unity.Mathematics.double4;
            public get wxyy(): Unity.Mathematics.double4;
            public get wxyz(): Unity.Mathematics.double4;
            public set wxyz(value: Unity.Mathematics.double4);
            public get wxyw(): Unity.Mathematics.double4;
            public get wxzx(): Unity.Mathematics.double4;
            public get wxzy(): Unity.Mathematics.double4;
            public set wxzy(value: Unity.Mathematics.double4);
            public get wxzz(): Unity.Mathematics.double4;
            public get wxzw(): Unity.Mathematics.double4;
            public get wxwx(): Unity.Mathematics.double4;
            public get wxwy(): Unity.Mathematics.double4;
            public get wxwz(): Unity.Mathematics.double4;
            public get wxww(): Unity.Mathematics.double4;
            public get wyxx(): Unity.Mathematics.double4;
            public get wyxy(): Unity.Mathematics.double4;
            public get wyxz(): Unity.Mathematics.double4;
            public set wyxz(value: Unity.Mathematics.double4);
            public get wyxw(): Unity.Mathematics.double4;
            public get wyyx(): Unity.Mathematics.double4;
            public get wyyy(): Unity.Mathematics.double4;
            public get wyyz(): Unity.Mathematics.double4;
            public get wyyw(): Unity.Mathematics.double4;
            public get wyzx(): Unity.Mathematics.double4;
            public set wyzx(value: Unity.Mathematics.double4);
            public get wyzy(): Unity.Mathematics.double4;
            public get wyzz(): Unity.Mathematics.double4;
            public get wyzw(): Unity.Mathematics.double4;
            public get wywx(): Unity.Mathematics.double4;
            public get wywy(): Unity.Mathematics.double4;
            public get wywz(): Unity.Mathematics.double4;
            public get wyww(): Unity.Mathematics.double4;
            public get wzxx(): Unity.Mathematics.double4;
            public get wzxy(): Unity.Mathematics.double4;
            public set wzxy(value: Unity.Mathematics.double4);
            public get wzxz(): Unity.Mathematics.double4;
            public get wzxw(): Unity.Mathematics.double4;
            public get wzyx(): Unity.Mathematics.double4;
            public set wzyx(value: Unity.Mathematics.double4);
            public get wzyy(): Unity.Mathematics.double4;
            public get wzyz(): Unity.Mathematics.double4;
            public get wzyw(): Unity.Mathematics.double4;
            public get wzzx(): Unity.Mathematics.double4;
            public get wzzy(): Unity.Mathematics.double4;
            public get wzzz(): Unity.Mathematics.double4;
            public get wzzw(): Unity.Mathematics.double4;
            public get wzwx(): Unity.Mathematics.double4;
            public get wzwy(): Unity.Mathematics.double4;
            public get wzwz(): Unity.Mathematics.double4;
            public get wzww(): Unity.Mathematics.double4;
            public get wwxx(): Unity.Mathematics.double4;
            public get wwxy(): Unity.Mathematics.double4;
            public get wwxz(): Unity.Mathematics.double4;
            public get wwxw(): Unity.Mathematics.double4;
            public get wwyx(): Unity.Mathematics.double4;
            public get wwyy(): Unity.Mathematics.double4;
            public get wwyz(): Unity.Mathematics.double4;
            public get wwyw(): Unity.Mathematics.double4;
            public get wwzx(): Unity.Mathematics.double4;
            public get wwzy(): Unity.Mathematics.double4;
            public get wwzz(): Unity.Mathematics.double4;
            public get wwzw(): Unity.Mathematics.double4;
            public get wwwx(): Unity.Mathematics.double4;
            public get wwwy(): Unity.Mathematics.double4;
            public get wwwz(): Unity.Mathematics.double4;
            public get wwww(): Unity.Mathematics.double4;
            public get xxx(): Unity.Mathematics.double3;
            public get xxy(): Unity.Mathematics.double3;
            public get xxz(): Unity.Mathematics.double3;
            public get xxw(): Unity.Mathematics.double3;
            public get xyx(): Unity.Mathematics.double3;
            public get xyy(): Unity.Mathematics.double3;
            public get xyz(): Unity.Mathematics.double3;
            public set xyz(value: Unity.Mathematics.double3);
            public get xyw(): Unity.Mathematics.double3;
            public set xyw(value: Unity.Mathematics.double3);
            public get xzx(): Unity.Mathematics.double3;
            public get xzy(): Unity.Mathematics.double3;
            public set xzy(value: Unity.Mathematics.double3);
            public get xzz(): Unity.Mathematics.double3;
            public get xzw(): Unity.Mathematics.double3;
            public set xzw(value: Unity.Mathematics.double3);
            public get xwx(): Unity.Mathematics.double3;
            public get xwy(): Unity.Mathematics.double3;
            public set xwy(value: Unity.Mathematics.double3);
            public get xwz(): Unity.Mathematics.double3;
            public set xwz(value: Unity.Mathematics.double3);
            public get xww(): Unity.Mathematics.double3;
            public get yxx(): Unity.Mathematics.double3;
            public get yxy(): Unity.Mathematics.double3;
            public get yxz(): Unity.Mathematics.double3;
            public set yxz(value: Unity.Mathematics.double3);
            public get yxw(): Unity.Mathematics.double3;
            public set yxw(value: Unity.Mathematics.double3);
            public get yyx(): Unity.Mathematics.double3;
            public get yyy(): Unity.Mathematics.double3;
            public get yyz(): Unity.Mathematics.double3;
            public get yyw(): Unity.Mathematics.double3;
            public get yzx(): Unity.Mathematics.double3;
            public set yzx(value: Unity.Mathematics.double3);
            public get yzy(): Unity.Mathematics.double3;
            public get yzz(): Unity.Mathematics.double3;
            public get yzw(): Unity.Mathematics.double3;
            public set yzw(value: Unity.Mathematics.double3);
            public get ywx(): Unity.Mathematics.double3;
            public set ywx(value: Unity.Mathematics.double3);
            public get ywy(): Unity.Mathematics.double3;
            public get ywz(): Unity.Mathematics.double3;
            public set ywz(value: Unity.Mathematics.double3);
            public get yww(): Unity.Mathematics.double3;
            public get zxx(): Unity.Mathematics.double3;
            public get zxy(): Unity.Mathematics.double3;
            public set zxy(value: Unity.Mathematics.double3);
            public get zxz(): Unity.Mathematics.double3;
            public get zxw(): Unity.Mathematics.double3;
            public set zxw(value: Unity.Mathematics.double3);
            public get zyx(): Unity.Mathematics.double3;
            public set zyx(value: Unity.Mathematics.double3);
            public get zyy(): Unity.Mathematics.double3;
            public get zyz(): Unity.Mathematics.double3;
            public get zyw(): Unity.Mathematics.double3;
            public set zyw(value: Unity.Mathematics.double3);
            public get zzx(): Unity.Mathematics.double3;
            public get zzy(): Unity.Mathematics.double3;
            public get zzz(): Unity.Mathematics.double3;
            public get zzw(): Unity.Mathematics.double3;
            public get zwx(): Unity.Mathematics.double3;
            public set zwx(value: Unity.Mathematics.double3);
            public get zwy(): Unity.Mathematics.double3;
            public set zwy(value: Unity.Mathematics.double3);
            public get zwz(): Unity.Mathematics.double3;
            public get zww(): Unity.Mathematics.double3;
            public get wxx(): Unity.Mathematics.double3;
            public get wxy(): Unity.Mathematics.double3;
            public set wxy(value: Unity.Mathematics.double3);
            public get wxz(): Unity.Mathematics.double3;
            public set wxz(value: Unity.Mathematics.double3);
            public get wxw(): Unity.Mathematics.double3;
            public get wyx(): Unity.Mathematics.double3;
            public set wyx(value: Unity.Mathematics.double3);
            public get wyy(): Unity.Mathematics.double3;
            public get wyz(): Unity.Mathematics.double3;
            public set wyz(value: Unity.Mathematics.double3);
            public get wyw(): Unity.Mathematics.double3;
            public get wzx(): Unity.Mathematics.double3;
            public set wzx(value: Unity.Mathematics.double3);
            public get wzy(): Unity.Mathematics.double3;
            public set wzy(value: Unity.Mathematics.double3);
            public get wzz(): Unity.Mathematics.double3;
            public get wzw(): Unity.Mathematics.double3;
            public get wwx(): Unity.Mathematics.double3;
            public get wwy(): Unity.Mathematics.double3;
            public get wwz(): Unity.Mathematics.double3;
            public get www(): Unity.Mathematics.double3;
            public get xx(): Unity.Mathematics.double2;
            public get xy(): Unity.Mathematics.double2;
            public set xy(value: Unity.Mathematics.double2);
            public get xz(): Unity.Mathematics.double2;
            public set xz(value: Unity.Mathematics.double2);
            public get xw(): Unity.Mathematics.double2;
            public set xw(value: Unity.Mathematics.double2);
            public get yx(): Unity.Mathematics.double2;
            public set yx(value: Unity.Mathematics.double2);
            public get yy(): Unity.Mathematics.double2;
            public get yz(): Unity.Mathematics.double2;
            public set yz(value: Unity.Mathematics.double2);
            public get yw(): Unity.Mathematics.double2;
            public set yw(value: Unity.Mathematics.double2);
            public get zx(): Unity.Mathematics.double2;
            public set zx(value: Unity.Mathematics.double2);
            public get zy(): Unity.Mathematics.double2;
            public set zy(value: Unity.Mathematics.double2);
            public get zz(): Unity.Mathematics.double2;
            public get zw(): Unity.Mathematics.double2;
            public set zw(value: Unity.Mathematics.double2);
            public get wx(): Unity.Mathematics.double2;
            public set wx(value: Unity.Mathematics.double2);
            public get wy(): Unity.Mathematics.double2;
            public set wy(value: Unity.Mathematics.double2);
            public get wz(): Unity.Mathematics.double2;
            public set wz(value: Unity.Mathematics.double2);
            public get ww(): Unity.Mathematics.double2;
            public static op_Implicit ($v: number) : Unity.Mathematics.double4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double4
            public static op_Explicit ($v: Unity.Mathematics.bool4) : Unity.Mathematics.double4
            public static op_Implicit ($v: Unity.Mathematics.int4) : Unity.Mathematics.double4
            public static op_Implicit ($v: Unity.Mathematics.uint4) : Unity.Mathematics.double4
            public static op_Implicit ($v: Unity.Mathematics.half) : Unity.Mathematics.double4
            public static op_Implicit ($v: Unity.Mathematics.half4) : Unity.Mathematics.double4
            public static op_Implicit ($v: Unity.Mathematics.float4) : Unity.Mathematics.double4
            public static op_Multiply ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Multiply ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.double4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Addition ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Addition ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.double4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Subtraction ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Subtraction ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.double4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Division ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Division ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.double4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Modulus ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Modulus ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.double4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Increment ($val: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Decrement ($val: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_LessThan ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_LessThan ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.bool4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_UnaryNegation ($val: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_UnaryPlus ($val: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public static op_Equality ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.double4, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.double4, $rhs: number) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double4) : Unity.Mathematics.bool4
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.double4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public constructor ($x: number, $y: number, $zw: Unity.Mathematics.double2)
            public constructor ($x: number, $yz: Unity.Mathematics.double2, $w: number)
            public constructor ($x: number, $yzw: Unity.Mathematics.double3)
            public constructor ($xy: Unity.Mathematics.double2, $z: number, $w: number)
            public constructor ($xy: Unity.Mathematics.double2, $zw: Unity.Mathematics.double2)
            public constructor ($xyz: Unity.Mathematics.double3, $w: number)
            public constructor ($xyzw: Unity.Mathematics.double4)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4)
            public constructor ($v: Unity.Mathematics.int4)
            public constructor ($v: Unity.Mathematics.uint4)
            public constructor ($v: Unity.Mathematics.half)
            public constructor ($v: Unity.Mathematics.half4)
            public constructor ($v: Unity.Mathematics.float4)
        }
        class double2x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double2x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.double2
            public c1 : Unity.Mathematics.double2
            public static identity : Unity.Mathematics.double2x2
            public static zero : Unity.Mathematics.double2x2
            public static op_Implicit ($v: number) : Unity.Mathematics.double2x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double2x2
            public static op_Explicit ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.double2x2
            public static op_Implicit ($v: Unity.Mathematics.int2x2) : Unity.Mathematics.double2x2
            public static op_Implicit ($v: Unity.Mathematics.uint2x2) : Unity.Mathematics.double2x2
            public static op_Implicit ($v: Unity.Mathematics.float2x2) : Unity.Mathematics.double2x2
            public static op_Multiply ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Multiply ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.double2x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Addition ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Addition ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.double2x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Subtraction ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Subtraction ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.double2x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Division ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Division ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.double2x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Modulus ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Modulus ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.double2x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Increment ($val: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Decrement ($val: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_LessThan ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_LessThan ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_UnaryNegation ($val: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_UnaryPlus ($val: Unity.Mathematics.double2x2) : Unity.Mathematics.double2x2
            public static op_Equality ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.double2x2, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.double2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double2x2) : Unity.Mathematics.bool2x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.double2>
            public Equals ($rhs: Unity.Mathematics.double2x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.double2, $c1: Unity.Mathematics.double2)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x2)
            public constructor ($v: Unity.Mathematics.int2x2)
            public constructor ($v: Unity.Mathematics.uint2x2)
            public constructor ($v: Unity.Mathematics.float2x2)
        }
        class int2x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int2x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.int2
            public c1 : Unity.Mathematics.int2
            public static identity : Unity.Mathematics.int2x2
            public static zero : Unity.Mathematics.int2x2
            public static op_Implicit ($v: number) : Unity.Mathematics.int2x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int2x2
            public static op_Explicit ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.int2x2
            public static op_Explicit ($v: number) : Unity.Mathematics.int2x2
            public static op_Explicit ($v: Unity.Mathematics.uint2x2) : Unity.Mathematics.int2x2
            public static op_Explicit ($v: Unity.Mathematics.float2x2) : Unity.Mathematics.int2x2
            public static op_Explicit ($v: Unity.Mathematics.double2x2) : Unity.Mathematics.int2x2
            public static op_Multiply ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Multiply ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.int2x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Addition ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Addition ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.int2x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Subtraction ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Subtraction ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.int2x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Division ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Division ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.int2x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Modulus ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Modulus ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.int2x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Increment ($val: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_Decrement ($val: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_LessThan ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_LessThan ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_UnaryNegation ($val: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_UnaryPlus ($val: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_LeftShift ($x: Unity.Mathematics.int2x2, $n: number) : Unity.Mathematics.int2x2
            public static op_RightShift ($x: Unity.Mathematics.int2x2, $n: number) : Unity.Mathematics.int2x2
            public static op_Equality ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.bool2x2
            public static op_OnesComplement ($val: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.int2x2
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.int2x2
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int2x2, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int2x2, $rhs: number) : Unity.Mathematics.int2x2
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int2x2) : Unity.Mathematics.int2x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.int2>
            public Equals ($rhs: Unity.Mathematics.int2x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.int2, $c1: Unity.Mathematics.int2)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x2)
            public constructor ($v: Unity.Mathematics.uint2x2)
            public constructor ($v: Unity.Mathematics.float2x2)
            public constructor ($v: Unity.Mathematics.double2x2)
        }
        class uint2x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint2x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.uint2
            public c1 : Unity.Mathematics.uint2
            public static identity : Unity.Mathematics.uint2x2
            public static zero : Unity.Mathematics.uint2x2
            public static op_Implicit ($v: number) : Unity.Mathematics.uint2x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint2x2
            public static op_Explicit ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.uint2x2
            public static op_Explicit ($v: number) : Unity.Mathematics.uint2x2
            public static op_Explicit ($v: Unity.Mathematics.int2x2) : Unity.Mathematics.uint2x2
            public static op_Explicit ($v: Unity.Mathematics.float2x2) : Unity.Mathematics.uint2x2
            public static op_Explicit ($v: Unity.Mathematics.double2x2) : Unity.Mathematics.uint2x2
            public static op_Multiply ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Multiply ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.uint2x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Addition ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Addition ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.uint2x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Subtraction ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Subtraction ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.uint2x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Division ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Division ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.uint2x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Modulus ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Modulus ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.uint2x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Increment ($val: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_Decrement ($val: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_LessThan ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_LessThan ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_UnaryNegation ($val: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_UnaryPlus ($val: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_LeftShift ($x: Unity.Mathematics.uint2x2, $n: number) : Unity.Mathematics.uint2x2
            public static op_RightShift ($x: Unity.Mathematics.uint2x2, $n: number) : Unity.Mathematics.uint2x2
            public static op_Equality ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.bool2x2
            public static op_OnesComplement ($val: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.uint2x2
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.uint2x2
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint2x2, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint2x2, $rhs: number) : Unity.Mathematics.uint2x2
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint2x2) : Unity.Mathematics.uint2x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.uint2>
            public Equals ($rhs: Unity.Mathematics.uint2x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.uint2, $c1: Unity.Mathematics.uint2)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x2)
            public constructor ($v: Unity.Mathematics.int2x2)
            public constructor ($v: Unity.Mathematics.float2x2)
            public constructor ($v: Unity.Mathematics.double2x2)
        }
        class float2x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float2x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.float2
            public c1 : Unity.Mathematics.float2
            public static identity : Unity.Mathematics.float2x2
            public static zero : Unity.Mathematics.float2x2
            public static op_Implicit ($v: number) : Unity.Mathematics.float2x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float2x2
            public static op_Explicit ($v: Unity.Mathematics.bool2x2) : Unity.Mathematics.float2x2
            public static op_Implicit ($v: Unity.Mathematics.int2x2) : Unity.Mathematics.float2x2
            public static op_Implicit ($v: Unity.Mathematics.uint2x2) : Unity.Mathematics.float2x2
            public static op_Explicit ($v: number) : Unity.Mathematics.float2x2
            public static op_Explicit ($v: Unity.Mathematics.double2x2) : Unity.Mathematics.float2x2
            public static op_Multiply ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Multiply ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.float2x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Addition ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Addition ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.float2x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Subtraction ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Subtraction ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.float2x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Division ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Division ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.float2x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Modulus ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Modulus ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.float2x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Increment ($val: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Decrement ($val: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_LessThan ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_LessThan ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_UnaryNegation ($val: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_UnaryPlus ($val: Unity.Mathematics.float2x2) : Unity.Mathematics.float2x2
            public static op_Equality ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.float2x2, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: Unity.Mathematics.float2x2, $rhs: number) : Unity.Mathematics.bool2x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float2x2) : Unity.Mathematics.bool2x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.float2>
            public Equals ($rhs: Unity.Mathematics.float2x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static Rotate ($angle: number) : Unity.Mathematics.float2x2
            public static Scale ($s: number) : Unity.Mathematics.float2x2
            public static Scale ($x: number, $y: number) : Unity.Mathematics.float2x2
            public static Scale ($v: Unity.Mathematics.float2) : Unity.Mathematics.float2x2
            public constructor ($c0: Unity.Mathematics.float2, $c1: Unity.Mathematics.float2)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x2)
            public constructor ($v: Unity.Mathematics.int2x2)
            public constructor ($v: Unity.Mathematics.uint2x2)
            public constructor ($v: Unity.Mathematics.double2x2)
        }
        class double2x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double2x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.double2
            public c1 : Unity.Mathematics.double2
            public c2 : Unity.Mathematics.double2
            public static zero : Unity.Mathematics.double2x3
            public static op_Implicit ($v: number) : Unity.Mathematics.double2x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double2x3
            public static op_Explicit ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.double2x3
            public static op_Implicit ($v: Unity.Mathematics.int2x3) : Unity.Mathematics.double2x3
            public static op_Implicit ($v: Unity.Mathematics.uint2x3) : Unity.Mathematics.double2x3
            public static op_Implicit ($v: Unity.Mathematics.float2x3) : Unity.Mathematics.double2x3
            public static op_Multiply ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Multiply ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.double2x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Addition ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Addition ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.double2x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Subtraction ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Subtraction ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.double2x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Division ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Division ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.double2x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Modulus ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Modulus ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.double2x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Increment ($val: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Decrement ($val: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_LessThan ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_LessThan ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_UnaryNegation ($val: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_UnaryPlus ($val: Unity.Mathematics.double2x3) : Unity.Mathematics.double2x3
            public static op_Equality ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.double2x3, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.double2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double2x3) : Unity.Mathematics.bool2x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.double2>
            public Equals ($rhs: Unity.Mathematics.double2x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.double2, $c1: Unity.Mathematics.double2, $c2: Unity.Mathematics.double2)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x3)
            public constructor ($v: Unity.Mathematics.int2x3)
            public constructor ($v: Unity.Mathematics.uint2x3)
            public constructor ($v: Unity.Mathematics.float2x3)
        }
        class int2x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int2x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.int2
            public c1 : Unity.Mathematics.int2
            public c2 : Unity.Mathematics.int2
            public static zero : Unity.Mathematics.int2x3
            public static op_Implicit ($v: number) : Unity.Mathematics.int2x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int2x3
            public static op_Explicit ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.int2x3
            public static op_Explicit ($v: number) : Unity.Mathematics.int2x3
            public static op_Explicit ($v: Unity.Mathematics.uint2x3) : Unity.Mathematics.int2x3
            public static op_Explicit ($v: Unity.Mathematics.float2x3) : Unity.Mathematics.int2x3
            public static op_Explicit ($v: Unity.Mathematics.double2x3) : Unity.Mathematics.int2x3
            public static op_Multiply ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Multiply ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.int2x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Addition ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Addition ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.int2x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Subtraction ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Subtraction ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.int2x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Division ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Division ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.int2x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Modulus ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Modulus ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.int2x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Increment ($val: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_Decrement ($val: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_LessThan ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_LessThan ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_UnaryNegation ($val: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_UnaryPlus ($val: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_LeftShift ($x: Unity.Mathematics.int2x3, $n: number) : Unity.Mathematics.int2x3
            public static op_RightShift ($x: Unity.Mathematics.int2x3, $n: number) : Unity.Mathematics.int2x3
            public static op_Equality ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.bool2x3
            public static op_OnesComplement ($val: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.int2x3
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.int2x3
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int2x3, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int2x3, $rhs: number) : Unity.Mathematics.int2x3
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int2x3) : Unity.Mathematics.int2x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.int2>
            public Equals ($rhs: Unity.Mathematics.int2x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.int2, $c1: Unity.Mathematics.int2, $c2: Unity.Mathematics.int2)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x3)
            public constructor ($v: Unity.Mathematics.uint2x3)
            public constructor ($v: Unity.Mathematics.float2x3)
            public constructor ($v: Unity.Mathematics.double2x3)
        }
        class uint2x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint2x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.uint2
            public c1 : Unity.Mathematics.uint2
            public c2 : Unity.Mathematics.uint2
            public static zero : Unity.Mathematics.uint2x3
            public static op_Implicit ($v: number) : Unity.Mathematics.uint2x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint2x3
            public static op_Explicit ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.uint2x3
            public static op_Explicit ($v: number) : Unity.Mathematics.uint2x3
            public static op_Explicit ($v: Unity.Mathematics.int2x3) : Unity.Mathematics.uint2x3
            public static op_Explicit ($v: Unity.Mathematics.float2x3) : Unity.Mathematics.uint2x3
            public static op_Explicit ($v: Unity.Mathematics.double2x3) : Unity.Mathematics.uint2x3
            public static op_Multiply ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Multiply ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.uint2x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Addition ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Addition ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.uint2x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Subtraction ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Subtraction ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.uint2x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Division ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Division ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.uint2x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Modulus ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Modulus ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.uint2x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Increment ($val: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_Decrement ($val: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_LessThan ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_LessThan ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_UnaryNegation ($val: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_UnaryPlus ($val: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_LeftShift ($x: Unity.Mathematics.uint2x3, $n: number) : Unity.Mathematics.uint2x3
            public static op_RightShift ($x: Unity.Mathematics.uint2x3, $n: number) : Unity.Mathematics.uint2x3
            public static op_Equality ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.bool2x3
            public static op_OnesComplement ($val: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.uint2x3
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.uint2x3
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint2x3, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint2x3, $rhs: number) : Unity.Mathematics.uint2x3
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint2x3) : Unity.Mathematics.uint2x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.uint2>
            public Equals ($rhs: Unity.Mathematics.uint2x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.uint2, $c1: Unity.Mathematics.uint2, $c2: Unity.Mathematics.uint2)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x3)
            public constructor ($v: Unity.Mathematics.int2x3)
            public constructor ($v: Unity.Mathematics.float2x3)
            public constructor ($v: Unity.Mathematics.double2x3)
        }
        class float2x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float2x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.float2
            public c1 : Unity.Mathematics.float2
            public c2 : Unity.Mathematics.float2
            public static zero : Unity.Mathematics.float2x3
            public static op_Implicit ($v: number) : Unity.Mathematics.float2x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float2x3
            public static op_Explicit ($v: Unity.Mathematics.bool2x3) : Unity.Mathematics.float2x3
            public static op_Implicit ($v: Unity.Mathematics.int2x3) : Unity.Mathematics.float2x3
            public static op_Implicit ($v: Unity.Mathematics.uint2x3) : Unity.Mathematics.float2x3
            public static op_Explicit ($v: number) : Unity.Mathematics.float2x3
            public static op_Explicit ($v: Unity.Mathematics.double2x3) : Unity.Mathematics.float2x3
            public static op_Multiply ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Multiply ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.float2x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Addition ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Addition ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.float2x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Subtraction ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Subtraction ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.float2x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Division ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Division ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.float2x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Modulus ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Modulus ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.float2x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Increment ($val: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Decrement ($val: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_LessThan ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_LessThan ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_UnaryNegation ($val: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_UnaryPlus ($val: Unity.Mathematics.float2x3) : Unity.Mathematics.float2x3
            public static op_Equality ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.float2x3, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: Unity.Mathematics.float2x3, $rhs: number) : Unity.Mathematics.bool2x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float2x3) : Unity.Mathematics.bool2x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.float2>
            public Equals ($rhs: Unity.Mathematics.float2x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.float2, $c1: Unity.Mathematics.float2, $c2: Unity.Mathematics.float2)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x3)
            public constructor ($v: Unity.Mathematics.int2x3)
            public constructor ($v: Unity.Mathematics.uint2x3)
            public constructor ($v: Unity.Mathematics.double2x3)
        }
        class double3x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double3x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.double3
            public c1 : Unity.Mathematics.double3
            public static zero : Unity.Mathematics.double3x2
            public static op_Implicit ($v: number) : Unity.Mathematics.double3x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double3x2
            public static op_Explicit ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.double3x2
            public static op_Implicit ($v: Unity.Mathematics.int3x2) : Unity.Mathematics.double3x2
            public static op_Implicit ($v: Unity.Mathematics.uint3x2) : Unity.Mathematics.double3x2
            public static op_Implicit ($v: Unity.Mathematics.float3x2) : Unity.Mathematics.double3x2
            public static op_Multiply ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Multiply ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.double3x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Addition ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Addition ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.double3x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Subtraction ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Subtraction ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.double3x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Division ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Division ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.double3x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Modulus ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Modulus ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.double3x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Increment ($val: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Decrement ($val: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_LessThan ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_LessThan ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_UnaryNegation ($val: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_UnaryPlus ($val: Unity.Mathematics.double3x2) : Unity.Mathematics.double3x2
            public static op_Equality ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.double3x2, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.double3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double3x2) : Unity.Mathematics.bool3x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.double3>
            public Equals ($rhs: Unity.Mathematics.double3x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.double3, $c1: Unity.Mathematics.double3)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x2)
            public constructor ($v: Unity.Mathematics.int3x2)
            public constructor ($v: Unity.Mathematics.uint3x2)
            public constructor ($v: Unity.Mathematics.float3x2)
        }
        class double2x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double2x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.double2
            public c1 : Unity.Mathematics.double2
            public c2 : Unity.Mathematics.double2
            public c3 : Unity.Mathematics.double2
            public static zero : Unity.Mathematics.double2x4
            public static op_Implicit ($v: number) : Unity.Mathematics.double2x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double2x4
            public static op_Explicit ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.double2x4
            public static op_Implicit ($v: Unity.Mathematics.int2x4) : Unity.Mathematics.double2x4
            public static op_Implicit ($v: Unity.Mathematics.uint2x4) : Unity.Mathematics.double2x4
            public static op_Implicit ($v: Unity.Mathematics.float2x4) : Unity.Mathematics.double2x4
            public static op_Multiply ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Multiply ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.double2x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Addition ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Addition ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.double2x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Subtraction ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Subtraction ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.double2x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Division ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Division ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.double2x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Modulus ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Modulus ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.double2x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Increment ($val: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Decrement ($val: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_LessThan ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_LessThan ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_UnaryNegation ($val: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_UnaryPlus ($val: Unity.Mathematics.double2x4) : Unity.Mathematics.double2x4
            public static op_Equality ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.double2x4, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.double2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double2x4) : Unity.Mathematics.bool2x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.double2>
            public Equals ($rhs: Unity.Mathematics.double2x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.double2, $c1: Unity.Mathematics.double2, $c2: Unity.Mathematics.double2, $c3: Unity.Mathematics.double2)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x4)
            public constructor ($v: Unity.Mathematics.int2x4)
            public constructor ($v: Unity.Mathematics.uint2x4)
            public constructor ($v: Unity.Mathematics.float2x4)
        }
        class int2x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int2x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.int2
            public c1 : Unity.Mathematics.int2
            public c2 : Unity.Mathematics.int2
            public c3 : Unity.Mathematics.int2
            public static zero : Unity.Mathematics.int2x4
            public static op_Implicit ($v: number) : Unity.Mathematics.int2x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int2x4
            public static op_Explicit ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.int2x4
            public static op_Explicit ($v: number) : Unity.Mathematics.int2x4
            public static op_Explicit ($v: Unity.Mathematics.uint2x4) : Unity.Mathematics.int2x4
            public static op_Explicit ($v: Unity.Mathematics.float2x4) : Unity.Mathematics.int2x4
            public static op_Explicit ($v: Unity.Mathematics.double2x4) : Unity.Mathematics.int2x4
            public static op_Multiply ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Multiply ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.int2x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Addition ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Addition ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.int2x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Subtraction ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Subtraction ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.int2x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Division ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Division ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.int2x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Modulus ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Modulus ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.int2x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Increment ($val: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_Decrement ($val: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_LessThan ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_LessThan ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_UnaryNegation ($val: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_UnaryPlus ($val: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_LeftShift ($x: Unity.Mathematics.int2x4, $n: number) : Unity.Mathematics.int2x4
            public static op_RightShift ($x: Unity.Mathematics.int2x4, $n: number) : Unity.Mathematics.int2x4
            public static op_Equality ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.bool2x4
            public static op_OnesComplement ($val: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.int2x4
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.int2x4
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int2x4, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int2x4, $rhs: number) : Unity.Mathematics.int2x4
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int2x4) : Unity.Mathematics.int2x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.int2>
            public Equals ($rhs: Unity.Mathematics.int2x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.int2, $c1: Unity.Mathematics.int2, $c2: Unity.Mathematics.int2, $c3: Unity.Mathematics.int2)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x4)
            public constructor ($v: Unity.Mathematics.uint2x4)
            public constructor ($v: Unity.Mathematics.float2x4)
            public constructor ($v: Unity.Mathematics.double2x4)
        }
        class uint2x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint2x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.uint2
            public c1 : Unity.Mathematics.uint2
            public c2 : Unity.Mathematics.uint2
            public c3 : Unity.Mathematics.uint2
            public static zero : Unity.Mathematics.uint2x4
            public static op_Implicit ($v: number) : Unity.Mathematics.uint2x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint2x4
            public static op_Explicit ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.uint2x4
            public static op_Explicit ($v: number) : Unity.Mathematics.uint2x4
            public static op_Explicit ($v: Unity.Mathematics.int2x4) : Unity.Mathematics.uint2x4
            public static op_Explicit ($v: Unity.Mathematics.float2x4) : Unity.Mathematics.uint2x4
            public static op_Explicit ($v: Unity.Mathematics.double2x4) : Unity.Mathematics.uint2x4
            public static op_Multiply ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Multiply ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.uint2x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Addition ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Addition ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.uint2x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Subtraction ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Subtraction ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.uint2x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Division ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Division ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.uint2x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Modulus ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Modulus ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.uint2x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Increment ($val: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_Decrement ($val: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_LessThan ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_LessThan ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_UnaryNegation ($val: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_UnaryPlus ($val: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_LeftShift ($x: Unity.Mathematics.uint2x4, $n: number) : Unity.Mathematics.uint2x4
            public static op_RightShift ($x: Unity.Mathematics.uint2x4, $n: number) : Unity.Mathematics.uint2x4
            public static op_Equality ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.bool2x4
            public static op_OnesComplement ($val: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.uint2x4
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.uint2x4
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint2x4, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint2x4, $rhs: number) : Unity.Mathematics.uint2x4
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint2x4) : Unity.Mathematics.uint2x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.uint2>
            public Equals ($rhs: Unity.Mathematics.uint2x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.uint2, $c1: Unity.Mathematics.uint2, $c2: Unity.Mathematics.uint2, $c3: Unity.Mathematics.uint2)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x4)
            public constructor ($v: Unity.Mathematics.int2x4)
            public constructor ($v: Unity.Mathematics.float2x4)
            public constructor ($v: Unity.Mathematics.double2x4)
        }
        class float2x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float2x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.float2
            public c1 : Unity.Mathematics.float2
            public c2 : Unity.Mathematics.float2
            public c3 : Unity.Mathematics.float2
            public static zero : Unity.Mathematics.float2x4
            public static op_Implicit ($v: number) : Unity.Mathematics.float2x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float2x4
            public static op_Explicit ($v: Unity.Mathematics.bool2x4) : Unity.Mathematics.float2x4
            public static op_Implicit ($v: Unity.Mathematics.int2x4) : Unity.Mathematics.float2x4
            public static op_Implicit ($v: Unity.Mathematics.uint2x4) : Unity.Mathematics.float2x4
            public static op_Explicit ($v: number) : Unity.Mathematics.float2x4
            public static op_Explicit ($v: Unity.Mathematics.double2x4) : Unity.Mathematics.float2x4
            public static op_Multiply ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Multiply ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.float2x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Addition ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Addition ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.float2x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Subtraction ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Subtraction ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.float2x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Division ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Division ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.float2x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Modulus ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Modulus ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.float2x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Increment ($val: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Decrement ($val: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_LessThan ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_LessThan ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_UnaryNegation ($val: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_UnaryPlus ($val: Unity.Mathematics.float2x4) : Unity.Mathematics.float2x4
            public static op_Equality ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.float2x4, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: Unity.Mathematics.float2x4, $rhs: number) : Unity.Mathematics.bool2x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float2x4) : Unity.Mathematics.bool2x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.float2>
            public Equals ($rhs: Unity.Mathematics.float2x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.float2, $c1: Unity.Mathematics.float2, $c2: Unity.Mathematics.float2, $c3: Unity.Mathematics.float2)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool2x4)
            public constructor ($v: Unity.Mathematics.int2x4)
            public constructor ($v: Unity.Mathematics.uint2x4)
            public constructor ($v: Unity.Mathematics.double2x4)
        }
        class double4x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double4x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.double4
            public c1 : Unity.Mathematics.double4
            public static zero : Unity.Mathematics.double4x2
            public static op_Implicit ($v: number) : Unity.Mathematics.double4x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double4x2
            public static op_Explicit ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.double4x2
            public static op_Implicit ($v: Unity.Mathematics.int4x2) : Unity.Mathematics.double4x2
            public static op_Implicit ($v: Unity.Mathematics.uint4x2) : Unity.Mathematics.double4x2
            public static op_Implicit ($v: Unity.Mathematics.float4x2) : Unity.Mathematics.double4x2
            public static op_Multiply ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Multiply ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.double4x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Addition ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Addition ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.double4x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Subtraction ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Subtraction ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.double4x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Division ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Division ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.double4x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Modulus ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Modulus ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.double4x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Increment ($val: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Decrement ($val: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_LessThan ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_LessThan ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_UnaryNegation ($val: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_UnaryPlus ($val: Unity.Mathematics.double4x2) : Unity.Mathematics.double4x2
            public static op_Equality ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.double4x2, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.double4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double4x2) : Unity.Mathematics.bool4x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.double4>
            public Equals ($rhs: Unity.Mathematics.double4x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.double4, $c1: Unity.Mathematics.double4)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number, $m30: number, $m31: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x2)
            public constructor ($v: Unity.Mathematics.int4x2)
            public constructor ($v: Unity.Mathematics.uint4x2)
            public constructor ($v: Unity.Mathematics.float4x2)
        }
        class int3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int3>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public z : number
            public static zero : Unity.Mathematics.int3
            public get xxxx(): Unity.Mathematics.int4;
            public get xxxy(): Unity.Mathematics.int4;
            public get xxxz(): Unity.Mathematics.int4;
            public get xxyx(): Unity.Mathematics.int4;
            public get xxyy(): Unity.Mathematics.int4;
            public get xxyz(): Unity.Mathematics.int4;
            public get xxzx(): Unity.Mathematics.int4;
            public get xxzy(): Unity.Mathematics.int4;
            public get xxzz(): Unity.Mathematics.int4;
            public get xyxx(): Unity.Mathematics.int4;
            public get xyxy(): Unity.Mathematics.int4;
            public get xyxz(): Unity.Mathematics.int4;
            public get xyyx(): Unity.Mathematics.int4;
            public get xyyy(): Unity.Mathematics.int4;
            public get xyyz(): Unity.Mathematics.int4;
            public get xyzx(): Unity.Mathematics.int4;
            public get xyzy(): Unity.Mathematics.int4;
            public get xyzz(): Unity.Mathematics.int4;
            public get xzxx(): Unity.Mathematics.int4;
            public get xzxy(): Unity.Mathematics.int4;
            public get xzxz(): Unity.Mathematics.int4;
            public get xzyx(): Unity.Mathematics.int4;
            public get xzyy(): Unity.Mathematics.int4;
            public get xzyz(): Unity.Mathematics.int4;
            public get xzzx(): Unity.Mathematics.int4;
            public get xzzy(): Unity.Mathematics.int4;
            public get xzzz(): Unity.Mathematics.int4;
            public get yxxx(): Unity.Mathematics.int4;
            public get yxxy(): Unity.Mathematics.int4;
            public get yxxz(): Unity.Mathematics.int4;
            public get yxyx(): Unity.Mathematics.int4;
            public get yxyy(): Unity.Mathematics.int4;
            public get yxyz(): Unity.Mathematics.int4;
            public get yxzx(): Unity.Mathematics.int4;
            public get yxzy(): Unity.Mathematics.int4;
            public get yxzz(): Unity.Mathematics.int4;
            public get yyxx(): Unity.Mathematics.int4;
            public get yyxy(): Unity.Mathematics.int4;
            public get yyxz(): Unity.Mathematics.int4;
            public get yyyx(): Unity.Mathematics.int4;
            public get yyyy(): Unity.Mathematics.int4;
            public get yyyz(): Unity.Mathematics.int4;
            public get yyzx(): Unity.Mathematics.int4;
            public get yyzy(): Unity.Mathematics.int4;
            public get yyzz(): Unity.Mathematics.int4;
            public get yzxx(): Unity.Mathematics.int4;
            public get yzxy(): Unity.Mathematics.int4;
            public get yzxz(): Unity.Mathematics.int4;
            public get yzyx(): Unity.Mathematics.int4;
            public get yzyy(): Unity.Mathematics.int4;
            public get yzyz(): Unity.Mathematics.int4;
            public get yzzx(): Unity.Mathematics.int4;
            public get yzzy(): Unity.Mathematics.int4;
            public get yzzz(): Unity.Mathematics.int4;
            public get zxxx(): Unity.Mathematics.int4;
            public get zxxy(): Unity.Mathematics.int4;
            public get zxxz(): Unity.Mathematics.int4;
            public get zxyx(): Unity.Mathematics.int4;
            public get zxyy(): Unity.Mathematics.int4;
            public get zxyz(): Unity.Mathematics.int4;
            public get zxzx(): Unity.Mathematics.int4;
            public get zxzy(): Unity.Mathematics.int4;
            public get zxzz(): Unity.Mathematics.int4;
            public get zyxx(): Unity.Mathematics.int4;
            public get zyxy(): Unity.Mathematics.int4;
            public get zyxz(): Unity.Mathematics.int4;
            public get zyyx(): Unity.Mathematics.int4;
            public get zyyy(): Unity.Mathematics.int4;
            public get zyyz(): Unity.Mathematics.int4;
            public get zyzx(): Unity.Mathematics.int4;
            public get zyzy(): Unity.Mathematics.int4;
            public get zyzz(): Unity.Mathematics.int4;
            public get zzxx(): Unity.Mathematics.int4;
            public get zzxy(): Unity.Mathematics.int4;
            public get zzxz(): Unity.Mathematics.int4;
            public get zzyx(): Unity.Mathematics.int4;
            public get zzyy(): Unity.Mathematics.int4;
            public get zzyz(): Unity.Mathematics.int4;
            public get zzzx(): Unity.Mathematics.int4;
            public get zzzy(): Unity.Mathematics.int4;
            public get zzzz(): Unity.Mathematics.int4;
            public get xxx(): Unity.Mathematics.int3;
            public get xxy(): Unity.Mathematics.int3;
            public get xxz(): Unity.Mathematics.int3;
            public get xyx(): Unity.Mathematics.int3;
            public get xyy(): Unity.Mathematics.int3;
            public get xyz(): Unity.Mathematics.int3;
            public set xyz(value: Unity.Mathematics.int3);
            public get xzx(): Unity.Mathematics.int3;
            public get xzy(): Unity.Mathematics.int3;
            public set xzy(value: Unity.Mathematics.int3);
            public get xzz(): Unity.Mathematics.int3;
            public get yxx(): Unity.Mathematics.int3;
            public get yxy(): Unity.Mathematics.int3;
            public get yxz(): Unity.Mathematics.int3;
            public set yxz(value: Unity.Mathematics.int3);
            public get yyx(): Unity.Mathematics.int3;
            public get yyy(): Unity.Mathematics.int3;
            public get yyz(): Unity.Mathematics.int3;
            public get yzx(): Unity.Mathematics.int3;
            public set yzx(value: Unity.Mathematics.int3);
            public get yzy(): Unity.Mathematics.int3;
            public get yzz(): Unity.Mathematics.int3;
            public get zxx(): Unity.Mathematics.int3;
            public get zxy(): Unity.Mathematics.int3;
            public set zxy(value: Unity.Mathematics.int3);
            public get zxz(): Unity.Mathematics.int3;
            public get zyx(): Unity.Mathematics.int3;
            public set zyx(value: Unity.Mathematics.int3);
            public get zyy(): Unity.Mathematics.int3;
            public get zyz(): Unity.Mathematics.int3;
            public get zzx(): Unity.Mathematics.int3;
            public get zzy(): Unity.Mathematics.int3;
            public get zzz(): Unity.Mathematics.int3;
            public get xx(): Unity.Mathematics.int2;
            public get xy(): Unity.Mathematics.int2;
            public set xy(value: Unity.Mathematics.int2);
            public get xz(): Unity.Mathematics.int2;
            public set xz(value: Unity.Mathematics.int2);
            public get yx(): Unity.Mathematics.int2;
            public set yx(value: Unity.Mathematics.int2);
            public get yy(): Unity.Mathematics.int2;
            public get yz(): Unity.Mathematics.int2;
            public set yz(value: Unity.Mathematics.int2);
            public get zx(): Unity.Mathematics.int2;
            public set zx(value: Unity.Mathematics.int2);
            public get zy(): Unity.Mathematics.int2;
            public set zy(value: Unity.Mathematics.int2);
            public get zz(): Unity.Mathematics.int2;
            public static op_Implicit ($v: number) : Unity.Mathematics.int3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int3
            public static op_Explicit ($v: Unity.Mathematics.bool3) : Unity.Mathematics.int3
            public static op_Explicit ($v: number) : Unity.Mathematics.int3
            public static op_Explicit ($v: Unity.Mathematics.uint3) : Unity.Mathematics.int3
            public static op_Explicit ($v: Unity.Mathematics.float3) : Unity.Mathematics.int3
            public static op_Explicit ($v: Unity.Mathematics.double3) : Unity.Mathematics.int3
            public static op_Multiply ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Multiply ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.int3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Addition ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Addition ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.int3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Subtraction ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Subtraction ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.int3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Division ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Division ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.int3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Modulus ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Modulus ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.int3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Increment ($val: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_Decrement ($val: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_LessThan ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_LessThan ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.bool3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_UnaryNegation ($val: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_UnaryPlus ($val: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_LeftShift ($x: Unity.Mathematics.int3, $n: number) : Unity.Mathematics.int3
            public static op_RightShift ($x: Unity.Mathematics.int3, $n: number) : Unity.Mathematics.int3
            public static op_Equality ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.bool3
            public static op_OnesComplement ($val: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.int3
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.int3
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int3, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int3, $rhs: number) : Unity.Mathematics.int3
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.int3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $yz: Unity.Mathematics.int2)
            public constructor ($xy: Unity.Mathematics.int2, $z: number)
            public constructor ($xyz: Unity.Mathematics.int3)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3)
            public constructor ($v: Unity.Mathematics.uint3)
            public constructor ($v: Unity.Mathematics.float3)
            public constructor ($v: Unity.Mathematics.double3)
        }
        class half3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.half3>
        {
            protected [__keep_incompatibility]: never;
            public x : Unity.Mathematics.half
            public y : Unity.Mathematics.half
            public z : Unity.Mathematics.half
            public static zero : Unity.Mathematics.half3
            public get xxxx(): Unity.Mathematics.half4;
            public get xxxy(): Unity.Mathematics.half4;
            public get xxxz(): Unity.Mathematics.half4;
            public get xxyx(): Unity.Mathematics.half4;
            public get xxyy(): Unity.Mathematics.half4;
            public get xxyz(): Unity.Mathematics.half4;
            public get xxzx(): Unity.Mathematics.half4;
            public get xxzy(): Unity.Mathematics.half4;
            public get xxzz(): Unity.Mathematics.half4;
            public get xyxx(): Unity.Mathematics.half4;
            public get xyxy(): Unity.Mathematics.half4;
            public get xyxz(): Unity.Mathematics.half4;
            public get xyyx(): Unity.Mathematics.half4;
            public get xyyy(): Unity.Mathematics.half4;
            public get xyyz(): Unity.Mathematics.half4;
            public get xyzx(): Unity.Mathematics.half4;
            public get xyzy(): Unity.Mathematics.half4;
            public get xyzz(): Unity.Mathematics.half4;
            public get xzxx(): Unity.Mathematics.half4;
            public get xzxy(): Unity.Mathematics.half4;
            public get xzxz(): Unity.Mathematics.half4;
            public get xzyx(): Unity.Mathematics.half4;
            public get xzyy(): Unity.Mathematics.half4;
            public get xzyz(): Unity.Mathematics.half4;
            public get xzzx(): Unity.Mathematics.half4;
            public get xzzy(): Unity.Mathematics.half4;
            public get xzzz(): Unity.Mathematics.half4;
            public get yxxx(): Unity.Mathematics.half4;
            public get yxxy(): Unity.Mathematics.half4;
            public get yxxz(): Unity.Mathematics.half4;
            public get yxyx(): Unity.Mathematics.half4;
            public get yxyy(): Unity.Mathematics.half4;
            public get yxyz(): Unity.Mathematics.half4;
            public get yxzx(): Unity.Mathematics.half4;
            public get yxzy(): Unity.Mathematics.half4;
            public get yxzz(): Unity.Mathematics.half4;
            public get yyxx(): Unity.Mathematics.half4;
            public get yyxy(): Unity.Mathematics.half4;
            public get yyxz(): Unity.Mathematics.half4;
            public get yyyx(): Unity.Mathematics.half4;
            public get yyyy(): Unity.Mathematics.half4;
            public get yyyz(): Unity.Mathematics.half4;
            public get yyzx(): Unity.Mathematics.half4;
            public get yyzy(): Unity.Mathematics.half4;
            public get yyzz(): Unity.Mathematics.half4;
            public get yzxx(): Unity.Mathematics.half4;
            public get yzxy(): Unity.Mathematics.half4;
            public get yzxz(): Unity.Mathematics.half4;
            public get yzyx(): Unity.Mathematics.half4;
            public get yzyy(): Unity.Mathematics.half4;
            public get yzyz(): Unity.Mathematics.half4;
            public get yzzx(): Unity.Mathematics.half4;
            public get yzzy(): Unity.Mathematics.half4;
            public get yzzz(): Unity.Mathematics.half4;
            public get zxxx(): Unity.Mathematics.half4;
            public get zxxy(): Unity.Mathematics.half4;
            public get zxxz(): Unity.Mathematics.half4;
            public get zxyx(): Unity.Mathematics.half4;
            public get zxyy(): Unity.Mathematics.half4;
            public get zxyz(): Unity.Mathematics.half4;
            public get zxzx(): Unity.Mathematics.half4;
            public get zxzy(): Unity.Mathematics.half4;
            public get zxzz(): Unity.Mathematics.half4;
            public get zyxx(): Unity.Mathematics.half4;
            public get zyxy(): Unity.Mathematics.half4;
            public get zyxz(): Unity.Mathematics.half4;
            public get zyyx(): Unity.Mathematics.half4;
            public get zyyy(): Unity.Mathematics.half4;
            public get zyyz(): Unity.Mathematics.half4;
            public get zyzx(): Unity.Mathematics.half4;
            public get zyzy(): Unity.Mathematics.half4;
            public get zyzz(): Unity.Mathematics.half4;
            public get zzxx(): Unity.Mathematics.half4;
            public get zzxy(): Unity.Mathematics.half4;
            public get zzxz(): Unity.Mathematics.half4;
            public get zzyx(): Unity.Mathematics.half4;
            public get zzyy(): Unity.Mathematics.half4;
            public get zzyz(): Unity.Mathematics.half4;
            public get zzzx(): Unity.Mathematics.half4;
            public get zzzy(): Unity.Mathematics.half4;
            public get zzzz(): Unity.Mathematics.half4;
            public get xxx(): Unity.Mathematics.half3;
            public get xxy(): Unity.Mathematics.half3;
            public get xxz(): Unity.Mathematics.half3;
            public get xyx(): Unity.Mathematics.half3;
            public get xyy(): Unity.Mathematics.half3;
            public get xyz(): Unity.Mathematics.half3;
            public set xyz(value: Unity.Mathematics.half3);
            public get xzx(): Unity.Mathematics.half3;
            public get xzy(): Unity.Mathematics.half3;
            public set xzy(value: Unity.Mathematics.half3);
            public get xzz(): Unity.Mathematics.half3;
            public get yxx(): Unity.Mathematics.half3;
            public get yxy(): Unity.Mathematics.half3;
            public get yxz(): Unity.Mathematics.half3;
            public set yxz(value: Unity.Mathematics.half3);
            public get yyx(): Unity.Mathematics.half3;
            public get yyy(): Unity.Mathematics.half3;
            public get yyz(): Unity.Mathematics.half3;
            public get yzx(): Unity.Mathematics.half3;
            public set yzx(value: Unity.Mathematics.half3);
            public get yzy(): Unity.Mathematics.half3;
            public get yzz(): Unity.Mathematics.half3;
            public get zxx(): Unity.Mathematics.half3;
            public get zxy(): Unity.Mathematics.half3;
            public set zxy(value: Unity.Mathematics.half3);
            public get zxz(): Unity.Mathematics.half3;
            public get zyx(): Unity.Mathematics.half3;
            public set zyx(value: Unity.Mathematics.half3);
            public get zyy(): Unity.Mathematics.half3;
            public get zyz(): Unity.Mathematics.half3;
            public get zzx(): Unity.Mathematics.half3;
            public get zzy(): Unity.Mathematics.half3;
            public get zzz(): Unity.Mathematics.half3;
            public get xx(): Unity.Mathematics.half2;
            public get xy(): Unity.Mathematics.half2;
            public set xy(value: Unity.Mathematics.half2);
            public get xz(): Unity.Mathematics.half2;
            public set xz(value: Unity.Mathematics.half2);
            public get yx(): Unity.Mathematics.half2;
            public set yx(value: Unity.Mathematics.half2);
            public get yy(): Unity.Mathematics.half2;
            public get yz(): Unity.Mathematics.half2;
            public set yz(value: Unity.Mathematics.half2);
            public get zx(): Unity.Mathematics.half2;
            public set zx(value: Unity.Mathematics.half2);
            public get zy(): Unity.Mathematics.half2;
            public set zy(value: Unity.Mathematics.half2);
            public get zz(): Unity.Mathematics.half2;
            public static op_Implicit ($v: Unity.Mathematics.half) : Unity.Mathematics.half3
            public static op_Explicit ($v: number) : Unity.Mathematics.half3
            public static op_Explicit ($v: Unity.Mathematics.float3) : Unity.Mathematics.half3
            public static op_Explicit ($v: Unity.Mathematics.double3) : Unity.Mathematics.half3
            public static op_Equality ($lhs: Unity.Mathematics.half3, $rhs: Unity.Mathematics.half3) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: Unity.Mathematics.half3, $rhs: Unity.Mathematics.half) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: Unity.Mathematics.half, $rhs: Unity.Mathematics.half3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.half3, $rhs: Unity.Mathematics.half3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.half3, $rhs: Unity.Mathematics.half) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.half, $rhs: Unity.Mathematics.half3) : Unity.Mathematics.bool3
            public get_Item ($index: number) : Unity.Mathematics.half
            public set_Item ($index: number, $value: Unity.Mathematics.half) : void
            public Equals ($rhs: Unity.Mathematics.half3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: Unity.Mathematics.half, $y: Unity.Mathematics.half, $z: Unity.Mathematics.half)
            public constructor ($x: Unity.Mathematics.half, $yz: Unity.Mathematics.half2)
            public constructor ($xy: Unity.Mathematics.half2, $z: Unity.Mathematics.half)
            public constructor ($xyz: Unity.Mathematics.half3)
            public constructor ($v: Unity.Mathematics.half)
            public constructor ($v: number)
            public constructor ($v: Unity.Mathematics.float3)
            public constructor ($v: Unity.Mathematics.double3)
        }
        class float3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float3>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public z : number
            public static zero : Unity.Mathematics.float3
            public get xxxx(): Unity.Mathematics.float4;
            public get xxxy(): Unity.Mathematics.float4;
            public get xxxz(): Unity.Mathematics.float4;
            public get xxyx(): Unity.Mathematics.float4;
            public get xxyy(): Unity.Mathematics.float4;
            public get xxyz(): Unity.Mathematics.float4;
            public get xxzx(): Unity.Mathematics.float4;
            public get xxzy(): Unity.Mathematics.float4;
            public get xxzz(): Unity.Mathematics.float4;
            public get xyxx(): Unity.Mathematics.float4;
            public get xyxy(): Unity.Mathematics.float4;
            public get xyxz(): Unity.Mathematics.float4;
            public get xyyx(): Unity.Mathematics.float4;
            public get xyyy(): Unity.Mathematics.float4;
            public get xyyz(): Unity.Mathematics.float4;
            public get xyzx(): Unity.Mathematics.float4;
            public get xyzy(): Unity.Mathematics.float4;
            public get xyzz(): Unity.Mathematics.float4;
            public get xzxx(): Unity.Mathematics.float4;
            public get xzxy(): Unity.Mathematics.float4;
            public get xzxz(): Unity.Mathematics.float4;
            public get xzyx(): Unity.Mathematics.float4;
            public get xzyy(): Unity.Mathematics.float4;
            public get xzyz(): Unity.Mathematics.float4;
            public get xzzx(): Unity.Mathematics.float4;
            public get xzzy(): Unity.Mathematics.float4;
            public get xzzz(): Unity.Mathematics.float4;
            public get yxxx(): Unity.Mathematics.float4;
            public get yxxy(): Unity.Mathematics.float4;
            public get yxxz(): Unity.Mathematics.float4;
            public get yxyx(): Unity.Mathematics.float4;
            public get yxyy(): Unity.Mathematics.float4;
            public get yxyz(): Unity.Mathematics.float4;
            public get yxzx(): Unity.Mathematics.float4;
            public get yxzy(): Unity.Mathematics.float4;
            public get yxzz(): Unity.Mathematics.float4;
            public get yyxx(): Unity.Mathematics.float4;
            public get yyxy(): Unity.Mathematics.float4;
            public get yyxz(): Unity.Mathematics.float4;
            public get yyyx(): Unity.Mathematics.float4;
            public get yyyy(): Unity.Mathematics.float4;
            public get yyyz(): Unity.Mathematics.float4;
            public get yyzx(): Unity.Mathematics.float4;
            public get yyzy(): Unity.Mathematics.float4;
            public get yyzz(): Unity.Mathematics.float4;
            public get yzxx(): Unity.Mathematics.float4;
            public get yzxy(): Unity.Mathematics.float4;
            public get yzxz(): Unity.Mathematics.float4;
            public get yzyx(): Unity.Mathematics.float4;
            public get yzyy(): Unity.Mathematics.float4;
            public get yzyz(): Unity.Mathematics.float4;
            public get yzzx(): Unity.Mathematics.float4;
            public get yzzy(): Unity.Mathematics.float4;
            public get yzzz(): Unity.Mathematics.float4;
            public get zxxx(): Unity.Mathematics.float4;
            public get zxxy(): Unity.Mathematics.float4;
            public get zxxz(): Unity.Mathematics.float4;
            public get zxyx(): Unity.Mathematics.float4;
            public get zxyy(): Unity.Mathematics.float4;
            public get zxyz(): Unity.Mathematics.float4;
            public get zxzx(): Unity.Mathematics.float4;
            public get zxzy(): Unity.Mathematics.float4;
            public get zxzz(): Unity.Mathematics.float4;
            public get zyxx(): Unity.Mathematics.float4;
            public get zyxy(): Unity.Mathematics.float4;
            public get zyxz(): Unity.Mathematics.float4;
            public get zyyx(): Unity.Mathematics.float4;
            public get zyyy(): Unity.Mathematics.float4;
            public get zyyz(): Unity.Mathematics.float4;
            public get zyzx(): Unity.Mathematics.float4;
            public get zyzy(): Unity.Mathematics.float4;
            public get zyzz(): Unity.Mathematics.float4;
            public get zzxx(): Unity.Mathematics.float4;
            public get zzxy(): Unity.Mathematics.float4;
            public get zzxz(): Unity.Mathematics.float4;
            public get zzyx(): Unity.Mathematics.float4;
            public get zzyy(): Unity.Mathematics.float4;
            public get zzyz(): Unity.Mathematics.float4;
            public get zzzx(): Unity.Mathematics.float4;
            public get zzzy(): Unity.Mathematics.float4;
            public get zzzz(): Unity.Mathematics.float4;
            public get xxx(): Unity.Mathematics.float3;
            public get xxy(): Unity.Mathematics.float3;
            public get xxz(): Unity.Mathematics.float3;
            public get xyx(): Unity.Mathematics.float3;
            public get xyy(): Unity.Mathematics.float3;
            public get xyz(): Unity.Mathematics.float3;
            public set xyz(value: Unity.Mathematics.float3);
            public get xzx(): Unity.Mathematics.float3;
            public get xzy(): Unity.Mathematics.float3;
            public set xzy(value: Unity.Mathematics.float3);
            public get xzz(): Unity.Mathematics.float3;
            public get yxx(): Unity.Mathematics.float3;
            public get yxy(): Unity.Mathematics.float3;
            public get yxz(): Unity.Mathematics.float3;
            public set yxz(value: Unity.Mathematics.float3);
            public get yyx(): Unity.Mathematics.float3;
            public get yyy(): Unity.Mathematics.float3;
            public get yyz(): Unity.Mathematics.float3;
            public get yzx(): Unity.Mathematics.float3;
            public set yzx(value: Unity.Mathematics.float3);
            public get yzy(): Unity.Mathematics.float3;
            public get yzz(): Unity.Mathematics.float3;
            public get zxx(): Unity.Mathematics.float3;
            public get zxy(): Unity.Mathematics.float3;
            public set zxy(value: Unity.Mathematics.float3);
            public get zxz(): Unity.Mathematics.float3;
            public get zyx(): Unity.Mathematics.float3;
            public set zyx(value: Unity.Mathematics.float3);
            public get zyy(): Unity.Mathematics.float3;
            public get zyz(): Unity.Mathematics.float3;
            public get zzx(): Unity.Mathematics.float3;
            public get zzy(): Unity.Mathematics.float3;
            public get zzz(): Unity.Mathematics.float3;
            public get xx(): Unity.Mathematics.float2;
            public get xy(): Unity.Mathematics.float2;
            public set xy(value: Unity.Mathematics.float2);
            public get xz(): Unity.Mathematics.float2;
            public set xz(value: Unity.Mathematics.float2);
            public get yx(): Unity.Mathematics.float2;
            public set yx(value: Unity.Mathematics.float2);
            public get yy(): Unity.Mathematics.float2;
            public get yz(): Unity.Mathematics.float2;
            public set yz(value: Unity.Mathematics.float2);
            public get zx(): Unity.Mathematics.float2;
            public set zx(value: Unity.Mathematics.float2);
            public get zy(): Unity.Mathematics.float2;
            public set zy(value: Unity.Mathematics.float2);
            public get zz(): Unity.Mathematics.float2;
            public static op_Implicit ($v: number) : Unity.Mathematics.float3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float3
            public static op_Explicit ($v: Unity.Mathematics.bool3) : Unity.Mathematics.float3
            public static op_Implicit ($v: Unity.Mathematics.int3) : Unity.Mathematics.float3
            public static op_Implicit ($v: Unity.Mathematics.uint3) : Unity.Mathematics.float3
            public static op_Implicit ($v: Unity.Mathematics.half) : Unity.Mathematics.float3
            public static op_Implicit ($v: Unity.Mathematics.half3) : Unity.Mathematics.float3
            public static op_Explicit ($v: number) : Unity.Mathematics.float3
            public static op_Explicit ($v: Unity.Mathematics.double3) : Unity.Mathematics.float3
            public static op_Multiply ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Multiply ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.float3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Addition ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Addition ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.float3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Subtraction ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Subtraction ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.float3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Division ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Division ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.float3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Modulus ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Modulus ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.float3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Increment ($val: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Decrement ($val: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_LessThan ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_LessThan ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.bool3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.bool3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.bool3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.bool3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_UnaryNegation ($val: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_UnaryPlus ($val: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public static op_Equality ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.bool3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.float3, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: Unity.Mathematics.float3, $rhs: number) : Unity.Mathematics.bool3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float3) : Unity.Mathematics.bool3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.float3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static op_Implicit ($v: Unity.Mathematics.float3) : UnityEngine.Vector3
            public static op_Implicit ($v: UnityEngine.Vector3) : Unity.Mathematics.float3
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $yz: Unity.Mathematics.float2)
            public constructor ($xy: Unity.Mathematics.float2, $z: number)
            public constructor ($xyz: Unity.Mathematics.float3)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3)
            public constructor ($v: Unity.Mathematics.int3)
            public constructor ($v: Unity.Mathematics.uint3)
            public constructor ($v: Unity.Mathematics.half)
            public constructor ($v: Unity.Mathematics.half3)
            public constructor ($v: Unity.Mathematics.double3)
        }
        class int3x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int3x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.int3
            public c1 : Unity.Mathematics.int3
            public static zero : Unity.Mathematics.int3x2
            public static op_Implicit ($v: number) : Unity.Mathematics.int3x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int3x2
            public static op_Explicit ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.int3x2
            public static op_Explicit ($v: number) : Unity.Mathematics.int3x2
            public static op_Explicit ($v: Unity.Mathematics.uint3x2) : Unity.Mathematics.int3x2
            public static op_Explicit ($v: Unity.Mathematics.float3x2) : Unity.Mathematics.int3x2
            public static op_Explicit ($v: Unity.Mathematics.double3x2) : Unity.Mathematics.int3x2
            public static op_Multiply ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Multiply ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.int3x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Addition ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Addition ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.int3x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Subtraction ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Subtraction ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.int3x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Division ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Division ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.int3x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Modulus ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Modulus ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.int3x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Increment ($val: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_Decrement ($val: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_LessThan ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_LessThan ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_UnaryNegation ($val: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_UnaryPlus ($val: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_LeftShift ($x: Unity.Mathematics.int3x2, $n: number) : Unity.Mathematics.int3x2
            public static op_RightShift ($x: Unity.Mathematics.int3x2, $n: number) : Unity.Mathematics.int3x2
            public static op_Equality ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.bool3x2
            public static op_OnesComplement ($val: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.int3x2
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.int3x2
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int3x2, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int3x2, $rhs: number) : Unity.Mathematics.int3x2
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int3x2) : Unity.Mathematics.int3x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.int3>
            public Equals ($rhs: Unity.Mathematics.int3x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.int3, $c1: Unity.Mathematics.int3)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x2)
            public constructor ($v: Unity.Mathematics.uint3x2)
            public constructor ($v: Unity.Mathematics.float3x2)
            public constructor ($v: Unity.Mathematics.double3x2)
        }
        class uint3x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint3x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.uint3
            public c1 : Unity.Mathematics.uint3
            public static zero : Unity.Mathematics.uint3x2
            public static op_Implicit ($v: number) : Unity.Mathematics.uint3x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint3x2
            public static op_Explicit ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.uint3x2
            public static op_Explicit ($v: number) : Unity.Mathematics.uint3x2
            public static op_Explicit ($v: Unity.Mathematics.int3x2) : Unity.Mathematics.uint3x2
            public static op_Explicit ($v: Unity.Mathematics.float3x2) : Unity.Mathematics.uint3x2
            public static op_Explicit ($v: Unity.Mathematics.double3x2) : Unity.Mathematics.uint3x2
            public static op_Multiply ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Multiply ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.uint3x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Addition ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Addition ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.uint3x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Subtraction ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Subtraction ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.uint3x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Division ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Division ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.uint3x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Modulus ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Modulus ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.uint3x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Increment ($val: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_Decrement ($val: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_LessThan ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_LessThan ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_UnaryNegation ($val: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_UnaryPlus ($val: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_LeftShift ($x: Unity.Mathematics.uint3x2, $n: number) : Unity.Mathematics.uint3x2
            public static op_RightShift ($x: Unity.Mathematics.uint3x2, $n: number) : Unity.Mathematics.uint3x2
            public static op_Equality ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.bool3x2
            public static op_OnesComplement ($val: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.uint3x2
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.uint3x2
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint3x2, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint3x2, $rhs: number) : Unity.Mathematics.uint3x2
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint3x2) : Unity.Mathematics.uint3x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.uint3>
            public Equals ($rhs: Unity.Mathematics.uint3x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.uint3, $c1: Unity.Mathematics.uint3)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x2)
            public constructor ($v: Unity.Mathematics.int3x2)
            public constructor ($v: Unity.Mathematics.float3x2)
            public constructor ($v: Unity.Mathematics.double3x2)
        }
        class float3x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float3x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.float3
            public c1 : Unity.Mathematics.float3
            public static zero : Unity.Mathematics.float3x2
            public static op_Implicit ($v: number) : Unity.Mathematics.float3x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float3x2
            public static op_Explicit ($v: Unity.Mathematics.bool3x2) : Unity.Mathematics.float3x2
            public static op_Implicit ($v: Unity.Mathematics.int3x2) : Unity.Mathematics.float3x2
            public static op_Implicit ($v: Unity.Mathematics.uint3x2) : Unity.Mathematics.float3x2
            public static op_Explicit ($v: number) : Unity.Mathematics.float3x2
            public static op_Explicit ($v: Unity.Mathematics.double3x2) : Unity.Mathematics.float3x2
            public static op_Multiply ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Multiply ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.float3x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Addition ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Addition ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.float3x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Subtraction ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Subtraction ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.float3x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Division ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Division ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.float3x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Modulus ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Modulus ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.float3x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Increment ($val: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Decrement ($val: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_LessThan ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_LessThan ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_UnaryNegation ($val: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_UnaryPlus ($val: Unity.Mathematics.float3x2) : Unity.Mathematics.float3x2
            public static op_Equality ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.float3x2, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: Unity.Mathematics.float3x2, $rhs: number) : Unity.Mathematics.bool3x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float3x2) : Unity.Mathematics.bool3x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.float3>
            public Equals ($rhs: Unity.Mathematics.float3x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.float3, $c1: Unity.Mathematics.float3)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x2)
            public constructor ($v: Unity.Mathematics.int3x2)
            public constructor ($v: Unity.Mathematics.uint3x2)
            public constructor ($v: Unity.Mathematics.double3x2)
        }
        class double3x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double3x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.double3
            public c1 : Unity.Mathematics.double3
            public c2 : Unity.Mathematics.double3
            public static identity : Unity.Mathematics.double3x3
            public static zero : Unity.Mathematics.double3x3
            public static op_Implicit ($v: number) : Unity.Mathematics.double3x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double3x3
            public static op_Explicit ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.double3x3
            public static op_Implicit ($v: Unity.Mathematics.int3x3) : Unity.Mathematics.double3x3
            public static op_Implicit ($v: Unity.Mathematics.uint3x3) : Unity.Mathematics.double3x3
            public static op_Implicit ($v: Unity.Mathematics.float3x3) : Unity.Mathematics.double3x3
            public static op_Multiply ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Multiply ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.double3x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Addition ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Addition ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.double3x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Subtraction ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Subtraction ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.double3x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Division ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Division ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.double3x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Modulus ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Modulus ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.double3x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Increment ($val: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Decrement ($val: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_LessThan ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_LessThan ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_UnaryNegation ($val: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_UnaryPlus ($val: Unity.Mathematics.double3x3) : Unity.Mathematics.double3x3
            public static op_Equality ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.double3x3, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.double3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double3x3) : Unity.Mathematics.bool3x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.double3>
            public Equals ($rhs: Unity.Mathematics.double3x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.double3, $c1: Unity.Mathematics.double3, $c2: Unity.Mathematics.double3)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x3)
            public constructor ($v: Unity.Mathematics.int3x3)
            public constructor ($v: Unity.Mathematics.uint3x3)
            public constructor ($v: Unity.Mathematics.float3x3)
        }
        class int3x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int3x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.int3
            public c1 : Unity.Mathematics.int3
            public c2 : Unity.Mathematics.int3
            public static identity : Unity.Mathematics.int3x3
            public static zero : Unity.Mathematics.int3x3
            public static op_Implicit ($v: number) : Unity.Mathematics.int3x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int3x3
            public static op_Explicit ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.int3x3
            public static op_Explicit ($v: number) : Unity.Mathematics.int3x3
            public static op_Explicit ($v: Unity.Mathematics.uint3x3) : Unity.Mathematics.int3x3
            public static op_Explicit ($v: Unity.Mathematics.float3x3) : Unity.Mathematics.int3x3
            public static op_Explicit ($v: Unity.Mathematics.double3x3) : Unity.Mathematics.int3x3
            public static op_Multiply ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Multiply ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.int3x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Addition ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Addition ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.int3x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Subtraction ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Subtraction ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.int3x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Division ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Division ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.int3x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Modulus ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Modulus ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.int3x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Increment ($val: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_Decrement ($val: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_LessThan ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_LessThan ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_UnaryNegation ($val: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_UnaryPlus ($val: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_LeftShift ($x: Unity.Mathematics.int3x3, $n: number) : Unity.Mathematics.int3x3
            public static op_RightShift ($x: Unity.Mathematics.int3x3, $n: number) : Unity.Mathematics.int3x3
            public static op_Equality ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.bool3x3
            public static op_OnesComplement ($val: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.int3x3
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.int3x3
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int3x3, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int3x3, $rhs: number) : Unity.Mathematics.int3x3
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int3x3) : Unity.Mathematics.int3x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.int3>
            public Equals ($rhs: Unity.Mathematics.int3x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.int3, $c1: Unity.Mathematics.int3, $c2: Unity.Mathematics.int3)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x3)
            public constructor ($v: Unity.Mathematics.uint3x3)
            public constructor ($v: Unity.Mathematics.float3x3)
            public constructor ($v: Unity.Mathematics.double3x3)
        }
        class uint3x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint3x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.uint3
            public c1 : Unity.Mathematics.uint3
            public c2 : Unity.Mathematics.uint3
            public static identity : Unity.Mathematics.uint3x3
            public static zero : Unity.Mathematics.uint3x3
            public static op_Implicit ($v: number) : Unity.Mathematics.uint3x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint3x3
            public static op_Explicit ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.uint3x3
            public static op_Explicit ($v: number) : Unity.Mathematics.uint3x3
            public static op_Explicit ($v: Unity.Mathematics.int3x3) : Unity.Mathematics.uint3x3
            public static op_Explicit ($v: Unity.Mathematics.float3x3) : Unity.Mathematics.uint3x3
            public static op_Explicit ($v: Unity.Mathematics.double3x3) : Unity.Mathematics.uint3x3
            public static op_Multiply ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Multiply ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.uint3x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Addition ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Addition ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.uint3x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Subtraction ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Subtraction ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.uint3x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Division ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Division ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.uint3x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Modulus ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Modulus ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.uint3x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Increment ($val: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_Decrement ($val: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_LessThan ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_LessThan ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_UnaryNegation ($val: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_UnaryPlus ($val: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_LeftShift ($x: Unity.Mathematics.uint3x3, $n: number) : Unity.Mathematics.uint3x3
            public static op_RightShift ($x: Unity.Mathematics.uint3x3, $n: number) : Unity.Mathematics.uint3x3
            public static op_Equality ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.bool3x3
            public static op_OnesComplement ($val: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.uint3x3
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.uint3x3
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint3x3, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint3x3, $rhs: number) : Unity.Mathematics.uint3x3
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint3x3) : Unity.Mathematics.uint3x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.uint3>
            public Equals ($rhs: Unity.Mathematics.uint3x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.uint3, $c1: Unity.Mathematics.uint3, $c2: Unity.Mathematics.uint3)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x3)
            public constructor ($v: Unity.Mathematics.int3x3)
            public constructor ($v: Unity.Mathematics.float3x3)
            public constructor ($v: Unity.Mathematics.double3x3)
        }
        class float3x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float3x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.float3
            public c1 : Unity.Mathematics.float3
            public c2 : Unity.Mathematics.float3
            public static identity : Unity.Mathematics.float3x3
            public static zero : Unity.Mathematics.float3x3
            public static op_Implicit ($v: number) : Unity.Mathematics.float3x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float3x3
            public static op_Explicit ($v: Unity.Mathematics.bool3x3) : Unity.Mathematics.float3x3
            public static op_Implicit ($v: Unity.Mathematics.int3x3) : Unity.Mathematics.float3x3
            public static op_Implicit ($v: Unity.Mathematics.uint3x3) : Unity.Mathematics.float3x3
            public static op_Explicit ($v: number) : Unity.Mathematics.float3x3
            public static op_Explicit ($v: Unity.Mathematics.double3x3) : Unity.Mathematics.float3x3
            public static op_Multiply ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Multiply ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.float3x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Addition ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Addition ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.float3x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Subtraction ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Subtraction ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.float3x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Division ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Division ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.float3x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Modulus ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Modulus ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.float3x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Increment ($val: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Decrement ($val: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_LessThan ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_LessThan ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_UnaryNegation ($val: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_UnaryPlus ($val: Unity.Mathematics.float3x3) : Unity.Mathematics.float3x3
            public static op_Equality ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.float3x3, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: Unity.Mathematics.float3x3, $rhs: number) : Unity.Mathematics.bool3x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float3x3) : Unity.Mathematics.bool3x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.float3>
            public Equals ($rhs: Unity.Mathematics.float3x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static AxisAngle ($axis: Unity.Mathematics.float3, $angle: number) : Unity.Mathematics.float3x3
            public static EulerXYZ ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static EulerXZY ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static EulerYXZ ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static EulerYZX ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static EulerZXY ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static EulerZYX ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static EulerXYZ ($x: number, $y: number, $z: number) : Unity.Mathematics.float3x3
            public static EulerXZY ($x: number, $y: number, $z: number) : Unity.Mathematics.float3x3
            public static EulerYXZ ($x: number, $y: number, $z: number) : Unity.Mathematics.float3x3
            public static EulerYZX ($x: number, $y: number, $z: number) : Unity.Mathematics.float3x3
            public static EulerZXY ($x: number, $y: number, $z: number) : Unity.Mathematics.float3x3
            public static EulerZYX ($x: number, $y: number, $z: number) : Unity.Mathematics.float3x3
            public static Euler ($xyz: Unity.Mathematics.float3, $order?: Unity.Mathematics.math.RotationOrder) : Unity.Mathematics.float3x3
            public static Euler ($x: number, $y: number, $z: number, $order?: Unity.Mathematics.math.RotationOrder) : Unity.Mathematics.float3x3
            public static RotateX ($angle: number) : Unity.Mathematics.float3x3
            public static RotateY ($angle: number) : Unity.Mathematics.float3x3
            public static RotateZ ($angle: number) : Unity.Mathematics.float3x3
            public static Scale ($s: number) : Unity.Mathematics.float3x3
            public static Scale ($x: number, $y: number, $z: number) : Unity.Mathematics.float3x3
            public static Scale ($v: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static LookRotation ($forward: Unity.Mathematics.float3, $up: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static LookRotationSafe ($forward: Unity.Mathematics.float3, $up: Unity.Mathematics.float3) : Unity.Mathematics.float3x3
            public static op_Explicit ($f4x4: Unity.Mathematics.float4x4) : Unity.Mathematics.float3x3
            public constructor ($c0: Unity.Mathematics.float3, $c1: Unity.Mathematics.float3, $c2: Unity.Mathematics.float3)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x3)
            public constructor ($v: Unity.Mathematics.int3x3)
            public constructor ($v: Unity.Mathematics.uint3x3)
            public constructor ($v: Unity.Mathematics.double3x3)
            public constructor ($f4x4: Unity.Mathematics.float4x4)
            public constructor ($q: Unity.Mathematics.quaternion)
        }
        class double3x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double3x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.double3
            public c1 : Unity.Mathematics.double3
            public c2 : Unity.Mathematics.double3
            public c3 : Unity.Mathematics.double3
            public static zero : Unity.Mathematics.double3x4
            public static op_Implicit ($v: number) : Unity.Mathematics.double3x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double3x4
            public static op_Explicit ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.double3x4
            public static op_Implicit ($v: Unity.Mathematics.int3x4) : Unity.Mathematics.double3x4
            public static op_Implicit ($v: Unity.Mathematics.uint3x4) : Unity.Mathematics.double3x4
            public static op_Implicit ($v: Unity.Mathematics.float3x4) : Unity.Mathematics.double3x4
            public static op_Multiply ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Multiply ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.double3x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Addition ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Addition ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.double3x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Subtraction ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Subtraction ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.double3x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Division ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Division ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.double3x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Modulus ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Modulus ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.double3x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Increment ($val: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Decrement ($val: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_LessThan ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_LessThan ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_UnaryNegation ($val: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_UnaryPlus ($val: Unity.Mathematics.double3x4) : Unity.Mathematics.double3x4
            public static op_Equality ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.double3x4, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.double3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double3x4) : Unity.Mathematics.bool3x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.double3>
            public Equals ($rhs: Unity.Mathematics.double3x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.double3, $c1: Unity.Mathematics.double3, $c2: Unity.Mathematics.double3, $c3: Unity.Mathematics.double3)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x4)
            public constructor ($v: Unity.Mathematics.int3x4)
            public constructor ($v: Unity.Mathematics.uint3x4)
            public constructor ($v: Unity.Mathematics.float3x4)
        }
        class int3x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int3x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.int3
            public c1 : Unity.Mathematics.int3
            public c2 : Unity.Mathematics.int3
            public c3 : Unity.Mathematics.int3
            public static zero : Unity.Mathematics.int3x4
            public static op_Implicit ($v: number) : Unity.Mathematics.int3x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int3x4
            public static op_Explicit ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.int3x4
            public static op_Explicit ($v: number) : Unity.Mathematics.int3x4
            public static op_Explicit ($v: Unity.Mathematics.uint3x4) : Unity.Mathematics.int3x4
            public static op_Explicit ($v: Unity.Mathematics.float3x4) : Unity.Mathematics.int3x4
            public static op_Explicit ($v: Unity.Mathematics.double3x4) : Unity.Mathematics.int3x4
            public static op_Multiply ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Multiply ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.int3x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Addition ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Addition ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.int3x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Subtraction ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Subtraction ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.int3x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Division ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Division ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.int3x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Modulus ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Modulus ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.int3x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Increment ($val: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_Decrement ($val: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_LessThan ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_LessThan ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_UnaryNegation ($val: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_UnaryPlus ($val: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_LeftShift ($x: Unity.Mathematics.int3x4, $n: number) : Unity.Mathematics.int3x4
            public static op_RightShift ($x: Unity.Mathematics.int3x4, $n: number) : Unity.Mathematics.int3x4
            public static op_Equality ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.bool3x4
            public static op_OnesComplement ($val: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.int3x4
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.int3x4
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int3x4, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int3x4, $rhs: number) : Unity.Mathematics.int3x4
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int3x4) : Unity.Mathematics.int3x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.int3>
            public Equals ($rhs: Unity.Mathematics.int3x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.int3, $c1: Unity.Mathematics.int3, $c2: Unity.Mathematics.int3, $c3: Unity.Mathematics.int3)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x4)
            public constructor ($v: Unity.Mathematics.uint3x4)
            public constructor ($v: Unity.Mathematics.float3x4)
            public constructor ($v: Unity.Mathematics.double3x4)
        }
        class uint3x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint3x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.uint3
            public c1 : Unity.Mathematics.uint3
            public c2 : Unity.Mathematics.uint3
            public c3 : Unity.Mathematics.uint3
            public static zero : Unity.Mathematics.uint3x4
            public static op_Implicit ($v: number) : Unity.Mathematics.uint3x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint3x4
            public static op_Explicit ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.uint3x4
            public static op_Explicit ($v: number) : Unity.Mathematics.uint3x4
            public static op_Explicit ($v: Unity.Mathematics.int3x4) : Unity.Mathematics.uint3x4
            public static op_Explicit ($v: Unity.Mathematics.float3x4) : Unity.Mathematics.uint3x4
            public static op_Explicit ($v: Unity.Mathematics.double3x4) : Unity.Mathematics.uint3x4
            public static op_Multiply ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Multiply ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.uint3x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Addition ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Addition ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.uint3x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Subtraction ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Subtraction ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.uint3x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Division ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Division ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.uint3x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Modulus ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Modulus ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.uint3x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Increment ($val: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_Decrement ($val: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_LessThan ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_LessThan ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_UnaryNegation ($val: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_UnaryPlus ($val: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_LeftShift ($x: Unity.Mathematics.uint3x4, $n: number) : Unity.Mathematics.uint3x4
            public static op_RightShift ($x: Unity.Mathematics.uint3x4, $n: number) : Unity.Mathematics.uint3x4
            public static op_Equality ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.bool3x4
            public static op_OnesComplement ($val: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.uint3x4
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.uint3x4
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint3x4, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint3x4, $rhs: number) : Unity.Mathematics.uint3x4
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint3x4) : Unity.Mathematics.uint3x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.uint3>
            public Equals ($rhs: Unity.Mathematics.uint3x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.uint3, $c1: Unity.Mathematics.uint3, $c2: Unity.Mathematics.uint3, $c3: Unity.Mathematics.uint3)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x4)
            public constructor ($v: Unity.Mathematics.int3x4)
            public constructor ($v: Unity.Mathematics.float3x4)
            public constructor ($v: Unity.Mathematics.double3x4)
        }
        class float3x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float3x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.float3
            public c1 : Unity.Mathematics.float3
            public c2 : Unity.Mathematics.float3
            public c3 : Unity.Mathematics.float3
            public static zero : Unity.Mathematics.float3x4
            public static op_Implicit ($v: number) : Unity.Mathematics.float3x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float3x4
            public static op_Explicit ($v: Unity.Mathematics.bool3x4) : Unity.Mathematics.float3x4
            public static op_Implicit ($v: Unity.Mathematics.int3x4) : Unity.Mathematics.float3x4
            public static op_Implicit ($v: Unity.Mathematics.uint3x4) : Unity.Mathematics.float3x4
            public static op_Explicit ($v: number) : Unity.Mathematics.float3x4
            public static op_Explicit ($v: Unity.Mathematics.double3x4) : Unity.Mathematics.float3x4
            public static op_Multiply ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Multiply ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.float3x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Addition ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Addition ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.float3x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Subtraction ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Subtraction ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.float3x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Division ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Division ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.float3x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Modulus ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Modulus ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.float3x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Increment ($val: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Decrement ($val: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_LessThan ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_LessThan ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_UnaryNegation ($val: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_UnaryPlus ($val: Unity.Mathematics.float3x4) : Unity.Mathematics.float3x4
            public static op_Equality ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.float3x4, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: Unity.Mathematics.float3x4, $rhs: number) : Unity.Mathematics.bool3x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float3x4) : Unity.Mathematics.bool3x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.float3>
            public Equals ($rhs: Unity.Mathematics.float3x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.float3, $c1: Unity.Mathematics.float3, $c2: Unity.Mathematics.float3, $c3: Unity.Mathematics.float3)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool3x4)
            public constructor ($v: Unity.Mathematics.int3x4)
            public constructor ($v: Unity.Mathematics.uint3x4)
            public constructor ($v: Unity.Mathematics.double3x4)
        }
        class double4x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double4x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.double4
            public c1 : Unity.Mathematics.double4
            public c2 : Unity.Mathematics.double4
            public static zero : Unity.Mathematics.double4x3
            public static op_Implicit ($v: number) : Unity.Mathematics.double4x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double4x3
            public static op_Explicit ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.double4x3
            public static op_Implicit ($v: Unity.Mathematics.int4x3) : Unity.Mathematics.double4x3
            public static op_Implicit ($v: Unity.Mathematics.uint4x3) : Unity.Mathematics.double4x3
            public static op_Implicit ($v: Unity.Mathematics.float4x3) : Unity.Mathematics.double4x3
            public static op_Multiply ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Multiply ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.double4x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Addition ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Addition ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.double4x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Subtraction ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Subtraction ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.double4x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Division ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Division ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.double4x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Modulus ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Modulus ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.double4x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Increment ($val: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Decrement ($val: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_LessThan ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_LessThan ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_UnaryNegation ($val: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_UnaryPlus ($val: Unity.Mathematics.double4x3) : Unity.Mathematics.double4x3
            public static op_Equality ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.double4x3, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.double4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double4x3) : Unity.Mathematics.bool4x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.double4>
            public Equals ($rhs: Unity.Mathematics.double4x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.double4, $c1: Unity.Mathematics.double4, $c2: Unity.Mathematics.double4)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number, $m30: number, $m31: number, $m32: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x3)
            public constructor ($v: Unity.Mathematics.int4x3)
            public constructor ($v: Unity.Mathematics.uint4x3)
            public constructor ($v: Unity.Mathematics.float4x3)
        }
        class int4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int4>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public z : number
            public w : number
            public static zero : Unity.Mathematics.int4
            public get xxxx(): Unity.Mathematics.int4;
            public get xxxy(): Unity.Mathematics.int4;
            public get xxxz(): Unity.Mathematics.int4;
            public get xxxw(): Unity.Mathematics.int4;
            public get xxyx(): Unity.Mathematics.int4;
            public get xxyy(): Unity.Mathematics.int4;
            public get xxyz(): Unity.Mathematics.int4;
            public get xxyw(): Unity.Mathematics.int4;
            public get xxzx(): Unity.Mathematics.int4;
            public get xxzy(): Unity.Mathematics.int4;
            public get xxzz(): Unity.Mathematics.int4;
            public get xxzw(): Unity.Mathematics.int4;
            public get xxwx(): Unity.Mathematics.int4;
            public get xxwy(): Unity.Mathematics.int4;
            public get xxwz(): Unity.Mathematics.int4;
            public get xxww(): Unity.Mathematics.int4;
            public get xyxx(): Unity.Mathematics.int4;
            public get xyxy(): Unity.Mathematics.int4;
            public get xyxz(): Unity.Mathematics.int4;
            public get xyxw(): Unity.Mathematics.int4;
            public get xyyx(): Unity.Mathematics.int4;
            public get xyyy(): Unity.Mathematics.int4;
            public get xyyz(): Unity.Mathematics.int4;
            public get xyyw(): Unity.Mathematics.int4;
            public get xyzx(): Unity.Mathematics.int4;
            public get xyzy(): Unity.Mathematics.int4;
            public get xyzz(): Unity.Mathematics.int4;
            public get xyzw(): Unity.Mathematics.int4;
            public set xyzw(value: Unity.Mathematics.int4);
            public get xywx(): Unity.Mathematics.int4;
            public get xywy(): Unity.Mathematics.int4;
            public get xywz(): Unity.Mathematics.int4;
            public set xywz(value: Unity.Mathematics.int4);
            public get xyww(): Unity.Mathematics.int4;
            public get xzxx(): Unity.Mathematics.int4;
            public get xzxy(): Unity.Mathematics.int4;
            public get xzxz(): Unity.Mathematics.int4;
            public get xzxw(): Unity.Mathematics.int4;
            public get xzyx(): Unity.Mathematics.int4;
            public get xzyy(): Unity.Mathematics.int4;
            public get xzyz(): Unity.Mathematics.int4;
            public get xzyw(): Unity.Mathematics.int4;
            public set xzyw(value: Unity.Mathematics.int4);
            public get xzzx(): Unity.Mathematics.int4;
            public get xzzy(): Unity.Mathematics.int4;
            public get xzzz(): Unity.Mathematics.int4;
            public get xzzw(): Unity.Mathematics.int4;
            public get xzwx(): Unity.Mathematics.int4;
            public get xzwy(): Unity.Mathematics.int4;
            public set xzwy(value: Unity.Mathematics.int4);
            public get xzwz(): Unity.Mathematics.int4;
            public get xzww(): Unity.Mathematics.int4;
            public get xwxx(): Unity.Mathematics.int4;
            public get xwxy(): Unity.Mathematics.int4;
            public get xwxz(): Unity.Mathematics.int4;
            public get xwxw(): Unity.Mathematics.int4;
            public get xwyx(): Unity.Mathematics.int4;
            public get xwyy(): Unity.Mathematics.int4;
            public get xwyz(): Unity.Mathematics.int4;
            public set xwyz(value: Unity.Mathematics.int4);
            public get xwyw(): Unity.Mathematics.int4;
            public get xwzx(): Unity.Mathematics.int4;
            public get xwzy(): Unity.Mathematics.int4;
            public set xwzy(value: Unity.Mathematics.int4);
            public get xwzz(): Unity.Mathematics.int4;
            public get xwzw(): Unity.Mathematics.int4;
            public get xwwx(): Unity.Mathematics.int4;
            public get xwwy(): Unity.Mathematics.int4;
            public get xwwz(): Unity.Mathematics.int4;
            public get xwww(): Unity.Mathematics.int4;
            public get yxxx(): Unity.Mathematics.int4;
            public get yxxy(): Unity.Mathematics.int4;
            public get yxxz(): Unity.Mathematics.int4;
            public get yxxw(): Unity.Mathematics.int4;
            public get yxyx(): Unity.Mathematics.int4;
            public get yxyy(): Unity.Mathematics.int4;
            public get yxyz(): Unity.Mathematics.int4;
            public get yxyw(): Unity.Mathematics.int4;
            public get yxzx(): Unity.Mathematics.int4;
            public get yxzy(): Unity.Mathematics.int4;
            public get yxzz(): Unity.Mathematics.int4;
            public get yxzw(): Unity.Mathematics.int4;
            public set yxzw(value: Unity.Mathematics.int4);
            public get yxwx(): Unity.Mathematics.int4;
            public get yxwy(): Unity.Mathematics.int4;
            public get yxwz(): Unity.Mathematics.int4;
            public set yxwz(value: Unity.Mathematics.int4);
            public get yxww(): Unity.Mathematics.int4;
            public get yyxx(): Unity.Mathematics.int4;
            public get yyxy(): Unity.Mathematics.int4;
            public get yyxz(): Unity.Mathematics.int4;
            public get yyxw(): Unity.Mathematics.int4;
            public get yyyx(): Unity.Mathematics.int4;
            public get yyyy(): Unity.Mathematics.int4;
            public get yyyz(): Unity.Mathematics.int4;
            public get yyyw(): Unity.Mathematics.int4;
            public get yyzx(): Unity.Mathematics.int4;
            public get yyzy(): Unity.Mathematics.int4;
            public get yyzz(): Unity.Mathematics.int4;
            public get yyzw(): Unity.Mathematics.int4;
            public get yywx(): Unity.Mathematics.int4;
            public get yywy(): Unity.Mathematics.int4;
            public get yywz(): Unity.Mathematics.int4;
            public get yyww(): Unity.Mathematics.int4;
            public get yzxx(): Unity.Mathematics.int4;
            public get yzxy(): Unity.Mathematics.int4;
            public get yzxz(): Unity.Mathematics.int4;
            public get yzxw(): Unity.Mathematics.int4;
            public set yzxw(value: Unity.Mathematics.int4);
            public get yzyx(): Unity.Mathematics.int4;
            public get yzyy(): Unity.Mathematics.int4;
            public get yzyz(): Unity.Mathematics.int4;
            public get yzyw(): Unity.Mathematics.int4;
            public get yzzx(): Unity.Mathematics.int4;
            public get yzzy(): Unity.Mathematics.int4;
            public get yzzz(): Unity.Mathematics.int4;
            public get yzzw(): Unity.Mathematics.int4;
            public get yzwx(): Unity.Mathematics.int4;
            public set yzwx(value: Unity.Mathematics.int4);
            public get yzwy(): Unity.Mathematics.int4;
            public get yzwz(): Unity.Mathematics.int4;
            public get yzww(): Unity.Mathematics.int4;
            public get ywxx(): Unity.Mathematics.int4;
            public get ywxy(): Unity.Mathematics.int4;
            public get ywxz(): Unity.Mathematics.int4;
            public set ywxz(value: Unity.Mathematics.int4);
            public get ywxw(): Unity.Mathematics.int4;
            public get ywyx(): Unity.Mathematics.int4;
            public get ywyy(): Unity.Mathematics.int4;
            public get ywyz(): Unity.Mathematics.int4;
            public get ywyw(): Unity.Mathematics.int4;
            public get ywzx(): Unity.Mathematics.int4;
            public set ywzx(value: Unity.Mathematics.int4);
            public get ywzy(): Unity.Mathematics.int4;
            public get ywzz(): Unity.Mathematics.int4;
            public get ywzw(): Unity.Mathematics.int4;
            public get ywwx(): Unity.Mathematics.int4;
            public get ywwy(): Unity.Mathematics.int4;
            public get ywwz(): Unity.Mathematics.int4;
            public get ywww(): Unity.Mathematics.int4;
            public get zxxx(): Unity.Mathematics.int4;
            public get zxxy(): Unity.Mathematics.int4;
            public get zxxz(): Unity.Mathematics.int4;
            public get zxxw(): Unity.Mathematics.int4;
            public get zxyx(): Unity.Mathematics.int4;
            public get zxyy(): Unity.Mathematics.int4;
            public get zxyz(): Unity.Mathematics.int4;
            public get zxyw(): Unity.Mathematics.int4;
            public set zxyw(value: Unity.Mathematics.int4);
            public get zxzx(): Unity.Mathematics.int4;
            public get zxzy(): Unity.Mathematics.int4;
            public get zxzz(): Unity.Mathematics.int4;
            public get zxzw(): Unity.Mathematics.int4;
            public get zxwx(): Unity.Mathematics.int4;
            public get zxwy(): Unity.Mathematics.int4;
            public set zxwy(value: Unity.Mathematics.int4);
            public get zxwz(): Unity.Mathematics.int4;
            public get zxww(): Unity.Mathematics.int4;
            public get zyxx(): Unity.Mathematics.int4;
            public get zyxy(): Unity.Mathematics.int4;
            public get zyxz(): Unity.Mathematics.int4;
            public get zyxw(): Unity.Mathematics.int4;
            public set zyxw(value: Unity.Mathematics.int4);
            public get zyyx(): Unity.Mathematics.int4;
            public get zyyy(): Unity.Mathematics.int4;
            public get zyyz(): Unity.Mathematics.int4;
            public get zyyw(): Unity.Mathematics.int4;
            public get zyzx(): Unity.Mathematics.int4;
            public get zyzy(): Unity.Mathematics.int4;
            public get zyzz(): Unity.Mathematics.int4;
            public get zyzw(): Unity.Mathematics.int4;
            public get zywx(): Unity.Mathematics.int4;
            public set zywx(value: Unity.Mathematics.int4);
            public get zywy(): Unity.Mathematics.int4;
            public get zywz(): Unity.Mathematics.int4;
            public get zyww(): Unity.Mathematics.int4;
            public get zzxx(): Unity.Mathematics.int4;
            public get zzxy(): Unity.Mathematics.int4;
            public get zzxz(): Unity.Mathematics.int4;
            public get zzxw(): Unity.Mathematics.int4;
            public get zzyx(): Unity.Mathematics.int4;
            public get zzyy(): Unity.Mathematics.int4;
            public get zzyz(): Unity.Mathematics.int4;
            public get zzyw(): Unity.Mathematics.int4;
            public get zzzx(): Unity.Mathematics.int4;
            public get zzzy(): Unity.Mathematics.int4;
            public get zzzz(): Unity.Mathematics.int4;
            public get zzzw(): Unity.Mathematics.int4;
            public get zzwx(): Unity.Mathematics.int4;
            public get zzwy(): Unity.Mathematics.int4;
            public get zzwz(): Unity.Mathematics.int4;
            public get zzww(): Unity.Mathematics.int4;
            public get zwxx(): Unity.Mathematics.int4;
            public get zwxy(): Unity.Mathematics.int4;
            public set zwxy(value: Unity.Mathematics.int4);
            public get zwxz(): Unity.Mathematics.int4;
            public get zwxw(): Unity.Mathematics.int4;
            public get zwyx(): Unity.Mathematics.int4;
            public set zwyx(value: Unity.Mathematics.int4);
            public get zwyy(): Unity.Mathematics.int4;
            public get zwyz(): Unity.Mathematics.int4;
            public get zwyw(): Unity.Mathematics.int4;
            public get zwzx(): Unity.Mathematics.int4;
            public get zwzy(): Unity.Mathematics.int4;
            public get zwzz(): Unity.Mathematics.int4;
            public get zwzw(): Unity.Mathematics.int4;
            public get zwwx(): Unity.Mathematics.int4;
            public get zwwy(): Unity.Mathematics.int4;
            public get zwwz(): Unity.Mathematics.int4;
            public get zwww(): Unity.Mathematics.int4;
            public get wxxx(): Unity.Mathematics.int4;
            public get wxxy(): Unity.Mathematics.int4;
            public get wxxz(): Unity.Mathematics.int4;
            public get wxxw(): Unity.Mathematics.int4;
            public get wxyx(): Unity.Mathematics.int4;
            public get wxyy(): Unity.Mathematics.int4;
            public get wxyz(): Unity.Mathematics.int4;
            public set wxyz(value: Unity.Mathematics.int4);
            public get wxyw(): Unity.Mathematics.int4;
            public get wxzx(): Unity.Mathematics.int4;
            public get wxzy(): Unity.Mathematics.int4;
            public set wxzy(value: Unity.Mathematics.int4);
            public get wxzz(): Unity.Mathematics.int4;
            public get wxzw(): Unity.Mathematics.int4;
            public get wxwx(): Unity.Mathematics.int4;
            public get wxwy(): Unity.Mathematics.int4;
            public get wxwz(): Unity.Mathematics.int4;
            public get wxww(): Unity.Mathematics.int4;
            public get wyxx(): Unity.Mathematics.int4;
            public get wyxy(): Unity.Mathematics.int4;
            public get wyxz(): Unity.Mathematics.int4;
            public set wyxz(value: Unity.Mathematics.int4);
            public get wyxw(): Unity.Mathematics.int4;
            public get wyyx(): Unity.Mathematics.int4;
            public get wyyy(): Unity.Mathematics.int4;
            public get wyyz(): Unity.Mathematics.int4;
            public get wyyw(): Unity.Mathematics.int4;
            public get wyzx(): Unity.Mathematics.int4;
            public set wyzx(value: Unity.Mathematics.int4);
            public get wyzy(): Unity.Mathematics.int4;
            public get wyzz(): Unity.Mathematics.int4;
            public get wyzw(): Unity.Mathematics.int4;
            public get wywx(): Unity.Mathematics.int4;
            public get wywy(): Unity.Mathematics.int4;
            public get wywz(): Unity.Mathematics.int4;
            public get wyww(): Unity.Mathematics.int4;
            public get wzxx(): Unity.Mathematics.int4;
            public get wzxy(): Unity.Mathematics.int4;
            public set wzxy(value: Unity.Mathematics.int4);
            public get wzxz(): Unity.Mathematics.int4;
            public get wzxw(): Unity.Mathematics.int4;
            public get wzyx(): Unity.Mathematics.int4;
            public set wzyx(value: Unity.Mathematics.int4);
            public get wzyy(): Unity.Mathematics.int4;
            public get wzyz(): Unity.Mathematics.int4;
            public get wzyw(): Unity.Mathematics.int4;
            public get wzzx(): Unity.Mathematics.int4;
            public get wzzy(): Unity.Mathematics.int4;
            public get wzzz(): Unity.Mathematics.int4;
            public get wzzw(): Unity.Mathematics.int4;
            public get wzwx(): Unity.Mathematics.int4;
            public get wzwy(): Unity.Mathematics.int4;
            public get wzwz(): Unity.Mathematics.int4;
            public get wzww(): Unity.Mathematics.int4;
            public get wwxx(): Unity.Mathematics.int4;
            public get wwxy(): Unity.Mathematics.int4;
            public get wwxz(): Unity.Mathematics.int4;
            public get wwxw(): Unity.Mathematics.int4;
            public get wwyx(): Unity.Mathematics.int4;
            public get wwyy(): Unity.Mathematics.int4;
            public get wwyz(): Unity.Mathematics.int4;
            public get wwyw(): Unity.Mathematics.int4;
            public get wwzx(): Unity.Mathematics.int4;
            public get wwzy(): Unity.Mathematics.int4;
            public get wwzz(): Unity.Mathematics.int4;
            public get wwzw(): Unity.Mathematics.int4;
            public get wwwx(): Unity.Mathematics.int4;
            public get wwwy(): Unity.Mathematics.int4;
            public get wwwz(): Unity.Mathematics.int4;
            public get wwww(): Unity.Mathematics.int4;
            public get xxx(): Unity.Mathematics.int3;
            public get xxy(): Unity.Mathematics.int3;
            public get xxz(): Unity.Mathematics.int3;
            public get xxw(): Unity.Mathematics.int3;
            public get xyx(): Unity.Mathematics.int3;
            public get xyy(): Unity.Mathematics.int3;
            public get xyz(): Unity.Mathematics.int3;
            public set xyz(value: Unity.Mathematics.int3);
            public get xyw(): Unity.Mathematics.int3;
            public set xyw(value: Unity.Mathematics.int3);
            public get xzx(): Unity.Mathematics.int3;
            public get xzy(): Unity.Mathematics.int3;
            public set xzy(value: Unity.Mathematics.int3);
            public get xzz(): Unity.Mathematics.int3;
            public get xzw(): Unity.Mathematics.int3;
            public set xzw(value: Unity.Mathematics.int3);
            public get xwx(): Unity.Mathematics.int3;
            public get xwy(): Unity.Mathematics.int3;
            public set xwy(value: Unity.Mathematics.int3);
            public get xwz(): Unity.Mathematics.int3;
            public set xwz(value: Unity.Mathematics.int3);
            public get xww(): Unity.Mathematics.int3;
            public get yxx(): Unity.Mathematics.int3;
            public get yxy(): Unity.Mathematics.int3;
            public get yxz(): Unity.Mathematics.int3;
            public set yxz(value: Unity.Mathematics.int3);
            public get yxw(): Unity.Mathematics.int3;
            public set yxw(value: Unity.Mathematics.int3);
            public get yyx(): Unity.Mathematics.int3;
            public get yyy(): Unity.Mathematics.int3;
            public get yyz(): Unity.Mathematics.int3;
            public get yyw(): Unity.Mathematics.int3;
            public get yzx(): Unity.Mathematics.int3;
            public set yzx(value: Unity.Mathematics.int3);
            public get yzy(): Unity.Mathematics.int3;
            public get yzz(): Unity.Mathematics.int3;
            public get yzw(): Unity.Mathematics.int3;
            public set yzw(value: Unity.Mathematics.int3);
            public get ywx(): Unity.Mathematics.int3;
            public set ywx(value: Unity.Mathematics.int3);
            public get ywy(): Unity.Mathematics.int3;
            public get ywz(): Unity.Mathematics.int3;
            public set ywz(value: Unity.Mathematics.int3);
            public get yww(): Unity.Mathematics.int3;
            public get zxx(): Unity.Mathematics.int3;
            public get zxy(): Unity.Mathematics.int3;
            public set zxy(value: Unity.Mathematics.int3);
            public get zxz(): Unity.Mathematics.int3;
            public get zxw(): Unity.Mathematics.int3;
            public set zxw(value: Unity.Mathematics.int3);
            public get zyx(): Unity.Mathematics.int3;
            public set zyx(value: Unity.Mathematics.int3);
            public get zyy(): Unity.Mathematics.int3;
            public get zyz(): Unity.Mathematics.int3;
            public get zyw(): Unity.Mathematics.int3;
            public set zyw(value: Unity.Mathematics.int3);
            public get zzx(): Unity.Mathematics.int3;
            public get zzy(): Unity.Mathematics.int3;
            public get zzz(): Unity.Mathematics.int3;
            public get zzw(): Unity.Mathematics.int3;
            public get zwx(): Unity.Mathematics.int3;
            public set zwx(value: Unity.Mathematics.int3);
            public get zwy(): Unity.Mathematics.int3;
            public set zwy(value: Unity.Mathematics.int3);
            public get zwz(): Unity.Mathematics.int3;
            public get zww(): Unity.Mathematics.int3;
            public get wxx(): Unity.Mathematics.int3;
            public get wxy(): Unity.Mathematics.int3;
            public set wxy(value: Unity.Mathematics.int3);
            public get wxz(): Unity.Mathematics.int3;
            public set wxz(value: Unity.Mathematics.int3);
            public get wxw(): Unity.Mathematics.int3;
            public get wyx(): Unity.Mathematics.int3;
            public set wyx(value: Unity.Mathematics.int3);
            public get wyy(): Unity.Mathematics.int3;
            public get wyz(): Unity.Mathematics.int3;
            public set wyz(value: Unity.Mathematics.int3);
            public get wyw(): Unity.Mathematics.int3;
            public get wzx(): Unity.Mathematics.int3;
            public set wzx(value: Unity.Mathematics.int3);
            public get wzy(): Unity.Mathematics.int3;
            public set wzy(value: Unity.Mathematics.int3);
            public get wzz(): Unity.Mathematics.int3;
            public get wzw(): Unity.Mathematics.int3;
            public get wwx(): Unity.Mathematics.int3;
            public get wwy(): Unity.Mathematics.int3;
            public get wwz(): Unity.Mathematics.int3;
            public get www(): Unity.Mathematics.int3;
            public get xx(): Unity.Mathematics.int2;
            public get xy(): Unity.Mathematics.int2;
            public set xy(value: Unity.Mathematics.int2);
            public get xz(): Unity.Mathematics.int2;
            public set xz(value: Unity.Mathematics.int2);
            public get xw(): Unity.Mathematics.int2;
            public set xw(value: Unity.Mathematics.int2);
            public get yx(): Unity.Mathematics.int2;
            public set yx(value: Unity.Mathematics.int2);
            public get yy(): Unity.Mathematics.int2;
            public get yz(): Unity.Mathematics.int2;
            public set yz(value: Unity.Mathematics.int2);
            public get yw(): Unity.Mathematics.int2;
            public set yw(value: Unity.Mathematics.int2);
            public get zx(): Unity.Mathematics.int2;
            public set zx(value: Unity.Mathematics.int2);
            public get zy(): Unity.Mathematics.int2;
            public set zy(value: Unity.Mathematics.int2);
            public get zz(): Unity.Mathematics.int2;
            public get zw(): Unity.Mathematics.int2;
            public set zw(value: Unity.Mathematics.int2);
            public get wx(): Unity.Mathematics.int2;
            public set wx(value: Unity.Mathematics.int2);
            public get wy(): Unity.Mathematics.int2;
            public set wy(value: Unity.Mathematics.int2);
            public get wz(): Unity.Mathematics.int2;
            public set wz(value: Unity.Mathematics.int2);
            public get ww(): Unity.Mathematics.int2;
            public static op_Implicit ($v: number) : Unity.Mathematics.int4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int4
            public static op_Explicit ($v: Unity.Mathematics.bool4) : Unity.Mathematics.int4
            public static op_Explicit ($v: number) : Unity.Mathematics.int4
            public static op_Explicit ($v: Unity.Mathematics.uint4) : Unity.Mathematics.int4
            public static op_Explicit ($v: Unity.Mathematics.float4) : Unity.Mathematics.int4
            public static op_Explicit ($v: Unity.Mathematics.double4) : Unity.Mathematics.int4
            public static op_Multiply ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Multiply ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.int4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Addition ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Addition ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.int4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Subtraction ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Subtraction ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.int4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Division ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Division ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.int4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Modulus ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Modulus ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.int4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Increment ($val: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_Decrement ($val: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_LessThan ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_LessThan ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.bool4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_UnaryNegation ($val: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_UnaryPlus ($val: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_LeftShift ($x: Unity.Mathematics.int4, $n: number) : Unity.Mathematics.int4
            public static op_RightShift ($x: Unity.Mathematics.int4, $n: number) : Unity.Mathematics.int4
            public static op_Equality ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.bool4
            public static op_OnesComplement ($val: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.int4
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.int4
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int4, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int4, $rhs: number) : Unity.Mathematics.int4
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.int4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public constructor ($x: number, $y: number, $zw: Unity.Mathematics.int2)
            public constructor ($x: number, $yz: Unity.Mathematics.int2, $w: number)
            public constructor ($x: number, $yzw: Unity.Mathematics.int3)
            public constructor ($xy: Unity.Mathematics.int2, $z: number, $w: number)
            public constructor ($xy: Unity.Mathematics.int2, $zw: Unity.Mathematics.int2)
            public constructor ($xyz: Unity.Mathematics.int3, $w: number)
            public constructor ($xyzw: Unity.Mathematics.int4)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4)
            public constructor ($v: Unity.Mathematics.uint4)
            public constructor ($v: Unity.Mathematics.float4)
            public constructor ($v: Unity.Mathematics.double4)
        }
        class half4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.half4>
        {
            protected [__keep_incompatibility]: never;
            public x : Unity.Mathematics.half
            public y : Unity.Mathematics.half
            public z : Unity.Mathematics.half
            public w : Unity.Mathematics.half
            public static zero : Unity.Mathematics.half4
            public get xxxx(): Unity.Mathematics.half4;
            public get xxxy(): Unity.Mathematics.half4;
            public get xxxz(): Unity.Mathematics.half4;
            public get xxxw(): Unity.Mathematics.half4;
            public get xxyx(): Unity.Mathematics.half4;
            public get xxyy(): Unity.Mathematics.half4;
            public get xxyz(): Unity.Mathematics.half4;
            public get xxyw(): Unity.Mathematics.half4;
            public get xxzx(): Unity.Mathematics.half4;
            public get xxzy(): Unity.Mathematics.half4;
            public get xxzz(): Unity.Mathematics.half4;
            public get xxzw(): Unity.Mathematics.half4;
            public get xxwx(): Unity.Mathematics.half4;
            public get xxwy(): Unity.Mathematics.half4;
            public get xxwz(): Unity.Mathematics.half4;
            public get xxww(): Unity.Mathematics.half4;
            public get xyxx(): Unity.Mathematics.half4;
            public get xyxy(): Unity.Mathematics.half4;
            public get xyxz(): Unity.Mathematics.half4;
            public get xyxw(): Unity.Mathematics.half4;
            public get xyyx(): Unity.Mathematics.half4;
            public get xyyy(): Unity.Mathematics.half4;
            public get xyyz(): Unity.Mathematics.half4;
            public get xyyw(): Unity.Mathematics.half4;
            public get xyzx(): Unity.Mathematics.half4;
            public get xyzy(): Unity.Mathematics.half4;
            public get xyzz(): Unity.Mathematics.half4;
            public get xyzw(): Unity.Mathematics.half4;
            public set xyzw(value: Unity.Mathematics.half4);
            public get xywx(): Unity.Mathematics.half4;
            public get xywy(): Unity.Mathematics.half4;
            public get xywz(): Unity.Mathematics.half4;
            public set xywz(value: Unity.Mathematics.half4);
            public get xyww(): Unity.Mathematics.half4;
            public get xzxx(): Unity.Mathematics.half4;
            public get xzxy(): Unity.Mathematics.half4;
            public get xzxz(): Unity.Mathematics.half4;
            public get xzxw(): Unity.Mathematics.half4;
            public get xzyx(): Unity.Mathematics.half4;
            public get xzyy(): Unity.Mathematics.half4;
            public get xzyz(): Unity.Mathematics.half4;
            public get xzyw(): Unity.Mathematics.half4;
            public set xzyw(value: Unity.Mathematics.half4);
            public get xzzx(): Unity.Mathematics.half4;
            public get xzzy(): Unity.Mathematics.half4;
            public get xzzz(): Unity.Mathematics.half4;
            public get xzzw(): Unity.Mathematics.half4;
            public get xzwx(): Unity.Mathematics.half4;
            public get xzwy(): Unity.Mathematics.half4;
            public set xzwy(value: Unity.Mathematics.half4);
            public get xzwz(): Unity.Mathematics.half4;
            public get xzww(): Unity.Mathematics.half4;
            public get xwxx(): Unity.Mathematics.half4;
            public get xwxy(): Unity.Mathematics.half4;
            public get xwxz(): Unity.Mathematics.half4;
            public get xwxw(): Unity.Mathematics.half4;
            public get xwyx(): Unity.Mathematics.half4;
            public get xwyy(): Unity.Mathematics.half4;
            public get xwyz(): Unity.Mathematics.half4;
            public set xwyz(value: Unity.Mathematics.half4);
            public get xwyw(): Unity.Mathematics.half4;
            public get xwzx(): Unity.Mathematics.half4;
            public get xwzy(): Unity.Mathematics.half4;
            public set xwzy(value: Unity.Mathematics.half4);
            public get xwzz(): Unity.Mathematics.half4;
            public get xwzw(): Unity.Mathematics.half4;
            public get xwwx(): Unity.Mathematics.half4;
            public get xwwy(): Unity.Mathematics.half4;
            public get xwwz(): Unity.Mathematics.half4;
            public get xwww(): Unity.Mathematics.half4;
            public get yxxx(): Unity.Mathematics.half4;
            public get yxxy(): Unity.Mathematics.half4;
            public get yxxz(): Unity.Mathematics.half4;
            public get yxxw(): Unity.Mathematics.half4;
            public get yxyx(): Unity.Mathematics.half4;
            public get yxyy(): Unity.Mathematics.half4;
            public get yxyz(): Unity.Mathematics.half4;
            public get yxyw(): Unity.Mathematics.half4;
            public get yxzx(): Unity.Mathematics.half4;
            public get yxzy(): Unity.Mathematics.half4;
            public get yxzz(): Unity.Mathematics.half4;
            public get yxzw(): Unity.Mathematics.half4;
            public set yxzw(value: Unity.Mathematics.half4);
            public get yxwx(): Unity.Mathematics.half4;
            public get yxwy(): Unity.Mathematics.half4;
            public get yxwz(): Unity.Mathematics.half4;
            public set yxwz(value: Unity.Mathematics.half4);
            public get yxww(): Unity.Mathematics.half4;
            public get yyxx(): Unity.Mathematics.half4;
            public get yyxy(): Unity.Mathematics.half4;
            public get yyxz(): Unity.Mathematics.half4;
            public get yyxw(): Unity.Mathematics.half4;
            public get yyyx(): Unity.Mathematics.half4;
            public get yyyy(): Unity.Mathematics.half4;
            public get yyyz(): Unity.Mathematics.half4;
            public get yyyw(): Unity.Mathematics.half4;
            public get yyzx(): Unity.Mathematics.half4;
            public get yyzy(): Unity.Mathematics.half4;
            public get yyzz(): Unity.Mathematics.half4;
            public get yyzw(): Unity.Mathematics.half4;
            public get yywx(): Unity.Mathematics.half4;
            public get yywy(): Unity.Mathematics.half4;
            public get yywz(): Unity.Mathematics.half4;
            public get yyww(): Unity.Mathematics.half4;
            public get yzxx(): Unity.Mathematics.half4;
            public get yzxy(): Unity.Mathematics.half4;
            public get yzxz(): Unity.Mathematics.half4;
            public get yzxw(): Unity.Mathematics.half4;
            public set yzxw(value: Unity.Mathematics.half4);
            public get yzyx(): Unity.Mathematics.half4;
            public get yzyy(): Unity.Mathematics.half4;
            public get yzyz(): Unity.Mathematics.half4;
            public get yzyw(): Unity.Mathematics.half4;
            public get yzzx(): Unity.Mathematics.half4;
            public get yzzy(): Unity.Mathematics.half4;
            public get yzzz(): Unity.Mathematics.half4;
            public get yzzw(): Unity.Mathematics.half4;
            public get yzwx(): Unity.Mathematics.half4;
            public set yzwx(value: Unity.Mathematics.half4);
            public get yzwy(): Unity.Mathematics.half4;
            public get yzwz(): Unity.Mathematics.half4;
            public get yzww(): Unity.Mathematics.half4;
            public get ywxx(): Unity.Mathematics.half4;
            public get ywxy(): Unity.Mathematics.half4;
            public get ywxz(): Unity.Mathematics.half4;
            public set ywxz(value: Unity.Mathematics.half4);
            public get ywxw(): Unity.Mathematics.half4;
            public get ywyx(): Unity.Mathematics.half4;
            public get ywyy(): Unity.Mathematics.half4;
            public get ywyz(): Unity.Mathematics.half4;
            public get ywyw(): Unity.Mathematics.half4;
            public get ywzx(): Unity.Mathematics.half4;
            public set ywzx(value: Unity.Mathematics.half4);
            public get ywzy(): Unity.Mathematics.half4;
            public get ywzz(): Unity.Mathematics.half4;
            public get ywzw(): Unity.Mathematics.half4;
            public get ywwx(): Unity.Mathematics.half4;
            public get ywwy(): Unity.Mathematics.half4;
            public get ywwz(): Unity.Mathematics.half4;
            public get ywww(): Unity.Mathematics.half4;
            public get zxxx(): Unity.Mathematics.half4;
            public get zxxy(): Unity.Mathematics.half4;
            public get zxxz(): Unity.Mathematics.half4;
            public get zxxw(): Unity.Mathematics.half4;
            public get zxyx(): Unity.Mathematics.half4;
            public get zxyy(): Unity.Mathematics.half4;
            public get zxyz(): Unity.Mathematics.half4;
            public get zxyw(): Unity.Mathematics.half4;
            public set zxyw(value: Unity.Mathematics.half4);
            public get zxzx(): Unity.Mathematics.half4;
            public get zxzy(): Unity.Mathematics.half4;
            public get zxzz(): Unity.Mathematics.half4;
            public get zxzw(): Unity.Mathematics.half4;
            public get zxwx(): Unity.Mathematics.half4;
            public get zxwy(): Unity.Mathematics.half4;
            public set zxwy(value: Unity.Mathematics.half4);
            public get zxwz(): Unity.Mathematics.half4;
            public get zxww(): Unity.Mathematics.half4;
            public get zyxx(): Unity.Mathematics.half4;
            public get zyxy(): Unity.Mathematics.half4;
            public get zyxz(): Unity.Mathematics.half4;
            public get zyxw(): Unity.Mathematics.half4;
            public set zyxw(value: Unity.Mathematics.half4);
            public get zyyx(): Unity.Mathematics.half4;
            public get zyyy(): Unity.Mathematics.half4;
            public get zyyz(): Unity.Mathematics.half4;
            public get zyyw(): Unity.Mathematics.half4;
            public get zyzx(): Unity.Mathematics.half4;
            public get zyzy(): Unity.Mathematics.half4;
            public get zyzz(): Unity.Mathematics.half4;
            public get zyzw(): Unity.Mathematics.half4;
            public get zywx(): Unity.Mathematics.half4;
            public set zywx(value: Unity.Mathematics.half4);
            public get zywy(): Unity.Mathematics.half4;
            public get zywz(): Unity.Mathematics.half4;
            public get zyww(): Unity.Mathematics.half4;
            public get zzxx(): Unity.Mathematics.half4;
            public get zzxy(): Unity.Mathematics.half4;
            public get zzxz(): Unity.Mathematics.half4;
            public get zzxw(): Unity.Mathematics.half4;
            public get zzyx(): Unity.Mathematics.half4;
            public get zzyy(): Unity.Mathematics.half4;
            public get zzyz(): Unity.Mathematics.half4;
            public get zzyw(): Unity.Mathematics.half4;
            public get zzzx(): Unity.Mathematics.half4;
            public get zzzy(): Unity.Mathematics.half4;
            public get zzzz(): Unity.Mathematics.half4;
            public get zzzw(): Unity.Mathematics.half4;
            public get zzwx(): Unity.Mathematics.half4;
            public get zzwy(): Unity.Mathematics.half4;
            public get zzwz(): Unity.Mathematics.half4;
            public get zzww(): Unity.Mathematics.half4;
            public get zwxx(): Unity.Mathematics.half4;
            public get zwxy(): Unity.Mathematics.half4;
            public set zwxy(value: Unity.Mathematics.half4);
            public get zwxz(): Unity.Mathematics.half4;
            public get zwxw(): Unity.Mathematics.half4;
            public get zwyx(): Unity.Mathematics.half4;
            public set zwyx(value: Unity.Mathematics.half4);
            public get zwyy(): Unity.Mathematics.half4;
            public get zwyz(): Unity.Mathematics.half4;
            public get zwyw(): Unity.Mathematics.half4;
            public get zwzx(): Unity.Mathematics.half4;
            public get zwzy(): Unity.Mathematics.half4;
            public get zwzz(): Unity.Mathematics.half4;
            public get zwzw(): Unity.Mathematics.half4;
            public get zwwx(): Unity.Mathematics.half4;
            public get zwwy(): Unity.Mathematics.half4;
            public get zwwz(): Unity.Mathematics.half4;
            public get zwww(): Unity.Mathematics.half4;
            public get wxxx(): Unity.Mathematics.half4;
            public get wxxy(): Unity.Mathematics.half4;
            public get wxxz(): Unity.Mathematics.half4;
            public get wxxw(): Unity.Mathematics.half4;
            public get wxyx(): Unity.Mathematics.half4;
            public get wxyy(): Unity.Mathematics.half4;
            public get wxyz(): Unity.Mathematics.half4;
            public set wxyz(value: Unity.Mathematics.half4);
            public get wxyw(): Unity.Mathematics.half4;
            public get wxzx(): Unity.Mathematics.half4;
            public get wxzy(): Unity.Mathematics.half4;
            public set wxzy(value: Unity.Mathematics.half4);
            public get wxzz(): Unity.Mathematics.half4;
            public get wxzw(): Unity.Mathematics.half4;
            public get wxwx(): Unity.Mathematics.half4;
            public get wxwy(): Unity.Mathematics.half4;
            public get wxwz(): Unity.Mathematics.half4;
            public get wxww(): Unity.Mathematics.half4;
            public get wyxx(): Unity.Mathematics.half4;
            public get wyxy(): Unity.Mathematics.half4;
            public get wyxz(): Unity.Mathematics.half4;
            public set wyxz(value: Unity.Mathematics.half4);
            public get wyxw(): Unity.Mathematics.half4;
            public get wyyx(): Unity.Mathematics.half4;
            public get wyyy(): Unity.Mathematics.half4;
            public get wyyz(): Unity.Mathematics.half4;
            public get wyyw(): Unity.Mathematics.half4;
            public get wyzx(): Unity.Mathematics.half4;
            public set wyzx(value: Unity.Mathematics.half4);
            public get wyzy(): Unity.Mathematics.half4;
            public get wyzz(): Unity.Mathematics.half4;
            public get wyzw(): Unity.Mathematics.half4;
            public get wywx(): Unity.Mathematics.half4;
            public get wywy(): Unity.Mathematics.half4;
            public get wywz(): Unity.Mathematics.half4;
            public get wyww(): Unity.Mathematics.half4;
            public get wzxx(): Unity.Mathematics.half4;
            public get wzxy(): Unity.Mathematics.half4;
            public set wzxy(value: Unity.Mathematics.half4);
            public get wzxz(): Unity.Mathematics.half4;
            public get wzxw(): Unity.Mathematics.half4;
            public get wzyx(): Unity.Mathematics.half4;
            public set wzyx(value: Unity.Mathematics.half4);
            public get wzyy(): Unity.Mathematics.half4;
            public get wzyz(): Unity.Mathematics.half4;
            public get wzyw(): Unity.Mathematics.half4;
            public get wzzx(): Unity.Mathematics.half4;
            public get wzzy(): Unity.Mathematics.half4;
            public get wzzz(): Unity.Mathematics.half4;
            public get wzzw(): Unity.Mathematics.half4;
            public get wzwx(): Unity.Mathematics.half4;
            public get wzwy(): Unity.Mathematics.half4;
            public get wzwz(): Unity.Mathematics.half4;
            public get wzww(): Unity.Mathematics.half4;
            public get wwxx(): Unity.Mathematics.half4;
            public get wwxy(): Unity.Mathematics.half4;
            public get wwxz(): Unity.Mathematics.half4;
            public get wwxw(): Unity.Mathematics.half4;
            public get wwyx(): Unity.Mathematics.half4;
            public get wwyy(): Unity.Mathematics.half4;
            public get wwyz(): Unity.Mathematics.half4;
            public get wwyw(): Unity.Mathematics.half4;
            public get wwzx(): Unity.Mathematics.half4;
            public get wwzy(): Unity.Mathematics.half4;
            public get wwzz(): Unity.Mathematics.half4;
            public get wwzw(): Unity.Mathematics.half4;
            public get wwwx(): Unity.Mathematics.half4;
            public get wwwy(): Unity.Mathematics.half4;
            public get wwwz(): Unity.Mathematics.half4;
            public get wwww(): Unity.Mathematics.half4;
            public get xxx(): Unity.Mathematics.half3;
            public get xxy(): Unity.Mathematics.half3;
            public get xxz(): Unity.Mathematics.half3;
            public get xxw(): Unity.Mathematics.half3;
            public get xyx(): Unity.Mathematics.half3;
            public get xyy(): Unity.Mathematics.half3;
            public get xyz(): Unity.Mathematics.half3;
            public set xyz(value: Unity.Mathematics.half3);
            public get xyw(): Unity.Mathematics.half3;
            public set xyw(value: Unity.Mathematics.half3);
            public get xzx(): Unity.Mathematics.half3;
            public get xzy(): Unity.Mathematics.half3;
            public set xzy(value: Unity.Mathematics.half3);
            public get xzz(): Unity.Mathematics.half3;
            public get xzw(): Unity.Mathematics.half3;
            public set xzw(value: Unity.Mathematics.half3);
            public get xwx(): Unity.Mathematics.half3;
            public get xwy(): Unity.Mathematics.half3;
            public set xwy(value: Unity.Mathematics.half3);
            public get xwz(): Unity.Mathematics.half3;
            public set xwz(value: Unity.Mathematics.half3);
            public get xww(): Unity.Mathematics.half3;
            public get yxx(): Unity.Mathematics.half3;
            public get yxy(): Unity.Mathematics.half3;
            public get yxz(): Unity.Mathematics.half3;
            public set yxz(value: Unity.Mathematics.half3);
            public get yxw(): Unity.Mathematics.half3;
            public set yxw(value: Unity.Mathematics.half3);
            public get yyx(): Unity.Mathematics.half3;
            public get yyy(): Unity.Mathematics.half3;
            public get yyz(): Unity.Mathematics.half3;
            public get yyw(): Unity.Mathematics.half3;
            public get yzx(): Unity.Mathematics.half3;
            public set yzx(value: Unity.Mathematics.half3);
            public get yzy(): Unity.Mathematics.half3;
            public get yzz(): Unity.Mathematics.half3;
            public get yzw(): Unity.Mathematics.half3;
            public set yzw(value: Unity.Mathematics.half3);
            public get ywx(): Unity.Mathematics.half3;
            public set ywx(value: Unity.Mathematics.half3);
            public get ywy(): Unity.Mathematics.half3;
            public get ywz(): Unity.Mathematics.half3;
            public set ywz(value: Unity.Mathematics.half3);
            public get yww(): Unity.Mathematics.half3;
            public get zxx(): Unity.Mathematics.half3;
            public get zxy(): Unity.Mathematics.half3;
            public set zxy(value: Unity.Mathematics.half3);
            public get zxz(): Unity.Mathematics.half3;
            public get zxw(): Unity.Mathematics.half3;
            public set zxw(value: Unity.Mathematics.half3);
            public get zyx(): Unity.Mathematics.half3;
            public set zyx(value: Unity.Mathematics.half3);
            public get zyy(): Unity.Mathematics.half3;
            public get zyz(): Unity.Mathematics.half3;
            public get zyw(): Unity.Mathematics.half3;
            public set zyw(value: Unity.Mathematics.half3);
            public get zzx(): Unity.Mathematics.half3;
            public get zzy(): Unity.Mathematics.half3;
            public get zzz(): Unity.Mathematics.half3;
            public get zzw(): Unity.Mathematics.half3;
            public get zwx(): Unity.Mathematics.half3;
            public set zwx(value: Unity.Mathematics.half3);
            public get zwy(): Unity.Mathematics.half3;
            public set zwy(value: Unity.Mathematics.half3);
            public get zwz(): Unity.Mathematics.half3;
            public get zww(): Unity.Mathematics.half3;
            public get wxx(): Unity.Mathematics.half3;
            public get wxy(): Unity.Mathematics.half3;
            public set wxy(value: Unity.Mathematics.half3);
            public get wxz(): Unity.Mathematics.half3;
            public set wxz(value: Unity.Mathematics.half3);
            public get wxw(): Unity.Mathematics.half3;
            public get wyx(): Unity.Mathematics.half3;
            public set wyx(value: Unity.Mathematics.half3);
            public get wyy(): Unity.Mathematics.half3;
            public get wyz(): Unity.Mathematics.half3;
            public set wyz(value: Unity.Mathematics.half3);
            public get wyw(): Unity.Mathematics.half3;
            public get wzx(): Unity.Mathematics.half3;
            public set wzx(value: Unity.Mathematics.half3);
            public get wzy(): Unity.Mathematics.half3;
            public set wzy(value: Unity.Mathematics.half3);
            public get wzz(): Unity.Mathematics.half3;
            public get wzw(): Unity.Mathematics.half3;
            public get wwx(): Unity.Mathematics.half3;
            public get wwy(): Unity.Mathematics.half3;
            public get wwz(): Unity.Mathematics.half3;
            public get www(): Unity.Mathematics.half3;
            public get xx(): Unity.Mathematics.half2;
            public get xy(): Unity.Mathematics.half2;
            public set xy(value: Unity.Mathematics.half2);
            public get xz(): Unity.Mathematics.half2;
            public set xz(value: Unity.Mathematics.half2);
            public get xw(): Unity.Mathematics.half2;
            public set xw(value: Unity.Mathematics.half2);
            public get yx(): Unity.Mathematics.half2;
            public set yx(value: Unity.Mathematics.half2);
            public get yy(): Unity.Mathematics.half2;
            public get yz(): Unity.Mathematics.half2;
            public set yz(value: Unity.Mathematics.half2);
            public get yw(): Unity.Mathematics.half2;
            public set yw(value: Unity.Mathematics.half2);
            public get zx(): Unity.Mathematics.half2;
            public set zx(value: Unity.Mathematics.half2);
            public get zy(): Unity.Mathematics.half2;
            public set zy(value: Unity.Mathematics.half2);
            public get zz(): Unity.Mathematics.half2;
            public get zw(): Unity.Mathematics.half2;
            public set zw(value: Unity.Mathematics.half2);
            public get wx(): Unity.Mathematics.half2;
            public set wx(value: Unity.Mathematics.half2);
            public get wy(): Unity.Mathematics.half2;
            public set wy(value: Unity.Mathematics.half2);
            public get wz(): Unity.Mathematics.half2;
            public set wz(value: Unity.Mathematics.half2);
            public get ww(): Unity.Mathematics.half2;
            public static op_Implicit ($v: Unity.Mathematics.half) : Unity.Mathematics.half4
            public static op_Explicit ($v: number) : Unity.Mathematics.half4
            public static op_Explicit ($v: Unity.Mathematics.float4) : Unity.Mathematics.half4
            public static op_Explicit ($v: Unity.Mathematics.double4) : Unity.Mathematics.half4
            public static op_Equality ($lhs: Unity.Mathematics.half4, $rhs: Unity.Mathematics.half4) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: Unity.Mathematics.half4, $rhs: Unity.Mathematics.half) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: Unity.Mathematics.half, $rhs: Unity.Mathematics.half4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.half4, $rhs: Unity.Mathematics.half4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.half4, $rhs: Unity.Mathematics.half) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.half, $rhs: Unity.Mathematics.half4) : Unity.Mathematics.bool4
            public get_Item ($index: number) : Unity.Mathematics.half
            public set_Item ($index: number, $value: Unity.Mathematics.half) : void
            public Equals ($rhs: Unity.Mathematics.half4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: Unity.Mathematics.half, $y: Unity.Mathematics.half, $z: Unity.Mathematics.half, $w: Unity.Mathematics.half)
            public constructor ($x: Unity.Mathematics.half, $y: Unity.Mathematics.half, $zw: Unity.Mathematics.half2)
            public constructor ($x: Unity.Mathematics.half, $yz: Unity.Mathematics.half2, $w: Unity.Mathematics.half)
            public constructor ($x: Unity.Mathematics.half, $yzw: Unity.Mathematics.half3)
            public constructor ($xy: Unity.Mathematics.half2, $z: Unity.Mathematics.half, $w: Unity.Mathematics.half)
            public constructor ($xy: Unity.Mathematics.half2, $zw: Unity.Mathematics.half2)
            public constructor ($xyz: Unity.Mathematics.half3, $w: Unity.Mathematics.half)
            public constructor ($xyzw: Unity.Mathematics.half4)
            public constructor ($v: Unity.Mathematics.half)
            public constructor ($v: number)
            public constructor ($v: Unity.Mathematics.float4)
            public constructor ($v: Unity.Mathematics.double4)
        }
        class float4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float4>
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public z : number
            public w : number
            public static zero : Unity.Mathematics.float4
            public get xxxx(): Unity.Mathematics.float4;
            public get xxxy(): Unity.Mathematics.float4;
            public get xxxz(): Unity.Mathematics.float4;
            public get xxxw(): Unity.Mathematics.float4;
            public get xxyx(): Unity.Mathematics.float4;
            public get xxyy(): Unity.Mathematics.float4;
            public get xxyz(): Unity.Mathematics.float4;
            public get xxyw(): Unity.Mathematics.float4;
            public get xxzx(): Unity.Mathematics.float4;
            public get xxzy(): Unity.Mathematics.float4;
            public get xxzz(): Unity.Mathematics.float4;
            public get xxzw(): Unity.Mathematics.float4;
            public get xxwx(): Unity.Mathematics.float4;
            public get xxwy(): Unity.Mathematics.float4;
            public get xxwz(): Unity.Mathematics.float4;
            public get xxww(): Unity.Mathematics.float4;
            public get xyxx(): Unity.Mathematics.float4;
            public get xyxy(): Unity.Mathematics.float4;
            public get xyxz(): Unity.Mathematics.float4;
            public get xyxw(): Unity.Mathematics.float4;
            public get xyyx(): Unity.Mathematics.float4;
            public get xyyy(): Unity.Mathematics.float4;
            public get xyyz(): Unity.Mathematics.float4;
            public get xyyw(): Unity.Mathematics.float4;
            public get xyzx(): Unity.Mathematics.float4;
            public get xyzy(): Unity.Mathematics.float4;
            public get xyzz(): Unity.Mathematics.float4;
            public get xyzw(): Unity.Mathematics.float4;
            public set xyzw(value: Unity.Mathematics.float4);
            public get xywx(): Unity.Mathematics.float4;
            public get xywy(): Unity.Mathematics.float4;
            public get xywz(): Unity.Mathematics.float4;
            public set xywz(value: Unity.Mathematics.float4);
            public get xyww(): Unity.Mathematics.float4;
            public get xzxx(): Unity.Mathematics.float4;
            public get xzxy(): Unity.Mathematics.float4;
            public get xzxz(): Unity.Mathematics.float4;
            public get xzxw(): Unity.Mathematics.float4;
            public get xzyx(): Unity.Mathematics.float4;
            public get xzyy(): Unity.Mathematics.float4;
            public get xzyz(): Unity.Mathematics.float4;
            public get xzyw(): Unity.Mathematics.float4;
            public set xzyw(value: Unity.Mathematics.float4);
            public get xzzx(): Unity.Mathematics.float4;
            public get xzzy(): Unity.Mathematics.float4;
            public get xzzz(): Unity.Mathematics.float4;
            public get xzzw(): Unity.Mathematics.float4;
            public get xzwx(): Unity.Mathematics.float4;
            public get xzwy(): Unity.Mathematics.float4;
            public set xzwy(value: Unity.Mathematics.float4);
            public get xzwz(): Unity.Mathematics.float4;
            public get xzww(): Unity.Mathematics.float4;
            public get xwxx(): Unity.Mathematics.float4;
            public get xwxy(): Unity.Mathematics.float4;
            public get xwxz(): Unity.Mathematics.float4;
            public get xwxw(): Unity.Mathematics.float4;
            public get xwyx(): Unity.Mathematics.float4;
            public get xwyy(): Unity.Mathematics.float4;
            public get xwyz(): Unity.Mathematics.float4;
            public set xwyz(value: Unity.Mathematics.float4);
            public get xwyw(): Unity.Mathematics.float4;
            public get xwzx(): Unity.Mathematics.float4;
            public get xwzy(): Unity.Mathematics.float4;
            public set xwzy(value: Unity.Mathematics.float4);
            public get xwzz(): Unity.Mathematics.float4;
            public get xwzw(): Unity.Mathematics.float4;
            public get xwwx(): Unity.Mathematics.float4;
            public get xwwy(): Unity.Mathematics.float4;
            public get xwwz(): Unity.Mathematics.float4;
            public get xwww(): Unity.Mathematics.float4;
            public get yxxx(): Unity.Mathematics.float4;
            public get yxxy(): Unity.Mathematics.float4;
            public get yxxz(): Unity.Mathematics.float4;
            public get yxxw(): Unity.Mathematics.float4;
            public get yxyx(): Unity.Mathematics.float4;
            public get yxyy(): Unity.Mathematics.float4;
            public get yxyz(): Unity.Mathematics.float4;
            public get yxyw(): Unity.Mathematics.float4;
            public get yxzx(): Unity.Mathematics.float4;
            public get yxzy(): Unity.Mathematics.float4;
            public get yxzz(): Unity.Mathematics.float4;
            public get yxzw(): Unity.Mathematics.float4;
            public set yxzw(value: Unity.Mathematics.float4);
            public get yxwx(): Unity.Mathematics.float4;
            public get yxwy(): Unity.Mathematics.float4;
            public get yxwz(): Unity.Mathematics.float4;
            public set yxwz(value: Unity.Mathematics.float4);
            public get yxww(): Unity.Mathematics.float4;
            public get yyxx(): Unity.Mathematics.float4;
            public get yyxy(): Unity.Mathematics.float4;
            public get yyxz(): Unity.Mathematics.float4;
            public get yyxw(): Unity.Mathematics.float4;
            public get yyyx(): Unity.Mathematics.float4;
            public get yyyy(): Unity.Mathematics.float4;
            public get yyyz(): Unity.Mathematics.float4;
            public get yyyw(): Unity.Mathematics.float4;
            public get yyzx(): Unity.Mathematics.float4;
            public get yyzy(): Unity.Mathematics.float4;
            public get yyzz(): Unity.Mathematics.float4;
            public get yyzw(): Unity.Mathematics.float4;
            public get yywx(): Unity.Mathematics.float4;
            public get yywy(): Unity.Mathematics.float4;
            public get yywz(): Unity.Mathematics.float4;
            public get yyww(): Unity.Mathematics.float4;
            public get yzxx(): Unity.Mathematics.float4;
            public get yzxy(): Unity.Mathematics.float4;
            public get yzxz(): Unity.Mathematics.float4;
            public get yzxw(): Unity.Mathematics.float4;
            public set yzxw(value: Unity.Mathematics.float4);
            public get yzyx(): Unity.Mathematics.float4;
            public get yzyy(): Unity.Mathematics.float4;
            public get yzyz(): Unity.Mathematics.float4;
            public get yzyw(): Unity.Mathematics.float4;
            public get yzzx(): Unity.Mathematics.float4;
            public get yzzy(): Unity.Mathematics.float4;
            public get yzzz(): Unity.Mathematics.float4;
            public get yzzw(): Unity.Mathematics.float4;
            public get yzwx(): Unity.Mathematics.float4;
            public set yzwx(value: Unity.Mathematics.float4);
            public get yzwy(): Unity.Mathematics.float4;
            public get yzwz(): Unity.Mathematics.float4;
            public get yzww(): Unity.Mathematics.float4;
            public get ywxx(): Unity.Mathematics.float4;
            public get ywxy(): Unity.Mathematics.float4;
            public get ywxz(): Unity.Mathematics.float4;
            public set ywxz(value: Unity.Mathematics.float4);
            public get ywxw(): Unity.Mathematics.float4;
            public get ywyx(): Unity.Mathematics.float4;
            public get ywyy(): Unity.Mathematics.float4;
            public get ywyz(): Unity.Mathematics.float4;
            public get ywyw(): Unity.Mathematics.float4;
            public get ywzx(): Unity.Mathematics.float4;
            public set ywzx(value: Unity.Mathematics.float4);
            public get ywzy(): Unity.Mathematics.float4;
            public get ywzz(): Unity.Mathematics.float4;
            public get ywzw(): Unity.Mathematics.float4;
            public get ywwx(): Unity.Mathematics.float4;
            public get ywwy(): Unity.Mathematics.float4;
            public get ywwz(): Unity.Mathematics.float4;
            public get ywww(): Unity.Mathematics.float4;
            public get zxxx(): Unity.Mathematics.float4;
            public get zxxy(): Unity.Mathematics.float4;
            public get zxxz(): Unity.Mathematics.float4;
            public get zxxw(): Unity.Mathematics.float4;
            public get zxyx(): Unity.Mathematics.float4;
            public get zxyy(): Unity.Mathematics.float4;
            public get zxyz(): Unity.Mathematics.float4;
            public get zxyw(): Unity.Mathematics.float4;
            public set zxyw(value: Unity.Mathematics.float4);
            public get zxzx(): Unity.Mathematics.float4;
            public get zxzy(): Unity.Mathematics.float4;
            public get zxzz(): Unity.Mathematics.float4;
            public get zxzw(): Unity.Mathematics.float4;
            public get zxwx(): Unity.Mathematics.float4;
            public get zxwy(): Unity.Mathematics.float4;
            public set zxwy(value: Unity.Mathematics.float4);
            public get zxwz(): Unity.Mathematics.float4;
            public get zxww(): Unity.Mathematics.float4;
            public get zyxx(): Unity.Mathematics.float4;
            public get zyxy(): Unity.Mathematics.float4;
            public get zyxz(): Unity.Mathematics.float4;
            public get zyxw(): Unity.Mathematics.float4;
            public set zyxw(value: Unity.Mathematics.float4);
            public get zyyx(): Unity.Mathematics.float4;
            public get zyyy(): Unity.Mathematics.float4;
            public get zyyz(): Unity.Mathematics.float4;
            public get zyyw(): Unity.Mathematics.float4;
            public get zyzx(): Unity.Mathematics.float4;
            public get zyzy(): Unity.Mathematics.float4;
            public get zyzz(): Unity.Mathematics.float4;
            public get zyzw(): Unity.Mathematics.float4;
            public get zywx(): Unity.Mathematics.float4;
            public set zywx(value: Unity.Mathematics.float4);
            public get zywy(): Unity.Mathematics.float4;
            public get zywz(): Unity.Mathematics.float4;
            public get zyww(): Unity.Mathematics.float4;
            public get zzxx(): Unity.Mathematics.float4;
            public get zzxy(): Unity.Mathematics.float4;
            public get zzxz(): Unity.Mathematics.float4;
            public get zzxw(): Unity.Mathematics.float4;
            public get zzyx(): Unity.Mathematics.float4;
            public get zzyy(): Unity.Mathematics.float4;
            public get zzyz(): Unity.Mathematics.float4;
            public get zzyw(): Unity.Mathematics.float4;
            public get zzzx(): Unity.Mathematics.float4;
            public get zzzy(): Unity.Mathematics.float4;
            public get zzzz(): Unity.Mathematics.float4;
            public get zzzw(): Unity.Mathematics.float4;
            public get zzwx(): Unity.Mathematics.float4;
            public get zzwy(): Unity.Mathematics.float4;
            public get zzwz(): Unity.Mathematics.float4;
            public get zzww(): Unity.Mathematics.float4;
            public get zwxx(): Unity.Mathematics.float4;
            public get zwxy(): Unity.Mathematics.float4;
            public set zwxy(value: Unity.Mathematics.float4);
            public get zwxz(): Unity.Mathematics.float4;
            public get zwxw(): Unity.Mathematics.float4;
            public get zwyx(): Unity.Mathematics.float4;
            public set zwyx(value: Unity.Mathematics.float4);
            public get zwyy(): Unity.Mathematics.float4;
            public get zwyz(): Unity.Mathematics.float4;
            public get zwyw(): Unity.Mathematics.float4;
            public get zwzx(): Unity.Mathematics.float4;
            public get zwzy(): Unity.Mathematics.float4;
            public get zwzz(): Unity.Mathematics.float4;
            public get zwzw(): Unity.Mathematics.float4;
            public get zwwx(): Unity.Mathematics.float4;
            public get zwwy(): Unity.Mathematics.float4;
            public get zwwz(): Unity.Mathematics.float4;
            public get zwww(): Unity.Mathematics.float4;
            public get wxxx(): Unity.Mathematics.float4;
            public get wxxy(): Unity.Mathematics.float4;
            public get wxxz(): Unity.Mathematics.float4;
            public get wxxw(): Unity.Mathematics.float4;
            public get wxyx(): Unity.Mathematics.float4;
            public get wxyy(): Unity.Mathematics.float4;
            public get wxyz(): Unity.Mathematics.float4;
            public set wxyz(value: Unity.Mathematics.float4);
            public get wxyw(): Unity.Mathematics.float4;
            public get wxzx(): Unity.Mathematics.float4;
            public get wxzy(): Unity.Mathematics.float4;
            public set wxzy(value: Unity.Mathematics.float4);
            public get wxzz(): Unity.Mathematics.float4;
            public get wxzw(): Unity.Mathematics.float4;
            public get wxwx(): Unity.Mathematics.float4;
            public get wxwy(): Unity.Mathematics.float4;
            public get wxwz(): Unity.Mathematics.float4;
            public get wxww(): Unity.Mathematics.float4;
            public get wyxx(): Unity.Mathematics.float4;
            public get wyxy(): Unity.Mathematics.float4;
            public get wyxz(): Unity.Mathematics.float4;
            public set wyxz(value: Unity.Mathematics.float4);
            public get wyxw(): Unity.Mathematics.float4;
            public get wyyx(): Unity.Mathematics.float4;
            public get wyyy(): Unity.Mathematics.float4;
            public get wyyz(): Unity.Mathematics.float4;
            public get wyyw(): Unity.Mathematics.float4;
            public get wyzx(): Unity.Mathematics.float4;
            public set wyzx(value: Unity.Mathematics.float4);
            public get wyzy(): Unity.Mathematics.float4;
            public get wyzz(): Unity.Mathematics.float4;
            public get wyzw(): Unity.Mathematics.float4;
            public get wywx(): Unity.Mathematics.float4;
            public get wywy(): Unity.Mathematics.float4;
            public get wywz(): Unity.Mathematics.float4;
            public get wyww(): Unity.Mathematics.float4;
            public get wzxx(): Unity.Mathematics.float4;
            public get wzxy(): Unity.Mathematics.float4;
            public set wzxy(value: Unity.Mathematics.float4);
            public get wzxz(): Unity.Mathematics.float4;
            public get wzxw(): Unity.Mathematics.float4;
            public get wzyx(): Unity.Mathematics.float4;
            public set wzyx(value: Unity.Mathematics.float4);
            public get wzyy(): Unity.Mathematics.float4;
            public get wzyz(): Unity.Mathematics.float4;
            public get wzyw(): Unity.Mathematics.float4;
            public get wzzx(): Unity.Mathematics.float4;
            public get wzzy(): Unity.Mathematics.float4;
            public get wzzz(): Unity.Mathematics.float4;
            public get wzzw(): Unity.Mathematics.float4;
            public get wzwx(): Unity.Mathematics.float4;
            public get wzwy(): Unity.Mathematics.float4;
            public get wzwz(): Unity.Mathematics.float4;
            public get wzww(): Unity.Mathematics.float4;
            public get wwxx(): Unity.Mathematics.float4;
            public get wwxy(): Unity.Mathematics.float4;
            public get wwxz(): Unity.Mathematics.float4;
            public get wwxw(): Unity.Mathematics.float4;
            public get wwyx(): Unity.Mathematics.float4;
            public get wwyy(): Unity.Mathematics.float4;
            public get wwyz(): Unity.Mathematics.float4;
            public get wwyw(): Unity.Mathematics.float4;
            public get wwzx(): Unity.Mathematics.float4;
            public get wwzy(): Unity.Mathematics.float4;
            public get wwzz(): Unity.Mathematics.float4;
            public get wwzw(): Unity.Mathematics.float4;
            public get wwwx(): Unity.Mathematics.float4;
            public get wwwy(): Unity.Mathematics.float4;
            public get wwwz(): Unity.Mathematics.float4;
            public get wwww(): Unity.Mathematics.float4;
            public get xxx(): Unity.Mathematics.float3;
            public get xxy(): Unity.Mathematics.float3;
            public get xxz(): Unity.Mathematics.float3;
            public get xxw(): Unity.Mathematics.float3;
            public get xyx(): Unity.Mathematics.float3;
            public get xyy(): Unity.Mathematics.float3;
            public get xyz(): Unity.Mathematics.float3;
            public set xyz(value: Unity.Mathematics.float3);
            public get xyw(): Unity.Mathematics.float3;
            public set xyw(value: Unity.Mathematics.float3);
            public get xzx(): Unity.Mathematics.float3;
            public get xzy(): Unity.Mathematics.float3;
            public set xzy(value: Unity.Mathematics.float3);
            public get xzz(): Unity.Mathematics.float3;
            public get xzw(): Unity.Mathematics.float3;
            public set xzw(value: Unity.Mathematics.float3);
            public get xwx(): Unity.Mathematics.float3;
            public get xwy(): Unity.Mathematics.float3;
            public set xwy(value: Unity.Mathematics.float3);
            public get xwz(): Unity.Mathematics.float3;
            public set xwz(value: Unity.Mathematics.float3);
            public get xww(): Unity.Mathematics.float3;
            public get yxx(): Unity.Mathematics.float3;
            public get yxy(): Unity.Mathematics.float3;
            public get yxz(): Unity.Mathematics.float3;
            public set yxz(value: Unity.Mathematics.float3);
            public get yxw(): Unity.Mathematics.float3;
            public set yxw(value: Unity.Mathematics.float3);
            public get yyx(): Unity.Mathematics.float3;
            public get yyy(): Unity.Mathematics.float3;
            public get yyz(): Unity.Mathematics.float3;
            public get yyw(): Unity.Mathematics.float3;
            public get yzx(): Unity.Mathematics.float3;
            public set yzx(value: Unity.Mathematics.float3);
            public get yzy(): Unity.Mathematics.float3;
            public get yzz(): Unity.Mathematics.float3;
            public get yzw(): Unity.Mathematics.float3;
            public set yzw(value: Unity.Mathematics.float3);
            public get ywx(): Unity.Mathematics.float3;
            public set ywx(value: Unity.Mathematics.float3);
            public get ywy(): Unity.Mathematics.float3;
            public get ywz(): Unity.Mathematics.float3;
            public set ywz(value: Unity.Mathematics.float3);
            public get yww(): Unity.Mathematics.float3;
            public get zxx(): Unity.Mathematics.float3;
            public get zxy(): Unity.Mathematics.float3;
            public set zxy(value: Unity.Mathematics.float3);
            public get zxz(): Unity.Mathematics.float3;
            public get zxw(): Unity.Mathematics.float3;
            public set zxw(value: Unity.Mathematics.float3);
            public get zyx(): Unity.Mathematics.float3;
            public set zyx(value: Unity.Mathematics.float3);
            public get zyy(): Unity.Mathematics.float3;
            public get zyz(): Unity.Mathematics.float3;
            public get zyw(): Unity.Mathematics.float3;
            public set zyw(value: Unity.Mathematics.float3);
            public get zzx(): Unity.Mathematics.float3;
            public get zzy(): Unity.Mathematics.float3;
            public get zzz(): Unity.Mathematics.float3;
            public get zzw(): Unity.Mathematics.float3;
            public get zwx(): Unity.Mathematics.float3;
            public set zwx(value: Unity.Mathematics.float3);
            public get zwy(): Unity.Mathematics.float3;
            public set zwy(value: Unity.Mathematics.float3);
            public get zwz(): Unity.Mathematics.float3;
            public get zww(): Unity.Mathematics.float3;
            public get wxx(): Unity.Mathematics.float3;
            public get wxy(): Unity.Mathematics.float3;
            public set wxy(value: Unity.Mathematics.float3);
            public get wxz(): Unity.Mathematics.float3;
            public set wxz(value: Unity.Mathematics.float3);
            public get wxw(): Unity.Mathematics.float3;
            public get wyx(): Unity.Mathematics.float3;
            public set wyx(value: Unity.Mathematics.float3);
            public get wyy(): Unity.Mathematics.float3;
            public get wyz(): Unity.Mathematics.float3;
            public set wyz(value: Unity.Mathematics.float3);
            public get wyw(): Unity.Mathematics.float3;
            public get wzx(): Unity.Mathematics.float3;
            public set wzx(value: Unity.Mathematics.float3);
            public get wzy(): Unity.Mathematics.float3;
            public set wzy(value: Unity.Mathematics.float3);
            public get wzz(): Unity.Mathematics.float3;
            public get wzw(): Unity.Mathematics.float3;
            public get wwx(): Unity.Mathematics.float3;
            public get wwy(): Unity.Mathematics.float3;
            public get wwz(): Unity.Mathematics.float3;
            public get www(): Unity.Mathematics.float3;
            public get xx(): Unity.Mathematics.float2;
            public get xy(): Unity.Mathematics.float2;
            public set xy(value: Unity.Mathematics.float2);
            public get xz(): Unity.Mathematics.float2;
            public set xz(value: Unity.Mathematics.float2);
            public get xw(): Unity.Mathematics.float2;
            public set xw(value: Unity.Mathematics.float2);
            public get yx(): Unity.Mathematics.float2;
            public set yx(value: Unity.Mathematics.float2);
            public get yy(): Unity.Mathematics.float2;
            public get yz(): Unity.Mathematics.float2;
            public set yz(value: Unity.Mathematics.float2);
            public get yw(): Unity.Mathematics.float2;
            public set yw(value: Unity.Mathematics.float2);
            public get zx(): Unity.Mathematics.float2;
            public set zx(value: Unity.Mathematics.float2);
            public get zy(): Unity.Mathematics.float2;
            public set zy(value: Unity.Mathematics.float2);
            public get zz(): Unity.Mathematics.float2;
            public get zw(): Unity.Mathematics.float2;
            public set zw(value: Unity.Mathematics.float2);
            public get wx(): Unity.Mathematics.float2;
            public set wx(value: Unity.Mathematics.float2);
            public get wy(): Unity.Mathematics.float2;
            public set wy(value: Unity.Mathematics.float2);
            public get wz(): Unity.Mathematics.float2;
            public set wz(value: Unity.Mathematics.float2);
            public get ww(): Unity.Mathematics.float2;
            public static op_Implicit ($v: number) : Unity.Mathematics.float4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float4
            public static op_Explicit ($v: Unity.Mathematics.bool4) : Unity.Mathematics.float4
            public static op_Implicit ($v: Unity.Mathematics.int4) : Unity.Mathematics.float4
            public static op_Implicit ($v: Unity.Mathematics.uint4) : Unity.Mathematics.float4
            public static op_Implicit ($v: Unity.Mathematics.half) : Unity.Mathematics.float4
            public static op_Implicit ($v: Unity.Mathematics.half4) : Unity.Mathematics.float4
            public static op_Explicit ($v: number) : Unity.Mathematics.float4
            public static op_Explicit ($v: Unity.Mathematics.double4) : Unity.Mathematics.float4
            public static op_Multiply ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Multiply ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.float4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Addition ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Addition ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.float4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Subtraction ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Subtraction ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.float4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Division ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Division ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.float4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Modulus ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Modulus ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.float4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Increment ($val: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Decrement ($val: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_LessThan ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_LessThan ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.bool4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.bool4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.bool4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.bool4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_UnaryNegation ($val: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_UnaryPlus ($val: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public static op_Equality ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.bool4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.float4, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: Unity.Mathematics.float4, $rhs: number) : Unity.Mathematics.bool4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float4) : Unity.Mathematics.bool4
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($rhs: Unity.Mathematics.float4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static op_Implicit ($v: UnityEngine.Vector4) : Unity.Mathematics.float4
            public static op_Implicit ($v: Unity.Mathematics.float4) : UnityEngine.Vector4
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public constructor ($x: number, $y: number, $zw: Unity.Mathematics.float2)
            public constructor ($x: number, $yz: Unity.Mathematics.float2, $w: number)
            public constructor ($x: number, $yzw: Unity.Mathematics.float3)
            public constructor ($xy: Unity.Mathematics.float2, $z: number, $w: number)
            public constructor ($xy: Unity.Mathematics.float2, $zw: Unity.Mathematics.float2)
            public constructor ($xyz: Unity.Mathematics.float3, $w: number)
            public constructor ($xyzw: Unity.Mathematics.float4)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4)
            public constructor ($v: Unity.Mathematics.int4)
            public constructor ($v: Unity.Mathematics.uint4)
            public constructor ($v: Unity.Mathematics.half)
            public constructor ($v: Unity.Mathematics.half4)
            public constructor ($v: Unity.Mathematics.double4)
        }
        class int4x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int4x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.int4
            public c1 : Unity.Mathematics.int4
            public static zero : Unity.Mathematics.int4x2
            public static op_Implicit ($v: number) : Unity.Mathematics.int4x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int4x2
            public static op_Explicit ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.int4x2
            public static op_Explicit ($v: number) : Unity.Mathematics.int4x2
            public static op_Explicit ($v: Unity.Mathematics.uint4x2) : Unity.Mathematics.int4x2
            public static op_Explicit ($v: Unity.Mathematics.float4x2) : Unity.Mathematics.int4x2
            public static op_Explicit ($v: Unity.Mathematics.double4x2) : Unity.Mathematics.int4x2
            public static op_Multiply ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Multiply ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.int4x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Addition ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Addition ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.int4x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Subtraction ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Subtraction ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.int4x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Division ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Division ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.int4x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Modulus ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Modulus ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.int4x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Increment ($val: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_Decrement ($val: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_LessThan ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_LessThan ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_UnaryNegation ($val: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_UnaryPlus ($val: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_LeftShift ($x: Unity.Mathematics.int4x2, $n: number) : Unity.Mathematics.int4x2
            public static op_RightShift ($x: Unity.Mathematics.int4x2, $n: number) : Unity.Mathematics.int4x2
            public static op_Equality ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.bool4x2
            public static op_OnesComplement ($val: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.int4x2
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.int4x2
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int4x2, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int4x2, $rhs: number) : Unity.Mathematics.int4x2
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int4x2) : Unity.Mathematics.int4x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.int4>
            public Equals ($rhs: Unity.Mathematics.int4x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.int4, $c1: Unity.Mathematics.int4)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number, $m30: number, $m31: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x2)
            public constructor ($v: Unity.Mathematics.uint4x2)
            public constructor ($v: Unity.Mathematics.float4x2)
            public constructor ($v: Unity.Mathematics.double4x2)
        }
        class uint4x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint4x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.uint4
            public c1 : Unity.Mathematics.uint4
            public static zero : Unity.Mathematics.uint4x2
            public static op_Implicit ($v: number) : Unity.Mathematics.uint4x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint4x2
            public static op_Explicit ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.uint4x2
            public static op_Explicit ($v: number) : Unity.Mathematics.uint4x2
            public static op_Explicit ($v: Unity.Mathematics.int4x2) : Unity.Mathematics.uint4x2
            public static op_Explicit ($v: Unity.Mathematics.float4x2) : Unity.Mathematics.uint4x2
            public static op_Explicit ($v: Unity.Mathematics.double4x2) : Unity.Mathematics.uint4x2
            public static op_Multiply ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Multiply ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.uint4x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Addition ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Addition ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.uint4x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Subtraction ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Subtraction ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.uint4x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Division ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Division ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.uint4x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Modulus ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Modulus ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.uint4x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Increment ($val: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_Decrement ($val: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_LessThan ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_LessThan ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_UnaryNegation ($val: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_UnaryPlus ($val: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_LeftShift ($x: Unity.Mathematics.uint4x2, $n: number) : Unity.Mathematics.uint4x2
            public static op_RightShift ($x: Unity.Mathematics.uint4x2, $n: number) : Unity.Mathematics.uint4x2
            public static op_Equality ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.bool4x2
            public static op_OnesComplement ($val: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.uint4x2
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.uint4x2
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint4x2, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint4x2, $rhs: number) : Unity.Mathematics.uint4x2
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint4x2) : Unity.Mathematics.uint4x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.uint4>
            public Equals ($rhs: Unity.Mathematics.uint4x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.uint4, $c1: Unity.Mathematics.uint4)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number, $m30: number, $m31: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x2)
            public constructor ($v: Unity.Mathematics.int4x2)
            public constructor ($v: Unity.Mathematics.float4x2)
            public constructor ($v: Unity.Mathematics.double4x2)
        }
        class float4x2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float4x2>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.float4
            public c1 : Unity.Mathematics.float4
            public static zero : Unity.Mathematics.float4x2
            public static op_Implicit ($v: number) : Unity.Mathematics.float4x2
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float4x2
            public static op_Explicit ($v: Unity.Mathematics.bool4x2) : Unity.Mathematics.float4x2
            public static op_Implicit ($v: Unity.Mathematics.int4x2) : Unity.Mathematics.float4x2
            public static op_Implicit ($v: Unity.Mathematics.uint4x2) : Unity.Mathematics.float4x2
            public static op_Explicit ($v: number) : Unity.Mathematics.float4x2
            public static op_Explicit ($v: Unity.Mathematics.double4x2) : Unity.Mathematics.float4x2
            public static op_Multiply ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Multiply ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.float4x2
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Addition ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Addition ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.float4x2
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Subtraction ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Subtraction ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.float4x2
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Division ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Division ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.float4x2
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Modulus ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Modulus ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.float4x2
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Increment ($val: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Decrement ($val: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_LessThan ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_LessThan ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_UnaryNegation ($val: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_UnaryPlus ($val: Unity.Mathematics.float4x2) : Unity.Mathematics.float4x2
            public static op_Equality ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.float4x2, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: Unity.Mathematics.float4x2, $rhs: number) : Unity.Mathematics.bool4x2
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float4x2) : Unity.Mathematics.bool4x2
            public get_Item ($index: number) : $Ref<Unity.Mathematics.float4>
            public Equals ($rhs: Unity.Mathematics.float4x2) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.float4, $c1: Unity.Mathematics.float4)
            public constructor ($m00: number, $m01: number, $m10: number, $m11: number, $m20: number, $m21: number, $m30: number, $m31: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x2)
            public constructor ($v: Unity.Mathematics.int4x2)
            public constructor ($v: Unity.Mathematics.uint4x2)
            public constructor ($v: Unity.Mathematics.double4x2)
        }
        class int4x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int4x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.int4
            public c1 : Unity.Mathematics.int4
            public c2 : Unity.Mathematics.int4
            public static zero : Unity.Mathematics.int4x3
            public static op_Implicit ($v: number) : Unity.Mathematics.int4x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int4x3
            public static op_Explicit ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.int4x3
            public static op_Explicit ($v: number) : Unity.Mathematics.int4x3
            public static op_Explicit ($v: Unity.Mathematics.uint4x3) : Unity.Mathematics.int4x3
            public static op_Explicit ($v: Unity.Mathematics.float4x3) : Unity.Mathematics.int4x3
            public static op_Explicit ($v: Unity.Mathematics.double4x3) : Unity.Mathematics.int4x3
            public static op_Multiply ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Multiply ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.int4x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Addition ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Addition ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.int4x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Subtraction ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Subtraction ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.int4x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Division ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Division ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.int4x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Modulus ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Modulus ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.int4x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Increment ($val: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_Decrement ($val: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_LessThan ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_LessThan ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_UnaryNegation ($val: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_UnaryPlus ($val: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_LeftShift ($x: Unity.Mathematics.int4x3, $n: number) : Unity.Mathematics.int4x3
            public static op_RightShift ($x: Unity.Mathematics.int4x3, $n: number) : Unity.Mathematics.int4x3
            public static op_Equality ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.bool4x3
            public static op_OnesComplement ($val: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.int4x3
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.int4x3
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int4x3, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int4x3, $rhs: number) : Unity.Mathematics.int4x3
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int4x3) : Unity.Mathematics.int4x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.int4>
            public Equals ($rhs: Unity.Mathematics.int4x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.int4, $c1: Unity.Mathematics.int4, $c2: Unity.Mathematics.int4)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number, $m30: number, $m31: number, $m32: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x3)
            public constructor ($v: Unity.Mathematics.uint4x3)
            public constructor ($v: Unity.Mathematics.float4x3)
            public constructor ($v: Unity.Mathematics.double4x3)
        }
        class uint4x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint4x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.uint4
            public c1 : Unity.Mathematics.uint4
            public c2 : Unity.Mathematics.uint4
            public static zero : Unity.Mathematics.uint4x3
            public static op_Implicit ($v: number) : Unity.Mathematics.uint4x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint4x3
            public static op_Explicit ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.uint4x3
            public static op_Explicit ($v: number) : Unity.Mathematics.uint4x3
            public static op_Explicit ($v: Unity.Mathematics.int4x3) : Unity.Mathematics.uint4x3
            public static op_Explicit ($v: Unity.Mathematics.float4x3) : Unity.Mathematics.uint4x3
            public static op_Explicit ($v: Unity.Mathematics.double4x3) : Unity.Mathematics.uint4x3
            public static op_Multiply ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Multiply ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.uint4x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Addition ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Addition ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.uint4x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Subtraction ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Subtraction ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.uint4x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Division ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Division ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.uint4x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Modulus ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Modulus ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.uint4x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Increment ($val: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_Decrement ($val: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_LessThan ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_LessThan ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_UnaryNegation ($val: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_UnaryPlus ($val: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_LeftShift ($x: Unity.Mathematics.uint4x3, $n: number) : Unity.Mathematics.uint4x3
            public static op_RightShift ($x: Unity.Mathematics.uint4x3, $n: number) : Unity.Mathematics.uint4x3
            public static op_Equality ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.bool4x3
            public static op_OnesComplement ($val: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.uint4x3
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.uint4x3
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint4x3, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint4x3, $rhs: number) : Unity.Mathematics.uint4x3
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint4x3) : Unity.Mathematics.uint4x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.uint4>
            public Equals ($rhs: Unity.Mathematics.uint4x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.uint4, $c1: Unity.Mathematics.uint4, $c2: Unity.Mathematics.uint4)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number, $m30: number, $m31: number, $m32: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x3)
            public constructor ($v: Unity.Mathematics.int4x3)
            public constructor ($v: Unity.Mathematics.float4x3)
            public constructor ($v: Unity.Mathematics.double4x3)
        }
        class float4x3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float4x3>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.float4
            public c1 : Unity.Mathematics.float4
            public c2 : Unity.Mathematics.float4
            public static zero : Unity.Mathematics.float4x3
            public static op_Implicit ($v: number) : Unity.Mathematics.float4x3
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float4x3
            public static op_Explicit ($v: Unity.Mathematics.bool4x3) : Unity.Mathematics.float4x3
            public static op_Implicit ($v: Unity.Mathematics.int4x3) : Unity.Mathematics.float4x3
            public static op_Implicit ($v: Unity.Mathematics.uint4x3) : Unity.Mathematics.float4x3
            public static op_Explicit ($v: number) : Unity.Mathematics.float4x3
            public static op_Explicit ($v: Unity.Mathematics.double4x3) : Unity.Mathematics.float4x3
            public static op_Multiply ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Multiply ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.float4x3
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Addition ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Addition ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.float4x3
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Subtraction ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Subtraction ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.float4x3
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Division ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Division ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.float4x3
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Modulus ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Modulus ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.float4x3
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Increment ($val: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Decrement ($val: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_LessThan ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_LessThan ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_UnaryNegation ($val: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_UnaryPlus ($val: Unity.Mathematics.float4x3) : Unity.Mathematics.float4x3
            public static op_Equality ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.float4x3, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: Unity.Mathematics.float4x3, $rhs: number) : Unity.Mathematics.bool4x3
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float4x3) : Unity.Mathematics.bool4x3
            public get_Item ($index: number) : $Ref<Unity.Mathematics.float4>
            public Equals ($rhs: Unity.Mathematics.float4x3) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.float4, $c1: Unity.Mathematics.float4, $c2: Unity.Mathematics.float4)
            public constructor ($m00: number, $m01: number, $m02: number, $m10: number, $m11: number, $m12: number, $m20: number, $m21: number, $m22: number, $m30: number, $m31: number, $m32: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x3)
            public constructor ($v: Unity.Mathematics.int4x3)
            public constructor ($v: Unity.Mathematics.uint4x3)
            public constructor ($v: Unity.Mathematics.double4x3)
        }
        class double4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.double4x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.double4
            public c1 : Unity.Mathematics.double4
            public c2 : Unity.Mathematics.double4
            public c3 : Unity.Mathematics.double4
            public static identity : Unity.Mathematics.double4x4
            public static zero : Unity.Mathematics.double4x4
            public static op_Implicit ($v: number) : Unity.Mathematics.double4x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.double4x4
            public static op_Explicit ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.double4x4
            public static op_Implicit ($v: Unity.Mathematics.int4x4) : Unity.Mathematics.double4x4
            public static op_Implicit ($v: Unity.Mathematics.uint4x4) : Unity.Mathematics.double4x4
            public static op_Implicit ($v: Unity.Mathematics.float4x4) : Unity.Mathematics.double4x4
            public static op_Multiply ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Multiply ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.double4x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Addition ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Addition ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.double4x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Subtraction ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Subtraction ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.double4x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Division ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Division ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.double4x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Modulus ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Modulus ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.double4x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Increment ($val: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Decrement ($val: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_LessThan ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_LessThan ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_UnaryNegation ($val: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_UnaryPlus ($val: Unity.Mathematics.double4x4) : Unity.Mathematics.double4x4
            public static op_Equality ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.double4x4, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.double4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.double4x4) : Unity.Mathematics.bool4x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.double4>
            public Equals ($rhs: Unity.Mathematics.double4x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.double4, $c1: Unity.Mathematics.double4, $c2: Unity.Mathematics.double4, $c3: Unity.Mathematics.double4)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number, $m30: number, $m31: number, $m32: number, $m33: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x4)
            public constructor ($v: Unity.Mathematics.int4x4)
            public constructor ($v: Unity.Mathematics.uint4x4)
            public constructor ($v: Unity.Mathematics.float4x4)
        }
        class int4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.int4x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.int4
            public c1 : Unity.Mathematics.int4
            public c2 : Unity.Mathematics.int4
            public c3 : Unity.Mathematics.int4
            public static identity : Unity.Mathematics.int4x4
            public static zero : Unity.Mathematics.int4x4
            public static op_Implicit ($v: number) : Unity.Mathematics.int4x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.int4x4
            public static op_Explicit ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.int4x4
            public static op_Explicit ($v: number) : Unity.Mathematics.int4x4
            public static op_Explicit ($v: Unity.Mathematics.uint4x4) : Unity.Mathematics.int4x4
            public static op_Explicit ($v: Unity.Mathematics.float4x4) : Unity.Mathematics.int4x4
            public static op_Explicit ($v: Unity.Mathematics.double4x4) : Unity.Mathematics.int4x4
            public static op_Multiply ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Multiply ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.int4x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Addition ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Addition ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.int4x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Subtraction ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Subtraction ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.int4x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Division ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Division ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.int4x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Modulus ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Modulus ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.int4x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Increment ($val: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_Decrement ($val: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_LessThan ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_LessThan ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_UnaryNegation ($val: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_UnaryPlus ($val: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_LeftShift ($x: Unity.Mathematics.int4x4, $n: number) : Unity.Mathematics.int4x4
            public static op_RightShift ($x: Unity.Mathematics.int4x4, $n: number) : Unity.Mathematics.int4x4
            public static op_Equality ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.bool4x4
            public static op_OnesComplement ($val: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.int4x4
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.int4x4
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int4x4, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.int4x4, $rhs: number) : Unity.Mathematics.int4x4
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.int4x4) : Unity.Mathematics.int4x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.int4>
            public Equals ($rhs: Unity.Mathematics.int4x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.int4, $c1: Unity.Mathematics.int4, $c2: Unity.Mathematics.int4, $c3: Unity.Mathematics.int4)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number, $m30: number, $m31: number, $m32: number, $m33: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x4)
            public constructor ($v: Unity.Mathematics.uint4x4)
            public constructor ($v: Unity.Mathematics.float4x4)
            public constructor ($v: Unity.Mathematics.double4x4)
        }
        class uint4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.uint4x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.uint4
            public c1 : Unity.Mathematics.uint4
            public c2 : Unity.Mathematics.uint4
            public c3 : Unity.Mathematics.uint4
            public static identity : Unity.Mathematics.uint4x4
            public static zero : Unity.Mathematics.uint4x4
            public static op_Implicit ($v: number) : Unity.Mathematics.uint4x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.uint4x4
            public static op_Explicit ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.uint4x4
            public static op_Explicit ($v: number) : Unity.Mathematics.uint4x4
            public static op_Explicit ($v: Unity.Mathematics.int4x4) : Unity.Mathematics.uint4x4
            public static op_Explicit ($v: Unity.Mathematics.float4x4) : Unity.Mathematics.uint4x4
            public static op_Explicit ($v: Unity.Mathematics.double4x4) : Unity.Mathematics.uint4x4
            public static op_Multiply ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Multiply ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.uint4x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Addition ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Addition ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.uint4x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Subtraction ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Subtraction ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.uint4x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Division ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Division ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.uint4x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Modulus ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Modulus ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.uint4x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Increment ($val: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_Decrement ($val: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_LessThan ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_LessThan ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_UnaryNegation ($val: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_UnaryPlus ($val: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_LeftShift ($x: Unity.Mathematics.uint4x4, $n: number) : Unity.Mathematics.uint4x4
            public static op_RightShift ($x: Unity.Mathematics.uint4x4, $n: number) : Unity.Mathematics.uint4x4
            public static op_Equality ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.bool4x4
            public static op_OnesComplement ($val: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_BitwiseAnd ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.uint4x4
            public static op_BitwiseAnd ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_BitwiseOr ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.uint4x4
            public static op_BitwiseOr ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint4x4, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public static op_ExclusiveOr ($lhs: Unity.Mathematics.uint4x4, $rhs: number) : Unity.Mathematics.uint4x4
            public static op_ExclusiveOr ($lhs: number, $rhs: Unity.Mathematics.uint4x4) : Unity.Mathematics.uint4x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.uint4>
            public Equals ($rhs: Unity.Mathematics.uint4x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($c0: Unity.Mathematics.uint4, $c1: Unity.Mathematics.uint4, $c2: Unity.Mathematics.uint4, $c3: Unity.Mathematics.uint4)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number, $m30: number, $m31: number, $m32: number, $m33: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x4)
            public constructor ($v: Unity.Mathematics.int4x4)
            public constructor ($v: Unity.Mathematics.float4x4)
            public constructor ($v: Unity.Mathematics.double4x4)
        }
        class float4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.float4x4>
        {
            protected [__keep_incompatibility]: never;
            public c0 : Unity.Mathematics.float4
            public c1 : Unity.Mathematics.float4
            public c2 : Unity.Mathematics.float4
            public c3 : Unity.Mathematics.float4
            public static identity : Unity.Mathematics.float4x4
            public static zero : Unity.Mathematics.float4x4
            public static op_Implicit ($v: number) : Unity.Mathematics.float4x4
            public static op_Explicit ($v: boolean) : Unity.Mathematics.float4x4
            public static op_Explicit ($v: Unity.Mathematics.bool4x4) : Unity.Mathematics.float4x4
            public static op_Implicit ($v: Unity.Mathematics.int4x4) : Unity.Mathematics.float4x4
            public static op_Implicit ($v: Unity.Mathematics.uint4x4) : Unity.Mathematics.float4x4
            public static op_Explicit ($v: number) : Unity.Mathematics.float4x4
            public static op_Explicit ($v: Unity.Mathematics.double4x4) : Unity.Mathematics.float4x4
            public static op_Multiply ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Multiply ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.float4x4
            public static op_Multiply ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Addition ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Addition ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.float4x4
            public static op_Addition ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Subtraction ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Subtraction ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.float4x4
            public static op_Subtraction ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Division ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Division ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.float4x4
            public static op_Division ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Modulus ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Modulus ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.float4x4
            public static op_Modulus ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Increment ($val: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Decrement ($val: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_LessThan ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_LessThan ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_LessThan ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_LessThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_GreaterThan ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_GreaterThanOrEqual ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_UnaryNegation ($val: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_UnaryPlus ($val: Unity.Mathematics.float4x4) : Unity.Mathematics.float4x4
            public static op_Equality ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_Equality ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.float4x4, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: Unity.Mathematics.float4x4, $rhs: number) : Unity.Mathematics.bool4x4
            public static op_Inequality ($lhs: number, $rhs: Unity.Mathematics.float4x4) : Unity.Mathematics.bool4x4
            public get_Item ($index: number) : $Ref<Unity.Mathematics.float4>
            public Equals ($rhs: Unity.Mathematics.float4x4) : boolean
            public Equals ($o: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static op_Implicit ($m: UnityEngine.Matrix4x4) : Unity.Mathematics.float4x4
            public static op_Implicit ($m: Unity.Mathematics.float4x4) : UnityEngine.Matrix4x4
            public static AxisAngle ($axis: Unity.Mathematics.float3, $angle: number) : Unity.Mathematics.float4x4
            public static EulerXYZ ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static EulerXZY ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static EulerYXZ ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static EulerYZX ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static EulerZXY ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static EulerZYX ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static EulerXYZ ($x: number, $y: number, $z: number) : Unity.Mathematics.float4x4
            public static EulerXZY ($x: number, $y: number, $z: number) : Unity.Mathematics.float4x4
            public static EulerYXZ ($x: number, $y: number, $z: number) : Unity.Mathematics.float4x4
            public static EulerYZX ($x: number, $y: number, $z: number) : Unity.Mathematics.float4x4
            public static EulerZXY ($x: number, $y: number, $z: number) : Unity.Mathematics.float4x4
            public static EulerZYX ($x: number, $y: number, $z: number) : Unity.Mathematics.float4x4
            public static Euler ($xyz: Unity.Mathematics.float3, $order?: Unity.Mathematics.math.RotationOrder) : Unity.Mathematics.float4x4
            public static Euler ($x: number, $y: number, $z: number, $order?: Unity.Mathematics.math.RotationOrder) : Unity.Mathematics.float4x4
            public static RotateX ($angle: number) : Unity.Mathematics.float4x4
            public static RotateY ($angle: number) : Unity.Mathematics.float4x4
            public static RotateZ ($angle: number) : Unity.Mathematics.float4x4
            public static Scale ($s: number) : Unity.Mathematics.float4x4
            public static Scale ($x: number, $y: number, $z: number) : Unity.Mathematics.float4x4
            public static Scale ($scales: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static Translate ($vector: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static LookAt ($eye: Unity.Mathematics.float3, $target: Unity.Mathematics.float3, $up: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public static Ortho ($width: number, $height: number, $near: number, $far: number) : Unity.Mathematics.float4x4
            public static OrthoOffCenter ($left: number, $right: number, $bottom: number, $top: number, $near: number, $far: number) : Unity.Mathematics.float4x4
            public static PerspectiveFov ($verticalFov: number, $aspect: number, $near: number, $far: number) : Unity.Mathematics.float4x4
            public static PerspectiveOffCenter ($left: number, $right: number, $bottom: number, $top: number, $near: number, $far: number) : Unity.Mathematics.float4x4
            public static TRS ($translation: Unity.Mathematics.float3, $rotation: Unity.Mathematics.quaternion, $scale: Unity.Mathematics.float3) : Unity.Mathematics.float4x4
            public constructor ($c0: Unity.Mathematics.float4, $c1: Unity.Mathematics.float4, $c2: Unity.Mathematics.float4, $c3: Unity.Mathematics.float4)
            public constructor ($m00: number, $m01: number, $m02: number, $m03: number, $m10: number, $m11: number, $m12: number, $m13: number, $m20: number, $m21: number, $m22: number, $m23: number, $m30: number, $m31: number, $m32: number, $m33: number)
            public constructor ($v: number)
            public constructor ($v: boolean)
            public constructor ($v: Unity.Mathematics.bool4x4)
            public constructor ($v: Unity.Mathematics.int4x4)
            public constructor ($v: Unity.Mathematics.uint4x4)
            public constructor ($v: Unity.Mathematics.double4x4)
            public constructor ($rotation: Unity.Mathematics.float3x3, $translation: Unity.Mathematics.float3)
            public constructor ($rotation: Unity.Mathematics.quaternion, $translation: Unity.Mathematics.float3)
            public constructor ($transform: Unity.Mathematics.RigidTransform)
        }
        class quaternion extends System.ValueType implements System.IFormattable, System.IEquatable$1<Unity.Mathematics.quaternion>
        {
            protected [__keep_incompatibility]: never;
            public value : Unity.Mathematics.float4
            public static identity : Unity.Mathematics.quaternion
            public static op_Implicit ($q: Unity.Mathematics.quaternion) : UnityEngine.Quaternion
            public static op_Implicit ($q: UnityEngine.Quaternion) : Unity.Mathematics.quaternion
            public static op_Implicit ($v: Unity.Mathematics.float4) : Unity.Mathematics.quaternion
            public static AxisAngle ($axis: Unity.Mathematics.float3, $angle: number) : Unity.Mathematics.quaternion
            public static EulerXYZ ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.quaternion
            public static EulerXZY ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.quaternion
            public static EulerYXZ ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.quaternion
            public static EulerYZX ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.quaternion
            public static EulerZXY ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.quaternion
            public static EulerZYX ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.quaternion
            public static EulerXYZ ($x: number, $y: number, $z: number) : Unity.Mathematics.quaternion
            public static EulerXZY ($x: number, $y: number, $z: number) : Unity.Mathematics.quaternion
            public static EulerYXZ ($x: number, $y: number, $z: number) : Unity.Mathematics.quaternion
            public static EulerYZX ($x: number, $y: number, $z: number) : Unity.Mathematics.quaternion
            public static EulerZXY ($x: number, $y: number, $z: number) : Unity.Mathematics.quaternion
            public static EulerZYX ($x: number, $y: number, $z: number) : Unity.Mathematics.quaternion
            public static Euler ($xyz: Unity.Mathematics.float3, $order?: Unity.Mathematics.math.RotationOrder) : Unity.Mathematics.quaternion
            public static Euler ($x: number, $y: number, $z: number, $order?: Unity.Mathematics.math.RotationOrder) : Unity.Mathematics.quaternion
            public static RotateX ($angle: number) : Unity.Mathematics.quaternion
            public static RotateY ($angle: number) : Unity.Mathematics.quaternion
            public static RotateZ ($angle: number) : Unity.Mathematics.quaternion
            public static LookRotation ($forward: Unity.Mathematics.float3, $up: Unity.Mathematics.float3) : Unity.Mathematics.quaternion
            public static LookRotationSafe ($forward: Unity.Mathematics.float3, $up: Unity.Mathematics.float3) : Unity.Mathematics.quaternion
            public Equals ($x: Unity.Mathematics.quaternion) : boolean
            public Equals ($x: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public constructor ($value: Unity.Mathematics.float4)
            public constructor ($m: Unity.Mathematics.float3x3)
            public constructor ($m: Unity.Mathematics.float4x4)
        }
        class RigidTransform extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public rot : Unity.Mathematics.quaternion
            public pos : Unity.Mathematics.float3
            public static identity : Unity.Mathematics.RigidTransform
            public static AxisAngle ($axis: Unity.Mathematics.float3, $angle: number) : Unity.Mathematics.RigidTransform
            public static EulerXYZ ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.RigidTransform
            public static EulerXZY ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.RigidTransform
            public static EulerYXZ ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.RigidTransform
            public static EulerYZX ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.RigidTransform
            public static EulerZXY ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.RigidTransform
            public static EulerZYX ($xyz: Unity.Mathematics.float3) : Unity.Mathematics.RigidTransform
            public static EulerXYZ ($x: number, $y: number, $z: number) : Unity.Mathematics.RigidTransform
            public static EulerXZY ($x: number, $y: number, $z: number) : Unity.Mathematics.RigidTransform
            public static EulerYXZ ($x: number, $y: number, $z: number) : Unity.Mathematics.RigidTransform
            public static EulerYZX ($x: number, $y: number, $z: number) : Unity.Mathematics.RigidTransform
            public static EulerZXY ($x: number, $y: number, $z: number) : Unity.Mathematics.RigidTransform
            public static EulerZYX ($x: number, $y: number, $z: number) : Unity.Mathematics.RigidTransform
            public static Euler ($xyz: Unity.Mathematics.float3, $order?: Unity.Mathematics.math.RotationOrder) : Unity.Mathematics.RigidTransform
            public static Euler ($x: number, $y: number, $z: number, $order?: Unity.Mathematics.math.RotationOrder) : Unity.Mathematics.RigidTransform
            public static RotateX ($angle: number) : Unity.Mathematics.RigidTransform
            public static RotateY ($angle: number) : Unity.Mathematics.RigidTransform
            public static RotateZ ($angle: number) : Unity.Mathematics.RigidTransform
            public static Translate ($vector: Unity.Mathematics.float3) : Unity.Mathematics.RigidTransform
            public Equals ($x: Unity.Mathematics.RigidTransform) : boolean
            public Equals ($x: any) : boolean
            public ToString () : string
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($rotation: Unity.Mathematics.quaternion, $translation: Unity.Mathematics.float3)
            public constructor ($rotation: Unity.Mathematics.float3x3, $translation: Unity.Mathematics.float3)
            public constructor ($transform: Unity.Mathematics.float4x4)
        }
        class noise extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static cellular ($P: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static cellular2x2 ($P: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public static cellular2x2x2 ($P: Unity.Mathematics.float3) : Unity.Mathematics.float2
            public static cellular ($P: Unity.Mathematics.float3) : Unity.Mathematics.float2
            public static cnoise ($P: Unity.Mathematics.float2) : number
            public static pnoise ($P: Unity.Mathematics.float2, $rep: Unity.Mathematics.float2) : number
            public static cnoise ($P: Unity.Mathematics.float3) : number
            public static pnoise ($P: Unity.Mathematics.float3, $rep: Unity.Mathematics.float3) : number
            public static cnoise ($P: Unity.Mathematics.float4) : number
            public static pnoise ($P: Unity.Mathematics.float4, $rep: Unity.Mathematics.float4) : number
            public static snoise ($v: Unity.Mathematics.float2) : number
            public static snoise ($v: Unity.Mathematics.float3) : number
            public static snoise ($v: Unity.Mathematics.float3, $gradient: $Ref<Unity.Mathematics.float3>) : number
            public static snoise ($v: Unity.Mathematics.float4) : number
            public static psrdnoise ($pos: Unity.Mathematics.float2, $per: Unity.Mathematics.float2, $rot: number) : Unity.Mathematics.float3
            public static psrdnoise ($pos: Unity.Mathematics.float2, $per: Unity.Mathematics.float2) : Unity.Mathematics.float3
            public static psrnoise ($pos: Unity.Mathematics.float2, $per: Unity.Mathematics.float2, $rot: number) : number
            public static psrnoise ($pos: Unity.Mathematics.float2, $per: Unity.Mathematics.float2) : number
            public static srdnoise ($pos: Unity.Mathematics.float2, $rot: number) : Unity.Mathematics.float3
            public static srdnoise ($pos: Unity.Mathematics.float2) : Unity.Mathematics.float3
            public static srnoise ($pos: Unity.Mathematics.float2, $rot: number) : number
            public static srnoise ($pos: Unity.Mathematics.float2) : number
        }
        class PostNormalizeAttribute extends UnityEngine.PropertyAttribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class DoNotNormalizeAttribute extends UnityEngine.PropertyAttribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class Random extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public state : number
            public static CreateFromIndex ($index: number) : Unity.Mathematics.Random
            public InitState ($seed?: number) : void
            public NextBool () : boolean
            public NextBool2 () : Unity.Mathematics.bool2
            public NextBool3 () : Unity.Mathematics.bool3
            public NextBool4 () : Unity.Mathematics.bool4
            public NextInt () : number
            public NextInt2 () : Unity.Mathematics.int2
            public NextInt3 () : Unity.Mathematics.int3
            public NextInt4 () : Unity.Mathematics.int4
            public NextInt ($max: number) : number
            public NextInt2 ($max: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public NextInt3 ($max: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public NextInt4 ($max: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public NextInt ($min: number, $max: number) : number
            public NextInt2 ($min: Unity.Mathematics.int2, $max: Unity.Mathematics.int2) : Unity.Mathematics.int2
            public NextInt3 ($min: Unity.Mathematics.int3, $max: Unity.Mathematics.int3) : Unity.Mathematics.int3
            public NextInt4 ($min: Unity.Mathematics.int4, $max: Unity.Mathematics.int4) : Unity.Mathematics.int4
            public NextUInt () : number
            public NextUInt2 () : Unity.Mathematics.uint2
            public NextUInt3 () : Unity.Mathematics.uint3
            public NextUInt4 () : Unity.Mathematics.uint4
            public NextUInt ($max: number) : number
            public NextUInt2 ($max: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public NextUInt3 ($max: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public NextUInt4 ($max: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public NextUInt ($min: number, $max: number) : number
            public NextUInt2 ($min: Unity.Mathematics.uint2, $max: Unity.Mathematics.uint2) : Unity.Mathematics.uint2
            public NextUInt3 ($min: Unity.Mathematics.uint3, $max: Unity.Mathematics.uint3) : Unity.Mathematics.uint3
            public NextUInt4 ($min: Unity.Mathematics.uint4, $max: Unity.Mathematics.uint4) : Unity.Mathematics.uint4
            public NextFloat () : number
            public NextFloat2 () : Unity.Mathematics.float2
            public NextFloat3 () : Unity.Mathematics.float3
            public NextFloat4 () : Unity.Mathematics.float4
            public NextFloat ($max: number) : number
            public NextFloat2 ($max: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public NextFloat3 ($max: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public NextFloat4 ($max: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public NextFloat ($min: number, $max: number) : number
            public NextFloat2 ($min: Unity.Mathematics.float2, $max: Unity.Mathematics.float2) : Unity.Mathematics.float2
            public NextFloat3 ($min: Unity.Mathematics.float3, $max: Unity.Mathematics.float3) : Unity.Mathematics.float3
            public NextFloat4 ($min: Unity.Mathematics.float4, $max: Unity.Mathematics.float4) : Unity.Mathematics.float4
            public NextDouble () : number
            public NextDouble2 () : Unity.Mathematics.double2
            public NextDouble3 () : Unity.Mathematics.double3
            public NextDouble4 () : Unity.Mathematics.double4
            public NextDouble ($max: number) : number
            public NextDouble2 ($max: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public NextDouble3 ($max: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public NextDouble4 ($max: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public NextDouble ($min: number, $max: number) : number
            public NextDouble2 ($min: Unity.Mathematics.double2, $max: Unity.Mathematics.double2) : Unity.Mathematics.double2
            public NextDouble3 ($min: Unity.Mathematics.double3, $max: Unity.Mathematics.double3) : Unity.Mathematics.double3
            public NextDouble4 ($min: Unity.Mathematics.double4, $max: Unity.Mathematics.double4) : Unity.Mathematics.double4
            public NextFloat2Direction () : Unity.Mathematics.float2
            public NextDouble2Direction () : Unity.Mathematics.double2
            public NextFloat3Direction () : Unity.Mathematics.float3
            public NextDouble3Direction () : Unity.Mathematics.double3
            public NextQuaternionRotation () : Unity.Mathematics.quaternion
            public constructor ($seed: number)
        }
    }
    namespace Unity.Mathematics.math {
        enum ShuffleComponent
        { LeftX = 0, LeftY = 1, LeftZ = 2, LeftW = 3, RightX = 4, RightY = 5, RightZ = 6, RightW = 7 }
        enum RotationOrder
        { XYZ = 0, XZY = 1, YXZ = 2, YZX = 3, ZXY = 4, ZYX = 5, Default = 4 }
    }
}
