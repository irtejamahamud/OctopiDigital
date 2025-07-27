import React, { useState } from "react";
import AddPasswordModal from "./components/AddPasswordModal";
import { useSelector } from "react-redux";
import {
  useGetCredentialsByEmployeeQuery,
  useCreateCredentialMutation,
  useUpdateCredentialMutation,
  useDeleteCredentialMutation,
} from "@/redux/features/passmanager/passmanagerApiSlice";

import Loader from "@/component/Loader";
import ErrorMessage from "@/component/isError";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/component/card";
import { Badge } from "@/component/badge";
import { KeyRound, Lock, Clock3, Shield, Pencil, Trash2 } from "lucide-react";
import { Plus } from "lucide-react";
import Button from "@/component/Button";
import { formatDistanceToNow } from "date-fns";
import EditPasswordModal from "./components/EditPasswordModal";
import DeletePasswordModal from "./components/DeletePasswordModal";
import { toast } from "@/component/Toast";

import PasswordCell from "./components/PasswordCell";

export default function PasswordManager() {
  const user = useSelector((state) => state.userSlice.user);
  const employeeId = user?.user?._id;

  const {
    data: credentials = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetCredentialsByEmployeeQuery(employeeId);

  const [editModal, setEditModal] = useState({ open: false, data: null });
  const [deleteModal, setDeleteModal] = useState({ open: false, data: null });
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [createCredential] = useCreateCredentialMutation();
  const [updateCredential] = useUpdateCredentialMutation();
  const [deleteCredential] = useDeleteCredentialMutation();
  const handleAddPassword = async (formData) => {
    try {
      await createCredential({ ...formData, employeeId }).unwrap();
      toast.success("Added", "Credential added successfully.");
      setAddModalOpen(false);
      refetch();
    } catch (err) {
      toast.error("Error", "Failed to add credential.");
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateCredential({ id, ...updatedData }).unwrap();
      toast.success("Updated", "Credential updated successfully.");
    } catch (err) {
      toast.error("Error", "Failed to update credential.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCredential(id).unwrap();
      toast.success("Deleted", "Credential deleted.");
    } catch (err) {
      toast.error("Error", "Failed to delete credential.");
    }
    setDeleteModal({ open: false, data: null });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <ErrorMessage error={error} refetch={refetch} />;
  }
  console.log("Credentials:", credentials);
  const totalCredentials = credentials.data.length;
  const recentlyAdded = credentials.data[0]?.website || "None";
  const lastUpdated = credentials.data[0]?.updatedAt
    ? formatDistanceToNow(new Date(credentials.data[0].updatedAt), {
        addSuffix: true,
      })
    : "N/A";

  return (
    <div className="max-w-7xl mx-auto p-4 md:pl-24 pb-20 md:pb-4 text-gray-900 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20">
            <KeyRound size={32} className="text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Password Manager</h1>
            <p className="text-sm text-gray-600">
              Manage your saved credentials securely
            </p>
            <Badge variant="outline" className="mt-1">
              {user?.user?.fullName || "Employee"}'s Vault
            </Badge>
          </div>
        </div>
        <Button
          onClick={() => setAddModalOpen(true)}
          variant="primary"
          className="bg-primary hover:bg-primary/90"
        >
          <div className="flex items-center gap-2">
            <Plus size={16} />
            <span>Add Password</span>
          </div>
        </Button>
      </div>
      {/* Add Password Modal */}
      <AddPasswordModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSave={handleAddPassword}
      />

      <div className="grid grid-cols-3 gap-4 mt-6 w-full">
        {/* Total Credentials */}
        <div className="bg-white rounded-xl p-8 shadow-sm border flex flex-col justify-center items-center w-full">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 text-emerald-600 rounded-md p-2">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Total Credentials</div>
              <div className="text-xl font-bold text-gray-900">
                {totalCredentials}
              </div>
            </div>
          </div>
        </div>

        {/* Recently Added */}
        <div className="bg-white rounded-xl p-8 shadow-sm border flex flex-col justify-center items-center w-full">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 rounded-md p-2">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Recently Added</div>
              <div className="text-xl font-bold text-gray-900">
                {recentlyAdded}
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="bg-white rounded-xl p-8 shadow-sm border flex flex-col justify-center items-center w-full">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 text-purple-600 rounded-md p-2">
              <Clock3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Last Updated</div>
              <div className="text-xl font-bold text-gray-900">
                {lastUpdated}
              </div>
            </div>
          </div>
        </div>

        {/* You can add 3 more cards like above if needed to match 6-column layout */}
      </div>

      <Card className="rounded-xl border bg-white shadow-sm">
        <CardHeader className="rounded-tr-xl rounded-tl-xl  px-6 py-4 border-b border-gray-200 cursor-pointer transition-colors bg-gradient-to-r from-[#8A6642]/5 to-[#8A6642]/10 hover:from-[#8A6642]/10 hover:to-[#8A6642]/15">
          <CardTitle className="text-lg font-semibold text-gray-800">
            Saved Credentials
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            List of all websites and login credentials
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          {credentials.data.length > 0 ? (
            <table className="w-full table-auto">
              <thead className="bg-[#FAFAFA] border-t border-b border-gray-200 text-sm text-gray-600 font-semibold">
                <tr>
                  <th className="px-6 py-3 text-left">WEBSITE</th>
                  <th className="px-6 py-3 text-left">EMAIL</th>
                  <th className="px-6 py-3 text-left">ROLE</th>
                  <th className="px-6 py-3 text-left">PASSWORD</th>
                  <th className="px-6 py-3 text-right">ACTIONS</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-sm text-gray-800">
                {credentials.data.map((cred) => (
                  <tr
                    key={cred._id}
                    className="hover:bg-gray-50 transition-all"
                  >
                    {/* Website Avatar + Name */}
                    <td className="px-6 py-4 whitespace-nowrap font-medium flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-semibold text-xs uppercase">
                        {cred.website?.slice(0, 2) || "??"}
                      </div>
                      <span>{cred.website}</span>
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4">{cred.email}</td>

                    {/* Role */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5.121 17.804A3 3 0 007 21h10a3 3 0 001.879-5.196l-1.42-1.418A5 5 0 0016 4h-4a5 5 0 00-4.46 6.39l-1.42 1.418A3 3 0 005.121 17.804z"
                          />
                        </svg>
                        {cred.role}
                      </span>
                    </td>

                    {/* Password */}
                    <td className="px-6 py-4">
                      <PasswordCell password={cred.password} />
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => setEditModal({ open: true, data: cred })}
                        className="text-blue-600 hover:text-blue-800 transition"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() =>
                          setDeleteModal({ open: true, data: cred })
                        }
                        className="text-red-600 hover:text-red-800 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-gray-500 py-10 text-center">
              No credentials saved yet.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modals */}
      <EditPasswordModal
        isOpen={editModal.open}
        onClose={() => setEditModal({ open: false, data: null })}
        onUpdate={handleUpdate}
        credential={editModal.data}
      />

      <DeletePasswordModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, data: null })}
        onDelete={handleDelete}
        credential={deleteModal.data}
      />
    </div>
  );
}

