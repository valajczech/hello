const SEQUENCE_TEXT = [
  "Uncompressing Linux... done, booting the kernel.\n",
  "[    0.000000] Booting Linux on physical CPU 0x0\n",
  "[    0.000000] Initializing cgroup subsys cpu\n",
  "[    0.000000] Initializing cgroup subsys cpuacct\n",
  "[    0.000000] Linux version 3.18.10+ (dc4@dc4-XPS13-9333) (gcc version 4.8.3 20140303 (prerelease) (crosstool-NG linaro-1.13.1+bzr2650 - Linaro GCC 2014.03)) #775 PREEMPT Thu Apr 2 18:10:12 BST 2015\n",
  "[    0.000000] CPU: ARMv6-compatible processor [410fb767] revision 7 (ARMv7), cr=00c5387d\n",
  "[    0.000000] CPU: PIPT / VIPT nonaliasing data cache, VIPT nonaliasing instruction cache\n",
  "[    0.000000] Machine model: Raspberry Pi Model B\n",
  "[    0.000000] cma: Reserved 8 MiB at 0x0b800000\n",
  "[    0.000000] Memory policy: Data cache writeback\n",
  "[    0.000000] Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 48768\n",
  "[    0.000000] Kernel command line: dma.dmachans=0x7f35 bcm2708_fb.fbwidth=656 bcm2708_fb.fbheight=416 bcm2708.boardrev=0x2 bcm2708.serial=0xb51cb961 smsc95x.macaddr=B8:27:EB:1C:B9:61 bcm2708_fb.fbswap=1 sdhci-bcm2708.emmc_clock_freq=250000000 vc_mem.mem_base=0xec00000 vc_mem.mem_size=0x10000000  dwc_otg.lpm_enabe=0 console=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait\n",
  "[    0.000000] PID hash table entries: 1024 (order: 0, 4096 bytes)\n",
  "[    0.000000] Dentry cache hash table entries: 32768 (order: 5, 131072 bytes)\n",
  "[    0.000000] Inode-cache hash table entries: 16384 (order: 4, 65536 bytes)\n",
  "[    0.000000] Memory: 177372K/196608K available (5885K kernel code, 348K rwdata, 1868K rodata, 340K init, 733K bss, 19236K reserved)\n",
  "[    0.000000] Virtual kernel memory layout:\n",
  "[    0.000000]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)\n",
  "[    0.000000]     fixmap  : 0xffc00000 - 0xffe00000   (2048 kB)\n",
  "[    0.000000]     vmalloc : 0xcc800000 - 0xff000000   ( 808 MB)\n",
  "[    0.000000]     lowmem  : 0xc0000000 - 0xcc000000   ( 192 MB)\n",
  "[    0.000000]     modules : 0xbf000000 - 0xc0000000   (  16 MB)\n",
  "[    0.000000]       .text : 0xc0008000 - 0xc079a78c   (7754 kB)\n",
  "[    0.000000]       .init : 0xc079b000 - 0xc07f0000   ( 340 kB)\n",
  "[    0.000000]       .data : 0xc07f0000 - 0xc084711c   ( 349 kB)\n",
  "[    0.000000]        .bss : 0xc084711c - 0xc08fe848   ( 734 kB)\n",
  "[    0.000000] SLUB: HWalign=32, Order=0-3, MinObjects=0, CPUs=1, Nodes=1\n",
  "[    0.000000] Preemptible hierarchical RCU implementation.\n",
  "[    0.000000] NR_IRQS:522\n",
  "[    0.000027] sched_clock: 32 bits at 1000kHz, resolution 1000ns, wraps every 2147483648000ns\n",
  "[    0.000077] Switching to timer-based delay loop, resolution 1000ns\n",
  "[    0.000359] Console: colour dummy device 80x30\n",
  "[    0.001422] console [tty1] enabled\n",
  "[    0.001469] Calibrating delay loop (skipped), value calculated using timer frequency.. 2.00 BogoMIPS (lpj=10000)\n",
  "[    0.001545] pid_max: default: 32768 minimum: 301\n",
  "[    0.001931] Mount-cache hash table entries: 1024 (order: 0, 4096 bytes)\n",
  "[    0.001997] Mountpoint-cache hash table entries: 1024 (order: 0, 4096 bytes)\n",
  "[    0.003000] Initializing cgroup subsys memory\n",
  "[    0.003093] Initializing cgroup subsys devices\n",
  "[    0.003151] Initializing cgroup subsys freezer\n",
  "[    0.003204] Initializing cgroup subsys net_cls\n",
  "[    0.003254] Initializing cgroup subsys blkio\n",
  "[    0.003377] CPU: Testing write buffer coherency: ok\n",
  "[    0.003498] ftrace: allocating 19229 entries in 57 pages\n",
  "[    0.107319] Setting up static identity map for 0x553698 - 0x5536d0\n",
  "[    0.110174] devtmpfs: initialized\n",
  "[    0.127357] VFP support v0.3: implementor 41 architecture 1 part 20 variant b rev 5\n",
  "[    0.130404] pinctrl core: initialized pinctrl subsystem\n",
  "[    0.133123] NET: Registered protocol family 16\n",
  "[    0.138594] DMA: preallocated 4096 KiB pool for atomic coherent allocations\n",
  "[    0.139999] bcm2708.uart_clock = 3000000\n",
  "[    0.142890] No ATAGs?\n",
  "[    0.142954] hw-breakpoint: found 6 breakpoint and 1 watchpoint registers.\n",
  "[    0.143016] hw-breakpoint: maximum watchpoint size is 4 bytes.\n",
  "[    0.143083] mailbox: Broadcom VideoCore Mailbox driver\n",
  "[    0.143245] bcm2708_vcio: mailbox at f200b880\n",
  "[    0.143703] bcm_power: Broadcom power driver\n",
  "[    0.143761] bcm_power_open() -> 0\n",
  "[    0.143791] bcm_power_request(0, 8)\n",
  "[    0.644504] bcm_mailbox_read -> 00000080, 0\n",
  "[    0.644551] bcm_power_request -> 0\n",
  "[    0.644761] Serial: AMBA PL011 UART driver\n",
  "[    0.645001] dev:f1: ttyAMA0 at MMIO 0x20201000 (irq = 83, base_baud = 0) is a PL011 rev3\n",
  "[    1.026171] console [ttyAMA0] enabled\n",
  "[    1.089428] SCSI subsystem initialized\n",
  "[    1.093582] usbcore: registered new interface driver usbfs\n",
  "[    1.099370] usbcore: registered new interface driver hub\n",
  "[    1.104873] usbcore: registered new device driver usb\n",
  "[    1.112045] Switched to clocksource stc\n",
  "[    1.144472] FS-Cache: Loaded\n",
  "[    1.147792] CacheFiles: Loaded\n",
  "[    1.167352] NET: Registered protocol family 2\n",
  "[    1.173329] TCP established hash table entries: 2048 (order: 1, 8192 bytes)\n",
  "[    1.180389] TCP bind hash table entries: 2048 (order: 1, 8192 bytes)\n",
  "[    1.187044] TCP: Hash tables configured (established 2048 bind 2048)\n",
  "[    1.193567] TCP: reno registered\n",
  "[    1.196842] UDP hash table entries: 256 (order: 0, 4096 bytes)\n",
  "[    1.202767] UDP-Lite hash table entries: 256 (order: 0, 4096 bytes)\n",
  "[    1.209433] NET: Registered protocol family 1\n",
  "[    1.214527] RPC: Registered named UNIX socket transport module.\n",
  "[    1.220497] RPC: Registered udp transport module.\n",
  "[    1.225329] RPC: Registered tcp transport module.\n",
  "[    1.230060] RPC: Registered tcp NFSv4.1 backchannel transport module.\n",
  "[    1.237793] bcm2708_dma: DMA manager at f2007000\n",
  "[    1.242844] vc-mem: phys_addr:0x00000000 mem_base=0x0ec00000 mem_size:0x10000000(256 MiB)\n",
  "[    1.252677] futex hash table entries: 256 (order: -1, 3072 bytes)\n",
  "[    1.258959] audit: initializing netlink subsys (disabled)\n",
  "[    1.264643] audit: type=2000 audit(1.030:1): initialized\n",
  "[    1.285511] VFS: Disk quotas dquot_6.5.2\n",
  "[    1.289878] Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)\n",
  "[    1.299414] FS-Cache: Netfs 'nfs' registered for caching\n",
  "[    1.306594] NFS: Registering the id_resolver key type\n",
  "[    1.311766] Key type id_resolver registered\n",
  "[    1.316111] Key type id_legacy registered\n",
  "[    1.321553] msgmni has been set to 362\n",
  "[    1.327984] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 252)\n",
  "[    1.336007] io scheduler noop registered\n",
  "[    1.339992] io scheduler deadline registered (default)\n",
  "[    1.345764] io scheduler cfq registered\n",
  "[    1.352388] BCM2708FB: allocated DMA memory 4bc00000\n",
  "[    1.357459] BCM2708FB: allocated DMA channel 0 @ f2007000\n",
  "[    1.368051] Console: switching to colour frame buffer device 82x26\n",
  "[    1.379949] bcm2708-dmaengine bcm2708-dmaengine: Load BCM2835 DMA engine driver\n",
  "[    1.389642] uart-pl011 dev:f1: no DMA platform data\n",
  "[    1.397092] vc-cma: Videocore CMA driver\n",
  "[    1.402834] vc-cma: vc_cma_base      = 0x00000000\n",
  "[    1.409145] vc-cma: vc_cma_size      = 0x00000000 (0 MiB)\n",
  "[    1.416205] vc-cma: vc_cma_initial   = 0x00000000 (0 MiB)\n",
  "[    1.436395] brd: module loaded\n",
  "[    1.448019] loop: module loaded\n",
  "[    1.453297] vchiq: vchiq_init_state: slot_zero = 0xcb800000, is_master = 0\n",
  "[    1.462740] Loading iSCSI transport class v2.0-870.\n",
  "[    1.470905] usbcore: registered new interface driver smsc95xx\n",
  "[    1.478580] dwc_otg: version 3.00a 10-AUG-2012 (platform bus)\n",
  "[    1.686340] Core Release: 2.80a\n",
  "[    1.691076] Setting default values for core params\n",
  "[    1.697475] Finished setting default values for core params\n",
  "[    1.904796] Using Buffer DMA mode\n",
  "[    1.909665] Periodic Transfer Interrupt Enhancement - disabled\n",
  "[    1.917086] Multiprocessor Interrupt Enhancement - disabled\n",
  "[    1.924277] OTG VER PARAM: 0, OTG VER FLAG: 0\n",
  "[    1.930218] Dedicated Tx FIFOs mode\n",
  "[    1.935666] WARN::dwc_otg_hcd_init:1047: FIQ DMA bounce buffers: virt = 0xcbc14000 dma = 0x4bc14000 len=9024\n",
  "[    1.948724] FIQ FSM acceleration enabled for :\n",
  "[    1.948724] Non-periodic Split Transactions\n",
  "[    1.948724] Periodic Split Transactions\n",
  "[    1.948724] High-Speed Isochronous Endpoints\n",
  "[    1.971866] WARN::hcd_init_fiq:412: FIQ on core 0 at 0xc03fad8c\n",
  "[    1.979466] WARN::hcd_init_fiq:413: FIQ ASM at 0xc03fb064 length 36\n",
  "[    1.987400] WARN::hcd_init_fiq:438: MPHI regs_base at 0xcc806000\n",
  "[    1.995104] dwc_otg bcm2708_usb: DWC OTG Controller\n",
  "[    2.001651] dwc_otg bcm2708_usb: new USB bus registered, assigned bus number 1\n",
  "[    2.010630] dwc_otg bcm2708_usb: irq 32, io mem 0x00000000\n",
  "[    2.017815] Init: Port Power? op_state=1\n",
  "[    2.023378] Init: Power Port (0)\n",
  "[    2.028537] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002\n",
  "[    2.037033] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1\n",
  "[    2.045927] usb usb1: Product: DWC OTG Controller\n",
  "[    2.052273] usb usb1: Manufacturer: Linux 3.18.10+ dwc_otg_hcd\n",
  "[    2.059707] usb usb1: SerialNumber: bcm2708_usb\n",
  "[    2.066889] hub 1-0:1.0: USB hub found\n",
  "[    2.072503] hub 1-0:1.0: 1 port detected\n",
  "[    2.079264] usbcore: registered new interface driver usb-storage\n",
  "[    2.087479] mousedev: PS/2 mouse device common for all mice\n",
  "[    2.095606] bcm2835-cpufreq: min=700000 max=700000\n",
  "[    2.102496] sdhci: Secure Digital Host Controller Interface driver\n",
  "[    2.110280] sdhci: Copyright(c) Pierre Ossman\n",
  "[    2.116621] DMA channels allocated for the MMC driver\n",
  "[    2.152126] Load BCM2835 MMC driver\n",
  "[    2.159221] sdhci-pltfm: SDHCI platform and OF driver helper\n",
  "[    2.175080] ledtrig-cpu: registered to indicate activity on CPUs\n",
  "[    2.183143] hidraw: raw HID events driver (C) Jiri Kosina\n",
  "[    2.194831] usbcore: registered new interface driver usbhid\n",
  "[    2.203214] usbhid: USB HID core driver\n",
  "[    2.211223] TCP: cubic registered\n",
  "[    2.217453] Initializing XFRM netlink socket\n",
  "[    2.225619] NET: Registered protocol family 17\n",
  "[    2.231956] Key type dns_resolver registered\n",
  "[    2.239713] registered taskstats version 1\n",
  "[    2.245791] vc-sm: Videocore shared memory driver\n",
  "[    2.252251] [vc_sm_connected_init]: start\n",
  "[    2.259102] [vc_sm_connected_init]: end - returning 0\n",
  "[    2.267761] Waiting for root device /dev/mmcblk0p2...\n",
  "[    2.274904] Indeed it is in host mode hprt0 = 00021501\n",
  "[    2.286814] mmc0: host does not support reading read-only switch, assuming write-enable\n",
  "[    2.314220] mmc0: new high speed SDHC card at address b368\n",
  "[    2.332171] mmcblk0: mmc0:b368 SMI   15.0 GiB\n",
  "[    2.343287]  mmcblk0: p1 p2\n",
  "[    2.395467] EXT4-fs (mmcblk0p2): INFO: recovery required on readonly filesystem\n",
  "[    2.404706] EXT4-fs (mmcblk0p2): write access will be enabled during recovery\n",
  "[    2.460279] EXT4-fs (mmcblk0p2): recovery complete\n",
  "[    2.472867] EXT4-fs (mmcblk0p2): mounted filesystem with ordered data mode. Opts: (null)\n",
  "[    2.484425] usb 1-1: new high-speed USB device number 2 using dwc_otg\n",
  "[    2.492779] VFS: Mounted root (ext4 filesystem) readonly on device 179:2.\n",
  "[    2.501971] Indeed it is in host mode hprt0 = 00001101\n",
  "[    2.509409] devtmpfs: mounted\n",
  "[    2.523251] Freeing unused kernel memory: 340K (c079b000 - c07f0000)\n",
  "[    2.722646] usb 1-1: New USB device found, idVendor=0424, idProduct=9512\n",
  "[    2.732631] usb 1-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0\n",
  "[    2.746803] hub 1-1:1.0: USB hub found\n",
  "[    2.753774] hub 1-1:1.0: 3 ports detected\n",
  "[    3.032458] usb 1-1.1: new high-speed USB device number 3 using dwc_otg\n",
  "[    3.142744] usb 1-1.1: New USB device found, idVendor=0424, idProduct=ec00\n",
  "[    3.151599] usb 1-1.1: New USB device strings: Mfr=0, Product=0, SerialNumber=0\n",
  "[    3.174835] smsc95xx v1.0.4\n",
  "[    3.260006] smsc95xx 1-1.1:1.0 eth0: register 'smsc95xx' at usb-bcm2708_usb-1.1, smsc95xx USB 2.0 Ethernet, b8:27:eb:1c:b9:61\n",
  "[    4.220552] udevd[159]: starting version 175\n",
  "[   10.386572] EXT4-fs (mmcblk0p2): re-mounted. Opts: (null)\n",
  "[   10.867335] EXT4-fs (mmcblk0p2): re-mounted. Opts: (null)\n",
  "[   11.810617] random: nonblocking pool is initialized\n",
  "[   11.849114] Driver for 1-wire Dallas network protocol.\n",
  "[   12.167722] i2c /dev entries driver",
  "Done.",
];

export default SEQUENCE_TEXT;
