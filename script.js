// 题目数据
const questions = [
    // 选择题精选
    {
        type: 'single',
        question: '在进行单元测试时，常用的方法是（ ）',
        options: [
            'A. 采用白盒测试，辅之以黑盒测试',
            'B. 采用黑盒测试，辅之以白盒测试',
            'C. 只适用白盒测试',
            'D. 只适用黑盒测试'
        ],
        answer: 'A',
        explanation: '单元测试主要关注代码的内部逻辑，因此白盒测试是主要方法。但同时也会结合黑盒测试来验证功能是否符合预期，所以正确答案是A。'
    },
    {
        type: 'single',
        question: '关于白盒测试与黑盒测试的最主要区别，正确的是（ ）',
        options: [
            'A. 白盒测试侧重于程序结构，黑盒测试侧重于功能',
            'B. 白盒测试可以使用测试工具，黑盒测试不能使用工具',
            'C. 白盒测试需要程序参与，黑盒测试不需要',
            'D. 黑盒测试比白盒测试应用更广泛'
        ],
        answer: 'A',
        explanation: '白盒测试是基于代码内部结构的测试，关注程序的执行路径和逻辑；黑盒测试是基于功能需求的测试，不关注内部实现。因此两者的最主要区别是测试的侧重点不同，正确答案是A。'
    },
    {
        type: 'single',
        question: '在下列逻辑覆盖测试法中，覆盖程度最高的是（ ）',
        options: [
            'A. 语句覆盖',
            'B. 判定覆盖',
            'C. 路径覆盖',
            'D. 条件组合覆盖'
        ],
        answer: 'C',
        explanation: '路径覆盖要求覆盖程序中所有可能的执行路径，是最强的覆盖准则。语句覆盖只要求覆盖所有语句，判定覆盖要求覆盖所有判定结果，条件组合覆盖要求覆盖所有条件的组合，都不如路径覆盖全面。因此正确答案是C。'
    },
    {
        type: 'single',
        question: '使用白盒测试方法时，确定测试数据应根据（ ）和指定的覆盖标准',
        options: [
            'A. 程序的内部逻辑',
            'B. 程序的复杂程度',
            'C. 使用说明书',
            'D. 程序的功能'
        ],
        answer: 'A',
        explanation: '白盒测试是基于程序内部结构的测试，因此确定测试数据时需要根据程序的内部逻辑和指定的覆盖标准（如语句覆盖、判定覆盖等）。使用说明书和程序功能是黑盒测试的依据，程序复杂程度不是直接依据。因此正确答案是A。'
    },
    {
        type: 'single',
        question: '下面不属于能保证的是（ ）',
        options: [
            'A. 模块中所有独立途径至少测试一次',
            'B. 测试所有逻辑决策真和假两个方面',
            'C. 在所有循环的边界内部和边界上执行循环体',
            'D. 不正确或漏掉的功能'
        ],
        answer: 'D',
        explanation: '白盒测试可以保证模块中所有独立途径至少测试一次（路径覆盖），测试所有逻辑决策的真假两个方面（判定覆盖），在所有循环的边界内部和边界上执行循环体（边界测试）。但白盒测试无法发现需求阶段就遗漏的功能，因为这些功能在代码中根本不存在。因此正确答案是D。'
    },
    {
        type: 'single',
        question: '对下面的个人所得税程序中满足判定覆盖测试用例的是（ ）\nif (income < 800) taxrate = 0;\nelse if (income <= 1500) taxrate = 0.05;\nelse if (income < 2000) taxrate = 0.08;\nelse taxrate = 0.1;',
        options: [
            'A. income = (799, 1500, 1999, 2001)',
            'B. income = (799, 1501, 2000, 2000)',
            'C. income = (800, 1500, 2000, 2001)',
            'D. income = (800, 1499, 2000, 2001)'
        ],
        answer: 'A',
        explanation: '判定覆盖要求覆盖所有判定的真假分支。对于这段程序，有4个判定条件：income < 800、income <= 1500、income < 2000和最后的else。选项A中的测试用例分别覆盖了：799（第一个条件为真）、1500（第一个条件为假，第二个为真）、1999（前两个为假，第三个为真）、2001（所有条件为假，执行else），满足判定覆盖。因此正确答案是A。'
    },
    {
        type: 'single',
        question: '软件测试中常用的静态分析方法是（ ）和接口分析。',
        options: [
            'A. 引用分析',
            'B. 算法分析',
            'C. 可靠性分析',
            'D. 效率分析'
        ],
        answer: 'A',
        explanation: '静态分析是不运行程序的测试方法，主要用于检查代码的结构和质量。引用分析和接口分析是常用的静态分析方法，引用分析用于检查变量和函数的引用关系，接口分析用于检查模块之间的接口是否正确。算法分析、可靠性分析和效率分析通常需要运行程序，属于动态分析方法。因此正确答案是A。'
    },
    {
        type: 'single',
        question: '有一组测试用例使得每一个被测试用例的分支覆盖至少被执行一次，它满足的覆盖标准是（ ）',
        options: [
            'A. 语句覆盖',
            'B. 判定覆盖',
            'C. 条件覆盖',
            'D. 路径覆盖'
        ],
        answer: 'B',
        explanation: '分支覆盖（Branch Coverage）又称为判定覆盖（Decision Coverage），它要求测试用例覆盖程序中所有可能的分支，即每个判定语句的真假结果至少执行一次。语句覆盖只要求覆盖所有语句，条件覆盖要求覆盖所有条件的真假值，路径覆盖要求覆盖所有可能的执行路径。因此正确答案是B。'
    },
    {
        type: 'single',
        question: '以下四种逻辑覆盖中，发现错误能力最强的是（ ）',
        options: [
            'A. 语句覆盖',
            'B. 条件覆盖',
            'C. 判定覆盖',
            'D. 条件组合覆盖'
        ],
        answer: 'D',
        explanation: '条件组合覆盖要求覆盖所有条件的组合，即每个判定中的所有条件的真假值组合都至少执行一次。相比之下，语句覆盖只覆盖所有语句，判定覆盖只覆盖所有判定结果，条件覆盖只覆盖所有条件的真假值。条件组合覆盖能够发现更多的逻辑错误，因为它考虑了条件之间的组合关系，因此发现错误的能力最强。因此正确答案是D。'
    },
    {
        type: 'single',
        question: '测试覆盖程度最弱的是（ ）',
        options: [
            'A. 条件覆盖',
            'B. 条件组合覆盖',
            'C. 语句覆盖',
            'D. 条件及判定覆盖'
        ],
        answer: 'C',
        explanation: '语句覆盖只要求覆盖程序中的所有语句，是最弱的覆盖准则。它只关注语句是否被执行，而不关注条件的真假值和分支的执行情况。相比之下，条件覆盖要求覆盖所有条件的真假值，条件及判定覆盖要求同时覆盖条件和判定，条件组合覆盖要求覆盖所有条件的组合，这些覆盖准则的强度都高于语句覆盖。因此正确答案是C。' 
    },
    {
        type: 'single',
        question: '下列陈述中正确的是（ ）',
        options: [
            'A. 结构测试中不包括循环测试',
            'B. 猜测错误也是一种测试方法',
            'C. 如果能做到穷举测试，便可发现程序中的全部错误',
            'D. 语句覆盖达到100%，则分支（判定）覆盖也应达到100%'
        ],
        answer: 'B',
        explanation: '猜测错误是一种基于经验和直觉的测试方法，也称为错误推测法，属于黑盒测试方法之一。结构测试（白盒测试）包括循环测试，用于测试循环的边界和内部逻辑。穷举测试虽然能覆盖所有可能的输入，但无法发现需求阶段遗漏的功能。语句覆盖达到100%并不意味着分支覆盖也达到100%，因为可能存在某些分支没有被执行的情况。因此正确答案是B。' 
    },
    {
        type: 'single',
        question: '关于条件测试错误的是（ ）',
        options: [
            'A. 可以检查程序中所包含的逻辑条件',
            'B. 条件中包含的错误有布尔算子错误',
            'C. 条件中包含的错误有布尔变量错误',
            'D. 条件中包含的错误有接口错误'
        ],
        answer: 'D',
        explanation: '条件测试是用于检查程序中逻辑条件的测试方法，它关注条件表达式中的错误，如布尔算子错误（如使用&&代替||）、布尔变量错误（如变量名错误）等。接口错误属于模块间交互的错误，不是条件测试关注的内容。因此正确答案是D。' 
    },
    {
        type: 'single',
        question: '白盒测试法一般适用于（ ）测试。',
        options: [
            'A. 单元',
            'B. 系统',
            'C. 集成',
            'D. 确认'
        ],
        answer: 'A',
        explanation: '白盒测试是基于代码内部结构的测试方法，主要关注单元的内部逻辑、分支和路径。单元测试是测试的最小单位，针对单个模块或函数进行测试，最适合使用白盒测试方法。系统测试、集成测试和确认测试通常更关注功能和整体行为，适合使用黑盒测试方法。因此正确答案是A。' 
    },
    {
        type: 'single',
        question: '下列哪一项不是白盒测试？',
        options: [
            'A. 单元测试',
            'B. 集成测试',
            'C. 系统测试',
            'D. 回归测试'
        ],
        answer: 'C',
        explanation: '白盒测试是基于代码内部结构的测试方法。单元测试主要测试单个模块的内部逻辑，常用白盒测试方法；集成测试测试模块间的接口和交互，部分使用白盒测试；回归测试是为了验证修改后没有引入新问题，可能同时使用白盒和黑盒测试。而系统测试是测试整个系统的功能和性能，不关注内部实现，属于黑盒测试。因此正确答案是C。' 
    },
    {
        type: 'single',
        question: '白盒方法中常用的方法是（ ）方法。',
        options: [
            'A. 路径测试',
            'B. 等价类',
            'C. 因果图',
            'D. 归纳测试'
        ],
        answer: 'A',
        explanation: '白盒测试方法主要关注程序的内部结构和执行路径。路径测试是白盒测试中常用的方法，它通过覆盖程序中所有可能的执行路径来确保代码的正确性。等价类、因果图和归纳测试都属于黑盒测试方法，它们基于功能需求进行测试，不关注内部实现。因此正确答案是A。' 
    },
    {
        type: 'single',
        question: '路径测试通常使用程序控制流图来代替（ ）',
        options: [
            'A. 程序框图',
            'B. 结构图',
            'C. 数据流图',
            'D. 程序流程图'
        ],
        answer: 'D',
        explanation: '路径测试需要分析程序的执行路径，程序控制流图是一种用于表示程序执行流程的图形化工具，它只关注程序的控制结构，不关注具体的实现细节。程序流程图虽然也能表示程序流程，但包含了更多的实现细节，不利于路径分析。程序框图和结构图是不同的概念，数据流图关注数据的流动而不是控制流程。因此正确答案是D。' 
    },
    {
        type: 'single',
        question: '白箱测试法将程序看作是（ ）',
        options: [
            'A. 路径的集合',
            'B. 循环的集合',
            'C. 目标的集合',
            'D. 地址的集合'
        ],
        answer: 'A',
        explanation: '白箱测试法（白盒测试）将程序看作是路径的集合，它关注程序中所有可能的执行路径。测试的目标是覆盖这些路径，确保每一条路径都能被执行到，从而发现潜在的逻辑错误。循环、目标和地址都不是白盒测试关注的主要对象。因此正确答案是A。' 
    },
    {
        type: 'single',
        question: '下述哪些是白盒测试应包括的内容？\nI. 边缘值分析\nII. 语句测试\nIII. 分支测试\nIV. 路径测试',
        options: [
            'A. I',
            'B. II 和 III',
            'C. III 和 IV',
            'D. II、III 和 IV'
        ],
        answer: 'D',
        explanation: '白盒测试是基于代码内部结构的测试方法。语句测试（覆盖所有语句）、分支测试（覆盖所有分支）和路径测试（覆盖所有执行路径）都是白盒测试的核心内容。而边缘值分析是黑盒测试的方法，用于测试输入输出的边界值，不属于白盒测试的范畴。因此正确答案是D。' 
    },
    {
        type: 'single',
        question: '逻辑覆盖中，最弱准则是（ ），最强准则是（ ）',
        options: [
            'A. 语句覆盖，路径覆盖',
            'B. 条件覆盖，路径覆盖',
            'C. 判定覆盖，条件组合覆盖',
            'D. 语句覆盖，条件组合覆盖'
        ],
        answer: 'A',
        explanation: '逻辑覆盖准则的强度从弱到强依次为：语句覆盖 < 判定覆盖 < 条件覆盖 < 条件组合覆盖 < 路径覆盖。语句覆盖只要求覆盖所有语句，是最弱的准则；路径覆盖要求覆盖程序中所有可能的执行路径，是最强的准则。因此正确答案是A。'
    },
    // 填空题转换
    {
        type: 'single',
        question: '集成测试目的主要发现（ ）阶段的错误。',
        options: [
            'A. 需求分析',
            'B. 概要设计',
            'C. 详细设计',
            'D. 编码'
        ],
        answer: 'B',
        explanation: '集成测试是测试模块之间的接口和交互关系。概要设计阶段主要负责模块的划分和模块间接口的设计，因此集成测试主要发现的是概要设计阶段的错误，如模块之间的接口不匹配、数据传递错误等。需求分析阶段的错误主要在验收测试中发现，详细设计和编码阶段的错误主要在单元测试中发现。因此正确答案是B。'
    },
    {
        type: 'single',
        question: '逻辑覆盖不包括（ ）',
        options: [
            'A. 语句覆盖',
            'B. 条件覆盖',
            'C. 接口覆盖',
            'D. 路径覆盖'
        ],
        answer: 'C',
        explanation: '逻辑覆盖是白盒测试中基于程序内部逻辑结构的测试方法，主要包括语句覆盖、判定覆盖（分支覆盖）、条件覆盖、判定/条件覆盖、条件组合覆盖、路径覆盖等。接口覆盖不属于逻辑覆盖，它主要关注模块之间的接口和交互，属于集成测试的范畴。因此正确答案是C。'
    },
    {
        type: 'single',
        question: '资源耗尽测试称为（ ）',
        options: [
            'A. 压力测试',
            'B. 性能测试',
            'C. 可靠性测试',
            'D. 兼容性测试'
        ],
        answer: 'A',
        explanation: '压力测试是一种系统测试方法，用于评估系统在极端条件下的表现，包括资源耗尽的情况。它通过施加超过正常负载的压力，测试系统在资源（如CPU、内存、磁盘空间、网络带宽等）接近或耗尽时的稳定性和响应能力。性能测试主要关注正常负载下的性能指标，可靠性测试关注长时间运行的稳定性，兼容性测试关注不同环境下的兼容性，均与资源耗尽测试的定义不符。因此正确答案是A。'
    },
    {
        type: 'single',
        question: '必须用户参与的测试是（ ）',
        options: [
            'A. 单元测试',
            'B. 集成测试',
            'C. 系统测试',
            'D. 验收测试'
        ],
        answer: 'D',
        explanation: '验收测试是软件测试的最后一个阶段，目的是验证软件是否满足用户的需求和期望，确保软件可以正式交付使用。由于验收测试直接关系到软件是否符合用户的实际业务需求，因此必须有用户参与，以便从用户的角度验证软件的功能、性能和易用性。而单元测试、集成测试和系统测试主要由开发团队和测试团队完成，不需要最终用户直接参与。因此正确答案是D。'
    },
    {
        type: 'single',
        question: '黑盒测试方法基于（ ）测试。',
        options: [
            'A. 用户需求',
            'B. 程序结构',
            'C. 代码逻辑',
            'D. 内部实现'
        ],
        answer: 'A',
        explanation: '黑盒测试是一种基于功能需求的测试方法，它不关注程序的内部实现、结构或代码逻辑，而是将程序视为一个“黑盒”，仅根据用户需求和规格说明来设计测试用例，验证程序是否能正确实现预期功能。程序结构、代码逻辑和内部实现都是白盒测试关注的内容。因此正确答案是A。'
    },
    {
        type: 'single',
        question: '软件测试最基础环节是（ ）',
        options: [
            'A. 单元测试',
            'B. 集成测试',
            'C. 系统测试',
            'D. 验收测试'
        ],
        answer: 'A',
        explanation: '单元测试是软件测试的最基础环节，它针对软件中的最小可测试单元（如函数、方法、类等）进行测试，验证每个单元的功能是否符合预期。单元测试是后续测试阶段（集成测试、系统测试、验收测试）的基础，只有确保每个单元的功能正确，才能保证整个系统的质量。因此正确答案是A。'
    },
    {
        type: 'single',
        question: '因果图法依据（ ）',
        options: [
            'A. 输出对输入的依赖关系',
            'B. 程序结构',
            'C. 代码逻辑',
            'D. 内部实现'
        ],
        answer: 'A',
        explanation: '因果图法是一种黑盒测试用例设计方法，它通过分析软件需求中的因果关系来设计测试用例。其中，"因"指的是输入条件，"果"指的是输出结果。因果图法依据输出对输入的依赖关系，将这些关系用图形化方式表示，然后根据图形生成测试用例，以验证输入条件组合与输出结果之间的正确性。程序结构、代码逻辑和内部实现都是白盒测试关注的内容，不属于因果图法的依据。因此正确答案是A。'
    },
    {
        type: 'judge',
        question: '代码复审属于静态测试，不实际运行程序。',
        options: ['对', '错'],
        answer: '对',
        explanation: '静态测试是指不实际运行程序，通过人工或自动化工具检查代码、文档等来发现错误的测试方法。代码复审是由其他开发人员或测试人员对代码进行人工检查，目的是发现逻辑错误、编码规范问题、潜在的性能问题等，整个过程不需要运行程序，因此属于静态测试。因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '白盒测试又称为结构测试，可分为静态测试和动态测试两大类。',
        options: ['对', '错'],
        answer: '对',
        explanation: '白盒测试是基于程序内部结构和逻辑的测试方法，因此也称为结构测试。白盒测试可以分为静态测试和动态测试两大类：静态测试不运行程序，主要包括代码检查、代码走查、静态结构分析等；动态测试需要运行程序，主要包括语句覆盖、判定覆盖、条件覆盖、路径覆盖等。因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '逻辑覆盖包括语句覆盖、条件覆盖、判定覆盖、路径覆盖。',
        options: ['对', '错'],
        answer: '对',
        explanation: '逻辑覆盖是白盒测试中基于程序内部逻辑结构的测试方法，主要包括语句覆盖、条件覆盖、判定覆盖和路径覆盖等类型。语句覆盖要求覆盖所有语句；条件覆盖要求覆盖所有条件的真假值；判定覆盖要求覆盖所有判定的真假分支；路径覆盖要求覆盖所有可能的执行路径。因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '黑盒测试又称为功能测试。',
        options: ['对', '错'],
        answer: '对',
        explanation: '黑盒测试是一种基于功能需求的测试方法，它将程序视为一个“黑盒”，不关注程序的内部实现、结构或代码逻辑，仅根据输入输出和功能规格说明来设计测试用例，验证程序是否能正确实现预期功能。因此，黑盒测试又称为功能测试。该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '测试用例由测试输入数据和预期的输出结果组成。',
        options: ['对', '错'],
        answer: '对',
        explanation: '测试用例是软件测试中用于验证系统功能的基本单元，其核心组成部分包括测试输入数据和预期的输出结果。测试输入数据是执行测试时提供给系统的输入值，预期输出结果是系统在接收这些输入后应该产生的正确结果。通过将实际输出与预期输出进行比较，可以判断测试是否通过。因此该陈述准确描述了测试用例的主要组成部分，是正确的。'
    },
    {
        type: 'judge',
        question: '软件是包括程序、数据、相关文档的完整集合。',
        options: ['对', '错'],
        answer: '对',
        explanation: '软件是计算机系统中与硬件相互依存的另一部分，它不仅包括能够完成特定功能的程序代码，还包括程序运行所需的数据以及相关的文档资料。程序是软件的核心，数据是程序处理的对象，文档则是软件的重要组成部分，用于说明软件的功能、使用方法、设计思路等。因此，软件是包括程序、数据、相关文档的完整集合，该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '单元测试以详细设计说明书为指导。',
        options: ['对', '错'],
        answer: '对',
        explanation: '单元测试是针对软件中的最小可测试单元（如函数、方法、类等）进行的测试。详细设计说明书详细描述了每个模块的内部实现、逻辑结构、功能要求和接口定义，这些信息是设计单元测试用例的重要依据。单元测试需要验证每个单元是否按照详细设计说明书的要求正确实现了预期功能，因此单元测试以详细设计说明书为指导。该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '集成测试以概要设计说明书为指导。',
        options: ['对', '错'],
        answer: '对',
        explanation: '集成测试是将各个独立开发的模块组合起来，测试它们之间的接口和交互关系是否符合设计要求。概要设计说明书详细描述了软件的总体结构、模块划分、模块间的接口定义、数据传递方式等关键信息，这些正是集成测试需要验证的内容。集成测试需要确保模块按照概要设计说明书的要求正确地组合和交互，因此集成测试以概要设计说明书为指导。该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '确认测试以需求分析说明书为指导。',
        options: ['对', '错'],
        answer: '对',
        explanation: '确认测试是软件测试的一个重要阶段，其目的是验证软件是否符合用户的需求和期望，确保软件能够按照预期交付使用。需求分析说明书详细描述了用户的功能需求、性能需求、界面需求、数据需求等核心内容，这些正是确认测试需要验证的对象。确认测试需要对照需求分析说明书，逐一验证软件是否实现了所有要求的功能，是否达到了预期的性能指标，是否满足了用户的使用期望。因此，确认测试必须以需求分析说明书为指导。该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '软件开发基本过程：需求分析 → 概要设计 → 详细设计 → 编码 → 测试 → 维护。',
        options: ['对', '错'],
        answer: '对',
        explanation: '软件开发基本过程遵循瀑布模型的经典流程，包括六个主要阶段：需求分析（确定软件功能和用户需求）、概要设计（设计软件整体架构和模块划分）、详细设计（设计每个模块的内部实现和接口）、编码（根据设计编写代码）、测试（验证软件功能和质量）、维护（修复缺陷和更新功能）。这个过程是一个有序的、逐步推进的过程，每个阶段的输出是下一个阶段的输入，因此该陈述准确描述了软件开发的基本过程，是正确的。'
    },
    {
        type: 'judge',
        question: '集成测试方式包括一次性集成测试和增量式集成测试。',
        options: ['对', '错'],
        answer: '对',
        explanation: '集成测试是将独立开发的模块组合起来测试它们之间的接口和交互。主要有两种测试方式：一次性集成测试（Big Bang Testing）是将所有模块一次性集成后进行测试，适用于小型项目；增量式集成测试是逐步将模块集成并测试，又可分为自顶向下、自底向上和混合增量等方法，适用于大型项目。这两种方式是集成测试的主要类型，因此该陈述是正确的。'
    },
    // 名词解释转换
    {
        type: 'judge',
        question: '软件未达到产品说明书的功能即为软件缺陷。',
        options: ['对', '错'],
        answer: '对',
        explanation: '软件缺陷（Bug）是指软件产品中存在的不符合需求或预期行为的问题。产品说明书详细描述了软件应具备的功能、性能、界面等要求，是软件开发和测试的重要依据。如果软件未能按照产品说明书的要求实现预期功能，说明软件存在缺陷，需要进行修复。因此该陈述准确描述了软件缺陷的一种常见情况，是正确的。'
    },
    {
        type: 'judge',
        question: '黑盒测试也称功能测试或数据驱动测试。',
        options: ['对', '错'],
        answer: '对',
        explanation: '黑盒测试是基于功能需求的测试方法，不关注程序内部实现。它有多个别称：功能测试强调测试的是软件功能；数据驱动测试强调测试是由输入数据驱动的，通过输入不同的数据来验证输出结果。这两个名称都准确描述了黑盒测试的特点，因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '验收测试通常由用户参与。',
        options: ['对', '错'],
        answer: '对',
        explanation: '验收测试是软件测试的最后一个阶段，目的是验证软件是否满足用户的需求和期望，确保软件可以正式交付使用。由于验收测试直接关系到软件是否符合用户的实际业务需求，因此通常需要用户或客户代表直接参与。用户参与验收测试可以从实际使用角度验证软件功能、性能和易用性，确保软件能够满足真实的业务场景和使用需求。因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '驱动模块用来代替主模块，调用被测子模块的模拟模块。',
        options: ['对', '错'],
        answer: '对',
        explanation: '驱动模块（Driver）是集成测试中用于模拟被测模块调用者的组件。当测试某个子模块时，如果该模块需要被上级模块调用，驱动模块就会代替主模块或上级模块，向被测模块传递测试数据，调用被测模块的功能，并接收返回结果进行验证。驱动模块的主要作用是模拟主模块的行为，确保被测子模块能够在预期的调用环境下正常工作。因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '桩模块是集成测试中为被测模块编制的“替身”模块，模拟其下级模块功能。',
        options: ['对', '错'],
        answer: '对',
        explanation: '桩模块（Stub）是集成测试中用于模拟被测模块所调用的下级模块的组件。当测试某个模块时，如果该模块依赖于尚未开发完成或无法直接调用的下级模块，桩模块就会作为这些下级模块的“替身”，提供模拟的返回值或行为，使被测模块能够正常执行测试。桩模块的主要作用是隔离被测模块，确保测试可以聚焦于被测模块本身的功能。因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '白盒测试又称结构化测试或基于代码的测试。',
        options: ['对', '错'],
        answer: '对',
        explanation: '白盒测试是一种基于软件内部代码结构和逻辑的测试方法。由于它关注程序的内部结构，因此被称为结构化测试；又因为测试过程中需要直接接触和分析源代码，所以也被称为基于代码的测试。白盒测试的核心是检查程序的内部逻辑、分支、路径和语句执行情况，确保代码的正确性和完整性。因此该陈述是正确的。'
    },
    // 简答题转换
    {
        type: 'judge',
        question: '软件测试是利用手工或自动化方式，按照测试方案对系统执行测试用例的过程。',
        options: ['对', '错'],
        answer: '对',
        explanation: '软件测试是验证软件是否符合预期功能、性能和质量要求的过程。其核心执行方式包括手工测试（测试人员直接操作软件）和自动化测试（使用工具脚本执行测试）。测试过程必须按照预先制定的测试方案进行，通过执行设计好的测试用例来验证软件的各项特性。这个定义准确概括了软件测试的基本要素：测试手段（手工/自动化）、执行依据（测试方案）和核心活动（执行测试用例）。因此该陈述是正确的。'
    },
    {
        type: 'single',
        question: '以下哪种不是黑盒测试用例设计方法？',
        options: [
            'A. 等价类划分',
            'B. 边界值分析',
            'C. 语句覆盖',
            'D. 因果图法'
        ],
        answer: 'C',
        explanation: '黑盒测试是基于软件外部行为和功能需求的测试方法，不关注内部代码结构。常见的黑盒测试用例设计方法包括：等价类划分（将输入数据分为有效和无效等价类）、边界值分析（测试边界条件）、因果图法（分析输入条件和输出结果的因果关系）。而语句覆盖是白盒测试方法，其目标是确保程序中的每个语句至少执行一次，关注的是代码内部结构。因此，选项C不是黑盒测试用例设计方法，正确答案是C。'
    },
    {
        type: 'single',
        question: '以下哪种不是系统测试方法？',
        options: [
            'A. 恢复测试',
            'B. 安全测试',
            'C. 强度测试',
            'D. 单元测试'
        ],
        answer: 'D',
        explanation: '系统测试是对集成后的完整软件系统进行的测试，主要验证系统是否符合需求规格说明书。常见的系统测试方法包括：恢复测试（验证系统从故障中恢复的能力）、安全测试（验证系统的安全性和防护能力）、强度测试（验证系统在异常或极端条件下的性能）。而单元测试是软件测试的第一阶段，主要测试独立的模块或组件，不属于系统测试范畴。因此，选项D不是系统测试方法，正确答案是D。'
    },
    {
        type: 'judge',
        question: '文档测试主要检查产品说明书属性、完整性、准确性、精确性、一致性等。',
        options: ['对', '错'],
        answer: '对',
        explanation: '文档测试是软件测试的重要组成部分，主要验证软件文档的质量和有效性。产品说明书作为核心文档，其质量直接影响软件的开发、测试和使用。文档测试的主要检查点包括：属性（如文档的版本、作者、日期等）、完整性（是否包含所有必要内容）、准确性（内容是否正确）、精确性（描述是否清晰明确）、一致性（文档内部及与其他文档的一致性）等。因此该陈述准确概括了文档测试的主要内容，是正确的。'
    },
    {
        type: 'single',
        question: '单元测试不包括以下哪方面？',
        options: [
            'A. 模块接口',
            'B. 局部数据结构',
            'C. 边界条件',
            'D. 系统集成'
        ],
        answer: 'D',
        explanation: '单元测试是对软件中最小的可测试单元（通常是函数或模块）进行的测试，主要验证单个模块的功能正确性。其测试内容包括：模块接口（测试输入输出是否符合预期）、局部数据结构（测试内部数据结构的正确性）、边界条件（测试边界值情况下的行为）等。而系统集成是集成测试的范畴，主要测试模块之间的交互和集成，不属于单元测试的内容。因此，选项D不是单元测试包括的方面，正确答案是D。'
    },
    {
        type: 'judge',
        question: '白盒测试包括静态测试方法和动态测试方法。',
        options: ['对', '错'],
        answer: '对',
        explanation: '白盒测试是基于软件内部代码结构和逻辑的测试方法，根据测试是否执行代码，可分为静态测试和动态测试两大类。静态测试方法不执行代码，主要包括代码审查、代码走查、静态结构分析等，用于检查代码的语法、结构和潜在问题；动态测试方法需要执行代码，主要包括语句覆盖、分支覆盖、路径覆盖等，用于验证代码的执行逻辑和结果。因此，白盒测试确实包括静态测试方法和动态测试方法，该陈述是正确的。'
    },
    {
        type: 'single',
        question: '软件测试分为哪几个阶段？',
        options: [
            'A. 单元测试 → 集成测试 → 系统测试 → 验收测试',
            'B. 集成测试 → 单元测试 → 系统测试 → 验收测试',
            'C. 系统测试 → 集成测试 → 单元测试 → 验收测试',
            'D. 验收测试 → 系统测试 → 集成测试 → 单元测试'
        ],
        answer: 'A',
        explanation: '软件测试是一个分阶段进行的过程，各阶段有明确的测试目标和对象。正确的测试阶段顺序为：1. 单元测试：测试软件中最小的可测试单元（如函数、模块），验证单个单元的功能正确性；2. 集成测试：将已通过单元测试的模块组合起来，测试模块之间的接口和交互；3. 系统测试：对集成后的完整软件系统进行测试，验证系统是否符合需求规格说明书；4. 验收测试：由用户或客户参与，验证软件是否满足实际业务需求，是否可以正式交付。这个顺序遵循了从局部到整体、从内部到外部的测试原则，确保每个阶段的问题都能在进入下一阶段前被发现和修复。选项B、C、D的阶段顺序不符合软件测试的基本流程，因此正确答案是A。'
    },
    {
        type: 'judge',
        question: '白盒测试基于程序内部逻辑，黑盒测试基于程序接口功能。',
        options: ['对', '错'],
        answer: '对',
        explanation: '白盒测试和黑盒测试是软件测试的两种主要方法，它们的测试基础不同。白盒测试是基于程序内部的代码结构和逻辑流程，测试人员需要了解代码的实现细节，通过检查内部逻辑、分支、路径等来验证软件的正确性；而黑盒测试是基于程序的外部接口和功能需求，测试人员不需要了解代码实现，只关注输入输出关系和功能表现，通过测试外部行为来验证软件是否符合需求。因此该陈述准确描述了两种测试方法的基础，是正确的。'
    },
    {
        type: 'judge',
        question: '黑盒测试与白盒测试各有优缺点，应结合使用。',
        options: ['对', '错'],
        answer: '对',
        explanation: '黑盒测试和白盒测试是软件测试的两种主要方法，它们各有优缺点。黑盒测试基于外部功能，不依赖代码实现，能从用户角度发现问题，但难以覆盖所有代码路径；白盒测试基于内部逻辑，能覆盖代码路径并精确定位错误，但可能忽略用户体验问题。由于两者优势互补，结合使用可以提高测试的覆盖率和有效性，确保软件在功能和结构上都能达到高质量。因此该陈述是正确的。'
    },
    // 核心概念补充
    {
        type: 'judge',
        question: '软件可靠性是指系统在特定环境下，在给定时间内无故障运行的概率。',
        options: ['对', '错'],
        answer: '对',
        explanation: '软件可靠性是软件质量的重要属性之一，其标准定义为：系统在特定环境下，在给定时间内无故障运行的概率。这个定义包含三个关键要素：特定环境（明确运行条件）、给定时间（明确时间范围）、无故障运行的概率（量化可靠性）。它准确描述了软件在实际使用中能够持续正常工作的能力，是衡量软件质量的重要指标。因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '测试对象不仅包括程序，还包括需求、功能、设计、规格说明、源代码。',
        options: ['对', '错'],
        answer: '对',
        explanation: '软件测试是一个全面的过程，其测试对象不仅包括最终的可执行程序，还覆盖了软件开发的整个生命周期和相关文档。需求文档、功能规格说明、设计文档等在开发早期就需要进行测试，以确保它们的正确性和完整性；源代码在开发过程中需要进行静态和动态测试；最终的程序则需要进行功能、性能等各种测试。全面的测试对象覆盖可以更早地发现问题，降低修复成本，提高软件质量。因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '测试用例是为特定目的设计的一组测试输入、执行条件、预期结果。',
        options: ['对', '错'],
        answer: '对',
        explanation: '测试用例是软件测试的基本单元，用于验证软件的特定功能或行为。它通常包含三个核心要素：测试输入（用于触发被测功能的数据）、执行条件（测试环境和前置条件）、预期结果（期望软件产生的输出或行为）。测试用例的设计需要明确的目的，如验证特定功能、测试边界条件或验证错误处理。这个定义准确概括了测试用例的本质和组成部分，因此该陈述是正确的。'
    },
    // 软件开发与测试模型
    {
        type: 'judge',
        question: 'W模型强调测试与开发并行，测试对象包括需求、设计、代码。',
        options: ['对', '错'],
        answer: '对',
        explanation: 'W模型是一种软件开发与测试模型，它在V模型的基础上扩展而来，强调测试与开发的并行性。W模型将测试活动贯穿于整个软件开发生命周期，每个开发阶段（需求分析、设计、编码）都对应着相应的测试阶段（需求测试、设计测试、代码测试）。这意味着测试对象不仅包括最终的代码，还包括需求文档和设计文档，确保每个阶段的输出都能得到及时验证。因此该陈述准确描述了W模型的核心特点，是正确的。'
    },
    // 测试策略与原则
    {
        type: 'judge',
        question: '静态测试方法包括代码检查、代码走查、静态结构分析、代码质量度量。',
        options: ['对', '错'],
        answer: '对',
        explanation: '静态测试是不执行代码的测试方法，主要用于检查代码和文档的质量。常见的静态测试方法包括：代码检查（由专家评审代码，查找错误）、代码走查（团队集体阅读代码，发现问题）、静态结构分析（使用工具分析代码结构，如复杂度、依赖关系）、代码质量度量（量化评估代码质量，如圈复杂度、代码行数）。这些方法都不需要执行代码，属于静态测试范畴，因此该陈述是正确的。'
    },
    {
        type: 'judge',
        question: '动态测试分为黑盒测试和白盒测试。',
        options: ['对', '错'],
        answer: '对',
        explanation: '动态测试是通过执行程序来验证软件功能和性能的测试方法。根据测试人员是否了解程序内部结构，动态测试可分为两大类：黑盒测试和白盒测试。黑盒测试基于程序的外部接口和功能需求，不关注内部实现；白盒测试基于程序的内部逻辑和代码结构，需要了解代码实现。这两种测试方法是动态测试的主要分类，因此该陈述是正确的。'
    },
    // 测试文档组成
    {
        type: 'judge',
        question: '测试文档包括测试计划、测试用例、测试报告、归纳总结。',
        options: ['对', '错'],
        answer: '对',
        explanation: '测试文档是软件测试过程中产生的重要产物，用于记录和指导测试活动。完整的测试文档通常包括：测试计划（定义测试目标、范围、资源和时间表）、测试用例（描述测试输入、执行条件和预期结果）、测试报告（记录测试结果、发现的问题和测试结论）、归纳总结（总结测试经验、教训和改进建议）。这些文档共同构成了测试过程的完整记录，确保测试活动的可追溯性和可重复性。因此该陈述是正确的。'
    }
];

// 全局变量
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let isAnswered = false;

// DOM元素
const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const restartResultBtn = document.getElementById('restart-result-btn');
const submitBtn = document.getElementById('submit-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const explanationEl = document.getElementById('explanation');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const currentScoreEl = document.getElementById('current-score');
const totalScoreEl = document.getElementById('total-score');
const correctCountEl = document.getElementById('correct-count');
const finalTotalQuestionsEl = document.getElementById('final-total-questions');
const accuracyEl = document.getElementById('accuracy');
const questionListEl = document.getElementById('question-list');

// 初始化
function init() {
    totalQuestionsEl.textContent = questions.length;
    finalTotalQuestionsEl.textContent = questions.length;
    
    // 事件监听
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    restartResultBtn.addEventListener('click', restartQuiz);
    submitBtn.addEventListener('click', submitQuiz);
}

// 生成题目列表
function renderQuestionList() {
    questionListEl.innerHTML = '';
    
    for (let i = 0; i < questions.length; i++) {
        const listItem = document.createElement('div');
        listItem.className = 'question-list-item status-unanswered';
        listItem.textContent = i + 1;
        listItem.dataset.index = i;
        
        // 添加点击事件
        listItem.addEventListener('click', () => jumpToQuestion(i));
        
        questionListEl.appendChild(listItem);
    }
}

// 更新题目状态
function updateQuestionStatus(index, status) {
    const listItem = questionListEl.children[index];
    if (listItem) {
        // 移除所有状态类
        listItem.className = 'question-list-item';
        
        // 添加新状态类
        listItem.classList.add(`status-${status}`);
        
        // 如果是当前题目，添加激活状态
        if (index === currentQuestionIndex) {
            listItem.classList.add('active');
        }
    }
}

// 跳转到指定题目
function jumpToQuestion(index) {
    // 保存当前答题状态
    if (selectedAnswers[currentQuestionIndex] && !isAnswered) {
        checkAnswer();
    }
    
    // 更新当前题目索引
    currentQuestionIndex = index;
    
    // 重置状态
    isAnswered = false;
    nextBtn.textContent = '确认';
    nextBtn.disabled = true;
    
    // 显示新题目
    showQuestion();
    
    // 更新所有题目状态
    updateAllQuestionStatus();
}

// 更新所有题目状态
function updateAllQuestionStatus() {
    for (let i = 0; i < questions.length; i++) {
        const listItem = questionListEl.children[i];
        if (listItem) {
            // 移除激活状态
            listItem.classList.remove('active');
            
            // 如果是当前题目，添加激活状态
            if (i === currentQuestionIndex) {
                listItem.classList.add('active');
            }
        }
    }
}

// 开始刷题
function startQuiz() {
    welcomeScreen.classList.remove('active');
    questionScreen.classList.add('active');
    renderQuestionList();
    showQuestion();
}

// 显示题目
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    // 清空选项
    optionsContainer.innerHTML = '';
    
    // 清空提示和讲解
    feedbackEl.className = 'feedback';
    feedbackEl.textContent = '';
    explanationEl.innerHTML = '';
    explanationEl.style.display = 'none';
    
    // 创建选项
    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.textContent = option;
        
        // 添加点击事件
        optionEl.addEventListener('click', () => selectOption(optionEl, option));
        
        optionsContainer.appendChild(optionEl);
    });
    
    isAnswered = false;
    nextBtn.disabled = true;
    
    // 更新题目列表的激活状态
    updateAllQuestionStatus();
}

// 选择选项
function selectOption(optionEl, optionValue) {
    if (isAnswered) return;
    
    // 移除其他选项的选中状态
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // 添加当前选项的选中状态
    optionEl.classList.add('selected');
    
    // 保存答案
    selectedAnswers[currentQuestionIndex] = optionValue;
    
    // 启用下一题按钮
    nextBtn.disabled = false;
}

// 下一题
function nextQuestion() {
    if (!isAnswered) {
        // 检查答案
        checkAnswer();
        isAnswered = true;
        nextBtn.textContent = '下一题';
        return;
    }
    
    // 重置状态
    isAnswered = false;
    nextBtn.textContent = '确认';
    
    // 进入下一题
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // 完成所有题目，显示结果
        showResult();
    }
}

// 检查答案
function checkAnswer() {
    const question = questions[currentQuestionIndex];
    const selectedOption = selectedAnswers[currentQuestionIndex];
    const correctOption = question.answer;
    
    // 标记正确和错误选项
    let isCorrect = false;
    document.querySelectorAll('.option').forEach(opt => {
        const optText = opt.textContent;
        const optValue = question.type === 'judge' ? optText : optText.charAt(0);
        
        if (optValue === correctOption) {
            opt.classList.add('correct');
        } else if (optText === selectedOption) {
            opt.classList.add('incorrect');
        }
    });
    
    // 计算得分并显示提示
    if (question.type === 'judge') {
        if (selectedOption === correctOption) {
            score += 5;
            isCorrect = true;
        }
    } else {
        if (selectedOption.charAt(0) === correctOption) {
            score += 5;
            isCorrect = true;
        }
    }
    
    // 显示提示
    feedbackEl.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackEl.textContent = isCorrect ? '回答正确！' : '回答错误！';
    
    // 显示讲解
    if (question.explanation) {
        explanationEl.innerHTML = `<h4>题目讲解</h4><p>${question.explanation}</p>`;
        explanationEl.style.display = 'block';
    }
    
    // 更新当前得分
    currentScoreEl.textContent = score;
    
    // 更新题目列表状态
    updateQuestionStatus(currentQuestionIndex, isCorrect ? 'correct' : 'incorrect');
    
    // 如果是最后一题，显示提交按钮
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = '完成';
    }
}

// 提交答案
function submitQuiz() {
    // 检查是否已回答当前题目
    if (!isAnswered && selectedAnswers[currentQuestionIndex]) {
        checkAnswer();
        isAnswered = true;
    }
    showResult();
}

// 显示结果
function showResult() {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // 计算正确率
    const correctCount = selectedAnswers.filter((answer, index) => {
        const question = questions[index];
        if (question.type === 'judge') {
            return answer === question.answer;
        } else {
            return answer.charAt(0) === question.answer;
        }
    }).length;
    
    const accuracy = Math.round((correctCount / questions.length) * 100);
    
    // 更新结果显示
    totalScoreEl.textContent = score;
    correctCountEl.textContent = correctCount;
    accuracyEl.textContent = accuracy;
}

// 重启刷题
function restartQuiz() {
    // 重置全局变量
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    isAnswered = false;
    
    // 重置UI
    welcomeScreen.classList.add('active');
    questionScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    
    // 重置按钮文本
    nextBtn.textContent = '确认';
    nextBtn.disabled = true;
    
    // 重置得分显示
    currentScoreEl.textContent = score;
    
    // 重置题目列表
    if (questionListEl) {
        questionListEl.innerHTML = '';
    }
}

// 初始化应用
init();