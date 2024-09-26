declare namespace CS {
    namespace OneJS.Samples {
        class SampleCharacter extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public get Health(): number;
            public set Health(value: number);
            public get MaxHealth(): number;
            public set MaxHealth(value: number);
            public get SlotIndex(): number;
            public set SlotIndex(value: number);
            public add_OnHealthChanged ($value: System.Action$1<number>) : void
            public remove_OnHealthChanged ($value: System.Action$1<number>) : void
            public add_OnMaxHealthChanged ($value: System.Action$1<number>) : void
            public remove_OnMaxHealthChanged ($value: System.Action$1<number>) : void
            public add_OnSlotIndexChanged ($value: System.Action$1<number>) : void
            public remove_OnSlotIndexChanged ($value: System.Action$1<number>) : void
            public constructor ()
        }
    }
}