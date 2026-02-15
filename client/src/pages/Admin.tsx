import { useState } from "react";
import { useLeads } from "@/hooks/use-leads";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowLeft, Download, Search, LayoutDashboard } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { motion } from "framer-motion";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  
  const { data: leads, isLoading, error } = useLeads();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "prawali2026") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const filteredLeads = leads?.filter(lead => 
    lead.name.toLowerCase().includes(search.toLowerCase()) || 
    lead.phone.includes(search) ||
    lead.location.toLowerCase().includes(search.toLowerCase())
  ) || [];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/20 p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-border"
        >
          <div className="text-center mb-6">
            <div className="inline-flex h-12 w-12 bg-primary/10 rounded-xl items-center justify-center text-primary mb-4">
              <LayoutDashboard />
            </div>
            <h1 className="text-2xl font-display font-bold">Admin Access</h1>
            <p className="text-emerald-600 font-bold text-sm mt-1 uppercase tracking-wider">Status: Live - Leads from Punjab & Bihar</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center tracking-widest"
            />
            <Button type="submit" className="w-full eco-gradient text-white">
              Access Dashboard
            </Button>
            <Link href="/" className="block text-center text-sm text-muted-foreground hover:text-primary">
              Return Home
            </Link>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/10">
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="font-display font-bold text-xl">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:inline-block">Logged in as Admin</span>
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
              A
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold font-display">Leads Overview</h2>
            <p className="text-muted-foreground">Manage and track your incoming leads.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" /> Export CSV
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <p className="text-sm text-muted-foreground font-medium">Total Leads</p>
            <p className="text-3xl font-bold text-primary mt-2">{leads?.length || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <p className="text-sm text-muted-foreground font-medium">From Punjab</p>
            <p className="text-3xl font-bold text-accent mt-2">
              {leads?.filter(l => l.location === "Punjab").length || 0}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <p className="text-sm text-muted-foreground font-medium">From Bihar</p>
            <p className="text-3xl font-bold text-blue-500 mt-2">
              {leads?.filter(l => l.location === "Bihar").length || 0}
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-t-xl border border-border border-b-0 p-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by name, phone or location..." 
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-b-xl border border-border overflow-hidden shadow-sm">
          {isLoading ? (
            <div className="p-12 flex justify-center items-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="p-12 text-center text-destructive">
              Failed to load leads. Please try refreshing.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/20 hover:bg-secondary/30">
                  <TableHead className="font-bold">Name</TableHead>
                  <TableHead className="font-bold">Phone</TableHead>
                  <TableHead className="font-bold">Location</TableHead>
                  <TableHead className="font-bold">Source</TableHead>
                  <TableHead className="font-bold">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center h-32 text-muted-foreground">
                      No leads found matching your search.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredLeads.map((lead) => (
                    <TableRow key={lead.id} className="hover:bg-secondary/10">
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell className="font-mono text-sm">{lead.phone}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          lead.location === 'Punjab' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {lead.location}
                        </span>
                      </TableCell>
                      <TableCell className="capitalize text-muted-foreground">{lead.source}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {lead.createdAt ? format(new Date(lead.createdAt), 'PPp') : '-'}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </main>
    </div>
  );
}
