const keywordMap = {
  "1": {
    "question_keywords": [
      "cannot access the Internet",
      "branch network"
    ],
    "correct_option_keywords": [
      "no eigrp stub",
      "R1"
    ]
  },
  "2": {
    "question_keywords": [
      "forward any traffic",
      "sourced from the 192.168.130.0/24 network",
      "to R2"
    ],
    "correct_option_keywords": [
      "route-map",
      "set ip next-hop",
      "172.20.40.1"
    ]
  },
  "3": {
    "question_keywords": [
      "route-map OUT permit10",
      "set as-path prepend 65000",
      "eBGP neighbor R1",
      "neighbor 1.1.1.1 route-map OUT out"
    ],
    "correct_option_keywords": [
      "AS hops away",
      "prepend"
    ]
  },
  "4": {
    "question_keywords": [
      "changes the forwarding decision",
      "without first changing the routing table",
      "influencing the IP data plane"
    ],
    "correct_option_keywords": [
      "policy-based routing",
      "forwarding decision"
    ]
  },
  "5": {
    "question_keywords": [
      "loop in the network",
      "prevents this loop"
    ],
    "correct_option_keywords": [
      "spanning-tree",
      "portfast",
      "bpduguard"
    ]
  },
  "6": {
    "question_keywords": [
      "different next hop is chosen"
    ],
    "correct_option_keywords": [
      "AD for the static route is higher than the AD of OSPF"
    ]
  },
  "7": {
    "question_keywords": [
      "summary route",
      "missing"
    ],
    "correct_option_keywords": [
      "no route",
      "subnet inside",
      "not generated"
    ]
  },
  "8": {
    "question_keywords": [
      "block the route",
      "route is still present"
    ],
    "correct_option_keywords": [
      "permit to deny"
    ]
  },
  "9": {
    "question_keywords": [
      "prerequisite",
      "configuring BFD"
    ],
    "correct_option_keywords": [
      "Cisco Express Forwarding",
      "enabled",
      "BFD endpoints"
    ]
  },
  "10": {
    "question_keywords": [
      "OSPF adjacency states",
      "descriptions"
    ],
    "correct_option_keywords": [
      "neighbor router",
      "hello message"
    ]
  },
  "11": {
    "question_keywords": [
      "route reflector",
      "route reflector clients",
      "does not advertise"
    ],
    "correct_option_keywords": [
      "does not have a route to the next hop",
      "does not advertise"
    ]
  },
  "12": {
    "question_keywords": [
      "redistribute OSPF to BGP",
      "not all routes redistributed"
    ],
    "correct_option_keywords": [
      "internal OSPF routes",
      "redistributed into BGP"
    ]
  },
  "13": {
    "question_keywords": [
      "idle condition"
    ],
    "correct_option_keywords": [
      "prefixes exceed the maximum limit"
    ]
  },
  "14": {
    "question_keywords": [
      "eliminates LFAs",
      "protected paths",
      "common fiber"
    ],
    "correct_option_keywords": [
      "shared risk link group-disjoint",
      "protected paths"
    ]
  },
  "15": {
    "question_keywords": [
      "clock on the device does not correspond",
      "time stamp of the log entries",
      "consistency between the two times"
    ],
    "correct_option_keywords": [
      "service timestamps log datetime localtime"
    ]
  },
  "16": {
    "question_keywords": [
      "BGP neighborships",
      "access list named \"BGP\""
    ],
    "correct_option_keywords": [
      "cannot form BGP neighborships",
      "matched by the access list named \"BGP\""
    ]
  },
  "17": {
    "question_keywords": [
      "IP routing table",
      "VRF-Lite"
    ],
    "correct_option_keywords": [
      "show ip route",
      "vrf"
    ]
  },
  "18": {
    "question_keywords": [
      "subnet",
      "redistributed",
      "EIGRP",
      "OSPF"
    ],
    "correct_option_keywords": [
      "10.2.2.0/24"
    ]
  },
  "19": {
    "question_keywords": [
      "adds an IPv4 interface",
      "OSPFv3 process",
      "OSPFv3 address family configuration"
    ],
    "correct_option_keywords": [
      "Router(config-if)",
      "ospfv3 1 ipv4 area 0"
    ]
  },
  "20": {
    "question_keywords": [
      "redistributes",
      "tag"
    ],
    "correct_option_keywords": [
      "RIP learned routes",
      "tag value of one"
    ]
  },
  "21": {
    "question_keywords": [
      "IP SLA",
      "default route",
      "loses reachability"
    ],
    "correct_option_keywords": [
      "debug ip sla error"
    ]
  },
  "22": {
    "question_keywords": [
      "VRF",
      "labeled",
      "Inet",
      "FastEthernet0/0"
    ],
    "correct_option_keywords": [
      "ip vrf forwarding Inet",
      "interface FastEthernet0/0",
      "R1(config-vrf)#"
    ]
  },
  "23": {
    "question_keywords": [
      "PC2, PC3, and PC4 cannot reach PC1",
      "redistribution"
    ],
    "correct_option_keywords": [
      "administrative distance",
      "RIP process",
      "R2"
    ]
  },
  "24": {
    "question_keywords": [
      "router",
      "BGP",
      "multiple neighbors",
      "traffic",
      "AS 690"
    ],
    "correct_option_keywords": [
      "weight value",
      "higher than 200"
    ]
  },
  "25": {
    "question_keywords": [
      "load-balance",
      "MPLS Layer 3 VPN",
      "configuration"
    ],
    "correct_option_keywords": [
      "maximum-paths",
      "ibgp",
      "2"
    ]
  },
  "26": {
    "question_keywords": [
      "DMVPN tunnel went down",
      "spoke-to-spoke",
      "hub were not establishing"
    ],
    "correct_option_keywords": [
      "mode tunnel",
      "mode transport"
    ]
  },
  "27": {
    "question_keywords": [
      "route distinguishers",
      "MPLS network",
      "VPNv4 address"
    ],
    "correct_option_keywords": [
      "unique VPNv4 address",
      "across the MPLS network"
    ]
  },
  "28": {
    "question_keywords": [
      "MPLS LDP router ID",
      "loopback is configured",
      "highest IP address"
    ],
    "correct_option_keywords": [
      "loopback",
      "highest IP address",
      "selected"
    ]
  },
  "29": {
    "question_keywords": [
      "spoke A router",
      "dynamic DMVPN tunnel",
      "spoke B router"
    ],
    "correct_option_keywords": [
      "tunnel 10.0.0.12",
      "172.17.0.3"
    ]
  },
  "30": {
    "question_keywords": [
      "MPLS label",
      "contents"
    ],
    "correct_option_keywords": [
      "20-bit label",
      "3-bit traffic class",
      "8-bit TTL"
    ]
  },
  "31": {
    "question_keywords": [
      "imp-null tag"
    ],
    "correct_option_keywords": [
      "Pop the label"
    ]
  },
  "32": {
    "question_keywords": [
      "MPLS VPN concepts",
      "descriptions"
    ],
    "correct_option_keywords": [
      "route distinguisher",
      "route target",
      "multiprotocol BGP"
    ]
  },
  "34": {
    "question_keywords": [
      "MPLS terms",
      "definitions"
    ],
    "correct_option_keywords": [
      "device that forwards traffic based on labels",
      "path that the labeled packet takes",
      "device that is unaware of MPLS labeling",
      "device that removes and adds the MPLS labeling"
    ]
  },
  "35": {
    "question_keywords": [
      "spoke-to-spoke",
      "DMVPN",
      "missing"
    ],
    "correct_option_keywords": [
      "ip nhrp redirect",
      "ip nhrp shortcut"
    ]
  },
  "36": {
    "question_keywords": [
      "NBMA address",
      "other end of a tunnel",
      "mGRE"
    ],
    "correct_option_keywords": [
      "NHRP",
      "NBMA address"
    ]
  },
  "37": {
    "question_keywords": [
      "denies Telnet traffic",
      "198A:0:200C::1/64"
    ],
    "correct_option_keywords": [
      "permit tcp any host 198A:0:200C::1 eq telnet",
      "deny tcp any host 198A:0:200C::1 eq telnet"
    ]
  },
  "38": {
    "question_keywords": [
      "not reachable",
      "secure web browser"
    ],
    "correct_option_keywords": [
      "permit tcp port 443"
    ]
  },
  "39": {
    "question_keywords": [
      "packet types",
      "descriptions"
    ],
    "correct_option_keywords": [
      "always forwarded",
      "creation of the network",
      "operate the network",
      "higher priority"
    ]
  },
  "40": {
    "question_keywords": [
      "Drag and drop",
      "addresses",
      "IPv6 filter purposes"
    ],
    "correct_option_keywords": [
      "NTP",
      "syslog",
      "HTTP",
      "HTTPS"
    ]
  },
  "41": {
    "question_keywords": [
      "local authentication",
      "console line",
      "device is trying to authenticate using TACACS+"
    ],
    "correct_option_keywords": [
      "login authentication Console",
      "line configuration"
    ]
  },
  "42": {
    "question_keywords": [
      "cannot connect",
      "troubleshooting",
      "enable SSH"
    ],
    "correct_option_keywords": [
      "generate rsa"
    ]
  },
  "43": {
    "question_keywords": [
      "IPv6 ND inspection",
      "stateless autoconfiguration addresses",
      "Layer 2 neighbor tables"
    ],
    "correct_option_keywords": [
      "stateless autoconfiguration addresses",
      "Layer 2 neighbor tables"
    ]
  },
  "44": {
    "question_keywords": [
      "connectivity issues",
      "SNMP connectivity is intermittent",
      "SSH is either slow or disconnects frequently",
      "Data traffic is unaffected"
    ],
    "correct_option_keywords": [
      "show policy-map control-plane"
    ]
  },
  "45": {
    "question_keywords": [],
    "correct_option_keywords": []
  },
  "46": {
    "question_keywords": [
      "control plane policy",
      "limits BGP traffic",
      "destined to the CPU",
      "1 Mbps",
      "ignores BGP traffic"
    ],
    "correct_option_keywords": [
      "police cir 1000k",
      "exceed-action drop"
    ]
  },
  "47": {
    "question_keywords": [
      "IPv6 RA Guard",
      "true",
      "protection",
      "tunneled"
    ],
    "correct_option_keywords": [
      "does not offer protection",
      "tunneled"
    ]
  },
  "48": {
    "question_keywords": [
      "copy an IOS file",
      "one router to another router",
      "using TFTP"
    ],
    "correct_option_keywords": [
      "copy tftp: flash:",
      "tftp-server flash:"
    ]
  },
  "49": {
    "question_keywords": [
      "IP addresses cannot be acquired",
      "300 total nonconcurrent users",
      "none of them are active for more than two hours per day"
    ],
    "correct_option_keywords": [
      "smaller value"
    ]
  },
  "50": {
    "question_keywords": [
      "cannot see",
      "tracking output",
      "missing"
    ],
    "correct_option_keywords": [
      "now"
    ]
  },
  "51": {
    "question_keywords": [
      "timestamps",
      "system logs",
      "did not match the clock"
    ],
    "correct_option_keywords": [
      "timestamp service command",
      "localtime is not defined"
    ]
  },
  "52": {
    "question_keywords": [
      "DHCP messages",
      "correct uses"
    ],
    "correct_option_keywords": [
      "configuration parameters",
      "network address is already in use",
      "committed network address",
      "externally configured"
    ]
  },
  "53": {
    "question_keywords": [
      "flapping (up/down) interface issue",
      "synchronized to an NTP server",
      "Log output currently does not show the time of the flap",
      "show the time of the flap according to the clock on the device"
    ],
    "correct_option_keywords": [
      "service timestamps log datetime localtime",
      "show-timezone"
    ]
  },
  "54": {
    "question_keywords": [
      "provisioning a device",
      "Cisco DNA Center",
      "error message",
      "Not compatible with template"
    ],
    "correct_option_keywords": [
      "tag",
      "filter the templates",
      "match the device tag"
    ]
  },
  "55": {
    "question_keywords": [
      "Cisco DNA Center cannot upload its software image directly from the device",
      "Why is the image not uploading"
    ],
    "correct_option_keywords": [
      "software image",
      "install mode"
    ]
  },
  "56": {
    "question_keywords": [
      "wrong default gateway",
      "Cisco DNA Center enterprise interface",
      "correct the configuration"
    ],
    "correct_option_keywords": [
      "sudo maglev-config update"
    ]
  },
  "57": {
    "question_keywords": [
      "debug messages",
      "remote users",
      "log in"
    ],
    "correct_option_keywords": [
      "aaa new-model"
    ]
  },
  "58": {
    "question_keywords": [
      "cannot read or write",
      "operations subnet"
    ],
    "correct_option_keywords": [
      "allow operations subnet",
      "rw permission"
    ]
  },
  "59": {
    "question_keywords": [
      "failing to receive",
      "NetFlow data"
    ],
    "correct_option_keywords": [
      "flow exporter is configured",
      "not used"
    ]
  },
  "60": {
    "question_keywords": [
      "multipoint tunnel",
      "single GRE tunnel interface on the hub",
      "multiple connections from multiple spokedevices"
    ],
    "correct_option_keywords": [
      "DMVPN",
      "multipoint tunnel",
      "single GRE tunnel interface"
    ]
  },
  "61": {
    "question_keywords": [
      "next hop",
      "172.17.1.0/24"
    ],
    "correct_option_keywords": [
      "10.0.0.1"
    ]
  },
  "62": {
    "question_keywords": [
      "label edge router",
      "label operations"
    ],
    "correct_option_keywords": [
      "PUSH",
      "POP"
    ]
  },
  "63": {
    "question_keywords": [
      "link-state type"
    ],
    "correct_option_keywords": [
      "area"
    ]
  },
  "64": {
    "question_keywords": [
      "gaps",
      "troubleshooting",
      "NMS tools"
    ],
    "correct_option_keywords": [
      "Separate",
      "multiple class maps",
      "specific protocols"
    ]
  },
  "65": {
    "question_keywords": [
      "authoritative flag",
      "NHRP information",
      "obtained directly from the next-hop server"
    ],
    "correct_option_keywords": [
      "obtained directly",
      "next-hop server"
    ]
  },
  "66": {
    "question_keywords": [
      "DMVPN tunnels",
      "security feature"
    ],
    "correct_option_keywords": [
      "IPsec"
    ]
  },
  "67": {
    "question_keywords": [
      "IPsec",
      "secure connectivity",
      "branch office",
      "headquarters office"
    ],
    "correct_option_keywords": [
      "DMVPN",
      "Virtual Tunnel Interface (VTI)",
      "IPsec"
    ]
  },
  "68": {
    "question_keywords": [
      "SNMPV3",
      "encryption",
      "authentication protocols"
    ],
    "correct_option_keywords": [
      "show snmp user",
      "authentication",
      "encryption"
    ]
  },
  "69": {
    "question_keywords": [
      "TCP starvation"
    ],
    "correct_option_keywords": [
      "TFTP",
      "SNMP"
    ]
  },
  "70": {
    "question_keywords": [
      "verify IP SLA operations",
      "excessive traffic"
    ],
    "correct_option_keywords": [
      "show track",
      "IP SLA"
    ]
  },
  "71": {
    "question_keywords": [
      "VRF-Lite",
      "support"
    ],
    "correct_option_keywords": [
      "EIGRP"
    ]
  },
  "72": {
    "question_keywords": [
      "redistributing EIGRP into OSPF",
      "true"
    ],
    "correct_option_keywords": [
      "type 5 LSAs",
      "OSPF external type 2"
    ]
  },
  "73": {
    "question_keywords": [
      "moved from the local DHCP server to the remote corporate DHCP server",
      "none of the users were able to use the network",
      "prevent this setup from working properly"
    ],
    "correct_option_keywords": [
      "DHCP server IP address configuration is missing locally",
      "route to the new DHCP server is missing"
    ]
  },
  "74": {
    "question_keywords": [
      "IP SLA",
      "interface",
      "lots of traffic",
      "options"
    ],
    "correct_option_keywords": [
      "show track",
      "IP SLA"
    ]
  },
  "75": {
    "question_keywords": [
      "advantage of using BFD",
      "detects",
      "failure detection"
    ],
    "correct_option_keywords": [
      "sub-second failure detection",
      "layer 1",
      "layer 2"
    ]
  },
  "76": {
    "question_keywords": [
      "extend the IP address",
      "identify to which VPN it belongs"
    ],
    "correct_option_keywords": [
      "RD",
      "VPNv4 address family"
    ]
  },
  "77": {
    "question_keywords": [
      "cannot SSH",
      "permitted",
      "resolves the issue without opening full access"
    ],
    "correct_option_keywords": [
      "Move the SSH entry to the beginning"
    ]
  },
  "78": {
    "question_keywords": [
      "intermittent connectivity",
      "SNMP trap packets"
    ],
    "correct_option_keywords": [
      "Increase the CIR",
      "mgmt class map"
    ]
  },
  "79": {
    "question_keywords": [
      "EIGRP",
      "destination addresses",
      "feasible"
    ],
    "correct_option_keywords": [
      "IP address 224.0.0.10",
      "MAC address 01:00:5E:00:00:0A"
    ]
  },
  "80": {
    "question_keywords": [
      "packets forwarded",
      "MPLS domain"
    ],
    "correct_option_keywords": [
      "label",
      "specified in a label"
    ]
  },
  "81": {
    "question_keywords": [
      "vtys",
      "failed login attempt",
      "remote login information"
    ],
    "correct_option_keywords": [
      "username",
      "password"
    ]
  },
  "82": {
    "question_keywords": [
      "ping packet",
      "different path",
      "return"
    ],
    "correct_option_keywords": [
      "Asymmetric routing"
    ]
  },
  "83": {
    "question_keywords": [
      "default NHRP cache timer"
    ],
    "correct_option_keywords": [
      "2 hours"
    ]
  },
  "84": {
    "question_keywords": [
      "OSPF dead interval",
      "hello interval",
      "defaults"
    ],
    "correct_option_keywords": [
      "Four"
    ]
  },
  "85": {
    "question_keywords": [
      "customer routes",
      "isolated",
      "PE routers",
      "MPLS Layer 3 VPN"
    ],
    "correct_option_keywords": [
      "VRF"
    ]
  },
  "86": {
    "question_keywords": [
      "LSA types 1, 2, 7, and 3",
      "default route only",
      "NSSA totally stub"
    ],
    "correct_option_keywords": [
      "NSSA",
      "totally stubby",
      "LSA type 7"
    ]
  },
  "87": {
    "question_keywords": [
      "IP SLA",
      "performance metrics",
      "enterprise-class networks"
    ],
    "correct_option_keywords": [
      "Packet loss",
      "Delay",
      "Connectivity"
    ]
  },
  "88": {
    "question_keywords": [
      "BGP state drops",
      "missing BGP hello keepalives"
    ],
    "correct_option_keywords": [
      "MTU mismatch"
    ]
  },
  "89": {
    "question_keywords": [
      "access list entry",
      "checks for an ACK",
      "packet header"
    ],
    "correct_option_keywords": [
      "tcp-ack",
      "established"
    ]
  },
  "90": {
    "question_keywords": [
      "fully meshed network",
      "WAN access",
      "applications that require"
    ],
    "correct_option_keywords": [
      "centralized DMVPN solution",
      "fully meshed network",
      "MPLS VPN connections with dynamic routing"
    ]
  },
  "91": {
    "question_keywords": [
      "configure IP SLA",
      "troubleshoot a network connectivity issue",
      "perform first"
    ],
    "correct_option_keywords": [
      "Enable",
      "ICMP echo operation"
    ]
  },
  "92": {
    "question_keywords": [
      "EIGRP for IPv6",
      "features"
    ],
    "correct_option_keywords": [
      "Partial updates",
      "Scaling"
    ]
  },
  "93": {
    "question_keywords": [
      "simulate voice traffic"
    ],
    "correct_option_keywords": [
      "UDP-jitter"
    ]
  },
  "94": {
    "question_keywords": [
      "EIGRP peers",
      "mismatched K values"
    ],
    "correct_option_keywords": [
      "fail to form an adjacency"
    ]
  },
  "96": {
    "question_keywords": [
      "DMVPN network",
      "map physical IP addresses",
      "logical IP addresses"
    ],
    "correct_option_keywords": [
      "NHRP",
      "map physical IP addresses",
      "logical IP addresses"
    ]
  },
  "97": {
    "question_keywords": [
      "forwarded to an interface",
      "any destination address",
      "not in the routing table"
    ],
    "correct_option_keywords": [
      "default next-hop"
    ]
  },
  "98": {
    "question_keywords": [
      "MPLS",
      "traffic engineering"
    ],
    "correct_option_keywords": [
      "Resource Reservation Protocol",
      "RSVP"
    ]
  },
  "99": {
    "question_keywords": [
      "MPLS LDP autoconfiguration",
      "IGPs",
      "supported"
    ],
    "correct_option_keywords": [
      "OSPF",
      "ISIS"
    ]
  },
  "100": {
    "question_keywords": [
      "PE router",
      "IPv4 prefix",
      "MPLS VPN"
    ],
    "correct_option_keywords": [
      "VPN-IPv4 prefix",
      "route distinguisher"
    ]
  },
  "101": {
    "question_keywords": [
      "dynamic routing",
      "OSPF adjacency",
      "EXSTART/EXCHANGE"
    ],
    "correct_option_keywords": [
      "match the MTUs"
    ]
  },
  "102": {
    "question_keywords": [
      "AAA server",
      "cannot communicate",
      "authentication",
      "accounting"
    ],
    "correct_option_keywords": [
      "authentication port"
    ]
  },
  "103": {
    "question_keywords": [
      "reachability",
      "default routes",
      "preferred"
    ],
    "correct_option_keywords": [
      "IP SLA",
      "frequency",
      "scheduling"
    ]
  },
  "104": {
    "question_keywords": [
      "VRF lite",
      "customer A",
      "misconfigured VRF",
      "resolve connectivity"
    ],
    "correct_option_keywords": [
      "rd 1:2",
      "route-target both 1:1"
    ]
  },
  "105": {
    "question_keywords": [
      "advertises only the local networks",
      "to all SP neighbors",
      "transit AS router"
    ],
    "correct_option_keywords": [
      "filter-list 1 out",
      "permit ^$",
      "local networks"
    ]
  },
  "106": {
    "question_keywords": [
      "destined for 192.168.32.100",
      "forwarded through 10.1.1.1",
      "forwarded through 10.1.1.2"
    ],
    "correct_option_keywords": [
      "equal or longer prefix than /24"
    ]
  },
  "107": {
    "question_keywords": [
      "SNMPv2c",
      "SNMPv3",
      "attributes",
      "matches best for SNMPv2c"
    ],
    "correct_option_keywords": [
      "Community String",
      "no encryption",
      "read-only"
    ]
  },
  "110": {
    "question_keywords": [
      "Label Edge Router",
      "best matched"
    ],
    "correct_option_keywords": [
      "assigns labels",
      "unlabeled packets",
      "handles traffic between multiple VPNs"
    ]
  },
  "111": {
    "question_keywords": [
      "cannot access devices through SSH",
      "normal office hours"
    ],
    "correct_option_keywords": [
      "Modify the access list",
      "correct IP address"
    ]
  },
  "112": {
    "question_keywords": [
      "redistribute routes",
      "LA router receives all the NewYork routes",
      "NewYork router does not receive any LA routes"
    ],
    "correct_option_keywords": [
      "metric",
      "subnets"
    ]
  },
  "113": {
    "question_keywords": [
      "BGP is flapping",
      "CoPP policy is applied",
      "two solutions to fix the issue"
    ],
    "correct_option_keywords": [
      "Configure BGP in the COPP-CRITICAL-7600 ACL",
      "Configure a higher value for CIR under the default class to allow more packets during peak traffic"
    ]
  },
  "114": {
    "question_keywords": [
      "access the server"
    ],
    "correct_option_keywords": [
      "permit the route",
      "floating static route"
    ]
  },
  "115": {
    "question_keywords": [
      "sub-optimal path",
      "reachability"
    ],
    "correct_option_keywords": [
      "administrative distance",
      "external EIGRP"
    ]
  },
  "116": {
    "question_keywords": [
      "VRF lite",
      "none of the LSA 3,4 5, and 7 are installed"
    ],
    "correct_option_keywords": [
      "capability vrf-lite",
      "Site A routers"
    ]
  },
  "117": {
    "question_keywords": [
      "discovering",
      "uncontactable",
      "add it"
    ],
    "correct_option_keywords": [
      "Copy",
      ".pern file",
      "upload"
    ]
  },
  "118": {
    "question_keywords": [
      "deleted the telnet-related configuration",
      "permits a Telnet connection",
      "inside network (Eth0/0) to the outside",
      "Friday-Sunday night hours only"
    ],
    "correct_option_keywords": [
      "permit tcp",
      "established",
      "time-range"
    ]
  },
  "119": {
    "question_keywords": [
      "WAN IP address",
      "another spoke router"
    ],
    "correct_option_keywords": [
      "172.18.46.2"
    ]
  },
  "120": {
    "question_keywords": [
      "neighbor is not coming up"
    ],
    "correct_option_keywords": [
      "AS 100",
      "AS 200",
      "network 10.1.1.0/24"
    ]
  },
  "121": {
    "question_keywords": [
      "slow responses",
      "traceroute",
      "forwarded via R2 to R3",
      "link between R1 and R3 are up"
    ],
    "correct_option_keywords": [
      "Remove the static route on R1"
    ]
  },
  "122": {
    "question_keywords": [
      "backup default route",
      "primary is down",
      "not working as desired"
    ],
    "correct_option_keywords": [
      "track 1"
    ]
  },
  "123": {
    "question_keywords": [
      "IPv6 Source Guard",
      "functions"
    ],
    "correct_option_keywords": [
      "populated binding table",
      "allowing legitimate traffic",
      "denies traffic from unknown sources"
    ]
  },
  "124": {
    "question_keywords": [
      "show ip vrf",
      "VRF"
    ],
    "correct_option_keywords": [
      "default RD values"
    ]
  },
  "125": {
    "question_keywords": [
      "route map configuration",
      "two effects"
    ],
    "correct_option_keywords": [
      "sequence 10",
      "normal route lookup"
    ]
  },
  "126": {
    "question_keywords": [
      "Layer 2 loop",
      "DNAC",
      "SFD9300-1 switch"
    ],
    "correct_option_keywords": [
      "spanning-tree loopguard default"
    ]
  },
  "127": {
    "question_keywords": [],
    "correct_option_keywords": []
  },
  "128": {
    "question_keywords": [
      "HUB router",
      "MVPN",
      "mGRE mode"
    ],
    "correct_option_keywords": [
      "tunnel mode mGRE",
      "ip address 10.0.0.1 255.255.255.0",
      "ip unnumbered 172.17.0.1"
    ]
  },
  "129": {
    "question_keywords": [
      "IPv6 inspection",
      "stateless autoconfiguration addresses",
      "Layer 2 neighbor tables"
    ],
    "correct_option_keywords": [
      "stateless autoconfiguration addresses",
      "Layer 2 neighbor tables"
    ]
  },
  "130": {
    "question_keywords": [
      "drops packets",
      "source address",
      "not found",
      "snooping table"
    ],
    "correct_option_keywords": [
      "IPv6 Source Guard",
      "source address",
      "snooping table"
    ]
  },
  "131": {
    "question_keywords": [
      "network diagram",
      "summarize only the networks seen"
    ],
    "correct_option_keywords": [
      "192.168.8.0/21"
    ]
  },
  "132": {
    "question_keywords": [
      "error message",
      "access another router",
      "in-band",
      "console of R1",
      "ssh connections not permitted"
    ],
    "correct_option_keywords": [
      "transport input ssh",
      "transport output ssh"
    ]
  },
  "133": {
    "question_keywords": [
      "ISP1 reports they are receiving ISP2 routes from AS65401"
    ],
    "correct_option_keywords": [
      "redistribute static"
    ]
  },
  "134": {
    "question_keywords": [
      "restrict access",
      "SSH"
    ],
    "correct_option_keywords": [
      "transport input ssh",
      "transport output ssh",
      "access list 100"
    ]
  },
  "135": {
    "question_keywords": [
      "spoke-to-spoke communication",
      "loopback as tunnel source"
    ],
    "correct_option_keywords": [
      "0.0.0.0",
      "spokes"
    ]
  },
  "136": {
    "question_keywords": [
      "passwords are visible",
      "show archive log config all"
    ],
    "correct_option_keywords": [
      "hidekeys"
    ]
  },
  "138": {
    "question_keywords": [
      "cannot SSH",
      "resolve this issue"
    ],
    "correct_option_keywords": [
      "transport input ssh"
    ]
  },
  "140": {
    "question_keywords": [
      "ping 192.168.3.1",
      "LA router"
    ],
    "correct_option_keywords": [
      "redistribute static"
    ]
  },
  "141": {
    "question_keywords": [
      "route distinguisher",
      "VRF-Lite",
      "IP address"
    ],
    "correct_option_keywords": [
      "extends",
      "IP address",
      "identify"
    ]
  },
  "142": {
    "question_keywords": [
      "not reachable consistently",
      "new IP address",
      "every second month"
    ],
    "correct_option_keywords": [
      "static IP address",
      "exclude a server IP address"
    ]
  },
  "143": {
    "question_keywords": [
      "OSPF process 5",
      "redistributed into EIGRP"
    ],
    "correct_option_keywords": [
      "E1 and E2 subnets",
      "access list TO-OSPF"
    ]
  },
  "144": {
    "question_keywords": [
      "IP SLA probe",
      "tcp connect",
      "probe is failing"
    ],
    "correct_option_keywords": [
      "control disable",
      "tcp connect"
    ]
  },
  "145": {
    "question_keywords": [
      "R2 cannot ping R1",
      "GigabitEthernet0/0"
    ],
    "correct_option_keywords": [
      "Fix IP Event Dampening",
      "interface"
    ]
  },
  "146": {
    "question_keywords": [
      "failed login attempts",
      "successful login attempts"
    ],
    "correct_option_keywords": [
      "logging history 5"
    ]
  },
  "147": {
    "question_keywords": [
      "R3 cannot SSH to the R2\u2019s Loopback interface"
    ],
    "correct_option_keywords": [
      "Modify line 30",
      "permit instead of deny"
    ]
  },
  "148": {
    "question_keywords": [
      "authentication",
      "encrypting data with DES",
      "UNKNOWNUSERNAME. WRONGDIGEST"
    ],
    "correct_option_keywords": [
      "authentication password",
      "privacy passwords",
      "SNMPv3 authPriv"
    ]
  },
  "149": {
    "question_keywords": [
      "functions of LDP",
      "Choose two"
    ],
    "correct_option_keywords": [
      "advertises labels",
      "Forwarding Equivalence Class",
      "uses Forwarding Equivalence Class"
    ]
  },
  "150": {
    "question_keywords": [
      "set a tag of 30",
      "route 10.1.80.65/32",
      "failed"
    ],
    "correct_option_keywords": [
      "route-map ospf-to-eigrp permit 10",
      "match prefix-list ccnp2"
    ]
  },
  "151": {
    "question_keywords": [
      "cannot reach any network destinations",
      "restores service",
      "block 10.1.1.100/32"
    ],
    "correct_option_keywords": [
      "permit 20"
    ]
  },
  "152": {
    "question_keywords": [
      "mutual redistribution",
      "instability",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "Set a tag",
      "deny"
    ]
  },
  "153": {
    "question_keywords": [
      "VRF-Lite configurations",
      "true"
    ],
    "correct_option_keywords": [
      "overlapping IP addresses",
      "private routing table"
    ]
  },
  "154": {
    "question_keywords": [
      "redistribution",
      "BGP",
      "OSPF"
    ],
    "correct_option_keywords": [
      "not redistributed"
    ]
  },
  "155": {
    "question_keywords": [
      "protecting CPU utilization"
    ],
    "correct_option_keywords": [
      "COPP",
      "protecting CPU utilization"
    ]
  },
  "156": {
    "question_keywords": [
      "partial information",
      "SNMP"
    ],
    "correct_option_keywords": [
      "CIR limit",
      "SNMP"
    ]
  },
  "157": {
    "question_keywords": [
      "reliable",
      "encrypted",
      "notifications",
      "not encrypted"
    ],
    "correct_option_keywords": [
      "SNMPv3 informs",
      "priv"
    ]
  },
  "158": {
    "question_keywords": [
      "OSPF adjacency",
      "failed",
      "stuck in exstart state"
    ],
    "correct_option_keywords": [
      "match",
      "MTU settings"
    ]
  },
  "159": {
    "question_keywords": [
      "IPv6 Source Guard",
      "determine",
      "IPv6 source addresses",
      "forwarded"
    ],
    "correct_option_keywords": [
      "Binding Table"
    ]
  },
  "160": {
    "question_keywords": [
      "MPLS Layer 3 VPN services",
      "deployed"
    ],
    "correct_option_keywords": [
      "label switch path",
      "available",
      "PE routers"
    ]
  },
  "161": {
    "question_keywords": [
      "Control Plane Policing",
      "routing protocols start flapping",
      "prevents this problem",
      "production environment"
    ],
    "correct_option_keywords": [
      "transmit initially",
      "input direction"
    ]
  },
  "162": {
    "question_keywords": [
      "NTP",
      "synchronized time",
      "system and logs"
    ],
    "correct_option_keywords": [
      "service timestamps log datetime localtime"
    ]
  },
  "163": {
    "question_keywords": [
      "cannot establish",
      "EIGRP adjacency"
    ],
    "correct_option_keywords": [
      "passive-interface command",
      "matches"
    ]
  },
  "164": {
    "question_keywords": [
      "L3 VPN MPLS application",
      "service provider",
      "components needed"
    ],
    "correct_option_keywords": [
      "PE routers",
      "MP-iBGP",
      "other PE routers"
    ]
  },
  "165": {
    "question_keywords": [
      "high delay",
      "avoid using",
      "second ISP link is up",
      "BGP attribute"
    ],
    "correct_option_keywords": [
      "LOCAL_PREF",
      "avoid using",
      "high-delay"
    ]
  },
  "166": {
    "question_keywords": [
      "dynamic ip addresses"
    ],
    "correct_option_keywords": [
      "permit udp any any eq 68",
      "permit udp any any eq 67"
    ]
  },
  "167": {
    "question_keywords": [
      "only the default route",
      "failed"
    ],
    "correct_option_keywords": [
      "Remove the line with the sequence number 5",
      "deny"
    ]
  },
  "168": {
    "question_keywords": [
      "neighbor relationship is not coming up"
    ],
    "correct_option_keywords": [
      "disable-connected-check",
      "update-source loopback0"
    ]
  },
  "169": {
    "question_keywords": [
      "EIGRP neighbors",
      "OSPF",
      "not learning routes"
    ],
    "correct_option_keywords": [
      "Default metrics",
      "not configured",
      "EIGRP"
    ]
  },
  "170": {
    "question_keywords": [
      "floating static route",
      "primary default gateway",
      "g0/0 goes down",
      "cannot reach HQ network"
    ],
    "correct_option_keywords": [
      "icmp-echo",
      "192.168.100.1"
    ]
  },
  "171": {
    "question_keywords": [
      "DHCP server",
      "IP phones",
      "TFTP server",
      "failed to load configuration"
    ],
    "correct_option_keywords": [
      "DHCP option 66"
    ]
  },
  "172": {
    "question_keywords": [
      "restores the routes from neighbors",
      "filtering 1.1.1.0/24"
    ],
    "correct_option_keywords": [
      "permit 20"
    ]
  },
  "173": {
    "question_keywords": [
      "DMVPN single hub topology",
      "IPsec + mGRE",
      "OSPF",
      "designated router"
    ],
    "correct_option_keywords": [
      "OSPF priority",
      "greater than 1"
    ]
  },
  "174": {
    "question_keywords": [
      "policy-based routing",
      "destination IP address that does not exist",
      "set ip default nexthop command"
    ],
    "correct_option_keywords": [
      "forwarded",
      "specific next hop"
    ]
  },
  "175": {
    "question_keywords": [
      "minimum time spacing",
      "BFD control packet",
      "receive"
    ],
    "correct_option_keywords": [
      "Required Min RX Interval"
    ]
  },
  "177": {
    "question_keywords": [
      "MPLS label characteristics",
      "Choose two"
    ],
    "correct_option_keywords": [
      "LDP uses TCP",
      "label is a short identifier"
    ]
  },
  "178": {
    "question_keywords": [
      "VRF instance",
      "characteristics"
    ],
    "correct_option_keywords": [
      "Each VRF has a different set of routing and CEF tables",
      "An interface must be associated to one VRF"
    ]
  },
  "179": {
    "question_keywords": [
      "branch 1",
      "branch 2",
      "cannot communicate"
    ],
    "correct_option_keywords": [
      "EIGRP AS 100"
    ]
  },
  "180": {
    "question_keywords": [
      "two paths",
      "traffic is sent only through R3",
      "use both paths"
    ],
    "correct_option_keywords": [
      "variance",
      "EIGRP process"
    ]
  },
  "181": {
    "question_keywords": [
      "filtered required messages",
      "minimize log messages"
    ],
    "correct_option_keywords": [
      "level 5"
    ]
  },
  "183": {
    "question_keywords": [
      "Telnet connection",
      "Router1 IPv6 address",
      "could not establish"
    ],
    "correct_option_keywords": [
      "permit ICMPv6",
      "access list INGRESS",
      "obtain IPv6 address"
    ]
  },
  "184": {
    "question_keywords": [
      "IPv6 first-hop security feature",
      "minimize denial of service attacks"
    ],
    "correct_option_keywords": [
      "IPv6 Destination Guard",
      "minimize denial of service attacks"
    ]
  },
  "185": {
    "question_keywords": [
      "OSPF neighbor relationship is not coming up",
      "restore OSPF neighbor adjacency"
    ],
    "correct_option_keywords": [
      "matching mtu values"
    ]
  },
  "186": {
    "question_keywords": [
      "IPv6 First-Hop Security",
      "Binding Table",
      "operate"
    ],
    "correct_option_keywords": [
      "recovery mechanism",
      "IPv6 guard features",
      "validate the data link layer address"
    ]
  },
  "187": {
    "question_keywords": [
      "console session",
      "debug commands",
      "scrolling debug messages",
      "see entered console commands"
    ],
    "correct_option_keywords": [
      "logging synchronous",
      "console",
      "synchronizes"
    ]
  },
  "188": {
    "question_keywords": [
      "clients on ALS1 to receive IPv6 addresses",
      "Router DHCP is configured to lease IPv6 addresses"
    ],
    "correct_option_keywords": [
      "ipv6 dhcp relay destination"
    ]
  },
  "189": {
    "question_keywords": [
      "IPv4",
      "VPNv4 address-family",
      "Layer 3 MPLS VPN",
      "purposes"
    ],
    "correct_option_keywords": [
      "RD is prepended",
      "unique",
      "VPNv4 address",
      "64-bit route distinguisher",
      "prepended to the IPv4 prefix"
    ]
  },
  "190": {
    "question_keywords": [
      "direct communications between spoke 1 and spoke 2",
      "without going through the hub"
    ],
    "correct_option_keywords": [
      "ip nhrp redirect command",
      "ip nhrp shortcut command"
    ]
  },
  "191": {
    "question_keywords": [
      "redistributed",
      "default static route",
      "OSPF",
      "reachability to the Internet"
    ],
    "correct_option_keywords": [
      "default-information originate"
    ]
  },
  "192": {
    "question_keywords": [
      "summarized routes",
      "specific routes and the summary route",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "summary-only"
    ]
  },
  "193": {
    "question_keywords": [
      "shutting down interface",
      "route through HQ_R1 unless the path is unavailable"
    ],
    "correct_option_keywords": [
      "track 1",
      "172.16.35.6"
    ]
  },
  "194": {
    "question_keywords": [
      "DHCP client is unable to receive an IP address",
      "DHCP server",
      "RouterB is configured as follows",
      "fastethernet 0/0 interface"
    ],
    "correct_option_keywords": [
      "ip helper-address",
      "172.16.1.2"
    ]
  },
  "195": {
    "question_keywords": [
      "MPLS Layer 3 VPNs",
      "functions"
    ],
    "correct_option_keywords": [
      "BGP is used for signaling customer VPNv4 routes between PE nodes",
      "Customer traffic is encapsulated in a VPN label when it is forwarded in MPLS network"
    ]
  },
  "196": {
    "question_keywords": [
      "receiving routes from Chicago but not from each other"
    ],
    "correct_option_keywords": [
      "no ip split-horizon"
    ]
  },
  "197": {
    "question_keywords": [
      "Telnet traffic",
      "192.168.3.0/24",
      "192.168.4.0/24",
      "preferred route",
      "HongKong router"
    ],
    "correct_option_keywords": [
      "tcp",
      "eq 23",
      "172.18.1.2"
    ]
  },
  "198": {
    "question_keywords": [
      "authentication problem"
    ],
    "correct_option_keywords": [
      "same password",
      "TACACS+ server",
      "router"
    ]
  },
  "199": {
    "question_keywords": [
      "cannot access privileged mode commands"
    ],
    "correct_option_keywords": [
      "enable secret",
      "enable password"
    ]
  },
  "200": {
    "question_keywords": [
      "MPLS VPN device types",
      "definitions"
    ],
    "correct_option_keywords": [
      "core of the provider network",
      "attaches and detaches the VPN labels",
      "enterprise network",
      "edge of the enterprise network"
    ]
  },
  "201": {
    "question_keywords": [
      "IPv6 Binding Table",
      "IPv6 DHCPv6 Guard",
      "IPv6 Source Guard",
      "IPv6 ND Inspection",
      "IPv6 RA Guard"
    ],
    "correct_option_keywords": [
      "Block reply and advertisement messages from unauthorized DHCP servers and relay agents",
      "Create a binding table that is based on NS and NA messages",
      "Filter inbound traffic on Layer 2 switch port that are not in the IPv6 binding table",
      "Block a malicious host and permit the router from a legitimate route",
      "Create IPv6 neighbors connected to the device from information sources such as NDP snooping"
    ]
  },
  "202": {
    "question_keywords": [
      "policy",
      "avoid following packet forwarding",
      "normal routing path"
    ],
    "correct_option_keywords": [
      "Configure ACLs",
      "Configure match commands",
      "Configure set commands",
      "Configure route map instances",
      "Configure PBR on the interface",
      "Configure fast switching for PBR"
    ]
  },
  "203": {
    "question_keywords": [
      "MPLS concepts",
      "descriptions"
    ],
    "correct_option_keywords": [
      "Label",
      "Forwarding",
      "Path"
    ]
  },
  "204": {
    "question_keywords": [
      "Clients are not receiving an IP address",
      "DHCP snooping is disabled",
      "uplink port (Port-channel2) as a trusted port"
    ],
    "correct_option_keywords": [
      "no ip dhcp snooping information option"
    ]
  },
  "205": {
    "question_keywords": [
      "NTP issue",
      "Cisco DNA Center",
      "WLC"
    ],
    "correct_option_keywords": [
      "reachability",
      "WLC",
      "NTP server"
    ]
  },
  "206": {
    "question_keywords": [
      "control plane",
      "P routers",
      "MPLS cloud"
    ],
    "correct_option_keywords": [
      "RSVP",
      "LDP"
    ]
  },
  "207": {
    "question_keywords": [
      "router",
      "Cisco DNA Center",
      "unmonitored",
      "mount it"
    ],
    "correct_option_keywords": [
      "telemetry data"
    ]
  },
  "208": {
    "question_keywords": [
      "intermittent connectivity",
      "routing update changes",
      "routing loop"
    ],
    "correct_option_keywords": [
      "routing loop",
      "admin distance",
      "iBGP"
    ]
  },
  "209": {
    "question_keywords": [
      "block rogue router advertisements",
      "instead of using the IPv6 Router Advertisement Guard feature"
    ],
    "correct_option_keywords": [
      "PVLANs",
      "promiscuous ports",
      "isolated ports"
    ]
  },
  "210": {
    "question_keywords": [
      "preferred path",
      "backup",
      "AS 100 is not used for any other routes"
    ],
    "correct_option_keywords": [
      "local-preference 99",
      "route-map SETLP in"
    ]
  },
  "211": {
    "question_keywords": [
      "IPv6",
      "neighbor relationship is not coming up"
    ],
    "correct_option_keywords": [
      "address-family ipv4 unicast"
    ]
  },
  "212": {
    "question_keywords": [
      "telnet connection",
      "PC 2018:DB1:A:B::2",
      "server 2018:DB1:A:C::1"
    ],
    "correct_option_keywords": [
      "sequence 15",
      "permit tcp",
      "eq telnet"
    ]
  },
  "213": {
    "question_keywords": [
      "MPLS Layer 3 VPN",
      "function"
    ],
    "correct_option_keywords": [
      "service provider network",
      "customer edge",
      "provider edge"
    ]
  },
  "214": {
    "question_keywords": [
      "cannot print",
      "PC",
      "local printer",
      "diagnose the issue"
    ],
    "correct_option_keywords": [
      "path trace",
      "diagnose",
      "issue"
    ]
  },
  "215": {
    "question_keywords": [
      "choosing slower links",
      "despite the direct links being up",
      "fixes the issue"
    ],
    "correct_option_keywords": [
      "bandwidth 1000000"
    ]
  },
  "216": {
    "question_keywords": [
      "neighbor relationship is not coming up",
      "OSPF authentication settings"
    ],
    "correct_option_keywords": [
      "ip ospf authentication message-digest",
      "ip ospf message-digest-key 1 md5 Cisco123"
    ]
  },
  "217": {
    "question_keywords": [
      "redistribution",
      "failed",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "route map",
      "prefix-list",
      "evaluate"
    ]
  },
  "218": {
    "question_keywords": [
      "IPv6 access list",
      "no hits",
      "unnecessary traffic"
    ],
    "correct_option_keywords": [
      "ipv6 traffic-filter",
      "in"
    ]
  },
  "219": {
    "question_keywords": [
      "Reverse Path Forwarding",
      "routes are dropped",
      "route lookup fails",
      "prefix that is available in the routing table"
    ],
    "correct_option_keywords": [
      "ip verify unicast source",
      "reachable-via any"
    ]
  },
  "220": {
    "question_keywords": [
      "branch B only ever uses the MPLS B network",
      "reach HQ"
    ],
    "correct_option_keywords": [
      "AS path filter",
      "local prefixes",
      "advertised into BGP"
    ]
  },
  "221": {
    "question_keywords": [
      "cannot run any privileged commands"
    ],
    "correct_option_keywords": [
      "Configure full access",
      "TACACS+ server"
    ]
  },
  "222": {
    "question_keywords": [
      "OSPF routing protocol",
      "redistributed into BGP",
      "not all OSPF routes are distributed"
    ],
    "correct_option_keywords": [
      "internal external",
      "redistribute"
    ]
  },
  "223": {
    "question_keywords": [
      "failed authentication attempt"
    ],
    "correct_option_keywords": [
      "aaa authorization console global command"
    ]
  },
  "224": {
    "question_keywords": [
      "Math department must not be able to reach the Science department",
      "vice versa"
    ],
    "correct_option_keywords": [
      "vrf forwarding Science",
      "address-family ipv4"
    ]
  },
  "225": {
    "question_keywords": [
      "permit http and https traffic only toward the internet",
      "User1 laptop",
      "access list 101 be applied"
    ],
    "correct_option_keywords": [
      "Interface G0/0",
      "incoming direction"
    ]
  },
  "226": {
    "question_keywords": [
      "LDP features",
      "descriptions"
    ],
    "correct_option_keywords": [
      "controls the amount of memory used to store LDP label bindings advertised by other devices"
    ]
  },
  "227": {
    "question_keywords": [
      "troubleshooting",
      "EIGRP neighbor adjacency problem",
      "interface not participating in EIGRP process"
    ],
    "correct_option_keywords": [
      "network command",
      "EIGRP address family vrf CLIENT1"
    ]
  },
  "228": {
    "question_keywords": [
      "OSPF adjacency issue",
      "DR router"
    ],
    "correct_option_keywords": [
      "Advertise",
      "matching subnet"
    ]
  },
  "229": {
    "question_keywords": [
      "VPN routing information",
      "distributed",
      "MPLS network"
    ],
    "correct_option_keywords": [
      "controlled",
      "VPN target communities"
    ]
  },
  "230": {
    "question_keywords": [
      "R1 is configured with the DHCP helper address",
      "R2 is not replying to the DHCP request",
      "PC is directly connected to the Fa0/1 interface on R2, the DHCP server assigns as IP address from the DHCP pool to the PC"
    ],
    "correct_option_keywords": [
      "service dhcp",
      "ip dhcp relay information trust-all"
    ]
  },
  "231": {
    "question_keywords": [
      "packet loss",
      "10.1.1.0/24",
      "frequent routing changes",
      "R1"
    ],
    "correct_option_keywords": [
      "Tag",
      "deny",
      "redistributed into OSPF on R1"
    ]
  },
  "232": {
    "question_keywords": [
      "PC-2",
      "Telnet connection",
      "terminal server",
      "failed"
    ],
    "correct_option_keywords": [
      "sequence 15",
      "permit tcp",
      "eq telnet"
    ]
  },
  "233": {
    "question_keywords": [
      "receiving its own routes",
      "loop prevention"
    ],
    "correct_option_keywords": [
      "no neighbor ... allowas-in"
    ]
  },
  "234": {
    "question_keywords": [
      "IPv6",
      "DMVPN network",
      "mGRE IPv6 tunnel"
    ],
    "correct_option_keywords": [
      "tunnel mode gre multipoint ipv6"
    ]
  },
  "235": {
    "question_keywords": [
      "loopback0",
      "reachability"
    ],
    "correct_option_keywords": [
      "loopback0",
      "point-to-point"
    ]
  },
  "236": {
    "question_keywords": [
      "SNMP",
      "interface indexes are changed",
      "global configuration"
    ],
    "correct_option_keywords": [
      "snmp-server",
      "ifindex",
      "persist"
    ]
  },
  "237": {
    "question_keywords": [
      "optimize the reconvergence time",
      "less CPU-intensive",
      "reducing the hello and dead timers"
    ],
    "correct_option_keywords": [
      "BFD",
      "optimize reconvergence time",
      "less CPU-intensive"
    ]
  },
  "238": {
    "question_keywords": [
      "transfer fails",
      "script",
      "router"
    ],
    "correct_option_keywords": [
      "SCP service",
      "ip scp server enable"
    ]
  },
  "239": {
    "question_keywords": [
      "BGP peers cannot establish neighbor adjacency",
      "exchange routes"
    ],
    "correct_option_keywords": [
      "address-family ipv6",
      "activate"
    ]
  },
  "240": {
    "question_keywords": [
      "high utilization issue on the route processor",
      "BGP process is dropping a high number of routing packets",
      "thousands of routes to recalculate frequently"
    ],
    "correct_option_keywords": [
      "Police the cir for BGP",
      "conform-action transmit",
      "exceed action transmit"
    ]
  },
  "241": {
    "question_keywords": [
      "adjacency issue"
    ],
    "correct_option_keywords": [
      "autonomous system numbers"
    ]
  },
  "242": {
    "question_keywords": [
      "resolve the issue",
      "SNMP"
    ],
    "correct_option_keywords": [
      "debug snmp packet",
      "show snmpv3 user"
    ]
  },
  "243": {
    "question_keywords": [
      "failed to access",
      "weekend",
      "telnet and HTTP"
    ],
    "correct_option_keywords": [
      "time-range Contractor",
      "periodic weekdays 8:00 to 16:30"
    ]
  },
  "245": {
    "question_keywords": [
      "reachability between areas",
      "summary routes",
      "multiple area OSPF"
    ],
    "correct_option_keywords": [
      "area range command",
      "ABR"
    ]
  },
  "246": {
    "question_keywords": [
      "policy-based routing",
      "traffic that matches the access list"
    ],
    "correct_option_keywords": [
      "209.165.202.131"
    ]
  },
  "247": {
    "question_keywords": [
      "multipoint GRE tunnels",
      "R1"
    ],
    "correct_option_keywords": [
      "tunnel mode gre multipoint",
      "ip nhrp nhs",
      "ip nhrp map"
    ]
  },
  "248": {
    "question_keywords": [
      "SNMP server cannot obtain information",
      "resolves this issue"
    ],
    "correct_option_keywords": [
      "access-list 20 permit 10.221.10.11"
    ]
  },
  "249": {
    "question_keywords": [
      "WAN connectivity is down",
      "cannot log in",
      "TACACS+ usemame and password credentials"
    ],
    "correct_option_keywords": [
      "local",
      "console"
    ]
  },
  "251": {
    "question_keywords": [
      "route reflectors",
      "not all routes are sent",
      "restore reachability"
    ],
    "correct_option_keywords": [
      "R4",
      "R5"
    ]
  },
  "252": {
    "question_keywords": [
      "R4 cannot ping or traceroute network 192.168.100.0/24",
      "iBGP is configured for directly connected neighbors"
    ],
    "correct_option_keywords": [
      "R4 as a route reflector server",
      "R1 as a route reflector client"
    ]
  },
  "253": {
    "question_keywords": [
      "Layer 3 MPLS VPNs",
      "characteristic"
    ],
    "correct_option_keywords": [
      "Traffic engineering capabilities",
      "QoS",
      "SLAs"
    ]
  },
  "254": {
    "question_keywords": [
      "MP-BGP",
      "OPEN message",
      "contain"
    ],
    "correct_option_keywords": [
      "version number",
      "AS number"
    ]
  },
  "255": {
    "question_keywords": [
      "route distinguishes",
      "MPLS network",
      "VPNv4 address"
    ],
    "correct_option_keywords": [
      "Route distinguishes",
      "unique VPNv4 address",
      "across the MPLS network"
    ]
  },
  "256": {
    "question_keywords": [
      "must not apply",
      "10.1.1.1/32",
      "172.16.1.1/32",
      "not getting the desired results"
    ],
    "correct_option_keywords": [
      "deny tcp host 10.1.1.1",
      "deny tcp host 172.16.1.1",
      "permit ip any any"
    ]
  },
  "257": {
    "question_keywords": [
      "traffic segmentation",
      "DMVPN network"
    ],
    "correct_option_keywords": [
      "MPLS",
      "traffic segmentation"
    ]
  },
  "258": {
    "question_keywords": [
      "blocking all subnets of 172.16.0.0/16",
      "mask lower than 23",
      "eBGP neighbor",
      "R1",
      "R2"
    ],
    "correct_option_keywords": [
      "deny 172.16.0.0/16 le 23",
      "prefix-list",
      "in"
    ]
  },
  "259": {
    "question_keywords": [
      "physical connectivity issues",
      "access switch interface G1/0/14"
    ],
    "correct_option_keywords": [
      "test cable-diagnostics tdr",
      "GigabitEthernet1/0/14"
    ]
  },
  "260": {
    "question_keywords": [
      "R1 receives more specific /24 routes",
      "autosummarization",
      "summary route of 10.0.0.0/8"
    ],
    "correct_option_keywords": [
      "Router 10.1.100.10",
      "ip summary address eigrp",
      "10.0.0.0 255.0.0.0",
      "FastEthernet0/0 connected interface"
    ]
  },
  "261": {
    "question_keywords": [
      "summarization is configured",
      "more specific routes are received",
      "summary route be received"
    ],
    "correct_option_keywords": [
      "summarization condition is not met",
      "10.1.100.0/24 should be changed"
    ]
  },
  "262": {
    "question_keywords": [
      "troubleshooting",
      "failed Telnet session",
      "PC to the DHCP server"
    ],
    "correct_option_keywords": [
      "Remove sequence 20",
      "add it back",
      "sequence 5"
    ]
  },
  "263": {
    "question_keywords": [
      "R1 is configured with IP SLA",
      "availability of the server behind R6",
      "kept failing"
    ],
    "correct_option_keywords": [
      "permit icmp host 10.10.10.1 host 10.66.66.66"
    ]
  },
  "264": {
    "question_keywords": [
      "OSI model",
      "MPLS label",
      "insert"
    ],
    "correct_option_keywords": [
      "between Layer 2 and Layer 3"
    ]
  },
  "265": {
    "question_keywords": [
      "authenticate Telnet connections",
      "cannot authenticate"
    ],
    "correct_option_keywords": [
      "line vty 0 4",
      "login authentication"
    ]
  },
  "266": {
    "question_keywords": [
      "RR became unreachable",
      "security audit",
      "implemented an ACL"
    ],
    "correct_option_keywords": [
      "Permit ICMPv6 neighbor discovery",
      "Remove the ACL entry 80"
    ]
  },
  "267": {
    "question_keywords": [
      "DMVPN",
      "hub router",
      "NHRP",
      "multicast NHRP mappings automatically"
    ],
    "correct_option_keywords": [
      "ip nhrp map multicast dynamic",
      "tunnel mode gre multipoint"
    ]
  },
  "268": {
    "question_keywords": [
      "IPv6 Source Guard",
      "function"
    ],
    "correct_option_keywords": [
      "works with",
      "address glean",
      "ND"
    ]
  },
  "269": {
    "question_keywords": [
      "block access to the console ports",
      "security policy",
      "security team still can connect through the console port"
    ],
    "correct_option_keywords": [
      "no exec"
    ]
  },
  "270": {
    "question_keywords": [
      "Malicious users",
      "uploaded different configurations",
      "unauthorized NMS and TFTP servers"
    ],
    "correct_option_keywords": [
      "access-list 20 permit 10.221.10.11",
      "snmp-server tftp-server-list 20"
    ]
  },
  "271": {
    "question_keywords": [
      "EIGRP stub router",
      "R3 failed to reach to R2 loopback address"
    ],
    "correct_option_keywords": [
      "static route",
      "redistribute"
    ]
  },
  "272": {
    "question_keywords": [
      "virtual link which causes area 250 to be unreachable",
      "resolve this issue"
    ],
    "correct_option_keywords": [
      "area 234 virtual-link 0.0.0.44",
      "area 234 virtual-link 0.0.0.22"
    ]
  },
  "273": {
    "question_keywords": [
      "DHCP client is unable to receive an IP address",
      "RouterB is configured as follows",
      "fastethernet 0/0 interface of RouterB"
    ],
    "correct_option_keywords": [
      "ip helper-address",
      "172.16.1.2"
    ]
  },
  "274": {
    "question_keywords": [
      "default route toward the internet",
      "no routes configured for the HQ site",
      "intranet website (TCP port 80) available to the branch office users"
    ],
    "correct_option_keywords": [
      "access-list",
      "route-map",
      "ip policy route-map"
    ]
  },
  "275": {
    "question_keywords": [
      "prefer Site-A ISP-1",
      "otherwise, all Internet traffic should go to ISP-2",
      "Redistribution is configured between BGP and OSPF",
      "not working as expected"
    ],
    "correct_option_keywords": [
      "metric-type 1",
      "metric-type 2"
    ]
  },
  "276": {
    "question_keywords": [
      "ASBRs are not propagation routes to each other"
    ],
    "correct_option_keywords": [
      "route-reflector-client"
    ]
  },
  "277": {
    "question_keywords": [
      "uRPF",
      "ping to R1 is failing",
      "routing table",
      "GigabitEthernet 0/0"
    ],
    "correct_option_keywords": [
      "uRPF mode",
      "loose"
    ]
  },
  "278": {
    "question_keywords": [
      "HTTP and HTTPS traffic",
      "limited to 500 kbps",
      "exceeds this limit must be dropped",
      "CoPP failed to capture the desired traffic",
      "CPU load is getting higher"
    ],
    "correct_option_keywords": [
      "permit tcp host 172.16.1.99 any eq 80",
      "permit tcp host 172.16.1.99 any eq 443",
      "police 500 conform-action transmit"
    ]
  },
  "279": {
    "question_keywords": [
      "Cisco DNA Center cluster",
      "all the services are running on one host node"
    ],
    "correct_option_keywords": [
      "Enable service distribution",
      "Systems 360 page"
    ]
  },
  "280": {
    "question_keywords": [
      "troubleshooting IPv6 address assignment",
      "DHCP client",
      "not getting an IPv6 address",
      "retrieves the client IPv6 address from the DHCP server"
    ],
    "correct_option_keywords": [
      "ipv6 address autoconfig",
      "interface"
    ]
  },
  "281": {
    "question_keywords": [
      "monitoring VTY access",
      "router does not have any filter",
      "ACL is configured"
    ],
    "correct_option_keywords": [
      "ipv6",
      "traffic-filter"
    ]
  },
  "282": {
    "question_keywords": [
      "VRF CCNP",
      "work"
    ],
    "correct_option_keywords": [
      "interface Loopback0",
      "ip address 10.1.1.1 255.255.255.0"
    ]
  },
  "283": {
    "question_keywords": [
      "NMS server cannot see the flow",
      "ethernet 0/0"
    ],
    "correct_option_keywords": [
      "interface Ethernet0/0",
      "input",
      "output"
    ]
  },
  "284": {
    "question_keywords": [
      "DMVPN network",
      "multiple spokes"
    ],
    "correct_option_keywords": [
      "point-to-multipoint",
      "spoke routers"
    ]
  },
  "285": {
    "question_keywords": [
      "TACACS problem",
      "troubleshooting"
    ],
    "correct_option_keywords": [
      "matching preshared key"
    ]
  },
  "286": {
    "question_keywords": [
      "wait 30 seconds",
      "revert to the primary link after waiting 20 seconds"
    ],
    "correct_option_keywords": [
      "delay down 30 up 20"
    ]
  },
  "287": {
    "question_keywords": [
      "R3 prefix of 10 1.3.0/24 is not received on R2",
      "R2 prefix 10.1,2.0/24 is not received on R3"
    ],
    "correct_option_keywords": [
      "Split horizon",
      "tunnel interface of R1"
    ]
  },
  "288": {
    "question_keywords": [
      "R5 should not receive any routes originated in the EIGRP domain",
      "removes the EIGRP routes from the R5 routing table"
    ],
    "correct_option_keywords": [
      "R4",
      "route-map O2R deny 10",
      "match tag 111"
    ]
  },
  "289": {
    "question_keywords": [
      "NMS server cannot see the flow",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "flow exporter",
      "destination"
    ]
  },
  "290": {
    "question_keywords": [
      "HTTP packet",
      "10.1.1.0/24",
      "10.100.100.0/24",
      "next-hop of 10.2.2.2",
      "two hops away"
    ],
    "correct_option_keywords": [
      "access-list 100 permit tcp",
      "route-map POLICY permit 10",
      "set ip next-hop recursive 10.2.2.2"
    ]
  },
  "291": {
    "question_keywords": [
      "ACLip access-list extended COPP",
      "applied as CoPP",
      "Problem occurs"
    ],
    "correct_option_keywords": [
      "Remove the log",
      "log-input keywords",
      "ACL"
    ]
  },
  "293": {
    "question_keywords": [
      "EIGRP router",
      "not advertising",
      "route 2.2.2.2/32",
      "static",
      "eigrp stub static"
    ],
    "correct_option_keywords": [
      "Redistribute",
      "static metric",
      "EIGRP"
    ]
  },
  "294": {
    "question_keywords": [
      "console port",
      "enable command",
      "rejected"
    ],
    "correct_option_keywords": [
      "line con 0",
      "authorization exec"
    ]
  },
  "295": {
    "question_keywords": [
      "no network 10 prefixes are visible",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "permit 10.0.0.0/8",
      "no ip prefix-list EIGRP seq 20"
    ]
  },
  "296": {
    "question_keywords": [
      "MPLS Layer 3 VPN",
      "differentiate",
      "IP address space",
      "between each VPN"
    ],
    "correct_option_keywords": [
      "RD",
      "differentiate",
      "IP address space"
    ]
  },
  "297": {
    "question_keywords": [
      "move the interface to an existing VRF \u201cBLUE\u201d",
      "configured interface GigabitEthemet2 in VRF \u201cRED\u201d"
    ],
    "correct_option_keywords": [
      "no vrf forwarding RED",
      "vrf forwarding BLUE",
      "ip address 10.0.0.0 255.255.255.254"
    ]
  },
  "298": {
    "question_keywords": [
      "minimum configuration",
      "communicate between routers A1 and A2"
    ],
    "correct_option_keywords": [
      "ip add",
      "router ospf"
    ]
  },
  "299": {
    "question_keywords": [
      "prerequisites",
      "enable BFD",
      "Cisco routers"
    ],
    "correct_option_keywords": [
      "supported IP routing protocol",
      "Cisco Express Forwarding",
      "IP Routing"
    ]
  },
  "300": {
    "question_keywords": [
      "stuck in EXCHANGE/EXSTART state",
      "neighbor is still down"
    ],
    "correct_option_keywords": [
      "Match MTU",
      "ignore MTU"
    ]
  },
  "301": {
    "question_keywords": [
      "neighbor relationship is not coming up"
    ],
    "correct_option_keywords": [
      "password cisco"
    ]
  },
  "303": {
    "question_keywords": [
      "flapping link",
      "frequent label binding exchange",
      "MPLS routers"
    ],
    "correct_option_keywords": [
      "targeted hellos",
      "hold-timer",
      "link dampening"
    ]
  },
  "304": {
    "question_keywords": [
      "console 0",
      "router console timed out",
      "asked for a username to log in",
      "nousername and password were configured previously"
    ],
    "correct_option_keywords": [
      "Power cycle",
      "reload the router",
      "reconfigure"
    ]
  },
  "305": {
    "question_keywords": [
      "default static route",
      "two VRFs",
      "Red",
      "Blue",
      "nexthop is valid for both VRFs"
    ],
    "correct_option_keywords": [
      "ip route vrf",
      "0.0.0.0 0.0.0.0"
    ]
  },
  "306": {
    "question_keywords": [
      "IPv6 Source Guard",
      "characteristics"
    ],
    "correct_option_keywords": [
      "service provider deployments",
      "protect DDoS attacks",
      "IPv6 snooping"
    ]
  },
  "307": {
    "question_keywords": [
      "route to a destination of 10.100.100.0/24 is withdrawn",
      "direct traffic to a next-hop of 10.1.1.1",
      "If the route is present in the routing table, then normal forwarding must occur"
    ],
    "correct_option_keywords": [
      "set ip default next-hop",
      "10.1.1.1",
      "10.100.100.0 0.0.0.255"
    ]
  },
  "309": {
    "question_keywords": [
      "transfer fails"
    ],
    "correct_option_keywords": [
      "ip scp server enable"
    ]
  },
  "310": {
    "question_keywords": [
      "cannot reach any network destinations",
      "restores service",
      "block 10.1.1.100/32"
    ],
    "correct_option_keywords": [
      "permit 20"
    ]
  },
  "311": {
    "question_keywords": [
      "cannot copy",
      "IOS.bin"
    ],
    "correct_option_keywords": [
      "file permissions",
      "FTP server"
    ]
  },
  "312": {
    "question_keywords": [
      "advantage of implementing BFD",
      "faster updates",
      "failure detection"
    ],
    "correct_option_keywords": [
      "millisecond",
      "failure detection"
    ]
  },
  "313": {
    "question_keywords": [
      "DHCPv6 Guard",
      "purpose",
      "filters messages",
      "DHCPv6 server",
      "DHCPv6 client",
      "relay agent"
    ],
    "correct_option_keywords": [
      "filters messages",
      "DHCPv6 server",
      "DHCPv6 client",
      "relay agent"
    ]
  },
  "314": {
    "question_keywords": [
      "LDP",
      "MPLS topology",
      "function"
    ],
    "correct_option_keywords": [
      "hop-by-hop forwarding",
      "LSRs"
    ]
  },
  "315": {
    "question_keywords": [
      "flapping",
      "instead of switching",
      "ISP1 failed"
    ],
    "correct_option_keywords": [
      "source-interface",
      "icmp-echo"
    ]
  },
  "316": {
    "question_keywords": [
      "point-to-point GRE VPN",
      "remote site"
    ],
    "correct_option_keywords": [
      "tunnel source 200.1.1.3",
      "tunnel destination 199.1.1.1",
      "ip address 192.168.1.3"
    ]
  },
  "317": {
    "question_keywords": [
      "VPN forwarding table",
      "MPLS network"
    ],
    "correct_option_keywords": [
      "stores VPN routes",
      "associated labels"
    ]
  },
  "318": {
    "question_keywords": [
      "IPv6",
      "first hop security",
      "roles",
      "descriptions"
    ],
    "correct_option_keywords": [
      "router advertisements",
      "router solicitation",
      "valid and rogue router advertisements"
    ]
  },
  "319": {
    "question_keywords": [
      "cannot Telnet",
      "ping",
      "DHCP-related information"
    ],
    "correct_option_keywords": [
      "Remove sequence 10",
      "sequence 25"
    ]
  },
  "320": {
    "question_keywords": [
      "remote server",
      "failing to receive",
      "NetFlow data"
    ],
    "correct_option_keywords": [
      "Ip flow monitor",
      "Input"
    ]
  },
  "321": {
    "question_keywords": [
      "end device",
      "DHCPv6 guard",
      "configured as a client"
    ],
    "correct_option_keywords": [
      "client",
      "DHCP requests",
      "permitted"
    ]
  },
  "322": {
    "question_keywords": [
      "Control Plane Policing",
      "limit OSPF traffic",
      "exceeds this limit must also be allowed",
      "traffic analysis",
      "failed to monitor and police"
    ],
    "correct_option_keywords": [
      "exceed-action transmit",
      "police 1000000 conform-action transmit"
    ]
  },
  "323": {
    "question_keywords": [
      "remote router is using SHA",
      "IPsec Phase 1 configuration"
    ],
    "correct_option_keywords": [
      "hash sha",
      "group 2"
    ]
  },
  "324": {
    "question_keywords": [
      "CoPP policy",
      "SSH traffic",
      "control plane",
      "ACL"
    ],
    "correct_option_keywords": [
      "CoPP",
      "control plane interface"
    ]
  },
  "325": {
    "question_keywords": [
      "MPLS Layer 3 VPN services",
      "deployed"
    ],
    "correct_option_keywords": [
      "label switch path",
      "available",
      "PE routers"
    ]
  },
  "327": {
    "question_keywords": [
      "GRE tunnel",
      "EIGRP neighbor",
      "tunnel started flapping",
      "recursive routing"
    ],
    "correct_option_keywords": [
      "Stop sending a route matching the tunnel destination across the tunnel"
    ]
  },
  "328": {
    "question_keywords": [
      "Mutual redistribution",
      "routing loop",
      "192.168.1.0/24"
    ],
    "correct_option_keywords": [
      "eigrp 7",
      "distribute-list 1 in s1",
      "distribute-list 1 in s1"
    ]
  },
  "329": {
    "question_keywords": [
      "source 219.65.100.15",
      "precedence bit set to 1",
      "source 219.65.100.16",
      "precedence but set to 5"
    ],
    "correct_option_keywords": [
      "set ip precedence critical",
      "route-map Texas permit 20"
    ]
  },
  "331": {
    "question_keywords": [
      "EIGRP peering",
      "authentication",
      "neighbors failed to come up"
    ],
    "correct_option_keywords": [
      "matching lowest key-id"
    ]
  },
  "332": {
    "question_keywords": [
      "failure detection",
      "BFD"
    ],
    "correct_option_keywords": [
      "short duration",
      "low overhead"
    ]
  },
  "333": {
    "question_keywords": [
      "TCP traffic",
      "host 10.10.10.10/24",
      "via R2"
    ],
    "correct_option_keywords": [
      "Allow TCP",
      "access list"
    ]
  },
  "334": {
    "question_keywords": [
      "loop",
      "poison reverse"
    ],
    "correct_option_keywords": [
      "route filtering"
    ]
  },
  "335": {
    "question_keywords": [
      "new spoke site",
      "dynamic IP",
      "DMVPN network",
      "passes traffic",
      "spoke router"
    ],
    "correct_option_keywords": [
      "ip nhrp registration",
      "no-unique"
    ]
  },
  "336": {
    "question_keywords": [
      "packet drop",
      "reach 172.16.2.7",
      "behind R2"
    ],
    "correct_option_keywords": [
      "floating static route",
      "R2 toward R3",
      "metric 254"
    ]
  },
  "337": {
    "question_keywords": [
      "Reachability",
      "unstable",
      "DHCPv6 function"
    ],
    "correct_option_keywords": [
      "ipv6 nd ra suppress"
    ]
  },
  "338": {
    "question_keywords": [
      "failed to run diagnostic commands",
      "Cisco DNA Center"
    ],
    "correct_option_keywords": [
      "Command Runner",
      "diagnostic commands"
    ]
  },
  "339": {
    "question_keywords": [
      "encrypted user password",
      "not be visible"
    ],
    "correct_option_keywords": [
      "password encryption aes",
      "username Admin secret"
    ]
  },
  "340": {
    "question_keywords": [
      "R6 should reach R1 via R5>R2>R1"
    ],
    "correct_option_keywords": [
      "Increase the cost to 61 between R2 and R3"
    ]
  },
  "341": {
    "question_keywords": [
      "filter for LSA traffic",
      "OSPFv3 interarea routes",
      "area 5 ABR",
      "protect advertising",
      "area 5 routes are not visible"
    ],
    "correct_option_keywords": [
      "in the \"in\" direction",
      "area 20",
      "router R2"
    ]
  },
  "342": {
    "question_keywords": [
      "packet loss",
      "reachability is flapping",
      "tracking and failing over another route"
    ],
    "correct_option_keywords": [
      "delay up 60 down 60",
      "track command"
    ]
  },
  "343": {
    "question_keywords": [
      "R2 loopback interface",
      "advertised with RIP and EIGRP",
      "reach the R2 loopback using RIP"
    ],
    "correct_option_keywords": [
      "router rip",
      "distance 100"
    ]
  },
  "344": {
    "question_keywords": [
      "advertise routes",
      "IPv6 MP-BGP",
      "failed",
      "R1"
    ],
    "correct_option_keywords": [
      "address-family ipv6 unicast",
      "network 2001:DB8::/64"
    ]
  },
  "345": {
    "question_keywords": [
      "DMVPN tunnels",
      "dynamic spoke-to-spoke tunnel capabilities",
      "EIGRP"
    ],
    "correct_option_keywords": [
      "no ip next-hop-self",
      "eigrp 1"
    ]
  },
  "346": {
    "question_keywords": [
      "control plane is heavily impacted",
      "CoPP con\ufb01guration",
      "lessens the impact"
    ],
    "correct_option_keywords": [
      "eigrp",
      "host 224.0.0.10"
    ]
  },
  "347": {
    "question_keywords": [
      "MPLS Layer 3 VPN con\ufb01guration",
      "required"
    ],
    "correct_option_keywords": [
      "RD per customer VRF",
      "MP-BGP for customer routes"
    ]
  },
  "348": {
    "question_keywords": [
      "EIGRP enabled multipoint interface",
      "traffic is not passing",
      "ip split-horizon eigrp 1"
    ],
    "correct_option_keywords": [
      "Disable split horizon"
    ]
  },
  "349": {
    "question_keywords": [
      "console messages",
      "10.11.110.12",
      "unauthorized attempt",
      "prevent the attempts"
    ],
    "correct_option_keywords": [
      "inbound ACL",
      "interface E1/0",
      "deny SNMP"
    ]
  },
  "350": {
    "question_keywords": [
      "many alerts",
      "flapping interface",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "no snmp trap link-status"
    ]
  },
  "351": {
    "question_keywords": [
      "overwrite an existing file",
      "attempt to update the file fails",
      "Error opening"
    ],
    "correct_option_keywords": [
      "package.conf file writable"
    ]
  },
  "352": {
    "question_keywords": [
      "spoke router",
      "DMVPN",
      "ip mtu 1400",
      "fragmentation",
      "maximum negotiated TCP MTU over GRE"
    ],
    "correct_option_keywords": [
      "ip tcp adjust-mtu 1360",
      "fragmentation after-encryption"
    ]
  },
  "353": {
    "question_keywords": [
      "Router1",
      "reach",
      "2005:DEAD:BEEF:DB2::/64"
    ],
    "correct_option_keywords": [
      "Router2",
      "2005:DEAD:BEEF:DB2::/64",
      "10.12.12.2"
    ]
  },
  "354": {
    "question_keywords": [
      "micro BFD sessions",
      "goals",
      "link aggregation group"
    ],
    "correct_option_keywords": [
      "Each member link",
      "Continuity for each member link"
    ]
  },
  "355": {
    "question_keywords": [
      "untagged outgoing labels",
      "MPLS router"
    ],
    "correct_option_keywords": [
      "Convert",
      "IP packet",
      "forward"
    ]
  },
  "356": {
    "question_keywords": [
      "MPLS LSP tunnel"
    ],
    "correct_option_keywords": [
      "hop-by-hop tunnel"
    ]
  },
  "357": {
    "question_keywords": [
      "traffic always prefers R1 to R5 backup links",
      "non-failure scenarios"
    ],
    "correct_option_keywords": [
      "ip route",
      "115"
    ]
  },
  "358": {
    "question_keywords": [
      "cannot determine the time",
      "mismatch between the router local clock and logs",
      "synchronizes the time"
    ],
    "correct_option_keywords": [
      "debug",
      "localtime"
    ]
  },
  "359": {
    "question_keywords": [
      "installs routes",
      "routing table"
    ],
    "correct_option_keywords": [
      "IGP does not have a route to R4",
      "Rectify route reachability"
    ]
  },
  "360": {
    "question_keywords": [
      "10.123.187.0/24",
      "EIGRP",
      "OSPF"
    ],
    "correct_option_keywords": [
      "distribute-list",
      "filter",
      "external routes"
    ]
  },
  "361": {
    "question_keywords": [
      "IP-EIGRP",
      "Neighbor",
      "down",
      "K-value mismatch"
    ],
    "correct_option_keywords": [
      "Upgrade",
      "IOS",
      "goodbye message"
    ]
  },
  "362": {
    "question_keywords": [
      "blocks all traffic",
      "except for traffic to gain an IPv6 address",
      "source IPv6 neighbors"
    ],
    "correct_option_keywords": [
      "IPv6 Source Guard",
      "blocks all traffic",
      "source IPv6"
    ]
  },
  "363": {
    "question_keywords": [
      "static route",
      "not present",
      "routing table",
      "OSPF neighbor",
      "redistribute"
    ],
    "correct_option_keywords": [
      "subnets keyword",
      "redistribution command"
    ]
  },
  "364": {
    "question_keywords": [
      "not receiving type 5 external LSAs",
      "132.108.2.0/24",
      "132.108.3.0/24",
      "distribute-list 1 out",
      "access-list 1 permit"
    ],
    "correct_option_keywords": [
      "access-list 1 permit",
      "132.108.0.0 0.0.3.255"
    ]
  },
  "365": {
    "question_keywords": [
      "functions of LDP",
      "Choose two"
    ],
    "correct_option_keywords": [
      "uses TCP",
      "uses pseudowire signaling"
    ]
  },
  "366": {
    "question_keywords": [
      "GRE tunnel",
      "provider network",
      "loopback to hide internal networks",
      "R2 establishes the tunnel with R1"
    ],
    "correct_option_keywords": [
      "tunnel source 192.168.20.1",
      "tunnel destination 192.168.10.1",
      "ip mtu 1400"
    ]
  },
  "367": {
    "question_keywords": [
      "DMVPN network",
      "Spoke1 user",
      "Spoke2 users",
      "hub router",
      "communicate directly"
    ],
    "correct_option_keywords": [
      "ip nhrp shortcut"
    ]
  },
  "368": {
    "question_keywords": [
      "NetFlow",
      "R1",
      "NMS server",
      "flow do not reach"
    ],
    "correct_option_keywords": [
      "flow exporter",
      "destination"
    ]
  },
  "369": {
    "question_keywords": [
      "MPLS LDP",
      "targeted session"
    ],
    "correct_option_keywords": [
      "label distribution session",
      "non-directly connected neighbors"
    ]
  },
  "370": {
    "question_keywords": [
      "OSPF sham-link",
      "backdoor routing",
      "OSPF is used as the PE-CE connection protocol",
      "MPLS VPN network"
    ],
    "correct_option_keywords": [
      "correct OSPF backdoor routing",
      "PE-CE connection protocol",
      "MPLS VPN network"
    ]
  },
  "371": {
    "question_keywords": [
      "No traf\ufb01c is filtering through CoPP",
      "high CPU utilization",
      "routing protocol traf\ufb01c",
      "Management traffic",
      "service-policy output PM-COPP"
    ],
    "correct_option_keywords": [
      "service-policy input PM-COPP",
      "class-map CM-MGMT",
      "match access-group 101"
    ]
  },
  "372": {
    "question_keywords": [
      "troubleshooting OSPF adjacency issue",
      "reduce console log messages",
      "relevant OSPF neighbor problem details"
    ],
    "correct_option_keywords": [
      "ospf neighbor",
      "ADJCHG"
    ]
  },
  "373": {
    "question_keywords": [
      "router log messages",
      "do not have any information about when the event occurred",
      "enabling service time stamps",
      "improve the logging functionality at a granular level"
    ],
    "correct_option_keywords": [
      "msec option",
      "time stamps",
      "granular level"
    ]
  },
  "374": {
    "question_keywords": [
      "clients in VLAN 10 on Gi2 cannot obtain IP configuration from the central DHCP server",
      "DHCP server is reachable",
      "router-on-a-stick"
    ],
    "correct_option_keywords": [
      "ip helper-address",
      "Gi2.10 subinterface"
    ]
  },
  "375": {
    "question_keywords": [
      "routing loop",
      "network instability",
      "OSPF domains",
      "routing between multiple OSPF domains"
    ],
    "correct_option_keywords": [
      "Set a tag",
      "redistribute command",
      "deny inbound"
    ]
  },
  "376": {
    "question_keywords": [
      "OSPF for IPv4 and IPv6 networks under a single process",
      "OSPF adjacencies are not established",
      "did not meet the requirement"
    ],
    "correct_option_keywords": [
      "Replace OSPF process 10 on the interfaces with OSPF process 1",
      "remove process 10 from the global configuration"
    ]
  },
  "377": {
    "question_keywords": [
      "BFD",
      "failure detection mechanism"
    ],
    "correct_option_keywords": [
      "consistent rate"
    ]
  },
  "378": {
    "question_keywords": [
      "unknown source",
      "neither in the binding table",
      "nor learned through neighbor discovery"
    ],
    "correct_option_keywords": [
      "IPv6 Prefix Guard"
    ]
  },
  "379": {
    "question_keywords": [
      "backup route",
      "failed to install"
    ],
    "correct_option_keywords": [
      "distance eigrp 10 170"
    ]
  },
  "380": {
    "question_keywords": [
      "extend VRF-Lite over a trunk",
      "VLAN 70",
      "VLAN 80",
      "port GigabitEthernet0/0",
      "port GigabitEthernet0/1"
    ],
    "correct_option_keywords": [
      "switchport trunk encapsulation dot1q",
      "switchport mode trunk",
      "switchport trunk allowed vlan"
    ]
  },
  "381": {
    "question_keywords": [
      "authenticate Telnet connections",
      "Cisco ISE using RADIUS",
      "radius server ISE1",
      "aaa authentication login default group RAD-SERV"
    ],
    "correct_option_keywords": [
      "aaa group server radius",
      "server name ISE1"
    ]
  },
  "382": {
    "question_keywords": [
      "receiving too many external routes",
      "CPU spike",
      "routers with smaller memories"
    ],
    "correct_option_keywords": [
      "summary-address command",
      "redistributing",
      "ASBR"
    ]
  },
  "383": {
    "question_keywords": [
      "LAN-to-LAN IPsec VPN",
      "local router"
    ],
    "correct_option_keywords": [
      "sha",
      "200.1.1.3"
    ]
  },
  "384": {
    "question_keywords": [
      "failed attempt",
      "remotely log in",
      "loopback interface",
      "192.168.40.15"
    ],
    "correct_option_keywords": [
      "source IP summarization",
      "vendor source IP address"
    ]
  },
  "385": {
    "question_keywords": [
      "connect to R1 via Telnet",
      "no success"
    ],
    "correct_option_keywords": [
      "tacacs server prodaddress ipv4 10.221.10.11"
    ]
  },
  "386": {
    "question_keywords": [
      "ICMPv6 neighbor discovery messages",
      "packet types"
    ],
    "correct_option_keywords": [
      "Neighbor Solicitation",
      "Neighbor Advertisement",
      "Router Advertisement",
      "Redirect Message",
      "Router Solicitation"
    ]
  },
  "387": {
    "question_keywords": [
      "SNMP server cannot upload modified configurations",
      "switch"
    ],
    "correct_option_keywords": [
      "RW 11"
    ]
  },
  "388": {
    "question_keywords": [
      "preshared key",
      "remote VPN routers",
      "DMVPN",
      "GRE over IPsec"
    ],
    "correct_option_keywords": [
      "crypto isakmp key",
      "Test",
      "address 0.0.0.0 0.0.0.0"
    ]
  },
  "389": {
    "question_keywords": [
      "branch A server",
      "IP spoofing attack",
      "uRPF solution"
    ],
    "correct_option_keywords": [
      "R3",
      "ip unicast RPF check"
    ]
  },
  "390": {
    "question_keywords": [
      "failed to test",
      "SSH access successfully"
    ],
    "correct_option_keywords": [
      "ssh -l user ip"
    ]
  },
  "391": {
    "question_keywords": [
      "Control Plane Policing",
      "inbound SSH traffic",
      "policed to 500 kbps",
      "not applied to SSH traffic"
    ],
    "correct_option_keywords": [
      "access-list 100 permit tcp ... eq 22",
      "control-plane service-policy input PM-COPP"
    ]
  },
  "392": {
    "question_keywords": [
      "equai costs",
      "closer to R1",
      "How should the network traf\ufb01c to the EIGRP pre\ufb01xes be sent via 10.4.17.6"
    ],
    "correct_option_keywords": [
      "Type 1"
    ]
  },
  "393": {
    "question_keywords": [
      "preferred ISP",
      "external routes",
      "failed to send routes",
      "preferred path"
    ],
    "correct_option_keywords": [
      "route-map SETLP in",
      "local-preference 111"
    ]
  },
  "394": {
    "question_keywords": [
      "failed link between R2 and R3",
      "separated backbone"
    ],
    "correct_option_keywords": [
      "area 21 stub"
    ]
  },
  "395": {
    "question_keywords": [
      "OSPF",
      "RIP",
      "redistribution",
      "routing loop"
    ],
    "correct_option_keywords": [
      "redistribute rip",
      "distribute-list",
      "in"
    ]
  },
  "396": {
    "question_keywords": [
      "faster path",
      "EIGRP",
      "failed to take this path"
    ],
    "correct_option_keywords": [
      "network statement",
      "Rome",
      "inject"
    ]
  },
  "397": {
    "question_keywords": [
      "Bangkok",
      "172.16.2.0/24",
      "Singapore router",
      "preferred route"
    ],
    "correct_option_keywords": [
      "Bangkok",
      "set ip next-hop 172.19.1.2",
      "interface Ethernet0/2"
    ]
  },
  "398": {
    "question_keywords": [
      "MPLS components",
      "descriptions"
    ],
    "correct_option_keywords": [
      "routers in the core of the provider network known as P routers",
      "all traffic to be forwarded using the same path and same label",
      "routers that connect to the customer routers known as PE routers",
      "used for exchanging label mapping information between MPLS enabled routers",
      "path along which the traffic flows across an MPLS network"
    ]
  },
  "399": {
    "question_keywords": [
      "reach Dubai via Tokyo",
      "failed to meet the requirement"
    ],
    "correct_option_keywords": [
      "variance 2",
      "bandwidth"
    ]
  },
  "400": {
    "question_keywords": [
      "cannot receive the flows",
      "resolve the issue"
    ],
    "correct_option_keywords": [
      "permit udp any host 10.66 66.66 eq 1090",
      "destination 10.66.66.66"
    ]
  },
  "401": {
    "question_keywords": [
      "preferred ISP",
      "backup",
      "backup routes have disappeared"
    ],
    "correct_option_keywords": [
      "route-map SETAS out",
      "prepend 200"
    ]
  },
  "402": {
    "question_keywords": [
      "AAA login issue",
      "TACACS+",
      "failing back to the local account",
      "SSH"
    ],
    "correct_option_keywords": [
      "ip tacacs source-interface",
      "GigabitEthernet 1/1"
    ]
  },
  "403": {
    "question_keywords": [
      "spoke establishes a direct path to another spoke",
      "spoke must send traffic directly to the hub"
    ],
    "correct_option_keywords": [
      "nhrp map multicast",
      "nhrp redirect",
      "nhrp nhs multicast",
      "nhrp shortcut"
    ]
  },
  "404": {
    "question_keywords": [
      "summarization of the RIP routes into the OSPF domain on R5",
      "four different 172.16.0.0/24 networks on R4"
    ],
    "correct_option_keywords": [
      "R5",
      "summary-address"
    ]
  },
  "405": {
    "question_keywords": [
      "OSPF routes were learned in router C",
      "no OSPF routes were learned in router A",
      "router A to receive OSPF routes"
    ],
    "correct_option_keywords": [
      "redistribute ospf 10"
    ]
  },
  "406": {
    "question_keywords": [
      "redistribute",
      "summarized as a single route in OSPF",
      "LA router receives all the specific NewYork routes except the summary route"
    ],
    "correct_option_keywords": [
      "summary-address",
      "192.168.4.0 255.255.252.0"
    ]
  },
  "407": {
    "question_keywords": [
      "R1 cannot authenticate via TACACS",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "address ipv4 10.66.66.66",
      "key D@t@c3nter1TACACS"
    ]
  },
  "408": {
    "question_keywords": [
      "AS_PATH loop prevention",
      "IP/VPN Hub and Spoke",
      "circumvent"
    ],
    "correct_option_keywords": [
      "allowas-in",
      "as-override",
      "PE_Hub"
    ]
  },
  "409": {
    "question_keywords": [
      "Telnet",
      "SSH",
      "same credentials fail"
    ],
    "correct_option_keywords": [
      "login local",
      "VTY lines"
    ]
  },
  "410": {
    "question_keywords": [
      "override the normal routing behavior",
      "HTTP traffic",
      "10.100.100.100",
      "10.1.1.0/24",
      "nexthop of 10.2.2.2",
      "two hops away"
    ],
    "correct_option_keywords": [
      "set ip next-hop recursive",
      "10.2.2.2",
      "access-list 100 permit tcp 10.1.1.0 0.0.0.255 host 10.100.100.100 eq http"
    ]
  },
  "411": {
    "question_keywords": [
      "uRPF",
      "antispoofing attack",
      "IP spoofing attack"
    ],
    "correct_option_keywords": [
      "interface ethernet0/1",
      "ip verify unlcast reverse-path"
    ]
  },
  "413": {
    "question_keywords": [
      "IPv6 traffic filter",
      "interface flapped",
      "clearing the BGP session did not restore",
      "failed"
    ],
    "correct_option_keywords": [
      "ICMPv6",
      "permitted"
    ]
  },
  "414": {
    "question_keywords": [
      "reloading the router",
      "interface utilization graphs displayed inconsistencies",
      "router reload"
    ],
    "correct_option_keywords": [
      "SNMP interface index persistence"
    ]
  },
  "415": {
    "question_keywords": [
      "filters most of the network 10 pre\ufb01xes instead of allowing them",
      "resolves the Issue"
    ],
    "correct_option_keywords": [
      "permit 10.0.0.0/8 le 32"
    ]
  },
  "416": {
    "question_keywords": [
      "feasible successor",
      "10.1.3.2",
      "10.200.1.0/24"
    ],
    "correct_option_keywords": [
      "higher than 10.1.2.2",
      "lower than 10.1.1.2",
      "Increase path bandwidth"
    ]
  },
  "417": {
    "question_keywords": [
      "ASBRs do not have routes for each other",
      "resolves this issue"
    ],
    "correct_option_keywords": [
      "peer-group IBGP"
    ]
  },
  "418": {
    "question_keywords": [
      "HTTP and HTTPS traffic",
      "router CPU",
      "limited to 500 kbps",
      "exceeds this limit must be dropped",
      "CoPP failed to capture",
      "CPU load is getting higher"
    ],
    "correct_option_keywords": [
      "access-list 100 permit tcp host 172.16.1.99 any eq 80",
      "access-list 100 permit tcp host 172.16.1.99 any eq 443",
      "service-policy input PM-COPP"
    ]
  },
  "419": {
    "question_keywords": [
      "OSPF traffic",
      "did not see",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "permit ospf any any"
    ]
  },
  "420": {
    "question_keywords": [
      "OSPF process must differ",
      "adjacencies should come up instantly",
      "overlapping networks"
    ],
    "correct_option_keywords": [
      "f1/0",
      "vrf EA",
      "172.16.200.2"
    ]
  },
  "421": {
    "question_keywords": [
      "failed access",
      "contractors",
      "business application server",
      "Telnet or HTTP",
      "during the weekend"
    ],
    "correct_option_keywords": [
      "time-range Contractor",
      "periodic daily 8:00 to 16:30"
    ]
  },
  "422": {
    "question_keywords": [
      "VRF-Lite",
      "two separate VRFs",
      "10.1.1.0/24",
      "10.2.2.0/24"
    ],
    "correct_option_keywords": [
      "ip vrf forwarding 1",
      "ip vrf forwarding 2"
    ]
  },
  "423": {
    "question_keywords": [
      "cannot receive",
      "advertise R2 interfaces",
      "stub",
      "summary"
    ],
    "correct_option_keywords": [
      "stub summary connected"
    ]
  },
  "424": {
    "question_keywords": [
      "filter EIGRP updates",
      "block all 10.10.10.0/24 prefixes"
    ],
    "correct_option_keywords": [
      "ACL should be modified",
      "deny 10.10.10.0 0.0.0.255"
    ]
  },
  "425": {
    "question_keywords": [
      "optimize the segment size",
      "TCP packet",
      "DMVPN IPsec protected tunnel interface",
      "must not overwhelm the MTU",
      "improve the application performance"
    ],
    "correct_option_keywords": [
      "ip tcp adjust-mss",
      "1360",
      "crypto ipsec fragmentation before-encryption"
    ]
  },
  "426": {
    "question_keywords": [
      "traffic from spoke to hub is dropping",
      "R2 and R5 receive traffic from R1 in AS 65101",
      "R3 and R5 receive traffic from R4 in AS 65201"
    ],
    "correct_option_keywords": [
      "R5",
      "10.0.0.18",
      "update-source Loopback0"
    ]
  },
  "427": {
    "question_keywords": [
      "MPLS value",
      "IP prefix",
      "VPNv4 prefix"
    ],
    "correct_option_keywords": [
      "8-byte Route Distinguisher"
    ]
  },
  "428": {
    "question_keywords": [
      "removes the outermost label",
      "MPLS-tagged packet",
      "adjacent LER"
    ],
    "correct_option_keywords": [
      "PHP",
      "removes the outermost label"
    ]
  },
  "429": {
    "question_keywords": [
      "temporarily allow all prefixes",
      "without adjusting the existing access list"
    ],
    "correct_option_keywords": [
      "permit 20 statement",
      "removed"
    ]
  },
  "430": {
    "question_keywords": [
      "R3 cannot authenticate via TACACS"
    ],
    "correct_option_keywords": [
      "key C!scoTACACS"
    ]
  },
  "431": {
    "question_keywords": [
      "SNMP traffic is getting dropped frequently",
      "limited to 1000 kbps",
      "exceeds this limit must be dropped",
      "192.168.1.11"
    ],
    "correct_option_keywords": [
      "access-list 100 permit udp host 192.168.1.11 any eq 161",
      "police 1000000 conform-action transmit"
    ]
  },
  "432": {
    "question_keywords": [
      "Maths VRF",
      "OSPF in area 0"
    ],
    "correct_option_keywords": [
      "vrf Maths",
      "area 0"
    ]
  },
  "433": {
    "question_keywords": [
      "IPv6 DHCP Guard",
      "DHCP messages",
      "device role"
    ],
    "correct_option_keywords": [
      "All client messages",
      "switched",
      "device role"
    ]
  },
  "434": {
    "question_keywords": [
      "R4 has no active route",
      "bank ATM site",
      "bank server"
    ],
    "correct_option_keywords": [
      "EIGRP peering between R3 and R4",
      "fixed"
    ]
  },
  "435": {
    "question_keywords": [
      "some prefixes are not showing R2 as a successor"
    ],
    "correct_option_keywords": [
      "Configure the network statement on the neighbor"
    ]
  },
  "436": {
    "question_keywords": [
      "no notifications have been received",
      "Which configuration resolves the issue"
    ],
    "correct_option_keywords": [
      "ip verify unicast notification threshold 800"
    ]
  },
  "437": {
    "question_keywords": [
      "privileged EXEC level",
      "R1",
      "failed",
      "configuration resolves the issue"
    ],
    "correct_option_keywords": [
      "enable password",
      "Cisco@123"
    ]
  },
  "438": {
    "question_keywords": [
      "redistribute",
      "metric must be added",
      "external metric is fixed"
    ],
    "correct_option_keywords": [
      "set metric-type type-1",
      "R2"
    ]
  },
  "439": {
    "question_keywords": [
      "Telnet traffic did not pass through CoPP",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "ip access-list extended TELNET",
      "host 10.2.2.4 host 10.2.2.1",
      "host 10.1.1.3 host 10.1.1.1"
    ]
  },
  "440": {
    "question_keywords": [
      "matches traffic destined toward 10.10.10.0/24",
      "forwards it toward 10.1.1.1",
      "IP precedence set to 5",
      "All other traffic should be forwarded toward 10.1.1.2",
      "IP precedence set to 0"
    ],
    "correct_option_keywords": [
      "access-list 100 permit ip any 10.10.10.0 0.0.0.255",
      "set ip next-hop 10.1.1.1",
      "set ip precedence 5",
      "set ip next-hop 10.1.1.2",
      "set ip precedence 0"
    ]
  },
  "441": {
    "question_keywords": [
      "summary route",
      "Router_B routing table",
      "Router_A configuration",
      "advertising the summary route"
    ],
    "correct_option_keywords": [
      "interface loopback 0",
      "172.16.81.1",
      "ip summary-address eigrp 1 172.16.80.0 255.255.240.0"
    ]
  },
  "442": {
    "question_keywords": [
      "connectivity problem",
      "172.16.3.16/28",
      "192.168.5.16/28"
    ],
    "correct_option_keywords": [
      "redistribute rip",
      "metric 14"
    ]
  },
  "443": {
    "question_keywords": [
      "default route through ISP1 was not reinstated",
      "Ethernet0/1"
    ],
    "correct_option_keywords": [
      "static route",
      "8.8.8.8/32 destination",
      "203.0.113.1"
    ]
  },
  "444": {
    "question_keywords": [
      "IGP protocol",
      "BGP"
    ],
    "correct_option_keywords": [
      "Remove distance commands",
      "BGP"
    ]
  },
  "445": {
    "question_keywords": [
      "time synchronization problem",
      "security hardening"
    ],
    "correct_option_keywords": [
      "NTP service is disabled",
      "must be enabled"
    ]
  },
  "446": {
    "question_keywords": [
      "overlapping IP addresses",
      "Customer_a",
      "Customer_b",
      "CE1",
      "CE2"
    ],
    "correct_option_keywords": [
      "customer_a",
      "customer_b",
      "192.168.1.1 255.255.255.0",
      "192.168.1.2 255.255.255.0"
    ]
  },
  "447": {
    "question_keywords": [
      "disable the automatic logout",
      "console stopped responding",
      "Remote access through SSH still works"
    ],
    "correct_option_keywords": [
      "exec command",
      "line con 0"
    ]
  },
  "448": {
    "question_keywords": [
      "restrict PC1 from communicating with PC2",
      "allow all other traffic"
    ],
    "correct_option_keywords": [
      "deny ipv6 host 2001:DB8:0:10::3B host 2001:DB8:A:A::19 sequence 10"
    ]
  },
  "449": {
    "question_keywords": [
      "EIGRP equal-cost load balancing",
      "traffic not load balanced",
      "Link metrics from routerR2 to R3 and R4 are the same"
    ],
    "correct_option_keywords": [
      "120",
      "R3 E0/1"
    ]
  },
  "450": {
    "question_keywords": [
      "DMVPN phase 2",
      "connect the Reno and Detroit spokes"
    ],
    "correct_option_keywords": [
      "ip nhrp map multicast",
      "ip nhrp nhs 10.0.80.1"
    ]
  },
  "451": {
    "question_keywords": [
      "BFD",
      "advantage",
      "detect",
      "failures"
    ],
    "correct_option_keywords": [
      "reduction",
      "time",
      "detect",
      "Layer 2 switched neighbor failures"
    ]
  },
  "452": {
    "question_keywords": [
      "Binding Table Recovery feature",
      "recover the missing binding table entries"
    ],
    "correct_option_keywords": [
      "destination host",
      "DHCP server"
    ]
  },
  "453": {
    "question_keywords": [
      "installs route",
      "192.168.2.2/32"
    ],
    "correct_option_keywords": [
      "next-hop-self attribute",
      "peer router"
    ]
  },
  "454": {
    "question_keywords": [
      "AS 111 must not be used as a transit AS",
      "ISP-1 is getting ISP-2 routes from AS 111",
      "stops Customer AS from being used as a transit path on ISP-1"
    ],
    "correct_option_keywords": [
      "ip as-path access-list",
      "^111$"
    ]
  },
  "455": {
    "question_keywords": [
      "flapping route",
      "192.68.200_0"
    ],
    "correct_option_keywords": [
      "redistribute rip",
      "metric-type 1"
    ]
  },
  "456": {
    "question_keywords": [
      "packets in an MPLS LSP",
      "exit from the same interface",
      "same next hop",
      "same queuing policies"
    ],
    "correct_option_keywords": [
      "FEC",
      "map"
    ]
  },
  "457": {
    "question_keywords": [
      "ISE is down",
      "local database",
      "username and password combination of admin/cisco123",
      "not able to Telnet to R1 when ISE went down"
    ],
    "correct_option_keywords": [
      "local",
      "RAD-LOCAL group RAD-SERV"
    ]
  },
  "458": {
    "question_keywords": [
      "troubleshooting",
      "BGP peering",
      "unable to establish"
    ],
    "correct_option_keywords": [
      "traffic filtering rules",
      "blocking",
      "BGP communication"
    ]
  },
  "459": {
    "question_keywords": [
      "DMVPN hub-and-spoke topology",
      "point-to-point connectivity",
      "head office",
      "POPs"
    ],
    "correct_option_keywords": [
      "ip nhrp map multicast",
      "ip nhrp nhs"
    ]
  },
  "460": {
    "question_keywords": [
      "VRF blue",
      "VRF red",
      "OSPF",
      "10.10.10.0/28",
      "192.168.0.0/30"
    ],
    "correct_option_keywords": [
      "10.10.10.0 0.0.0.15",
      "192.168.0.0 0.0.0.3"
    ]
  },
  "461": {
    "question_keywords": [
      "Spoke 1 users",
      "bank transactions",
      "Center site",
      "Spoke 2 users cannot"
    ],
    "correct_option_keywords": [
      "Configure IPv6",
      "routers B and C interfaces"
    ]
  },
  "462": {
    "question_keywords": [
      "R2",
      "receiving routes",
      "originated outside AS300",
      "AS-Path ACL",
      "routes are still present"
    ],
    "correct_option_keywords": [
      "permit ^300$",
      "AS-Path ACL"
    ]
  },
  "463": {
    "question_keywords": [
      "registered IP addresses",
      "assigned locations",
      "implement IPv6"
    ],
    "correct_option_keywords": [
      "IPv6 Prefix Guard",
      "registered IP addresses",
      "assigned locations"
    ]
  },
  "464": {
    "question_keywords": [
      "RD",
      "VPNv4 addresses",
      "MPLS Layer 3 VPN",
      "reasons"
    ],
    "correct_option_keywords": [
      "unique",
      "RD is prepended",
      "make routes unique"
    ]
  },
  "465": {
    "question_keywords": [
      "FTP server rejected anonymous service",
      "required users to authenticate"
    ],
    "correct_option_keywords": [
      "ip ftp username",
      "ip ftp password",
      "username:password@192.0.2.40"
    ]
  },
  "466": {
    "question_keywords": [
      "VRFs",
      "network isolation",
      "routing table"
    ],
    "correct_option_keywords": [
      "Route-reflector-client",
      "VRF"
    ]
  },
  "467": {
    "question_keywords": [
      "filter EIGRP updates",
      "block all 10.10.10.0/24 prefixes",
      "one associated prefix"
    ],
    "correct_option_keywords": [
      "permit in the ACL",
      "deny 10.10.10.0 0.0.0.255"
    ]
  },
  "468": {
    "question_keywords": [
      "log in to R1",
      "R3 loopback address",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "Remove the IPv6 traffic filter",
      "blocking the Telnet"
    ]
  },
  "469": {
    "question_keywords": [
      "unequal cost load balancing",
      "Site1",
      "Site2",
      "Site3"
    ],
    "correct_option_keywords": [
      "Site1router",
      "eigrp 100",
      "variance 3"
    ]
  },
  "470": {
    "question_keywords": [
      "function of BFD",
      "failure detection"
    ],
    "correct_option_keywords": [
      "uniform failure detection",
      "regardless of media type"
    ]
  },
  "471": {
    "question_keywords": [
      "override the normal routing behavior",
      "Telnet traffic",
      "destined to 10.10.10.10",
      "from 10.1.1.0/24",
      "via a next hop of 10.4.4.4"
    ],
    "correct_option_keywords": [
      "route-map",
      "set ip next-hop recursive",
      "10.4.4.4"
    ]
  },
  "472": {
    "question_keywords": [
      ".pack NBAR2 file",
      "TFTP",
      "Gi0/0 interface",
      "access-list extended WAN",
      "deny udp any any"
    ],
    "correct_option_keywords": [
      "permit the entire UDP destination port range"
    ]
  },
  "473": {
    "question_keywords": [
      "passive FTP",
      "file transfers fail"
    ],
    "correct_option_keywords": [
      "ports higher than 1023"
    ]
  },
  "474": {
    "question_keywords": [
      "TACACS authentication",
      "local enable password",
      "instead"
    ],
    "correct_option_keywords": [
      "group tacacs+",
      "local enable"
    ]
  },
  "475": {
    "question_keywords": [
      "select the path from 10.77.255.57",
      "best path instead of current best path"
    ],
    "correct_option_keywords": [
      "AS_PATH prepend",
      "current best path"
    ]
  },
  "476": {
    "question_keywords": [
      "block ping from user 3 to the App Server only",
      "inbound standard access list is applied to R1 interface G0/0",
      "user 3 cannot even ping user 9 anymore",
      "outgoing direction"
    ],
    "correct_option_keywords": [
      "SW1 interface G1/10"
    ]
  },
  "477": {
    "question_keywords": [
      "Site-A: must be restricted to access to any users at Site-B or Site-C",
      "Site-B and Site-C: must be able to communicate between sites and share routes using OSPF",
      "ip vrf forwarding Site-A",
      "ip vrf forwarding SharedSites"
    ],
    "correct_option_keywords": [
      "router ospf 10 vrf Site-A",
      "router ospf 20 vrf SharedSites"
    ]
  },
  "478": {
    "question_keywords": [
      "Science VRF",
      "EIGRP AS 111"
    ],
    "correct_option_keywords": [
      "vrf Science",
      "autonomous-system 111"
    ]
  },
  "479": {
    "question_keywords": [
      "PBR on R1",
      "reach to 10.2.2.0/24",
      "primary path via R3 AS64513",
      "backup route through default route via R2 AS64513"
    ],
    "correct_option_keywords": [
      "set ip next-hop recursive",
      "10.3.3.1"
    ]
  },
  "480": {
    "question_keywords": [
      "stop using a particular default route",
      "DNS server 8.8.8.8 is not reachable",
      "default route still works"
    ],
    "correct_option_keywords": [
      "separate IP SLA probe",
      "track object",
      "static route"
    ]
  },
  "481": {
    "question_keywords": [
      "LDP",
      "label",
      "binding"
    ],
    "correct_option_keywords": [
      "destination prefix",
      "label"
    ]
  },
  "482": {
    "question_keywords": [
      "mutually redistribute",
      "summarized as a single route",
      "longest summary mask",
      "New York router receives all the specific LA routes but the summary route"
    ],
    "correct_option_keywords": [
      "interface E 0/1",
      "172.16.8.0 255.255.252.0"
    ]
  },
  "483": {
    "question_keywords": [
      "DMVPN Phase 3",
      "hub-and-spoke topology",
      "spoke-to-spoke tunnel",
      "NHRP configuration"
    ],
    "correct_option_keywords": [
      "ip nhrp redirect",
      "ip nhrp shortcut"
    ]
  },
  "484": {
    "question_keywords": [
      "allow anyone to Telnet except",
      "R2 Loopback0",
      "R1 Loopback4"
    ],
    "correct_option_keywords": [
      "deny tcp host",
      "1001:ABC:2011:7::1",
      "400A:0:400C::1"
    ]
  },
  "485": {
    "question_keywords": [
      "R1 does not hold enough log messages",
      "identify the root cause",
      "troubleshooting"
    ],
    "correct_option_keywords": [
      "logging buffered",
      "16000",
      "informational"
    ]
  },
  "486": {
    "question_keywords": [
      "static neighbor relationship",
      "end users cannot communicate"
    ],
    "correct_option_keywords": [
      "no ip split-horizon eigrp 10"
    ]
  },
  "487": {
    "question_keywords": [
      "Label Switch Router",
      "operations"
    ],
    "correct_option_keywords": [
      "penultimate hop popping",
      "reads the labels and forwards the packet based on the labels"
    ]
  },
  "489": {
    "question_keywords": [
      "cannot remote access",
      "Telnet",
      "S1"
    ],
    "correct_option_keywords": [
      "exec command",
      "R3"
    ]
  },
  "490": {
    "question_keywords": [
      "LDP",
      "LSR",
      "label bindings",
      "hop-by-hop forwarding"
    ],
    "correct_option_keywords": [
      "database of label bindings",
      "hop-by-hop forwarding"
    ]
  },
  "491": {
    "question_keywords": [
      "reject traffic",
      "originated from an address",
      "not stored in the device binding table"
    ],
    "correct_option_keywords": [
      "reject traffic",
      "device binding table"
    ]
  },
  "492": {
    "question_keywords": [
      "primary link went down",
      "creates a loop"
    ],
    "correct_option_keywords": [
      "eigrp stub",
      "R3"
    ]
  },
  "493": {
    "question_keywords": [
      "reestablishes connectivity",
      "172.16.1.16/28",
      "172.16.2.16/28"
    ],
    "correct_option_keywords": [
      "route-map ENT permit 20"
    ]
  },
  "494": {
    "question_keywords": [
      "collector stopped receiving flow information",
      "NetFlow is configured"
    ],
    "correct_option_keywords": [
      "Configure an IP address",
      "loopback2 interface",
      "source"
    ]
  },
  "495": {
    "question_keywords": [
      "R1 should receive",
      "10.16.2.0/24",
      "from R2"
    ],
    "correct_option_keywords": [
      "Modify prefix-list seq 5 on R2",
      "permit 10.16.0.0/22"
    ]
  },
  "496": {
    "question_keywords": [
      "non-area 0 routers",
      "more specific routes",
      "area 0"
    ],
    "correct_option_keywords": [
      "area range",
      "ABRs"
    ]
  },
  "497": {
    "question_keywords": [
      "OSPF",
      "EIGRP",
      "choose EIGRP"
    ],
    "correct_option_keywords": [
      "OSPF administrative distance to 200"
    ]
  },
  "498": {
    "question_keywords": [
      "hub-and-spoke topology",
      "PE routers",
      "Layer 3 MPLS VPN network"
    ],
    "correct_option_keywords": [
      "different RTs",
      "import and export",
      "M-BGP prefixes"
    ]
  },
  "499": {
    "question_keywords": [
      "MPLS Layer 3 VPN",
      "function",
      "PE device",
      "labeled packet",
      "CE device"
    ],
    "correct_option_keywords": [
      "pops the label",
      "forward the packet",
      "correct CE device"
    ]
  },
  "500": {
    "question_keywords": [
      "client received IPv6 address",
      "show command does not show IPv6 DHCP bindings on the server"
    ],
    "correct_option_keywords": [
      "authorized DHCP servers",
      "rogue DHCP server"
    ]
  },
  "501": {
    "question_keywords": [
      "operation level 1 team",
      "10 engineers",
      "at least three at a time",
      "log in",
      "HTTP"
    ],
    "correct_option_keywords": [
      "ip http authentication aaa",
      "ip http max-connections 3"
    ]
  },
  "502": {
    "question_keywords": [
      "exchange routes",
      "OSPF",
      "Telnet traffic must be blocked",
      "R2 Lo0 to R1 Lo2"
    ],
    "correct_option_keywords": [
      "ipv6 traffic-filter",
      "DENY_TELNET_Lo2 in",
      "deny tcp host 100B:1:310B::1 host 200A:0:210C::1 eq telnet"
    ]
  },
  "503": {
    "question_keywords": [
      "OSPF Adjacency Failed",
      "investigating",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "wrong MTU",
      "Match interface MTU"
    ]
  },
  "504": {
    "question_keywords": [
      "Layer 3 VPN",
      "different customers",
      "connect to the same MPLS network",
      "overlapping IP ranges"
    ],
    "correct_option_keywords": [
      "RD",
      "overlapping IP ranges"
    ]
  },
  "505": {
    "question_keywords": [
      "advertise LAN network 192.168.1.0",
      "router B",
      "not in the routing table"
    ],
    "correct_option_keywords": [
      "ospfv3 1 ipv4 area 1",
      "router ospfv3 1",
      "address-family ipv4 unicast"
    ]
  },
  "506": {
    "question_keywords": [
      "exchange IPv6 routes",
      "IPv4 neighbor-relationship is working fine",
      "router R2"
    ],
    "correct_option_keywords": [
      "ipv6 unicast-routing",
      "address-family ipv6",
      "neighbor ... activate"
    ]
  },
  "507": {
    "question_keywords": [
      "OSPF adjacency",
      "restores"
    ],
    "correct_option_keywords": [
      "MTU",
      "1500"
    ]
  },
  "508": {
    "question_keywords": [
      "prefer ISP-A",
      "failover to ISP-B",
      "load balancing"
    ],
    "correct_option_keywords": [
      "static routes",
      "admin distance"
    ]
  },
  "509": {
    "question_keywords": [
      "UDP jitter problem",
      "R4",
      "R3"
    ],
    "correct_option_keywords": [
      "ip sla 6500",
      "R3 e0/1 IP address"
    ]
  },
  "510": {
    "question_keywords": [
      "copy running-config to TFTP server",
      "Error opening tftp"
    ],
    "correct_option_keywords": [
      "Add a route",
      "TFTP server"
    ]
  },
  "511": {
    "question_keywords": [
      "redistributing",
      "172.16.10.0/24",
      "filtered"
    ],
    "correct_option_keywords": [
      "Remove",
      "sequence 20"
    ]
  },
  "512": {
    "question_keywords": [
      "VLAN 10 users",
      "cannot get dynamic IP addresses"
    ],
    "correct_option_keywords": [
      "IP helper feature",
      "Interface GigabitEthernet 0/2",
      "router R2"
    ]
  },
  "514": {
    "question_keywords": [
      "newly installed router",
      "LDP session",
      "not directly connected",
      "UDP protocol"
    ],
    "correct_option_keywords": [
      "extended discovery message",
      "UDP protocol"
    ]
  },
  "515": {
    "question_keywords": [
      "OSPF Adjacency Failed",
      "GigabitEthernet2"
    ],
    "correct_option_keywords": [
      "key chain",
      "GigabitEthernet2",
      "key-string"
    ]
  },
  "516": {
    "question_keywords": [
      "IP phone",
      "does not register",
      "call manager",
      "ip dhcp pool VLAN200_USER_VOICE"
    ],
    "correct_option_keywords": [
      "option 150",
      "10.221.10.10"
    ]
  },
  "517": {
    "question_keywords": [
      "advantage",
      "MPLS Layer 3 VPN deployment"
    ],
    "correct_option_keywords": [
      "QoS provides performance",
      "support for a best-effort service level"
    ]
  },
  "518": {
    "question_keywords": [
      "LDP",
      "forwarding path",
      "MPLS cloud"
    ],
    "correct_option_keywords": [
      "LSP"
    ]
  },
  "519": {
    "question_keywords": [
      "monitoring device cannot forward multicast packets",
      "R3 as the DR",
      "R3-R5 segment"
    ],
    "correct_option_keywords": [
      "ip ospf priority 100",
      "network non-broadcast"
    ]
  },
  "520": {
    "question_keywords": [
      "EIGRP neighbor adjacency",
      "hub and spoke"
    ],
    "correct_option_keywords": [
      "neighbor",
      "hub router"
    ]
  },
  "521": {
    "question_keywords": [
      "failure detection time",
      "BFD"
    ],
    "correct_option_keywords": [
      "less than a second"
    ]
  },
  "522": {
    "question_keywords": [
      "lost its directly connected EIGRP peer",
      "172.16.33.2",
      "SW1",
      "authentication mode changed"
    ],
    "correct_option_keywords": [
      "GigabitEthernet 2.10",
      "authentication mode eigrp 88 md5",
      "key-chain eigrp 88 EIGRP"
    ]
  },
  "523": {
    "question_keywords": [
      "route filtering issue",
      "redistribute all routes except 172.16.2.48/28"
    ],
    "correct_option_keywords": [
      "route-map CCNP deny 10",
      "match route-type external",
      "route-map CCNP permit 20"
    ]
  },
  "525": {
    "question_keywords": [
      "penultimate hop popping",
      "egress LSR",
      "CE"
    ],
    "correct_option_keywords": [
      "last P router",
      "pops off",
      "transport label"
    ]
  },
  "526": {
    "question_keywords": [
      "optimize MPLS infrastructure",
      "bandwidth protection services",
      "slow response"
    ],
    "correct_option_keywords": [
      "Fast-Reroute",
      "IP LFA"
    ]
  },
  "527": {
    "question_keywords": [
      "transfer",
      "IOS file",
      "error"
    ],
    "correct_option_keywords": [
      "permit udp",
      "permit tcp"
    ]
  },
  "528": {
    "question_keywords": [
      "Spoke routers do not learn about each other's routes",
      "DMVPN Phase2"
    ],
    "correct_option_keywords": [
      "Disable EIGRP split horizon",
      "Tunnel0 interface",
      "hub router"
    ]
  },
  "529": {
    "question_keywords": [
      "R7 must not be elected as a DR",
      "adjacency between R4 and R7 failed to form"
    ],
    "correct_option_keywords": [
      "priority 0"
    ]
  },
  "530": {
    "question_keywords": [
      "stops messages on the console",
      "still denying Telnet"
    ],
    "correct_option_keywords": [
      "Remove log-input keyword"
    ]
  },
  "531": {
    "question_keywords": [
      "MPLS-based VPN",
      "major components"
    ],
    "correct_option_keywords": [
      "MP-BGP peering of VPN community PE devices",
      "VPN route distinguisher",
      "VPN route target communities"
    ]
  },
  "532": {
    "question_keywords": [
      "not forming an adjacency",
      "point to point interface"
    ],
    "correct_option_keywords": [
      "area types",
      "configured the same"
    ]
  },
  "533": {
    "question_keywords": [
      "LDP neighbors",
      "discovered"
    ],
    "correct_option_keywords": [
      "Multicast hellos",
      "224.0.0.2"
    ]
  },
  "534": {
    "question_keywords": [
      "R101",
      "R201",
      "control connection on UDP port 1967"
    ],
    "correct_option_keywords": [
      "ip sla responder"
    ]
  },
  "535": {
    "question_keywords": [
      "R2",
      "IP address",
      "DHCP server"
    ],
    "correct_option_keywords": [
      "ip access-list extended R2WAN",
      "permit udp",
      "eq 67"
    ]
  },
  "536": {
    "question_keywords": [
      "downstream unsolicited distribution method",
      "MPLS"
    ],
    "correct_option_keywords": [
      "advertises labels",
      "without peer request"
    ]
  },
  "537": {
    "question_keywords": [
      "cannot browse the internet",
      "Saturdays",
      "afternoon"
    ],
    "correct_option_keywords": [
      "periodic weekend 17:00 to 23:59"
    ]
  },
  "538": {
    "question_keywords": [
      "user login",
      "authentication database",
      "no one can log into the router"
    ],
    "correct_option_keywords": [
      "aaa authentication login default local"
    ]
  },
  "539": {
    "question_keywords": [
      "filtering toward R3",
      "130.130.130.0/24 route"
    ],
    "correct_option_keywords": [
      "IGP synchronization",
      "disabled"
    ]
  },
  "540": {
    "question_keywords": [
      "R2 can reach Loopback222",
      "R1, SW1, and PC1 cannot communicate with 172.16.222.254"
    ],
    "correct_option_keywords": [
      "redistribute static",
      "R2"
    ]
  },
  "541": {
    "question_keywords": [
      "Traffic from R3 to the central site does not use alternate paths when R3 cannot reach 10.10.10.2",
      "Traffic on R3 destined to R4 takes an alternate route via 10.10.10.6 when 10.10.10.4 is not accessible from R3",
      "switches traffic destined to 10.10.10.2 from R3 on the alternate path"
    ],
    "correct_option_keywords": [
      "ip route",
      "track 20",
      "10.10.10.2"
    ]
  },
  "542": {
    "question_keywords": [
      "slow applications"
    ],
    "correct_option_keywords": [
      "load balancing"
    ]
  },
  "543": {
    "question_keywords": [
      "limitation",
      "IPv6 RA Guard"
    ],
    "correct_option_keywords": [
      "does not offer protection",
      "tunneled"
    ]
  },
  "544": {
    "question_keywords": [
      "LDP router ID",
      "MPLS network",
      "router ID"
    ],
    "correct_option_keywords": [
      "loopback",
      "highest IP address",
      "router ID"
    ]
  },
  "545": {
    "question_keywords": [
      "loopback0",
      "reachability"
    ],
    "correct_option_keywords": [
      "interface loopback0",
      "ip ospf network point-to-point"
    ]
  },
  "546": {
    "question_keywords": [
      "app servers are unreachable",
      "resolve the issue"
    ],
    "correct_option_keywords": [
      "no auto-summary",
      "both routers"
    ]
  },
  "547": {
    "question_keywords": [
      "High input/output error",
      "interface"
    ],
    "correct_option_keywords": [
      "faulty cable"
    ]
  },
  "548": {
    "question_keywords": [
      "DENVER router",
      "10.40.1.1",
      "10.40.1.2",
      "BADAUTH"
    ],
    "correct_option_keywords": [
      "BGP authentication",
      "10.40.1.1"
    ]
  },
  "549": {
    "question_keywords": [
      "intermittent connectivity problems",
      "cannot obtain IP addresses"
    ],
    "correct_option_keywords": [
      "ip helper-address",
      "ip dhcp excluded-address",
      "ip dhcp pool"
    ]
  },
  "550": {
    "question_keywords": [
      "IPv6 ND inspection",
      "function",
      "stateless autoconfiguration addresses",
      "Layer 2 neighbor tables"
    ],
    "correct_option_keywords": [
      "learns and secures bindings",
      "stateless autoconfiguration addresses",
      "Layer 2 neighbor tables"
    ]
  },
  "551": {
    "question_keywords": [
      "default route",
      "withdrawn",
      "cannot ping"
    ],
    "correct_option_keywords": [
      "ip sla schedule",
      "track",
      "reachability"
    ]
  },
  "552": {
    "question_keywords": [
      "uRPF",
      "asymmetrically routed packets are also blocked"
    ],
    "correct_option_keywords": [
      "reachable-via any"
    ]
  },
  "553": {
    "question_keywords": [
      "MPLS L3VPN topology",
      "devices operate"
    ],
    "correct_option_keywords": [
      "P routers",
      "connectivity",
      "PE devices",
      "MPLS switching"
    ]
  },
  "554": {
    "question_keywords": [
      "traffic is not matching",
      "unexpected behavior"
    ],
    "correct_option_keywords": [
      "match-any"
    ]
  },
  "555": {
    "question_keywords": [
      "PE router",
      "forward the packet",
      "correct customer"
    ],
    "correct_option_keywords": [
      "VNI",
      "forward",
      "customer"
    ]
  },
  "556": {
    "question_keywords": [
      "EIGRP stub router",
      "advertises only connected and summary routes"
    ],
    "correct_option_keywords": [
      "eigrp stub",
      "connected",
      "summary"
    ]
  },
  "557": {
    "question_keywords": [
      "IP SLA issue",
      "R1 to the server"
    ],
    "correct_option_keywords": [
      "ip sla responder"
    ]
  },
  "558": {
    "question_keywords": [
      "R201",
      "RTT",
      "IP SLA",
      "port 16384",
      "voice traffic"
    ],
    "correct_option_keywords": [
      "ip sla responder",
      "udp-echo",
      "port 16384"
    ]
  },
  "559": {
    "question_keywords": [
      "uRPF",
      "gi0/3",
      "source address of 172.16.3.251 was dropped"
    ],
    "correct_option_keywords": [
      "uRPF loose mode"
    ]
  },
  "560": {
    "question_keywords": [
      "area 3",
      "type 1, 2, and 3 LSAs",
      "connectivity issues",
      "R6"
    ],
    "correct_option_keywords": [
      "type 4",
      "type 5"
    ]
  },
  "561": {
    "question_keywords": [
      "PE router",
      "advertise routes",
      "CE router",
      "without redistribution or static",
      "removing the RD tag"
    ],
    "correct_option_keywords": [
      "BGP IPv4"
    ]
  },
  "562": {
    "question_keywords": [
      "NetFlow data is not visible",
      "NetFlow collector"
    ],
    "correct_option_keywords": [
      "different interface",
      "send the records"
    ]
  },
  "563": {
    "question_keywords": [
      "routing loop",
      "172.16.3.0/16",
      "OSPF domain"
    ],
    "correct_option_keywords": [
      "no auto-summary"
    ]
  },
  "564": {
    "question_keywords": [
      "connectivity problem",
      "high during peak business hours"
    ],
    "correct_option_keywords": [
      "Increase the available bandwidth"
    ]
  },
  "565": {
    "question_keywords": [
      "R2 cannot access",
      "192.168.7.0/24",
      "192.168.15.0/24"
    ],
    "correct_option_keywords": [
      "redistribute",
      "EIGRP",
      "OSPF"
    ]
  },
  "566": {
    "question_keywords": [
      "R1 should be primary",
      "DR site should only be used if router R1 or its uplink fails"
    ],
    "correct_option_keywords": [
      "OSPF 100",
      "Area - 0"
    ]
  },
  "567": {
    "question_keywords": [
      "control plane process",
      "MPLS forwarding state",
      "secondary RP takes over",
      "failed primary RP"
    ],
    "correct_option_keywords": [
      "LSP",
      "NSF",
      "recover"
    ]
  },
  "568": {
    "question_keywords": [
      "MPLS PHP label operation"
    ],
    "correct_option_keywords": [
      "Downstream",
      "remove the label"
    ]
  },
  "569": {
    "question_keywords": [
      "except from host 192.168.1.1",
      "critical IP precedence"
    ],
    "correct_option_keywords": [
      "access-list 1 permit 192.168.1.0 0.0.0.255",
      "access-list 1 deny 192.168.1.1"
    ]
  },
  "570": {
    "question_keywords": [
      "EIGRP adjacency",
      "not working as expected",
      "resolve the issue"
    ],
    "correct_option_keywords": [
      "AS(1)",
      "AS(100)"
    ]
  },
  "571": {
    "question_keywords": [
      "DHCP snooping",
      "cannot receive IP addresses"
    ],
    "correct_option_keywords": [
      "no ip dhcp snooping information option"
    ]
  },
  "572": {
    "question_keywords": [
      "Drag and drop",
      "terminology",
      "definitions"
    ],
    "correct_option_keywords": [
      "label mapping information"
    ]
  },
  "573": {
    "question_keywords": [
      "routers",
      "MPLS",
      "label distribution methods"
    ],
    "correct_option_keywords": [
      "Downstream unsolicited",
      "Downstream on demand"
    ]
  },
  "574": {
    "question_keywords": [
      "R3 sees only type 1 and 2 LSAs",
      "area 1"
    ],
    "correct_option_keywords": [
      "stub",
      "no-summary"
    ]
  },
  "575": {
    "question_keywords": [
      "OSPF neighbor relationship",
      "stuck in EXCHANGE/EXSTART state",
      "ping from R2 to R3 and vice versa"
    ],
    "correct_option_keywords": [
      "Match MTU",
      "ignore MTU"
    ]
  },
  "576": {
    "question_keywords": [
      "web connectivity problems",
      "server (10.1.1.10)",
      "IP SLA configuration",
      "failure details",
      "network"
    ],
    "correct_option_keywords": [
      "icmp-echo",
      "10.1.1.10",
      "verify"
    ]
  },
  "577": {
    "question_keywords": [
      "hosts cannot receive dynamic IP addresses",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "ip helper command",
      "R2 router"
    ]
  },
  "578": {
    "question_keywords": [
      "filters",
      "IPv6 traffic",
      "Layer 2",
      "untrusted ports"
    ],
    "correct_option_keywords": [
      "IPv6 Source Guard",
      "filters",
      "untrusted ports"
    ]
  },
  "579": {
    "question_keywords": [
      "EIGRP peering was lost",
      "configuration resolves the issue"
    ],
    "correct_option_keywords": [
      "network",
      "EIGRP"
    ]
  },
  "580": {
    "question_keywords": [
      "troubleshoot",
      "redistribution",
      "172.16.2.48 / 28",
      "OSPF domain"
    ],
    "correct_option_keywords": [
      "redistribute eigrp 100 subnets route-map CCNP",
      "match tag 200"
    ]
  },
  "581": {
    "question_keywords": [
      "aaa authentication",
      "router R1",
      "user's login"
    ],
    "correct_option_keywords": [
      "local"
    ]
  },
  "582": {
    "question_keywords": [
      "obtain an IP address automatically",
      "169.254.0.0 subnet",
      "no DHCPDISCOVER message"
    ],
    "correct_option_keywords": [
      "ip helper-address",
      "router",
      "forward DHCP messages"
    ]
  },
  "583": {
    "question_keywords": [
      "secured with MD-5 authentication",
      "mpls cloud",
      "prevent hackers",
      "introducing bogus routers"
    ],
    "correct_option_keywords": [
      "LDP",
      "authentication",
      "bogus routers"
    ]
  },
  "584": {
    "question_keywords": [
      "restricted remote access",
      "single user",
      "IPv6 access list",
      "investigate who else is trying to access",
      "permit host entry with log statement",
      "could not find any details"
    ],
    "correct_option_keywords": [
      "line vty",
      "ipv6 access-class in"
    ]
  },
  "585": {
    "question_keywords": [
      "privileged EXEC level",
      "R1",
      "failed"
    ],
    "correct_option_keywords": [
      "enable password"
    ]
  },
  "586": {
    "question_keywords": [
      "BGP-learned networks are repeatedly withdrawn",
      "resolve the issue"
    ],
    "correct_option_keywords": [
      "route-map",
      "neighbor",
      "route-map ... in"
    ]
  },
  "587": {
    "question_keywords": [
      "10.1.7.6/32",
      "BGP table"
    ],
    "correct_option_keywords": [
      "network",
      "mask",
      "255.255.255.255"
    ]
  },
  "588": {
    "question_keywords": [
      "translates the customer routing information",
      "VPNv4 routes",
      "exchange VPNv4 routes",
      "MP-BGP"
    ],
    "correct_option_keywords": [
      "PE",
      "VPNv4 routes"
    ]
  },
  "589": {
    "question_keywords": [
      "IPv6 DHCP server",
      "clients are not getting the IPv6 address lease"
    ],
    "correct_option_keywords": [
      "ipv6 dhcp server",
      "MY_POOL",
      "R1"
    ]
  },
  "590": {
    "question_keywords": [
      "router reloaded",
      "different traffic patterns",
      "logical and physical interfaces"
    ],
    "correct_option_keywords": [
      "snmp ifindex persist",
      "physical interfaces"
    ]
  },
  "591": {
    "question_keywords": [
      "authentication is not working as desired",
      "user drops into user-exec mode"
    ],
    "correct_option_keywords": [
      "aaa new-model",
      "aaa authentication login default local",
      "aaa authorization exec default local"
    ]
  },
  "592": {
    "question_keywords": [
      "cannot establish",
      "neighbor relationship"
    ],
    "correct_option_keywords": [
      "mtu ignore"
    ]
  },
  "593": {
    "question_keywords": [
      "SNMP server",
      "172.16.4.4",
      "cannot access",
      "router A"
    ],
    "correct_option_keywords": [
      "permit host 172.16.4.4"
    ]
  },
  "594": {
    "question_keywords": [
      "traffic destined to the application server is not monitored"
    ],
    "correct_option_keywords": [
      "ip flow egress",
      "GigabitEthernet 2/0"
    ]
  },
  "595": {
    "question_keywords": [
      "RTs",
      "single customer full-mesh VPN",
      "MPLS Layer 3 network"
    ],
    "correct_option_keywords": [
      "RT",
      "globally identical",
      "same VPN"
    ]
  },
  "596": {
    "question_keywords": [
      "router",
      "VPN label",
      "incoming packets",
      "CE routing"
    ],
    "correct_option_keywords": [
      "PE router",
      "VPN label"
    ]
  },
  "597": {
    "question_keywords": [
      "initiating LDP session negotiation",
      "LDP TCP connection establishment",
      "two LDP neighbors"
    ],
    "correct_option_keywords": [
      "higher IP address"
    ]
  },
  "598": {
    "question_keywords": [
      "troubleshoot an issue",
      "communication from router R2 to the TACACS server"
    ],
    "correct_option_keywords": [
      "R2(config)",
      "tacacs server advrt",
      "key xyz123"
    ]
  },
  "599": {
    "question_keywords": [
      "lost remote access",
      "console to access",
      "continuous logs",
      "limits the number of log messages",
      "critical and higher severity level"
    ],
    "correct_option_keywords": [
      "logging console 2"
    ]
  },
  "600": {
    "question_keywords": [
      "BFD",
      "benefits",
      "failure detection"
    ],
    "correct_option_keywords": [
      "forwarding path failure detection",
      "subsecond failure detection"
    ]
  },
  "601": {
    "question_keywords": [
      "10.1.1.0/31",
      "DWDM circuit",
      "R1",
      "VRFs"
    ],
    "correct_option_keywords": [
      "Ethernet0/0",
      "dot1Q",
      "10.1.1.0 255.255.255.254"
    ]
  },
  "602": {
    "question_keywords": [
      "Customer B",
      "not receive any routes",
      "originated outside the AS 100"
    ],
    "correct_option_keywords": [
      "permit",
      "^100$"
    ]
  },
  "603": {
    "question_keywords": [
      "10.10.10.0/24",
      "10.10.20.0/24",
      "direct link"
    ],
    "correct_option_keywords": [
      "area 1"
    ]
  },
  "604": {
    "question_keywords": [
      "cannot reach server 1",
      "R2",
      "R4"
    ],
    "correct_option_keywords": [
      "R2",
      "R4",
      "SERVER1"
    ]
  },
  "605": {
    "question_keywords": [
      "LDP operate",
      "MPLS network",
      "LDP discovery messages",
      "LDP session"
    ],
    "correct_option_keywords": [
      "establish the LDP session",
      "LDP neighbors",
      "exchanging messages"
    ]
  },
  "606": {
    "question_keywords": [
      "R1",
      "BGP routes",
      "i"
    ],
    "correct_option_keywords": [
      "route-map",
      "set origin igp"
    ]
  },
  "607": {
    "question_keywords": [
      "site X",
      "site Y",
      "intermittent disconnection",
      "email application traffic"
    ],
    "correct_option_keywords": [
      "update-source loopback 0"
    ]
  },
  "608": {
    "question_keywords": [
      "OSPF route",
      "EIGRP routing table",
      "route redistribution",
      "resolve the issue"
    ],
    "correct_option_keywords": [
      "passive-interface FastEthernet 1/0",
      "EIGRP 100"
    ]
  },
  "609": {
    "question_keywords": [
      "DHCP relay",
      "VLAN100",
      "TFTP requests",
      "server CPU exceeded"
    ],
    "correct_option_keywords": [
      "no ip forward-protocol udp 69",
      "VLAN100"
    ]
  },
  "610": {
    "question_keywords": [
      "Host1 must use the FTP1 fileserver",
      "Host2 must use the FTP2 fileserver"
    ],
    "correct_option_keywords": [
      "10.10.10.11",
      "10.10.200.22"
    ]
  },
  "611": {
    "question_keywords": [
      "192.168.2.0/24",
      "172.16.2.32/28",
      "cannot connect"
    ],
    "correct_option_keywords": [
      "redistribute rip",
      "default-metric"
    ]
  },
  "612": {
    "question_keywords": [
      "area 5",
      "cannot access",
      "R2",
      "R8"
    ],
    "correct_option_keywords": [
      "virtual-link",
      "area 5",
      "area 7"
    ]
  },
  "613": {
    "question_keywords": [
      "all DNS servers are unreachable",
      "failover to ISP2 even if some of the DNS servers are still reachable"
    ],
    "correct_option_keywords": [
      "or operator"
    ]
  },
  "614": {
    "question_keywords": [
      "route reflector configuration",
      "reflected routes are missing"
    ],
    "correct_option_keywords": [
      "route-reflector-client"
    ]
  },
  "615": {
    "question_keywords": [
      "updates the configuration",
      "unexpected behavior",
      "completely replacing the startupconfiguration"
    ],
    "correct_option_keywords": [
      "configure replace",
      "startup-config"
    ]
  },
  "616": {
    "question_keywords": [
      "voice quality issue",
      "traffic is not arriving in the correct format",
      "collector"
    ],
    "correct_option_keywords": [
      "netflow-v9"
    ]
  },
  "617": {
    "question_keywords": [
      "OSPF adjacency issue",
      "directly connected routers"
    ],
    "correct_option_keywords": [
      "ip address 10.10.10.9",
      "255.255.255.252"
    ]
  },
  "618": {
    "question_keywords": [
      "cannot access the command line of any remote device",
      "security hardening"
    ],
    "correct_option_keywords": [
      "modify the AAA policy",
      "allow the user to run the telnet and SSH commands"
    ]
  },
  "619": {
    "question_keywords": [
      "OSPF adjacency is broken",
      "router B"
    ],
    "correct_option_keywords": [
      "172.16.192.2",
      "255.255.192.0",
      "broadcast"
    ]
  },
  "620": {
    "question_keywords": [
      "ICMP packet is lost",
      "negligible",
      "persistent for a longer duration",
      "traffic must be rerouted"
    ],
    "correct_option_keywords": [
      "delay timer",
      "track 1"
    ]
  },
  "621": {
    "question_keywords": [
      "DCI link went down",
      "Area-0 connectivity",
      "without intervention from the ISP"
    ],
    "correct_option_keywords": [
      "virtual link",
      "Area-110"
    ]
  },
  "622": {
    "question_keywords": [
      "static route",
      "network 10.100.13.0/24",
      "not in the routing table of R2"
    ],
    "correct_option_keywords": [
      "redistribution command",
      "subnets"
    ]
  },
  "623": {
    "question_keywords": [
      "community value is not found",
      "How must this issue be resolved"
    ],
    "correct_option_keywords": [
      "R2 is not sending",
      "configure R2 to send community"
    ]
  },
  "624": {
    "question_keywords": [
      "route distinguishers",
      "MPLS network",
      "role"
    ],
    "correct_option_keywords": [
      "unique VPNv4 address",
      "across the MPLS network"
    ]
  },
  "625": {
    "question_keywords": [
      "receives an IP address only from the 169.254.0.0 subnet",
      "no DHCPDISCOVER message from the MAC address of the PC"
    ],
    "correct_option_keywords": [
      "ip helper-address",
      "forward DHCP messages"
    ]
  },
  "626": {
    "question_keywords": [
      "BGP autonomous system 65500",
      "EIGRP IPv4 autonomous system 100",
      "cannot access"
    ],
    "correct_option_keywords": [
      "Redistribute OSPF external routes into BGP"
    ]
  },
  "627": {
    "question_keywords": [
      "broadcast Ethernet interface",
      "OSPF",
      "DR and BDR",
      "DROTHER routers"
    ],
    "correct_option_keywords": [
      "DR and BDR",
      "not any DROTHER routers"
    ]
  },
  "628": {
    "question_keywords": [
      "random packet drops",
      "Server-1",
      "does not have any issues",
      "Server-2"
    ],
    "correct_option_keywords": [
      "Remove",
      "distance 10",
      "OSPF process on R1"
    ]
  },
  "629": {
    "question_keywords": [
      "management server traffic",
      "10.0.250.0",
      "2 Mbps link",
      "R1"
    ],
    "correct_option_keywords": [
      "set ip next-hop 10.0.0.2",
      "access-list 110 permit ip host 10.0.1.3 10.0.250.0 0.0.0.3"
    ]
  },
  "630": {
    "question_keywords": [
      "BFD protocol",
      "how it works"
    ],
    "correct_option_keywords": [
      "BFD control packets",
      "UDP port 3784"
    ]
  },
  "631": {
    "question_keywords": [
      "area 7",
      "type 1, 2, and 7 LSAs",
      "no longer access the Internet"
    ],
    "correct_option_keywords": [
      "nssa",
      "redistribute eigrp 10 subnets"
    ]
  },
  "632": {
    "question_keywords": [
      "BGP neighbor is not coming up"
    ],
    "correct_option_keywords": [
      "ebgp-multihop 2"
    ]
  },
  "633": {
    "question_keywords": [
      "neighboring router does not show any summarized prefixes",
      "configured summarization"
    ],
    "correct_option_keywords": [
      "loopback interface within the summary range",
      "generate the summary"
    ]
  },
  "634": {
    "question_keywords": [
      "AAA authentication issue",
      "Authorization failed",
      "closes the connection silently"
    ],
    "correct_option_keywords": [
      "tacacs+ server reachability",
      "R1 router"
    ]
  },
  "635": {
    "question_keywords": [
      "neighbor relationship must be authenticated using MD5",
      "password cisco"
    ],
    "correct_option_keywords": [
      "password cisco"
    ]
  },
  "636": {
    "question_keywords": [
      "Area-55 routes",
      "SW-1",
      "HTTPS services"
    ],
    "correct_option_keywords": [
      "virtual-link",
      "1.11.1.1",
      "1.12.1.1"
    ]
  },
  "637": {
    "question_keywords": [
      "IPv6 EIGRP neighbor adjacency issue",
      "neighbors flapping",
      "ping",
      "directly connected neighbor"
    ],
    "correct_option_keywords": [
      "Multicast packets",
      "not reliably transmitted",
      "switch must be replaced"
    ]
  },
  "638": {
    "question_keywords": [
      "clients on ALS1 receive only IPv4 addresses and not IPv6 addresses",
      "allows clients on ALS1 to receive IPv6 addresses"
    ],
    "correct_option_keywords": [
      "ipv6 dhcp relay destination"
    ]
  },
  "640": {
    "question_keywords": [
      "Host A successfully pings host C",
      "host B fails to ping host C"
    ],
    "correct_option_keywords": [
      "loose mode uRPF"
    ]
  },
  "641": {
    "question_keywords": [
      "authentication failure",
      "SSH is denied",
      "RADIUS server user account"
    ],
    "correct_option_keywords": [
      "Configure the username in RADIUS server database"
    ]
  },
  "642": {
    "question_keywords": [
      "advertise all loopback interfaces IP addresses",
      "EIGRP neighbors receive a summary route"
    ],
    "correct_option_keywords": [
      "Enable EIGRP on loopback interfaces"
    ]
  },
  "643": {
    "question_keywords": [
      "OSPF-4-FLOOD_WAR",
      "repeatedly receiving its own link-state advertisement",
      "flushes it from the network"
    ],
    "correct_option_keywords": [
      "duplicate IP address"
    ]
  },
  "644": {
    "question_keywords": [
      "console access",
      "router A",
      "not working",
      "configuration allows access"
    ],
    "correct_option_keywords": [
      "line console 0",
      "password cisco"
    ]
  },
  "645": {
    "question_keywords": [
      "R1 cannot reach",
      "R4 loopback address",
      "optimal and scalable resolution"
    ],
    "correct_option_keywords": [
      "neighbor 2001::4 next-hop-self"
    ]
  },
  "646": {
    "question_keywords": [
      "role of LDP",
      "MPLS networks"
    ],
    "correct_option_keywords": [
      "enables label binding information",
      "exchange with peer LSRs"
    ]
  },
  "647": {
    "question_keywords": [
      "new spoke router",
      "existing DMVPN Phase 3 tunnel",
      "hub router",
      "enable the tunnel to come up"
    ],
    "correct_option_keywords": [
      "ip nhrp nhs",
      "172.23.5.1"
    ]
  },
  "648": {
    "question_keywords": [
      "DMVPN spokes",
      "zero-touch deployment",
      "communicate through hub with other spokes"
    ],
    "correct_option_keywords": [
      "nhrp nhs",
      "multicast",
      "tunnel key"
    ]
  },
  "649": {
    "question_keywords": [
      "direct all traffic from host 192.168.1.3 to router C",
      "All other traffic must be routed through normal routing-protocol operations"
    ],
    "correct_option_keywords": [
      "access-list 101 permit ip host 192.168.1.3 any",
      "set ip next-hop 10.0.1.2"
    ]
  },
  "650": {
    "question_keywords": [
      "access issue with IPv6 content",
      "access IPv4 content",
      "resolves the issue with IPv6 content"
    ],
    "correct_option_keywords": [
      "default information to originate",
      "IPv6 AF"
    ]
  },
  "651": {
    "question_keywords": [
      "packet drop problem",
      "only one link is used",
      "saturates the bandwidth",
      "share the traffic",
      "two available links"
    ],
    "correct_option_keywords": [
      "Change the EIGRP delay metric",
      "feasibility condition"
    ]
  },
  "652": {
    "question_keywords": [
      "optimal",
      "extra bytes overhead per packet"
    ],
    "correct_option_keywords": [
      "transport"
    ]
  },
  "653": {
    "question_keywords": [
      "all branch sites must communicate via the head office",
      "head office can directly communicate with eachsite independently",
      "zero-touch technology",
      "adding new sites"
    ],
    "correct_option_keywords": [
      "gre multipoint",
      "nhrp map multicast dynamic"
    ]
  },
  "654": {
    "question_keywords": [
      "OSPF routes redistribution",
      "EIGRP"
    ],
    "correct_option_keywords": [
      "Set tags",
      "matching"
    ]
  },
  "655": {
    "question_keywords": [
      "CE advertised routes",
      "segmented",
      "other CE routers",
      "MPLS PE router"
    ],
    "correct_option_keywords": [
      "assigning CE-facing interfaces",
      "different VRFs"
    ]
  },
  "656": {
    "question_keywords": [
      "dual-homed",
      "prefers its outbound traffic via R2"
    ],
    "correct_option_keywords": [
      "set metric 100",
      "set metric 200"
    ]
  },
  "657": {
    "question_keywords": [
      "single router OSPF neighborship",
      "encrypted packets"
    ],
    "correct_option_keywords": [
      "authentication message-digest",
      "message-digest-key 1 md5"
    ]
  },
  "658": {
    "question_keywords": [
      "Internet routes",
      "OSPF area 10",
      "Internet reachability problems"
    ],
    "correct_option_keywords": [
      "advertise",
      "default route"
    ]
  },
  "659": {
    "question_keywords": [
      "BGP Internet routes",
      "redistributed",
      "lower class of router",
      "RIP",
      "packets are being dropped",
      "routes are failing to be distributed"
    ],
    "correct_option_keywords": [
      "RIP V2",
      "classless networks",
      "BGP"
    ]
  },
  "660": {
    "question_keywords": [
      "BFD",
      "prioritize traffic",
      "IP precedence value"
    ],
    "correct_option_keywords": [
      "7"
    ]
  },
  "661": {
    "question_keywords": [
      "filter prefixes",
      "originate from AS65412",
      "not working correctly"
    ],
    "correct_option_keywords": [
      "deny _65412$",
      "permit .*"
    ]
  },
  "662": {
    "question_keywords": [
      "time lag",
      "Cisco DNA Center",
      "device"
    ],
    "correct_option_keywords": [
      "connectivity",
      "NTP server",
      "switch"
    ]
  },
  "663": {
    "question_keywords": [
      "10.0.1.0/24",
      "RIP database"
    ],
    "correct_option_keywords": [
      "Permit",
      "ACL"
    ]
  },
  "664": {
    "question_keywords": [
      "protected by IPv6 Source Guard"
    ],
    "correct_option_keywords": [
      "Layer 2 ports"
    ]
  },
  "665": {
    "question_keywords": [
      "NetFlow",
      "not working as expected",
      "capture the flow information"
    ],
    "correct_option_keywords": [
      "flow exporter",
      "flow monitor"
    ]
  },
  "666": {
    "question_keywords": [
      "IPv6 Source Guard",
      "block traffic",
      "server interface",
      "unknown sources"
    ],
    "correct_option_keywords": [
      "IPv6 ND Inspection",
      "block traffic",
      "unknown sources"
    ]
  },
  "667": {
    "question_keywords": [],
    "correct_option_keywords": []
  },
  "668": {
    "question_keywords": [
      "slow response times",
      "DoS attack",
      "GigaEthernet0/0"
    ],
    "correct_option_keywords": [
      "access group",
      "GigaEthernet0/0",
      "block traffic",
      "172.17.132.95"
    ]
  },
  "669": {
    "question_keywords": [
      "summarization",
      "loopback addresses",
      "failed",
      "successful advertisement"
    ],
    "correct_option_keywords": [
      "network statement",
      "loopback 0",
      "redistribute",
      "loopback 50"
    ]
  },
  "670": {
    "question_keywords": [
      "router A and router B are not exchanging any routes",
      "resolves the issue on router B"
    ],
    "correct_option_keywords": [
      "key chain EIGRP",
      "key-string CCNP",
      "ip authentication key-chain eigrp 100 EIGRP"
    ]
  },
  "671": {
    "question_keywords": [
      "per VRF",
      "company A",
      "TACACS+"
    ],
    "correct_option_keywords": [
      "ip vrf forwarding CompanyA",
      "GigabitEthernet 0/0"
    ]
  },
  "672": {
    "question_keywords": [
      "MPLS Layer 3 packet",
      "without traffic engineering"
    ],
    "correct_option_keywords": [
      "2",
      "labels"
    ]
  },
  "673": {
    "question_keywords": [
      "redistribute",
      "OSPF into EIGRP",
      "no connectivity",
      "enables receipt of prefixes"
    ],
    "correct_option_keywords": [
      "Duplicate router IDs",
      "modify its router ID"
    ]
  },
  "674": {
    "question_keywords": [
      "172.16.1.16/28",
      "172.16.2.32/48"
    ],
    "correct_option_keywords": [
      "redistribute ospf 1",
      "router eigrp 100"
    ]
  },
  "675": {
    "question_keywords": [
      "SW100 cannot receive routes from R1",
      "resolves the issue"
    ],
    "correct_option_keywords": [
      "next-hop-self"
    ]
  },
  "676": {
    "question_keywords": [
      "summarized",
      "aggregate address"
    ],
    "correct_option_keywords": [
      "originator",
      "aggregate address"
    ]
  },
  "677": {
    "question_keywords": [
      "features of BFD",
      "Choose two"
    ],
    "correct_option_keywords": [
      "scalable",
      "reliable"
    ]
  },
  "678": {
    "question_keywords": [
      "more specific routes",
      "without sending a BGP summary route"
    ],
    "correct_option_keywords": [
      "no auto-summary"
    ]
  },
  "679": {
    "question_keywords": [
      "loss of partial IPv6 prefixes",
      "service degradation",
      "full service restored"
    ],
    "correct_option_keywords": [
      "permit 20 statement",
      "allow additional prefixes"
    ]
  },
  "680": {
    "question_keywords": [
      "copy",
      "TFTP",
      "timing out"
    ],
    "correct_option_keywords": [
      "TFTP server source-interface",
      "GigabitEthernet0/0"
    ]
  },
  "681": {
    "question_keywords": [
      "force all SSH traffic",
      "generated from R1",
      "toward SP2"
    ],
    "correct_option_keywords": [
      "ip local policy route-map",
      "set ip next-hop 10.20.20.1"
    ]
  },
  "682": {
    "question_keywords": [
      "suboptimal communication",
      "slowest links"
    ],
    "correct_option_keywords": [
      "redistribute ospf 1 metric 1000000 1 1 1 1"
    ]
  },
  "683": {
    "question_keywords": [
      "fail to authenticate",
      "TACACS server",
      "direct fiber link fails"
    ],
    "correct_option_keywords": [
      "no ip prefix-list Customer seq 5 deny"
    ]
  },
  "684": {
    "question_keywords": [
      "RA to RF is not forwarded",
      "link between the RC-RE path goes down",
      "loopback IP throughthe IGP protocol"
    ],
    "correct_option_keywords": [
      "ebgp-multihop 3"
    ]
  }
};

const imageAnnotations = {
  "1": [
    {
      "keyword": "2001:db8:0:4::/64",
      "rect": {
        "x": 62.5,
        "y": 50,
        "w": 16.25,
        "h": 15.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 56.25,
        "y": 50,
        "w": 40.0,
        "h": 20
      }
    },
    {
      "keyword": "2001:db8:0:12::/64",
      "rect": {
        "x": 31.25,
        "y": 50,
        "w": 16.25,
        "h": 15.0
      }
    },
    {
      "keyword": "2001:db8:0:14::/64",
      "rect": {
        "x": 62.5,
        "y": 50,
        "w": 16.25,
        "h": 15.0
      }
    },
    {
      "keyword": "2001:db8:0:4::/64",
      "rect": {
        "x": 62.5,
        "y": 50,
        "w": 16.25,
        "h": 15.0
      }
    }
  ],
  "2": [
    {
      "keyword": "192.168.130.0/24",
      "rect": {
        "x": 29.0,
        "y": 50,
        "w": 20.875,
        "h": 20
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 41.75,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "172.20.40.0/30",
      "rect": {
        "x": 71.0,
        "y": 56.00000000000001,
        "w": 18.0,
        "h": 20
      }
    },
    {
      "keyword": "Gi0/2",
      "rect": {
        "x": 59.75,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "3": [
    {
      "keyword": "ip prefix-list test seq 5 permit 192.168.130.0/24",
      "rect": {
        "x": 3.0,
        "y": 38.0,
        "w": 40,
        "h": 12.0
      }
    },
    {
      "keyword": "route-map OUT permit10",
      "rect": {
        "x": 3.0,
        "y": 50,
        "w": 40,
        "h": 11.0
      }
    },
    {
      "keyword": "match ip address prefix-list test",
      "rect": {
        "x": 3.0,
        "y": 50,
        "w": 40,
        "h": 11.0
      }
    },
    {
      "keyword": "set as-path prepend 65000",
      "rect": {
        "x": 3.0,
        "y": 50,
        "w": 40,
        "h": 11.0
      }
    }
  ],
  "6": [
    {
      "keyword": "ip route 192.168.2.2 255.255.255.255 209.165.200.225 130",
      "rect": {
        "x": 20.0,
        "y": 47.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "O",
      "rect": {
        "x": 20.0,
        "y": 30.0,
        "w": 3.0,
        "h": 4.0
      }
    },
    {
      "keyword": "192.168.2.2[110/11]",
      "rect": {
        "x": 26.75,
        "y": 30.0,
        "w": 17.0,
        "h": 4.0
      }
    }
  ],
  "7": [
    {
      "keyword": "summary-address 10.0.0.0 255.0.0.0",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "192.168.1.0/32",
      "rect": {
        "x": 13.625000000000002,
        "y": 51.0,
        "w": 16.25,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.2.0/24",
      "rect": {
        "x": 13.625000000000002,
        "y": 50,
        "w": 16.25,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.3.0/24",
      "rect": {
        "x": 13.625000000000002,
        "y": 50,
        "w": 16.25,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.12.0/24",
      "rect": {
        "x": 13.625000000000002,
        "y": 50,
        "w": 16.25,
        "h": 20.0
      }
    }
  ],
  "8": [
    {
      "keyword": "permit 192.168.2.2",
      "rect": {
        "x": 37.0,
        "y": 36.0,
        "w": 25.0,
        "h": 14.0
      }
    },
    {
      "keyword": "route-map RM-OSPF-DL, permit, sequence 10",
      "rect": {
        "x": 37.0,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "ip address (access-lists): 1",
      "rect": {
        "x": 20.875,
        "y": 50,
        "w": 30.0,
        "h": 14.0
      }
    },
    {
      "keyword": "distribute-list route-map RM-OSPF-DL in",
      "rect": {
        "x": 59.0,
        "y": 50,
        "w": 40.0,
        "h": 15.0
      }
    }
  ],
  "10": [
    {
      "keyword": "Init",
      "rect": {
        "x": 19.0,
        "y": 65,
        "w": 10.0,
        "h": 5.0
      }
    },
    {
      "keyword": "2-way",
      "rect": {
        "x": 19.0,
        "y": 43.5,
        "w": 11.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Down",
      "rect": {
        "x": 19.0,
        "y": 50,
        "w": 10.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Exchange",
      "rect": {
        "x": 19.0,
        "y": 50,
        "w": 12.0,
        "h": 5.0
      }
    },
    {
      "keyword": "ExStart",
      "rect": {
        "x": 19.0,
        "y": 50,
        "w": 11.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Loading",
      "rect": {
        "x": 19.0,
        "y": 50,
        "w": 12.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Each router compares the DBD packets that were received from the other router.",
      "rect": {
        "x": 66.25,
        "y": 46.0,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "Routers exchange information with other routers in the multiaccess network.",
      "rect": {
        "x": 66.25,
        "y": 38.25,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "The neighboring router requests the other routers to send missing entries.",
      "rect": {
        "x": 66.25,
        "y": 65.0,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "The network has already elected a DR and a backup BDR.",
      "rect": {
        "x": 66.25,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "The OSPF router ID of the receiving router was not contained in the hello message.",
      "rect": {
        "x": 66.25,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "No hellos have been received from a neighbor router.",
      "rect": {
        "x": 66.25,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    }
  ],
  "11": [
    {
      "keyword": "172.16.25.0/24",
      "rect": {
        "x": 90.0,
        "y": 50,
        "w": 13.0,
        "h": 2
      }
    },
    {
      "keyword": "209.165.200.225",
      "rect": {
        "x": 38.0,
        "y": 50,
        "w": 15.0,
        "h": 2
      }
    },
    {
      "keyword": "192.168.2.2",
      "rect": {
        "x": 24.0,
        "y": 50,
        "w": 7.0,
        "h": 2
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 24.0,
        "y": 50,
        "w": 7.0,
        "h": 2
      }
    },
    {
      "keyword": "192.168.3.3",
      "rect": {
        "x": 24.0,
        "y": 50,
        "w": 7.0,
        "h": 2
      }
    },
    {
      "keyword": "192.168.2.2",
      "rect": {
        "x": 24.0,
        "y": 50,
        "w": 7.0,
        "h": 2
      }
    }
  ],
  "12": [
    {
      "keyword": "redistribute ospf 1",
      "rect": {
        "x": 27.0,
        "y": 50,
        "w": 17.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.0.0.0/24",
      "rect": {
        "x": 10.0,
        "y": 26.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.3.0/24",
      "rect": {
        "x": 10.0,
        "y": 31.0,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1/32",
      "rect": {
        "x": 9.0,
        "y": 57.0,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.3.0",
      "rect": {
        "x": 9.0,
        "y": 64.0,
        "w": 10.0,
        "h": 3.0
      }
    }
  ],
  "13": [
    {
      "keyword": "Idle (PfxCt)",
      "rect": {
        "x": 74.0,
        "y": 50,
        "w": 12.0,
        "h": 3.0
      }
    },
    {
      "keyword": "BGP activity 24/23 prefixes",
      "rect": {
        "x": 12.0,
        "y": 65,
        "w": 25.0,
        "h": 3.0
      }
    }
  ],
  "15": [
    {
      "keyword": "Jun 28 14:41:57",
      "rect": {
        "x": 10.0,
        "y": 13.0,
        "w": 17.0,
        "h": 4.0
      }
    },
    {
      "keyword": "15:42:00.506 CET",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 20.0,
        "h": 4.0
      }
    }
  ],
  "16": [
    {
      "keyword": "Service-policy input: CoPP-BGP",
      "rect": {
        "x": 17.875,
        "y": 51.5,
        "w": 32.375,
        "h": 20
      }
    },
    {
      "keyword": "Class-map: BGP (match all)",
      "rect": {
        "x": 17.875,
        "y": 60.0,
        "w": 33.25,
        "h": 20
      }
    },
    {
      "keyword": "Match: access-group name BGP",
      "rect": {
        "x": 22.0,
        "y": 50,
        "w": 38.375,
        "h": 20
      }
    },
    {
      "keyword": "drop",
      "rect": {
        "x": 22.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "18": [
    {
      "keyword": "router ospf 100",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 16.875,
        "h": 16.0
      }
    },
    {
      "keyword": "redistribute eigrp 100 subnets route-map OSPF-TAG-1",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "10.2.2.20/24",
      "rect": {
        "x": 68.0,
        "y": 28.0,
        "w": 13.625000000000002,
        "h": 17.0
      }
    },
    {
      "keyword": "OSPF 100",
      "rect": {
        "x": 76.375,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "EIGRP 100",
      "rect": {
        "x": 80.375,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    }
  ],
  "20": [
    {
      "keyword": "route-map ADD permit 20",
      "rect": {
        "x": 38.0,
        "y": 34.0,
        "w": 38.0,
        "h": 20
      }
    },
    {
      "keyword": "set tag 1",
      "rect": {
        "x": 13.25,
        "y": 50.0,
        "w": 22.375,
        "h": 20
      }
    },
    {
      "keyword": "redistribute rip subnets route-map ADD",
      "rect": {
        "x": 13.25,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "21": [
    {
      "keyword": "R1",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 10.0,
        "h": 7.0
      }
    },
    {
      "keyword": "Fa0/0",
      "rect": {
        "x": 34.0,
        "y": 17.0,
        "w": 6.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 47.0,
        "y": 17.0,
        "w": 10.0,
        "h": 7.0
      }
    },
    {
      "keyword": "10.10.10.0/30",
      "rect": {
        "x": 15.0,
        "y": 42.0,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 76.0,
        "y": 45.0,
        "w": 10.0,
        "h": 7.0
      }
    },
    {
      "keyword": "10.10.20.0/30",
      "rect": {
        "x": 43.0,
        "y": 63.0,
        "w": 15.0,
        "h": 3.0
      }
    }
  ],
  "23": [
    {
      "keyword": "RIP",
      "rect": {
        "x": 47.375,
        "y": 50,
        "w": 40.0,
        "h": 20.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 62.0,
        "y": 50,
        "w": 30.0,
        "h": 20.0
      }
    },
    {
      "keyword": "10.1.1.10/24",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    },
    {
      "keyword": "Redistribution",
      "rect": {
        "x": 41.75,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "24": [
    {
      "keyword": "neighbor 10.222.1.1 route-map SET-WEIGHT in",
      "rect": {
        "x": 77.0,
        "y": 56.00000000000001,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "set weight 200",
      "rect": {
        "x": 77.0,
        "y": 50,
        "w": 25.874999999999996,
        "h": 20
      }
    },
    {
      "keyword": "ip as-path access-list 200 permit ^690$",
      "rect": {
        "x": 77.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "26": [
    {
      "keyword": "mode transport",
      "rect": {
        "x": 67.875,
        "y": 50,
        "w": 13.875000000000002,
        "h": 14.0
      }
    },
    {
      "keyword": "mode tunnel",
      "rect": {
        "x": 67.875,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 29.625,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "192.1.1.1/24",
      "rect": {
        "x": 18.375,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "192.1.2.2/24",
      "rect": {
        "x": 52.37500000000001,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "192.1.3.3/24",
      "rect": {
        "x": 22.625,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    }
  ],
  "29": [
    {
      "keyword": "Tunnel: 10.0.0.12",
      "rect": {
        "x": 91.75,
        "y": 50,
        "w": 16.0,
        "h": 20.0
      }
    },
    {
      "keyword": "Physical: 172.17.0.3",
      "rect": {
        "x": 91.75,
        "y": 50,
        "w": 18.875,
        "h": 20.0
      }
    },
    {
      "keyword": "Tunnel: 10.0.0.11",
      "rect": {
        "x": 47.0,
        "y": 50,
        "w": 16.0,
        "h": 20.0
      }
    },
    {
      "keyword": "Physical: 172.17.0.2",
      "rect": {
        "x": 47.0,
        "y": 50,
        "w": 18.875,
        "h": 20.0
      }
    }
  ],
  "31": [
    {
      "keyword": "imp-null",
      "rect": {
        "x": 63.625,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "imp-null",
      "rect": {
        "x": 63.625,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    }
  ],
  "32": [
    {
      "keyword": "route distinguisher",
      "rect": {
        "x": 11.0,
        "y": 10.0,
        "w": 26.0,
        "h": 6.0
      }
    },
    {
      "keyword": "route target",
      "rect": {
        "x": 11.0,
        "y": 30.0,
        "w": 17.0,
        "h": 6.0
      }
    },
    {
      "keyword": "multiprotocol BGP",
      "rect": {
        "x": 11.0,
        "y": 50,
        "w": 26.0,
        "h": 6.0
      }
    },
    {
      "keyword": "propagates VPN reachability information",
      "rect": {
        "x": 53.0,
        "y": 10.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "uniquely identifies a customer prefix",
      "rect": {
        "x": 53.0,
        "y": 57.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "controls the import/export of customer prefixes",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 40,
        "h": 10.0
      }
    }
  ],
  "34": [
    {
      "keyword": "PE",
      "rect": {
        "x": 18.0,
        "y": 13.0,
        "w": 10.0,
        "h": 10.0
      }
    },
    {
      "keyword": "device that forwards traffic based on labels",
      "rect": {
        "x": 53.0,
        "y": 47.0,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "P",
      "rect": {
        "x": 20.0,
        "y": 30.0,
        "w": 6.0,
        "h": 7.0
      }
    },
    {
      "keyword": "path that the labeled packet takes",
      "rect": {
        "x": 53.0,
        "y": 65,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "CE",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 10.0,
        "h": 10.0
      }
    },
    {
      "keyword": "device that is unaware of MPLS labeling",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "LSP",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 9.0,
        "h": 9.0
      }
    },
    {
      "keyword": "device that removes and adds the MPLS labeling",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    }
  ],
  "35": [
    {
      "keyword": "R1(config-if)# ip nhrp network-id 111",
      "rect": {
        "x": 17.625,
        "y": 50,
        "w": 31.0,
        "h": 17.0
      }
    },
    {
      "keyword": "R2(config-if)# ip nhrp network-id 222",
      "rect": {
        "x": 17.625,
        "y": 50,
        "w": 31.0,
        "h": 17.0
      }
    },
    {
      "keyword": "R3(config-if)# ip nhrp network-id 333",
      "rect": {
        "x": 17.625,
        "y": 50,
        "w": 31.0,
        "h": 17.0
      }
    },
    {
      "keyword": "R4(config-if)# ip nhrp network-id 444",
      "rect": {
        "x": 17.625,
        "y": 50,
        "w": 31.0,
        "h": 17.0
      }
    },
    {
      "keyword": "192.1.1.1/24",
      "rect": {
        "x": 35.0,
        "y": 27.500000000000004,
        "w": 13.5,
        "h": 20.0
      }
    },
    {
      "keyword": "192.1.2.2/24",
      "rect": {
        "x": 95,
        "y": 57.49999999999999,
        "w": 13.5,
        "h": 20.0
      }
    },
    {
      "keyword": "192.1.3.3/24",
      "rect": {
        "x": 45.0,
        "y": 57.49999999999999,
        "w": 13.5,
        "h": 20.0
      }
    },
    {
      "keyword": "192.1.4.4/24",
      "rect": {
        "x": 30.0,
        "y": 57.49999999999999,
        "w": 13.5,
        "h": 20.0
      }
    }
  ],
  "37": [
    {
      "keyword": "199A:0:200C::1/64",
      "rect": {
        "x": 13.0,
        "y": 42.0,
        "w": 16.0,
        "h": 4.0
      }
    },
    {
      "keyword": "199A:0:200C::1/64",
      "rect": {
        "x": 13.0,
        "y": 46.0,
        "w": 16.0,
        "h": 4.0
      }
    },
    {
      "keyword": "201A:0:205C::1/64",
      "rect": {
        "x": 78.0,
        "y": 50,
        "w": 17.0,
        "h": 4.0
      }
    }
  ],
  "38": [
    {
      "keyword": "access-list 100 permit tcp any any eq 80",
      "rect": {
        "x": 36.0,
        "y": 38.0,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "access-list 100 permit udp any any eq 443",
      "rect": {
        "x": 36.0,
        "y": 65,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "access-list 100 permit tcp any eq 80 any",
      "rect": {
        "x": 36.0,
        "y": 52.0,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "access-list 100 permit udp any eq 443 any",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "39": [
    {
      "keyword": "data plane packets",
      "rect": {
        "x": 14.0,
        "y": 25.75,
        "w": 25.0,
        "h": 20
      }
    },
    {
      "keyword": "user-generated packets that are always forwarded by network devices to other end-station devices",
      "rect": {
        "x": 64.875,
        "y": 30.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "control plane packets",
      "rect": {
        "x": 14.0,
        "y": 65.0,
        "w": 25.0,
        "h": 20
      }
    },
    {
      "keyword": "network device generated or received packets that are used for the creation of the network itself",
      "rect": {
        "x": 64.875,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "management plane packets",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 25.0,
        "h": 20
      }
    },
    {
      "keyword": "network device generated or received packets; packets that are used to operate the network",
      "rect": {
        "x": 64.875,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "services plane packets",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 25.0,
        "h": 20
      }
    },
    {
      "keyword": "user-generated packets that are forwarded by network devices to other end-station devices, but that require higher priority than the normal traffic by the network devices",
      "rect": {
        "x": 64.875,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "40": [
    {
      "keyword": "permit ip 2001:d8b:800:200c::/64 eq 443",
      "rect": {
        "x": 5.0,
        "y": 15.0,
        "w": 40,
        "h": 10.0
      }
    },
    {
      "keyword": "Permit NTP from this source",
      "rect": {
        "x": 56.0,
        "y": 17.0,
        "w": 40,
        "h": 8.0
      }
    },
    {
      "keyword": "2001:0DB8:0800:200c::1f",
      "rect": {
        "x": 57.0,
        "y": 30.0,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "permit ip 2001:D8B:800:200C::e/126",
      "rect": {
        "x": 5.0,
        "y": 30.0,
        "w": 40,
        "h": 10.0
      }
    },
    {
      "keyword": "Permit syslog from this source",
      "rect": {
        "x": 56.0,
        "y": 45.0,
        "w": 40,
        "h": 8.0
      }
    },
    {
      "keyword": "2001:0DB8:0800:200c::1c",
      "rect": {
        "x": 57.0,
        "y": 57.0,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "permit ip 2001:d8b:800:200c::800 /117",
      "rect": {
        "x": 5.0,
        "y": 45.0,
        "w": 40,
        "h": 10.0
      }
    },
    {
      "keyword": "Permit HTTP from this source",
      "rect": {
        "x": 56.0,
        "y": 50,
        "w": 40,
        "h": 8.0
      }
    },
    {
      "keyword": "2001:0DB8:0800:200c::0ff",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "permit ip 2001:D8B:800:200C::c/126",
      "rect": {
        "x": 5.0,
        "y": 50,
        "w": 40,
        "h": 10.0
      }
    },
    {
      "keyword": "Permit HTTPS from this source",
      "rect": {
        "x": 56.0,
        "y": 50,
        "w": 40,
        "h": 8.0
      }
    },
    {
      "keyword": "2001:0DB8:0800:200c::07ff",
      "rect": {
        "x": 57.0,
        "y": 27.500000000000004,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "41": [
    {
      "keyword": "aaa authentication login default group tacacs+",
      "rect": {
        "x": 17.0,
        "y": 29.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "aaa authentication login Console local",
      "rect": {
        "x": 17.0,
        "y": 41.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "line con 0",
      "rect": {
        "x": 17.0,
        "y": 58.0,
        "w": 16.0,
        "h": 5.0
      }
    }
  ],
  "42": [
    {
      "keyword": "Please create RSA keys to enable SSH",
      "rect": {
        "x": 16.0,
        "y": 36.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "IOS Keys in SECSH format (ssh-rsa, base64 encoded) : NONE",
      "rect": {
        "x": 16.0,
        "y": 57.0,
        "w": 40,
        "h": 5.0
      }
    }
  ],
  "46": [
    {
      "keyword": "Policy Map COPP",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 26.0,
        "h": 20
      }
    },
    {
      "keyword": "police cir 1000k bc 1500",
      "rect": {
        "x": 14.75,
        "y": 50,
        "w": 38.375,
        "h": 20
      }
    },
    {
      "keyword": "exceed-action drop",
      "rect": {
        "x": 14.75,
        "y": 50,
        "w": 32.125,
        "h": 20
      }
    }
  ],
  "49": [
    {
      "keyword": "lease 0 12",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 14.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.1.0 255.255.255.0",
      "rect": {
        "x": 57.0,
        "y": 52.0,
        "w": 33.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.1.1 192.168.1.49",
      "rect": {
        "x": 57.0,
        "y": 27.0,
        "w": 33.0,
        "h": 5.0
      }
    }
  ],
  "50": [
    {
      "keyword": "ISP 1",
      "rect": {
        "x": 92.25,
        "y": 49.0,
        "w": 40,
        "h": 19.0
      }
    },
    {
      "keyword": "ISP 2",
      "rect": {
        "x": 92.25,
        "y": 50,
        "w": 40,
        "h": 19.0
      }
    },
    {
      "keyword": "Internet",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "51": [
    {
      "keyword": "service timestamps debug datetime",
      "rect": {
        "x": 22.0,
        "y": 35.0,
        "w": 30.0,
        "h": 4.0
      }
    },
    {
      "keyword": "service timestamps log datetime",
      "rect": {
        "x": 22.0,
        "y": 58.0,
        "w": 29.0,
        "h": 4.0
      }
    }
  ],
  "52": [
    {
      "keyword": "DHCPPACK",
      "rect": {
        "x": 15.0,
        "y": 30.0,
        "w": 20.0,
        "h": 7.0
      }
    },
    {
      "keyword": "server-to-client communication, refusing the request for configuration parameters",
      "rect": {
        "x": 53.0,
        "y": 30.0,
        "w": 40,
        "h": 12.0
      }
    },
    {
      "keyword": "DHCPINFORM",
      "rect": {
        "x": 15.0,
        "y": 43.0,
        "w": 20.0,
        "h": 7.0
      }
    },
    {
      "keyword": "client-to-server communication, indicating that the network address is already in use",
      "rect": {
        "x": 53.0,
        "y": 43.0,
        "w": 40,
        "h": 12.0
      }
    },
    {
      "keyword": "DHCPNAK",
      "rect": {
        "x": 15.0,
        "y": 56.0,
        "w": 19.0,
        "h": 7.0
      }
    },
    {
      "keyword": "server-to-client communication with configuration parameters, including committed network address",
      "rect": {
        "x": 53.0,
        "y": 56.0,
        "w": 40,
        "h": 12.0
      }
    },
    {
      "keyword": "DHCPDECLINE",
      "rect": {
        "x": 15.0,
        "y": 65,
        "w": 20.0,
        "h": 7.0
      }
    },
    {
      "keyword": "client-to-server communication, asking for only local configuration parameters that the client has already externally configured as an address",
      "rect": {
        "x": 53.0,
        "y": 65,
        "w": 40,
        "h": 18.0
      }
    }
  ],
  "57": [
    {
      "keyword": "debug aaa authentication",
      "rect": {
        "x": 25.0,
        "y": 50,
        "w": 36.0,
        "h": 4.0
      }
    },
    {
      "keyword": "login local",
      "rect": {
        "x": 55.0,
        "y": 64.0,
        "w": 11.0,
        "h": 4.0
      }
    }
  ],
  "58": [
    {
      "keyword": "snmp-server host 192.168.1.128",
      "rect": {
        "x": 14.0,
        "y": 42.0,
        "w": 40,
        "h": 10.0
      }
    },
    {
      "keyword": "snmp-server community ciscotest1",
      "rect": {
        "x": 14.0,
        "y": 17.0,
        "w": 40,
        "h": 10.0
      }
    },
    {
      "keyword": "snmp-sever enable traps bgp",
      "rect": {
        "x": 14.0,
        "y": 65,
        "w": 40,
        "h": 10.0
      }
    }
  ],
  "59": [
    {
      "keyword": "flow exporter EXPORTER-1",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 34.875,
        "h": 20
      }
    },
    {
      "keyword": "ip flow monitor FLOW-MONITOR-1 input",
      "rect": {
        "x": 77.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "61": [
    {
      "keyword": "172.17.1.0/24",
      "rect": {
        "x": 21.0,
        "y": 50,
        "w": 22.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.0.0.1",
      "rect": {
        "x": 28.249999999999996,
        "y": 50,
        "w": 8.0,
        "h": 4.0
      }
    }
  ],
  "63": [
    {
      "keyword": "Area 0",
      "rect": {
        "x": 32.25,
        "y": 31.0,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "Area 0",
      "rect": {
        "x": 60.75000000000001,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "Area 0",
      "rect": {
        "x": 50.375,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    }
  ],
  "64": [
    {
      "keyword": "Class-map: NMS (match-all)",
      "rect": {
        "x": 57.0,
        "y": 57.99999999999999,
        "w": 34.875,
        "h": 20
      }
    },
    {
      "keyword": "cir 50000 bps, bc 5000 bytes",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "exceeded 990012 packets, 94030134 bytes",
      "rect": {
        "x": 77.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "77": [
    {
      "keyword": "permit tcp host 192.168.10.10 host 192.168.100.10 eq ssh",
      "rect": {
        "x": 17.0,
        "y": 44.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "deny tcp 192.168.10.0 0.0.0.255 192.168.100.0 0.0.0.255 eq 22",
      "rect": {
        "x": 17.0,
        "y": 15.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "permit ip any any",
      "rect": {
        "x": 17.0,
        "y": 52.0,
        "w": 25.0,
        "h": 5.0
      }
    }
  ],
  "78": [
    {
      "keyword": "mgmt (match-all)",
      "rect": {
        "x": 17.875,
        "y": 61.25000000000001,
        "w": 18.25,
        "h": 20
      }
    },
    {
      "keyword": "cir 8000 bps",
      "rect": {
        "x": 22.0,
        "y": 50,
        "w": 14.499999999999998,
        "h": 19.0
      }
    },
    {
      "keyword": "exceeded 353 packets, 72352 bytes; actions: drop",
      "rect": {
        "x": 28.375,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10 permit udp any any eq snmptrap (361 matches)",
      "rect": {
        "x": 30.625000000000004,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "104": [
    {
      "keyword": "ip vrf customer_a",
      "rect": {
        "x": 41.0,
        "y": 17.0,
        "w": 19.0,
        "h": 4.0
      }
    },
    {
      "keyword": "rd 1:1",
      "rect": {
        "x": 41.0,
        "y": 41.0,
        "w": 7.0,
        "h": 4.0
      }
    },
    {
      "keyword": "route-target export 1:1",
      "rect": {
        "x": 41.0,
        "y": 65.0,
        "w": 18.0,
        "h": 4.0
      }
    },
    {
      "keyword": "route-target import 1:1",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 19.0,
        "h": 4.0
      }
    },
    {
      "keyword": "router ospf 2 vrf customer_a",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 27.0,
        "h": 4.0
      }
    }
  ],
  "106": [
    {
      "keyword": "192.168.32.0/19",
      "rect": {
        "x": 14.0,
        "y": 33.0,
        "w": 16.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.32.0/24",
      "rect": {
        "x": 14.0,
        "y": 44.0,
        "w": 16.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.32.0/26",
      "rect": {
        "x": 14.0,
        "y": 54.0,
        "w": 16.0,
        "h": 5.0
      }
    },
    {
      "keyword": "via 10.1.1.1",
      "rect": {
        "x": 70.0,
        "y": 33.0,
        "w": 15.0,
        "h": 5.0
      }
    },
    {
      "keyword": "via 10.1.1.2",
      "rect": {
        "x": 70.0,
        "y": 44.0,
        "w": 15.0,
        "h": 5.0
      }
    },
    {
      "keyword": "via 10.1.1.3",
      "rect": {
        "x": 70.0,
        "y": 54.0,
        "w": 15.0,
        "h": 5.0
      }
    }
  ],
  "111": [
    {
      "keyword": "access-list 101 permit tcp 10.0.0.0 0.0.0.0 172.16.1.0 0.0.0.255 eq ssh",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "ip address 10.1.1.1 255.255.255.0",
      "rect": {
        "x": 15.0,
        "y": 17.0,
        "w": 35.0,
        "h": 5.0
      }
    },
    {
      "keyword": "time-range Office-hour",
      "rect": {
        "x": 15.0,
        "y": 49.0,
        "w": 25.0,
        "h": 5.0
      }
    }
  ],
  "112": [
    {
      "keyword": "OSPF",
      "rect": {
        "x": 33.125,
        "y": 61.75000000000001,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "EIGRP",
      "rect": {
        "x": 81.75,
        "y": 61.75000000000001,
        "w": 40,
        "h": 20
      }
    }
  ],
  "114": [
    {
      "keyword": "access-lists",
      "rect": {
        "x": 42.0,
        "y": 37.0,
        "w": 14.0,
        "h": 3.0
      }
    },
    {
      "keyword": "permit 192.168.2.2",
      "rect": {
        "x": 22.125,
        "y": 35.5,
        "w": 20.0,
        "h": 3.0
      }
    },
    {
      "keyword": "route-map RM-OSPF-DL, deny",
      "rect": {
        "x": 43.0,
        "y": 50,
        "w": 28.0,
        "h": 3.0
      }
    },
    {
      "keyword": "ip address (access-lists): 1",
      "rect": {
        "x": 22.125,
        "y": 50,
        "w": 23.0,
        "h": 3.0
      }
    },
    {
      "keyword": "distribute-list route-map RM-OSPF-DL",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 33.0,
        "h": 3.0
      }
    }
  ],
  "115": [
    {
      "keyword": "OSPF",
      "rect": {
        "x": 95,
        "y": 14.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "EIGRP",
      "rect": {
        "x": 20.0,
        "y": 14.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.1.1.0 /24",
      "rect": {
        "x": 81.0,
        "y": 50,
        "w": 14.499999999999998,
        "h": 20
      }
    },
    {
      "keyword": "10.1.35.0/24",
      "rect": {
        "x": 91.5,
        "y": 26.25,
        "w": 15.0,
        "h": 20
      }
    },
    {
      "keyword": "10.1.23.0/24",
      "rect": {
        "x": 52.125,
        "y": 26.25,
        "w": 15.0,
        "h": 20
      }
    },
    {
      "keyword": "10.1.24.0/24",
      "rect": {
        "x": 45.5,
        "y": 50,
        "w": 15.0,
        "h": 20
      }
    }
  ],
  "116": [
    {
      "keyword": "ip vrf abc",
      "rect": {
        "x": 51.0,
        "y": 44.75,
        "w": 13.0,
        "h": 20.0
      }
    },
    {
      "keyword": "ip vrf forwarding abc",
      "rect": {
        "x": 51.0,
        "y": 50,
        "w": 28.375,
        "h": 20
      }
    },
    {
      "keyword": "router ospf 1 vrf abc",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 29.625,
        "h": 20
      }
    },
    {
      "keyword": "network 172.16.16.0",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 26.0,
        "h": 20
      }
    }
  ],
  "117": [
    {
      "keyword": "WLC3504",
      "rect": {
        "x": 72.375,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    },
    {
      "keyword": "Cat 9300",
      "rect": {
        "x": 87.375,
        "y": 50,
        "w": 12.75,
        "h": 18.0
      }
    }
  ],
  "119": [
    {
      "keyword": "172.18.46.2",
      "rect": {
        "x": 19.0,
        "y": 50,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "192.168.1.4",
      "rect": {
        "x": 26.0,
        "y": 50,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "D",
      "rect": {
        "x": 59.0,
        "y": 50,
        "w": 3,
        "h": 4.0
      }
    }
  ],
  "120": [
    {
      "keyword": "AS100",
      "rect": {
        "x": 23.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "AS 200",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.1.1.1/32",
      "rect": {
        "x": 67.0,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    },
    {
      "keyword": "10.1.1.2/32",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    }
  ],
  "121": [
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 86.0,
        "y": 12.0,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.3.0/24",
      "rect": {
        "x": 36.75,
        "y": 30.0,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.2.0/24",
      "rect": {
        "x": 13.375,
        "y": 55.00000000000001,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.12.2",
      "rect": {
        "x": 62.125,
        "y": 55.00000000000001,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.13.0/24",
      "rect": {
        "x": 86.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.13.1/32",
      "rect": {
        "x": 13.375,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.23.0/24",
      "rect": {
        "x": 86.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.12.2",
      "rect": {
        "x": 62.125,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.24.0/24",
      "rect": {
        "x": 86.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    }
  ],
  "122": [
    {
      "keyword": "ip route 0.0.0.0 0.0.0.0 1.1.1.1",
      "rect": {
        "x": 17.0,
        "y": 50.0,
        "w": 40.0,
        "h": 5.0
      }
    },
    {
      "keyword": "ip route 0.0.0.0 0.0.0.0 2.2.2.2 10",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40.0,
        "h": 5.0
      }
    },
    {
      "keyword": "ip sla 1",
      "rect": {
        "x": 17.0,
        "y": 32.5,
        "w": 15.0,
        "h": 5.0
      }
    },
    {
      "keyword": "icmp-echo 1.1.1.1 source-interface FastEthernet0/0",
      "rect": {
        "x": 17.0,
        "y": 42.5,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "ip sla schedule 1 life forever start-time now",
      "rect": {
        "x": 17.0,
        "y": 52.5,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "track 1 ip sla 1 reachability",
      "rect": {
        "x": 17.0,
        "y": 62.5,
        "w": 40.0,
        "h": 5.0
      }
    }
  ],
  "125": [
    {
      "keyword": "route-map PBR, deny, sequence 5",
      "rect": {
        "x": 25.0,
        "y": 40.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "ip address (access-list): NON-CISCO",
      "rect": {
        "x": 45.0,
        "y": 54.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "Policy routing matches: 0 packets, 0 bytes",
      "rect": {
        "x": 45.0,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "route-map PBR, permit, sequence 10",
      "rect": {
        "x": 45.0,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "ip next-hop 192.168.1.5",
      "rect": {
        "x": 45.0,
        "y": 50,
        "w": 39.0,
        "h": 6.0
      }
    },
    {
      "keyword": "Policy routing matches: 388213827 packets, 222009685077 bytes",
      "rect": {
        "x": 45.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "126": [
    {
      "keyword": "Layer 2 loop symptoms",
      "rect": {
        "x": 15.0,
        "y": 36.0,
        "w": 27.0,
        "h": 3.0
      }
    },
    {
      "keyword": "SF-09300-1",
      "rect": {
        "x": 22.0,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "GigabitEthernet1/0/13",
      "rect": {
        "x": 65.375,
        "y": 50,
        "w": 14.0,
        "h": 2.0
      }
    },
    {
      "keyword": "VLAN in loop",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "30-33",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    }
  ],
  "128": [
    {
      "keyword": "HUB",
      "rect": {
        "x": 44.875,
        "y": 61.75000000000001,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "Tunnel: 10.0.0.1",
      "rect": {
        "x": 67.0,
        "y": 56.25,
        "w": 17.5,
        "h": 20.0
      }
    },
    {
      "keyword": "Physical: 172.17.0.1",
      "rect": {
        "x": 67.0,
        "y": 49.75,
        "w": 21.25,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.0.1 /24",
      "rect": {
        "x": 46.25,
        "y": 37.0,
        "w": 17.5,
        "h": 20.0
      }
    }
  ],
  "131": [
    {
      "keyword": "192.168.14.0",
      "rect": {
        "x": 10.0,
        "y": 38.0,
        "w": 17.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.15.0",
      "rect": {
        "x": 37.0,
        "y": 40.0,
        "w": 17.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.13.0",
      "rect": {
        "x": 47.0,
        "y": 30.0,
        "w": 17.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.10.0",
      "rect": {
        "x": 16.0,
        "y": 44.0,
        "w": 17.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.8.0",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 17.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.12.0",
      "rect": {
        "x": 27.0,
        "y": 50,
        "w": 17.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.11.0",
      "rect": {
        "x": 60.0,
        "y": 65,
        "w": 17.0,
        "h": 5.0
      }
    },
    {
      "keyword": "192.168.12.0",
      "rect": {
        "x": 85.0,
        "y": 64.0,
        "w": 17.0,
        "h": 5.0
      }
    }
  ],
  "132": [
    {
      "keyword": "transport preferred telnet",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 33.0,
        "h": 20
      }
    },
    {
      "keyword": "transport output none",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 26.75,
        "h": 20
      }
    },
    {
      "keyword": "transport referred telnet",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 32.125,
        "h": 20
      }
    },
    {
      "keyword": "transport input none",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 26.75,
        "h": 20
      }
    },
    {
      "keyword": "transport output telnet",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 32.125,
        "h": 20
      }
    },
    {
      "keyword": "% ssh connections not permitted from this terminal",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "133": [
    {
      "keyword": "router bgp 65401",
      "rect": {
        "x": 76.0,
        "y": 50,
        "w": 17.5,
        "h": 17.0
      }
    },
    {
      "keyword": "neighbor 209.165.201.1 remote-as 65402",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "neighbor 209.165.201.5 remote-as 65403",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "ip route 209.165.202.128 255.255.255.224 Null0",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    }
  ],
  "134": [
    {
      "keyword": "transport input telnet ssh",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 30.0,
        "h": 20
      }
    },
    {
      "keyword": "transport output telnet ssh",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 31.0,
        "h": 20
      }
    },
    {
      "keyword": "access-list 100",
      "rect": {
        "x": 42.0,
        "y": 50,
        "w": 16.0,
        "h": 20.0
      }
    },
    {
      "keyword": "permit udp any any eq 23",
      "rect": {
        "x": 72.0,
        "y": 50,
        "w": 30.0,
        "h": 19.0
      }
    },
    {
      "keyword": "permit tcp any any eq telnet",
      "rect": {
        "x": 72.0,
        "y": 50,
        "w": 32.0,
        "h": 19.0
      }
    },
    {
      "keyword": "permit tcp any eq telnet any",
      "rect": {
        "x": 72.0,
        "y": 50,
        "w": 34.0,
        "h": 19.0
      }
    }
  ],
  "135": [
    {
      "keyword": "DMVPN",
      "rect": {
        "x": 40.0,
        "y": 24.0,
        "w": 18.0,
        "h": 5.0
      }
    },
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 40.0,
        "y": 32.0,
        "w": 17.0,
        "h": 3.0
      }
    },
    {
      "keyword": "200.1.3.0/24",
      "rect": {
        "x": 35.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "200.1.2.0/24",
      "rect": {
        "x": 95.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "200.1.1.0/24",
      "rect": {
        "x": 38.125,
        "y": 45.0,
        "w": 13.0,
        "h": 3.0
      }
    }
  ],
  "136": [
    {
      "keyword": "username admin privilege 15 password 7 0236244818115F3348",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "username cisco privilege 15 password 7 0607072C494A5B",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "username cisco privilege 15 password cisco",
      "rect": {
        "x": 57.25,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    },
    {
      "keyword": "!config: USER TABLE MODIFIED",
      "rect": {
        "x": 57.25,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    }
  ],
  "138": [
    {
      "keyword": "line vty 0 15",
      "rect": {
        "x": 45.0,
        "y": 50,
        "w": 17.5,
        "h": 20.0
      }
    },
    {
      "keyword": "access-class 1 in",
      "rect": {
        "x": 45.0,
        "y": 50,
        "w": 18.75,
        "h": 20.0
      }
    }
  ],
  "140": [
    {
      "keyword": "LA Router",
      "rect": {
        "x": 17.25,
        "y": 50,
        "w": 13.625000000000002,
        "h": 20
      }
    },
    {
      "keyword": "Chicago Router",
      "rect": {
        "x": 17.25,
        "y": 50,
        "w": 18.5,
        "h": 20
      }
    },
    {
      "keyword": "redistribute static",
      "rect": {
        "x": 19.375,
        "y": 50,
        "w": 23.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.3.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 16.125,
        "h": 20
      }
    },
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 37.0,
        "y": 50,
        "w": 16.125,
        "h": 20
      }
    }
  ],
  "142": [
    {
      "keyword": "200.30.40.0/24",
      "rect": {
        "x": 72.0,
        "y": 50,
        "w": 32.375,
        "h": 20
      }
    },
    {
      "keyword": "lease 40",
      "rect": {
        "x": 73.0,
        "y": 50,
        "w": 19.25,
        "h": 20
      }
    },
    {
      "keyword": "default-router 200.30.40.100",
      "rect": {
        "x": 73.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "143": [
    {
      "keyword": "redistribute ospf 5",
      "rect": {
        "x": 34.0,
        "y": 50,
        "w": 38.625,
        "h": 20
      }
    },
    {
      "keyword": "route-map OSPF-TO-EIGRP",
      "rect": {
        "x": 34.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "match ip address TO-OSPF",
      "rect": {
        "x": 34.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "external",
      "rect": {
        "x": 59.0,
        "y": 50,
        "w": 16.25,
        "h": 20
      }
    }
  ],
  "144": [
    {
      "keyword": "tcp connect 10.1.1.1 80",
      "rect": {
        "x": 21.0,
        "y": 49.0,
        "w": 20.0,
        "h": 3.0
      }
    }
  ],
  "146": [
    {
      "keyword": "login block-for 15 attempts 10 within 120",
      "rect": {
        "x": 69.0,
        "y": 26.0,
        "w": 30.0,
        "h": 4.0
      }
    },
    {
      "keyword": "login on-failure log",
      "rect": {
        "x": 69.0,
        "y": 29.25,
        "w": 18.0,
        "h": 4.0
      }
    },
    {
      "keyword": "login on-success log",
      "rect": {
        "x": 69.0,
        "y": 51.5,
        "w": 19.0,
        "h": 4.0
      }
    }
  ],
  "147": [
    {
      "keyword": "R2",
      "rect": {
        "x": 16.125,
        "y": 50,
        "w": 37.0,
        "h": 20
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 47.375,
        "y": 50,
        "w": 37.0,
        "h": 20
      }
    },
    {
      "keyword": "LO:2000:ABC:20:2::2",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 32.75,
        "h": 20
      }
    },
    {
      "keyword": "LO:2002:ABC:2000:2::2",
      "rect": {
        "x": 40.75,
        "y": 50,
        "w": 32.75,
        "h": 20
      }
    },
    {
      "keyword": "30 deny tcp 2002:ABC:2000:2::/36 host 2000:ABC:20:2::2 eq 22",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "150": [
    {
      "keyword": "ip prefix-list ccnp2 seq 5 permit 10.1.80.0/24 le 32",
      "rect": {
        "x": 57.0,
        "y": 58.5,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "route-map ospf-to-eigrp permit 10",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "match ip address prefix-list ccnp2",
      "rect": {
        "x": 13.25,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "set tag 30",
      "rect": {
        "x": 13.25,
        "y": 50,
        "w": 22.25,
        "h": 20
      }
    }
  ],
  "151": [
    {
      "keyword": "route-map FILTER-IN deny 10",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 30.75,
        "h": 20
      }
    },
    {
      "keyword": "match ip address prefix-list 102",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ip prefix-list 102 seq 10 permit 10.1.1.100/32",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "distribute-list route-map FILTER-IN in FastEthernet0/0",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "152": [
    {
      "keyword": "OSPF",
      "rect": {
        "x": 21.75,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "EIGRP",
      "rect": {
        "x": 84.5,
        "y": 50,
        "w": 15.5,
        "h": 20
      }
    },
    {
      "keyword": "EIGRP routes",
      "rect": {
        "x": 56.99999999999999,
        "y": 36.5,
        "w": 17.125,
        "h": 20
      }
    },
    {
      "keyword": "EIGRP routes",
      "rect": {
        "x": 57.25,
        "y": 50,
        "w": 17.125,
        "h": 20
      }
    }
  ],
  "154": [
    {
      "keyword": "route-map BGP-TO-OSPF deny 10",
      "rect": {
        "x": 24.0,
        "y": 51.0,
        "w": 33.0,
        "h": 5.0
      }
    },
    {
      "keyword": "match ip address 50",
      "rect": {
        "x": 24.0,
        "y": 57.0,
        "w": 18.0,
        "h": 5.0
      }
    },
    {
      "keyword": "access-list 50 permit 172.16.1.0 0.0.0.255",
      "rect": {
        "x": 24.0,
        "y": 50,
        "w": 40.0,
        "h": 5.0
      }
    },
    {
      "keyword": "redistribute bgp 1 subnets route-map BGP-TO-OSPF",
      "rect": {
        "x": 57.0,
        "y": 35.0,
        "w": 40,
        "h": 5.0
      }
    }
  ],
  "156": [
    {
      "keyword": "cir 8000 bps",
      "rect": {
        "x": 25.0,
        "y": 50,
        "w": 13.5,
        "h": 16.0
      }
    },
    {
      "keyword": "SNMP-Out",
      "rect": {
        "x": 21.25,
        "y": 49.5,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "police",
      "rect": {
        "x": 21.25,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    }
  ],
  "162": [
    {
      "keyword": "service timestamps debug datetime",
      "rect": {
        "x": 18.0,
        "y": 43.5,
        "w": 30.875000000000004,
        "h": 20
      }
    },
    {
      "keyword": "service timestamps log datetime",
      "rect": {
        "x": 18.0,
        "y": 50.0,
        "w": 30.875000000000004,
        "h": 20
      }
    },
    {
      "keyword": "Apr 27 21:12:28",
      "rect": {
        "x": 14.249999999999998,
        "y": 50,
        "w": 18.5,
        "h": 20
      }
    }
  ],
  "163": [
    {
      "keyword": "passive-interface FastEthernet0/0",
      "rect": {
        "x": 61.0,
        "y": 50,
        "w": 38.0,
        "h": 5.0
      }
    },
    {
      "keyword": "neighbor 192.168.12.2 FastEthernet0/0",
      "rect": {
        "x": 15.25,
        "y": 50,
        "w": 37.0,
        "h": 5.0
      }
    },
    {
      "keyword": "neighbor 192.168.12.1 FastEthernet0/0",
      "rect": {
        "x": 15.25,
        "y": 50,
        "w": 37.0,
        "h": 5.0
      }
    }
  ],
  "166": [
    {
      "keyword": "ip dhcp pool 0",
      "rect": {
        "x": 70.0,
        "y": 43.75,
        "w": 16.25,
        "h": 17.0
      }
    },
    {
      "keyword": "network 172.16.16.0 255.255.255.0",
      "rect": {
        "x": 70.0,
        "y": 57.49999999999999,
        "w": 40,
        "h": 18.0
      }
    },
    {
      "keyword": "access-list 100 deny udp any any",
      "rect": {
        "x": 70.0,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    },
    {
      "keyword": "access-list 100 permit ip any any",
      "rect": {
        "x": 70.0,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    }
  ],
  "167": [
    {
      "keyword": "deny 0.0.0.0/0 le 32",
      "rect": {
        "x": 50.0,
        "y": 47.0,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "permit 0.0.0.0/0",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "distribute-list prefix DefaultRouteOnly out Tunnel0",
      "rect": {
        "x": 48.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "168": [
    {
      "keyword": "Loopback0",
      "rect": {
        "x": 20.875,
        "y": 42.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.1.1.1/32",
      "rect": {
        "x": 20.875,
        "y": 65,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.1.1.2/32",
      "rect": {
        "x": 84.375,
        "y": 65,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "AS 100",
      "rect": {
        "x": 20.875,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "AS 200",
      "rect": {
        "x": 91.25,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "neighbor 10.1.1.2 remote-as 200",
      "rect": {
        "x": 26.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "neighbor 10.1.1.1 remote-as 100",
      "rect": {
        "x": 63.24999999999999,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "170": [
    {
      "keyword": "192.168.100.0/24",
      "rect": {
        "x": 71.0,
        "y": 42.25,
        "w": 17.0,
        "h": 20
      }
    },
    {
      "keyword": "HQ_R1",
      "rect": {
        "x": 62.125,
        "y": 31.25,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "HQ_R3",
      "rect": {
        "x": 83.375,
        "y": 44.5,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "172.16.35.2",
      "rect": {
        "x": 36.5,
        "y": 25.75,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "172.16.35.6",
      "rect": {
        "x": 36.5,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "172": [
    {
      "keyword": "access-list 1 permit 1.1.1.0 0.0.0.255",
      "rect": {
        "x": 37.0,
        "y": 57.0,
        "w": 40,
        "h": 10.0
      }
    },
    {
      "keyword": "route-map FILTER1 deny 10",
      "rect": {
        "x": 37.0,
        "y": 50,
        "w": 40.0,
        "h": 10.0
      }
    },
    {
      "keyword": "match ip address 1",
      "rect": {
        "x": 37.0,
        "y": 50,
        "w": 27.0,
        "h": 10.0
      }
    },
    {
      "keyword": "distribute-list route-map FILTER1 in",
      "rect": {
        "x": 37.0,
        "y": 50,
        "w": 40,
        "h": 10.0
      }
    }
  ],
  "179": [
    {
      "keyword": "EIGRP AS 100",
      "rect": {
        "x": 40.0,
        "y": 62.0,
        "w": 20.0,
        "h": 4.0
      }
    }
  ],
  "180": [
    {
      "keyword": "192.168.13.0/24",
      "rect": {
        "x": 72.0,
        "y": 50,
        "w": 25.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 63.0,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    }
  ],
  "181": [
    {
      "keyword": "state to down 2 \"Mar 1 18:46:11: %SYS-5-CONFIG_I:",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "183": [
    {
      "keyword": "ipv6 access list INGRESS",
      "rect": {
        "x": 66.75,
        "y": 50,
        "w": 27.250000000000004,
        "h": 20
      }
    },
    {
      "keyword": "permit ipv6 2001:DB8::/64 any sequence 10",
      "rect": {
        "x": 67.125,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "deny ipv6 2001:DB8::/32 any sequence 20",
      "rect": {
        "x": 67.125,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "ipv6 address 2001:DB8::1/64",
      "rect": {
        "x": 35.0,
        "y": 50,
        "w": 30.5,
        "h": 20.0
      }
    },
    {
      "keyword": "ipv6 nd autoconfig",
      "rect": {
        "x": 67.125,
        "y": 50,
        "w": 25.874999999999996,
        "h": 20.0
      }
    }
  ],
  "185": [
    {
      "keyword": "OSPF: Send DBD to 10.100.1.2 on GigabitEthernet0/1 seq 0x9E6 opt 0x52 flag 0x7 len 32",
      "rect": {
        "x": 39.0,
        "y": 34.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "OSPF: Retransmitting DBD to 10.100.1.2 on GigabitEthernet0/1 [10]",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "OSPF: Send DBD to 10.100.1.2 on GigabitEthernet0/1 seq 0x9E6 opt 0x52 flag 0x7 len 32",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "OSPF: Retransmitting DBD to 10.100.1.2 on GigabitEthernet0/1 [11]",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "OSPF-5-ADJCHG: Process 1, Nbr 10.100.1.2 on GigabitEthernet0/1 from EXSTART to DOWN, Neighbor Down: Too many retransmissions",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "188": [
    {
      "keyword": "2002:404:404::404:404",
      "rect": {
        "x": 29.5,
        "y": 50,
        "w": 16.375,
        "h": 17.0
      }
    },
    {
      "keyword": "4.4.4.4",
      "rect": {
        "x": 15.375,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "ALS1",
      "rect": {
        "x": 46.625,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "Gi1/2",
      "rect": {
        "x": 70.375,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    }
  ],
  "190": [
    {
      "keyword": "R1 Hub",
      "rect": {
        "x": 45.0,
        "y": 52.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R2 Spoke 1",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R3 Spoke 2",
      "rect": {
        "x": 82.0,
        "y": 50,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "L3 IP Network Cloud",
      "rect": {
        "x": 27.0,
        "y": 53.0,
        "w": 40,
        "h": 11.0
      }
    }
  ],
  "191": [
    {
      "keyword": "ip route 0.0.0.0 0.0.0.0 99.3.5.1",
      "rect": {
        "x": 69.875,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Internet",
      "rect": {
        "x": 92.375,
        "y": 50,
        "w": 13.625000000000002,
        "h": 20
      }
    },
    {
      "keyword": "ISP",
      "rect": {
        "x": 95,
        "y": 64.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "99.3.5.1",
      "rect": {
        "x": 89.5,
        "y": 46.25,
        "w": 13.375,
        "h": 20
      }
    },
    {
      "keyword": "99.3.5.2",
      "rect": {
        "x": 59.75,
        "y": 50,
        "w": 13.375,
        "h": 20
      }
    }
  ],
  "192": [
    {
      "keyword": "AS 100",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "AS 200",
      "rect": {
        "x": 92.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "AS 64511",
      "rect": {
        "x": 53.125,
        "y": 50,
        "w": 18.75,
        "h": 20
      }
    }
  ],
  "193": [
    {
      "keyword": "172.16.35.4/30",
      "rect": {
        "x": 26.125,
        "y": 50,
        "w": 16.5,
        "h": 20
      }
    },
    {
      "keyword": "172.16.35.2",
      "rect": {
        "x": 56.125,
        "y": 28.249999999999996,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "172.16.35.6",
      "rect": {
        "x": 57.49999999999999,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "194": [
    {
      "keyword": "DHCP Server 172.16.1.2",
      "rect": {
        "x": 55.0,
        "y": 28.499999999999996,
        "w": 20.75,
        "h": 20
      }
    },
    {
      "keyword": "DHCP Client",
      "rect": {
        "x": 84.625,
        "y": 40.5,
        "w": 14.374999999999998,
        "h": 20.0
      }
    },
    {
      "keyword": "172.31.1.1",
      "rect": {
        "x": 74.875,
        "y": 50,
        "w": 13.25,
        "h": 20
      }
    },
    {
      "keyword": "10.1.1.1",
      "rect": {
        "x": 56.875,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "RouterB",
      "rect": {
        "x": 69.375,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "172.16.1.0 255 255 255.0 10.1.1.2",
      "rect": {
        "x": 18.375,
        "y": 56.25,
        "w": 40,
        "h": 20
      }
    }
  ],
  "196": [
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 33.625,
        "y": 44.0,
        "w": 15.875,
        "h": 20
      }
    },
    {
      "keyword": "10.1.2.0/24",
      "rect": {
        "x": 33.625,
        "y": 50,
        "w": 15.875,
        "h": 20
      }
    },
    {
      "keyword": "198.1.1.0/24",
      "rect": {
        "x": 64.75,
        "y": 65,
        "w": 21.375,
        "h": 20
      }
    },
    {
      "keyword": "198.1.2.0/24",
      "rect": {
        "x": 23.125,
        "y": 50,
        "w": 21.375,
        "h": 20
      }
    },
    {
      "keyword": "198.1.3.0/24",
      "rect": {
        "x": 78.75,
        "y": 50,
        "w": 21.375,
        "h": 20
      }
    },
    {
      "keyword": "10.2.1.0/24",
      "rect": {
        "x": 44.0,
        "y": 50,
        "w": 15.875,
        "h": 20
      }
    },
    {
      "keyword": "10.2.2.0/24",
      "rect": {
        "x": 44.0,
        "y": 50,
        "w": 15.875,
        "h": 20
      }
    },
    {
      "keyword": "10.3.1.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 15.875,
        "h": 20
      }
    },
    {
      "keyword": "10.3.2.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 15.875,
        "h": 20
      }
    }
  ],
  "197": [
    {
      "keyword": "172.18.1.0/24",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 18.625,
        "h": 20
      }
    },
    {
      "keyword": "HongKong",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "172.18.1.2",
      "rect": {
        "x": 34.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "e0/1",
      "rect": {
        "x": 24.875,
        "y": 50,
        "w": 40.0,
        "h": 20
      }
    },
    {
      "keyword": "192.168.5.0/24",
      "rect": {
        "x": 46.625,
        "y": 10.0,
        "w": 17.5,
        "h": 20
      }
    }
  ],
  "198": [
    {
      "keyword": "received bad AUTHEN packet: length = 6, expected 43974",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Invalid AUTHEN packet (check keys).",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "199": [
    {
      "keyword": "username admin privilege 15 password cisco123!",
      "rect": {
        "x": 30.625000000000004,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "aaa authorization commands 15 default local",
      "rect": {
        "x": 30.625000000000004,
        "y": 41.25,
        "w": 40,
        "h": 20
      }
    }
  ],
  "201": [
    {
      "keyword": "IPv6 Binding Table",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 26.0,
        "h": 6.0
      }
    },
    {
      "keyword": "Block reply and advertisement messages from unauthorized DHCP servers and relay agents",
      "rect": {
        "x": 63.125,
        "y": 45.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "IPv6 DHCPv6 Guard",
      "rect": {
        "x": 18.75,
        "y": 50,
        "w": 32.5,
        "h": 20
      }
    },
    {
      "keyword": "Create a binding table that is based on NS and NA messages",
      "rect": {
        "x": 63.125,
        "y": 61.25000000000001,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "IPv6 Source Guard",
      "rect": {
        "x": 18.75,
        "y": 50,
        "w": 32.5,
        "h": 20
      }
    },
    {
      "keyword": "Filter inbound traffic on Layer 2 switch port that are not in the IPv6 binding table",
      "rect": {
        "x": 63.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "IPv6 ND Inspection",
      "rect": {
        "x": 18.75,
        "y": 50,
        "w": 32.5,
        "h": 20
      }
    },
    {
      "keyword": "Block a malicious host and permit the router from a legitimate route",
      "rect": {
        "x": 63.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "IPv6 RA Guard",
      "rect": {
        "x": 18.75,
        "y": 50,
        "w": 32.5,
        "h": 20
      }
    },
    {
      "keyword": "Create IPv6 neighbors connected to the device from information sources such as NDP snooping",
      "rect": {
        "x": 63.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "202": [
    {
      "keyword": "Configure route map instances.",
      "rect": {
        "x": 13.0,
        "y": 14.0,
        "w": 34.0,
        "h": 6.0
      }
    },
    {
      "keyword": "step 1",
      "rect": {
        "x": 74.0,
        "y": 15.0,
        "w": 10.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Configure set commands.",
      "rect": {
        "x": 13.0,
        "y": 23.0,
        "w": 30.0,
        "h": 6.0
      }
    },
    {
      "keyword": "step 2",
      "rect": {
        "x": 74.0,
        "y": 24.0,
        "w": 10.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Configure fast switching for PBR.",
      "rect": {
        "x": 13.0,
        "y": 32.0,
        "w": 37.0,
        "h": 6.0
      }
    },
    {
      "keyword": "step 3",
      "rect": {
        "x": 74.0,
        "y": 33.0,
        "w": 10.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Configure ACLs.",
      "rect": {
        "x": 13.0,
        "y": 41.0,
        "w": 21.0,
        "h": 6.0
      }
    },
    {
      "keyword": "step 4",
      "rect": {
        "x": 74.0,
        "y": 42.0,
        "w": 10.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Configure match commands.",
      "rect": {
        "x": 13.0,
        "y": 50.0,
        "w": 32.0,
        "h": 6.0
      }
    },
    {
      "keyword": "step 5",
      "rect": {
        "x": 74.0,
        "y": 51.0,
        "w": 10.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Configure PBR on the interface.",
      "rect": {
        "x": 13.0,
        "y": 59.0,
        "w": 35.0,
        "h": 6.0
      }
    },
    {
      "keyword": "step 6",
      "rect": {
        "x": 74.0,
        "y": 60.0,
        "w": 10.0,
        "h": 5.0
      }
    }
  ],
  "204": [
    {
      "keyword": "DHCP_SNOOPING",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Port-channel2",
      "rect": {
        "x": 70.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "invalid mat entry",
      "rect": {
        "x": 47.0,
        "y": 30.0,
        "w": 17.0,
        "h": 3.0
      }
    }
  ],
  "205": [
    {
      "keyword": "Excessive time lag between Cisco DNA Center and WLC \"WLC-5520\"",
      "rect": {
        "x": 24.0,
        "y": 41.25,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "The time on Cisco DNA Center and WLC \"WLC-5520\" has drifted too far apart.",
      "rect": {
        "x": 28.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Suggested Actions (3)",
      "rect": {
        "x": 28.125,
        "y": 50,
        "w": 30.125,
        "h": 20
      }
    },
    {
      "keyword": "If NTP is enabled, check whether the NTP servers are reachable from Cisco DNA Center and the WLC.",
      "rect": {
        "x": 38.375,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "208": [
    {
      "keyword": "BGP AS64512",
      "rect": {
        "x": 24.0,
        "y": 60.0,
        "w": 15.0,
        "h": 6.0
      }
    },
    {
      "keyword": "EIGRP",
      "rect": {
        "x": 46.0,
        "y": 19.0,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "OSPF",
      "rect": {
        "x": 25.0,
        "y": 29.0,
        "w": 10.0,
        "h": 4.0
      }
    }
  ],
  "210": [
    {
      "keyword": "AS 100",
      "rect": {
        "x": 57.0,
        "y": 65,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "AS 200",
      "rect": {
        "x": 95,
        "y": 65,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.10.1",
      "rect": {
        "x": 34.875,
        "y": 50,
        "w": 14.875,
        "h": 17.0
      }
    },
    {
      "keyword": "192.168.20.2",
      "rect": {
        "x": 51.0,
        "y": 50,
        "w": 14.875,
        "h": 17.0
      }
    },
    {
      "keyword": "route-map SETLP in",
      "rect": {
        "x": 38.375,
        "y": 50,
        "w": 24.625,
        "h": 17.0
      }
    },
    {
      "keyword": "172.20.5.0/24",
      "rect": {
        "x": 51.0,
        "y": 50,
        "w": 17.5,
        "h": 17.0
      }
    }
  ],
  "211": [
    {
      "keyword": "Router ospfv3 4",
      "rect": {
        "x": 59.0,
        "y": 46.5,
        "w": 22.125,
        "h": 20
      }
    },
    {
      "keyword": "Interface E 0/0",
      "rect": {
        "x": 59.0,
        "y": 50,
        "w": 18.75,
        "h": 20
      }
    },
    {
      "keyword": "Ospfv3 4 area 0 ipv4",
      "rect": {
        "x": 60.0,
        "y": 50,
        "w": 28.125,
        "h": 20
      }
    },
    {
      "keyword": "Interface Loopback0",
      "rect": {
        "x": 59.0,
        "y": 50,
        "w": 25.5,
        "h": 20
      }
    },
    {
      "keyword": "Ospfv3 4 area 0 ipv4",
      "rect": {
        "x": 60.0,
        "y": 50,
        "w": 28.125,
        "h": 20
      }
    }
  ],
  "212": [
    {
      "keyword": "2018:DB1:A:B::2",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 16.375,
        "h": 18.0
      }
    },
    {
      "keyword": "2018:DB1:A:C::1",
      "rect": {
        "x": 54.625,
        "y": 50,
        "w": 16.375,
        "h": 18.0
      }
    },
    {
      "keyword": "permit tcp host 2018:DB1:A:B::2 host 2018:DB1:A:C::1 eq telnet sequence 30",
      "rect": {
        "x": 28.999999999999996,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "216": [
    {
      "keyword": "ip ospf authentication message-digest",
      "rect": {
        "x": 49.0,
        "y": 65,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "ip ospf message-digest-key 1 md5 Cisco123",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 40,
        "h": 5.0
      }
    }
  ],
  "217": [
    {
      "keyword": "route-map EIGRP->OSPF permit",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "match ip address WAN_PREFIXES",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 38.625,
        "h": 20
      }
    },
    {
      "keyword": "ip prefix-list WAN_PREFIXES seq 5 permit 10.0.0.0/8 le 24",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ip prefix-list LOCAL_PREFIXES seq 5 permit 172.16.0.0/12 le 24",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ip prefix-list VPN_PREFIXES seq 5 permit 192.168.0.0/16 le 24",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "218": [
    {
      "keyword": "ipv6 access-list",
      "rect": {
        "x": 4.0,
        "y": 53.0,
        "w": 16.0,
        "h": 5.0
      }
    },
    {
      "keyword": "INTERNET",
      "rect": {
        "x": 23.0,
        "y": 53.0,
        "w": 12.0,
        "h": 5.0
      }
    }
  ],
  "220": [
    {
      "keyword": "MPLS B",
      "rect": {
        "x": 71.875,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "HQ",
      "rect": {
        "x": 53.75,
        "y": 60.0,
        "w": 40.0,
        "h": 20.0
      }
    },
    {
      "keyword": "Branch B",
      "rect": {
        "x": 95.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Branch A",
      "rect": {
        "x": 31.25,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "221": [
    {
      "keyword": "received author response status = FAIL",
      "rect": {
        "x": 25.0,
        "y": 50,
        "w": 40,
        "h": 4.0
      }
    },
    {
      "keyword": "TAC+:",
      "rect": {
        "x": 25.0,
        "y": 60.0,
        "w": 5.0,
        "h": 3.0
      }
    },
    {
      "keyword": "AUTHOR/START queued",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 17.0,
        "h": 3.0
      }
    },
    {
      "keyword": "AUTHOR/START processed",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 19.0,
        "h": 3.0
      }
    }
  ],
  "222": [
    {
      "keyword": "O E2",
      "rect": {
        "x": 48.0,
        "y": 50,
        "w": 10.0,
        "h": 15.0
      }
    },
    {
      "keyword": "O E1",
      "rect": {
        "x": 48.0,
        "y": 50,
        "w": 10.0,
        "h": 15.0
      }
    },
    {
      "keyword": "O IA",
      "rect": {
        "x": 48.0,
        "y": 50,
        "w": 10.0,
        "h": 15.0
      }
    },
    {
      "keyword": "2.2.2.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 15.0,
        "h": 15.0
      }
    },
    {
      "keyword": "131.108.1.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 18.0,
        "h": 15.0
      }
    },
    {
      "keyword": "131.108.2.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 18.0,
        "h": 15.0
      }
    }
  ],
  "223": [
    {
      "keyword": "AAA/AUTHOR/EXEC(000004B6): Authorization FAILED",
      "rect": {
        "x": 27.0,
        "y": 50,
        "w": 40,
        "h": 4.0
      }
    },
    {
      "keyword": "aaa authorization exec default none",
      "rect": {
        "x": 27.0,
        "y": 25.0,
        "w": 34.0,
        "h": 4.0
      }
    },
    {
      "keyword": "aaa authorization exec VTY_AUTH local",
      "rect": {
        "x": 27.0,
        "y": 30.0,
        "w": 37.0,
        "h": 4.0
      }
    }
  ],
  "224": [
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 13.375,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    },
    {
      "keyword": "192.168.2.0/24",
      "rect": {
        "x": 81.875,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    },
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 13.375,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    },
    {
      "keyword": "192.168.2.0/24",
      "rect": {
        "x": 81.875,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    }
  ],
  "225": [
    {
      "keyword": "access-list 101 permit tcp 192.168.10.0",
      "rect": {
        "x": 42.0,
        "y": 56.99999999999999,
        "w": 34.875,
        "h": 20
      }
    },
    {
      "keyword": "access-list 101 permit tcp 192.168.10.0",
      "rect": {
        "x": 42.0,
        "y": 50,
        "w": 34.875,
        "h": 20
      }
    },
    {
      "keyword": "access-list 101 deny ip any any log",
      "rect": {
        "x": 42.0,
        "y": 50,
        "w": 30.625000000000004,
        "h": 20
      }
    },
    {
      "keyword": "ip access-group 101 in",
      "rect": {
        "x": 42.0,
        "y": 50,
        "w": 21.75,
        "h": 20
      }
    },
    {
      "keyword": "G0/0",
      "rect": {
        "x": 75.5,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "192.168.10.100",
      "rect": {
        "x": 86.0,
        "y": 50,
        "w": 15.5,
        "h": 20
      }
    }
  ],
  "226": [
    {
      "keyword": "entropy label",
      "rect": {
        "x": 12.0,
        "y": 50,
        "w": 22.0,
        "h": 6.0
      }
    },
    {
      "keyword": "controls the amount of memory used to store LDP label bindings advertised by other devices",
      "rect": {
        "x": 52.0,
        "y": 50,
        "w": 40,
        "h": 12.0
      }
    }
  ],
  "227": [
    {
      "keyword": "interface FastEthernet0/3",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 26.125,
        "h": 20
      }
    },
    {
      "keyword": "ip vrf forwarding CLIENT1",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 30.375000000000004,
        "h": 20
      }
    },
    {
      "keyword": "network 172.16.0.0",
      "rect": {
        "x": 22.0,
        "y": 50,
        "w": 19.25,
        "h": 20
      }
    }
  ],
  "228": [
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 46.5,
        "y": 50,
        "w": 13.0,
        "h": 20.0
      }
    },
    {
      "keyword": "10.3.1.0/24",
      "rect": {
        "x": 53.75,
        "y": 50,
        "w": 13.0,
        "h": 20.0
      }
    },
    {
      "keyword": "DR Site",
      "rect": {
        "x": 84.375,
        "y": 50,
        "w": 40,
        "h": 19.0
      }
    },
    {
      "keyword": "Branch Router",
      "rect": {
        "x": 66.25,
        "y": 50,
        "w": 15.75,
        "h": 20.0
      }
    }
  ],
  "230": [
    {
      "keyword": "dhcp server",
      "rect": {
        "x": 71.125,
        "y": 50,
        "w": 22.0,
        "h": 20
      }
    },
    {
      "keyword": "dhcp relay-agent",
      "rect": {
        "x": 59.62499999999999,
        "y": 50,
        "w": 31.0,
        "h": 20
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 29.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 29.375,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "231": [
    {
      "keyword": "OSPF",
      "rect": {
        "x": 20.5,
        "y": 64.25,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 95,
        "y": 26.75,
        "w": 26.0,
        "h": 18.0
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 56.625,
        "y": 50,
        "w": 27.0,
        "h": 18.0
      }
    },
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 51.87500000000001,
        "y": 50,
        "w": 22.375,
        "h": 20
      }
    }
  ],
  "232": [
    {
      "keyword": "PC-2",
      "rect": {
        "x": 44.0,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "2018:DB1:A::2/64",
      "rect": {
        "x": 27.0,
        "y": 50,
        "w": 18.5,
        "h": 15.0
      }
    },
    {
      "keyword": "Terminal Server",
      "rect": {
        "x": 67.0,
        "y": 39.0,
        "w": 18.125,
        "h": 17.0
      }
    },
    {
      "keyword": "2018:DB1:A::1/64",
      "rect": {
        "x": 68.75,
        "y": 57.0,
        "w": 16.25,
        "h": 15.0
      }
    },
    {
      "keyword": "deny tcp any host 2018:DB1:A::1 eq telnet sequence 20",
      "rect": {
        "x": 29.5,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "permit tcp host 2018:DB1:A::2 host 2018:DB1:A::1 eq telnet sequence 30",
      "rect": {
        "x": 29.5,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "233": [
    {
      "keyword": "AS 111",
      "rect": {
        "x": 42.0,
        "y": 42.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "AS 200",
      "rect": {
        "x": 79.0,
        "y": 30.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "195.1.2.2",
      "rect": {
        "x": 91.25,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "195.1.1.1",
      "rect": {
        "x": 18.75,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    }
  ],
  "235": [
    {
      "keyword": "interface loopback0",
      "rect": {
        "x": 47.0,
        "y": 39.0,
        "w": 20.0,
        "h": 4.0
      }
    },
    {
      "keyword": "ip address 4.4.4.4 255.255.255.0",
      "rect": {
        "x": 47.0,
        "y": 60.0,
        "w": 36.0,
        "h": 4.0
      }
    },
    {
      "keyword": "network 4.4.4.4 0.0.0.0 area 0",
      "rect": {
        "x": 47.0,
        "y": 50,
        "w": 30.0,
        "h": 4.0
      }
    },
    {
      "keyword": "network 10.0.0.1 0.0.0.0 area 0",
      "rect": {
        "x": 47.0,
        "y": 50,
        "w": 30.0,
        "h": 4.0
      }
    },
    {
      "keyword": "network 192.168.1.1 0.0.0.0 area 10",
      "rect": {
        "x": 47.0,
        "y": 50,
        "w": 36.0,
        "h": 4.0
      }
    }
  ],
  "238": [
    {
      "keyword": "Administratively disabled",
      "rect": {
        "x": 17.0,
        "y": 44.0,
        "w": 23.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Connection to 198.51.100.64 closed by remote host",
      "rect": {
        "x": 17.0,
        "y": 62.0,
        "w": 40,
        "h": 5.0
      }
    }
  ],
  "239": [
    {
      "keyword": "AB01:2011:7:100::3",
      "rect": {
        "x": 15.375,
        "y": 63.0,
        "w": 17.5,
        "h": 15.0
      }
    },
    {
      "keyword": "AB01:2011:7:100::1",
      "rect": {
        "x": 91.25,
        "y": 63.0,
        "w": 17.5,
        "h": 15.0
      }
    },
    {
      "keyword": "BGP AS 6501",
      "rect": {
        "x": 20.5,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "BGP AS 6502",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "active went from Idle to Active",
      "rect": {
        "x": 49.375,
        "y": 50,
        "w": 28.749999999999996,
        "h": 15.0
      }
    },
    {
      "keyword": "open failed: Connection refused by remote host",
      "rect": {
        "x": 49.375,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    }
  ],
  "241": [
    {
      "keyword": "EIGRP AS 100",
      "rect": {
        "x": 16.5,
        "y": 47.0,
        "w": 17.5,
        "h": 20
      }
    },
    {
      "keyword": "EIGRP AS 100",
      "rect": {
        "x": 51.37500000000001,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    },
    {
      "keyword": "EIGRP AS 100",
      "rect": {
        "x": 51.37500000000001,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    }
  ],
  "242": [
    {
      "keyword": "SNMP: Packet received via UDP",
      "rect": {
        "x": 13.0,
        "y": 34.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "authentication failure, Unknown Engine ID",
      "rect": {
        "x": 18.0,
        "y": 41.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "SNMP: Report, reqid 29548",
      "rect": {
        "x": 13.0,
        "y": 57.0,
        "w": 31.0,
        "h": 5.0
      }
    },
    {
      "keyword": "SNMP: Packet sent via UDP",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 32.0,
        "h": 5.0
      }
    }
  ],
  "243": [
    {
      "keyword": "time-range Contractor",
      "rect": {
        "x": 69.625,
        "y": 50,
        "w": 17.5,
        "h": 14.0
      }
    },
    {
      "keyword": "periodic weekdays 8:00 to 16:30",
      "rect": {
        "x": 69.625,
        "y": 50,
        "w": 31.0,
        "h": 14.0
      }
    },
    {
      "keyword": "10.1.1.3 eq telnet time-range Contractor (inactive)",
      "rect": {
        "x": 69.625,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "10.1.1.3 eq www time-range Contractor (inactive)",
      "rect": {
        "x": 69.625,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    }
  ],
  "246": [
    {
      "keyword": "ip next-hop verify-availability 209.165.202.131 2 track 200 [up]",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ip address (access-lists): FILTER_ACL",
      "rect": {
        "x": 53.0,
        "y": 40.0,
        "w": 37.5,
        "h": 20
      }
    },
    {
      "keyword": "route-map PBR, permit, sequence 10",
      "rect": {
        "x": 53.0,
        "y": 60.0,
        "w": 40,
        "h": 20
      }
    }
  ],
  "247": [
    {
      "keyword": "192.168.1.6/24",
      "rect": {
        "x": 52.0,
        "y": 44.0,
        "w": 15.0,
        "h": 4.0
      }
    },
    {
      "keyword": "192.1.10.0/24",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 15.0,
        "h": 4.0
      }
    },
    {
      "keyword": "e0/0",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "(.6)",
      "rect": {
        "x": 56.00000000000001,
        "y": 43.5,
        "w": 3.0,
        "h": 3.0
      }
    }
  ],
  "248": [
    {
      "keyword": "access-list 20 permit 10.221.10.10",
      "rect": {
        "x": 32.5,
        "y": 50,
        "w": 32.5,
        "h": 20
      }
    },
    {
      "keyword": "NMS Server 10.221.10.11",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 21.25,
        "h": 20
      }
    },
    {
      "keyword": "access-list 11 permit 10.221.10.11",
      "rect": {
        "x": 32.5,
        "y": 50,
        "w": 34.75,
        "h": 20
      }
    }
  ],
  "249": [
    {
      "keyword": "TACACS+ Server 10.100.50.99",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 23.0,
        "h": 10.0
      }
    },
    {
      "keyword": "WAN Cloud",
      "rect": {
        "x": 42.0,
        "y": 10.0,
        "w": 16.0,
        "h": 6.0
      }
    },
    {
      "keyword": "Head Office Router",
      "rect": {
        "x": 22.0,
        "y": 43.0,
        "w": 16.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Branch Router",
      "rect": {
        "x": 67.0,
        "y": 43.0,
        "w": 13.0,
        "h": 5.0
      }
    }
  ],
  "251": [
    {
      "keyword": "AS 64512",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R4",
      "rect": {
        "x": 52.0,
        "y": 50,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R5",
      "rect": {
        "x": 34.375,
        "y": 50,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 59.375,
        "y": 35.0,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 72.5,
        "y": 50,
        "w": 4.0,
        "h": 3.0
      }
    }
  ],
  "252": [
    {
      "keyword": "192.168.100.0/24",
      "rect": {
        "x": 13.25,
        "y": 43.0,
        "w": 16.25,
        "h": 17.0
      }
    },
    {
      "keyword": "BGP AS 65510",
      "rect": {
        "x": 47.25,
        "y": 50,
        "w": 18.0,
        "h": 20
      }
    },
    {
      "keyword": "iBGP",
      "rect": {
        "x": 55.00000000000001,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 20.0,
        "y": 50,
        "w": 40.0,
        "h": 20
      }
    },
    {
      "keyword": "R4",
      "rect": {
        "x": 95.0,
        "y": 50,
        "w": 40.0,
        "h": 20
      }
    }
  ],
  "256": [
    {
      "keyword": "class-map COPP-TELNET",
      "rect": {
        "x": 15.0,
        "y": 36.0,
        "w": 25.0,
        "h": 4.0
      }
    },
    {
      "keyword": "match access-group 101",
      "rect": {
        "x": 39.0,
        "y": 43.5,
        "w": 23.0,
        "h": 4.0
      }
    },
    {
      "keyword": "police 100000",
      "rect": {
        "x": 41.0,
        "y": 65.0,
        "w": 14.0,
        "h": 4.0
      }
    },
    {
      "keyword": "control-plane",
      "rect": {
        "x": 21.0,
        "y": 50,
        "w": 15.0,
        "h": 4.0
      }
    },
    {
      "keyword": "service-policy input PM-COPP",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 26.0,
        "h": 4.0
      }
    }
  ],
  "259": [
    {
      "keyword": "ACCESS and port GigabitEthernet1/0/14",
      "rect": {
        "x": 21.25,
        "y": 50,
        "w": 38.5,
        "h": 20
      }
    }
  ],
  "260": [
    {
      "keyword": "10.1.100.0/24 is directly connected, FastEthernet0/0",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "261": [
    {
      "keyword": "10.0.0.0/8",
      "rect": {
        "x": 95,
        "y": 46.25,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "10.1.2.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "10.1.100.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "262": [
    {
      "keyword": "2001:db8:a::/64",
      "rect": {
        "x": 46.0,
        "y": 49.25,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "2001:db8:a::7",
      "rect": {
        "x": 29.25,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "permit tcp host 2001:DB8:A::10 host 2001:DB8:A::7 eq telnet sequence 20",
      "rect": {
        "x": 14.625,
        "y": 50,
        "w": 40,
        "h": 2.0
      }
    },
    {
      "keyword": "deny tcp any host 2001:DB8:A::7 eq telnet (6 matches) sequence 10",
      "rect": {
        "x": 14.625,
        "y": 50,
        "w": 40,
        "h": 2.0
      }
    },
    {
      "keyword": "permit ipv6 2001:DB8:A::/64 any (67 matches) sequence 40",
      "rect": {
        "x": 14.625,
        "y": 50,
        "w": 40,
        "h": 2.0
      }
    }
  ],
  "263": [
    {
      "keyword": "10.66.66.66",
      "rect": {
        "x": 0.0,
        "y": 65,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "ip access-list extended DDOS",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "permit icmp host 10.10.10.1 host 10.66.66.66",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Loopback 0 10.10.10.1",
      "rect": {
        "x": 95,
        "y": 37.0,
        "w": 17.625,
        "h": 18.0
      }
    },
    {
      "keyword": "10.10.10.1",
      "rect": {
        "x": 95,
        "y": 55.0,
        "w": 17.25,
        "h": 18.0
      }
    }
  ],
  "265": [
    {
      "keyword": "aaa authentication login telnet group TAC-SERV",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "tacacs server ISE1",
      "rect": {
        "x": 15.0,
        "y": 56.49999999999999,
        "w": 29.0,
        "h": 5.0
      }
    },
    {
      "keyword": "address ipv4 192.168.1.5",
      "rect": {
        "x": 35.0,
        "y": 50,
        "w": 40.0,
        "h": 5.0
      }
    },
    {
      "keyword": "key Cisco123",
      "rect": {
        "x": 35.0,
        "y": 50,
        "w": 19.0,
        "h": 5.0
      }
    },
    {
      "keyword": "aaa group server tacacs+ TAC-SERV",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "server name ISEI",
      "rect": {
        "x": 35.0,
        "y": 50,
        "w": 22.0,
        "h": 5.0
      }
    }
  ],
  "266": [
    {
      "keyword": "ipv6 traffic-filter ACL in",
      "rect": {
        "x": 15.0,
        "y": 48.5,
        "w": 26.125,
        "h": 20.0
      }
    },
    {
      "keyword": "sequence 80 deny ipv6 any any log",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 38.625,
        "h": 20.0
      }
    },
    {
      "keyword": "denied icmpv6",
      "rect": {
        "x": 46.75,
        "y": 50,
        "w": 16.875,
        "h": 19.0
      }
    }
  ],
  "269": [
    {
      "keyword": "line con 0",
      "rect": {
        "x": 65.5,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "270": [
    {
      "keyword": "NMS/TFTP Server",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 20.0,
        "h": 20
      }
    },
    {
      "keyword": "10.221.10.11",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 16.75,
        "h": 20
      }
    }
  ],
  "271": [
    {
      "keyword": "R1",
      "rect": {
        "x": 47.0,
        "y": 50,
        "w": 6.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 6.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 81.0,
        "y": 50,
        "w": 6.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Lo0: 2.2.2.2",
      "rect": {
        "x": 11.0,
        "y": 50,
        "w": 14.0,
        "h": 4.0
      }
    }
  ],
  "272": [
    {
      "keyword": "area 234 virtual-link 10.34.34.4",
      "rect": {
        "x": 33.0,
        "y": 50,
        "w": 28.375,
        "h": 17.0
      }
    },
    {
      "keyword": "area 234 virtual-link 10.23.23.2",
      "rect": {
        "x": 67.0,
        "y": 50,
        "w": 28.375,
        "h": 17.0
      }
    },
    {
      "keyword": "area 0 virtual-link 0.0.0.44",
      "rect": {
        "x": 67.0,
        "y": 50,
        "w": 25.0,
        "h": 17.0
      }
    },
    {
      "keyword": "area 0 virtual-link 0.0.0.22",
      "rect": {
        "x": 33.0,
        "y": 50,
        "w": 25.0,
        "h": 17.0
      }
    }
  ],
  "273": [
    {
      "keyword": "DHCP Server\n172.16.1.2",
      "rect": {
        "x": 56.0,
        "y": 50,
        "w": 18.75,
        "h": 20
      }
    },
    {
      "keyword": "172.31.1.1",
      "rect": {
        "x": 75.5,
        "y": 50,
        "w": 13.625000000000002,
        "h": 20
      }
    },
    {
      "keyword": "RouterB",
      "rect": {
        "x": 69.375,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.1.1.1",
      "rect": {
        "x": 56.25,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "274": [
    {
      "keyword": "192.168.2.0/30",
      "rect": {
        "x": 42.0,
        "y": 47.0,
        "w": 15.0,
        "h": 4.0
      }
    },
    {
      "keyword": ".1",
      "rect": {
        "x": 28.0,
        "y": 55.0,
        "w": 3.0,
        "h": 3.0
      }
    },
    {
      "keyword": ".2",
      "rect": {
        "x": 73.0,
        "y": 55.0,
        "w": 3.0,
        "h": 3.0
      }
    },
    {
      "keyword": "G2/0",
      "rect": {
        "x": 27.0,
        "y": 47.0,
        "w": 6.0,
        "h": 4.0
      }
    },
    {
      "keyword": "HQ",
      "rect": {
        "x": 83.0,
        "y": 41.0,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Branch",
      "rect": {
        "x": 72.0,
        "y": 41.0,
        "w": 6.0,
        "h": 3.0
      }
    }
  ],
  "275": [
    {
      "keyword": "BGP AS 9301",
      "rect": {
        "x": 95,
        "y": 44.0,
        "w": 22.25,
        "h": 20
      }
    },
    {
      "keyword": "OSPF 100",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 22.25,
        "h": 20
      }
    }
  ],
  "276": [
    {
      "keyword": "RR",
      "rect": {
        "x": 40.0,
        "y": 12.0,
        "w": 5.0,
        "h": 3.0
      }
    },
    {
      "keyword": "neighbor 10.1.1.1",
      "rect": {
        "x": 23.0,
        "y": 50,
        "w": 18.625,
        "h": 19.0
      }
    },
    {
      "keyword": "neighbor 10.1.2.2",
      "rect": {
        "x": 23.0,
        "y": 50,
        "w": 18.625,
        "h": 19.0
      }
    },
    {
      "keyword": "neighbor 10.1.3.3",
      "rect": {
        "x": 23.0,
        "y": 50,
        "w": 18.625,
        "h": 19.0
      }
    }
  ],
  "277": [
    {
      "keyword": "GigabitEthernet0/0",
      "rect": {
        "x": 39.0,
        "y": 65,
        "w": 24.0,
        "h": 4.0
      }
    },
    {
      "keyword": "GigabitEthernet0/1",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 24.0,
        "h": 4.0
      }
    },
    {
      "keyword": "verification drops",
      "rect": {
        "x": 50.0,
        "y": 58.75,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "verification drops",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 15.0,
        "h": 3.0
      }
    }
  ],
  "278": [
    {
      "keyword": "access-list 100 permit ip host 172.16.1.99 any",
      "rect": {
        "x": 14.0,
        "y": 45.0,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "police 500000 conform-action transmit",
      "rect": {
        "x": 14.0,
        "y": 65,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "service-policy input PM-COPP",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "280": [
    {
      "keyword": "ipv6 address dhcp",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 15.625,
        "h": 20.0
      }
    },
    {
      "keyword": "ipv6 dhcp client:",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 18.5,
        "h": 20
      }
    },
    {
      "keyword": "interface Ethernet0/1",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 22.25,
        "h": 20
      }
    }
  ],
  "281": [
    {
      "keyword": "ipv6 access-list INTERNET",
      "rect": {
        "x": 4.0,
        "y": 13.0,
        "w": 35.0,
        "h": 5.0
      }
    },
    {
      "keyword": "permit ipv6",
      "rect": {
        "x": 4.0,
        "y": 24.0,
        "w": 12.0,
        "h": 5.0
      }
    },
    {
      "keyword": "permit tcp",
      "rect": {
        "x": 4.0,
        "y": 34.0,
        "w": 12.0,
        "h": 5.0
      }
    },
    {
      "keyword": "permit tcp",
      "rect": {
        "x": 4.0,
        "y": 44.0,
        "w": 12.0,
        "h": 5.0
      }
    },
    {
      "keyword": "permit ipv6",
      "rect": {
        "x": 4.0,
        "y": 54.0,
        "w": 12.0,
        "h": 5.0
      }
    },
    {
      "keyword": "deny ipv6",
      "rect": {
        "x": 4.0,
        "y": 64.0,
        "w": 12.0,
        "h": 5.0
      }
    }
  ],
  "282": [
    {
      "keyword": "interface Loopback0",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 25.0,
        "h": 20
      }
    },
    {
      "keyword": "ip address 10.1.1.1 255.255.255.0",
      "rect": {
        "x": 14.249999999999998,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "vrf forwarding CCNP",
      "rect": {
        "x": 14.249999999999998,
        "y": 50,
        "w": 34.375,
        "h": 20
      }
    }
  ],
  "283": [
    {
      "keyword": "R1#show flow interface",
      "rect": {
        "x": 43.375,
        "y": 50,
        "w": 18.75,
        "h": 15.0
      }
    },
    {
      "keyword": "Interface Ethernet0/1",
      "rect": {
        "x": 45.125,
        "y": 50,
        "w": 17.5,
        "h": 15.0
      }
    },
    {
      "keyword": "direction Input",
      "rect": {
        "x": 52.25,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "direction Output",
      "rect": {
        "x": 52.25,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "R1#show flow exporter",
      "rect": {
        "x": 29.0,
        "y": 50,
        "w": 18.75,
        "h": 15.0
      }
    },
    {
      "keyword": "Source IP address: 10.2.2.1",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 18.75,
        "h": 15.0
      }
    },
    {
      "keyword": "Source Interface: Ethernet0/1",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 23.75,
        "h": 15.0
      }
    },
    {
      "keyword": "Destination IP address: 10.221.10.10",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 27.500000000000004,
        "h": 15.0
      }
    },
    {
      "keyword": "NMS Server 10.221.10.10",
      "rect": {
        "x": 95,
        "y": 65,
        "w": 15.0,
        "h": 20
      }
    }
  ],
  "284": [
    {
      "keyword": "DMVPN Network",
      "rect": {
        "x": 30.0,
        "y": 44.0,
        "w": 17.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R1 Hub",
      "rect": {
        "x": 35.0,
        "y": 65,
        "w": 6.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R2 Spoke 1",
      "rect": {
        "x": 17.0,
        "y": 56.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R3 Spoke 2",
      "rect": {
        "x": 48.0,
        "y": 56.0,
        "w": 8.0,
        "h": 3.0
      }
    }
  ],
  "285": [
    {
      "keyword": "Invalid AUTHEN packet (check keys).",
      "rect": {
        "x": 32.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "received bad AUTHEN packet: length = 6, expected 43974",
      "rect": {
        "x": 32.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "286": [
    {
      "keyword": "track 700 ip sla 700",
      "rect": {
        "x": 20.875,
        "y": 50,
        "w": 18.25,
        "h": 17.0
      }
    },
    {
      "keyword": "delay down 30 up 20",
      "rect": {
        "x": 57.875,
        "y": 50,
        "w": 18.5,
        "h": 17.0
      }
    }
  ],
  "287": [
    {
      "keyword": "EIGRP10 DMVPN",
      "rect": {
        "x": 42.0,
        "y": 50,
        "w": 16.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 44.0,
        "y": 37.0,
        "w": 9.0,
        "h": 2.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 53.0,
        "y": 49.0,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Gi0/0",
      "rect": {
        "x": 52.0,
        "y": 55.0,
        "w": 5.0,
        "h": 2.0
      }
    }
  ],
  "288": [
    {
      "keyword": "EIGRP 111",
      "rect": {
        "x": 78.0,
        "y": 37.0,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "RIPv2",
      "rect": {
        "x": 95,
        "y": 37.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "set tag 111",
      "rect": {
        "x": 38.25,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "router ospf 1",
      "rect": {
        "x": 38.25,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "redistribute eigrp 111 route-map E20 subnets",
      "rect": {
        "x": 38.25,
        "y": 50,
        "w": 30.0,
        "h": 2.0
      }
    },
    {
      "keyword": "router rip",
      "rect": {
        "x": 38.25,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "router ospf 1",
      "rect": {
        "x": 38.25,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "redistribute rip subnets",
      "rect": {
        "x": 38.25,
        "y": 50,
        "w": 17.0,
        "h": 2.0
      }
    },
    {
      "keyword": "R4",
      "rect": {
        "x": 84.375,
        "y": 50,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "R5",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.1.40.0/24",
      "rect": {
        "x": 95,
        "y": 33.75,
        "w": 11.0,
        "h": 3.0
      }
    }
  ],
  "289": [
    {
      "keyword": "Flow Exporter FlowAnalyzer1",
      "rect": {
        "x": 33.625,
        "y": 50,
        "w": 32.0,
        "h": 20
      }
    },
    {
      "keyword": "Destination IP address: 10.221.10.10",
      "rect": {
        "x": 33.75,
        "y": 50,
        "w": 32.0,
        "h": 20
      }
    },
    {
      "keyword": "NMS Server 10.221.10.11",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 16.375,
        "h": 20
      }
    }
  ],
  "294": [
    {
      "keyword": "line con 0",
      "rect": {
        "x": 35.0,
        "y": 50,
        "w": 18.125,
        "h": 20
      }
    },
    {
      "keyword": "aaa authorization exec",
      "rect": {
        "x": 35.0,
        "y": 61.25000000000001,
        "w": 37.5,
        "h": 20
      }
    },
    {
      "keyword": "transport input ssh",
      "rect": {
        "x": 35.0,
        "y": 50,
        "w": 30.0,
        "h": 20
      }
    }
  ],
  "295": [
    {
      "keyword": "ip prefix-list EIGRP seq 10 deny 0.0.0.0/0 le 32",
      "rect": {
        "x": 11.0,
        "y": 65,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "ip prefix-list EIGRP seq 20 permit 10.0.0.0/8",
      "rect": {
        "x": 11.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    },
    {
      "keyword": "distribute-list prefix EIGRP in Ethernet0/0",
      "rect": {
        "x": 11.0,
        "y": 31.0,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "297": [
    {
      "keyword": "vrf forwarding RED",
      "rect": {
        "x": 4.0,
        "y": 43.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "ip address 10.0.0.0 255.255.255.254",
      "rect": {
        "x": 4.0,
        "y": 62.0,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "298": [
    {
      "keyword": "172.31.100.0/24",
      "rect": {
        "x": 29.375,
        "y": 59.75,
        "w": 21.0,
        "h": 20
      }
    },
    {
      "keyword": "172.31.200.0/24",
      "rect": {
        "x": 69.25,
        "y": 49.75,
        "w": 21.0,
        "h": 20
      }
    },
    {
      "keyword": "VRF A",
      "rect": {
        "x": 59.375,
        "y": 59.75,
        "w": 40,
        "h": 20
      }
    }
  ],
  "300": [
    {
      "keyword": "EXCHANGE/",
      "rect": {
        "x": 29.0,
        "y": 19.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "EXSTART/",
      "rect": {
        "x": 29.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.99.1",
      "rect": {
        "x": 64.0,
        "y": 20.0,
        "w": 12.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.99.2",
      "rect": {
        "x": 64.0,
        "y": 50,
        "w": 12.0,
        "h": 3.0
      }
    }
  ],
  "301": [
    {
      "keyword": "172.16.0.0/24",
      "rect": {
        "x": 37.0,
        "y": 50,
        "w": 26.0,
        "h": 5.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 7.0,
        "h": 5.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 79.0,
        "y": 50,
        "w": 7.0,
        "h": 5.0
      }
    },
    {
      "keyword": "AS 100",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 9.0,
        "h": 4.0
      }
    },
    {
      "keyword": "AS 200",
      "rect": {
        "x": 78.0,
        "y": 50,
        "w": 9.0,
        "h": 4.0
      }
    }
  ],
  "309": [
    {
      "keyword": "Administratively disabled.",
      "rect": {
        "x": 10.0,
        "y": 43.0,
        "w": 25.0,
        "h": 5.0
      }
    }
  ],
  "310": [
    {
      "keyword": "route-map FILTER-IN deny 10",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 30.0,
        "h": 20
      }
    },
    {
      "keyword": "ip prefix-list 102 seq 10 permit 10.1.1.100/32",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "route-map FILTER-IN deny 10",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 30.0,
        "h": 20
      }
    },
    {
      "keyword": "distribute-list route-map FILTER-IN in FastEthernet0/0",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "311": [
    {
      "keyword": "Username: cisco",
      "rect": {
        "x": 34.0,
        "y": 50,
        "w": 17.875,
        "h": 17.0
      }
    },
    {
      "keyword": "Password: cisco",
      "rect": {
        "x": 34.0,
        "y": 50,
        "w": 17.125,
        "h": 17.0
      }
    },
    {
      "keyword": "File to download: IOS.bin",
      "rect": {
        "x": 34.0,
        "y": 50,
        "w": 23.75,
        "h": 17.0
      }
    },
    {
      "keyword": "%Error opening ftp://cisco:cisco@10.0.0.2/IOS.bin (No such file or directory)",
      "rect": {
        "x": 51.74999999999999,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "315": [
    {
      "keyword": "icmp-echo 8.8.8.8",
      "rect": {
        "x": 35.0,
        "y": 29.75,
        "w": 20.0,
        "h": 4.0
      }
    }
  ],
  "316": [
    {
      "keyword": "Tunnel source 199.1.1.1, destination 200.1.1.3",
      "rect": {
        "x": 75.0,
        "y": 35.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Tunnel transmit bandwidth 8000 (kbps)",
      "rect": {
        "x": 75.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Tunnel receive bandwidth 8000 (kbps)",
      "rect": {
        "x": 75.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "318": [
    {
      "keyword": "host",
      "rect": {
        "x": 14.0,
        "y": 26.0,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Receives router advertisements from valid routers, and no router solicitation are received.",
      "rect": {
        "x": 64.625,
        "y": 45.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "router",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Receives router solicitation and sends router advertisements.",
      "rect": {
        "x": 64.625,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "monitor",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 8.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Receives valid and rogue router advertisements and all router solicitation.",
      "rect": {
        "x": 64.625,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "switch",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Received router advertisements are trusted and are flooded to synchronize states.",
      "rect": {
        "x": 64.625,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    }
  ],
  "319": [
    {
      "keyword": "deny tcp any host 2001:DB8:A::B::10 eq telnet sequence 10",
      "rect": {
        "x": 17.0,
        "y": 40.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "permit tcp host 2001:DB8:A::A::20 host 2001:DB8:A::B::10 eq telnet sequence 20",
      "rect": {
        "x": 17.0,
        "y": 49.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "permit tcp host 2001:DB8:A::A::2 host 2001:DB8:D::1 eq www sequence 30",
      "rect": {
        "x": 17.0,
        "y": 57.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "permit ipv6 2001:DB8:A::A::/64 any (67 matches) sequence 40",
      "rect": {
        "x": 17.0,
        "y": 65.0,
        "w": 40,
        "h": 6.0
      }
    }
  ],
  "320": [
    {
      "keyword": "interface Ethernet0/0.1",
      "rect": {
        "x": 63.0,
        "y": 50,
        "w": 32.0,
        "h": 20
      }
    },
    {
      "keyword": "ip flow monitor v4_r1 input",
      "rect": {
        "x": 63.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "flow monitor FLOW-MONITOR-1",
      "rect": {
        "x": 63.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "323": [
    {
      "keyword": "199.1.1.0/24",
      "rect": {
        "x": 22.25,
        "y": 47.0,
        "w": 17.375,
        "h": 20
      }
    },
    {
      "keyword": "200.1.1.0/24",
      "rect": {
        "x": 82.25,
        "y": 47.0,
        "w": 17.375,
        "h": 20
      }
    },
    {
      "keyword": "e0/0",
      "rect": {
        "x": 17.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "e0/1",
      "rect": {
        "x": 73.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "327": [
    {
      "keyword": "tunnel destination 10.255.255.1",
      "rect": {
        "x": 5.0,
        "y": 65,
        "w": 38.625,
        "h": 20
      }
    },
    {
      "keyword": "disabled due to recursive routing",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40.0,
        "h": 20
      }
    },
    {
      "keyword": "net 192.168.12.2 0.0.0.0",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 33.0,
        "h": 20
      }
    }
  ],
  "328": [
    {
      "keyword": "EIGRP",
      "rect": {
        "x": 56.75,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "RIP",
      "rect": {
        "x": 62.375,
        "y": 50,
        "w": 32.0,
        "h": 15.0
      }
    },
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 21.25,
        "y": 50,
        "w": 14.625,
        "h": 19.0
      }
    },
    {
      "keyword": "s1",
      "rect": {
        "x": 23.0,
        "y": 50,
        "w": 18.0,
        "h": 17.0
      }
    },
    {
      "keyword": "s0",
      "rect": {
        "x": 80.625,
        "y": 50,
        "w": 18.0,
        "h": 17.0
      }
    }
  ],
  "331": [
    {
      "keyword": "IP-EIGRP neighbors",
      "rect": {
        "x": 17.0,
        "y": 13.0,
        "w": 20.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.10.1",
      "rect": {
        "x": 17.0,
        "y": 22.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "is down: retry limit exceeded",
      "rect": {
        "x": 75.0,
        "y": 42.0,
        "w": 24.0,
        "h": 3.0
      }
    },
    {
      "keyword": "is up: new adjacency",
      "rect": {
        "x": 75.0,
        "y": 46.0,
        "w": 19.0,
        "h": 3.0
      }
    }
  ],
  "333": [
    {
      "keyword": "UDP-ACL",
      "rect": {
        "x": 50.74999999999999,
        "y": 30.75,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "permit udp any any",
      "rect": {
        "x": 50.74999999999999,
        "y": 35.0,
        "w": 20.0,
        "h": 14.0
      }
    },
    {
      "keyword": "10.10.10.0/24",
      "rect": {
        "x": 21.125,
        "y": 50,
        "w": 16.0,
        "h": 20.0
      }
    },
    {
      "keyword": "10.10.11.0/24",
      "rect": {
        "x": 63.0,
        "y": 50,
        "w": 16.25,
        "h": 20.0
      }
    },
    {
      "keyword": "10.10.12.0/24",
      "rect": {
        "x": 35.875,
        "y": 50,
        "w": 16.25,
        "h": 20.0
      }
    }
  ],
  "334": [
    {
      "keyword": "EIGRP AS100",
      "rect": {
        "x": 91.375,
        "y": 44.25,
        "w": 14.875,
        "h": 20
      }
    }
  ],
  "336": [
    {
      "keyword": "172.16.2.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 17.125,
        "h": 20
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 91.625,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 55.50000000000001,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.1.2.0/24",
      "rect": {
        "x": 70.25,
        "y": 50,
        "w": 17.125,
        "h": 20
      }
    }
  ],
  "337": [
    {
      "keyword": "ipv6 nd ra suppress",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ipv6 dhcp server DHCPPOOL",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "339": [
    {
      "keyword": "Invalid encrypted password",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 25.0,
        "h": 4.0
      }
    },
    {
      "keyword": "username Admin password 7 Cisco@123",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 40.0,
        "h": 4.0
      }
    }
  ],
  "340": [
    {
      "keyword": "20",
      "rect": {
        "x": 49.5,
        "y": 50,
        "w": 27.0,
        "h": 20
      }
    },
    {
      "keyword": "80",
      "rect": {
        "x": 33.0,
        "y": 50,
        "w": 33.0,
        "h": 20
      }
    }
  ],
  "341": [
    {
      "keyword": "Area 20",
      "rect": {
        "x": 68.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 74.0,
        "y": 50,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Area 5",
      "rect": {
        "x": 27.0,
        "y": 50,
        "w": 7.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 28.749999999999996,
        "y": 50,
        "w": 3.0,
        "h": 2.0
      }
    }
  ],
  "344": [
    {
      "keyword": "2001:DB8::/64",
      "rect": {
        "x": 85.0,
        "y": 49.75,
        "w": 14.000000000000002,
        "h": 16.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 29.625,
        "y": 50,
        "w": 27.0,
        "h": 17.0
      }
    },
    {
      "keyword": "2001:DB1::1/64",
      "rect": {
        "x": 34.0,
        "y": 49.75,
        "w": 14.000000000000002,
        "h": 16.0
      }
    }
  ],
  "345": [
    {
      "keyword": "router eigrp 1",
      "rect": {
        "x": 45.0,
        "y": 50,
        "w": 14.0,
        "h": 3.0
      }
    },
    {
      "keyword": "no ip split-horizon eigrp 1",
      "rect": {
        "x": 45.0,
        "y": 51.0,
        "w": 24.0,
        "h": 3.0
      }
    },
    {
      "keyword": "ip nhrp next-hop-self",
      "rect": {
        "x": 45.0,
        "y": 44.0,
        "w": 22.0,
        "h": 3.0
      }
    }
  ],
  "349": [
    {
      "keyword": "10.11.110.12",
      "rect": {
        "x": 43.0,
        "y": 50,
        "w": 13.625000000000002,
        "h": 17.0
      }
    },
    {
      "keyword": "permit 10.11.110.11",
      "rect": {
        "x": 43.0,
        "y": 50,
        "w": 22.125,
        "h": 20.0
      }
    },
    {
      "keyword": "permit 10.11.111.12",
      "rect": {
        "x": 43.0,
        "y": 50,
        "w": 22.125,
        "h": 20.0
      }
    }
  ],
  "351": [
    {
      "keyword": "%Error opening tftp://10.0.2.4/packages.conf (Undefined error)",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 7.0
      }
    }
  ],
  "353": [
    {
      "keyword": "AS65002",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 25.0,
        "h": 20
      }
    },
    {
      "keyword": "2005:DEAD:BEEF:DB2::/64",
      "rect": {
        "x": 89.75,
        "y": 44.0,
        "w": 29.125,
        "h": 20
      }
    },
    {
      "keyword": "10.12.12.0/24",
      "rect": {
        "x": 51.125,
        "y": 50,
        "w": 14.875,
        "h": 20
      }
    },
    {
      "keyword": "Router2",
      "rect": {
        "x": 92.375,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": ":2",
      "rect": {
        "x": 92.375,
        "y": 50,
        "w": 23.0,
        "h": 20.0
      }
    },
    {
      "keyword": ":2",
      "rect": {
        "x": 92.375,
        "y": 50,
        "w": 23.0,
        "h": 20.0
      }
    }
  ],
  "357": [
    {
      "keyword": "10.40.10.0/30",
      "rect": {
        "x": 63.0,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.10.20.0/30",
      "rect": {
        "x": 22.25,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.10.20.2",
      "rect": {
        "x": 33.125,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.10.10.2",
      "rect": {
        "x": 33.125,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "D 10.40.10.0/30 [1/0] via 10.10.20.2",
      "rect": {
        "x": 30.0,
        "y": 50,
        "w": 40,
        "h": 2.0
      }
    },
    {
      "keyword": "O 2.2.2.2/32 [110/2] via 10.10.10.2",
      "rect": {
        "x": 30.0,
        "y": 50,
        "w": 40,
        "h": 2.0
      }
    }
  ],
  "358": [
    {
      "keyword": "service timestamps debug datetime msec",
      "rect": {
        "x": 25.0,
        "y": 50,
        "w": 30.0,
        "h": 3.0
      }
    },
    {
      "keyword": "service timestamps log datetime msec",
      "rect": {
        "x": 25.0,
        "y": 50,
        "w": 30.0,
        "h": 3.0
      }
    },
    {
      "keyword": "clock timezone EET 2 0",
      "rect": {
        "x": 25.0,
        "y": 50,
        "w": 17.0,
        "h": 3.0
      }
    }
  ],
  "359": [
    {
      "keyword": "10.11.11.0/24",
      "rect": {
        "x": 43.0,
        "y": 50,
        "w": 14.499999999999998,
        "h": 20
      }
    },
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 24.75,
        "y": 50,
        "w": 13.375,
        "h": 20
      }
    },
    {
      "keyword": "10.1.2.0/24",
      "rect": {
        "x": 24.75,
        "y": 50,
        "w": 13.375,
        "h": 20
      }
    },
    {
      "keyword": "10.10.10.0/24",
      "rect": {
        "x": 43.0,
        "y": 42.5,
        "w": 14.499999999999998,
        "h": 20
      }
    },
    {
      "keyword": "10.10.30.0/24",
      "rect": {
        "x": 59.5,
        "y": 58.5,
        "w": 14.499999999999998,
        "h": 20
      }
    },
    {
      "keyword": "10.10.20.0/24",
      "rect": {
        "x": 82.5,
        "y": 42.5,
        "w": 14.499999999999998,
        "h": 20
      }
    }
  ],
  "360": [
    {
      "keyword": "O E2 10.123.187.0/24",
      "rect": {
        "x": 5.0,
        "y": 50,
        "w": 30.0,
        "h": 5.0
      }
    },
    {
      "keyword": "via 10.1.3.2",
      "rect": {
        "x": 52.0,
        "y": 50,
        "w": 12.0,
        "h": 5.0
      }
    },
    {
      "keyword": "FastEthernet0/1",
      "rect": {
        "x": 74.0,
        "y": 50,
        "w": 24.0,
        "h": 5.0
      }
    }
  ],
  "368": [
    {
      "keyword": "NMS Server 10.66.66.66",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    },
    {
      "keyword": "Flow Exporter FlowExporter1",
      "rect": {
        "x": 46.25,
        "y": 50,
        "w": 25.0,
        "h": 20.0
      }
    },
    {
      "keyword": "Destination IP address: 10.60.66.66",
      "rect": {
        "x": 46.25,
        "y": 50,
        "w": 30.0,
        "h": 20.0
      }
    },
    {
      "keyword": "R1#show flow exporter",
      "rect": {
        "x": 46.25,
        "y": 50,
        "w": 18.75,
        "h": 20.0
      }
    }
  ],
  "372": [
    {
      "keyword": "OSPF",
      "rect": {
        "x": 15.0,
        "y": 34.0,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "OSPF",
      "rect": {
        "x": 15.0,
        "y": 50.0,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "OSPF",
      "rect": {
        "x": 15.0,
        "y": 65,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "OSPF",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "OSPF",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 28.499999999999996,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 32.5,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 36.5,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 40.5,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 44.5,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 48.5,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 52.5,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 56.49999999999999,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 60.5,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 64.5,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 65,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ADJCHG",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    }
  ],
  "379": [
    {
      "keyword": "10.0.0.0/8 is variably subnetted",
      "rect": {
        "x": 52.0,
        "y": 50,
        "w": 37.5,
        "h": 18.0
      }
    },
    {
      "keyword": "10.0.0.0/16 [90/2816] via 192.168.90.2",
      "rect": {
        "x": 52.0,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    },
    {
      "keyword": "10.0.0.0/24 [110/2] via 192.168.110.2",
      "rect": {
        "x": 52.0,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    },
    {
      "keyword": "192.168.90.0/24 is variably subnetted",
      "rect": {
        "x": 52.0,
        "y": 50,
        "w": 37.5,
        "h": 18.0
      }
    },
    {
      "keyword": "192.168.110.0/24 is variably subnetted",
      "rect": {
        "x": 52.0,
        "y": 50,
        "w": 37.5,
        "h": 18.0
      }
    }
  ],
  "383": [
    {
      "keyword": "200.1.1.0/24",
      "rect": {
        "x": 61.0,
        "y": 39.5,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "e0/1",
      "rect": {
        "x": 68.625,
        "y": 50,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 3,
        "h": 2.0
      }
    }
  ],
  "384": [
    {
      "keyword": "ip access-list extended VENDOR",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "permit tcp 192.168.32.0 0.0.7.255 host 10.199.100.1 eq 22 time-range VENDOR_ACCESS",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "interface loopback 100",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 30.0,
        "h": 20
      }
    },
    {
      "keyword": "ip address 10.199.100.1 255.255.255.255",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "time-range VENDOR_ACCESS",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "385": [
    {
      "keyword": "TACACS Server",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 16.875,
        "h": 20.0
      }
    },
    {
      "keyword": "10.221.10.11",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 16.875,
        "h": 20.0
      }
    },
    {
      "keyword": "R1#debug tacacs",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 18.75,
        "h": 20.0
      }
    },
    {
      "keyword": "Connect Error No route to host",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 37.5,
        "h": 20.0
      }
    },
    {
      "keyword": "R4#telnet 10.2.2.1",
      "rect": {
        "x": 73.125,
        "y": 50,
        "w": 22.5,
        "h": 20.0
      }
    },
    {
      "keyword": "% Authentication failed",
      "rect": {
        "x": 73.125,
        "y": 50,
        "w": 26.25,
        "h": 20.0
      }
    }
  ],
  "386": [
    {
      "keyword": "Neighbor Solicitation",
      "rect": {
        "x": 16.0,
        "y": 35.0,
        "w": 27.0,
        "h": 7.0
      }
    },
    {
      "keyword": "ICMPv6 Type 134",
      "rect": {
        "x": 56.0,
        "y": 35.0,
        "w": 24.0,
        "h": 7.0
      }
    },
    {
      "keyword": "Neighbor Advertisement",
      "rect": {
        "x": 16.0,
        "y": 47.0,
        "w": 29.0,
        "h": 7.0
      }
    },
    {
      "keyword": "ICMPv6 Type 137",
      "rect": {
        "x": 56.0,
        "y": 47.0,
        "w": 24.0,
        "h": 7.0
      }
    },
    {
      "keyword": "Router Advertisement",
      "rect": {
        "x": 16.0,
        "y": 59.0,
        "w": 29.0,
        "h": 7.0
      }
    },
    {
      "keyword": "ICMPv6 Type 135",
      "rect": {
        "x": 56.0,
        "y": 59.0,
        "w": 24.0,
        "h": 7.0
      }
    },
    {
      "keyword": "Redirect Message",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 24.0,
        "h": 7.0
      }
    },
    {
      "keyword": "ICMPv6 Type 133",
      "rect": {
        "x": 56.0,
        "y": 50,
        "w": 24.0,
        "h": 7.0
      }
    },
    {
      "keyword": "Router Solicitation",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 29.0,
        "h": 7.0
      }
    },
    {
      "keyword": "ICMPv6 Type 136",
      "rect": {
        "x": 56.0,
        "y": 50,
        "w": 24.0,
        "h": 7.0
      }
    }
  ],
  "387": [
    {
      "keyword": "snmp-server community Ciscowrus3r RW 11",
      "rect": {
        "x": 55.625,
        "y": 50,
        "w": 34.875,
        "h": 20
      }
    },
    {
      "keyword": "Read/Write : Ciscowruser",
      "rect": {
        "x": 95,
        "y": 45.0,
        "w": 22.25,
        "h": 20
      }
    }
  ],
  "389": [
    {
      "keyword": "Branch A Server",
      "rect": {
        "x": 46.25,
        "y": 44.75,
        "w": 13.750000000000002,
        "h": 15.0
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 79.125,
        "y": 24.0,
        "w": 24.0,
        "h": 17.0
      }
    },
    {
      "keyword": "e0/1",
      "rect": {
        "x": 72.125,
        "y": 44.75,
        "w": 33.0,
        "h": 15.0
      }
    },
    {
      "keyword": "IP unicast RPF check is enabled",
      "rect": {
        "x": 21.75,
        "y": 50,
        "w": 31.25,
        "h": 15.0
      }
    },
    {
      "keyword": "IP unicast RPF check is disabled",
      "rect": {
        "x": 79.125,
        "y": 61.75000000000001,
        "w": 31.25,
        "h": 15.0
      }
    }
  ],
  "390": [
    {
      "keyword": "ssh 10.0.0.1",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 20.75,
        "h": 20
      }
    },
    {
      "keyword": "% No user specified nor available for SSH client",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "392": [
    {
      "keyword": "O E2",
      "rect": {
        "x": 0.0,
        "y": 65,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "O IA",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.4.17.6",
      "rect": {
        "x": 20.0,
        "y": 65,
        "w": 15.0,
        "h": 20
      }
    },
    {
      "keyword": "10.4.15.5",
      "rect": {
        "x": 41.25,
        "y": 50,
        "w": 15.0,
        "h": 20
      }
    }
  ],
  "393": [
    {
      "keyword": "AS 100",
      "rect": {
        "x": 10.0,
        "y": 37.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "AS 200",
      "rect": {
        "x": 87.0,
        "y": 37.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "AS 65500",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 14.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.111.1",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.112.2",
      "rect": {
        "x": 82.625,
        "y": 50,
        "w": 15.0,
        "h": 3.0
      }
    }
  ],
  "394": [
    {
      "keyword": "Area 21",
      "rect": {
        "x": 30.0,
        "y": 50,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Area 0",
      "rect": {
        "x": 18.0,
        "y": 56.00000000000001,
        "w": 7.0,
        "h": 3.0
      }
    },
    {
      "keyword": "OSPF Area 0",
      "rect": {
        "x": 24.875,
        "y": 50,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Area 22",
      "rect": {
        "x": 84.625,
        "y": 50,
        "w": 9.0,
        "h": 4.0
      }
    }
  ],
  "395": [
    {
      "keyword": "OSPF",
      "rect": {
        "x": 42.0,
        "y": 50,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "RIP",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 5.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R9",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "R10",
      "rect": {
        "x": 17.375,
        "y": 50,
        "w": 3.0,
        "h": 2.0
      }
    }
  ],
  "396": [
    {
      "keyword": "172.16.3.0/24",
      "rect": {
        "x": 95,
        "y": 65,
        "w": 17.875,
        "h": 20
      }
    },
    {
      "keyword": "172.16.4.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 17.875,
        "h": 20
      }
    },
    {
      "keyword": "172.1.11.0/24",
      "rect": {
        "x": 51.37500000000001,
        "y": 44.25,
        "w": 17.875,
        "h": 20
      }
    },
    {
      "keyword": "100 Mbps",
      "rect": {
        "x": 51.37500000000001,
        "y": 65,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "1 Gbps",
      "rect": {
        "x": 37.5,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "1 Gbps",
      "rect": {
        "x": 74.375,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "397": [
    {
      "keyword": "172.16.2.0/24",
      "rect": {
        "x": 18.5,
        "y": 50,
        "w": 21.25,
        "h": 20
      }
    },
    {
      "keyword": "172.19.1.0/24",
      "rect": {
        "x": 90.125,
        "y": 50,
        "w": 21.25,
        "h": 20
      }
    },
    {
      "keyword": "172.19.1.2",
      "rect": {
        "x": 90.125,
        "y": 50,
        "w": 21.25,
        "h": 20
      }
    },
    {
      "keyword": "Bangkok",
      "rect": {
        "x": 56.25,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "e0/2",
      "rect": {
        "x": 56.25,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Singapore",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 16.25,
        "h": 20
      }
    }
  ],
  "398": [
    {
      "keyword": "FEC",
      "rect": {
        "x": 28.999999999999996,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "routers in the core of the provider network known as P routers",
      "rect": {
        "x": 64.75,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "LSP",
      "rect": {
        "x": 28.999999999999996,
        "y": 64.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "all traffic to be forwarded using the same path and same label",
      "rect": {
        "x": 64.75,
        "y": 61.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "LER",
      "rect": {
        "x": 28.999999999999996,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "routers that connect to the customer routers known as PE routers",
      "rect": {
        "x": 64.75,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "LSR",
      "rect": {
        "x": 28.999999999999996,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "used for exchanging label mapping information between MPLS enabled routers",
      "rect": {
        "x": 64.75,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "LDP",
      "rect": {
        "x": 28.999999999999996,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "path along which the traffic flows across an MPLS network",
      "rect": {
        "x": 64.75,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "399": [
    {
      "keyword": "5 Mbps",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10 Mbps",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "50 Mbps",
      "rect": {
        "x": 53.5,
        "y": 41.75,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "EIGRP 222",
      "rect": {
        "x": 20.0,
        "y": 50,
        "w": 33.75,
        "h": 20
      }
    }
  ],
  "400": [
    {
      "keyword": "10.66.66.66",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 13.875000000000002,
        "h": 17.0
      }
    },
    {
      "keyword": "1090",
      "rect": {
        "x": 76.0,
        "y": 50,
        "w": 39.0,
        "h": 15.0
      }
    },
    {
      "keyword": "10.66.66.66",
      "rect": {
        "x": 90.5,
        "y": 50,
        "w": 13.875000000000002,
        "h": 17.0
      }
    },
    {
      "keyword": "permit udp any any range 1024 65535",
      "rect": {
        "x": 22.875,
        "y": 50,
        "w": 34.75,
        "h": 17.0
      }
    },
    {
      "keyword": "permit udp any any range 1024 65535",
      "rect": {
        "x": 22.875,
        "y": 50,
        "w": 34.75,
        "h": 17.0
      }
    }
  ],
  "401": [
    {
      "keyword": "AS 100",
      "rect": {
        "x": 46.75,
        "y": 31.0,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "AS 200",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.2.2",
      "rect": {
        "x": 83.75,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "404": [
    {
      "keyword": "R5",
      "rect": {
        "x": 60.0,
        "y": 39.25,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "RIP",
      "rect": {
        "x": 95,
        "y": 49.0,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Area 36",
      "rect": {
        "x": 59.62499999999999,
        "y": 49.0,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "172.16.0.0/16 Passive Advertise",
      "rect": {
        "x": 20.0,
        "y": 50,
        "w": 17.0,
        "h": 2.0
      }
    }
  ],
  "405": [
    {
      "keyword": "OSPF 10",
      "rect": {
        "x": 62.375,
        "y": 12.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "redistribute ospf 10 match external 1 external 2 metric 1000000 10 255 1 1500",
      "rect": {
        "x": 30.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "406": [
    {
      "keyword": "192.168.4.0/24",
      "rect": {
        "x": 95,
        "y": 34.0,
        "w": 19.0,
        "h": 20
      }
    },
    {
      "keyword": "192.168.4.0 255.255.252.0",
      "rect": {
        "x": 75.5,
        "y": 50,
        "w": 37.5,
        "h": 20
      }
    }
  ],
  "407": [
    {
      "keyword": "TACACS",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.66.66.66",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "D@t@c3nter1TACACS",
      "rect": {
        "x": 10.0,
        "y": 65,
        "w": 18.0,
        "h": 2.0
      }
    },
    {
      "keyword": "tacacs server DC1_TACACS",
      "rect": {
        "x": 80.875,
        "y": 50,
        "w": 20.0,
        "h": 2.0
      }
    },
    {
      "keyword": "key D@t@c3nter1TACACS",
      "rect": {
        "x": 80.875,
        "y": 50,
        "w": 20.0,
        "h": 2.0
      }
    }
  ],
  "409": [
    {
      "keyword": "telnet 198.51.100.64",
      "rect": {
        "x": 39.0,
        "y": 10.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "Password: admin",
      "rect": {
        "x": 5.0,
        "y": 50,
        "w": 27.0,
        "h": 4.0
      }
    },
    {
      "keyword": "ssh 198.51.100.64",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "Permission denied",
      "rect": {
        "x": 5.0,
        "y": 50,
        "w": 34.0,
        "h": 4.0
      }
    }
  ],
  "411": [
    {
      "keyword": "IP unicast RPF check is enabled",
      "rect": {
        "x": 39.0,
        "y": 63.74999999999999,
        "w": 27.375,
        "h": 17.0
      }
    },
    {
      "keyword": "IP unicast RPF check is enabled",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 27.375,
        "h": 17.0
      }
    },
    {
      "keyword": "e0/1",
      "rect": {
        "x": 50.875,
        "y": 50,
        "w": 32.0,
        "h": 15.0
      }
    },
    {
      "keyword": "e0/1",
      "rect": {
        "x": 50.875,
        "y": 50,
        "w": 32.0,
        "h": 15.0
      }
    }
  ],
  "413": [
    {
      "keyword": "2001:DB8::/64",
      "rect": {
        "x": 31.0,
        "y": 50,
        "w": 38.0,
        "h": 20
      }
    },
    {
      "keyword": ".1",
      "rect": {
        "x": 70.625,
        "y": 50,
        "w": 15.0,
        "h": 20
      }
    },
    {
      "keyword": ".2",
      "rect": {
        "x": 70.625,
        "y": 50,
        "w": 15.0,
        "h": 20
      }
    }
  ],
  "414": [
    {
      "keyword": "ifIndex",
      "rect": {
        "x": 45.875,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "Persistent",
      "rect": {
        "x": 71.125,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    }
  ],
  "415": [
    {
      "keyword": "permit 10.0.0.0/8",
      "rect": {
        "x": 40.0,
        "y": 16.0,
        "w": 20.0,
        "h": 4.0
      }
    },
    {
      "keyword": "deny 0.0.0.0/0 le 32",
      "rect": {
        "x": 40.0,
        "y": 36.0,
        "w": 20.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.0.0.0/8",
      "rect": {
        "x": 26.0,
        "y": 50,
        "w": 10.0,
        "h": 4.0
      }
    }
  ],
  "417": [
    {
      "keyword": "RR",
      "rect": {
        "x": 47.0,
        "y": 1.0,
        "w": 5.0,
        "h": 3.0
      }
    },
    {
      "keyword": "ASBR1",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "ASBR2",
      "rect": {
        "x": 46.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "ASBR3",
      "rect": {
        "x": 88.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.1.1.1",
      "rect": {
        "x": 47.0,
        "y": 14.0,
        "w": 7.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.1.2.2",
      "rect": {
        "x": 47.0,
        "y": 29.0,
        "w": 7.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.1.3.3",
      "rect": {
        "x": 47.0,
        "y": 14.0,
        "w": 7.0,
        "h": 3.0
      }
    }
  ],
  "419": [
    {
      "keyword": "ip access-list extended OSPF",
      "rect": {
        "x": 64.25,
        "y": 50,
        "w": 24.625,
        "h": 16.0
      }
    },
    {
      "keyword": "permit ospf host 10.2.2.4 host 10.1.1.3",
      "rect": {
        "x": 64.25,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "permit ospf host 10.1.1.3 host 10.2.2.4",
      "rect": {
        "x": 64.25,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "match access-group name OSPF",
      "rect": {
        "x": 64.25,
        "y": 50,
        "w": 33.125,
        "h": 16.0
      }
    },
    {
      "keyword": "class OSPF",
      "rect": {
        "x": 64.25,
        "y": 50,
        "w": 13.25,
        "h": 16.0
      }
    }
  ],
  "421": [
    {
      "keyword": "time-range Contractor",
      "rect": {
        "x": 67.125,
        "y": 50,
        "w": 16.25,
        "h": 15.0
      }
    },
    {
      "keyword": "periodic weekdays 8:00 to 16:30",
      "rect": {
        "x": 67.125,
        "y": 50,
        "w": 27.375,
        "h": 15.0
      }
    },
    {
      "keyword": "10.1.1.3 eq telnet",
      "rect": {
        "x": 16.25,
        "y": 50,
        "w": 17.5,
        "h": 15.0
      }
    },
    {
      "keyword": "10.1.1.3 eq www",
      "rect": {
        "x": 16.25,
        "y": 50,
        "w": 16.25,
        "h": 15.0
      }
    },
    {
      "keyword": "10.1.1.3 eq telnet",
      "rect": {
        "x": 67.125,
        "y": 50,
        "w": 17.5,
        "h": 15.0
      }
    },
    {
      "keyword": "10.1.1.3 eq www",
      "rect": {
        "x": 67.125,
        "y": 50,
        "w": 16.25,
        "h": 15.0
      }
    }
  ],
  "422": [
    {
      "keyword": "encapsulation dot1Q 1",
      "rect": {
        "x": 3.0,
        "y": 37.0,
        "w": 24.0,
        "h": 5.0
      }
    },
    {
      "keyword": "ip address 10.1.1.1 255.255.255.0",
      "rect": {
        "x": 3.0,
        "y": 49.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "encapsulation dot1Q 2",
      "rect": {
        "x": 3.0,
        "y": 50,
        "w": 24.0,
        "h": 5.0
      }
    },
    {
      "keyword": "ip address 10.2.2.1 255.255.255.0",
      "rect": {
        "x": 3.0,
        "y": 50,
        "w": 40,
        "h": 5.0
      }
    }
  ],
  "424": [
    {
      "keyword": "ip access-list standard EIGRP-FILTER",
      "rect": {
        "x": 44.0,
        "y": 54.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "deny 10.10.10.0 0.0.0.0",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 33.5,
        "h": 20
      }
    },
    {
      "keyword": "permit 0.0.0.0 0.0.0.0",
      "rect": {
        "x": 40.0,
        "y": 31.5,
        "w": 33.5,
        "h": 20
      }
    },
    {
      "keyword": "match ip address EIGRP-FILTER",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "426": [
    {
      "keyword": "R5#",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.0.0.18 passive open to 10.0.0.17",
      "rect": {
        "x": 31.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.0.0.18 passive open failed - 10.0.0.17 is not update-source Loopback0's address (10.10.10.5)",
      "rect": {
        "x": 31.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.0.0.18 remote connection attempt failed, local address 10.0.0.17",
      "rect": {
        "x": 31.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "429": [
    {
      "keyword": "permit 10.10.10.0 0.0.0.255",
      "rect": {
        "x": 36.0,
        "y": 31.75,
        "w": 30.0,
        "h": 20.0
      }
    },
    {
      "keyword": "route-map EIGRP permit 10",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 30.0,
        "h": 20.0
      }
    },
    {
      "keyword": "match ip address EIGRP-FILTER",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 30.0,
        "h": 20.0
      }
    }
  ],
  "430": [
    {
      "keyword": "TACACS Server Key: C!scoTACACS",
      "rect": {
        "x": 10.0,
        "y": 65,
        "w": 23.0,
        "h": 3.0
      }
    },
    {
      "keyword": "key C!scoTACACS",
      "rect": {
        "x": 81.75,
        "y": 50,
        "w": 13.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.66.66.66",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "tacacs server SITE6_TACACS",
      "rect": {
        "x": 81.75,
        "y": 50,
        "w": 19.0,
        "h": 2.0
      }
    },
    {
      "keyword": "address ipv4 10.66.66.66",
      "rect": {
        "x": 81.75,
        "y": 50,
        "w": 17.0,
        "h": 2.0
      }
    }
  ],
  "432": [
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 23.0,
        "y": 50,
        "w": 31.125000000000004,
        "h": 20
      }
    },
    {
      "keyword": "192.168.2.0/24",
      "rect": {
        "x": 86.125,
        "y": 50,
        "w": 31.125000000000004,
        "h": 20
      }
    },
    {
      "keyword": "e0/0",
      "rect": {
        "x": 28.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "e0/1",
      "rect": {
        "x": 71.625,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "e0/2",
      "rect": {
        "x": 34.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "e0/3",
      "rect": {
        "x": 71.625,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "434": [
    {
      "keyword": "R4# show ip eigrp topology active",
      "rect": {
        "x": 57.0,
        "y": 65,
        "w": 39.0,
        "h": 5.0
      }
    },
    {
      "keyword": "IP-EIGRP Topology Table for AS(1)/ID(10.20.10.1)",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 40.0,
        "h": 5.0
      }
    },
    {
      "keyword": "10.10.30.0/24",
      "rect": {
        "x": 89.625,
        "y": 50,
        "w": 11.0,
        "h": 2.0
      }
    },
    {
      "keyword": "F0/0",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 75.875,
        "y": 50,
        "w": 3.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R4",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 3.0,
        "h": 3.0
      }
    }
  ],
  "435": [
    {
      "keyword": "203.0.113.2",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 11.0,
        "h": 2.0
      }
    },
    {
      "keyword": "via 203.0.113.2",
      "rect": {
        "x": 76.0,
        "y": 50,
        "w": 14.0,
        "h": 2.0
      }
    },
    {
      "keyword": "via 203.0.113.2",
      "rect": {
        "x": 76.0,
        "y": 50,
        "w": 14.0,
        "h": 2.0
      }
    },
    {
      "keyword": "via 203.0.113.2",
      "rect": {
        "x": 76.0,
        "y": 50,
        "w": 14.0,
        "h": 2.0
      }
    }
  ],
  "438": [
    {
      "keyword": "EIGRP 10",
      "rect": {
        "x": 56.99999999999999,
        "y": 50,
        "w": 17.375,
        "h": 20
      }
    },
    {
      "keyword": "OSPF 10",
      "rect": {
        "x": 24.75,
        "y": 50,
        "w": 17.375,
        "h": 20
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 45.75,
        "y": 50,
        "w": 33.0,
        "h": 20
      }
    },
    {
      "keyword": "e0/0",
      "rect": {
        "x": 36.875,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "e0/1",
      "rect": {
        "x": 59.5,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "192.168.10.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 24.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.20.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 24.875,
        "h": 20
      }
    }
  ],
  "439": [
    {
      "keyword": "ip access-list extended TELNET",
      "rect": {
        "x": 62.375,
        "y": 65,
        "w": 33.375,
        "h": 17.0
      }
    },
    {
      "keyword": "permit tcp host 10.2.2.4 host 10.2.2.1 eq telnet",
      "rect": {
        "x": 62.5,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "permit tcp host 10.1.1.3 host 10.1.1.1 eq telnet",
      "rect": {
        "x": 62.5,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "10.2.2.4/24",
      "rect": {
        "x": 14.625,
        "y": 33.5,
        "w": 13.25,
        "h": 17.0
      }
    },
    {
      "keyword": "10.1.1.3/24",
      "rect": {
        "x": 95,
        "y": 33.5,
        "w": 13.25,
        "h": 17.0
      }
    },
    {
      "keyword": "10.1.1.1/24",
      "rect": {
        "x": 67.25,
        "y": 33.5,
        "w": 13.25,
        "h": 17.0
      }
    }
  ],
  "442": [
    {
      "keyword": "172.16.3.16/28",
      "rect": {
        "x": 13.625000000000002,
        "y": 50,
        "w": 16.25,
        "h": 17.0
      }
    },
    {
      "keyword": "172.16.250.0/30 [120/1] via 172.16.3.1",
      "rect": {
        "x": 13.625000000000002,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "172.16.250.12/30 [120/1] via 172.16.3.1",
      "rect": {
        "x": 13.625000000000002,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "R",
      "rect": {
        "x": 13.625000000000002,
        "y": 50,
        "w": 16.0,
        "h": 17.0
      }
    },
    {
      "keyword": "R",
      "rect": {
        "x": 13.625000000000002,
        "y": 50,
        "w": 16.0,
        "h": 17.0
      }
    }
  ],
  "443": [
    {
      "keyword": "8.8.8.8",
      "rect": {
        "x": 20.0,
        "y": 14.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "203.0.113.1",
      "rect": {
        "x": 59.0,
        "y": 50,
        "w": 14.0,
        "h": 3.0
      }
    },
    {
      "keyword": "track 1 ip sla 1",
      "rect": {
        "x": 0.0,
        "y": 60.0,
        "w": 17.0,
        "h": 3.0
      }
    }
  ],
  "444": [
    {
      "keyword": "router eigrp 100",
      "rect": {
        "x": 22.0,
        "y": 50,
        "w": 13.0,
        "h": 2.0
      }
    },
    {
      "keyword": "router ospf 100",
      "rect": {
        "x": 22.0,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    },
    {
      "keyword": "router bgp 100",
      "rect": {
        "x": 22.0,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    },
    {
      "keyword": "router eigrp 100",
      "rect": {
        "x": 62.125,
        "y": 50,
        "w": 13.0,
        "h": 2.0
      }
    },
    {
      "keyword": "router ospf 100",
      "rect": {
        "x": 62.125,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    },
    {
      "keyword": "router bgp 200",
      "rect": {
        "x": 62.125,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    }
  ],
  "445": [
    {
      "keyword": ".INIT.",
      "rect": {
        "x": 29.0,
        "y": 64.25,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.1.255.40",
      "rect": {
        "x": 3.0,
        "y": 64.25,
        "w": 12.0,
        "h": 2.0
      }
    },
    {
      "keyword": "configured",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    }
  ],
  "446": [
    {
      "keyword": "customer_a",
      "rect": {
        "x": 93.375,
        "y": 50,
        "w": 21.25,
        "h": 20
      }
    },
    {
      "keyword": "customer_b",
      "rect": {
        "x": 93.375,
        "y": 43.75,
        "w": 21.25,
        "h": 20
      }
    },
    {
      "keyword": "192.168.1.1 255.255.255.0",
      "rect": {
        "x": 92.375,
        "y": 50,
        "w": 32.5,
        "h": 20
      }
    },
    {
      "keyword": "192.168.1.2 255.255.255.0",
      "rect": {
        "x": 92.375,
        "y": 50,
        "w": 32.5,
        "h": 20
      }
    },
    {
      "keyword": "ip vrf forwarding",
      "rect": {
        "x": 14.0,
        "y": 31.75,
        "w": 30.25,
        "h": 20
      }
    },
    {
      "keyword": "ip address",
      "rect": {
        "x": 14.0,
        "y": 49.5,
        "w": 18.75,
        "h": 20
      }
    }
  ],
  "447": [
    {
      "keyword": "CPE(config-line)# no exec",
      "rect": {
        "x": 0.0,
        "y": 65,
        "w": 30.0,
        "h": 5.0
      }
    },
    {
      "keyword": "CPE con0 is now available",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40.0,
        "h": 5.0
      }
    },
    {
      "keyword": "! Console stopped responding at this moment !",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 5.0
      }
    }
  ],
  "448": [
    {
      "keyword": "IPv6 access list Block PC1 to PC2",
      "rect": {
        "x": 11.0,
        "y": 42.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "permit ipv6 2001:DB8::/16 2001:DB8::/16 sequence 20",
      "rect": {
        "x": 11.0,
        "y": 56.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "deny ipv6 host 2001:DB8:0:10::3B host 2001:DB8:A:A::19 sequence 30",
      "rect": {
        "x": 11.0,
        "y": 65,
        "w": 40,
        "h": 5.0
      }
    }
  ],
  "449": [
    {
      "keyword": "10.1.2.3 (Ethernet0)",
      "rect": {
        "x": 36.0,
        "y": 57.99999999999999,
        "w": 20.0,
        "h": 14.0
      }
    },
    {
      "keyword": "Total delay is 2000 microseconds",
      "rect": {
        "x": 14.374999999999998,
        "y": 50,
        "w": 30.0,
        "h": 14.0
      }
    },
    {
      "keyword": "10.1.2.4 (Ethernet0)",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 20.0,
        "h": 14.0
      }
    },
    {
      "keyword": "Total delay is 2200 microseconds",
      "rect": {
        "x": 14.374999999999998,
        "y": 50,
        "w": 30.0,
        "h": 14.0
      }
    }
  ],
  "450": [
    {
      "keyword": "10.0.80.1",
      "rect": {
        "x": 17.375,
        "y": 65,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "10.0.80.3",
      "rect": {
        "x": 68.375,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "10.0.80.4",
      "rect": {
        "x": 68.375,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "10.92.18.0/30",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 16.875,
        "h": 20
      }
    },
    {
      "keyword": "10.238.194.0/30",
      "rect": {
        "x": 34.5,
        "y": 50,
        "w": 16.875,
        "h": 20
      }
    },
    {
      "keyword": "10.7.44.0/30",
      "rect": {
        "x": 51.125,
        "y": 50,
        "w": 16.875,
        "h": 20
      }
    }
  ],
  "453": [
    {
      "keyword": "192.168.2.2/32",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 14.0,
        "h": 2.0
      }
    },
    {
      "keyword": "209.165.200.225",
      "rect": {
        "x": 29.625,
        "y": 50,
        "w": 17.0,
        "h": 2.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "i",
      "rect": {
        "x": 35.0,
        "y": 50,
        "w": 3,
        "h": 2.0
      }
    }
  ],
  "454": [
    {
      "keyword": "AS 111",
      "rect": {
        "x": 54.75,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Customer Edge",
      "rect": {
        "x": 49.875,
        "y": 50,
        "w": 24.875,
        "h": 20
      }
    },
    {
      "keyword": "ISP-1",
      "rect": {
        "x": 62.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ISP-2",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "455": [
    {
      "keyword": "192.168.200.0/24",
      "rect": {
        "x": 51.87500000000001,
        "y": 37.0,
        "w": 22.25,
        "h": 20
      }
    },
    {
      "keyword": "RIP",
      "rect": {
        "x": 29.75,
        "y": 31.75,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 59.0,
        "y": 54.25,
        "w": 34.0,
        "h": 20
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 59.0,
        "y": 50,
        "w": 34.0,
        "h": 20
      }
    },
    {
      "keyword": "redistribute rip",
      "rect": {
        "x": 54.37499999999999,
        "y": 50,
        "w": 21.375,
        "h": 18.0
      }
    },
    {
      "keyword": "metric-type 1",
      "rect": {
        "x": 76.125,
        "y": 50,
        "w": 13.25,
        "h": 18.0
      }
    }
  ],
  "458": [
    {
      "keyword": "10.0.12.0/24",
      "rect": {
        "x": 24.875,
        "y": 43.25,
        "w": 17.0,
        "h": 20
      }
    },
    {
      "keyword": "10.0.23.0/24",
      "rect": {
        "x": 74.875,
        "y": 43.25,
        "w": 17.0,
        "h": 20
      }
    },
    {
      "keyword": "PE1",
      "rect": {
        "x": 65.0,
        "y": 46.5,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "PE3",
      "rect": {
        "x": 95,
        "y": 46.5,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "neighbor 10.255.255.3",
      "rect": {
        "x": 95.0,
        "y": 50,
        "w": 33.0,
        "h": 20
      }
    },
    {
      "keyword": "10.255.255.3",
      "rect": {
        "x": 65.0,
        "y": 50,
        "w": 19.5,
        "h": 20
      }
    }
  ],
  "459": [
    {
      "keyword": "192.168.10.11",
      "rect": {
        "x": 57.25,
        "y": 50,
        "w": 13.5,
        "h": 19.0
      }
    },
    {
      "keyword": "172.16.1.11",
      "rect": {
        "x": 33.125,
        "y": 50,
        "w": 13.5,
        "h": 19.0
      }
    },
    {
      "keyword": "192.168.10.11",
      "rect": {
        "x": 57.25,
        "y": 50,
        "w": 13.5,
        "h": 19.0
      }
    },
    {
      "keyword": "172.16.1.11",
      "rect": {
        "x": 33.125,
        "y": 50,
        "w": 13.5,
        "h": 19.0
      }
    },
    {
      "keyword": "192.168.10.11",
      "rect": {
        "x": 57.25,
        "y": 50,
        "w": 13.5,
        "h": 19.0
      }
    },
    {
      "keyword": "172.16.1.11",
      "rect": {
        "x": 33.125,
        "y": 50,
        "w": 13.5,
        "h": 19.0
      }
    },
    {
      "keyword": "192.168.10.0/24",
      "rect": {
        "x": 57.25,
        "y": 50,
        "w": 13.5,
        "h": 19.0
      }
    },
    {
      "keyword": "172.16.1.0/24",
      "rect": {
        "x": 45.625,
        "y": 50,
        "w": 13.5,
        "h": 19.0
      }
    },
    {
      "keyword": "10.11.11.11/32",
      "rect": {
        "x": 31.0,
        "y": 50,
        "w": 15.875,
        "h": 19.0
      }
    },
    {
      "keyword": "10.12.12.12/32",
      "rect": {
        "x": 95,
        "y": 64.0,
        "w": 15.875,
        "h": 19.0
      }
    },
    {
      "keyword": "10.13.13.13/32",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 15.875,
        "h": 19.0
      }
    }
  ],
  "461": [
    {
      "keyword": "1::1/64",
      "rect": {
        "x": 95,
        "y": 42.5,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "2::2/64",
      "rect": {
        "x": 46.875,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "3::3/64",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "ipv6 enable",
      "rect": {
        "x": 63.5,
        "y": 59.25,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "ipv6 enable",
      "rect": {
        "x": 63.5,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "ipv6 address 37::3/64",
      "rect": {
        "x": 63.5,
        "y": 50,
        "w": 22.5,
        "h": 15.0
      }
    }
  ],
  "462": [
    {
      "keyword": "BGP AS 300",
      "rect": {
        "x": 68.625,
        "y": 55.0,
        "w": 16.25,
        "h": 20
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 41.25,
        "y": 50,
        "w": 26.0,
        "h": 20.0
      }
    },
    {
      "keyword": "R4",
      "rect": {
        "x": 62.5,
        "y": 58.5,
        "w": 33.0,
        "h": 20.0
      }
    }
  ],
  "465": [
    {
      "keyword": "ftp://192.0.2.40/",
      "rect": {
        "x": 55.0,
        "y": 43.0,
        "w": 30.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Incorrect Login/Password",
      "rect": {
        "x": 6.0,
        "y": 65,
        "w": 30.0,
        "h": 5.0
      }
    }
  ],
  "466": [
    {
      "keyword": "AS 111",
      "rect": {
        "x": 34.0,
        "y": 24.0,
        "w": 17.0,
        "h": 5.0
      }
    },
    {
      "keyword": "172.16.11.0/24",
      "rect": {
        "x": 1.0,
        "y": 29.0,
        "w": 14.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.16.12.0/24",
      "rect": {
        "x": 65.0,
        "y": 28.0,
        "w": 14.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.16.1.0/24",
      "rect": {
        "x": 1.0,
        "y": 65,
        "w": 14.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.16.2.0/24",
      "rect": {
        "x": 65.0,
        "y": 65,
        "w": 14.0,
        "h": 3.0
      }
    }
  ],
  "467": [
    {
      "keyword": "ip access-list standard EIGRP-FILTER",
      "rect": {
        "x": 39.0,
        "y": 34.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "deny 10.10.10.0 0.0.0.0",
      "rect": {
        "x": 39.0,
        "y": 60.0,
        "w": 33.0,
        "h": 5.0
      }
    },
    {
      "keyword": "permit 0.0.0.0 0.0.0.0",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 33.0,
        "h": 5.0
      }
    },
    {
      "keyword": "route-map EIGRP permit 10",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 33.0,
        "h": 5.0
      }
    },
    {
      "keyword": "match ip address EIGRP-FILTER",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "10.10.10.128/25",
      "rect": {
        "x": 14.625,
        "y": 50,
        "w": 18.0,
        "h": 5.0
      }
    }
  ],
  "468": [
    {
      "keyword": "transport input ssh telnet",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 26.125,
        "h": 20
      }
    },
    {
      "keyword": "R3#telnet 400A:0:400C::1 /source-interface lo0",
      "rect": {
        "x": 51.74999999999999,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "% Destination unreachable; gateway or host down",
      "rect": {
        "x": 52.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "469": [
    {
      "keyword": "EIGRP 100",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 19.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 17.0,
        "y": 46.0,
        "w": 24.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.3.0/24",
      "rect": {
        "x": 95,
        "y": 27.0,
        "w": 24.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.5.0/24",
      "rect": {
        "x": 60.5,
        "y": 50,
        "w": 24.875,
        "h": 20
      }
    }
  ],
  "473": [
    {
      "keyword": "ipv6 access-list FTP-CLIENT",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 28.875,
        "h": 20
      }
    },
    {
      "keyword": "permit tcp host 2001:DB8::1 eq ftp-data",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ipv6 access-list FTP-SERVER",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 28.875,
        "h": 20
      }
    },
    {
      "keyword": "permit tcp host 2001:DB8:8000::1 eq ftp-data established",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "475": [
    {
      "keyword": "10.77.255.57",
      "rect": {
        "x": 23.0,
        "y": 50,
        "w": 15.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.57.255.11",
      "rect": {
        "x": 23.0,
        "y": 50,
        "w": 15.0,
        "h": 2.0
      }
    },
    {
      "keyword": "best",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 3.0,
        "h": 2
      }
    }
  ],
  "476": [
    {
      "keyword": "192.168.5.50/24",
      "rect": {
        "x": 70.0,
        "y": 50,
        "w": 17.0,
        "h": 4.0
      }
    },
    {
      "keyword": "G0/0",
      "rect": {
        "x": 13.0,
        "y": 44.0,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "G1/0",
      "rect": {
        "x": 12.0,
        "y": 54.0,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "G1/10",
      "rect": {
        "x": 68.0,
        "y": 44.0,
        "w": 5.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.16.90.6/24",
      "rect": {
        "x": 46.25,
        "y": 50,
        "w": 16.0,
        "h": 3.0
      }
    },
    {
      "keyword": "G2/21",
      "rect": {
        "x": 63.375,
        "y": 50,
        "w": 4.0,
        "h": 3.0
      }
    }
  ],
  "478": [
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 24.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.2.0/24",
      "rect": {
        "x": 85.625,
        "y": 50,
        "w": 24.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Science-1",
      "rect": {
        "x": 58.0,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Science-2",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    }
  ],
  "479": [
    {
      "keyword": "10.3.3.0/24",
      "rect": {
        "x": 74.875,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "10.2.2.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 95,
        "y": 50.74999999999999,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "Default Route",
      "rect": {
        "x": 12.75,
        "y": 50,
        "w": 14.75,
        "h": 20.0
      }
    }
  ],
  "480": [
    {
      "keyword": "ip sla 1",
      "rect": {
        "x": 16.0,
        "y": 14.0,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "icmp-echo 8.8.8.8",
      "rect": {
        "x": 16.0,
        "y": 44.0,
        "w": 18.0,
        "h": 4.0
      }
    },
    {
      "keyword": "ip sla schedule 1 life forever",
      "rect": {
        "x": 16.0,
        "y": 28.499999999999996,
        "w": 37.0,
        "h": 4.0
      }
    },
    {
      "keyword": "track 1 ip sla 1",
      "rect": {
        "x": 16.0,
        "y": 44.25,
        "w": 17.0,
        "h": 4.0
      }
    },
    {
      "keyword": "ip route 0.0.0.0 0.0.0.0 203.0.113.1 name ISP1 track 1",
      "rect": {
        "x": 16.0,
        "y": 57.49999999999999,
        "w": 40,
        "h": 4.0
      }
    },
    {
      "keyword": "ip route 0.0.0.0 0.0.0.0 198.51.100.1 name ISP2 track 1",
      "rect": {
        "x": 16.0,
        "y": 65.0,
        "w": 40,
        "h": 4.0
      }
    }
  ],
  "482": [
    {
      "keyword": "172.16.8.0/24",
      "rect": {
        "x": 5.0,
        "y": 43.5,
        "w": 16.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.16.9.0/24",
      "rect": {
        "x": 5.0,
        "y": 50.0,
        "w": 16.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.16.10.0/24",
      "rect": {
        "x": 5.0,
        "y": 56.25,
        "w": 16.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.16.11.0/24",
      "rect": {
        "x": 5.0,
        "y": 62.5,
        "w": 16.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.1.2.0/24",
      "rect": {
        "x": 77.5,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "NewYork",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 11.0,
        "h": 3.0
      }
    }
  ],
  "483": [
    {
      "keyword": "R6",
      "rect": {
        "x": 70.0,
        "y": 45.0,
        "w": 5.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.1.20.0/24",
      "rect": {
        "x": 25.0,
        "y": 48.0,
        "w": 20.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.1.10.0/24",
      "rect": {
        "x": 73.0,
        "y": 25.0,
        "w": 17.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.1.30.0/24",
      "rect": {
        "x": 73.0,
        "y": 65,
        "w": 17.0,
        "h": 3.0
      }
    }
  ],
  "484": [
    {
      "keyword": "1001:ABC:2011:7::1/64",
      "rect": {
        "x": 71.25,
        "y": 28.999999999999996,
        "w": 29.125,
        "h": 20
      }
    },
    {
      "keyword": "400A:0:400C::1/64",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 29.125,
        "h": 20
      }
    },
    {
      "keyword": "ipv6 access-list DENY_TELNET_LO4",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "sequence 20 deny tcp host",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 37.5,
        "h": 20
      }
    }
  ],
  "486": [
    {
      "keyword": "router eigrp 10",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 15.0,
        "h": 4.0
      }
    },
    {
      "keyword": "neighbor 10.10.10.2",
      "rect": {
        "x": 15.0,
        "y": 26.75,
        "w": 17.0,
        "h": 4.0
      }
    },
    {
      "keyword": "neighbor 10.10.10.3",
      "rect": {
        "x": 15.0,
        "y": 31.75,
        "w": 17.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.10.10.2",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.10.10.3",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    }
  ],
  "489": [
    {
      "keyword": "no exec",
      "rect": {
        "x": 83.125,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "line vty 0 4",
      "rect": {
        "x": 83.125,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "password cisco",
      "rect": {
        "x": 83.125,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "492": [
    {
      "keyword": "192.168.50.0/24",
      "rect": {
        "x": 46.75,
        "y": 63.0,
        "w": 18.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.100.0/24",
      "rect": {
        "x": 29.625,
        "y": 50,
        "w": 18.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.200.0/24",
      "rect": {
        "x": 72.5,
        "y": 50,
        "w": 18.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.50.0/24",
      "rect": {
        "x": 72.5,
        "y": 50,
        "w": 18.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.100.0/24",
      "rect": {
        "x": 29.625,
        "y": 50,
        "w": 18.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.200.0/24",
      "rect": {
        "x": 46.75,
        "y": 63.0,
        "w": 18.875,
        "h": 20
      }
    }
  ],
  "493": [
    {
      "keyword": "route-map ENT deny 10",
      "rect": {
        "x": 8.0,
        "y": 50,
        "w": 30.0,
        "h": 20
      }
    },
    {
      "keyword": "access-list 20 permit 172.16.2.0 0.0.0.3",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "route-map ENT permit 20",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 30.0,
        "h": 20
      }
    }
  ],
  "494": [
    {
      "keyword": "ip flow-export source loopback2",
      "rect": {
        "x": 1.0,
        "y": 42.0,
        "w": 30.0,
        "h": 5.0
      }
    },
    {
      "keyword": "ip flow-export destination 203.0.113.254 9995",
      "rect": {
        "x": 1.0,
        "y": 10.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "Source(1) 172.16.1.1 (Unknown)",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "Destination(1) 203.0.113.254 (9995)",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 40,
        "h": 5.0
      }
    }
  ],
  "495": [
    {
      "keyword": "Router R2:",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 17.375,
        "h": 20
      }
    },
    {
      "keyword": "ip prefix-list filter-area-0 seq 5 permit 10.16.1.0/23 le 24",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ip prefix-list filter-area-0 seq 10 deny 0.0.0.0/0 le 32",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "area 0 filter-list prefix filter-area-0 out",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "496": [
    {
      "keyword": "summary-address 10.1.0.0 255.255.0.0",
      "rect": {
        "x": 10.0,
        "y": 43.0,
        "w": 40,
        "h": 14.0
      }
    }
  ],
  "497": [
    {
      "keyword": "OSPF Area 0",
      "rect": {
        "x": 14.0,
        "y": 54.0,
        "w": 20.0,
        "h": 7.0
      }
    },
    {
      "keyword": "EIGRP AS 1",
      "rect": {
        "x": 41.0,
        "y": 50,
        "w": 15.0,
        "h": 5.0
      }
    },
    {
      "keyword": "RIP",
      "rect": {
        "x": 40.0,
        "y": 45.0,
        "w": 6.0,
        "h": 4.0
      }
    }
  ],
  "500": [
    {
      "keyword": "R1 (DHCP Server)",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 15.0,
        "h": 2.0
      }
    },
    {
      "keyword": "H1 (DHCP Client)",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 15.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ipv6 dhcp server MY_POOL",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 24.0,
        "h": 2.0
      }
    },
    {
      "keyword": "R1#sh ipv6 dhcp binding",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 20.0,
        "h": 2.0
      }
    }
  ],
  "501": [
    {
      "keyword": "ip http authentication local",
      "rect": {
        "x": 10.0,
        "y": 34.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "ip http max-connections 2",
      "rect": {
        "x": 10.0,
        "y": 50.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "access-list 20 permit 172.16.10.48 0.0.0.15",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 5.0
      }
    }
  ],
  "502": [
    {
      "keyword": "ipv6 traffic-filter DENY_TELNET_Lo2 in",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ipv6 access-list DENY_TELNET_Lo2",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "sequence 20 deny tcp host 100B:1:310B::1 host 200A:0:210C::1 eq telnet",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ipv6 address 200A:0:200C::1/64",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ipv6 address 100B:1:310B::1",
      "rect": {
        "x": 37.5,
        "y": 50,
        "w": 39.75,
        "h": 20
      }
    },
    {
      "keyword": "ipv6 address 200A:0:210C::1",
      "rect": {
        "x": 86.25,
        "y": 50,
        "w": 37.5,
        "h": 20
      }
    }
  ],
  "503": [
    {
      "keyword": "OSPF Adjacency Failed",
      "rect": {
        "x": 17.0,
        "y": 41.0,
        "w": 40.0,
        "h": 20
      }
    },
    {
      "keyword": "Neighbor 10.30.255.2",
      "rect": {
        "x": 17.0,
        "y": 53.75,
        "w": 24.0,
        "h": 20
      }
    },
    {
      "keyword": "Interface TenGigabitEthernet1/0/23",
      "rect": {
        "x": 63.625,
        "y": 41.75,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "EXSTART",
      "rect": {
        "x": 42.875,
        "y": 50,
        "w": 10.0,
        "h": 16.0
      }
    },
    {
      "keyword": "10.30.251.101",
      "rect": {
        "x": 65.875,
        "y": 50,
        "w": 13.0,
        "h": 16.0
      }
    },
    {
      "keyword": "Interface TenGigabitEthernet1/0/23",
      "rect": {
        "x": 82.0,
        "y": 50,
        "w": 33.0,
        "h": 16.0
      }
    }
  ],
  "505": [
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "10.0.0.1",
      "rect": {
        "x": 25.0,
        "y": 51.24999999999999,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "10.0.0.1",
      "rect": {
        "x": 25.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.1.254",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "ospfv3 1 ipv4 area 1",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "router ospfv3 1",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "address-family ipv4 unicast",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "506": [
    {
      "keyword": "AS 65002",
      "rect": {
        "x": 61.0,
        "y": 10.0,
        "w": 12.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 64.0,
        "y": 54.0,
        "w": 4.0,
        "h": 4.0
      }
    },
    {
      "keyword": "IPv6",
      "rect": {
        "x": 80.0,
        "y": 30.0,
        "w": 5.0,
        "h": 3.0
      }
    },
    {
      "keyword": "IPv6",
      "rect": {
        "x": 80.0,
        "y": 56.0,
        "w": 5.0,
        "h": 3.0
      }
    }
  ],
  "507": [
    {
      "keyword": "ip mtu 1400",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 13.625000000000002,
        "h": 20.0
      }
    },
    {
      "keyword": "ip mtu 1400",
      "rect": {
        "x": 61.75000000000001,
        "y": 50,
        "w": 13.625000000000002,
        "h": 20.0
      }
    },
    {
      "keyword": "10.10.10.1",
      "rect": {
        "x": 13.5,
        "y": 50,
        "w": 13.750000000000002,
        "h": 20.0
      }
    },
    {
      "keyword": "10.10.10.2",
      "rect": {
        "x": 73.25,
        "y": 50,
        "w": 13.750000000000002,
        "h": 20.0
      }
    },
    {
      "keyword": "FastEthernet0/0",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 18.75,
        "h": 20.0
      }
    },
    {
      "keyword": "FastEthernet1/0",
      "rect": {
        "x": 61.75000000000001,
        "y": 50,
        "w": 18.75,
        "h": 20.0
      }
    }
  ],
  "508": [
    {
      "keyword": "ISP-A",
      "rect": {
        "x": 57.0,
        "y": 30.0,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "ISP-B",
      "rect": {
        "x": 57.0,
        "y": 64.0,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 10.0,
        "y": 48.0,
        "w": 5.0,
        "h": 4.0
      }
    }
  ],
  "509": [
    {
      "keyword": "ip sla 6500",
      "rect": {
        "x": 64.625,
        "y": 65,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "udp-jitter 209.165.201.4",
      "rect": {
        "x": 64.625,
        "y": 50,
        "w": 30.0,
        "h": 15.0
      }
    },
    {
      "keyword": "209.165.201.2/30",
      "rect": {
        "x": 14.249999999999998,
        "y": 44.25,
        "w": 18.75,
        "h": 18.0
      }
    },
    {
      "keyword": "R4#sho ip sla su",
      "rect": {
        "x": 64.625,
        "y": 50,
        "w": 18.75,
        "h": 15.0
      }
    },
    {
      "keyword": "*6500",
      "rect": {
        "x": 64.625,
        "y": 50,
        "w": 40.0,
        "h": 15.0
      }
    }
  ],
  "510": [
    {
      "keyword": "10.0.0.2/24",
      "rect": {
        "x": 13.125,
        "y": 43.25,
        "w": 16.75,
        "h": 20
      }
    },
    {
      "keyword": "10.0.1.1/24",
      "rect": {
        "x": 94.75,
        "y": 38.0,
        "w": 16.75,
        "h": 20
      }
    },
    {
      "keyword": "10.0.0.1",
      "rect": {
        "x": 79.25,
        "y": 51.74999999999999,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Error opening tftp://10.0.0.1/Switch-config (Socket error)",
      "rect": {
        "x": 43.25,
        "y": 60.5,
        "w": 40,
        "h": 20
      }
    }
  ],
  "511": [
    {
      "keyword": "route-map Redistribution_EIGRP, permit, sequence 20",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10 permit 172.16.1.0, wildcard bits 0.0.0.255",
      "rect": {
        "x": 48.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "20 permit 172.16.2.0, wildcard bits 0.0.0.255",
      "rect": {
        "x": 48.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "route-map Redistribution_EIGRP, permit, sequence 10",
      "rect": {
        "x": 0.0,
        "y": 65,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ip address (access-lists): 10",
      "rect": {
        "x": 48.0,
        "y": 49.25,
        "w": 40,
        "h": 20
      }
    }
  ],
  "512": [
    {
      "keyword": "Int G0/2",
      "rect": {
        "x": 0.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 13.0,
        "y": 51.5,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "192.168.0.0 /24",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 27.0,
        "h": 20
      }
    },
    {
      "keyword": "Vlan 10",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 14.625,
        "h": 20
      }
    }
  ],
  "515": [
    {
      "keyword": "GigabitEthernet2",
      "rect": {
        "x": 95,
        "y": 38.0,
        "w": 29.375,
        "h": 20
      }
    },
    {
      "keyword": "GigabitEthernet2",
      "rect": {
        "x": 12.625,
        "y": 50,
        "w": 29.375,
        "h": 20
      }
    },
    {
      "keyword": "interface:\"GigabitEthernet2\"",
      "rect": {
        "x": 12.625,
        "y": 50,
        "w": 29.375,
        "h": 20
      }
    }
  ],
  "516": [
    {
      "keyword": "CUCM/TFTP",
      "rect": {
        "x": 87.0,
        "y": 64.25,
        "w": 12.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.221.10.10",
      "rect": {
        "x": 86.0,
        "y": 50,
        "w": 13.0,
        "h": 2.0
      }
    },
    {
      "keyword": "ip dhcp pool VLAN200_USER_VOICE",
      "rect": {
        "x": 48.0,
        "y": 50,
        "w": 29.0,
        "h": 2.0
      }
    }
  ],
  "519": [
    {
      "keyword": "AREA 0",
      "rect": {
        "x": 64.0,
        "y": 43.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Fa0/0",
      "rect": {
        "x": 54.0,
        "y": 44.0,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.99.53.0/30",
      "rect": {
        "x": 67.0,
        "y": 49.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Fa0/0",
      "rect": {
        "x": 80.0,
        "y": 44.0,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R5",
      "rect": {
        "x": 87.0,
        "y": 47.0,
        "w": 3.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 54.0,
        "y": 47.0,
        "w": 3.0,
        "h": 4.0
      }
    }
  ],
  "520": [
    {
      "keyword": "EIGRP: Neighbor 10.1.2.192",
      "rect": {
        "x": 10.0,
        "y": 50.0,
        "w": 30.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Neighbor 10.1.2.1",
      "rect": {
        "x": 10.0,
        "y": 60.0,
        "w": 20.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Neighbor 10.1.2.1",
      "rect": {
        "x": 10.0,
        "y": 65,
        "w": 20.0,
        "h": 5.0
      }
    },
    {
      "keyword": "Neighbor 10.1.2.1 (Tunnel1)",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 30.0,
        "h": 5.0
      }
    }
  ],
  "522": [
    {
      "keyword": "DUAL_NBRCHANGE",
      "rect": {
        "x": 22.25,
        "y": 50,
        "w": 27.500000000000004,
        "h": 20
      }
    },
    {
      "keyword": "682: *Jan 11 15:41:03.036: EIGRP-IPv4 88: Neighbor 172.16.33.2 (GigabitEthernet2.10) is down: authentication mode changed",
      "rect": {
        "x": 52.25,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Jan 11, 2022 8:46:37 PM",
      "rect": {
        "x": 87.75,
        "y": 50,
        "w": 20.875,
        "h": 20
      }
    }
  ],
  "523": [
    {
      "keyword": "route-map CCNP deny 10",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 26.125,
        "h": 20.0
      }
    },
    {
      "keyword": "match route-type local",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 25.0,
        "h": 20.0
      }
    },
    {
      "keyword": "route-map CCNP permit 10",
      "rect": {
        "x": 67.5,
        "y": 50,
        "w": 27.375,
        "h": 20.0
      }
    },
    {
      "keyword": "match ip address 10",
      "rect": {
        "x": 67.5,
        "y": 50,
        "w": 21.25,
        "h": 20.0
      }
    },
    {
      "keyword": "set tag 200",
      "rect": {
        "x": 67.5,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "access-list 10 permit 172.16.2.48 0.0.0.15",
      "rect": {
        "x": 67.5,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "527": [
    {
      "keyword": "172.16.1.17",
      "rect": {
        "x": 47.625,
        "y": 50,
        "w": 14.75,
        "h": 17.0
      }
    },
    {
      "keyword": "GigabitEthernet0/3",
      "rect": {
        "x": 11.0,
        "y": 50,
        "w": 18.75,
        "h": 17.0
      }
    },
    {
      "keyword": "ip tftp source-interface GigabitEthernet0/3",
      "rect": {
        "x": 11.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "528": [
    {
      "keyword": "router eigrp",
      "rect": {
        "x": 54.37499999999999,
        "y": 61.5,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "network 192.168.0.1 0.0.0.0",
      "rect": {
        "x": 54.37499999999999,
        "y": 50,
        "w": 25.0,
        "h": 15.0
      }
    },
    {
      "keyword": "Tunnel0",
      "rect": {
        "x": 95,
        "y": 34.5,
        "w": 40,
        "h": 15.0
      }
    }
  ],
  "529": [
    {
      "keyword": "10.19.5.0/28",
      "rect": {
        "x": 33.0,
        "y": 25.0,
        "w": 12.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Fa0/0",
      "rect": {
        "x": 33.0,
        "y": 27.0,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "AREA 0",
      "rect": {
        "x": 23.0,
        "y": 19.0,
        "w": 7.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.111.7.0/29",
      "rect": {
        "x": 23.0,
        "y": 23.0,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.6.9.0/30",
      "rect": {
        "x": 30.0,
        "y": 9.0,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Fa0/0",
      "rect": {
        "x": 47.0,
        "y": 13.0,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "AREA 0",
      "rect": {
        "x": 30.0,
        "y": 19.0,
        "w": 7.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.9.21.0/30",
      "rect": {
        "x": 57.0,
        "y": 20.0,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "AREA 1",
      "rect": {
        "x": 57.0,
        "y": 23.0,
        "w": 7.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.12.39.0/30",
      "rect": {
        "x": 66.0,
        "y": 12.0,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Fa2/0",
      "rect": {
        "x": 77.0,
        "y": 17.0,
        "w": 4.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.83.6.0/30",
      "rect": {
        "x": 77.0,
        "y": 20.0,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R7#sh ip ospf interface fa0/0",
      "rect": {
        "x": 24.0,
        "y": 50,
        "w": 28.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Internet Address 10.19.5.2/28",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 24.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Area 0",
      "rect": {
        "x": 75.0,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Cost: 1",
      "rect": {
        "x": 88.0,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Disabled",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Shutdown",
      "rect": {
        "x": 70.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Topology Name",
      "rect": {
        "x": 77.0,
        "y": 50,
        "w": 9.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Base",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "State POINT_TO_POINT",
      "rect": {
        "x": 40.0,
        "y": 50,
        "w": 16.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Hello 5",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Dead 15",
      "rect": {
        "x": 70.0,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Wait 15",
      "rect": {
        "x": 77.0,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Retransmit 5",
      "rect": {
        "x": 84.0,
        "y": 50,
        "w": 6.0,
        "h": 2.0
      }
    },
    {
      "keyword": "oob-resync timeout 40",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Hello due in 00:00:00",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    }
  ],
  "530": [
    {
      "keyword": "log-input",
      "rect": {
        "x": 79.0,
        "y": 65,
        "w": 19.0,
        "h": 7.0
      }
    }
  ],
  "532": [
    {
      "keyword": "mismatched NSSA option bit",
      "rect": {
        "x": 34.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "534": [
    {
      "keyword": "R101",
      "rect": {
        "x": 20.0,
        "y": 50,
        "w": 37.0,
        "h": 15.0
      }
    },
    {
      "keyword": "R201",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 37.0,
        "h": 15.0
      }
    },
    {
      "keyword": "udp",
      "rect": {
        "x": 52.5,
        "y": 50,
        "w": 30.0,
        "h": 13.0
      }
    },
    {
      "keyword": "1967",
      "rect": {
        "x": 56.75,
        "y": 50,
        "w": 37.0,
        "h": 13.0
      }
    }
  ],
  "535": [
    {
      "keyword": "ip access-list extended R2WAN",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 34.75,
        "h": 17.0
      }
    },
    {
      "keyword": "permit udp any any eq 67",
      "rect": {
        "x": 23.0,
        "y": 50,
        "w": 33.75,
        "h": 17.0
      }
    },
    {
      "keyword": "YES DHCP",
      "rect": {
        "x": 91.625,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    }
  ],
  "537": [
    {
      "keyword": "time-range entry: timer (active)",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 37.375,
        "h": 17.0
      }
    },
    {
      "keyword": "periodic weekend 9:00 to 17:00",
      "rect": {
        "x": 87.0,
        "y": 27.750000000000004,
        "w": 37.5,
        "h": 17.0
      }
    },
    {
      "keyword": "deny tcp any any eq www time-range timer (active)",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "deny tcp any any eq 443 time-range timer (active)",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    }
  ],
  "538": [
    {
      "keyword": "aaa new-model",
      "rect": {
        "x": 32.875,
        "y": 18.0,
        "w": 13.375,
        "h": 16.0
      }
    },
    {
      "keyword": "aaa authentication login default line enable",
      "rect": {
        "x": 32.875,
        "y": 48.0,
        "w": 37.5,
        "h": 16.0
      }
    },
    {
      "keyword": "username admin privilege 15 password cisco123!",
      "rect": {
        "x": 32.875,
        "y": 32.5,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "login local",
      "rect": {
        "x": 32.875,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    }
  ],
  "539": [
    {
      "keyword": "IGP synchronization is enabled",
      "rect": {
        "x": 30.0,
        "y": 50,
        "w": 31.25,
        "h": 18.0
      }
    },
    {
      "keyword": "eBGP",
      "rect": {
        "x": 72.375,
        "y": 26.75,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "AS 2",
      "rect": {
        "x": 95,
        "y": 38.0,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "130.130.130.0/24",
      "rect": {
        "x": 55.125,
        "y": 50,
        "w": 17.625,
        "h": 17.0
      }
    }
  ],
  "540": [
    {
      "keyword": "Loopback222:",
      "rect": {
        "x": 83.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.16.222.254/32",
      "rect": {
        "x": 83.0,
        "y": 50,
        "w": 14.0,
        "h": 3.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 64.0,
        "y": 65,
        "w": 3.0,
        "h": 2.0
      }
    }
  ],
  "542": [
    {
      "keyword": "EIGRP",
      "rect": {
        "x": 43.0,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "20",
      "rect": {
        "x": 30.0,
        "y": 19.0,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10",
      "rect": {
        "x": 47.0,
        "y": 44.0,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10",
      "rect": {
        "x": 60.0,
        "y": 44.0,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "25",
      "rect": {
        "x": 66.0,
        "y": 50,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10",
      "rect": {
        "x": 70.0,
        "y": 20.0,
        "w": 3.0,
        "h": 2.0
      }
    }
  ],
  "545": [
    {
      "keyword": "interface loopback0",
      "rect": {
        "x": 49.0,
        "y": 37.0,
        "w": 20.5,
        "h": 20
      }
    },
    {
      "keyword": "ip address 4.4.4.4 255.255.255.0",
      "rect": {
        "x": 49.0,
        "y": 61.0,
        "w": 38.625,
        "h": 20
      }
    },
    {
      "keyword": "router ospf 1",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 17.5,
        "h": 20
      }
    },
    {
      "keyword": "network 4.4.4.4 0.0.0.0 area 0",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "546": [
    {
      "keyword": "10.1.2.0/24",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 13.125,
        "h": 17.0
      }
    },
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 72.375,
        "y": 55.75,
        "w": 13.125,
        "h": 17.0
      }
    },
    {
      "keyword": "network 10.0.0.0",
      "rect": {
        "x": 18.25,
        "y": 50,
        "w": 14.75,
        "h": 17.0
      }
    },
    {
      "keyword": "network 192.168.1.0",
      "rect": {
        "x": 18.25,
        "y": 50,
        "w": 18.125,
        "h": 17.0
      }
    },
    {
      "keyword": "network 10.0.0.0",
      "rect": {
        "x": 72.375,
        "y": 50,
        "w": 14.75,
        "h": 17.0
      }
    },
    {
      "keyword": "network 192.168.1.0",
      "rect": {
        "x": 72.375,
        "y": 50,
        "w": 18.125,
        "h": 17.0
      }
    }
  ],
  "547": [
    {
      "keyword": "High input/output error on interface",
      "rect": {
        "x": 46.0,
        "y": 47.0,
        "w": 40,
        "h": 5.0
      }
    },
    {
      "keyword": "'GigabitEthernet0/2'",
      "rect": {
        "x": 53.0,
        "y": 61.0,
        "w": 24.0,
        "h": 4.0
      }
    },
    {
      "keyword": "High Input/Output error Rx 1.75% Tx 0.0% on interface",
      "rect": {
        "x": 45.0,
        "y": 50,
        "w": 40,
        "h": 4.0
      }
    },
    {
      "keyword": "'GigabitEthernet0/2'",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 24.0,
        "h": 4.0
      }
    }
  ],
  "548": [
    {
      "keyword": "DENVER",
      "rect": {
        "x": 45.0,
        "y": 15.0,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.40.1.0/30",
      "rect": {
        "x": 51.0,
        "y": 36.0,
        "w": 13.0,
        "h": 4.0
      }
    }
  ],
  "549": [
    {
      "keyword": "ROUTER_1",
      "rect": {
        "x": 47.0,
        "y": 37.0,
        "w": 7.0,
        "h": 3.0
      }
    },
    {
      "keyword": "VLAN 5 192.168.5.10",
      "rect": {
        "x": 17.0,
        "y": 50.0,
        "w": 15.0,
        "h": 2.0
      }
    },
    {
      "keyword": "VLAN 80 192.168.80.10",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 15.0,
        "h": 2.0
      }
    },
    {
      "keyword": "192.168.80.0/25",
      "rect": {
        "x": 39.75,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "192.168.5.0/24",
      "rect": {
        "x": 87.375,
        "y": 46.5,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "192.168.80.0 255.255.255.128",
      "rect": {
        "x": 39.75,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    }
  ],
  "551": [
    {
      "keyword": "10.1.1.1",
      "rect": {
        "x": 57.125,
        "y": 36.0,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "ip sla 2",
      "rect": {
        "x": 41.875,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "track 2",
      "rect": {
        "x": 41.875,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "ip route 0.0.0.0 0.0.0.0 10.1.1.1",
      "rect": {
        "x": 41.875,
        "y": 50,
        "w": 32.5,
        "h": 14.0
      }
    }
  ],
  "552": [
    {
      "keyword": "ip verify unicast source reachable-via rx",
      "rect": {
        "x": 54.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "Input features: uRPF",
      "rect": {
        "x": 54.0,
        "y": 65,
        "w": 25.0,
        "h": 19.0
      }
    }
  ],
  "554": [
    {
      "keyword": "match-all",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "match access-group name",
      "rect": {
        "x": 80.0,
        "y": 50,
        "w": 37.5,
        "h": 20
      }
    },
    {
      "keyword": "match access-group name",
      "rect": {
        "x": 80.0,
        "y": 50,
        "w": 37.5,
        "h": 20
      }
    },
    {
      "keyword": "match access-group name",
      "rect": {
        "x": 80.0,
        "y": 50,
        "w": 37.5,
        "h": 20
      }
    }
  ],
  "557": [
    {
      "keyword": "R6#show ip sla responder",
      "rect": {
        "x": 31.0,
        "y": 50,
        "w": 33.0,
        "h": 20
      }
    },
    {
      "keyword": "General IP SLA Responder is: Disabled",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 28.0,
        "h": 14.0
      }
    },
    {
      "keyword": "R1#show ip sla su",
      "rect": {
        "x": 65.0,
        "y": 50,
        "w": 15.0,
        "h": 13.0
      }
    },
    {
      "keyword": "No connecti",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 11.0,
        "h": 13.0
      }
    }
  ],
  "559": [
    {
      "keyword": "172.16.3.252/30",
      "rect": {
        "x": 19.0,
        "y": 50,
        "w": 17.5,
        "h": 17.0
      }
    },
    {
      "keyword": "receive",
      "rect": {
        "x": 45.25,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "GigabitEthernet0/2",
      "rect": {
        "x": 87.125,
        "y": 50,
        "w": 17.5,
        "h": 17.0
      }
    },
    {
      "keyword": "172.16.3.254",
      "rect": {
        "x": 45.25,
        "y": 63.5,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "172.16.3.254",
      "rect": {
        "x": 45.25,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "GigabitEthernet0/2",
      "rect": {
        "x": 87.125,
        "y": 50,
        "w": 17.5,
        "h": 17.0
      }
    }
  ],
  "560": [
    {
      "keyword": "AREA 3",
      "rect": {
        "x": 21.125,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R6",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R19",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10.2.18.0/30",
      "rect": {
        "x": 27.0,
        "y": 50,
        "w": 15.0,
        "h": 20
      }
    }
  ],
  "562": [
    {
      "keyword": "destination 192.168.100.17 vrf Mgmt-intf",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "interface GigabitEthernet0",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "vrf forwarding Mgmt-intf",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "ip address 192.168.100.50",
      "rect": {
        "x": 53.0,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    }
  ],
  "563": [
    {
      "keyword": "router eigrp 100",
      "rect": {
        "x": 15.0,
        "y": 65,
        "w": 15.0,
        "h": 4.0
      }
    },
    {
      "keyword": "redistribute ospf 1",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 17.0,
        "h": 4.0
      }
    },
    {
      "keyword": "router ospf 1",
      "rect": {
        "x": 15.0,
        "y": 29.75,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "redistribute eigrp 100 subnets",
      "rect": {
        "x": 15.0,
        "y": 36.25,
        "w": 26.0,
        "h": 4.0
      }
    },
    {
      "keyword": "network 192.168.250.0 0.0.0.255 area 0",
      "rect": {
        "x": 15.0,
        "y": 42.75,
        "w": 35.0,
        "h": 4.0
      }
    }
  ],
  "564": [
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 35.0,
        "y": 15.0,
        "w": 12.0,
        "h": 4.0
      }
    },
    {
      "keyword": "192.168.1.2",
      "rect": {
        "x": 56.0,
        "y": 15.0,
        "w": 12.0,
        "h": 4.0
      }
    }
  ],
  "565": [
    {
      "keyword": "OSPF AREA 0",
      "rect": {
        "x": 15.0,
        "y": 30.0,
        "w": 20.0,
        "h": 7.0
      }
    },
    {
      "keyword": "EIGRP 100",
      "rect": {
        "x": 40.0,
        "y": 30.0,
        "w": 20.0,
        "h": 7.0
      }
    },
    {
      "keyword": "192.168.7.0/24",
      "rect": {
        "x": 85.0,
        "y": 34.0,
        "w": 12.0,
        "h": 4.0
      }
    },
    {
      "keyword": "192.168.15.0/24",
      "rect": {
        "x": 85.0,
        "y": 50,
        "w": 12.0,
        "h": 4.0
      }
    }
  ],
  "566": [
    {
      "keyword": "OSPF 100",
      "rect": {
        "x": 54.87499999999999,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "Area - 0",
      "rect": {
        "x": 54.87499999999999,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "192.168.200.0/30",
      "rect": {
        "x": 54.87499999999999,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "569": [
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 15.875,
        "y": 50,
        "w": 16.125,
        "h": 20
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 42.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "192.168.1.2",
      "rect": {
        "x": 15.875,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "192.168.1.3",
      "rect": {
        "x": 26.375,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "570": [
    {
      "keyword": "EIGRP CCNP",
      "rect": {
        "x": 21.25,
        "y": 50,
        "w": 13.750000000000002,
        "h": 15.0
      }
    },
    {
      "keyword": "AS(1)",
      "rect": {
        "x": 30.0,
        "y": 50,
        "w": 35.0,
        "h": 15.0
      }
    },
    {
      "keyword": "AS(100)",
      "rect": {
        "x": 57.49999999999999,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    }
  ],
  "571": [
    {
      "keyword": "SW3",
      "rect": {
        "x": 48.0,
        "y": 43.0,
        "w": 6.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Layer 3 Interfaces",
      "rect": {
        "x": 38.0,
        "y": 61.0,
        "w": 15.0,
        "h": 4.0
      }
    },
    {
      "keyword": "DHCP Server",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    }
  ],
  "572": [
    {
      "keyword": "Multiproto col Label Switching (MPLS)",
      "rect": {
        "x": 10.0,
        "y": 46.0,
        "w": 30.0,
        "h": 6.0
      }
    },
    {
      "keyword": "set of packets with similar characteristics that might be bound to the same MPLS label",
      "rect": {
        "x": 51.0,
        "y": 46.0,
        "w": 40,
        "h": 12.0
      }
    },
    {
      "keyword": "Label Distribution Protocol (LDP)",
      "rect": {
        "x": 10.0,
        "y": 33.5,
        "w": 30.0,
        "h": 6.0
      }
    },
    {
      "keyword": "data-carrying mechanism that is independent of any data link layer protocol",
      "rect": {
        "x": 51.0,
        "y": 33.5,
        "w": 40,
        "h": 12.0
      }
    },
    {
      "keyword": "Forwarding Equivalence Class (FEC)",
      "rect": {
        "x": 10.0,
        "y": 55.50000000000001,
        "w": 30.0,
        "h": 6.0
      }
    },
    {
      "keyword": "router that functions as the ingress and/or egress router to the MPLS domain",
      "rect": {
        "x": 51.0,
        "y": 55.50000000000001,
        "w": 40,
        "h": 12.0
      }
    },
    {
      "keyword": "Provider Edge (PE)",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 30.0,
        "h": 6.0
      }
    },
    {
      "keyword": "route through an MPLS network, defined by a signaling protocol such as LDP or BGP",
      "rect": {
        "x": 51.0,
        "y": 50,
        "w": 40,
        "h": 12.0
      }
    },
    {
      "keyword": "Label Switched Path (LSP)",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 30.0,
        "h": 6.0
      }
    },
    {
      "keyword": "mechanism by which two routers exchange label mapping information",
      "rect": {
        "x": 51.0,
        "y": 50,
        "w": 40,
        "h": 12.0
      }
    }
  ],
  "574": [
    {
      "keyword": "OSPFv2 Area 1",
      "rect": {
        "x": 62.0,
        "y": 48.0,
        "w": 16.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 47.0,
        "y": 46.0,
        "w": 4.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R3",
      "rect": {
        "x": 87.0,
        "y": 46.0,
        "w": 4.0,
        "h": 4.0
      }
    }
  ],
  "575": [
    {
      "keyword": "192.168.99.1/30",
      "rect": {
        "x": 25.0,
        "y": 50,
        "w": 11.0,
        "h": 2.0
      }
    },
    {
      "keyword": "192.168.99.2/30",
      "rect": {
        "x": 61.0,
        "y": 50,
        "w": 11.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Serial0/1",
      "rect": {
        "x": 95,
        "y": 36.75,
        "w": 8.0,
        "h": 2.0
      }
    },
    {
      "keyword": "Serial0/1",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 8.0,
        "h": 2.0
      }
    }
  ],
  "577": [
    {
      "keyword": "ip helper-address 192.168.250.1",
      "rect": {
        "x": 20.0,
        "y": 47.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "interface GigabitEthernet0/2",
      "rect": {
        "x": 20.0,
        "y": 50,
        "w": 34.0,
        "h": 5.0
      }
    },
    {
      "keyword": "ip address 192.168.40.1 255.255.255.0",
      "rect": {
        "x": 20.0,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    }
  ],
  "580": [
    {
      "keyword": "route-map CCNP permit 10",
      "rect": {
        "x": 51.37500000000001,
        "y": 50,
        "w": 22.25,
        "h": 15.0
      }
    },
    {
      "keyword": "match tag 200",
      "rect": {
        "x": 51.37500000000001,
        "y": 50,
        "w": 13.375,
        "h": 14.0
      }
    },
    {
      "keyword": "redistribute eigrp 100 subnets route-map CCNP",
      "rect": {
        "x": 51.37500000000001,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "access-list 10 permit 172.16.2.48 0.0.0.15",
      "rect": {
        "x": 51.37500000000001,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    }
  ],
  "581": [
    {
      "keyword": "AAA/BIND",
      "rect": {
        "x": 12.0,
        "y": 20.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "AAA/AUTHEN/LOGIN",
      "rect": {
        "x": 12.0,
        "y": 40.0,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "group tacacs+",
      "rect": {
        "x": 30.0,
        "y": 30.0,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "server 10.106.60.182",
      "rect": {
        "x": 30.0,
        "y": 50,
        "w": 20.0,
        "h": 3.0
      }
    },
    {
      "keyword": "received bad AUTHEN packet",
      "rect": {
        "x": 30.0,
        "y": 50,
        "w": 25.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Invalid AUTHEN packet",
      "rect": {
        "x": 30.0,
        "y": 50,
        "w": 20.0,
        "h": 3.0
      }
    }
  ],
  "582": [
    {
      "keyword": "VLAN100",
      "rect": {
        "x": 24.0,
        "y": 60.0,
        "w": 15.0,
        "h": 5.0
      }
    },
    {
      "keyword": "VLAN200",
      "rect": {
        "x": 60.0,
        "y": 47.0,
        "w": 15.0,
        "h": 5.0
      }
    }
  ],
  "585": [
    {
      "keyword": "R1 LOCAL users",
      "rect": {
        "x": 18.5,
        "y": 50,
        "w": 13.625000000000002,
        "h": 16.0
      }
    },
    {
      "keyword": "User: cisco",
      "rect": {
        "x": 18.5,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "Password: Cisco@123",
      "rect": {
        "x": 18.5,
        "y": 50,
        "w": 15.0,
        "h": 15.0
      }
    },
    {
      "keyword": "R1#debug tacacs",
      "rect": {
        "x": 39.0,
        "y": 50,
        "w": 16.25,
        "h": 15.0
      }
    }
  ],
  "586": [
    {
      "keyword": "BGP_ADJCHANGE",
      "rect": {
        "x": 76.125,
        "y": 50,
        "w": 14.75,
        "h": 14.0
      }
    },
    {
      "keyword": "BGP_ADJCHANGE",
      "rect": {
        "x": 76.125,
        "y": 50,
        "w": 14.75,
        "h": 14.0
      }
    },
    {
      "keyword": "BGP_ADJCHANGE",
      "rect": {
        "x": 76.125,
        "y": 50,
        "w": 14.75,
        "h": 14.0
      }
    },
    {
      "keyword": "BGP_ADJCHANGE",
      "rect": {
        "x": 76.125,
        "y": 50,
        "w": 14.75,
        "h": 14.0
      }
    },
    {
      "keyword": "BGP_ADJCHANGE",
      "rect": {
        "x": 76.125,
        "y": 50,
        "w": 14.75,
        "h": 14.0
      }
    }
  ],
  "587": [
    {
      "keyword": "10.1.7.6",
      "rect": {
        "x": 16.0,
        "y": 59.25,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.1.7.6",
      "rect": {
        "x": 16.0,
        "y": 31.75,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "255.255.255.255",
      "rect": {
        "x": 31.25,
        "y": 50,
        "w": 14.0,
        "h": 2.0
      }
    }
  ],
  "589": [
    {
      "keyword": "ipv6 dhcp pool MY_POOL",
      "rect": {
        "x": 39.0,
        "y": 65,
        "w": 21.125,
        "h": 17.0
      }
    },
    {
      "keyword": "R1 (DHCP Server)",
      "rect": {
        "x": 38.0,
        "y": 44.75,
        "w": 15.375,
        "h": 17.0
      }
    },
    {
      "keyword": "ipv6 dhcp server MY_POOL",
      "rect": {
        "x": 39.0,
        "y": 65,
        "w": 21.125,
        "h": 17.0
      }
    }
  ],
  "591": [
    {
      "keyword": "privilege 15",
      "rect": {
        "x": 30.0,
        "y": 18.0,
        "w": 10.0,
        "h": 4.0
      }
    }
  ],
  "592": [
    {
      "keyword": "32 mtu 1532",
      "rect": {
        "x": 15.0,
        "y": 36.25,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "52 mtu 1500",
      "rect": {
        "x": 15.0,
        "y": 56.25,
        "w": 10.0,
        "h": 2.0
      }
    }
  ],
  "593": [
    {
      "keyword": "access-list 4",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 14.875,
        "h": 20
      }
    },
    {
      "keyword": "20 deny ip any any (95 matches)",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "10 permit 172.16.4.4 any (95 matches)",
      "rect": {
        "x": 57.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "594": [
    {
      "keyword": "Data center",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 12.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.10.1",
      "rect": {
        "x": 87.0,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    },
    {
      "keyword": "GigabitEthernet 2/0",
      "rect": {
        "x": 48.0,
        "y": 55.0,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "ip flow egress",
      "rect": {
        "x": 48.0,
        "y": 57.0,
        "w": 12.0,
        "h": 2.0
      }
    }
  ],
  "598": [
    {
      "keyword": "received bad AUTHEN packet: length = 6, expected 43974",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Invalid AUTHEN packet (check keys).",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "599": [
    {
      "keyword": "Console logging: level debugging,",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 30.0,
        "h": 3.0
      }
    },
    {
      "keyword": "filtering disabled",
      "rect": {
        "x": 32.875,
        "y": 50,
        "w": 14.0,
        "h": 3.0
      }
    }
  ],
  "601": [
    {
      "keyword": "R1",
      "rect": {
        "x": 36.0,
        "y": 46.0,
        "w": 3.0,
        "h": 2.0
      }
    },
    {
      "keyword": "E0/0",
      "rect": {
        "x": 36.0,
        "y": 53.0,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "DWDM",
      "rect": {
        "x": 47.0,
        "y": 53.0,
        "w": 5.0,
        "h": 2.0
      }
    },
    {
      "keyword": "VRF CCNP",
      "rect": {
        "x": 13.0,
        "y": 30.0,
        "w": 12.0,
        "h": 3.0
      }
    },
    {
      "keyword": "VRF CCNA",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 12.0,
        "h": 3.0
      }
    }
  ],
  "602": [
    {
      "keyword": "AS 100",
      "rect": {
        "x": 29.125,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "Customer B",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 14.75,
        "h": 20
      }
    }
  ],
  "603": [
    {
      "keyword": "Area 1",
      "rect": {
        "x": 24.875,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    },
    {
      "keyword": "Area 0",
      "rect": {
        "x": 86.0,
        "y": 50,
        "w": 40,
        "h": 18.0
      }
    },
    {
      "keyword": "10.10.10.0/24",
      "rect": {
        "x": 32.5,
        "y": 50,
        "w": 16.25,
        "h": 20.0
      }
    },
    {
      "keyword": "10.10.20.0/24",
      "rect": {
        "x": 32.5,
        "y": 50,
        "w": 16.25,
        "h": 20.0
      }
    }
  ],
  "604": [
    {
      "keyword": "R2",
      "rect": {
        "x": 17.0,
        "y": 53.0,
        "w": 5.0,
        "h": 4.0
      }
    },
    {
      "keyword": "R4",
      "rect": {
        "x": 33.0,
        "y": 11.0,
        "w": 5.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Server 1",
      "rect": {
        "x": 89.0,
        "y": 25.0,
        "w": 9.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.71.2.100",
      "rect": {
        "x": 87.0,
        "y": 42.0,
        "w": 12.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.29.89.0/30",
      "rect": {
        "x": 53.0,
        "y": 23.0,
        "w": 11.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.1.95.0/30",
      "rect": {
        "x": 33.0,
        "y": 65,
        "w": 11.0,
        "h": 2.0
      }
    }
  ],
  "606": [
    {
      "keyword": "AS 1000",
      "rect": {
        "x": 83.375,
        "y": 26.25,
        "w": 13.375,
        "h": 20
      }
    },
    {
      "keyword": "IGP - EIGRP 1000",
      "rect": {
        "x": 51.125,
        "y": 50.74999999999999,
        "w": 24.875,
        "h": 20
      }
    },
    {
      "keyword": "AS 400",
      "rect": {
        "x": 25.374999999999996,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "AS 700",
      "rect": {
        "x": 89.75,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "607": [
    {
      "keyword": "R2",
      "rect": {
        "x": 51.0,
        "y": 50,
        "w": 4.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.10.10.2",
      "rect": {
        "x": 51.0,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.10.10.5",
      "rect": {
        "x": 31.75,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "loopback 0",
      "rect": {
        "x": 31.75,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "BGP 65101",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    }
  ],
  "608": [
    {
      "keyword": "OSPF 10",
      "rect": {
        "x": 83.5,
        "y": 37.0,
        "w": 13.750000000000002,
        "h": 20
      }
    },
    {
      "keyword": "EIGRP 100",
      "rect": {
        "x": 19.75,
        "y": 37.0,
        "w": 13.750000000000002,
        "h": 20
      }
    },
    {
      "keyword": "router ospf 1",
      "rect": {
        "x": 21.0,
        "y": 50,
        "w": 16.25,
        "h": 19.0
      }
    },
    {
      "keyword": "network 10.2.2.1 0.0.0.0 area 0",
      "rect": {
        "x": 21.0,
        "y": 50,
        "w": 40,
        "h": 19.0
      }
    },
    {
      "keyword": "router eigrp 100",
      "rect": {
        "x": 21.0,
        "y": 50,
        "w": 19.875,
        "h": 19.0
      }
    },
    {
      "keyword": "network 10.0.0.0",
      "rect": {
        "x": 21.0,
        "y": 50,
        "w": 19.875,
        "h": 19.0
      }
    },
    {
      "keyword": "interface FastEthernet1/0",
      "rect": {
        "x": 21.0,
        "y": 50,
        "w": 27.375,
        "h": 19.0
      }
    },
    {
      "keyword": "ip address 10.2.2.1 255.255.255.0",
      "rect": {
        "x": 21.0,
        "y": 50,
        "w": 40,
        "h": 19.0
      }
    }
  ],
  "610": [
    {
      "keyword": "Host1: 10.10.10.11",
      "rect": {
        "x": 31.0,
        "y": 50,
        "w": 17.0,
        "h": 3.0
      }
    },
    {
      "keyword": "FTP1 10.10.100.11",
      "rect": {
        "x": 84.0,
        "y": 50,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "FTP2 10.10.200.22",
      "rect": {
        "x": 1.0,
        "y": 50,
        "w": 15.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Host2: 10.10.10.22",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 17.0,
        "h": 3.0
      }
    }
  ],
  "611": [
    {
      "keyword": "192.168.2.0/24",
      "rect": {
        "x": 83.0,
        "y": 50,
        "w": 13.0,
        "h": 2.0
      }
    },
    {
      "keyword": "172.16.2.32/28",
      "rect": {
        "x": 83.0,
        "y": 55.75,
        "w": 13.0,
        "h": 2.0
      }
    },
    {
      "keyword": "redistribute rip",
      "rect": {
        "x": 80.625,
        "y": 58.25,
        "w": 13.0,
        "h": 2.0
      }
    },
    {
      "keyword": "default-metric",
      "rect": {
        "x": 80.625,
        "y": 50,
        "w": 13.0,
        "h": 2.0
      }
    }
  ],
  "612": [
    {
      "keyword": "AREA 5",
      "rect": {
        "x": 63.375,
        "y": 27.0,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "10.1.9.0/30",
      "rect": {
        "x": 61.0,
        "y": 32.5,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "10.8.2.0/30",
      "rect": {
        "x": 48.0,
        "y": 61.75000000000001,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "AREA 7",
      "rect": {
        "x": 48.0,
        "y": 56.75,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "10.8.2.0/30",
      "rect": {
        "x": 48.0,
        "y": 61.75000000000001,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "AREA 2",
      "rect": {
        "x": 51.74999999999999,
        "y": 50,
        "w": 40,
        "h": 14.0
      }
    }
  ],
  "613": [
    {
      "keyword": "track 14 list boolean and",
      "rect": {
        "x": 1.0,
        "y": 50,
        "w": 29.25,
        "h": 20
      }
    },
    {
      "keyword": "object 11",
      "rect": {
        "x": 1.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "object 12",
      "rect": {
        "x": 1.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "object 13",
      "rect": {
        "x": 1.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "614": [
    {
      "keyword": "neighbor R2 peer-group",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 26.125,
        "h": 20
      }
    },
    {
      "keyword": "neighbor R4 peer-group",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 26.125,
        "h": 20
      }
    },
    {
      "keyword": "neighbor 10.1.1.2 remote-as 65001",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "neighbor 10.1.1.14 remote-as 65001",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "615": [
    {
      "keyword": "Running Config (338 Lines) - January 07, 2022 05:14 AM",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "Running Config (342 Lines) - January 07, 2022 05:27 AM",
      "rect": {
        "x": 68.75,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "Out Of Sync",
      "rect": {
        "x": 29.625,
        "y": 60.5,
        "w": 40,
        "h": 20.0
      }
    }
  ],
  "616": [
    {
      "keyword": "NetFlow Version 5",
      "rect": {
        "x": 64.875,
        "y": 31.75,
        "w": 18.625,
        "h": 19.0
      }
    },
    {
      "keyword": "netflow-v9",
      "rect": {
        "x": 93.75,
        "y": 31.75,
        "w": 40,
        "h": 19.0
      }
    }
  ],
  "617": [
    {
      "keyword": "R1 (config-if)#ip address 10.10.10.10 255.255.255.252",
      "rect": {
        "x": 14.0,
        "y": 36.75,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R2 (config-if)#ip address 10.10.10.11 255.255.255.252",
      "rect": {
        "x": 14.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "618": [
    {
      "keyword": "% telnet connections not permitted from this terminal",
      "rect": {
        "x": 10.0,
        "y": 22.0,
        "w": 40,
        "h": 10.0
      }
    },
    {
      "keyword": "% ssh connections not permitted from this terminal",
      "rect": {
        "x": 10.0,
        "y": 60.0,
        "w": 40,
        "h": 10.0
      }
    }
  ],
  "619": [
    {
      "keyword": "172.16.192.0/18",
      "rect": {
        "x": 47.25,
        "y": 39.0,
        "w": 13.125,
        "h": 16.0
      }
    },
    {
      "keyword": "192.168.2.0/24",
      "rect": {
        "x": 81.0,
        "y": 59.25,
        "w": 13.125,
        "h": 16.0
      }
    },
    {
      "keyword": "Network Type BROADCAST",
      "rect": {
        "x": 60.0,
        "y": 50,
        "w": 21.875,
        "h": 15.0
      }
    },
    {
      "keyword": "172.16.192.2/24",
      "rect": {
        "x": 60.0,
        "y": 50,
        "w": 14.625,
        "h": 15.0
      }
    }
  ],
  "620": [
    {
      "keyword": "ip sla 1",
      "rect": {
        "x": 16.0,
        "y": 38.5,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "timeout 1000",
      "rect": {
        "x": 38.0,
        "y": 57.25,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "threshold 1000",
      "rect": {
        "x": 38.0,
        "y": 65.0,
        "w": 14.625,
        "h": 20.0
      }
    },
    {
      "keyword": "frequency 30",
      "rect": {
        "x": 38.0,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "track 1 ip sla 1 reachability",
      "rect": {
        "x": 38.0,
        "y": 50,
        "w": 32.5,
        "h": 20.0
      }
    }
  ],
  "621": [
    {
      "keyword": "Area - 110",
      "rect": {
        "x": 63.5,
        "y": 50,
        "w": 15.0,
        "h": 20
      }
    },
    {
      "keyword": "R1 S0/0",
      "rect": {
        "x": 38.625,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "R2 S0/0",
      "rect": {
        "x": 77.375,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Area - 0",
      "rect": {
        "x": 22.375,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Area - 0",
      "rect": {
        "x": 84.25,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "622": [
    {
      "keyword": "redistribute static",
      "rect": {
        "x": 44.0,
        "y": 50,
        "w": 21.0,
        "h": 19.0
      }
    },
    {
      "keyword": "10.0.0.0/8 is variably subnetted, 6 subnets, 2 masks",
      "rect": {
        "x": 13.125,
        "y": 48.0,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "% Subnet not in table",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 25.874999999999996,
        "h": 19.0
      }
    }
  ],
  "623": [
    {
      "keyword": "router bgp 64512",
      "rect": {
        "x": 10.0,
        "y": 42.0,
        "w": 17.25,
        "h": 20
      }
    },
    {
      "keyword": "neighbor 10.1.1.1 remote-as 1",
      "rect": {
        "x": 10.0,
        "y": 48.5,
        "w": 30.875000000000004,
        "h": 20
      }
    },
    {
      "keyword": "route-map COMM permit 10",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 26.75,
        "h": 20
      }
    },
    {
      "keyword": "set community 64512:600",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 26.75,
        "h": 20
      }
    },
    {
      "keyword": "Community 64512:600",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 21.25,
        "h": 20
      }
    }
  ],
  "625": [
    {
      "keyword": "VLAN100",
      "rect": {
        "x": 18.0,
        "y": 50,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "VLAN200",
      "rect": {
        "x": 57.0,
        "y": 47.0,
        "w": 11.0,
        "h": 4.0
      }
    }
  ],
  "626": [
    {
      "keyword": "EIGRP AS100",
      "rect": {
        "x": 18.125,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "router bgp 65500",
      "rect": {
        "x": 69.625,
        "y": 50,
        "w": 17.5,
        "h": 20.0
      }
    },
    {
      "keyword": "OSPF Area0",
      "rect": {
        "x": 29.375,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "redistribute",
      "rect": {
        "x": 69.625,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "external",
      "rect": {
        "x": 71.25,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    }
  ],
  "629": [
    {
      "keyword": "10.0.250.0 /30",
      "rect": {
        "x": 41.0,
        "y": 38.0,
        "w": 14.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10 Mbps",
      "rect": {
        "x": 41.0,
        "y": 41.0,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "2 Mbps",
      "rect": {
        "x": 57.0,
        "y": 47.0,
        "w": 5.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.0.0.0 /30",
      "rect": {
        "x": 57.0,
        "y": 60.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.0.1.3",
      "rect": {
        "x": 86.0,
        "y": 60.0,
        "w": 7.0,
        "h": 2.0
      }
    },
    {
      "keyword": "10.0.0.2",
      "rect": {
        "x": 48.0,
        "y": 50,
        "w": 7.0,
        "h": 2.0
      }
    }
  ],
  "631": [
    {
      "keyword": "AREA 7",
      "rect": {
        "x": 53.0,
        "y": 43.5,
        "w": 40,
        "h": 14.0
      }
    },
    {
      "keyword": "EIGRP 10",
      "rect": {
        "x": 66.25,
        "y": 58.0,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "10.8.2.0/30",
      "rect": {
        "x": 53.25,
        "y": 50.0,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "10.1.9.0/30",
      "rect": {
        "x": 66.25,
        "y": 26.0,
        "w": 40,
        "h": 15.0
      }
    }
  ],
  "632": [
    {
      "keyword": "neighbor 192.168.200.6 remote-as 100",
      "rect": {
        "x": 16.0,
        "y": 46.5,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "neighbor 192.168.200.6 update-source Loopback0",
      "rect": {
        "x": 16.0,
        "y": 53.25,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "BGP state = Idle",
      "rect": {
        "x": 24.0,
        "y": 50,
        "w": 22.0,
        "h": 20.0
      }
    },
    {
      "keyword": "remote AS 100, external link",
      "rect": {
        "x": 53.75,
        "y": 50,
        "w": 34.0,
        "h": 20.0
      }
    }
  ],
  "633": [
    {
      "keyword": "ip summary-address EIGRP 1 172.18.80.0 255.255.240.0",
      "rect": {
        "x": 22.0,
        "y": 44.75,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "172.18.99.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 14.0,
        "h": 14.0
      }
    },
    {
      "keyword": "172.18.97.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 14.0,
        "h": 14.0
      }
    },
    {
      "keyword": "172.18.79.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 14.0,
        "h": 14.0
      }
    },
    {
      "keyword": "172.18.70.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 14.0,
        "h": 14.0
      }
    },
    {
      "keyword": "172.18.103.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 15.0,
        "h": 14.0
      }
    },
    {
      "keyword": "172.18.76.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 14.0,
        "h": 14.0
      }
    },
    {
      "keyword": "172.18.98.0/24",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 14.0,
        "h": 14.0
      }
    }
  ],
  "634": [
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 15.0,
        "y": 30.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.2",
      "rect": {
        "x": 58.12500000000001,
        "y": 30.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.15.1.100",
      "rect": {
        "x": 70.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "server 172.20.32.1",
      "rect": {
        "x": 47.5,
        "y": 50,
        "w": 15.0,
        "h": 3.0
      }
    }
  ],
  "635": [
    {
      "keyword": "AS100",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "AS 200",
      "rect": {
        "x": 77.0,
        "y": 50,
        "w": 10.0,
        "h": 4.0
      }
    }
  ],
  "636": [
    {
      "keyword": "Area-55",
      "rect": {
        "x": 35.0,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "Area-9",
      "rect": {
        "x": 80.875,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "Area-0",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "SW-1",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 40,
        "h": 20.0
      }
    },
    {
      "keyword": "1.11.1.1/32",
      "rect": {
        "x": 71.25,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    },
    {
      "keyword": "1.12.1.1/32",
      "rect": {
        "x": 61.25000000000001,
        "y": 50,
        "w": 40,
        "h": 15.0
      }
    }
  ],
  "637": [
    {
      "keyword": "timeout is 2 seconds",
      "rect": {
        "x": 50.0,
        "y": 32.0,
        "w": 26.0,
        "h": 4.0
      }
    },
    {
      "keyword": "timed out",
      "rect": {
        "x": 10.0,
        "y": 60.0,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "timed out",
      "rect": {
        "x": 10.0,
        "y": 65.0,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "timed out",
      "rect": {
        "x": 10.0,
        "y": 65,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Success rate is 40 percent",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 26.0,
        "h": 4.0
      }
    }
  ],
  "638": [
    {
      "keyword": "DSW1",
      "rect": {
        "x": 49.0,
        "y": 23.0,
        "w": 10.0,
        "h": 5.0
      }
    },
    {
      "keyword": "ALS1",
      "rect": {
        "x": 13.0,
        "y": 43.0,
        "w": 7.0,
        "h": 4.0
      }
    },
    {
      "keyword": "2002:404:404::404:404",
      "rect": {
        "x": 14.0,
        "y": 43.5,
        "w": 20.0,
        "h": 2.0
      }
    },
    {
      "keyword": "GigabitEthernet1/2",
      "rect": {
        "x": 50.0,
        "y": 43.5,
        "w": 14.0,
        "h": 2.0
      }
    }
  ],
  "640": [
    {
      "keyword": "ip verify unicast source reachable-via rx",
      "rect": {
        "x": 17.0,
        "y": 53.5,
        "w": 30.0,
        "h": 3.0
      }
    },
    {
      "keyword": "ip verify unicast source reachable-via rx",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 30.0,
        "h": 3.0
      }
    },
    {
      "keyword": "access-list 100 permit ip any any",
      "rect": {
        "x": 17.0,
        "y": 65,
        "w": 26.0,
        "h": 3.0
      }
    },
    {
      "keyword": "access-list 100 deny icmp any any echo-reply",
      "rect": {
        "x": 17.0,
        "y": 49.0,
        "w": 37.0,
        "h": 3.0
      }
    }
  ],
  "641": [
    {
      "keyword": "RADIUS Server",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 18.75,
        "h": 20
      }
    },
    {
      "keyword": "192.168.5.10",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 18.75,
        "h": 20
      }
    },
    {
      "keyword": "radius-server host 192.168.5.10",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 37.5,
        "h": 20
      }
    },
    {
      "keyword": "radius-server key 0 PlcX54$VgQ",
      "rect": {
        "x": 55.0,
        "y": 50,
        "w": 37.5,
        "h": 20
      }
    }
  ],
  "642": [
    {
      "keyword": "100.1.1.1",
      "rect": {
        "x": 84.0,
        "y": 51.5,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Loopback0",
      "rect": {
        "x": 68.75,
        "y": 51.5,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.1.1.8/30",
      "rect": {
        "x": 84.0,
        "y": 50,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.1.1.12/30",
      "rect": {
        "x": 84.0,
        "y": 50,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.1.1.4/30",
      "rect": {
        "x": 84.0,
        "y": 50,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.100.1.50/32",
      "rect": {
        "x": 84.0,
        "y": 50,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Loopback50",
      "rect": {
        "x": 68.75,
        "y": 50,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.100.1.30/32",
      "rect": {
        "x": 84.0,
        "y": 50,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Loopback30",
      "rect": {
        "x": 68.75,
        "y": 50,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.200.1.0/24",
      "rect": {
        "x": 84.0,
        "y": 50,
        "w": 11.0,
        "h": 3.0
      }
    },
    {
      "keyword": "FastEthernet0/1",
      "rect": {
        "x": 68.75,
        "y": 50,
        "w": 14.0,
        "h": 3.0
      }
    }
  ],
  "645": [
    {
      "keyword": "R1",
      "rect": {
        "x": 75.0,
        "y": 50,
        "w": 5.0,
        "h": 5.0
      }
    },
    {
      "keyword": "R2",
      "rect": {
        "x": 27.0,
        "y": 50,
        "w": 5.0,
        "h": 5.0
      }
    },
    {
      "keyword": "R4",
      "rect": {
        "x": 75.0,
        "y": 50,
        "w": 5.0,
        "h": 5.0
      }
    },
    {
      "keyword": "BGP AS 100",
      "rect": {
        "x": 56.0,
        "y": 50,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "BGP AS 200",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "OSPFv3 IPv6",
      "rect": {
        "x": 56.0,
        "y": 50,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "OSPFv3 IPv6",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "BGP AS300",
      "rect": {
        "x": 69.5,
        "y": 65,
        "w": 13.0,
        "h": 4.0
      }
    },
    {
      "keyword": "OSPFv3 IPv6",
      "rect": {
        "x": 69.5,
        "y": 50,
        "w": 13.0,
        "h": 4.0
      }
    }
  ],
  "647": [
    {
      "keyword": "ip nhrp map multicast 192.168.200.1",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ip nhrp map 172.23.5.1 192.168.200.1",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "ip address 172.23.5.10 255.255.255.0",
      "rect": {
        "x": 49.0,
        "y": 36.25,
        "w": 40,
        "h": 20
      }
    }
  ],
  "648": [
    {
      "keyword": "Tunnel: 10.0.0.1",
      "rect": {
        "x": 15.0,
        "y": 57.99999999999999,
        "w": 14.875,
        "h": 20
      }
    },
    {
      "keyword": "Tunnel: 10.0.0.2",
      "rect": {
        "x": 85.875,
        "y": 50,
        "w": 14.875,
        "h": 20
      }
    },
    {
      "keyword": "Tunnel: 10.0.0.254",
      "rect": {
        "x": 19.25,
        "y": 51.0,
        "w": 17.875,
        "h": 20
      }
    },
    {
      "keyword": "192.168.200.0/24",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 19.625,
        "h": 20
      }
    },
    {
      "keyword": "192.168.201.0/24",
      "rect": {
        "x": 69.75,
        "y": 50,
        "w": 19.625,
        "h": 20
      }
    },
    {
      "keyword": "192.168.254.0/24",
      "rect": {
        "x": 49.0,
        "y": 38.0,
        "w": 19.625,
        "h": 20
      }
    }
  ],
  "649": [
    {
      "keyword": "192.168.1.0/24",
      "rect": {
        "x": 42.0,
        "y": 50,
        "w": 18.625,
        "h": 20
      }
    },
    {
      "keyword": "10.0.1.0/30",
      "rect": {
        "x": 41.75,
        "y": 41.0,
        "w": 17.125,
        "h": 20
      }
    },
    {
      "keyword": "10.0.1.2",
      "rect": {
        "x": 46.25,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "Router C",
      "rect": {
        "x": 79.625,
        "y": 24.0,
        "w": 40,
        "h": 20
      }
    }
  ],
  "650": [
    {
      "keyword": "default-information originate",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 29.125,
        "h": 20
      }
    },
    {
      "keyword": "address-family ipv6 unicast",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 31.125000000000004,
        "h": 20
      }
    },
    {
      "keyword": "Route not found",
      "rect": {
        "x": 70.625,
        "y": 50,
        "w": 17.125,
        "h": 20
      }
    }
  ],
  "651": [
    {
      "keyword": "variance 2",
      "rect": {
        "x": 10.0,
        "y": 37.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.4.1.5 (Ethernet1/0)",
      "rect": {
        "x": 44.0,
        "y": 61.25000000000001,
        "w": 22.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Total delay is 6000 microseconds",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 25.0,
        "h": 3.0
      }
    },
    {
      "keyword": "10.3.1.6 (Serial2/0)",
      "rect": {
        "x": 44.0,
        "y": 50,
        "w": 22.0,
        "h": 3.0
      }
    },
    {
      "keyword": "Total delay is 7000 microseconds",
      "rect": {
        "x": 15.0,
        "y": 50,
        "w": 25.0,
        "h": 3.0
      }
    }
  ],
  "652": [
    {
      "keyword": "Underlay Network",
      "rect": {
        "x": 57.0,
        "y": 41.0,
        "w": 25.0,
        "h": 4.0
      }
    },
    {
      "keyword": "INTERNET Tunnel 200",
      "rect": {
        "x": 40.0,
        "y": 46.0,
        "w": 20.0,
        "h": 6.0
      }
    }
  ],
  "654": [
    {
      "keyword": "route-map ospf-to-eigrp deny 10",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "match tag 6",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 18.75,
        "h": 20
      }
    },
    {
      "keyword": "route-map ospf-to-eigrp permit 30",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "set tag 8",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 18.75,
        "h": 20
      }
    }
  ],
  "656": [
    {
      "keyword": "neighbor 1.1.1.1 route-map R1 in",
      "rect": {
        "x": 35.0,
        "y": 54.0,
        "w": 30.0,
        "h": 4.0
      }
    },
    {
      "keyword": "neighbor 2.2.2.2 route-map R2 in",
      "rect": {
        "x": 35.0,
        "y": 65,
        "w": 30.0,
        "h": 4.0
      }
    }
  ],
  "658": [
    {
      "keyword": "default information originate",
      "rect": {
        "x": 74.875,
        "y": 44.5,
        "w": 26.0,
        "h": 17.0
      }
    },
    {
      "keyword": "ip route 0.0.0.0 0.0.0.0 199.54.123.13",
      "rect": {
        "x": 74.875,
        "y": 58.5,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "area 10 stub",
      "rect": {
        "x": 75.0,
        "y": 50,
        "w": 14.875,
        "h": 17.0
      }
    }
  ],
  "661": [
    {
      "keyword": "ip as-path access-list 1 deny 65412_$",
      "rect": {
        "x": 28.0,
        "y": 50,
        "w": 40.0,
        "h": 4.0
      }
    },
    {
      "keyword": "ip as-path access-list 1 permit .*",
      "rect": {
        "x": 28.0,
        "y": 25.75,
        "w": 35.0,
        "h": 4.0
      }
    },
    {
      "keyword": "64570 65412 i",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 12.0,
        "h": 2.0
      }
    }
  ],
  "662": [
    {
      "keyword": "Excessive time lag between Cisco DNA Center and device \"SW1.ap.com\"",
      "rect": {
        "x": 15.0,
        "y": 40.5,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "The time on Cisco DNA Center and Device \"SW1.ap.com\" has drifted too far apart.",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "Last Occurred: Jan 12, 2022 2:42 AM",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 31.0,
        "h": 20
      }
    }
  ],
  "663": [
    {
      "keyword": "10.0.0.0/8",
      "rect": {
        "x": 16.0,
        "y": 57.0,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "auto-summary",
      "rect": {
        "x": 26.0,
        "y": 57.0,
        "w": 15.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.1.1.0/24",
      "rect": {
        "x": 16.0,
        "y": 65,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "directly connected",
      "rect": {
        "x": 26.0,
        "y": 65,
        "w": 17.0,
        "h": 4.0
      }
    },
    {
      "keyword": "GigabitEthernet0/0",
      "rect": {
        "x": 65.0,
        "y": 65,
        "w": 20.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.1.3.0/24",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "[2] via 10.1.12.2",
      "rect": {
        "x": 16.0,
        "y": 50,
        "w": 18.0,
        "h": 4.0
      }
    },
    {
      "keyword": "GigabitEthernet1/0",
      "rect": {
        "x": 65.0,
        "y": 50,
        "w": 20.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.1.12.0/24",
      "rect": {
        "x": 16.0,
        "y": 26.75,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "directly connected",
      "rect": {
        "x": 26.0,
        "y": 26.75,
        "w": 17.0,
        "h": 4.0
      }
    },
    {
      "keyword": "GigabitEthernet1/0",
      "rect": {
        "x": 65.0,
        "y": 26.75,
        "w": 20.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.1.23.0/24",
      "rect": {
        "x": 16.0,
        "y": 29.75,
        "w": 11.0,
        "h": 4.0
      }
    },
    {
      "keyword": "[1] via 10.1.12.2",
      "rect": {
        "x": 16.0,
        "y": 32.75,
        "w": 18.0,
        "h": 4.0
      }
    },
    {
      "keyword": "GigabitEthernet1/0",
      "rect": {
        "x": 65.0,
        "y": 32.75,
        "w": 20.0,
        "h": 4.0
      }
    }
  ],
  "665": [
    {
      "keyword": "flow exporter EXPORTER-1",
      "rect": {
        "x": 36.0,
        "y": 16.0,
        "w": 33.0,
        "h": 4.0
      }
    },
    {
      "keyword": "flow monitor FLOW-MONITOR-1",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 37.0,
        "h": 4.0
      }
    },
    {
      "keyword": "ip flow monitor FLOW-MONITOR-1 input",
      "rect": {
        "x": 36.0,
        "y": 50,
        "w": 40,
        "h": 4.0
      }
    }
  ],
  "668": [
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 13.0,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 13.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 13.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 20.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 20.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 27.0,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 27.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 27.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 33.0,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 33.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 33.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 40.0,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 40.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 40.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 47.0,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 47.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 47.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 53.0,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 53.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 53.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 60.0,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 60.0,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 60.0,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 65,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 65,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 65,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 8.0,
        "h": 3.0
      }
    },
    {
      "keyword": "GigaEthernet0/0",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 13.0,
        "h": 3.0
      }
    },
    {
      "keyword": "172.17.132.95",
      "rect": {
        "x": 26.0,
        "y": 50,
        "w": 10.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 50.0,
        "y": 50,
        "w": 8.0,
        "h": 3.0
      }
    }
  ],
  "669": [
    {
      "keyword": "interface Loopback0",
      "rect": {
        "x": 13.0,
        "y": 36.0,
        "w": 20.0,
        "h": 4.0
      }
    },
    {
      "keyword": "ip address 100.1.1.1 255.255.255.255",
      "rect": {
        "x": 13.0,
        "y": 55.0,
        "w": 40,
        "h": 4.0
      }
    },
    {
      "keyword": "interface Loopback50",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 20.0,
        "h": 4.0
      }
    },
    {
      "keyword": "ip address 10.100.1.50 255.255.255.255",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 40,
        "h": 4.0
      }
    },
    {
      "keyword": "ip summary-address eigrp 100 10.100.1.0 255.255.255.0",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 40,
        "h": 4.0
      }
    },
    {
      "keyword": "router eigrp 100",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 19.0,
        "h": 4.0
      }
    },
    {
      "keyword": "network 10.1.1.0 0.0.0.3",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 25.0,
        "h": 4.0
      }
    }
  ],
  "670": [
    {
      "keyword": "EIGRP CCNP Authentication password CCNP",
      "rect": {
        "x": 35.75,
        "y": 58.5,
        "w": 21.25,
        "h": 20
      }
    },
    {
      "keyword": "192.168.168.0/24",
      "rect": {
        "x": 18.625,
        "y": 65,
        "w": 14.374999999999998,
        "h": 19.0
      }
    },
    {
      "keyword": "S0/0/0",
      "rect": {
        "x": 18.875,
        "y": 50,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "Net 196.1.0.0/24",
      "rect": {
        "x": 64.625,
        "y": 50.0,
        "w": 14.75,
        "h": 19.0
      }
    },
    {
      "keyword": "S0/0/0",
      "rect": {
        "x": 64.625,
        "y": 57.25,
        "w": 40,
        "h": 17.0
      }
    }
  ],
  "671": [
    {
      "keyword": "Company A",
      "rect": {
        "x": 17.0,
        "y": 56.49999999999999,
        "w": 13.625000000000002,
        "h": 20
      }
    },
    {
      "keyword": "GigabitEthernet 0/0",
      "rect": {
        "x": 48.625,
        "y": 50,
        "w": 21.5,
        "h": 17.0
      }
    },
    {
      "keyword": "ip vrf forwarding CompanyA",
      "rect": {
        "x": 23.0,
        "y": 50,
        "w": 39.5,
        "h": 20.0
      }
    },
    {
      "keyword": "172.16.1.3",
      "rect": {
        "x": 58.75,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    }
  ],
  "673": [
    {
      "keyword": "router-id 10.1.1.1",
      "rect": {
        "x": 19.0,
        "y": 50,
        "w": 20.5,
        "h": 20
      }
    },
    {
      "keyword": "router-id is 10.1.1.1",
      "rect": {
        "x": 17.75,
        "y": 50,
        "w": 23.875,
        "h": 20
      }
    }
  ],
  "674": [
    {
      "keyword": "OSPF",
      "rect": {
        "x": 29.125,
        "y": 50,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "EIGRP",
      "rect": {
        "x": 95,
        "y": 47.0,
        "w": 40,
        "h": 16.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 18.625,
        "y": 54.25,
        "w": 27.0,
        "h": 20.0
      }
    },
    {
      "keyword": "172.16.1.16 / 28",
      "rect": {
        "x": 49.0,
        "y": 50,
        "w": 18.625,
        "h": 17.0
      }
    },
    {
      "keyword": "172.16.2.32 / 28",
      "rect": {
        "x": 95,
        "y": 50,
        "w": 18.625,
        "h": 17.0
      }
    }
  ],
  "676": [
    {
      "keyword": "Originator: 3.3.3.3",
      "rect": {
        "x": 65.0,
        "y": 50,
        "w": 27.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Cluster list: 1.1.1.1",
      "rect": {
        "x": 65.0,
        "y": 50,
        "w": 27.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Local",
      "rect": {
        "x": 34.0,
        "y": 48.0,
        "w": 7.0,
        "h": 4.0
      }
    },
    {
      "keyword": "Not advertised to any peer",
      "rect": {
        "x": 34.0,
        "y": 43.0,
        "w": 26.0,
        "h": 4.0
      }
    }
  ],
  "678": [
    {
      "keyword": "172.16.0.0/16 is a summary",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "172.16.160.0/19",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 32.25,
        "h": 20
      }
    },
    {
      "keyword": "172.16.128.0/19",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 32.25,
        "h": 20
      }
    },
    {
      "keyword": "172.16.224.0/19",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 32.25,
        "h": 20
      }
    },
    {
      "keyword": "172.16.192.0/19",
      "rect": {
        "x": 17.0,
        "y": 50,
        "w": 32.25,
        "h": 20
      }
    }
  ],
  "679": [
    {
      "keyword": "route-map PRE-PEND permit 10",
      "rect": {
        "x": 13.0,
        "y": 21.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "match ipv6 address prefix-list PRE-PEND-PREFIX",
      "rect": {
        "x": 13.0,
        "y": 32.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "set as-path prepend 65412",
      "rect": {
        "x": 13.0,
        "y": 43.0,
        "w": 40,
        "h": 6.0
      }
    },
    {
      "keyword": "neighbor 2001:db8:0:20::2 route-map PRE-PEND out",
      "rect": {
        "x": 13.0,
        "y": 50,
        "w": 40,
        "h": 6.0
      }
    }
  ],
  "680": [
    {
      "keyword": "ip vrf forwarding TFTP",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 32.25,
        "h": 20
      }
    },
    {
      "keyword": "interface GigabitEthernet0/0",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    },
    {
      "keyword": "%Error opening tftp",
      "rect": {
        "x": 10.0,
        "y": 50,
        "w": 40,
        "h": 20
      }
    }
  ],
  "681": [
    {
      "keyword": "SP2",
      "rect": {
        "x": 57.0,
        "y": 26.75,
        "w": 10.0,
        "h": 4.0
      }
    },
    {
      "keyword": "10.20.20.1",
      "rect": {
        "x": 84.75,
        "y": 57.75,
        "w": 13.625000000000002,
        "h": 17.0
      }
    },
    {
      "keyword": "R1",
      "rect": {
        "x": 51.87500000000001,
        "y": 50,
        "w": 40.0,
        "h": 20
      }
    }
  ],
  "682": [
    {
      "keyword": "router eigrp 100",
      "rect": {
        "x": 17.0,
        "y": 34.0,
        "w": 17.0,
        "h": 3.0
      }
    },
    {
      "keyword": "redistribute ospf 1 metric 1 1 1 1 1",
      "rect": {
        "x": 17.0,
        "y": 30.75,
        "w": 29.0,
        "h": 3.0
      }
    },
    {
      "keyword": "router eigrp 100",
      "rect": {
        "x": 63.24999999999999,
        "y": 34.0,
        "w": 17.0,
        "h": 3.0
      }
    },
    {
      "keyword": "redistribute ospf 1 metric 1 1 1 1 1",
      "rect": {
        "x": 63.24999999999999,
        "y": 30.75,
        "w": 29.0,
        "h": 3.0
      }
    },
    {
      "keyword": "192.168.5.1",
      "rect": {
        "x": 24.0,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "172.16.3.16",
      "rect": {
        "x": 46.25,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    }
  ],
  "683": [
    {
      "keyword": "192.168.1.1",
      "rect": {
        "x": 13.0,
        "y": 46.0,
        "w": 10.0,
        "h": 2.0
      }
    },
    {
      "keyword": "192.168.1.1/32",
      "rect": {
        "x": 39.0,
        "y": 51.74999999999999,
        "w": 13.0,
        "h": 2.0
      }
    },
    {
      "keyword": "seq 5 deny",
      "rect": {
        "x": 39.0,
        "y": 51.74999999999999,
        "w": 8.0,
        "h": 2.0
      }
    },
    {
      "keyword": "TACACS Server",
      "rect": {
        "x": 48.0,
        "y": 50,
        "w": 10.0,
        "h": 2.0
      }
    }
  ],
  "684": [
    {
      "keyword": "10.10.10.2",
      "rect": {
        "x": 31.125000000000004,
        "y": 44.75,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "10.10.10.3",
      "rect": {
        "x": 74.75,
        "y": 44.75,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "BGP 65101",
      "rect": {
        "x": 13.0,
        "y": 40.0,
        "w": 40,
        "h": 17.0
      }
    },
    {
      "keyword": "BGP 65201",
      "rect": {
        "x": 87.0,
        "y": 40.0,
        "w": 40,
        "h": 17.0
      }
    }
  ]
};

// Function to get annotations for a question
function getImageAnnotations(qId) {
  return imageAnnotations[qId] || [];
}

// Function to display image keywords as text below the image (no highlight boxes)
function displayImageKeywordsBelowImage() {
  // Remove any existing image keyword labels
  const existingLabels = document.querySelectorAll('.image-keyword-label');
  existingLabels.forEach(el => el.remove());
  
  // Get annotations for current question
  const annotations = getImageAnnotations(currentId);
  if (annotations.length === 0) return;
  
  // Find all images in the question area
  const qEl = document.getElementById('qText');
  if (!qEl) return;
  
  const images = qEl.querySelectorAll('img');
  if (images.length === 0) return;

  // For each image, create labels below it
  images.forEach(img => {
    // Get the parent container
    let container = img.parentElement;
    if (!container) return;
    
    // Create a div to hold the keyword labels below the image
    const labelContainer = document.createElement('div');
    labelContainer.className = 'image-keyword-label';
    labelContainer.style.marginTop = '10px';
    labelContainer.style.padding = '8px';
    labelContainer.style.backgroundColor = '#f0f0f0';
    labelContainer.style.borderRadius = '4px';
    labelContainer.style.fontSize = '12px';
    labelContainer.style.color = '#333';
    
    // Add title
    const title = document.createElement('strong');
    title.textContent = 'Image Keywords: ';
    labelContainer.appendChild(title);
    
    // Add each keyword
    annotations.forEach((ann, index) => {
      if (!ann.keyword) return;
      
      const kwSpan = document.createElement('span');
      kwSpan.textContent = ann.keyword;
      kwSpan.style.display = 'inline-block';
      kwSpan.style.margin = '2px 4px';
      kwSpan.style.padding = '2px 6px';
      kwSpan.style.backgroundColor = '#e53e3e';
      kwSpan.style.color = 'white';
      kwSpan.style.borderRadius = '3px';
      kwSpan.style.fontWeight = 'bold';
      
      labelContainer.appendChild(kwSpan);
      
      // Add comma if not last
      if (index < annotations.length - 1) {
        const comma = document.createElement('span');
        comma.textContent = ', ';
        labelContainer.appendChild(comma);
      }
    });
    
    // Insert after the image
    if (img.nextSibling) {
      container.insertBefore(labelContainer, img.nextSibling);
    } else {
      container.appendChild(labelContainer);
    }
  });
}

