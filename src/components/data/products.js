const products = [
  {
    id: 1,
    name: "HG10C AC1200 Dualband Wi-Fi xPON ONT",
    price: 2700,
    oldPrice: null,
    description: "HG10C is an intelligent routing passive optical network terminal in Tenda FTTH solution, EPON and GPON network environment supported. It provides 2 gigabit LAN ports, a voice port to meet users’requirements for enjoying the Internet, HD IPTV and VoIP multi-service applications.HG10C compliants with 802.11ac standard, supports up to 1176Mbps Wi-Fi high speed linking. With 4 5dBi high gain external antennas and 2.4G & 5G dualband high power Wi-Fi, it can provide superior Wi-Fi coverage and high quanlity wireless connection. It is widely compatible with the global mainstream OLT brand, supports plug-and-play, OMCI,OAM and TR069 remote maintenance features.",
    images: ["/images/Wifi xpon.jpg"],

  },
        {
    id: 2,
    name: "Cola 3600",
    price: 110000,
    oldPrice: null,
    description: "This is a high-performance lithium backup power system built for reliability, long life, and clean energy. Powered by advanced LiFePO₄ battery technology, it delivers stable pure sine-wave output for sensitive electronics while supporting both solar and grid charging. With a massive cycle life, wide voltage tolerance, and strong power output, it’s ideal for homes, offices, ISPs, and hybrid solar setups that need zero downtime.",
    images: ["/images/cola 3600.jpeg"],

  },
          {
    id: 3,
    name: "Single PON Mini GPON OLT",
    price: 25000,
    oldPrice: null,
    description: "Small, all-in-one GPON OLT designed for FTTH/FTTB access. It’s compact AF, cost-efficient, and meant to handle one PON port while still being reliable with basic management features.",
    images: ["/images/Single Pon.jpg"],

  },
    {
    id: 4,
    name: "Wavelink AC1200",
    price: 12000,
    oldPrice: null,
    description: "The Wavlink AC1200 refers to a series of high-performance, dual-band Wi-Fi devices, often outdoor access points or range extenders, that deliver speeds up to 1200 Mbps (867Mbps on 5GHz + 300Mbps on 2.4GHz) for long-range coverage, featuring weatherproof designs (IP65/IP67), multiple operating modes (AP, Repeater, Router, Mesh), and PoE support for easy outdoor deployment in large areas like yards, farms, or businesses",
    images: ["/images/wavelink ac.jpg"],

  },
  {
    id: 5,
    name: "ADSS Fiber Optic Cable",
    price: 20000,
    oldPrice: null,
    description: "ADSS (All-dielectric Self-supporting) optical fibre cable is a type of self-supporting aerial fiber optic cable designed for aerial installation and deployment and is suitable for various outdoor application",
    images: ["/images/ADSS Fibre cable.png"],

  },
    {
    id: 6,
    name: "Solar Ai Camera – Smart Indoor/Outdoor Security With Motion Alerts",
    price: 15000,
    oldPrice: null,
    description: "This solar-powered AI camera offers seamless indoor/outdoor surveillance with live viewing and recorded history. It features smart motion detection alerts, two-way audio for real-time communication, and supports multi-user access for shared monitoring. The camera’s energy-efficient solar design ensures continuous operation, while its advanced AI enhances security by reducing false alarms. Ideal for homes or businesses, it provides reliable, wire-free protection.",
    images: ["/images/Solar ai.jpg"],

  },
    {
    id: 7,
    name: "L009UiGS-RM",
    price: 14999,
    oldPrice: null,
    description: "L009 is more than just a router. This product line is up to 4 times faster than RB2011, it has a modern ARM CPU with container support, an innovative enclosure that allows mounting up to four routers in a single 1U space, more RAM, PoE, and 2.5G SFP support. This version comes with 1U rackmount accessories.",
    images: ["/images/L009UiGS-RM.jpeg"],

  },
   {
    id: 8,
    name: "Vestwood Power Help Mini",
    price: 75000,
    oldPrice: null,
    description: "Compact and powerful UPS solution for reliable backup power during outages",
    images: ["/images/Vestwood Power Help Mini.jpeg"],

  }, 
   {
    id: 9,
    name: "Ruijie RG-EG105G-P-V3 5-Port Gigabit Cloud Managed PoE Router",
    price: 15000,
    oldPrice: null,
    description: "The RG-EG105G-P-V3 is a versatile and powerful 5-port Gigabit cloud-managed PoE router designed for a wide range of applications.",
    images: ["/images/rujie.png"],

  }, 
     {
    id: 10,
    name: "1 Port Gpon Mini OLT",
    price: 27000,
    oldPrice: null,
    description: "G01 is a small-capacity cassette GPON OLT, meeting the requirements of ITU-T G.984/G.988 and relative standards of China Telecom/ Unicom GPON, with super GPON access capacity, carrier-class reliablity and the complete security function. lt can satisfy long-distance optical fiber access requirement on account of its excellent management, maintenance and monitoring capability, abundant service features and fexible network mode. G01 can be used with network management system so as to provide userswith the comprehensive access and perfect solution",
    images: ["/images/1port.png"],

  }, 
       {
    id: 11,
    name: "2 Ports Gpon OLT",
    price: 50000,
    oldPrice: null,
    description: "G02 is a small-capacity cassette GPON OLT, meeting the reguirements of iTU-T G,984/G,988 and relative standards of China Telecom/ Unicom GPON, with super GPON access capacity, carier-class reliablity and the complete security function. lt can satisfy long-distance optical fiber access requirement on account of its excellent management, maintenance and monitoring capability, abundant service features and flexible network mode. G02 can be used with network management system so as to provide users with the comprehensive access and perfect solution. G02 provides 2*downlink GPON port, 4*GE RJ45 and 1*10G SFP+ port. The height is only 1U for easy installation and spacesaving. G02 is suitable for Broadcast three in one, video surveillance network, enterprise LAN, Internet of Things, etc",
    images: ["/images/2port.png"],

  }, 
    {
    id: 12,
    name: "4 Port Integrated Gpon",
    price: 76000,
    oldPrice: null,
    description: "HSGQ-G04R is a 1U box-type GPON OLT. The system has good stability and high reliability. it supports multiple management methods such as CLl. WEB, SNlMP, etc. The product provides 4*GPON ports, 4*GE RJ45 uplink ports. 4*10G SFP+ slots. 1*GE Type-C port, and 1*GE/ETH combo interface. Customers can deploy, configure, manage and monitor the equipment quickly, easily and remotely via the HSGQ Cloud, greatly reducing the labor and time cost in the network construction process. it is suitable for sparsely populated, remote, cost-sensitive areas, smart industrial parks, commercial buildings, FTT, etc. Each GPON ports upports a maxmium split ratio of 1:128, supports up to 512 GPON users, and supports diferent types of ONUs under diferent networks. The 1U height is easy to install and maintain. It is an excellent choice for customers to quickly deploy FTTH networks",
    images: ["/images/4port.png"],

  },
       {
    id: 13,
    name: "hEX S (2025)",
    price: 10000,
    oldPrice: null,
    description: "A compact, affordable wired router featuring a 2.5G SFP port, 5x Gigabit Ethernet, PoE out, USB, and a fast dual-core CPU – ideal for homes, offices, or underfunded labs that need reliable performance",
    images: ["/images/hex s.jpg"],

  }, 
     {
    id: 14,
    name: "Huawei ONU GPON/EPON Echolife Router HG8546M",
    price: 1400 ,
    oldPrice: null,
    description: "Huawei ONU GPON/EPON Echolife Router HG8546M is a routing ONT for Huawei’s all-optical access solution and it implements ultra-wideband access for users through GPON technology.",
    images: ["/images/Huawei onu.jpeg"],

  }, 
     {
    id: 15,
    name: "Mikrotik hAP Lite TC RB941-2nD-TC",
    price: 4000,
    oldPrice: null,
    description: "The Mikrotik hAP Lite TC RB941-2nD-TC is an ideal little device for your apartment, house or office. The hAP Lite Router supports button triggered WPS, for the convenience of not typing a complicated password when somebody wants to have wireless internet access, and can also be told to change to cAP mode and join a CAPsMAN centrally managed network by the push of a button.",
    images: ["/images/mikrotik.jpeg"],

  }, 
     {
    id: 16,
    name: "Mikrotik RB4011iGS+RM Router",
    price: 25000,
    oldPrice: null,
    description: "The Mikrotik RB4011iGS+RM Router is part of the RB4011 series – amazingly powerful routers with ten Gigabit ports, SFP+ 10Gbps interface and IPsec hardware acceleration for a great price!",
    images: ["/images/mikrotik rb40.jpeg"],

  }, 
       {
    id: 17,
    name: "RB951Ui-2HnD",
    price: 8000,
    oldPrice: null,
    description: "2.4GHz AP with five Ethernet ports and PoE output on port 5. It has a 600MHz CPU, 128MB RAM and a USB port.",
    images: ["/images/RB951Ui-2HnD.jpeg"],

  }, 
       {
    id: 18,
    name: "Remote Rebooter",
    price: 5000,
    oldPrice: null,
    description: "Smart IoT system that monitors your network in real time, auto-reboots on high ping, supports scheduled reboots/power-off, can recover even when the main Wi-Fi drops, and lets you request features or choose firmware updates — all from one dashboard.",
    images: ["/images/remote rebooter.jpeg"],

  }, 
       {
    id: 19,
    name: "RG-RAP6262(G)",
    price: 21000,
    oldPrice: null,
    description: "RUIJIE RG-RAP6262(G) WI-FI6 AX1800 Outdoor Omni-Directional is a high-performance outdoor Wi-Fi 6 AP with dual-band speeds of up to 1775Mbps. Designed for wide coverage and harsh environments, it features IP68 protection, built-in omni antennas, and seamless cloud or app-based management.",
    images: ["/images/RG-RAP6262(G).jpg"],

  }, 
       {
    id: 20,
    name: "Tenda F3 N300 300Mbps Wireless Router",
    price: 1400,
    oldPrice: null,
    description: "Tenda that provide wireless speeds of up to 300Mbps, suitable for home and small office use.",
    images: ["/images/TENDA-WIRELESS.jpg"],

  }, 
       {
    id: 21,
    name: "Wavelink AX3000",
    price: 19500,
    oldPrice: null,
    description: "Next-generation WiFi 6 router delivering ultra-fast wireless speeds and coverage",
    images: ["/images/wavelink.jpeg"],

  }, 
       {
    id: 22,
    name: "HITHIUM HERO EE1 PowerStation 1000WH",
    price: 29999,
    oldPrice: null,
    description: "Your go-to portable energy solution—whether you're off the grid or experiencing blackouts. Delivers long-lasting energy with a lifespan of over 10 years.",
    images: ["public/images/Hithium.jpeg"],

  },      
  
  {
    id: 23,
    name: "5KVA Solar System",
    price: 250000,
    oldPrice: 260000,
    description: "5KVA Solar System suitable for homes and small businesses. Reliable and durable.",
    images: ["/images/5KVA Solar System.jpeg", "/images/5KVA Solar System 2.jpeg"],

  },
  {
    id: 24,
    name: "10KW Lithium Battery, 600W Solar System",
    price: 60000,
    oldPrice: 62500,
    description: "600W inverter with 220AH battery, efficient energy storage and backup.",
    images: ["/images/600W Solar System 2.jpeg", "/images/600W Solar System.jpeg"],

  },
  {
    id: 25,
    name: "6KVA Solar System with 15KW Lithium Battery",
    price: 300000,
    oldPrice: 305000,
    description: "6KVA Hybrid Inverter, 15KW Lithium Battery, 12x580W Solar Panels, ideal for large homes or farms.",
    images: ["/images/6KVA Solar System.jpeg", "/images/6KVA Solar System 2.jpeg"],

  },
  {
    id: 26,
    name: "5KW Solar System",
    price: 270000,
    oldPrice: null,
    description: "5KW Solar System suitable for normal home usage. HO Green, save more.",
    images: ["/images/5KW Solar System.jpeg", "/images/5KW Solar System 2.jpeg"],

  },
  {
    id: 27,
    name: "580W Solar Panels",
    price: 11999,
    oldPrice: null,
    description: "High quality, high efficiency, long-lasting solar panels.",
    images: ["/images/580W Solar Panels.jpeg", "/images/580W Solar Panels 2.jpeg"],

  },
    {
    id: 28,
    name: "3KVA Solar System with 15KW Lithium Battery",
    price: 180000,
    oldPrice: 190000,
    description: "3KVA Hybrid Inverter, 15KW Lithium Battery, 12x580W Solar Panels, ideal for large homes or farms.",
    images: ["/images/3Kva solar system.jpeg", "/images/3kva solar system 2.jpeg"],

  },
      {
    id: 29,
    name: "24KW Solar System",
    price: 10,
    oldPrice: null,
    description: "24KW Solar System suitable for normal home usage. HO Green, save more.",
    images: ["/images/24KW Solar System.jpeg", "/images/24KW Solar System 2.jpeg"],

  }
];

export default products;
