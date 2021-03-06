OpCapability Shader
%1 = OpExtInstImport "GLSL.std.450"
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %main "main" %sk_FragColor %sk_Clockwise
OpExecutionMode %main OriginUpperLeft
OpName %sk_FragColor "sk_FragColor"
OpName %sk_Clockwise "sk_Clockwise"
OpName %main "main"
OpDecorate %sk_FragColor RelaxedPrecision
OpDecorate %sk_FragColor Location 0
OpDecorate %sk_FragColor Index 0
OpDecorate %sk_Clockwise RelaxedPrecision
OpDecorate %sk_Clockwise BuiltIn FrontFacing
OpDecorate %_arr_float_int_4 ArrayStride 16
%float = OpTypeFloat 32
%v4float = OpTypeVector %float 4
%_ptr_Output_v4float = OpTypePointer Output %v4float
%sk_FragColor = OpVariable %_ptr_Output_v4float Output
%bool = OpTypeBool
%_ptr_Input_bool = OpTypePointer Input %bool
%sk_Clockwise = OpVariable %_ptr_Input_bool Input
%void = OpTypeVoid
%11 = OpTypeFunction %void
%int = OpTypeInt 32 1
%int_4 = OpConstant %int 4
%_arr_float_int_4 = OpTypeArray %float %int_4
%_ptr_Function__arr_float_int_4 = OpTypePointer Function %_arr_float_int_4
%float_1 = OpConstant %float 1
%float_2 = OpConstant %float 2
%float_3 = OpConstant %float 3
%float_4 = OpConstant %float 4
%int_0 = OpConstant %int 0
%_ptr_Function_float = OpTypePointer Function %float
%int_1 = OpConstant %int 1
%int_2 = OpConstant %int 2
%uint = OpTypeInt 32 0
%uint_3 = OpConstant %uint 3
%main = OpFunction %void None %11
%12 = OpLabel
%13 = OpVariable %_ptr_Function__arr_float_int_4 Function
%27 = OpVariable %_ptr_Function__arr_float_int_4 Function
%32 = OpVariable %_ptr_Function__arr_float_int_4 Function
%37 = OpVariable %_ptr_Function__arr_float_int_4 Function
%22 = OpCompositeConstruct %_arr_float_int_4 %float_1 %float_2 %float_3 %float_4
OpStore %13 %22
%24 = OpAccessChain %_ptr_Function_float %13 %int_0
%26 = OpLoad %float %24
%28 = OpCompositeConstruct %_arr_float_int_4 %float_1 %float_2 %float_3 %float_4
OpStore %27 %28
%30 = OpAccessChain %_ptr_Function_float %27 %int_1
%31 = OpLoad %float %30
%33 = OpCompositeConstruct %_arr_float_int_4 %float_1 %float_2 %float_3 %float_4
OpStore %32 %33
%35 = OpAccessChain %_ptr_Function_float %32 %int_2
%36 = OpLoad %float %35
%38 = OpCompositeConstruct %_arr_float_int_4 %float_1 %float_2 %float_3 %float_4
OpStore %37 %38
%41 = OpAccessChain %_ptr_Function_float %37 %uint_3
%42 = OpLoad %float %41
%43 = OpCompositeConstruct %v4float %26 %31 %36 %42
OpStore %sk_FragColor %43
OpReturn
OpFunctionEnd
