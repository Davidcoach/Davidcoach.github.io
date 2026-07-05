const publications = [
    {
        image: "images/flows/llm-inpainter.png",
        title: "LLM-Inpainter: LLM-Adapted Feature Prediction with Fine-Grained Mask-Aware Reinforcement for High-Fidelity Face Image Inpainting",
        authors: "Chun Ding*, <strong>Wen Xue*</strong>, Xinyu Fan, Yuxuan Lin, Yong Xu, Si Wu, Dapeng Wu, et al.",
        venue: "IEEE Transactions on Multimedia",
        shortVenue: "IEEE TMM 2026",
        highlighted: true,
        year: 2026,
        links: [
            { label: "DOI", url: "https://doi.org/10.1109/TMM.2026.3703338" }
        ],
        badge: "Co-first author · CCF-A · SCI Q1",
        description: "Presents an LLM-adapted face inpainting framework that predicts missing-region semantic features from partial images, masks, and instructions, then refines them through mask-aware fusion and pixel-level reward reinforcement.",
        descriptionZh: "提出面向人脸补全的 LLM 适配框架，从局部图像、掩码和指令预测缺失区域语义特征，并通过掩码感知融合与像素级奖励强化提升补全保真度。",
        selected: true,
        primaryTopic: "Image Generation",
        contribution: "lead",
        topics: ["Image Generation", "Image Editing", "Multimodal Generative Models"]
    },
    {
        image: "images/flows/oxygen-tryon.png",
        title: "Oxygen TryOn: Universal Virtual Try-On Model and Open-Source Release",
        authors: "JD Retail AIGC Team <span class=\"pub-role\">(as TGT internship)</span>",
        venue: "JD Retail Research Project",
        shortVenue: "JD Retail 2026",
        highlighted: true,
        year: 2026,
        links: [
            { label: "Project", url: "https://jd-opensource.github.io/Oxygen-TryOn" },
            { label: "Code", url: "https://github.com/jd-opensource/Oxygen-TryOn" },
            { label: "Model", url: "https://huggingface.co/jd-opensource/Oxygen-TryOn" }
        ],
        badge: "Core contributor",
        description: "",
        descriptionZh: "",
        selected: true,
        primaryTopic: "Image Generation",
        contribution: "collaboration",
        topics: ["Image Generation", "Multimodal Generative Models"]
    },
    {
        image: "images/flows/topmod.png",
        title: "ToPMod: Task-oriented Parsing for Adaptive Cross-Frame Modulation in High-Fidelity Face Video Retouching",
        authors: "<strong>Wen Xue</strong>, Juncheng Zhang, et al.",
        venue: "IEEE Transactions on Multimedia",
        shortVenue: "IEEE TMM",
        highlighted: false,
        year: 2026,
        links: [],
        badge: "First author · CCF-A · SCI Q1",
        description: "Develops a task-oriented parsing and adaptive cross-frame modulation pipeline for high-fidelity face video retouching, improving temporal consistency while preserving identity and local details.",
        descriptionZh: "构建面向任务解析与自适应跨帧调制的视频人脸精修框架，在保持身份和局部细节的同时提升高保真精修的时序一致性。",
        selected: true,
        primaryTopic: "Video Editing",
        contribution: "lead",
        topics: ["Video Editing", "Multimodal Generative Models"]
    },
    {
        image: "images/flows/dfretouch.png",
        title: "DFRetouch: Decomposed Face Retouching with Target-oriented Feature Fusion",
        authors: "<strong>Wen Xue</strong>, Juncheng Zhang, et al.",
        venue: "Information Fusion",
        shortVenue: "Information Fusion Under Review",
        highlighted: false,
        year: 2026,
        links: [],
        badge: "First author · SCI Q1",
        description: "Formulates face retouching as decomposed target-oriented editing, using task-specific feature fusion to handle complex instructions with controllable and high-fidelity visual results.",
        descriptionZh: "将人脸精修建模为面向目标的分解式编辑任务，通过任务特定特征融合处理复杂指令，实现可控且高保真的视觉效果。",
        selected: true,
        primaryTopic: "Image Editing",
        contribution: "lead",
        topics: ["Image Editing", "Multimodal Generative Models"]
    },
    {
        image: "images/flows/retouchgpt.png",
        title: "RetouchGPT: LLM-based Interactive High-Fidelity Face Retouching via Imperfection Prompting",
        authors: "<strong>Wen Xue</strong>, Chun Ding, Ruotao Xu, Si Wu, Yong Xu, H. S. Wong",
        venue: "Proceedings of the AAAI Conference on Artificial Intelligence",
        shortVenue: "AAAI 2025",
        highlighted: true,
        year: 2025,
        links: [
            { label: "Code", url: "https://github.com/Davidcoach/RetouchGPT" },
            { label: "Paper", url: "https://ojs.aaai.org/index.php/AAAI/article/view/32980" }
        ],
        badge: "First author · CCF-A",
        description: "Introduces an interactive LLM-guided retouching framework that translates user intent into imperfection prompts and uses transformer feature modulation for localized, faithful face enhancement.",
        descriptionZh: "提出 LLM 引导的交互式高保真人脸精修框架，将用户意图转换为瑕疵提示，并通过 Transformer 特征调制实现局部、忠实的人脸增强。",
        selected: true,
        primaryTopic: "Image Editing",
        contribution: "lead",
        topics: ["Image Editing", "Multimodal Generative Models"]
    },
    {
        image: "images/flows/inpaintformer.png",
        title: "InpaintFormer: Prompt-guided High-Quality Face Inpainting with Mask-Aware Self-Attention",
        authors: "Zhouhao Ouyang*, <strong>Wen Xue*</strong>, Tianyi Chen, Yuhang Huang, Si Wu, Yong Xu, et al.",
        venue: "IEEE International Conference on Multimedia and Expo",
        shortVenue: "ICME 2025 <strong>Oral</strong>",
        highlighted: true,
        year: 2025,
        links: [
            { label: "DOI", url: "https://doi.org/10.1109/ICME59968.2025.11209192" }
        ],
        badge: "Co-first author · <strong>Oral Paper</strong> · CCF-B",
        description: "Proposes a prompt-guided face inpainting architecture with degradation mask prediction, feature modulation, and mask-aware self-attention to better align restoration results with textual intent.",
        descriptionZh: "提出提示引导的人脸补全架构，结合退化掩码预测、特征调制和掩码感知自注意力，使修复结果更贴合文本意图。",
        selected: true,
        primaryTopic: "Image Generation",
        contribution: "lead",
        topics: ["Image Generation", "Image Editing", "Multimodal Generative Models"]
    },
    {
        image: "images/flows/dp-tempcoh.png",
        title: "Discrete Prior-based Temporal-coherent Content Prediction for Blind Face Video Restoration",
        authors: "Lianxin Xie, B. Zheng, <strong>Wen Xue</strong>, Y. Zhang, Le Jiang, Ruotao Xu, Si Wu, H. S. Wong",
        venue: "Proceedings of the AAAI Conference on Artificial Intelligence",
        shortVenue: "AAAI 2025",
        highlighted: true,
        year: 2025,
        links: [
            { label: "Code", url: "https://github.com/lxxie298/DP-TempCoh" },
            { label: "Paper", url: "https://ojs.aaai.org/index.php/AAAI/article/view/32944" }
        ],
        badge: "Co-author · CCF-A",
        description: "Builds a blind face video restoration framework with discrete spatial-temporal and motion priors, strengthening long-range temporal coherence while preserving identity and facial attributes.",
        descriptionZh: "构建融合离散时空先验与运动先验的盲人脸视频修复框架，在保持身份和面部属性的同时增强长程时序一致性。",
        selected: false,
        primaryTopic: "Video Editing",
        contribution: "collaboration",
        topics: ["Image Editing", "Video Editing"]
    },
    {
        image: "images/flows/hunting-blemishes.png",
        title: "Hunting Blemishes: Language-guided High-fidelity Face Retouching Transformer with Limited Paired Data",
        authors: "Le Jiang, Yuhang Huang, Lianxin Xie, <strong>Wen Xue</strong>, Chengjun Liu, Si Wu, H. S. Wong",
        venue: "Proceedings of the ACM International Conference on Multimedia",
        shortVenue: "ACM MM 2024",
        highlighted: true,
        year: 2024,
        links: [
            { label: "Paper", url: "https://dl.acm.org/doi/pdf/10.1145/3664647.3681576" }
        ],
        badge: "Co-author · CCF-A",
        description: "Introduces a language-guided face retouching transformer that combines text-driven blemish detection and target-specific cross attention for user-specified imperfection editing with limited paired data.",
        descriptionZh: "提出语言引导的人脸精修 Transformer，结合文本驱动瑕疵检测与目标特定交叉注意力，在有限成对数据下编辑用户指定的面部瑕疵。",
        selected: true,
        primaryTopic: "Image Editing",
        contribution: "collaboration",
        topics: ["Image Editing", "Multimodal Generative Models"]
    },
    {
        image: "images/flows/sctrans.png",
        title: "SCTrans: Multi-scale scRNA-seq Sub-vector Completion Transformer for Gene-selective Cell Type Annotation",
        authors: "Lu Lin*, <strong>Wen Xue*</strong>, Xindian Wei, W. Shen, Chengjun Liu, Si Wu, H. S. Wong",
        venue: "International Joint Conference on Artificial Intelligence",
        shortVenue: "IJCAI 2024 <strong>Oral</strong>",
        highlighted: true,
        year: 2024,
        links: [
            { label: "Paper", url: "https://www.ijcai.org/proceedings/2024/658" }
        ],
        badge: "Co-first author · <strong>Oral Paper</strong> · CCF-B",
        description: "Designs a multi-scale sub-vector completion transformer for scRNA-seq data, combining masked gene representation learning and contrastive regularization for robust gene-selective cell type annotation.",
        descriptionZh: "设计面向 scRNA-seq 数据的多尺度子向量补全 Transformer，结合掩码基因表示学习与对比正则，提升基因选择场景下的细胞类型注释鲁棒性。",
        selected: true,
        primaryTopic: "Multimodal Generative Models",
        contribution: "lead",
        topics: ["Multimodal Generative Models"]
    },
    {
        image: "images/flows/retouchformer.png",
        title: "RetouchFormer: Semi-supervised High-Quality Face Retouching Transformer with Prior-Based Selective Self-Attention",
        authors: "<strong>Wen Xue</strong>, Lianxin Xie, Le Jiang, Tianyi Chen, Si Wu, Chengjun Liu, H. S. Wong",
        venue: "Proceedings of the AAAI Conference on Artificial Intelligence",
        shortVenue: "AAAI 2024",
        highlighted: true,
        year: 2024,
        links: [
            { label: "Code", url: "https://github.com/Davidcoach/RetouchFormer_AAAI_2024" },
            { label: "Paper", url: "https://ojs.aaai.org/index.php/AAAI/article/view/28404" }
        ],
        badge: "First author · CCF-A",
        description: "Learns a clean-face prior dictionary and prior-based selective self-attention to localize blemish regions, suppress degradation features, and synthesize natural skin texture under limited paired supervision.",
        descriptionZh: "学习干净人脸先验字典和基于先验的选择性自注意力，用于定位瑕疵区域、抑制退化特征，并在有限成对监督下生成自然肤质。",
        selected: true,
        primaryTopic: "Image Editing",
        contribution: "lead",
        topics: ["Image Editing"]
    },
    {
        image: "images/flows/restoration.png",
        title: "Learning Degradation-unaware Representation with Prior-based Latent Transformations for Blind Face Restoration",
        authors: "Lianxin Xie, C. Zheng, <strong>Wen Xue</strong>, Le Jiang, Chengjun Liu, Si Wu, H. S. Wong",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        shortVenue: "CVPR 2024",
        highlighted: true,
        year: 2024,
        links: [
            { label: "Paper", url: "http://openaccess.thecvf.com/content/CVPR2024/papers/Xie_Learning_Degradation-unaware_Representation_with_Prior-based_Latent_Transformations_for_Blind_Face_CVPR_2024_paper.pdf" }
        ],
        badge: "Co-author · CCF-A",
        description: "Learns degradation-unaware query representations and prior-based latent transformations for blind face restoration, reducing reliance on explicit degradation labels or predefined degradation categories.",
        descriptionZh: "学习退化无关查询表示与基于先验的潜空间变换，用于盲人脸修复，降低对显式退化标签或预设退化类别的依赖。",
        selected: true,
        primaryTopic: "Image Editing",
        contribution: "collaboration",
        topics: ["Image Editing"]
    },
    {
        image: "images/flows/vretoucher.png",
        title: "VRetouchEr: Learning Cross-frame Feature Interdependence with Imperfection Flow for Face Retouching in Videos",
        authors: "<strong>Wen Xue</strong>, Le Jiang, Lianxin Xie, Si Wu, Yong Xu, H. S. Wong",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        shortVenue: "CVPR 2024",
        highlighted: true,
        year: 2024,
        links: [
            { label: "Code", url: "https://github.com/Davidcoach/VRetouchER_CVPR_2024" },
            { label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2024/html/Xue_VRetouchEr_Learning_Cross-frame_Feature_Interdependence_with_Imperfection_Flow_for_Face_CVPR_2024_paper.html" }
        ],
        badge: "First author · CCF-A",
        description: "Models cross-frame imperfection flow and injects refined blemish maps into attention modules, enabling temporally stable face video retouching while preserving non-edited regions.",
        descriptionZh: "建模跨帧瑕疵流，并将精细瑕疵图注入注意力模块，在保持非编辑区域稳定的同时实现时序一致的视频人脸精修。",
        selected: true,
        primaryTopic: "Video Editing",
        contribution: "lead",
        topics: ["Video Editing", "Image Editing"]
    },
    {
        image: "images/flows/blemish-aware.png",
        title: "Blemish-aware and Progressive Face Retouching with Limited Paired Data",
        authors: "Lianxin Xie, <strong>Wen Xue</strong>, Zhen Xu, Si Wu, Z. Yu, H. S. Wong",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        shortVenue: "CVPR 2023",
        highlighted: true,
        year: 2023,
        links: [
            { label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2023/papers/Xie_Blemish-Aware_and_Progressive_Face_Retouching_With_Limited_Paired_Data_CVPR_2023_paper.pdf" }
        ],
        badge: "Co-author · CCF-A",
        description: "Introduces a blemish-aware progressive retouching pipeline that removes coarse defects before refining local details, reducing dependence on large-scale paired retouching data.",
        descriptionZh: "提出瑕疵感知的渐进式人脸精修流程，先去除粗粒度缺陷再细化局部细节，降低对大规模成对精修数据的依赖。",
        selected: true,
        primaryTopic: "Image Editing",
        contribution: "collaboration",
        topics: ["Image Editing"]
    }
];
