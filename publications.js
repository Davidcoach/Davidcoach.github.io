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
        description: "Adapts frozen LLMs to predict missing-region semantic features from partial face images, masks, and user instructions; combines mask-aware feature fusion with pixel-level reward reinforcement for fine-grained, high-fidelity face inpainting.",
        descriptionZh: "将冻结 LLM 适配为面部补全的语义特征预测器，结合局部人脸、掩码和用户指令生成缺失区域特征，并通过掩码感知融合与像素级奖励强化提升细粒度和高保真补全质量。",
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
        badge: "TGT intern · SFT data · fine-tuning · inference optimization · evaluation",
        description: "JD Retail AIGC Team (as TGT internship). Contributed to SFT data construction, model fine-tuning, inference optimization, evaluation, and open-source release preparation for a universal virtual try-on generation system.",
        descriptionZh: "京东零售 AIGC 团队项目（TGT 实习期间）。参与通用虚拟试衣生成系统的 SFT 数据构建、模型微调、推理优化、评测与开源发布准备。",
        selected: true,
        primaryTopic: "Image Generation",
        contribution: "lead",
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
        badge: "First author · task parsing · adaptive cross-frame modulation",
        description: "Introduces task-oriented parsing to convert complex retouching intent into controllable cross-frame modulation signals, targeting temporally consistent high-fidelity face video retouching.",
        descriptionZh: "提出面向任务的解析模块，将复杂视频精修意图转换为可控的跨帧调制信号，用于实现时序一致且高保真的人脸视频精修。",
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
        badge: "First author · instruction decomposition",
        description: "Decomposes complex face-retouching instructions into target-oriented sub-tasks and fuses task-specific features for controllable high-fidelity face retouching.",
        descriptionZh: "将复杂人脸精修指令分解为面向目标的子任务，并融合任务特定特征，实现可控的高保真人脸精修。",
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
        description: "Builds an interactive LLM-guided retouching framework that predicts imperfection prompts from user intent and injects them into transformer feature modulation for localized, faithful face enhancement.",
        descriptionZh: "构建 LLM 引导的交互式高保真人脸精修框架，从用户意图预测瑕疵提示，并注入 Transformer 特征调制，实现局部、忠实的人脸增强。",
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
        description: "Uses an encoder-transformer-decoder design with degradation mask prediction, prompt-guided feature modulation, and mask-aware self-attention to align face inpainting with textual restoration intent.",
        descriptionZh: "采用编码器-Transformer-解码器架构，结合退化掩码预测、提示引导特征调制和掩码感知自注意力，使人脸补全结果更贴合文本修复意图。",
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
        badge: "Video restoration · temporal coherence",
        description: "Introduces discrete spatial-temporal and motion priors for blind face video restoration, improving long-range temporal coherence while preserving identity and fine facial attributes.",
        descriptionZh: "为盲人脸视频修复引入离散时空先验和运动先验，在保持身份与面部细节的同时提升长程时序一致性。",
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
        badge: "Language-guided retouching",
        description: "Proposes LangBRT, combining Alpha-CLIP text guidance, text-prompted blemish detection, and target-specific cross attention to retouch user-specified facial imperfections under limited paired supervision.",
        descriptionZh: "提出 LangBRT，结合 Alpha-CLIP 文本引导、文本提示瑕疵检测和目标特定交叉注意力，在有限成对监督下精修用户指定的人脸瑕疵。",
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
        description: "Designs a multi-scale sub-vector completion transformer with masked gene representation learning and contrastive regularization for robust, gene-selective cell type annotation.",
        descriptionZh: "设计多尺度 scRNA-seq 子向量补全 Transformer，通过掩码基因表示学习和对比正则提升基因选择场景下的细胞类型注释鲁棒性。",
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
        description: "Learns a clean-face prior dictionary and uses prior-based selective self-attention to localize and suppress blemish features while synthesizing natural skin texture with limited paired data.",
        descriptionZh: "学习干净人脸先验字典，并利用基于先验的选择性自注意力定位和抑制瑕疵特征，在少量成对数据下合成自然肤质。",
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
        badge: "Blind face restoration",
        description: "Learns degradation-unaware query representations and uses a prior-based latent dictionary to restore blind face degradations without relying on explicit degradation categories.",
        descriptionZh: "学习退化无关的查询表示，并利用基于先验的潜空间字典进行盲人脸修复，减少对显式退化类别标注的依赖。",
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
        description: "Models imperfection flow across frames and injects refined blemish maps into cross-frame attention, enabling temporally stable video face retouching while preserving non-retouched facial regions.",
        descriptionZh: "建模跨帧瑕疵流，并将精细瑕疵图注入跨帧注意力，在保持非精修区域稳定的同时实现时序一致的视频人脸精修。",
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
        badge: "Face retouching",
        description: "Introduces a blemish-aware progressive retouching pipeline that first removes coarse defects and then refines details, reducing dependence on large paired retouching datasets.",
        descriptionZh: "提出瑕疵感知的渐进式人脸精修流程，先去除粗粒度缺陷再细化局部细节，降低对大规模成对精修数据的依赖。",
        selected: true,
        primaryTopic: "Image Editing",
        contribution: "collaboration",
        topics: ["Image Editing"]
    }
];
